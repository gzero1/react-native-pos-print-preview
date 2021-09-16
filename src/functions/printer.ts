/**
 * This is the main internal module, it's not intended to be accessed but too
 * complex not to be documented.
 *
 * @module Main Parser and Internal Workings
 */

import { RawPOSData, ReactPOSData, RootStyles } from 'src/@types/types';
import { Buffer } from 'buffer';
import iconv from 'iconv-lite';
import { posToReactStyles } from '../common/data/posToReactStyles';

/**
 * @param {Buffer} buffer Buffer of bytes representing a POS style.
 * @returns {RootStyles} A React Native StyleSheet.
 */
export const parseBufferStyle = (buffer: Buffer): RootStyles => {
  const posStyle = iconv.decode(buffer, 'win1251');
  return posToReactStyles[posStyle];
};

/**
 * Transforms POS array of data to object with react-native styles.
 * @param {RawPOSData[]} commandArr An array of POS printer commands (Formatted as `RawPOSData`).
 * @returns {ReactPOSData[]} Array of `ReactPOSData` objects.
 */
export const reactifyCommands = (commandArr: RawPOSData[]): ReactPOSData[] => {
  const styleCommands: RootStyles[][] = commandArr
    // Gets only the styles a.k.a. commands.
    .map((command) => command.cmd)
    // This reducers merge commands until a null object is found
    // Example: ['0x1b', '0x20', null, '0x20', '0x3b' null]
    // gets transformed to
    // [['0x1b', '0x20'], ['0x20', '0x3b']]
    .reduce((previous, current, index) => {
      return current !== null && index > 0
        ? [...previous, [current, previous[index - 1]].flat()]
        : [...previous, null];
    }, [] as ((string | null)[] | null)[])
    .reduce((previous, current, index, array) => {
      return current === null && index > 0
        ? [...previous, array[index - 1]!]
        : [...previous, null];
    }, [] as ((string | null)[] | null)[])
    // The following map and filter just excludes any leftover
    // null value even from a nested array.
    .filter(<T>(command: T | null): command is T => command !== null)
    .map((commands) =>
      commands.filter(<T>(command: T | null): command is T => command !== null)
    )
    // Converts commands such as '0x0A' to React Native stylesheet such as {flex: 1}
    .map((styleArr) =>
      styleArr.map((style) => {
        return parseBufferStyle(
          Buffer.from(style.split(',').map((str) => parseInt(str, 16)))
        );
      })
    );

  // Returns an array of objects with styles and text together
  // that is easily convertable to Text tags.
  // E.g.: [{styles: [{flex: 1}, {marginBottom: 3}], text: 'Hello World!'}]
  return commandArr
    .filter((command) => !!command.prn)
    .map((command, index) => {
      return {
        styles: styleCommands[index],
        text: command.prn!,
      };
    });
};

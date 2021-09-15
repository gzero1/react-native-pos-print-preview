import { RawPOSData, ReactPOSData, RootStyles } from 'src/@types/types';
import { Buffer } from 'buffer';
import iconv from 'iconv-lite';
import { posToReactStyles } from 'src/common/data/posToReactStyles';

/**
 * @param {Buffer} buffer Buffer of bytes representing a POS style.
 * @internal
 */
const parseBufferStyle = (buffer: Buffer): RootStyles => {
  const posStyle = iconv.decode(buffer, 'win1251');
  return posToReactStyles[posStyle];
};

/**
 * Transforms POS array of data to react-stylized object.
 * @param {RawPOSData[]} commandArr An array of POS commands.
 * @returns {}
 */
export const reactifyCommands = (commandArr: RawPOSData[]): ReactPOSData[] => {
  const styleCommands = commandArr
    .map((command) => command.cmd)
    .map((command, index, array) => {
      if (array[index - 1] === null || array[index - 1] === undefined) {
        return null;
      }

      if (command !== null) {
        return ([] as string[]).concat(command, array[index - 1]!).flat();
      }

      return command;
    })
    .filter(<T>(item: T | null): item is T => item !== null);

  return commandArr
    .filter((command) => !!command.prn)
    .map((command, index) => {
      return {
        styles: styleCommands[index].map((POSStyle) =>
          parseBufferStyle(Buffer.from(POSStyle))
        ),
        text: command.prn!,
      };
    });
};

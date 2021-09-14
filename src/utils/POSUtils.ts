import React from 'react';
import { RawPOSData, RootStyles } from 'src/@types/types';
import { Text, View } from 'react-native';
import { Buffer } from 'buffer';
import iconv from 'iconv-lite';
import { posToReactStyles } from 'src/common/data/posToReactStyles';

/**
 * @param {Buffer} buffer Buffer of bytes representing a POS style.
 */
 const parseBufferStyle = (buffer: Buffer): RootStyles => {
  const posStyle = iconv.decode(buffer, 'win1251');
  return posToReactStyles[posStyle];
};


/**
 * @param {RawPOSData} commandArr An array of POS commands.
 */
export const reactifyCommand = (commandArr: RawPOSData[]) => {

  // return commandArr.map(command => {
  //   return {style: {}, }
  // }).reduce((previousArr, currentArr) => {
  //   if (command.prn !== null) {
  //     if (command.prn.match(/^[ ]+/g)) {
  //       elements[elements.length - 1] = (
          
  //           {elements[elements.length - 1]}
  //           <Text style={[...tmpStyles, styles.text]}>{command.prn}</Text>
          
  //       );
  //     } else if (command.prn.match(/^[-]+/g)) {
  //       elements.push(<View style={styles.divider} />);
  //     } else {
  //       elements.push(
  //         <Text
  //           key={`${index}-text-${command.cmd}`}
  //           style={[...tmpStyles, styles.text]}
  //         >
  //           {command.prn}
  //         </Text>
  //       );
  //     }
  //     tmpStyles = [];
  //   } else {
  //     tmpStyles.push(
  //       parseBufferStyle(
  //         Buffer.from(command.cmd!.split(',').map((item) => parseInt(item, 16)))
  //       )
  //     );
  //   }
  // })
};
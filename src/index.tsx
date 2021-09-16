/**
 * @module VirtualPosPreview Component
 */
import React from 'react';
import styles from './styles';
import { ScrollView, Text, View } from 'react-native';

import { VirtualPOSProps } from './@types/types';
import { reactifyCommands } from './functions/printer';

/**
 * React Native component to emulate a POS printer, displaying the
 * to-be-printed values in a native View.
 *
 * Usage:
 * ```ts
 *  const [commands, setCommands] = useState([{cmd: null, prn: 'Hello POS!'}])
 *  ...
 *
 *  return <VirtualPOS data={commands} />
 * ```
 *
 * @component
 * @param props ``VirtualPOSProps`` Data as an array of raw POS commands.
 * @returns ``ReactComponent`` The main react component
 */

const VirtualPOSPreview: React.FC<VirtualPOSProps> = ({
  data,
  customStyles,
  ...props
}) => {
  const commands = reactifyCommands(data);
  const { style, ...propsWithoutStyle } = props;

  return (
    <ScrollView
      {...propsWithoutStyle}
      style={[styles.virtualPOSContainer, style]}
    >
      <View style={styles.virtualPOSView}>
        {commands
          .map((POSData, index, array) => {
            // Special formatting cases such as divider or same line command.
            if (POSData.text.match(/^[-]+/g)) {
              return <View style={styles.divider} />;
            } else if (array[index + 1]?.text.match(/^[ ]/g)) {
              return (
                <View style={styles.row}>
                  <Text
                    style={[
                      POSData.styles,
                      customStyles?.textStyle || styles.text,
                    ]}
                  >
                    {POSData.text}
                  </Text>
                  <Text
                    style={[
                      POSData.styles,
                      styles.alignRight,
                      customStyles?.textStyle || styles.text,
                    ]}
                  >
                    {array[index + 1].text}
                  </Text>
                </View>
              );
            }

            return (
              <Text
                style={[POSData.styles, customStyles?.textStyle || styles.text]}
              >
                {POSData.text}
              </Text>
            );
          })
          // Remove duplicates due to same line prints
          .filter((jsxElement) => {
            if (typeof jsxElement.props.children === 'string') {
              if (jsxElement.props.children.match(/^[ ]/g)) {
                return false;
              }
            }
            return true;
          })}
      </View>
    </ScrollView>
  );
};

export default VirtualPOSPreview;

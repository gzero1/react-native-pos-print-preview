import React, { useCallback } from 'react';
import styles from './styles';
import { ScrollView, View } from 'react-native';

import { POSToReact, VirtualPOSProps } from './@types/types';

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
 * @param props Data as an array of raw POS commands.
 * @returns ``JSX.Element``
 */
const VirtualPOS: React.FC<VirtualPOSProps> = ({ data }) => {
  return (
    <ScrollView style={styles.virtualPOSContainer}>
      {/* <View style={styles.virtualPOSView}>{commandToJSX(data)}</View> */}
    </ScrollView>
  );
};

export default VirtualPOS;

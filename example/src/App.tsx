import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import VirtualPos from '@g01-tecnologia/react-native-virtual-pos';

export default function App() {
  // const [result, setResult] = React.useState<number | undefined>();
  const placeholderData = [
    { cmd: '0x1B,0x40', prn: null },
    { cmd: '0x1B,0x44,0x14,0x01,0x00', prn: null },
    { cmd: '0x0A', prn: null },
    { cmd: '0x1B,0x61,0x01', prn: null },
    { cmd: '0x1D,0x21,0x00', prn: null },
    { cmd: '0x1B,0x45,0x01', prn: null },
    { cmd: null, prn: 'MOVTO DIARIO CONTA' },
    { cmd: '0x0A', prn: null },
    { cmd: '0x1B,0x61,0x01', prn: null },
    { cmd: '0x1D,0x21,0x10', prn: null },
    { cmd: '0x1B,0x45,0x01', prn: null },
    { cmd: null, prn: '605-cx 05' },
    { cmd: '0x1B,0x45,0x00', prn: null },
    { cmd: '0x0A', prn: null },
    { cmd: '0x0A', prn: null },
    { cmd: '0x1B,0x61,0x01', prn: null },
    { cmd: '0x1D,0x21,0x00', prn: null },
    { cmd: null, prn: '12/09/2021' },
    { cmd: '0x1D,0x21,0x00', prn: null },
    { cmd: '0x0A', prn: null },
    { cmd: null, prn: '--------------------------------' },
    { cmd: '0x0A', prn: null },
    { cmd: '0x1B,0x61,0x00', prn: null },
    { cmd: null, prn: 'Saldo Atual' },
    { cmd: '0x09', prn: null },
    { cmd: null, prn: '  -3.359,23' },
    { cmd: '0x0A', prn: null },
    { cmd: null, prn: '--------------------------------' },
    { cmd: '0x0A', prn: null },
    { cmd: '0x1B,0x61,0x01', prn: null },
    { cmd: '0x1B,0x45,0x01', prn: null },
    { cmd: null, prn: 'CREDITOS' },
    { cmd: '0x1B,0x45,0x00', prn: null },
    { cmd: '0x0A', prn: null },
    { cmd: '0x1B,0x61,0x00', prn: null },
    { cmd: null, prn: 'Pagou Dinheiro' },
    { cmd: '0x09', prn: null },
    { cmd: null, prn: '       0,00' },
    { cmd: '0x0A', prn: null },
    { cmd: '0x1B,0x61,0x00', prn: null },
    { cmd: null, prn: 'Pagou Cheque' },
    { cmd: '0x09', prn: null },
    { cmd: null, prn: '       0,00' },
    { cmd: '0x0A', prn: null },
    { cmd: '0x1B,0x61,0x00', prn: null },
    { cmd: null, prn: 'Folha (L)' },
    { cmd: '0x09', prn: null },
    { cmd: null, prn: '  11.173,89' },
    { cmd: '0x0A', prn: null },
    { cmd: '0x0A', prn: null },
    { cmd: '0x1B,0x61,0x01', prn: null },
    { cmd: '0x1B,0x45,0x01', prn: null },
    { cmd: null, prn: 'DEBITOS' },
    { cmd: '0x1B,0x45,0x00', prn: null },
    { cmd: '0x0A', prn: null },
    { cmd: '0x1B,0x61,0x00', prn: null },
    { cmd: null, prn: 'F L' },
    { cmd: '0x09', prn: null },
    { cmd: null, prn: '  13.912,24' },
    { cmd: '0x0A', prn: null },
    { cmd: '0x0A', prn: null },
    { cmd: '0x1B,0x61,0x00', prn: null },
    { cmd: null, prn: 'Saldo Anterior' },
    { cmd: '0x09', prn: null },
    { cmd: null, prn: ' -17.271,47' },
    { cmd: '0x0A', prn: null },
    { cmd: null, prn: '--------------------------------' },
    { cmd: '0x0A', prn: null },
    { cmd: null, prn: 'Emissao: 14/09/2021 10:22' },
    { cmd: '0x0A', prn: null },
  ];
  return (
    <View style={styles.container}>
      <VirtualPos data={placeholderData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

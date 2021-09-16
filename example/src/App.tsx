import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
//@ts-ignore
import VirtualPosPreview from '@g01-tecnologia/react-native-pos-print-preview';
import placeholderData from './common/data/placeholderData.json';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Virtual Pos Test</Text>
      <VirtualPosPreview
        customInternalView={{
          component: View,
          props: {},
        }}
        data={placeholderData}
      />
      <Text>Virtual Pos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * @module Types and Interfaces
 */

import { ViewStyle, TextStyle, ScrollViewProps } from 'react-native';

export type RootStyles = ViewStyle & TextStyle;

export interface RawPOSData {
  cmd: string | null; // Bytes in concatenated string. E.g. '0x18,0x1b' or null.
  prn: string | null; // The to-be-printed text or null.
}

export interface ReactPOSData {
  styles: RootStyles[];
  text: string;
}

export interface POSToReact {
  [key: string]: RootStyles;
}

export interface VirtualPOSProps extends ScrollViewProps {
  children?: never;
  data: RawPOSData[];
  customStyles: {
    textStyle: TextStyle;
  };
}

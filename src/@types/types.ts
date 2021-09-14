import { ViewStyle, TextStyle } from 'react-native';

export type RootStyles = ViewStyle & TextStyle;

export interface RawPOSData {
  cmd: string | null;
  prn: string | null;
}

export interface POSToReact {
  [key: string]: RootStyles;
}

export interface VirtualPOSProps {
  children?: never;
  data: RawPOSData[];
}

// export interface {}

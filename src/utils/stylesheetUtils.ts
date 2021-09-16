import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

/**
 * Function to normalize a number based on the screen width,
 * this is used in most of the stylesheet to create basic responsiveness.
 * @internal
 * @param size
 * @returns Normalized size
 */
export function normalize(size: number): number {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

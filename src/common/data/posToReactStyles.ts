import { StyleSheet } from 'react-native';
import { POSToReact } from 'src/@types/types';

const styles = StyleSheet.create({
  bold: { fontWeight: 'bold' },
  alignCenter: { textAlign: 'center' },
  alignLeft: { textAlign: 'left' },
  alignRight: { textAlign: 'right' },
  jumpLine: {
    // Todo
  },
});

/**
 * Table to convert POS styles to React styles.
 * @type {POSToReact}
 */
export const posToReactStyles: POSToReact = {
  '\u001b\u0061\u0001': styles.alignCenter, // ALIGN_CENTER
  '\u001b\u0061\u0000': styles.alignLeft, // ALIGN_LEFT
  '\u001b\u0061\u0002': styles.alignRight, // ALIGN_RIGHT
  '\u001b\u0045\u0001': styles.bold, // BOLD
  '\n': styles.jumpLine, // JUMP_LINE
};

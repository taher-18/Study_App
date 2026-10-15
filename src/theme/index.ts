// Design tokens for ExamPlan: colors for light and dark mode, spacing and font sizes.
// Keep everything here so the whole app looks consistent (and screenshot-friendly).
import { useColorScheme } from 'react-native';

const light = {
  background: '#F7F7F5',
  card: '#FFFFFF',
  text: '#16181D',
  textMuted: '#6B7078',
  border: '#E4E4E0',
  primary: '#3B5BDB', // calm blue for buttons and ticks
  primaryText: '#FFFFFF',
  examBg: '#FFF1E6', // soft orange highlight for exam days
  examText: '#C2410C',
  danger: '#D6336C',
};

const dark: typeof light = {
  background: '#0F1115',
  card: '#1A1D23',
  text: '#F2F3F5',
  textMuted: '#9AA0AA',
  border: '#2A2E36',
  primary: '#7B93F5',
  primaryText: '#0F1115',
  examBg: '#3A2416',
  examText: '#FDBA8C',
  danger: '#F06595',
};

export type Colors = typeof light;

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };

export const fontSize = { small: 15, body: 18, title: 24, large: 34 };

export const radius = { md: 14, lg: 20 };

/** Returns the color palette that matches the phone's light/dark setting. */
export function useColors(): Colors {
  return useColorScheme() === 'dark' ? dark : light;
}

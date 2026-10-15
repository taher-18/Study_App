// Today screen (placeholder, built in a later step).
import { Text } from 'react-native';
import { Screen } from '../src/components/Screen';
import { fontSize, useColors } from '../src/theme';

export default function TodayScreen() {
  const colors = useColors();
  return (
    <Screen title="Today">
      <Text style={{ color: colors.textMuted, fontSize: fontSize.body }}>Coming soon.</Text>
    </Screen>
  );
}

// A simple page wrapper: themed background, generous padding and a big title.
import { ReactNode } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontSize, spacing, useColors } from '../theme';

type Props = { title: string; children?: ReactNode };

export function Screen({ title, children }: Props) {
  const colors = useColors();
  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { padding: spacing.lg, gap: spacing.md },
  title: { fontSize: fontSize.large, fontWeight: '700', marginBottom: spacing.sm },
});

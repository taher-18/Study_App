// Root layout: the bottom tab bar with the four main screens.
// Colors follow the phone's light/dark mode.
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColors } from '../src/theme';

export default function RootLayout() {
  const colors = useColors();
  return (
    <>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textMuted,
          tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border },
          tabBarLabelStyle: { fontSize: 13, fontWeight: '600' },
          // No icon library yet, so we hide the icon slot and show labels only.
          tabBarIconStyle: { display: 'none' },
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'Today' }} />
        <Tabs.Screen name="plan" options={{ title: 'Plan' }} />
        <Tabs.Screen name="courses" options={{ title: 'Courses' }} />
        <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
      </Tabs>
    </>
  );
}

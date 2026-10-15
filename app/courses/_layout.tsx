// Courses tab has its own stack: the list, and the add/edit form pushed on top.
import { Stack } from 'expo-router';

export default function CoursesLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}

# ExamPlan (temporary name)

iOS-first mobile app for university students worldwide. The student enters their exams and the app
builds a day-by-day study plan. They tick tasks as done, get reminders and see progress.
Business model: App Store subscriptions. Marketing: faceless short videos, so the UI must be clean,
minimal and screenshot-friendly.

## Roadmap
- **Phase 1 (current):** core app, fully offline, no backend, no AI.
- Phase 2: upload exam schedule PDF/photo; AI reads courses and dates (small backend so the API key stays secret).
- Phase 3: replan button, lecture-list import, calendar sync, home screen widget, share plan as PDF.
- Phase 4: paywall (free: 2 courses; paid: unlimited + smart features), polish, TestFlight, App Store.

**Do NOT build anything past the current phase** (no backend, AI, paywall or calendar sync in Phase 1).

## Phase 1 scope
Tech: Expo SDK 57 (managed) + TypeScript + expo-router, Zustand + AsyncStorage persist,
expo-notifications (local only), @react-native-community/datetimepicker, Jest (jest-expo).

Screens (tabs):
1. **Courses**: add / edit / delete. Fields: name, exam date, exam time (optional), difficulty (1 easy, 2 medium, 3 hard).
2. **Generate Plan**: button (on Courses) that builds the plan from the courses.
3. **Today**: today's tasks with big tick boxes and an optional comment per task; countdown to the next exam.
4. **Plan**: all days from today to the last exam; exam days highlighted.
5. **Settings**: reminders on/off.

### Plan generator (`src/planner/generatePlan.ts`)
Pure TypeScript, no UI, fully unit tested.
- Input: today's date + courses (exam date, difficulty). Output: tasks `{id, courseId, date, title, done, comment}`.
- Every course gets "Study" tasks on several days before its exam and a "Final revision" task the day before.
- Harder and closer exams get more study days: priority = difficulty weight / days remaining.
- Max 2 courses per day (study + final revision). The "Exam" task on exam day does NOT count toward this limit.
  Days after an exam still study the next exams.
- Never schedule study for a course on/after its exam date. Past exams are ignored.
- Exam today or tomorrow → a sensible short plan, never a crash.
- Real test case: today = 2026-10-12; CV 2026-10-20 (medium), BoS 2026-10-21 (medium),
  ML 2026-10-24 (hard), AI 2026-10-29 (hard). Plus edge cases (same-day exams, one course, past exam).

### Notifications (local)
Reminder the evening before each exam and on the morning of each exam. Explain why before asking for permission.

### Design
Clean, minimal, large readable fonts, generous spacing, light + dark mode. Tokens live in `src/theme`.

## Working rules
- Build in small steps; after each step tell the user in simple words what to run to check it; commit each working step.
- Keep code simple and commented. **Don't add libraries without asking the user.**
- Dates are stored as `YYYY-MM-DD` strings (local calendar days), no date library.
- Install packages with versions from `node_modules/expo/bundledNativeModules.json` (SDK-compatible).

## Layout
- `app/` – expo-router screens (`_layout.tsx` = tab bar; `courses/` has its own stack).
- `src/planner/` – plan generator + tests. `src/store/` – Zustand store. `src/notifications/` – reminders.
- `src/theme/` – colors/spacing/fonts. `src/components/` – shared UI.

## Commands
- `npm start` – Expo dev server (scan the QR code with Expo Go / dev build).
- `npm test` – Jest tests. `npm run typecheck` – TypeScript check.

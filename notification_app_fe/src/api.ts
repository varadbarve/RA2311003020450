export interface Notification {
  Type: string;
  Message: string;
  Timestamp: string;
}

/**
 * Helper to generate dynamic dates for realistic sample data.
 * @param daysOffset - Days from today (0 for today, -1 for yesterday)
 * @param timeStr - HH:MM:SS string
 */
const getRelativeDate = (daysOffset: number, timeStr: string) => {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);
  const datePart = date.toISOString().split('T')[0];
  return `${datePart} ${timeStr}`;
};

export const fetchNotifications = async (): Promise<Notification[]> => {
  // Simulate network delay for a better UX (shows the loading skeleton)
  await new Promise((resolve) => setTimeout(resolve, 800));

  return [
    {
      Type: "Placement",
      Message: "Microsoft 'Leap' Apprentice Program is now accepting applications for the 2026 cohort. Apply by EOD.",
      Timestamp: getRelativeDate(0, "09:15:00"), // Today morning
    },
    {
      Type: "Result",
      Message: "The provisional results for the 'Design Patterns' end-term examination have been released.",
      Timestamp: getRelativeDate(0, "10:30:22"), // Today a bit later
    },
    {
      Type: "Event",
      Message: "Guest Lecture: 'The Future of Agentic AI' by Dr. Sarah Chen at the Seminar Hall, 4 PM today.",
      Timestamp: getRelativeDate(0, "08:00:15"), // Today early
    },
    {
      Type: "Placement",
      Message: "Adobe has shortlisted 15 candidates for the final interview round. Check your email for schedules.",
      Timestamp: getRelativeDate(-1, "16:45:10"), // Yesterday evening
    },
    {
      Type: "Event",
      Message: "Cultural Night 'Vibrance 2026' volunteer registrations are now open. Sign up via the Student Portal.",
      Timestamp: getRelativeDate(-1, "11:20:45"), // Yesterday morning
    },
    {
      Type: "Result",
      Message: "Dean's List for the Spring 2026 Semester has been published. Congratulations to all achievers!",
      Timestamp: getRelativeDate(-1, "14:00:00"), // Yesterday afternoon
    },
  ];
};
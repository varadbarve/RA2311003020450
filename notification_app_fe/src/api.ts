export interface Notification {
  Type: string;
  Message: string;
  Timestamp: string;
}

export const fetchNotifications = async (): Promise<Notification[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  return [
    {
      Type: "Placement",
      Message: "Google is hiring for SDE roles! Applications open until next Friday.",
      Timestamp: "2026-04-22 17:51:18",
    },
    {
      Type: "Event",
      Message: "Annual Tech Fest 'Innovate 2026' starts tomorrow at the Main Auditorium.",
      Timestamp: "2026-04-22 17:50:06",
    },
    {
      Type: "Result",
      Message: "Mid-Semester examination results for 3rd year students are now live on the portal.",
      Timestamp: "2026-04-22 17:51:30",
    },
    {
      Type: "Placement",
      Message: "Amazon recruitment drive: Technical interview rounds scheduled for Monday.",
      Timestamp: "2026-04-22 17:49:42",
    },
    {
      Type: "Event",
      Message: "Farewell ceremony for the Batch of 2026: Registration link is active.",
      Timestamp: "2026-04-22 17:51:06",
    },
  ];
};
import { Notification } from "./api";

export const getPriority = (type: string) => {
  const t = type.toLowerCase();
  if (t === "placement") return 3;
  if (t === "event") return 2;
  if (t === "result") return 1.5;
  return 1;
};

export const sortNotifications = (data: Notification[]) => {
  return [...data].sort((a, b) => {
    const priorityA = getPriority(a.Type);
    const priorityB = getPriority(b.Type);

    if (priorityB !== priorityA) {
      return priorityB - priorityA;
    }
    
    return (
      new Date(b.Timestamp).getTime() -
      new Date(a.Timestamp).getTime()
    );
  });
};
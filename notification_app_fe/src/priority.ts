export {};
export const getPriority = (type: string) => {
  if (type === "Placement") return 3;
  if (type === "Event") return 2;
  return 1;
};

export const sortNotifications = (data: any[]) => {
  return data.sort((a, b) => {
    if (getPriority(b.Type) !== getPriority(a.Type)) {
      return getPriority(b.Type) - getPriority(a.Type);
    }
    return (
      new Date(b.Timestamp).getTime() -
      new Date(a.Timestamp).getTime()
    );
  });
};
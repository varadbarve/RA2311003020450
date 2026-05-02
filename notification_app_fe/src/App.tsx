import { useEffect, useState } from "react";
import { fetchNotifications } from "./api";
import { sortNotifications } from "./priority";
import Log from "./utils/logger";

function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      Log("frontend", "info", "api", "Fetching notifications");
      const res = await fetchNotifications();
      setData(res);
    };

    load();
  }, []);

  const sorted = data.length ? sortNotifications([...data]).slice(0, 5) : [];

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Notifications</h1>

      {data.map((n, i) => (
        <div key={i}>
          <b>{n.Type}</b> — {n.Message}
        </div>
      ))}

      <h1>Top Notifications</h1>

      {sorted.map((n, i) => (
        <div key={i}>
          <b>{n.Type}</b> — {n.Message}
        </div>
      ))}
    </div>
  );
}

export default App;
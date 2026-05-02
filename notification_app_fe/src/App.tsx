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

  const sorted = sortNotifications([...data]).slice(0, 10);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Notifications</h1>

      {data.length === 0 && <p>No data yet...</p>}

      {data.map((n, i) => (
        <div key={i} style={{ marginBottom: "10px" }}>
          <b>{n.Type}</b> — {n.Message}
        </div>
      ))}

      <hr />

      <h1>Top Notifications</h1>

      {sorted.map((n, i) => (
        <div key={i} style={{ marginBottom: "10px" }}>
          <b>{n.Type}</b> — {n.Message}
        </div>
      ))}
    </div>
  );
}

export default App;
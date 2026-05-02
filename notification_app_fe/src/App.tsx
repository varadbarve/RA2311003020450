import { useEffect, useState } from "react";
import { fetchNotifications } from "./api";
import { sortNotifications } from "./priority";
import Log from "./utils/logger";
import "./App.css";

interface Notification {
  Type: string;
  Message: string;
  Timestamp: string;
}

const getBadgeClass = (type: string) => {
  switch (type.toLowerCase()) {
    case "placement": return "type-placement";
    case "event": return "type-event";
    case "result": return "type-result";
    default: return "type-other";
  }
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  });
};

function App() {
  const [data, setData] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        Log("frontend", "info", "api", "Fetching notifications");
        setLoading(true);
        const res = await fetchNotifications();
        setData(res);
      } catch (error) {
        Log("frontend", "error", "api", "Failed to fetch notifications");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const sorted = data.length ? sortNotifications([...data]).slice(0, 3) : [];

  const NotificationCard = ({ n, delay }: { n: Notification; delay: number }) => (
    <div 
      className="notification-card fade-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="card-header">
        <span className={`type-badge ${getBadgeClass(n.Type)}`}>{n.Type}</span>
        <span className="timestamp">{formatDate(n.Timestamp)}</span>
      </div>
      <div className="message">{n.Message}</div>
      <div className="priority-marker"></div>
    </div>
  );

  return (
    <div className="app-container">
      <header className="fade-in">
        <h1>Campus Hub</h1>
        <p>Stay updated with the latest placements, events, and results.</p>
      </header>

      {loading ? (
        <div className="notification-grid">
          {[1, 2, 3].map(i => <div key={i} className="loading-skeleton"></div>)}
        </div>
      ) : (
        <>
          {sorted.length > 0 && (
            <section>
              <h2 className="section-title fade-in" style={{ animationDelay: '0.1s' }}>
                Priority Updates
              </h2>
              <div className="notification-grid">
                {sorted.map((n, i) => (
                  <NotificationCard key={`top-${i}`} n={n} delay={0.2 + (i * 0.1)} />
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="section-title fade-in" style={{ animationDelay: '0.4s' }}>
              All Notifications
            </h2>
            <div className="notification-grid">
              {data.map((n, i) => (
                <NotificationCard key={`all-${i}`} n={n} delay={0.5 + (i * 0.05)} />
              ))}
              {data.length === 0 && (
                <div className="empty-state fade-in">No notifications found.</div>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import { fetchNotifications, Notification } from "./api";
import { sortNotifications } from "./priority";
import Log from "./utils/logger";
import "./App.css";

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
  return date.toLocaleDateString('en-GB', { 
    day: '2-digit',
    month: 'short', 
    hour: '2-digit', 
    minute: '2-digit'
  }).toUpperCase();
};

const NotificationCard = ({ n, delay, badgeClass }: { n: Notification; delay: number; badgeClass: string }) => (
  <div 
    className="notification-card fade-up" 
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="card-top">
      <span className={`type-indicator ${badgeClass}`}>
        {n.Type}
      </span>
      <span className="timestamp">{formatDate(n.Timestamp)}</span>
    </div>
    <div className="message">{n.Message}</div>
  </div>
);

function App() {
  const [data, setData] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        Log("frontend", "info", "api", "Initial load started");
        setLoading(true);
        const res = await fetchNotifications();
        setData(res);
      } catch (error) {
        Log("frontend", "error", "api", "Fetch failed");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const sorted = data.length ? sortNotifications([...data]).slice(0, 3) : [];

  return (
    <div className="app-container">
      <header className="fade-up">
        <h1>Campus<br/>Intelligence</h1>
        <p>Real-time notifications engine for students. Built for speed and clarity.</p>
      </header>

      {loading ? (
        <div className="skeleton-container">
          {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="skeleton-card"></div>)}
        </div>
      ) : (
        <>
          {sorted.length > 0 && (
            <section>
              <div className="section-header fade-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="section-title">Critical Updates</h2>
                <span className="timestamp">{sorted.length} ITEMS</span>
              </div>
              <div className="notification-grid">
                {sorted.map((n, i) => (
                  <NotificationCard 
                    key={`top-${n.Timestamp}-${i}`} 
                    n={n} 
                    delay={0.1 + (i * 0.1)} 
                    badgeClass={getBadgeClass(n.Type)}
                  />
                ))}
              </div>
            </section>
          )}

          <section>
            <div className="section-header fade-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="section-title">Archive Feed</h2>
              <span className="timestamp">{data.length} TOTAL</span>
            </div>
            <div className="notification-grid">
              {data.map((n, i) => (
                <NotificationCard 
                  key={`all-${n.Timestamp}-${i}`} 
                  n={n} 
                  delay={0.4 + (i * 0.05)} 
                  badgeClass={getBadgeClass(n.Type)}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
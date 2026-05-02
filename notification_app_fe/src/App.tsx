import { useEffect } from "react";
import Log from "./utils/logger";

function App() {
  useEffect(() => {
    Log("frontend", "info", "component", "App loaded successfully");
  }, []);

  return <h1>App Running ✅</h1>;
}

export default App;
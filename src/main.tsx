import "./index.css";
import { StrictMode, useCallback, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const Lazy = useCallback(
    lazy(() => import("@/App")),
    [],
  );
  return (
    <Suspense>
      <Lazy />
    </Suspense>
  );
};

const container = document.getElementById("root")!;
const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

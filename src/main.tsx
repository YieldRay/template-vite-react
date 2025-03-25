import "./index.css";
import { StrictMode, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

const Lazy = lazy(() => import("@/App"));

const App = () => {
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

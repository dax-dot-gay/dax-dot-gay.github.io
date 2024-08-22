import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "@mantine/core/styles.css";
import "@mantine/core/styles.css";
import "@mantine/spotlight/styles.css";

import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(<App />);

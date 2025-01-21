import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css"
import App from "./App";
const client = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <App/>
    </QueryClientProvider>
  </StrictMode>
);

import { createRoot } from "react-dom/client";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css"
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";
const client = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </QueryClientProvider>
);

import { createRoot } from "react-dom/client";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css"
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";
import { Bounce, ToastContainer } from "react-toastify";
const client = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <ContextProvider>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </ContextProvider>
  </QueryClientProvider>
);

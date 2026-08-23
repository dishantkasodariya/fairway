import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import { App } from "./App";
import { AuthProvider } from "@/modules/auth/hooks/use-auth";
import { CrmProvider } from "@/modules/core/providers/crm-provider";
import { Toaster } from "@/modules/core/components/ui/sonner";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element '#root' not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CrmProvider>
          <BrowserRouter>
            <App />
            <Toaster />
          </BrowserRouter>
        </CrmProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

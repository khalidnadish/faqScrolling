import React from "react";
import ReactDOM from "react-dom/client";
// import { ReactQueryDevtools } from 'react-query/devtools'
// import { ReactQueryDevtools } from "react-query-devtools";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import App from "./App";

// import {QueryClientProvider,QueryClient} from "react-query"
const queryClient = new QueryClient();

import "./index.css";

const queryclient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools position="bottom-left" />
  </QueryClientProvider>
);

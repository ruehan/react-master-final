import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./components/Home";
import router from "./Router";

const client = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={client}>
          <RouterProvider router={router} />
    </QueryClientProvider>,
  document.getElementById("root")
);
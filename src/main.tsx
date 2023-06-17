import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./components/Home";
import router from "./Router";
import { RecoilRoot } from "recoil";
import { useMediaQuery } from "react-responsive";

const client = new QueryClient();



ReactDOM.render(
    <RecoilRoot>
        <QueryClientProvider client={client}>
            <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>,
  document.getElementById("root")
);
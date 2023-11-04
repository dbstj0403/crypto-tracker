import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme, lightTheme, theme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { isDarkAtom } from "./atoms";

const queryClient = new QueryClient();
ReactDOM.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </RecoilRoot>,
  document.getElementById("root")
);

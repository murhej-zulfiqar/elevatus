import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {ThemeProvider} from "@mui/material";
import {theme} from "./styles/them";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import './config/i18n'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

      <ThemeProvider theme={theme}>
          <Provider store={store}><Suspense fallback='loading'>
            <RouterProvider router={router} /></Suspense>
          </Provider>
          {/*<App />*/}
      </ThemeProvider>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

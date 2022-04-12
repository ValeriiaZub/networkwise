import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import AppLayout from './components/AppLayout'
import App from './pages/App';
import Play from './pages/Play';
import Index from './pages/Index';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import PreOnboard from './pages/PreOnboard'
import ProfileCreation from './pages/ProfileCreation';
import ReadexPro from './assets/fonts/Readex_Pro/ReadexPro-VariableFont_wght.ttf'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './base.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Readex Pro'
  },
  palette: {
    primary: {
      light: '#464dc9',
      main: '#1821BC',
      dark: '#101783',
      contrastText: '#fff',
      gray: '#000000BC'
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Readex Pro';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src; local('Readex Pro'), url(${ReadexPro}) format('ttf');
        }
      `
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pre-onboard" element={<PreOnboard />} />
          <Route path="/profile-creation" element={<ProfileCreation />} />
          <Route path="/app" element={<AppLayout />}>
            <Route element={<Messages />} path="messages" />
            <Route element={<div>Not implemented yet</div>} path="messages/:id" />
            <Route element={<Play />} path="play" />
            <Route element={<Profile />} path="profile" />
            <Route element={<App />} path="/app" />
          </Route>
          <Route element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

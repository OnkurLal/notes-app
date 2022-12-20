import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import LoginButton from './components/LoginButton'
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <>
    <Container maxWidth="sm">
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <LoginButton />
      <Content />
      <Footer />
      </ThemeProvider>
    </Container>
    </>
  )
}

export default App

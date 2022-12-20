import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'
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

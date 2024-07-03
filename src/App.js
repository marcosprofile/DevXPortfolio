import React from 'react';
import RoutesApp from './routes';
import { ThemeProvider } from 'styled-components';
import { MainBody } from './styles/Global.styled';
import Navbar from './components/Navbar';
import { theme } from './utils/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Navbar />
        <RoutesApp />
      </MainBody>
    </ThemeProvider>
  );
}

export default App;

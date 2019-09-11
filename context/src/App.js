import React from 'react';
import Navbar from './Navbar';
import Form from './Form'
import PageContent from './PageContent';
import { ThemeProvider } from './contexts/ThemeContext';
import { LangProvider } from './contexts/LangContext'


function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;

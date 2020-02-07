import React from 'react';
import './App.css';
import { ThemeProvider } from "@ui5/webcomponents-react/lib/ThemeProvider";

import MyApp from './components/MyApp'
import Navigation from './components/Navigation'
import MyChart from './components/MyChart';

function App() {
  return (

    <ThemeProvider withToastContainer>
      <Navigation></Navigation>
      <MyApp></MyApp>
      <MyChart></MyChart>
    </ThemeProvider>



  );
}

export default App;

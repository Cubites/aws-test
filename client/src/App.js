import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Main from './components/Main';
import FirstTest from './components/FirstTest';
import SecondTest from './components/SecondTest';

const App = () => {
  return (
    <BrowserRouter>
      <AppMain>
        <Routes>
          <Route index path='/' element={<Main />} />
          <Route path='/first' element={<FirstTest />} />
          <Route path='/second' element={<SecondTest />} />
        </Routes>
      </AppMain>
    </BrowserRouter>
  )
}

const AppMain = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

export default App
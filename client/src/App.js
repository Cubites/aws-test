import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Main from './components/Main';
import HttpTest from './components/HttpTest';
import HttpsTest from './components/HttpsTest';
import DbTest from './components/DbTest';

const App = () => {
  return (
    <BrowserRouter>
      <AppMain>
        <Routes>
          <Route index path='/' element={<Main />} />
          <Route path='/http' element={<HttpTest />} />
          <Route path='/https' element={<HttpsTest />} />
          <Route path='/db' element={<DbTest />} />
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
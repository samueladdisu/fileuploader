import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles/dashboard.css'
import View from './pages/View';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/view" element={<View />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

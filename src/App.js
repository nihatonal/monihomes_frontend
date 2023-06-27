import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import MainNavigation from './shared/navigation/MainNavigation'
import { LanguageProvider } from "./shared/context/Language";
import ScrollButton from "./shared/UI/ScrollButton";
import Footer from './shared/footer/Footer'
import Main from './main/Main'
import PrivacyPolicy from "./shared/footer/components/PrivacyPolicy";
import './App.css'
function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <div className="root-wrapper">
      <LanguageProvider>
        <BrowserRouter>
          <MainNavigation />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/privactpolicy" element={<PrivacyPolicy />} />
            <Route exact path="*" element={<Main />} />

          </Routes>
          <Footer />
          {/* <ScrollButton /> */}
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
//google-site-verification=iOxlZix4qCkm523VjnzIlooLA6RcI-v1PLuXlpofc-o

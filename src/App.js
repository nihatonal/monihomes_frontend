import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoadingSpinner from './shared/UI/LoadingSpinner';
import MainNavigation from './shared/navigation/MainNavigation'
import { LanguageProvider } from "./shared/context/Language";
import Footer from './shared/footer/Footer'
import PrivacyPolicy from "./shared/footer/components/PrivacyPolicy";

const Main = React.lazy(() => import("./main/Main.js"));

function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <div className="root-wrapper">
      <LanguageProvider>
        <BrowserRouter>
          <Suspense
            fallback={
              <div className='suspense_container'>
                <LoadingSpinner />
              </div>
            }
          >
            <MainNavigation />
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route exact path="*" element={<Main />} />
            </Routes>

            <Footer />
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;


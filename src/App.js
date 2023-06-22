import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import MainNavigation from './shared/navigation/MainNavigation'
import { LanguageProvider } from "./shared/context/Language";
import ScrollButton from "./shared/UI/ScrollButton";

import Main from './main/Main'

import './App.css'
function App() {


  return (
    <div className="root-wrapper">
      <LanguageProvider>
        <BrowserRouter>
          <MainNavigation />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="*" element={<Main />} />
          </Routes>
          {/* <Footer /> */}
          <ScrollButton />
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;

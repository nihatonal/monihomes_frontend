import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoadingSpinner from './shared/UI/LoadingSpinner';
import MainNavigation from './shared/navigation/MainNavigation'
import { LanguageProvider } from "./shared/context/Language";
import Footer from './shared/footer/Footer'
import PrivacyPolicy from "./shared/footer/components/PrivacyPolicy";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import ShareProvider from './shared/context/ShareContext';
import GoogleLoginComp from './shared/components/GoogleLoginComp';
const Main = React.lazy(() => import("./main/Main.js"));
// const Concept = React.lazy(() => import("./concept/Concept.js"));
const User = React.lazy(() => import("./user/User.js"));
const SignUp = React.lazy(() => import("./user/components/SignUp"));
const LogIn = React.lazy(() => import("./user/components/LogIn"));
const Admin = React.lazy(() => import("./admin/Admin.js"));
function App() {
  const { token, login, logout, userId } = useAuth();

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  let routes;
  if (token) {
    routes = (
      <React.Fragment>
        <Route exact path="/" element={<Main />} />
        {/* <Route exact path="/concept/:cid" element={<Concept />} /> */}
        {userId === "65df0caa5e113d035559181d" && <Route exact path="/adminnihat" element={<Admin />} />}
        <Route exact path='/google' element={<GoogleLoginComp />}/>
        <Route exact path="/admin" element={<User />} />
        <Route path="*" element={<Main />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route exact path="/" element={<Main />} />
        {/* <Route exact path="/concept/:cid" element={<Concept />} /> */}
        <Route exact path="/admin" element={<LogIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Main />} />
      </React.Fragment>
    );
  }
  return (
    <div className="root-wrapper">
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout
        }}
      >


        <LanguageProvider>
          <ShareProvider>
            <BrowserRouter>

              <Suspense
                fallback={
                  <div className='suspense_container'>
                    <LoadingSpinner />
                  </div>
                }
              >
                <MainNavigation />
                <Routes>{routes}</Routes>

                <Footer />
              </Suspense>
            </BrowserRouter>
          </ShareProvider>
        </LanguageProvider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;


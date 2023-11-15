import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const admins = ["sarahibarron@hotmail.co.uk", "najmasy20@gmail.com"];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <header>
        {isAuthenticated && (
          <div>
            <Profile />
            <LogoutButton />
          </div>
        )}
        {!isAuthenticated && <LoginButton />}
      </header>
    </BrowserRouter>
  );
}

export default App;

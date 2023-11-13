import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const admins = ["sarahibarron@hotmail.co.uk"];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isAuthenticated && (
        <div>
          <Profile />
          <LogoutButton />
        </div>
      )}
      {!isAuthenticated && <LoginButton />}

      <h1>Auth0 Demo</h1>
      <p>Want to login?</p>

      {admins.includes(user?.email) && <p>can put admin stuff in here</p>}
    </>
  );
}

export default App;

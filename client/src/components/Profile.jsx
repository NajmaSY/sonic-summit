import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../App.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      //<div className="profilecontainer">
      //<img src={user.picture} alt={user.name} className="profileimage" />
      //<h2 className="profilename">{user.name}</h2>
      //<p className="profileemail">{user.email}</p>
      <div className="navBarSpace">
        <img src={user.picture} alt={user.name} className="loginImg" />
        <p>Hello {user.name}!</p>
      </div>
    )
  );
};

export default Profile;

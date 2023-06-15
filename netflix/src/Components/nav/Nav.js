import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="logos">
      <img
        className="netflixlogo"
        src={`https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png`}
      />
      <img
        className="avatarLogo"
        src={`https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png`}
      />
    </div>
  );
}

export default Nav;

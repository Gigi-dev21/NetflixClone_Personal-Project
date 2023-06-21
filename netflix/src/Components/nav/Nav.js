import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
  }, []);

  return (
    <div className={`logos ${show && "navBlack"}`}>
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

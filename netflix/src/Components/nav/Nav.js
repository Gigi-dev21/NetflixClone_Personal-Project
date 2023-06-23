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
        src={`https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png`}
      />
      <img
        className="avatarLogo"
        src={`https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png`}
      />
    </div>
  );
}

export default Nav;

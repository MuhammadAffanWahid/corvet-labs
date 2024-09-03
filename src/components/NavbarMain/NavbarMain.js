// import React, { useState, useEffect } from "react";
// import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
// import styles from "./NavbarMain.module.css";
// import { NavLink } from "react-router-dom";
// import corvet from "../../assets/AppDevService/corvet.png";

// const NavbarMain = () => {
//   const [show, setShow] = useState(false);
//   const [activeNav, setActiveNav] = useState([true, false, false, false]);
//   const [expand, setExpand] = useState(false);

//   const closeNav = () => {
//     setExpand(false);
//   };

//   const toggleDropdown = () => {
//     setShow(prevShow => !prevShow);
//   };

//   useEffect(() => {
//     const savedNavState = sessionStorage.getItem("NavbarMain");
//     if (savedNavState) {
//       setActiveNav(JSON.parse(savedNavState));
//     }
//   }, []);

//   const handleActiveNav = (i) => {
//     const newNavState = activeNav.map((x, index) => index === i);
//     setActiveNav(newNavState);
//     sessionStorage.setItem("NavbarMain", JSON.stringify(newNavState));
//   };

//   return (
//     <>
//       <Navbar
//         style={{
//           backgroundColor: "white",
//           boxShadow: "1px 1px 10px rgb(0 0 0 / 0.4)",
//         }}
//         variant="light"
//         expand="lg"
//         sticky="top"
//         onToggle={() => setExpand(prevState => !prevState)}
//         expanded={expand}
//       >
//         <Container>
//           <Navbar.Brand href="/" className={styles.logo}>
//             <img src={corvet} height="60" alt="" className="pb-2" />
//             orvet Labs
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav style={{ marginLeft: 'auto' }}>
//               <NavLink
//                 to="/"
//                 className={`${styles.nav_text} nav-link ${activeNav[0] ? styles.active : ""}`}
//                 style={{ marginTop: "8px" }}
//                 onClick={() => { handleActiveNav(0); closeNav(); }}
//               >
//                 Home
//               </NavLink>

//               <NavLink
//                 to="/aboutUs"
//                 className={`${styles.nav_text} nav-link ${activeNav[1] ? styles.active : ""}`}
//                 style={{ marginTop: "8px" }}
//                 onClick={() => { handleActiveNav(1); closeNav(); }}
//               >
//                 About us
//               </NavLink>

//               <NavDropdown
//                 show={show}
//                 onClick={toggleDropdown}
//                 className={`nav-link ${styles.drop}`}
//                 title={
//                   <span className={`${styles.nav_text} my-auto ${activeNav[2] ? styles.active : ""}`}>
//                     Services
//                   </span>
//                 }
//                 id="basic-nav-dropdown"
//               >
//                 {/* <NavDropdown.Item className={styles.dropdownItem}>
//                   <NavLink
//                     to="/sMediaService"
//                     onClick={() => { handleActiveNav(2); closeNav(); }}
//                     className={styles.dropdownText}
//                   >
//                     Social Media Marketing
//                   </NavLink>
//                 </NavDropdown.Item> */}
//                 <NavDropdown.Item className={styles.dropdownItem}>
//                   <NavLink
//                     to="/AppDevService"
//                     onClick={() => { handleActiveNav(2); closeNav(); }}
//                     className={styles.dropdownText}
//                   >
//                     App Development
//                   </NavLink>
//                 </NavDropdown.Item>
//                 <NavDropdown.Item className={styles.dropdownItem}>
//                   <NavLink
//                     to="/WebDevService"
//                     onClick={() => { handleActiveNav(2); closeNav(); }}
//                     className={styles.dropdownText}
//                   >
//                     Web Development
//                   </NavLink>
//                 </NavDropdown.Item>
//                 <NavDropdown.Item className={styles.dropdownItem}>
//                   <NavLink
//                     to="/QAService"
//                     onClick={() => { handleActiveNav(2); closeNav(); }}
//                     className={styles.dropdownText}
//                   >
//                     Quality Assurance
//                   </NavLink>
//                 </NavDropdown.Item>
//                 {/* <NavDropdown.Item className={styles.dropdownItem}>
//                   <NavLink
//                     to="/hello"
//                     onClick={() => { handleActiveNav(2); closeNav(); }}
//                     className={styles.dropdownText}
//                   >
//                     IT Consultancy
//                   </NavLink>
//                 </NavDropdown.Item>
//                 <NavDropdown.Item className={styles.dropdownItem}>
//                   <NavLink
//                     to="/hello"
//                     onClick={() => { handleActiveNav(2); closeNav(); }}
//                     className={styles.dropdownText}
//                   >
//                     AI Solutions
//                   </NavLink>
//                 </NavDropdown.Item> */}
//               </NavDropdown>

//               <NavLink
//                 to="/contactUs"
//                 className={`${styles.nav_text} nav-link ${activeNav[3] ? styles.active : ""}`}
//                 style={{ marginTop: "8px" }}
//                 onClick={() => { handleActiveNav(3); closeNav(); }}
//               >
//                 Contact Us
//               </NavLink>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default NavbarMain;



import React, { useState, useEffect, useRef } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import styles from "./NavbarMain.module.css";
import { NavLink } from "react-router-dom";
import corvet from "../../assets/AppDevService/corvet.png";

const NavbarMain = () => {
  const [show, setShow] = useState(false);
  const [activeNav, setActiveNav] = useState([true, false, false, false]);
  const [expand, setExpand] = useState(false);
  const dropdownRef = useRef(null);  // Ref for the dropdown element

  const closeNav = () => {
    setExpand(false);
  };

  const toggleDropdown = () => {
    setShow(prevShow => !prevShow);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const savedNavState = sessionStorage.getItem("NavbarMain");
    if (savedNavState) {
      setActiveNav(JSON.parse(savedNavState));
    }
  }, []);

  const handleActiveNav = (i) => {
    const newNavState = activeNav.map((x, index) => index === i);
    setActiveNav(newNavState);
    sessionStorage.setItem("NavbarMain", JSON.stringify(newNavState));
  };

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white",
          boxShadow: "1px 1px 10px rgb(0 0 0 / 0.4)",
        }}
        variant="light"
        expand="lg"
        sticky="top"
        onToggle={() => setExpand(prevState => !prevState)}
        expanded={expand}
      >
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            <img src={corvet} height="60" alt="" className="pb-2" />
            orvet Labs
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: 'auto' }}>
              <NavLink
                to="/"
                className={`${styles.nav_text} nav-link ${activeNav[0] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => { handleActiveNav(0); closeNav(); }}
              >
                Home
              </NavLink>
              <NavLink
                to="/aboutUs"
                className={`${styles.nav_text} nav-link ${activeNav[1] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => { handleActiveNav(1); closeNav(); }}
              >
                About us
              </NavLink>

              <NavDropdown
                show={show}
                onClick={toggleDropdown}
                className={`nav-link ${styles.drop}`}
                title={
                  <span className={`${styles.nav_text} my-auto ${activeNav[2] ? styles.active : ""}`}>
                    Services
                  </span>
                }
                id="basic-nav-dropdown"
                ref={dropdownRef}
              >
                {/* <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/sMediaService"
                    onClick={() => { handleActiveNav(2); closeNav(); }}
                    className={styles.dropdownText}
                  >
                    Social Media Marketing
                  </NavLink>
                </NavDropdown.Item> */}
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/AppDevService"
                    onClick={() => { handleActiveNav(2); closeNav(); }}
                    className={styles.dropdownText}
                  >
                    App Development
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/WebDevService"
                    onClick={() => { handleActiveNav(2); closeNav(); }}
                    className={styles.dropdownText}
                  >
                    Web Development
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/QAService"
                    onClick={() => { handleActiveNav(2); closeNav(); }}
                    className={styles.dropdownText}
                  >
                    Quality Assurance
                  </NavLink>
                </NavDropdown.Item>
                {/* <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/hello"
                    onClick={() => { handleActiveNav(2); closeNav(); }}
                    className={styles.dropdownText}
                  >
                    IT Consultancy
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/hello"
                    onClick={() => { handleActiveNav(2); closeNav(); }}
                    className={styles.dropdownText}
                  >
                    AI Solutions
                  </NavLink>
                </NavDropdown.Item> */}
              </NavDropdown>

              <NavLink
                to="/contactUs"
                className={`${styles.nav_text} nav-link ${activeNav[3] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => { handleActiveNav(3); closeNav(); }}
              >
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
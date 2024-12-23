import { NavLink } from "react-router-dom";


export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 header-col">
            <div className="logo-side">
              <NavLink to={"/"}>
                {" "}
                <h2>WorldAtlas</h2>{" "}
              </NavLink>
            </div>
            <nav className="menu-side">
              <ul className="menu-list">
                <li >
                  <NavLink to={"/"}> Home </NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}> About </NavLink>
                </li>
                <li>
                  <NavLink to={"/country"}> Country </NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}> Contact </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

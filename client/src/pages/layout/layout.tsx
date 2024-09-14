import { Navbar } from "../../components";
import "./layout.scss";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPage;

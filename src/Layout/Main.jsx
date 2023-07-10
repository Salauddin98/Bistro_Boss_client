import { Outlet, useLocation } from "react-router-dom";
import Footer from "../page/shared/Footer/Footer";
import NavBar from "../page/shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <>
      {noHeaderFooter || <NavBar></NavBar>}
      <div className="min-h-[calc(100vh-361px)]">
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </>
  );
};

export default Main;

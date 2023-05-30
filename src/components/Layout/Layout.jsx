import React, { Fragment } from "react"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import HeaderAfterLogin from "../../pages/HeaderAfterLogin"

const Layout = () => {
  const [login,setLogin]=React.useState(false)
  return (
    <Fragment>
      {
        login 
        ?
        <HeaderAfterLogin/>
        :
        <Header/>
      }
      <div>
        <Routers login={login} setLogin={setLogin}/>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;

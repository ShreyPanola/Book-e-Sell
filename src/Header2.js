import logo from './images/logo.png';
import './App.css';
// import { HomePage } from './components/HomePage';
// import { Login1 } from './components/Login1';
// import { Register } from './components/Register';
// import { NotFound } from './components/NotFound';
// import { LandingPage } from './components/LandingPage';
// import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
// import { globalsStyles } from './constants';
import appStyle from './AppStyle.module.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const Navigate = useNavigate();

    const onHomePageClick = () => {
        Navigate("/");
    };

    const cartAccess = () => {
        Navigate("/cart");
    };

    return (
        <div>
            {/* Header */}
            <ThemeProvider theme={theme}>

                <div style={{ width: 1540, height: 10, backgroundColor: "rgb(255,89,92)" }}></div>

                <img src={logo} alt='App Logo' style={{ width: 170, height: 45, marginTop: 10, marginLeft: 5 }} />
                <ToastContainer />
                <div
                    // style={{
                    //   ...globalsStyles.navbar,
                    // }}
                    className={appStyle.navbarStyle}
                    style={{ marginTop: -42, fontSize: 17 }}
                >
                    <Link to="/LandingPage"
                        style={{ marginLeft: 700, color: "rgb(255,89,92)" }}>
                        Books Catalogue
                    </Link>

                    <span style={{ color: "rgb(255,89,92)", marginLeft: 8 }}>|</span>


                    {/* Work for Update Profile Pending */}
                    <Link to="/updateProfile"
                        style={{ marginLeft: 10, color: "rgb(255,89,92)" }}>
                        Update Profile
                    </Link>

                    <span style={{ color: "rgb(255,89,92)", marginLeft: 8 }}>|</span>

                    <Link to="/addBook"
                        style={{ marginLeft: 10, color: "rgb(255,89,92)" }}>
                        Add Book
                    </Link>

                    <span style={{ color: "rgb(255,89,92)", marginLeft: 8 }}>|</span>

                    <Link to="/manageBooks"
                        style={{ marginLeft: 10, color: "rgb(255,89,92)" }}>
                        Manage Books
                    </Link>

                    {/* <span style={{ color: "rgb(255,89,92)", marginLeft: 8 }}>|</span>

                        <Link to="/register"
                            style={{ marginLeft: 10, color: "rgb(255,89,92)" }}>
                            Register
                        </Link> */}

                    {/* <span style={{color:"rgb(255,89,92)",marginLeft:8}}>|</span>

  <Link to="/applet"
  style={{marginLeft:10, color:"rgb(255,89,92)"}}>
  Applet
  </Link> */}

                    <Button variant="outlined" style={{ marginTop: -4, marginLeft: 10, borderColor: "rgba(50,50,50,0.3)" }} onClick={cartAccess}><ShoppingCartIcon style={{ color: "rgb(255,89,92)" }} /><span style={{ marginTop: 2, marginLeft: 4, color: "rgb(0,0,0)" }}>Cart</span></Button>
                    <Button variant="outlined" style={{ marginTop: -4, marginLeft: 10, borderColor: "rgba(50,50,50,0.3)" }}><span style={{ marginTop: 2, marginLeft: 4, color: "rgb(0,0,0)" }} onClick={onHomePageClick}>Logout</span></Button>
                </div>

                <br></br>
                <div style={{ width: 1540, height: 80, backgroundColor: "rgb(244,244,244)" }}>
                    <form>
                        <input type='text' placeholder='What are you looking for...' style={{ height: 35, width: 550, marginTop: 20, marginLeft: 400, fontSize: 17, fontStyle: "italic" }}></input>
                        <Button variant="contained" style={{ backgroundColor: "rgb(128,191,50)", height: 40, marginTop: -4, marginLeft: 10 }} type="submit"><SearchIcon />Search</Button>
                    </form>
                </div>

            </ThemeProvider>
        </div>
    )
}

export default Header;
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CloseIcon from '@mui/icons-material/Close';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import LanguageIcon from '@mui/icons-material/Language';
import LightModeIcon from '@mui/icons-material/LightMode';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import TableChartIcon from '@mui/icons-material/TableChart';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ColorContext } from '../../ColorContext/darkContext';

// import sass file
import './navbar.scss';

// import images
import admin from '../../Images/admin_pic.jpg';

function Navbar() {
    const [toggle, setToggle] = useState(false);
    // color state management using react context
    const { darkMode, dispatch } = useContext(ColorContext);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="navbarr">
            <div className="navbar_main">
                <div className="menu_logo max-sm:block hidden">
                    {toggle ? (
                        <CloseIcon className="menu_icon" onClick={handleToggle} />
                    ) : (
                        <MenuIcon className="menu_icon" onClick={handleToggle} />
                    )}
                </div>


                <div className="item_lists">
                    <div className="item">
                        {!darkMode ? (
                            <DarkModeIcon
                                className="item_icon"
                                onClick={() => dispatch({ type: 'TOGGLE' })}
                            />
                        ) : (
                            <LightModeIcon
                                className="item_icon white"
                                onClick={() => dispatch({ type: 'TOGGLE' })}
                            />
                        )}
                    </div>


                   
                </div>
            </div>

            <div className="res_navbar">
                {toggle && (
                    <div className="res_nav_menu">
                        <div className="res_nav_menuu">
                            <div className="links">
                                <ul>
                                    <p className="spann">Main</p>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <li>
                                            <DashboardIcon className="icon" /> Dashboard
                                        </li>
                                    </Link>

                                    <p className="spann">lists</p>
                                    <Link to="/admin/dashboard/users" style={{ textDecoration: 'none' }}>
                                        <li>
                                            <PersonIcon className="icon" /> Users
                                        </li>
                                    </Link>

                                    <Link to="/admin/dashboard/products" style={{ textDecoration: 'none' }}>
                                        <li>
                                            <TableChartIcon className="icon" /> Products
                                        </li>
                                    </Link>
                                    <Link to="/admin/dashboard/orders" style={{ textDecoration: 'none' }}>
                                        <li>
                                            <CreditCardIcon className="icon" /> Orders
                                        </li>
                                    </Link>
                                    <li>
                                        <CreditCardIcon className="icon" /> Balance
                                    </li>
                                    <li>
                                        <BarChartIcon className="icon" /> Status
                                    </li>

                                    <p className="spann">Seetings</p>
                                    <li>
                                        <AccountCircleIcon className="icon" /> Profile
                                    </li>
                                    <li>
                                        <SettingsRoundedIcon className="icon" /> Setting
                                    </li>
                                    <li>
                                        <LogoutIcon className="icon" /> Log Out
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;

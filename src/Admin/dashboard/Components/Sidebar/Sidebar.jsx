/* eslint-disable jsx-a11y/no-static-element-interactions */
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import TableChartIcon from '@mui/icons-material/TableChart';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ColorContext } from '../../ColorContext/darkContext';
import './Sidebar.scss';
import logo from "../../../../public/sanieldan-logo-1-768x144.png"

function Sidebar() {
    // color state management using react context
    const { darkMode, dispatch } = useContext(ColorContext);

    return (
        <div className="sidebar">
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img src={logo} alt='logo'/>
                    <h3 className="text_none text-xl">Admin Dashboard</h3>
                </Link>
            </div>

            <div className="links">
                <ul>

                    <Link to="/admin/dashboard" style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className="icon" />
                             <p className='ml-8'>Dashboard</p>

                        </li>
                    </Link>

                    <Link to="/admin/dashboard/users" style={{ textDecoration: 'none' }}>
                        <li className='pl-10'>
                            <PersonIcon className="icon" />
                            <p className='ml-8'>Users</p>
                        </li>
                    </Link>

                    <Link to="/admin/dashboard/products" style={{ textDecoration: 'none' }}>
                        <li>
                            <TableChartIcon className="icon" />
                            <p className='ml-8'>Products</p>
                        </li>
                    </Link>




                    <li>
                        <AccountCircleIcon className="icon" />
                        <p className='ml-8'>Profile</p>
                    </li>

                    <li>
                        <LogoutIcon className="icon" />
                        <p className='ml-8'>Log Out</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;

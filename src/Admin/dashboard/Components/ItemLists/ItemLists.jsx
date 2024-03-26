import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Link } from 'react-router-dom';
import './itemlists.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function ItemLists({ type }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Fetch user count from backend
        const fetchUserCount = async () => {
            try {
                const response = await axios.get(
                    // 'http://localhost:3005/admin/user/count',
                    "https://www.portal-sanieldanproperties-api.onrender.com/admin/count",);
                setCount(response.data.count);
            } catch (error) {
                console.error('Error fetching user count:', error);
            }
        };

        fetchUserCount();
    }, []);

    let data;

    // Dynamically change the UI content
    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                count: count,
                icon: (
                    <PermIdentityIcon
                        style={{
                            color: '#FF74B1',
                            backgroundColor: '#FFD6EC',
                        }}
                        className="icon"
                    />
                ),
                link: 'See all users',
                linkto: '/admin/dashboard/users',
            };
            break;
        case 'products':
            data = {
                title: 'PRODUCTS',
                isMoney: true,
                count: 107, // Hardcoded count for now
                icon: (
                    <AttachMoneyOutlinedIcon
                        style={{
                            color: '#367E18',
                            backgroundColor: '#A7FFE4',
                        }}
                        className="icon"
                    />
                ),
                link: 'See all products',
                linkto: '/admin/dashboard/products',
            };
            break;

        default:
            break;
    }

    return (
        <div className="item_listss">
            <div className="name">
                <p>{data.title}</p>
            </div>

            <div className="counts">
                {data.isMoney && <AttachMoneyOutlinedIcon />}
                {data.count}
            </div>

            <div className="see_item">
                <Link to={data.linkto}>
                    <p>{data.link}</p>
                </Link>
            </div>
        </div>
    );
}

export default ItemLists;
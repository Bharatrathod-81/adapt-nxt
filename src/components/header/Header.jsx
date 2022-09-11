import React from 'react'
import './Header.css';

export const Header = () => {
    return (
        <div className='header_body'>
            <div className='left_header_content'>
                <img src="https://adaptnxt.com/wp-content/uploads/2020/11/adaptnxt-final_purple-square.png" alt='logo icon' className='logo_img' />
                <i class="fa fa-server" style={{ fontSize: "24px" }}></i>
            </div>
            <div className='right_header_content'>
                <i class="fa fa-moon-o" style={{ fontSize: "24px" }}></i>
                <i class="fa fa-bell-o" style={{ fontSize: "24px" }}></i>
                <i class="fa fa-language" style={{ fontSize: "24px" }}></i>
                <img src="https://i.ytimg.com/vi/FRIUhO4MdGU/mqdefault.jpg" alt='avator' className='avator_img' />
            </div>
        </div>
    )
};
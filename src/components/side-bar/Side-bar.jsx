import React from 'react';
import './Side-bar.css';

export const SideBar = ({ prop }) => {
    const {setValue,value} = prop;

    const ElementArray = ["Dashboard","Inventory","Orders","Shipping","Channel"];

    const obj = {
        "Dashboard":"fa fa-tachometer",
        "Inventory":"fa fa-tag",
        "Orders":"fa fa-credit-card-alt",
        "Shipping":"fa fa-truck",
        "Channel":"fa fa-share-alt",
    }

    return (
        <div className='sidebar_body'>
            {ElementArray.map(e => 
            <div 
            key={e}
            className={value===e ? "sidebar_element active_elements":"sidebar_element"}
            onClick={() => setValue(e)}>
                <i class={`${obj[e]} fa-icons`} style={{ fontSize: "24px" }}></i>
                {e}
            </div>)}
        </div>
    )
};
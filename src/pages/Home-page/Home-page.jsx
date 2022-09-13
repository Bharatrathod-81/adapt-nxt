import React from 'react';
import { useState } from 'react';
import './Home-page.css';

export const HomePage = ({ prop }) => {

    const [Status, setStatus] = useState("Pending");
    const { setValue, value } = prop;

    const orderStatus = ['Pending', 'Accepted', 'AWB Created', 'Ready to Ship', 'Shipped', 'Completed', 'Cancelled'];

    const dataArr =
        [
            {
                channel: "",
                orderNo: "#TKN20203754",
                orderDate: "2022-05-04",
                city: "Lucknow",
                customerName: "balan",
                orderValue: 0.00,
                status: "Pending"
            },
            {
                channel: "",
                orderNo: "#TKN20203754",
                orderDate: "2022-05-04",
                city: "Lucknow",
                customerName: "veer",
                orderValue: 0.00,
                status: "Cancelled"
            },
            {
                channel: "",
                orderNo: "#TKN20203754",
                orderDate: "2022-05-04",
                city: "pune",
                customerName: "bal veer",
                orderValue: 0.00,
                status: "Completed"
            },
            {
                channel: "",
                orderNo: "#TKN20203754",
                orderDate: "2022-05-04",
                city: "pune",
                customerName: "bal veer",
                orderValue: 0.00,
                status: "Completed"
            },
            {
                channel: "",
                orderNo: "#TKN20203754",
                orderDate: "2022-05-04",
                city: "pune",
                customerName: "bal veer",
                orderValue: 0.00,
                status: "Completed"
            },
            {
                channel: "",
                orderNo: "#TKN20203754",
                orderDate: "2022-05-04",
                city: "pune",
                customerName: "bal veer",
                orderValue: 0.00,
                status: "Pending"
            },
            {
                channel: "",
                orderNo: "#TKN20203754",
                orderDate: "2022-05-04",
                city: "pune",
                customerName: "bal veer",
                orderValue: 0.00,
                status: "Pending"
            },
        ]

    return (
        <div className='home_body'>

            <div className='home_top_container'>

                {value ? <div className='home_top_content1'>
                    {value}
                    <i
                        class="fa fa-times"
                        onClick={() => setValue(null)}
                    ></i>
                </div>
                    :
                    <div></div>
                }

                <div className='home_top_content2'>
                    <i class="fa fa-gear fa-spin" style={{ fontSize: "24px" }}></i>
                </div>

            </div>

            <div className='home_mid_container'>
                {orderStatus.map(e =>
                    <p
                        onClick={() => setStatus(e)}
                        className={e === Status ? 'order_status order_status_active' : 'order_status'}
                        key={e}>{e}
                    </p>)}
            </div>

            <div className='home_bottom_container'>

                <div className='home_bottom_content1'>
                    <div className='bottom_content1_left_elements'>
                        <button className='import_orders'><i class="fa fa-cloud-download"></i> Import Orders</button>
                        <button className='accept' disabled><i class="fa fa-check-square"></i> Accept</button>
                        <button className='print' disabled><i class="fa fa-print"></i> Print</button>
                    </div>
                    <button className='refresh_btn'><i class="fa fa-refresh"></i>  Refresh</button>
                </div>

                <div className='home_bottom_content2'>
                    <div className='bottom_content2_category'>
                        <input type="checkbox" className='check_input' />
                        <div className='channel'>
                            Channel
                            <span>
                                <i class="fa fa-unsorted"></i>
                                <i class="fa fa-filter"></i>
                            </span>
                        </div>
                        <div className='order_no'>
                            Order No
                            <span>
                                <i class="fa fa-unsorted"></i>
                                <i class="fa fa-search"></i>
                            </span>
                        </div>
                        <div className='order_date'>
                            Order Date
                            <span>
                                <i class="fa fa-unsorted"></i>
                                <i class="fa fa-search"></i>
                            </span>
                        </div>
                        <div className='city'>
                            City
                            <i class="fa fa-unsorted unsorted"></i>
                        </div>
                        <div className='customer_name'>
                            Customer Name
                            <i class="fa fa-search"></i>
                        </div>
                        <div className='order_value'>
                            <div className='order_value_text'>
                                Order Value
                            </div>
                            <i class="fa fa-unsorted unsorted"></i>
                        </div>
                        <div className='status'>
                            Status
                            <i class="fa fa-unsorted unsorted"></i>
                        </div>
                        <div className='operation'>
                            Operation
                        </div>
                    </div>
                    <div className='bottom_content2_category_container'>

                        {dataArr.map(e => {
                            if (e.status === Status) {
                                return (
                                    <div className='category_elements'>
                                        <div className='plus'>+</div>
                                        <div className='all_category_data'>
                                            <input type="checkbox" className='check_input ' />
                                            <div className='channel'><i class="fa fa-money"></i></div>
                                            <div className='order_no order_color'>{e.orderNo}</div>
                                            <div className='order_date'>{e.orderDate}</div>
                                            <div className='city'>{e.city}</div>
                                            <div className='customer_name'>{e.customerName}</div>
                                            <div className='order_value'>{e.orderValue}.00</div>
                                            <div className={`${e.status} status`}>{e.status}</div>
                                            <div className='operation'>Actions <i class="fa fa-angle-down"></i></div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                        <div className='down_side_btn'>
                            <button className='down_btn1'><i class="fa fa-angle-left"></i></button>
                            <p className='number'>1</p>
                            <button className='down_btn2'><i class="fa fa-angle-right"></i></button>
                            <div className='pages'>20/page <i class="fa fa-angle-down"></i></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
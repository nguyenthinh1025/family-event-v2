import React, { useEffect } from 'react'
import { useState } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { history } from '../../App'

export default function ChartPrice (props) {
    const { month1, month2, month3, month4, month5, month6, month7, month8, month9, month10, month11, month12, tron3, price1, price2, price3, price4, price5, price6, price7, price8, price9, price10, price11, price12 } = useSelector(root => root.ChartReducer)
    const data = [
        {
            id: 1,
            month: 1,
            count: price1?.totalPrice
        },
        {
            id: 2,
            month: 2,
            count: price2?.totalPrice
        },
        {
            id: 3,
            month: 3,
            count: price3?.totalPrice
        },
        {
            id: 4,
            month: 4,
            count: price4?.totalPrice
        },
        {
            id: 5,
            month: 5,
            count: price5?.totalPrice
        },
        {
            id: 6,
            month: 6,
            count: price6?.totalPrice
        },
        {
            id: 7,
            month: 7,
            count: price7?.totalPrice
        },
        {
            id: 8,
            month: 8,
            count: price8?.totalPrice
        },
        {
            id: 9,
            month: 9,
            count: price9?.totalPrice
        },
        {
            id: 10,
            month: 10,
            count: price10?.totalPrice
        },
        {
            id: 11,
            month: 11,
            count: price11?.totalPrice
        },
        {
            id: 12,
            month: 12,
            count: price12?.totalPrice
        },
    ]
    const [chartData, setChartData] = useState({
        labels: data.map((data) => data.month),
        datasets: [{
            label: 'Thống Kê Doanh Thu Trong Một Năm',
            data: data.map((data) => data.count),
            backgroundColor: [
                "rgba(75,192,192,6)",
            ],
            borderColor: [
                "rgba(0,0,0,0.3)"
            ]
        }]
    })

    const [tron, setTron] = useState([tron3])
    console.log(tron[0]);
    const [tronData, setTronData] = useState({
        labels: tron[0].map((data) => data.statisticalID),
        datasets: [{
            label: 'Thống Kê Sự Kiện Trong Tháng',
            data: tron[0].map((data) => data.count),
            backgroundColor: [
                "rgba(75,192,192,6)",
                "red",
                "blue",
                "green",
                "black",
            ],
            borderColor: [
                "rgba(0,0,0,0.3)"
            ]
        }]
    })

    useEffect(() => {
        // Cập nhật giá trị của stateB khi stateA thay đổi
        setTronData({
            labels: tron[0].map((data) => data.statisticalID),
            datasets: [{
                label: 'Thống Kê Sự Kiện Trong Tháng',
                data: `${tron[0].map((data) => data.count)} vnđ`,
                backgroundColor: [
                    "rgba(75,192,192,6)",
                    "red",
                    "blue",
                    "green",
                    "black",
                ],
                borderColor: [
                    "rgba(0,0,0,0.3)"
                ]
            }]
        });
    }, [tron]);
    console.log(tronData);


    return (
        <div>
            <div className="" style={{ backgroundClip: '#5469d4' }} >
                <div className="app-sidebar__inner" >
                    <ul className="vertical-nav-menu" >
                        <li className="app-sidebar__heading " style={{ marginLeft: '35%', marginTop: '50px', fontSize: '40px' }}>Thống Kê sự kiện</li>
                        <li style={{ marginLeft: '10%', marginTop: '5%' }}>
                            <NavLink to='/' style={{ width: '300px', backgroundColor: '#1d96ed', color: 'white' }}>

                                {/* <i className="metismenu-icon pe-7s-diamond" /> */}
                                Thống Kê
                                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                            </NavLink>
                            <ul style={{ width: '300px' }}>
                                <li>
                                    <NavLink to='/chartyear'>Thông kê theo năm</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/chartquy'>Thông kê theo quý </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/chartmonth'>Thông kê theo tháng </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/chartprice'>Thông kê doanh thu trong năm</NavLink>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>

            <div style={{ width: '1000px', height: '700px', marginTop: '50px' }} className='container'>
                <Bar data={chartData} />
            </div>





        </div>
    )
}

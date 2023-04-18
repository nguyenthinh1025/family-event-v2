import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Chart1 (props) {
    const { quy1, quy2, quy3, quy4, tron3, tron2, tron1, tron4, tron5, tron6, tron7, tron8, tron9, tron10, tron11, tron12 } = useSelector(root => root.ChartReducer)
    const data = [

        {
            id: 1,
            month: "Qúy I",
            count: quy1?.count
        },
        {
            id: 2,
            month: "Qúy II",
            count: quy2?.count
        },
        {
            id: 3,
            month: "Qúy III",
            count: quy3?.count
        },
        {
            id: 4,
            month: "Qúy IV",
            count: quy4?.count
        },

    ]
    const [chartData, setChartData] = useState({
        labels: data.map((data) => data.month),
        datasets: [{
            label: 'Thống Kê Sự Kiện Được Đặt Theo Qúy 2023',
            data: data.map((data) => data.count),
            backgroundColor: [
                "rgba(75,192,192,6)",
                // "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0"
            ],
            borderColor: [
                "rgba(0,0,0,0.6)"
            ],
            borderWidth: 2
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
                                    <NavLink to='/chartquy'>Thông kê theo quý</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/chartmonth'>Thông kê theo tháng</NavLink>
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
        // <div></div>
    )
}

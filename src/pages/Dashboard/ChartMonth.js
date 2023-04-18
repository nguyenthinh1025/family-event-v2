import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

export default function ChartMonth () {
    const { month1, month2, month3, month4, month5, month6, month7, month8, month9, month10, month11, month12, tron3, tron2, tron1, tron4, tron5, tron6, tron7, tron8, tron9, tron10, tron11, tron12 } = useSelector(root => root.ChartReducer)
    const [tron, setTron] = useState([tron4])
    console.log(tron[0]);
    const [tronData, setTronData] = useState({
        labels: tron[0].map((data) => data.statisticalID),
        datasets: [{
            label: `Thống Kê Sự Kiện Trong Tháng`,
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
                label: `Thống Kê Sự Kiện Trong Tháng `,
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
            <div className="dropdown">
                <button className="btn dropdown-toggle" style={{ backgroundColor: '#1d96ed', color: 'white', marginLeft: '10%' }} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Thống Kê Theo Tháng
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><div className="dropdown-item" onClick={() => {
                        setTron([tron1])
                    }}>Tháng 1</div></li>
                    <li><div className="dropdown-item" onClick={() => {
                        setTron([tron2])
                    }}>Tháng 2</div></li>
                    <li><div className="dropdown-item" onClick={() => {
                        setTron([tron3])
                    }}>Tháng 3</div></li>
                    <li><div className="dropdown-item" onClick={() => {
                        setTron([tron4])
                    }}>Tháng 4</div></li>
                    <li><div className="dropdown-item" onClick={() => {
                        setTron([tron5])
                    }}>Tháng 5</div></li>
                    <li><div className="dropdown-item" onClick={() => {
                        setTron([tron6])
                    }}>Tháng 6</div></li>
                    <li><div className="dropdown-item" onClick={() => {
                        setTron([tron7])
                    }}>Tháng 7</div></li>
                    <li><div className="dropdown-item" onClick={() => {
                        setTron([tron8])
                    }}>Tháng 8</div></li>
                    <li><div className="dropdown-item" onClick={() => {
                        setTron([tron9])
                    }}>Tháng 9</div></li>
                    <li><div className="dropdown-item" onClick={() => {
                        setTron([tron10])
                    }}>Tháng 10</div></li>
                    <li><div className="dropdown-item" onClick={() => {
                        setTron([tron11])
                    }}>Tháng 11</div></li>
                    <li><div className="dropdown-item" onClick={() => {
                        setTron([tron12])
                    }}>Tháng 12</div></li>
                </ul>
            </div>




            <div style={{ width: '1000px', height: '700px', marginTop: '50px', marginLeft: '23%' }} className='container'>
                <Pie data={tronData} />

            </div>

        </div>
    )
}

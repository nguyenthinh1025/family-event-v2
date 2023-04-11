import React, { useEffect, useState } from 'react'
import { ChartMonth10Action, ChartMonth11Action, ChartMonth12Action, ChartMonth1Action, ChartMonth2Action, ChartMonth3Action, ChartMonth4Action, ChartMonth5Action, ChartMonth6Action, ChartMonth7Action, ChartMonth8Action, ChartMonth9Action, ChartMonthTron10Action, ChartMonthTron11Action, ChartMonthTron12Action, ChartMonthTron1Action, ChartMonthTron2Action, ChartMonthTron3Action, ChartMonthTron4Action, ChartMonthTron5Action, ChartMonthTron6Action, ChartMonthTron7Action, ChartMonthTron8Action, ChartMonthTron9Action, ChartQuy1Action, ChartQuy2Action, ChartQuy3Action, ChartQuy4Action } from '../../redux/action/Chart';
import { batch, useDispatch, useSelector } from 'react-redux';
import Chart from 'chart.js/auto';

import { Line, Pie } from 'react-chartjs-2';
import LineChart from './LineChart';
import { NavLink } from 'react-router-dom';

export default function Dashboard () {
    const { month1, month2, month3, month4, month5, month6, month7, month8, month9, month10, month11, month12, tron3, tron2, tron1, tron4, tron5, tron6, tron7, tron8, tron9, tron10, tron11, tron12 } = useSelector(root => root.ChartReducer)
    const dispatch = useDispatch()

    useEffect(() => {

        batch(() => {
            const action1 = ChartMonth1Action();
            dispatch(action1)
            const action2 = ChartMonth2Action();
            dispatch(action2)
            const action3 = ChartMonth3Action();
            dispatch(action3)
            const action4 = ChartMonth4Action();
            dispatch(action4)
            const action5 = ChartMonth5Action();
            dispatch(action5)
            const action6 = ChartMonth6Action();
            dispatch(action6)
            const action7 = ChartMonth7Action();
            dispatch(action7)
            const action8 = ChartMonth8Action();
            dispatch(action8)
            const action9 = ChartMonth9Action();
            dispatch(action9)
            const action10 = ChartMonth10Action();
            dispatch(action10)
            const action11 = ChartMonth11Action();
            dispatch(action11)
            const action12 = ChartMonth12Action();
            dispatch(action12)
            const quy1 = ChartQuy1Action();
            dispatch(quy1)
            const quy2 = ChartQuy2Action();
            dispatch(quy2)
            const quy3 = ChartQuy3Action();
            dispatch(quy3)
            const quy4 = ChartQuy4Action();
            dispatch(quy4)

            const tron3 = ChartMonthTron3Action();
            dispatch(tron3)
            const tron2 = ChartMonthTron2Action();
            dispatch(tron2)
            const tron1 = ChartMonthTron1Action();
            dispatch(tron1)
            const tron4 = ChartMonthTron4Action();
            dispatch(tron4)
            const tron5 = ChartMonthTron5Action();
            dispatch(tron5)
            const tron6 = ChartMonthTron6Action();
            dispatch(tron6)
            const tron7 = ChartMonthTron7Action();
            dispatch(tron7)
            const tron8 = ChartMonthTron8Action();
            dispatch(tron8)
            const tron9 = ChartMonthTron9Action();
            dispatch(tron9)
            const tron10 = ChartMonthTron10Action();
            dispatch(tron10)
            const tron11 = ChartMonthTron11Action();
            dispatch(tron11)
            const tron12 = ChartMonthTron12Action();
            dispatch(tron12)
        })
    }, []);

    const data = [
        {
            id: 1,
            month: 1,
            count: month1?.count
        },
        {
            id: 2,
            month: 2,
            count: month2?.count
        },
        {
            id: 3,
            month: 3,
            count: month3?.count
        },
        {
            id: 4,
            month: 4,
            count: month4?.count
        },
        {
            id: 5,
            month: 5,
            count: month5?.count
        },
        {
            id: 6,
            month: 6,
            count: month6?.count
        },
        {
            id: 7,
            month: 7,
            count: month7?.count
        },
        {
            id: 8,
            month: 8,
            count: month8?.count
        },
        {
            id: 9,
            month: 9,
            count: month9?.count
        },
        {
            id: 10,
            month: 10,
            count: month10?.count
        },
        {
            id: 11,
            month: 11,
            count: month11?.count
        },
        {
            id: 12,
            month: 12,
            count: month12?.count
        },
    ]


    const [chartData, setChartData] = useState({
        labels: data.map((data) => data.month),
        datasets: [{
            label: 'Thống Kê Sự Kiện ',
            data: data.map((data) => data.count),
            backgroundColor: [
                "rgba(75,192,192,6)",
            ],
            borderColor: [
                "rgba(0,0,0,0.3)"
            ]
        }]
    })
    console.log(chartData);



    // console.log(chartData);
    // console.log(month1);

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
        <div >
            {/* {data.length > 0 && <LineChart data={data} />} */}

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
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>


            {/* <select className="selectpicker">
                <optgroup label="Picnic">
                    <option><NavLink to='/chartyear'>Thông kê theo năm</NavLink></option>
                    <option><NavLink to='/chart1'>Thông kê theo quý I</NavLink></option>

                </optgroup>

            </select> */}
            <div style={{ width: '1000px', height: '700px', marginTop: '50px' }} className='container'>
                {data.length > 0 && <Line data={chartData} />}
            </div>







        </div>

    )
}

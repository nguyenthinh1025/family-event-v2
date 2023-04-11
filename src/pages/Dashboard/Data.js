import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from './Dashboard';

export default function Data () {
    const { month1, month2, month3, month4 } = useSelector(root => root.ChartReducer)
    const dispatch = useDispatch()
    useEffect(async () => {
        const action1 = await ChartMonth1Action();
        await dispatch(action1)
        const action2 = await ChartMonth2Action();
        await dispatch(action2)
        const action3 = await ChartMonth3Action();
        await dispatch(action3)
        const action4 = await ChartMonth4Action();
        await dispatch(action4)
    }, []);
    const data = [
        {
            id: 1,
            month: 1,
            count: month1.count
        },
        {
            id: 2,
            month: 2,
            count: month2.count
        },
        {
            id: 3,
            month: 3,
            count: month3.count
        },
        {
            id: 4,
            month: 4,
            count: month4.count
        },
    ]
    return (
        <div><Dashboard data={data} /></div>
    )
}

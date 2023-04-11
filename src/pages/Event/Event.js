import React, { useState } from 'react'
import { useEffect } from 'react'
import { GetEventAction } from '../../redux/action/EventAction';
import { useDispatch, useSelector } from 'react-redux';
import { GetScriptAction } from '../../redux/action/ScriptAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import Pagination from 'rc-pagination';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

export default function Event () {
    const { arrEvent } = useSelector(root => root.ListEventReducer)
    const { arrScript } = useSelector(root => root.ScriptReducer);
    const { arrEventType } = useSelector(root => root.EventTypeReducer);
    const { arrMenu } = useSelector(root => root.MenuReducer);
    const { arrEventBooker } = useSelector(root => root.EventBookerReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        const action = GetEventAction();
        dispatch(action)
        const action1 = GetScriptAction();
        dispatch(action1)
    }, []);
    console.log(arrEvent);
    console.log(arrScript);
    // const result = arrEvent.filter(item1 => arrScript.some(item2 => item2.id === item1.scriptId)).map(item => arrScript.find(obj => obj.scriptId === item.id).scriptName)
    // console.log(result[0]);
    const [perPage, setPerPage] = useState(5);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);
    const [search, setSearch] = useState('');
    const PerPageChange = (value) => {
        setSize(value);
        const newPerPage = Math.ceil(arrEvent.length / value);
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    }

    const getData = (current, pageSize) => {
        // Normally you should get the data from the server
        // return arrEvent.slice((current - 1) * pageSize, current * pageSize)
        if (search === "") {
            return arrEvent.slice((current - 1) * pageSize, current * pageSize)
        }
        else {
            return arrEvent.filter(item => item.organizedPerson.toLowerCase().includes(search.toLowerCase().trim()))
        }
    };

    const PaginationChange = (page, pageSize) => {
        setCurrent(page);
        setSize(pageSize)
    }

    const PrevNextArrow = (current, type, originalElement) => {
        if (type === 'prev') {
            return <button><FontAwesomeIcon icon={faAngleDoubleLeft} /></button>;
        }
        if (type === 'next') {
            return <button><FontAwesomeIcon icon={faAngleDoubleRight} /></button>;
        }
        return originalElement;
    }
    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    <div className='container display-6 fw-bold title'>Danh Sách Sự Kiện</div>
                    {/* <NavLink to='/adddecor'><button className='btn btn-primary' style={{ width: '150px' }}>Add New</button></NavLink> */}
                    {/* <NavLink className='test' to='/adddecor'>
                        <div className="primary-button">
                            <div className="custom-button">Thêm Mới</div>
                        </div>
                    </NavLink> */}
                </div>
            </div>
            <div className="container-fluid mt-2 mb-2" >

                <div className="row justify-content-center">
                    <div className="col-md-11">
                        <div className="card">
                            <div className="card-body p-0">

                                <div className='d-flex justify-content-between '>
                                    <div className='col' style={{ marginTop: '20px' }}>
                                        <input className='search-bar' onChange={(e) => setSearch(e.target.value)} />
                                        <div className='div1' />
                                    </div>
                                    <div className="table-filter-info">

                                        <Pagination
                                            className="pagination-data"
                                            showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                                            onChange={PaginationChange}
                                            total={arrEvent.length}
                                            current={current}
                                            pageSize={size}
                                            showSizeChanger={false}
                                            itemRender={PrevNextArrow}
                                            onShowSizeChange={PerPageChange}
                                        />
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-text-small mb-0">
                                        <thead className="thead-primary table-sorting">
                                            <tr>
                                                <th className='ml-4'>Số Thứ Tự</th>
                                                <th>Tên Sự Kiện</th>
                                                <th>Ngày Bắt Đầu</th>
                                                <th>Ngày Kết Thức</th>
                                                <th>Thiết Kế</th>
                                                <th>Giá Tiền</th>
                                                <th>Loại Sự Kiện</th>
                                                <th style={{ position: 'relative' }}><div style={{ position: 'absolute', right: '20px', bottom: '7px' }}>Hành Động</div></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                getData(current, size).length === 0 ? <div style={{ margin: '0 auto', fontSize: '30px', paddingTop: '20px', paddingLeft: '20px' }}>Không tìm thấy kết quả phù hợp</div> : getData(current, size).map((data, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{++index}</td>
                                                            <td>{data.organizedPerson}</td>
                                                            <td>{moment(data.startDate).format('DD/MM/YYYY')}</td>
                                                            <td>{moment(data.endDate).format('DD/MM/YYYY')}</td>
                                                            <td><img src={data.foodImage} className="rounded " width={100} height={100} alt="Hình Sự Kiện" /></td>
                                                            <td>{data.totalPrice.toLocaleString()}</td>
                                                            <td>{data.eventType?.eventTypeName}</td>

                                                            <td>
                                                                <div className='d-flex justify-content-end'>
                                                                    <NavLink to={`/editevent/${data.eventId}`} style={{ cursor: 'pointer' }}><img src='./../../images/edit.svg' width={30} className="mr-4" /></NavLink>
                                                                    <div style={{ cursor: 'pointer' }} onClick={async () => {
                                                                        // const action = await DeleteDecorAction(data.decorationId)
                                                                        // await dispatch(action)
                                                                        // toast.error(`Xóa trang trí ${data.foodTypeName} thành công`, {
                                                                        //     position: toast.POSITION.TOP_RIGHT
                                                                        // });
                                                                    }}><img src='./../../images/delete.svg' width={30} /></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="table-filter-info">

                                    <Pagination
                                        className="pagination-data"
                                        showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                                        onChange={PaginationChange}
                                        total={arrEvent.length}
                                        current={current}
                                        pageSize={size}
                                        showSizeChanger={false}
                                        itemRender={PrevNextArrow}
                                        onShowSizeChange={PerPageChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

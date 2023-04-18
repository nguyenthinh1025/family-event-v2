import React, { useEffect, useState } from 'react'
import Pagination from 'rc-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteDrinkAction, GetDrinkAction } from '../../redux/action/DrinkAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DeleteEntertainmenAction, GetEntertainmentAction } from '../../redux/action/EntertainmentAction';
export default function Entertainment () {
    const dispatch = useDispatch();
    useEffect(() => {
        const action = GetEntertainmentAction();
        dispatch(action)

    }, []);
    const { arrEntertainment } = useSelector(root => root.EntertainmentReducer);
    console.log(arrEntertainment);
    const [perPage, setPerPage] = useState(5);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);
    const [search, setSearch] = useState('');
    const PerPageChange = (value) => {
        setSize(value);
        const newPerPage = Math.ceil(arrEntertainment.length / value);
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    }

    const getData = (current, pageSize) => {
        // Normally you should get the data from the server
        // return arrEntertainment.slice((current - 1) * pageSize, current * pageSize)
        if (search === "") {
            return arrEntertainment.slice((current - 1) * pageSize, current * pageSize)
        }
        else {
            return arrEntertainment.filter(item => item.drinkName.toLowerCase().includes(search.toLowerCase().trim()))
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
                    <div className='container display-6 fw-bold title '>Danh Sách Giải Trí</div>
                    {/* <NavLink to='/adddrink'><button className='btn btn-primary' style={{ width: '150px' }}>Add New</button></NavLink> */}
                    <NavLink className='test' to='/addentertainment'>
                        <div className="primary-button">
                            <div className="custom-button">Thêm Mới</div>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="container-fluid mt-2 mb-2" >

                <div className="row justify-content-center">
                    <div className="col-md-11">
                        <div className="card">
                            <div className="card-body p-0">

                                <div className='d-flex justify-content-between '>
                                    {/* <div className='col' style={{ marginTop: '20px' }}>
                                        <input className='search-bar' onChange={(e) => setSearch(e.target.value)} />
                                        <div className='div1' />
                                    </div> */}
                                    <div className='col'>

                                    </div>
                                    <div className="table-filter-info">

                                        <Pagination
                                            className="pagination-data"
                                            showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                                            onChange={PaginationChange}
                                            total={arrEntertainment.length}
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
                                                <th>Giá Tiền</th>
                                                <th className='pr-4' style={{ position: 'relative' }} ><div style={{ position: 'absolute', right: '20px', bottom: '7px' }}>Hành Động</div></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                getData(current, size).length === 0 ? <div style={{ margin: '0 auto', fontSize: '30px', paddingTop: '20px', paddingLeft: '20px' }}>Không tìm thấy kết quả phù hợp</div> : getData(current, size).map((data, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{++index}</td>
                                                            <td>{data.entertainmentTotal.toLocaleString()} vnđ</td>

                                                            <td>
                                                                <div className='d-flex justify-content-end'>
                                                                    <NavLink to={`/editentertainment/${data.entertainmentId}`} style={{ cursor: 'pointer' }}><img src='./../../images/edit.svg' width={30} className="mr-4" /></NavLink>
                                                                    <div style={{ cursor: 'pointer' }} onClick={async () => {
                                                                        const action = await DeleteEntertainmenAction(data.entertainmentId)
                                                                        await dispatch(action)
                                                                        toast.error(`Xóa   thành công`, {
                                                                            position: toast.POSITION.TOP_RIGHT
                                                                        });
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
                                        total={arrEntertainment.length}
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
import React, { useEffect, useState } from 'react'
import Pagination from 'rc-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DeleteGameAction, GetGameAction } from '../../redux/action/GameAction';
import { DeleteShowAction, GetShowAction } from '../../redux/action/ShowAction';
export default function Show () {
    const dispatch = useDispatch();
    useEffect(() => {
        const action = GetShowAction();
        dispatch(action)

    }, []);
    const { arrShow } = useSelector(root => root.ShowReducer);
    console.log(arrShow);
    const [perPage, setPerPage] = useState(5);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);
    const [search, setSearch] = useState('');
    const PerPageChange = (value) => {
        setSize(value);
        const newPerPage = Math.ceil(arrShow.length / value);
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    }

    const getData = (current, pageSize) => {
        // Normally you should get the data from the server
        // return arrShow.slice((current - 1) * pageSize, current * pageSize)
        if (search === "") {
            return arrShow.slice((current - 1) * pageSize, current * pageSize)
        }
        else {
            return arrShow.filter(item => item.showServiceName.toLowerCase().includes(search.toLowerCase().trim()))
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
                    <div className='container display-6 fw-bold title'>Danh Sách Chương Trình</div>
                    {/* <NavLink to='/addshow'><button className='btn btn-primary' style={{ width: '150px' }}>Add New</button></NavLink> */}
                    <NavLink className='test' to='/addshow'>
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
                                    <div className='col' style={{ marginTop: '20px' }}>
                                        <input className='search-bar' onChange={(e) => setSearch(e.target.value)} />
                                        <div className='div1' />
                                    </div>
                                    <div className="table-filter-info">

                                        <Pagination
                                            className="pagination-data"
                                            showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                                            onChange={PaginationChange}
                                            total={arrShow.length}
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
                                                <th>Tên Chương Trình</th>
                                                <th>Giá Tiền</th>
                                                <th>Người Diễn</th>
                                                <th>Hình Ảnh</th>
                                                <th style={{ position: 'relative' }}><div style={{ position: 'absolute', right: '20px', bottom: '7px' }}>Hành Động</div></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                getData(current, size).length === 0 ? <div style={{ margin: '0 auto', fontSize: '30px', paddingTop: '20px', paddingLeft: '20px' }}>Không tìm thấy kết quả phù hợp</div> : getData(current, size).map((data, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{++index}</td>
                                                            <td>{data.showServiceName}</td>
                                                            <td>{data.showPrice.toLocaleString()} vnđ</td>
                                                            <td>{data.singer}</td>
                                                            <td><img src={data.showImage} className="rounded " width={100} height={100} alt="hình chương trình" /></td>

                                                            <td>
                                                                <div className='d-flex justify-content-end'>
                                                                    <NavLink to={`/editshow/${data.showId}`} style={{ cursor: 'pointer' }}><img src='./../../images/edit.svg' width={30} className="mr-4" /></NavLink>
                                                                    <div style={{ cursor: 'pointer' }} onClick={async () => {
                                                                        const action = await DeleteShowAction(data.showId)
                                                                        await dispatch(action)
                                                                        toast.error(`Xóa tiết mục ${data.showServiceName} thành công`, {
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
                                        total={arrShow.length}
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
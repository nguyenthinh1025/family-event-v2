import React, { useEffect, useState } from 'react'
import Pagination from 'rc-pagination';
import { useDispatch, useSelector } from 'react-redux';
// import { DeleteDrinkAction, GetDrinkAction } from '../../redux/action/DrinkAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DeleteEntertainmenAction, GetEntertainmentAction, GetEntertainmentByActionAction } from '../../redux/action/EntertainmentAction';
import { DeleteEntertainmentProductAction } from '../../redux/action/EntertainmentProductAction';
import { history } from '../../App';
// import { GetEntertainmentProductAction } from '../../redux/action/EntertainmentProductAction';
// import { GetShowAction } from '../../redux/action/ShowAction';
// import { GetGameAction } from '../../redux/action/GameAction';
export default function EditEntertainment (props) {

    const { id } = props.match.params;
    const dispatch = useDispatch();
    console.log(id);
    useEffect(() => {
        // const action = GetEntertainmentProductAction();
        // dispatch(action)
        // const action1 = GetShowAction();
        // dispatch(action1)
        // const action2 = GetGameAction();
        // dispatch(action2)
        const action = GetEntertainmentByActionAction(id);
        dispatch(action)

    }, []);

    const { arrEntertainmentById } = useSelector(root => root.EntertainmentReducer);
    console.log(arrEntertainmentById);
    // console.log(arrEntertainmentById[0]?.entertainmentId);
    // console.log(arrEntertainmentById[0]?.productId);
    const { arrShow } = useSelector(root => root.ShowReducer);
    const { arrGame } = useSelector(root => root.GameReducer);

    const [perPage, setPerPage] = useState(5);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);
    const [search, setSearch] = useState('');
    const PerPageChange = (value) => {
        setSize(value);
        const newPerPage = Math.ceil(arrEntertainmentById.length / value);
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    }

    const getData = (current, pageSize) => {
        // Normally you should get the data from the server
        // return arrEntertainmentById.slice((current - 1) * pageSize, current * pageSize)
        if (search === "") {
            return arrEntertainmentById.slice((current - 1) * pageSize, current * pageSize)
        }
        else {
            return arrEntertainmentById.filter(item => item.drinkName.toLowerCase().includes(search.toLowerCase().trim()))
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
                    <div className=' d-flex justify-content-between'>
                        <div className='d-flex justify-content-between align-items-center' style={{ fontSize: '25px', textDecoration: 'none' }}><NavLink to='/entertainment' style={{ paddingRight: '10px', textDecoration: 'none', fontSize: '30px' }}>Giải Trí</NavLink> / <span style={{ paddingLeft: '10px', paddingTop: '5px', fontSize: '30px' }}>Danh Sách Giải Trí Theo Dụng Cụ</span> </div>

                    </div>
                    {/* <div className='container display-6 fw-bold title '>Danh Sách Giải Trí Theo Trò Chơi Và Tiết Mục</div> */}
                    {/* <NavLink to='/adddrink'><button className='btn btn-primary' style={{ width: '150px' }}>Add New</button></NavLink> */}
                    <div className='test' onClick={() => {
                        history.push(`/addentertainmentproduct/${arrEntertainmentById[0]?.entertainmentId}`)
                    }}>
                        <div className="primary-button">
                            <div className="custom-button">Thêm Mới</div>
                        </div>
                    </div>
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
                                            total={arrEntertainmentById.length}
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
                                                <th>Trò Chơi</th>
                                                <th>Tiết Mục</th>
                                                <th>Số Lượng</th>
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
                                                            <td>{data.game?.gameName}</td>
                                                            <td>{data.show?.showServiceName}</td>
                                                            <td>{data.quantity}</td>
                                                            <td>{data.entertainmentProductPrice.toLocaleString()} vnđ</td>

                                                            <td>
                                                                <div className='d-flex justify-content-end'>
                                                                    <NavLink to={`/updateentertainment/${data.productId}/${data.entertainmentId}`} style={{ cursor: 'pointer' }}><img src='./../../images/edit.svg' width={30} className="mr-4" /></NavLink>
                                                                    <div style={{ cursor: 'pointer' }} onClick={async () => {
                                                                        const action = await DeleteEntertainmentProductAction(data.productId)
                                                                        await dispatch(action)
                                                                        // const action2 = await GetEntertainmentByActionAction(props.match.params);
                                                                        // await dispatch(action2)
                                                                        toast.error(`Xóa   thành công`, {
                                                                            position: toast.POSITION.TOP_RIGHT
                                                                        });
                                                                        const action1 = GetEntertainmentByActionAction(id);
                                                                        dispatch(action1)
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
                                        total={arrEntertainmentById.length}
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
import React, { useEffect, useState } from 'react'
import Pagination from 'rc-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DeleteDecorAction, GetDecorAction } from '../../redux/action/DecorAction';
import { GetDecorationProductAction } from '../../redux/action/DecorationProductAction';
export default function DecorProduct () {
    const dispatch = useDispatch();
    useEffect(() => {
        const action = GetDecorationProductAction();
        dispatch(action)

    }, []);
    const { arrDecorationProduct } = useSelector(root => root.DecorationProductReducer);
    console.log(arrDecorationProduct);
    const [perPage, setPerPage] = useState(10);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);
    const [search, setSearch] = useState('');
    const PerPageChange = (value) => {
        setSize(value);
        const newPerPage = Math.ceil(arrDecorationProduct.length / value);
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    }

    const getData = (current, pageSize) => {
        // Normally you should get the data from the server
        // return arrDecorationProduct.slice((current - 1) * pageSize, current * pageSize)
        if (search === "") {
            return arrDecorationProduct.slice((current - 1) * pageSize, current * pageSize)
        }
        else {
            return arrDecorationProduct.filter(item => item.decorationName.toLowerCase().includes(search.toLowerCase().trim()))
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
                    <div className='container display-6 fw-bold '>Danh Sách Dụng Cụ Trang Trí</div>
                    <NavLink to='/adddecorproduct'><button className='btn btn-primary' style={{ width: '150px' }}>Add New</button></NavLink>
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
                                            total={arrDecorationProduct.length}
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
                                                <th>Tên Dụng Cụ Trang Trí</th>
                                                <th>Giá Tiền</th>
                                                <th>Tên Dụng Cụ</th>
                                                <th>Chi Tiết</th>
                                                <th>Hình Ảnh</th>
                                                <th className='d-flex justify-content-end pr-4'>Hành Động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                getData(current, size).length === 0 ? <div style={{ margin: '0 auto', fontSize: '30px', paddingTop: '20px', paddingLeft: '20px' }}>Không tìm thấy kết quả phù hợp</div> : getData(current, size).map((data, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{++index}</td>
                                                            <td>{data.decoration?.decorationName}</td>
                                                            <td>{data.price}</td>
                                                            <td>{data.product?.decorationProductName}</td>
                                                            <td>{data.product?.productDetails}</td>
                                                            <td><img src={data.decoration?.decorationImage} className="rounded " width={100} height={100} alt="hình dụng cụ trang trí trang trí" /></td>

                                                            <td>
                                                                <div className='d-flex justify-content-end'>
                                                                    <NavLink to={`/editdecorproduct/${data.decorationId}/${data.product?.productId}`} style={{ cursor: 'pointer' }}><img src='./../../images/edit.svg' width={30} className="mr-4" /></NavLink>
                                                                    <div style={{ cursor: 'pointer' }} onClick={async () => {
                                                                        const action = await DeleteDecorAction(data.decorationId)
                                                                        await dispatch(action)
                                                                        toast.error(`Xóa trang trí ${data.foodTypeName} thành công`, {
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
                                        total={arrDecorationProduct.length}
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
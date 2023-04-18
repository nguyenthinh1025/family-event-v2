import React, { useEffect, useState } from 'react'
import Pagination from 'rc-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteDrinkAction } from '../../redux/action/DrinkAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DeleteFoodAction, GetFoodAction } from '../../redux/action/FoodAction';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { AddMenuListAction } from '../../redux/action/MenuAction';
export default function ListMenu () {
    const dispatch = useDispatch();
    const { arrMenuList } = useSelector(root => root.MenuReducer);
    console.log(arrMenuList);
    useEffect(() => {
        // const action = GetFoodAction();
        // dispatch(action)

    }, []);

    const [perPage, setPerPage] = useState(5);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);
    const [search, setSearch] = useState('');
    const PerPageChange = (value) => {
        setSize(value);
        const newPerPage = Math.ceil(arrMenuList.length / value);
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    }

    const getData = (current, pageSize) => {
        // Normally you should get the data from the server
        // return arrMenuList.slice((current - 1) * pageSize, current * pageSize)
        if (search === "") {
            return arrMenuList.slice((current - 1) * pageSize, current * pageSize)
        }
        else {
            return arrMenuList.filter(item => item.foodName.toLowerCase().includes(search.toLowerCase().trim()))
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

    const validation = Yup.object({
        name: Yup.string()
            .required("Không bỏ trống!"),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        validationSchema: validation,
        onSubmit: async (value) => {

            const newArray = await arrMenuList.map((item) => {
                return {
                    foodId: item.foodId,
                    quantity: item.quantity,
                    price: item.foodPrice * item.quantity,
                    foodTypeId: item.foodTypeId
                };
            })
            const list = {
                menuName: value.name,
                food: newArray
            }
            console.log(list);
            dispatch(AddMenuListAction(list))

        }
    })

    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between' style={{ position: 'relative' }}>
                    <div className='container display-6 fw-bold title'>Danh Sách Đồ Ăn Đã Chọn Thêm Vào Menu</div>
                    {/* <NavLink to='/addfood'><button className='btn btn-primary' style={{ width: '150px' }}>Add New</button></NavLink> */}
                    <form onSubmit={formik.handleSubmit}>
                        <div style={{ position: 'absolute', left: '30px', top: '90px' }} >
                            <div style={{ display: 'flex', width: '400px', alignContent: 'center' }}>
                                <span style={{ width: '200px', paddingTop: '10px', fontWeight: 'bold' }}>Tên Menu :</span>
                                <input name='name' className="form-control" onChange={formik.handleChange} />
                            </div>
                            <p className='text-danger ' style={{ paddingLeft: '130px' }}>{formik.errors.name}</p>
                        </div>
                        <button type='submit' className='test' style={{ border: 'none!important' }} >
                            <div className="primary-button">
                                <div className="custom-button" >Thêm Vào Menu</div>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
            <div className="container-fluid  mb-2" style={{ marginTop: '100px' }}>

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
                                            total={arrMenuList.length}
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
                                                <th>Tên </th>
                                                <th>Giá Tiền</th>
                                                <th>Hình Ảnh</th>
                                                <th>Số Lượng</th>
                                                <th> Loại </th>
                                                <th style={{ position: 'relative' }}><div style={{ position: 'absolute', right: '20px', bottom: '7px' }}>Hành Động</div></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                getData(current, size).length === 0 ? <div style={{ margin: '0 auto', fontSize: '30px', paddingTop: '20px', paddingLeft: '20px' }}>Không tìm thấy kết quả phù hợp</div> : getData(current, size).map((data, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{++index}</td>
                                                            <td>{data.foodName}</td>
                                                            <td>{(data.quantity * data.foodPrice).toLocaleString()} vnđ</td>
                                                            <td><img src={data.foodImage} className="rounded " width={100} height={100} alt="hình thức ăn" /></td>
                                                            <td> <button className='btn btn-primary mr-2' onClick={() => {
                                                                const action = {
                                                                    type: 'TANG_GIAM_SO_LUONG',
                                                                    maSanPham: data.foodId,
                                                                    quantity: 1,
                                                                }
                                                                dispatch(action);
                                                            }}>+</button>
                                                                {data.quantity}
                                                                <button className=' ml-2 btn btn-primary' onClick={() => {
                                                                    const action = {
                                                                        type: 'TANG_GIAM_SO_LUONG',
                                                                        maSanPham: data.foodId,
                                                                        quantity: -1,
                                                                    }
                                                                    console.log(action);
                                                                    dispatch(action);
                                                                }}>-</button>
                                                            </td>
                                                            <td>{data.foodType?.foodTypeName}</td>
                                                            <td>
                                                                <div className='d-flex justify-content-end'>

                                                                    <div style={{ cursor: 'pointer' }} onClick={async () => {
                                                                        const action = {
                                                                            type: 'XOA_SP',
                                                                            sanPhamClick: data.foodId
                                                                        }
                                                                        dispatch(action);
                                                                        toast.error(`Xóa đồ ăn ${data.foodName} thành công`, {
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
                                        total={arrMenuList.length}
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
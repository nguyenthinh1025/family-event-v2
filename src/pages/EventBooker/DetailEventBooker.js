import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { GetEventBookerByIDAction, UpdateEventBookerAction } from '../../redux/action/EventBookerAction';
import { GetFamilyAction } from '../../redux/action/FamilyAction';
import EditEventBooker from './EditEventBooker';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
export default function DetailEventBooker (props) {

    const { arrEventBookerById } = useSelector(root => root.EventBookerReducer)
    const { arrFamily } = useSelector(root => root.FamilyReducer)
    console.log(arrEventBookerById.eventBookerId);
    console.log(arrFamily.eventBooker?.eventBookerId);
    const dispatch = useDispatch()
    const { id } = props.match.params;
    useEffect(() => {
        const action = GetEventBookerByIDAction(id);
        dispatch(action)
        const action1 = GetFamilyAction(id);
        dispatch(action1)
    }, []);
    const [family, setFamily] = useState({})


    const validation = Yup.object({


    })



    const formik = useFormik({
        initialValues: {

            eventBookerId: arrEventBookerById.eventBookerId,
            fullname: arrEventBookerById.fullname,
            email: arrEventBookerById.email,
            phone: arrEventBookerById.phone,
            address: arrEventBookerById.address,
            gender: true,
            registerDate: "2023-04-05T10:45:15.135Z",
            dateOfBirth: "2023-04-05T10:45:15.135Z",
            image: arrEventBookerById.image,
            status: true,
            birthDay: "2023-04-05"
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            console.log(value);
            const action = await UpdateEventBookerAction(value);
            await dispatch(action)
            toast(`Chỉnh sửa ${formik.values.fullname} thành công`, {
                position: toast.POSITION.TOP_RIGHT
            });

        }

    })

    return (

        <div>
            <div className="container">
                <div className=' d-flex ' style={{ margin: '30px 0' }}>
                    <div className='d-flex' style={{ fontSize: '25px', alignContent: 'center' }}><NavLink to='/eventbooker' style={{ textDecoration: 'none', paddingRight: '10px' }}>Người Dùng</NavLink> / <span style={{ color: 'red', paddingTop: '6px', fontSize: '25px', paddingLeft: '10px' }}>{arrEventBookerById.fullname}</span> </div>

                </div>
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                                        <div className="mt-3">
                                            <h4>{arrEventBookerById.fullname}</h4>
                                            <button className="btn btn-outline-primary">Message</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form className="col-md-8" onSubmit={formik.handleSubmit}>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Họ Tên</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input name='fullname' value={formik.values.fullname} style={{ border: 'none' }} onChange={formik.handleChange} />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input name='email' value={formik.values.email} style={{ border: 'none' }} onChange={formik.handleChange} />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Số Điện Thoại</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type='' name='phone' value={formik.values.phone} style={{ border: 'none' }} onChange={formik.handleChange} />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Giới Tính</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">

                                            {arrEventBookerById.gender === true ? "Nam" : 'Nữ'}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Địa Chỉ</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type='' name='address' value={formik.values.address} style={{ border: 'none' }} onChange={formik.handleChange} />

                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <button type='submit' className="col-sm-12" style={{ width: '100px', border: 'none' }}>
                                            <div >Chỉnh Sửa</div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="card mb-3">
                        <div className='d-flex justify-content-between'>
                            <h4 style={{ padding: '30px 20px' }}>Thành Viên Trong Gia Đình</h4>
                            <NavLink to='/addfamily'><button className="btn btn-outline-primary" style={{ margin: '30px 20px' }}>Thêm mới</button></NavLink>
                        </div>
                        <div className="card-body">
                            <div className="row" style={{ textAlign: 'center' }}>
                                <div className="col-sm-2">
                                    <h6 className="mb-0">Số Thứ Tự</h6>
                                </div>
                                <div className="col-sm-2">
                                    <h6 className="mb-0">Tên Thành Viên</h6>
                                </div>
                                <div className="col-sm-2 text-secondary">
                                    <h6 className="mb-0">Số Điện Thoại</h6>
                                </div>
                                <div className="col-sm-2 text-secondary">
                                    <h6 className="mb-0">Mối Quan Hệ</h6>
                                </div>
                                <div className="col-sm-2 text-secondary">
                                    <h6 className="mb-0">Thông Tin</h6>
                                </div>
                                <div className="col-sm-2 text-secondary">
                                    <h6 className="mb-0 ml-5">Hành Động</h6>
                                </div>

                            </div>
                            <hr />
                            {<div>{arrFamily.map((item, index) => {
                                return <div key={index}>
                                    {item.eventBooker?.eventBookerId === arrEventBookerById.eventBookerId ?
                                        <div>
                                            <div className='row' style={{ textAlign: 'center' }} >
                                                <div className="col-sm-2 text-secondary">
                                                    {++index}
                                                </div>
                                                <div className="col-sm-2 text-secondary">
                                                    {item.memberName}
                                                </div>
                                                <div className="col-sm-2 text-secondary">
                                                    {item.memberPhone}
                                                </div>
                                                <div className="col-sm-2 text-secondary">
                                                    {item.relation}
                                                </div>
                                                <div className="col-sm-2 text-secondary">
                                                    {item.description}
                                                </div>
                                                <div className="col-sm-2 text-secondary">
                                                    <div className='d-flex justify-content-end'>
                                                        <div data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" style={{ cursor: 'pointer' }} onClick={() => {
                                                            setFamily(item);
                                                            console.log(item);
                                                        }}><img src='./../../images/edit.svg' width={30} className="mr-4" /></div>
                                                        <div style={{ cursor: 'pointer' }} onClick={async () => {
                                                            // const action = await DeleteDecorAction(data.decorationId)
                                                            // await dispatch(action)
                                                            // toast.error(`Xóa trang trí ${data.foodTypeName} thành công`, {
                                                            //     position: toast.POSITION.TOP_RIGHT
                                                            // });
                                                        }}><img src='./../../images/delete.svg' width={30} /></div>
                                                    </div>
                                                </div>

                                            </div>
                                            <EditEventBooker item={family} />
                                            <hr />
                                        </div>

                                        :
                                        <div></div>}


                                </div>
                            })}</div>}

                            <div>
                                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                    Launch demo modal
                                </button> */}
                                {/* Modal */}


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import * as Yup from "yup";
import { storage_bucket } from '../../firebase';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { AddFamilyAction } from '../../redux/action/FamilyAction';
import { history } from '../../App';


export default function AddFamily (props) {
    const { arrEventBookerById } = useSelector(root => root.EventBookerReducer)
    const dispatch = useDispatch()

    const validation = Yup.object({
        memberName: Yup.string()
            .required("Không bỏ trống!"),
        memberPhone: Yup.string()
            .required("Không bỏ trống!"),
        description: Yup.string()
            .required("Không bỏ trống!"),
        relation: Yup.string()
            .required("Không bỏ trống!"),

    })



    const formik = useFormik({
        initialValues: {
            id: 0,
            eventBookerId: arrEventBookerById.eventBookerId,
            memberId: "string",
            memberName: "",
            memberPhone: "",
            gender: true,
            dateOfBirth: "2023-04-05T08:48:45.888Z",
            description: "",
            relation: "",
            status: true,
            eventBooker: {
                eventBookerId: "string",
                fullname: "string",
                email: "string",
                phone: "string",
                address: "string",
                gender: true,
                registerDate: "2023-04-05T08:48:45.888Z",
                dateOfBirth: "2023-04-05T08:48:45.888Z",
                image: "string",
                status: true,
                birthDay: "2023-04-05"
            }
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            console.log(value);
            const action = await AddFamilyAction(value);
            await dispatch(action)
            toast(`Thêm mới ${formik.values.menuName} thành công`, {
                position: toast.POSITION.TOP_RIGHT
            });
            // history.push(`/editeventbooker/${formik.values.eventBookerId}`)

        }

    })
    const handleChangeGender = (name) => {
        return (value) => {
            formik.setFieldValue(name, value.value === "true");
        }
    }
    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    <div className='d-flex justify-content-between' style={{ fontSize: '25px' }}><NavLink to='/eventbooker' style={{ paddingRight: '10px' }}>Người Dùng</NavLink> / <span style={{ paddingLeft: '10px', fontSize: '25px', paddingTop: '6px' }}>Thêm mới gia đình người dùng</span> </div>

                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Tên Thành Viên:</label>
                            <div className="col-xs-9">
                                <input name="memberName" className="form-control" id="inputEmail" value={formik.values.memberName} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.memberName}</p>
                            </div>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Số Điện Thọai:</label>
                            <div className="col-xs-9">
                                <input name="memberPhone" className="form-control" id="inputEmail" value={formik.values.memberPhone} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.memberPhone}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="form-group col">
                                <label className="control-label col-xs-3" htmlFor="inputEmail">Chi Tiết:</label>
                                <div className="col-xs-9">
                                    <input name="description" className="form-control" id="inputEmail" value={formik.values.description} onChange={formik.handleChange} />
                                    <p className='text-danger'>{formik.errors.description}</p>
                                </div>
                            </div>
                            <div className="form-group col">
                                <label className="control-label col-xs-3" htmlFor="inputEmail">Mối Quan Hệ:</label>
                                <div className="col-xs-9">
                                    <input name="relation" className="form-control" id="inputEmail" value={formik.values.relation} onChange={formik.handleChange} />
                                    <p className='text-danger'>{formik.errors.relation}</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col'>
                                <label className="control-label col-xs-3" htmlFor="inputPassword">Giới Tính:</label>
                                {/* <select className="form-control" onChange={handleChangeGender('gender')} >
                                    <option value={true}>---Chọn giới tính---</option>
                                    <option value={true} >Nam</option>
                                    <option value={false} >Nữ</option>
<div>Nam</div>
                                </select> */}
                                <div className='d-flex pl-2'>
                                    <div style={{ paddingRight: '20px' }}>Nam</div>
                                    <div className="form-check form-switch d-lg-inline-flex">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked onChange={handleChangeGender('gender')} />
                                    </div>
                                    <div style={{ paddingLeft: '20px' }}>Nữ</div>
                                </div>
                            </div>

                            <div className='form-group col'></div>
                        </div>
                    </div>





                    <br />
                    <div className="form-group">
                        <div className="col-xs-offset-3 col-xs-9">
                            <input type="submit" className="btn btn-primary" defaultValue="Submit" value="Thêm mới" />

                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

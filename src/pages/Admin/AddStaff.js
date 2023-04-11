import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import * as Yup from "yup";
import { storage_bucket } from '../../firebase';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { AddDecorAction } from '../../redux/action/DecorAction';
import { RegisterAction } from '../../redux/action/authAction';
export default function AddStaff (props) {

    const dispatch = useDispatch()




    const validation = Yup.object({
        username: Yup.string()
            .required("Không bỏ trống!"),
        email: Yup.string()
            .email('Email Không đúng định dạng')
            .required("Không bỏ trống!"),
        phone: Yup.string()
            .required("Không bỏ trống!"),
        password: Yup.string()
            .required("Không bỏ trống!"),

    })

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            phone: "",
            password: "",
            role: "1",
            status: true

        },
        validationSchema: validation,
        onSubmit: (value) => {
            console.log(value);
            const action = RegisterAction(value);
            dispatch(action)
            toast(`Đăng Ký nhân viên thành công`, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    })

    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    <div className='d-flex' style={{ fontSize: '25px' }}><NavLink to='/admin' style={{ paddingRight: '10px' }}>Nhân Viên</NavLink> / <span style={{ paddingLeft: '10px', paddingTop: '5px', fontSize: '25px' }}>Thêm mới nhân viên</span> </div>

                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Tên Nhân Viên:</label>
                            <div className="col-xs-9">
                                <input name="username" className="form-control" id="inputEmail" onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.username}</p>
                            </div>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputPassword">Email:</label>
                            <div className="col-xs-9">
                                <input className="form-control" id="inputPassword" name="email" onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Số Điện Thoại:</label>
                            <div className="col-xs-9">
                                <input name="phone" className="form-control" id="inputEmail" onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.phone}</p>
                            </div>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputPassword">Mật Khẩu:</label>
                            <div className="col-xs-9">
                                <input type="password" className="form-control" id="inputPassword" name="password" onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.password}</p>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div className="form-group">
                        <div className="col-xs-offset-3 col-xs-9">
                            <input type="submit" className="btn btn-primary" defaultValue="Submit" value="Thêm Mới" />
                            {/* <input type="reset" className="btn btn-default" defaultValue="Reset" /> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

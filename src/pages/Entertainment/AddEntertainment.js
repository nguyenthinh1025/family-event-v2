import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { DetailDrinkAction, UpdateDrinkAction } from '../../redux/action/DrinkAction';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import * as Yup from "yup";
import { storage_bucket } from '../../firebase';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { history } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { AddEntertainmenAction, GetEntertainmentByActionAction, UpdateEntertainmenAction } from '../../redux/action/EntertainmentAction';
export default function AddEntertainerment (props) {

    const dispatch = useDispatch()



    const validation = Yup.object({
        entertainmentTotal: Yup.string()
            .required('Không bỏ trống!')
    })

    const formik = useFormik({
        initialValues: {
            entertainmentId: "entertainment",
            status: true,
            entertainmentTotal: 0
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            await console.log(value);
            const action = await AddEntertainmenAction(value);
            await dispatch(action)
            toast(`Thê mới thành công`, {
                position: toast.POSITION.TOP_RIGHT
            });

        }

    })

    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className=' pl-5 pb-5'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: '25px' }}><NavLink to='/entertainment' style={{ textDecoration: 'none', paddingRight: '10px' }}>Giả Trí</NavLink> / <span style={{ paddingTop: '2px', fontSize: '25px', paddingLeft: '10px', paddingRight: '10px' }}>Thêm mới </span></div>

                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Giá Tiền:</label>
                            <div className="col-xs-9">
                                <input type='number' name="entertainmentTotal" className="form-control" id="inputEmail" value={formik.values.entertainmentTotal} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.entertainmentTotal}</p>
                            </div>
                        </div>
                        <div className="form-group col">

                        </div>
                    </div>




                    <br />
                    <div className="form-group">
                        <div className="col-xs-offset-3 col-xs-9">
                            <input type="submit" className="btn btn-primary" defaultValue="Submit" value="Thêm mới" />
                            {/* <input type="reset" className="btn btn-default" defaultValue="Reset" /> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

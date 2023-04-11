import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

import * as Yup from "yup";

import { useFormik } from 'formik';
import { toast } from 'react-toastify';


import { GetShowAction } from '../../redux/action/ShowAction';
import { GetEntertainmentProductByIDAction } from '../../redux/action/EntertainmentProductAction';
export default function EditEntertainmentProduct (props) {
    const { arrEntertainmentProductById } = useSelector(root => root.EntertainmentProductReducer);
    const dispatch = useDispatch()
    const { id } = props.match.params;
    useEffect(() => {
        const action = GetEntertainmentProductByIDAction(id);
        dispatch(action)
        const action1 = GetShowAction();
        dispatch(action1)
    }, []);
    const { arrShow } = useSelector(root => root.ShowReducer);
    console.log(arrEntertainmentProductById);


    const validation = Yup.object({
        entertainmentTotal: Yup.string()

    })

    const formik = useFormik({
        initialValues: {
            entertainmentId: arrEntertainmentProductById?.entertainmentId,
            productId: arrEntertainmentProductById?.productId,
            showId: arrEntertainmentProductById?.showId,
            gameId: arrEntertainmentProductById?.gameId,
            entertainmentProductPrice: arrEntertainmentProductById?.entertainmentProductPrice,
            quantity: arrEntertainmentProductById?.quantity
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            await console.log(value);
            // const action = await UpdateEntertainmenAction(value);
            // await dispatch(action)
            // toast(`Cập Nhật  thành công`, {
            //     position: toast.POSITION.TOP_RIGHT
            // });

        }

    })

    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className=' pl-5 pb-5'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: '25px' }}><NavLink to='/entertainmentproduct' style={{ textDecoration: 'none', paddingRight: '10px' }}>Giả Trí Theo Loại</NavLink> / <span style={{ paddingTop: '2px', fontSize: '25px', paddingLeft: '10px', paddingRight: '10px' }}>Chỉnh sửa  </span></div>

                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Giá Tiền:</label>
                            <div className="col-xs-9">
                                <input type='number' name="entertainmentId" className="form-control" id="inputEmail" value={formik.values.entertainmentId} onChange={formik.handleChange} />
                                {/* <p className='text-danger'>{formik.errors.entertainmentId}</p> */}
                            </div>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputPassword">Loại Đồ Ăn:</label>
                            <select data-te-select-init data-te-select-visible-options="3" name='foodTypeId' className="form-control" onChange={formik.handleChange}>
                                <option selected value={arrEntertainmentProductById?.showId}>{arrShow.map((item, index) => {
                                    return <div key={index}>
                                        {item?.showId === arrEntertainmentProductById?.showId ? <div>{item.showServiceName}</div> : <div></div>}
                                    </div>
                                })}</option>
                                {arrShow.map((item, index) => {
                                    return <option key={index} value={item.showId}>{item.showServiceName}</option>
                                })}

                            </select>
                        </div>
                    </div>




                    <br />
                    <div className="form-group">
                        <div className="col-xs-offset-3 col-xs-9">
                            <input type="submit" className="btn btn-primary" defaultValue="Submit" value="Chỉnh Sửa" />
                            {/* <input type="reset" className="btn btn-default" defaultValue="Reset" /> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

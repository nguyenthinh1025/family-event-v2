import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import * as Yup from "yup";
import { storage_bucket } from '../../firebase';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetDecorByIdAction, UpdateDecorAction } from '../../redux/action/DecorAction';
import { GetListMenuByIdAction, UpdateMenuAction } from '../../redux/action/MenuAction';
export default function EditMenu (props) {
    const { arrMenuById } = useSelector(root => root.MenuReducer);
    const dispatch = useDispatch()
    const { id } = props.match.params;
    useEffect(() => {
        const action = GetListMenuByIdAction(id);
        dispatch(action)
    }, []);

    console.log(arrMenuById);

    const validation = Yup.object({
        menuName: Yup.string()
            .required("Không bỏ trống!"),
        priceTotal: Yup.number()
            .required("Không bỏ trống!"),

    })

    const formik = useFormik({
        initialValues: {
            menuId: arrMenuById.menuId,
            menuName: arrMenuById.menuName,
            priceTotal: arrMenuById.priceTotal,
            status: true
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            console.log(value);
            const action = await UpdateMenuAction(value);
            await dispatch(action)
            toast(`Cập nhật ${formik.values.menuName} thành công`, {
                position: toast.POSITION.TOP_RIGHT
            });

        }

    })

    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    <div className='' style={{ fontSize: '25px' }}><NavLink to='/menu'>Menu</NavLink> / <span>Chỉnh sửa danh sách</span> / <span style={{ color: 'red' }}>{arrMenuById.menuName}</span></div>

                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Tên Menu:</label>
                            <div className="col-xs-9">
                                <input name="menuName" className="form-control" id="inputEmail" value={formik.values.menuName} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.menuName}</p>
                            </div>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Tổng Tiền:</label>
                            <div className="col-xs-9">
                                <input type='number' name="priceTotal" className="form-control" id="inputEmail" value={formik.values.priceTotal} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.priceTotal}</p>
                            </div>
                        </div>
                    </div>





                    <br />
                    <div className="form-group">
                        <div className="col-xs-offset-3 col-xs-9">
                            <input type="submit" className="btn btn-primary" defaultValue="Submit" />

                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

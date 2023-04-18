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
import { GetFoodTypeByIDAction, UpdateFoodTypeAction } from '../../redux/action/FoodTypeAction';
export default function EditFooodType (props) {
    const { detailFoodType } = useSelector(root => root.FoodTypeReducer);
    const dispatch = useDispatch()
    const { id } = props.match.params;
    useEffect(() => {
        const action = GetFoodTypeByIDAction(id);
        dispatch(action)
    }, []);
    console.log(detailFoodType);


    const validation = Yup.object({
        foodTypeName: Yup.string()

            .required("Không bỏ trống!"),
        foodTypeDetail: Yup.string()
            .required("Không bỏ trống!"),
    })

    const formik = useFormik({
        initialValues: {
            foodTypeId: detailFoodType.foodTypeId,
            foodTypeName: detailFoodType.foodTypeName,
            foodTypeDetail: detailFoodType.foodTypeDetail,
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            await console.log(value);
            const action = await UpdateFoodTypeAction(value);
            await dispatch(action)
            toast(`Cập nhật ${value.foodTypeName} thành công`, {
                position: toast.POSITION.TOP_RIGHT
            });

        }

    })

    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: '25px' }}><NavLink to='/foodtype' style={{ textDecoration: 'none', paddingRight: '10px' }}>Loại Đồ Ăn</NavLink> / <span style={{ paddingTop: '2px', fontSize: '25px', paddingLeft: '10px', paddingRight: '10px' }}>Chỉnh sửa loại đồ ăn</span> / <span style={{ paddingTop: '2px', color: 'red', fontSize: '25px', paddingLeft: '10px' }}>{detailFoodType.foodTypeName}</span></div>
                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Tên Loại Đồ Ăn:</label>
                            <div className="col-xs-9">
                                <input name="foodTypeName" className="form-control" id="inputEmail" value={formik.values.foodTypeName} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.foodTypeName}</p>
                            </div>
                        </div>
                        <div className="form-group col">

                        </div>
                    </div>


                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="postalAddress">Chi Tiết:</label>
                            <div className="col-xs-9">
                                <textarea rows={3} name="foodTypeDetail" className="form-control" id="postalAddress" defaultValue={""} value={formik.values.foodTypeDetail} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.foodTypeDetail}</p>
                            </div>
                        </div>
                        <div className="form-group col">

                        </div>
                    </div>




                    <br />
                    <div className="form-group">
                        <div className="col-xs-offset-3 col-xs-9">
                            <input type="submit" className="btn btn-primary" defaultValue="Submit" value='Chỉnh Sửa' />
                            {/* <input type="reset" className="btn btn-default" defaultValue="Reset" /> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

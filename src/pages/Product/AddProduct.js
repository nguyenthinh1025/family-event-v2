import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import * as Yup from "yup";
import { storage_bucket } from '../../firebase';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { AddFoodAction, DetailFoodAction, UpdateFoodAciton } from '../../redux/action/FoodAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { AddProductAction } from '../../redux/action/ProductAction';
export default function AddProduct (props) {

    const dispatch = useDispatch()




    const validation = Yup.object({
        decorationProductName: Yup.string()
            .required("Không bỏ trống!"),
        productQuantity: Yup.string()
            .required("Không bỏ trống!"),
        productDetails: Yup.string()
            .required("Không bỏ trống!"),
        productSupplier: Yup.string()
            .required("Không bỏ trống!"),
        productImage: Yup.string()
            .required("Không bỏ trống!"),
        productImage: Yup.string()
            .required("Không bỏ trống!"),
    })

    const formik = useFormik({
        initialValues: {
            productId: "string",
            decorationProductName: "",
            productPrice: 0,
            productQuantity: 0,
            productDetails: "",
            productImage: "",
            productSupplier: "",
            status: true
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            console.log(value);
            const action = await AddProductAction(value);
            await dispatch(action)
            toast(`Thêm mới dụng cụ ${value.decorationProductName} thành công`, {
                position: toast.POSITION.TOP_RIGHT
            });

        }

    })
    const uploadFile = (e) => {
        let file = e.target.files[0];
        let fileRef = ref(storage_bucket, file.name);

        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            const proress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is" + proress + "% done");
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    formik.setFieldValue("productImage", url)
                })
            }
        )
    }
    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    <div className='' style={{ fontSize: '25px' }}><NavLink to='/food'>Dụng Cụ</NavLink> / <span>Thêm mới dụng cụ</span> </div>

                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Tên Dụng Cụ:</label>
                            <div className="col-xs-9">
                                <input name="decorationProductName" className="form-control" id="inputEmail" onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.decorationProductName}</p>
                            </div>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Số Lượng:</label>
                            <div className="col-xs-9">
                                <input name="productQuantity" type='number' className="form-control" id="inputEmail" onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.productQuantity}</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Chi Tiết:</label>
                        <div className="col-xs-9">
                            <textarea rows={3} name="productDetails" className="form-control" id="postalAddress" onChange={formik.handleChange} />
                            <p className='text-danger'>{formik.errors.productDetails}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Nơi Cung Cấp:</label>
                        <div className="col-xs-9">
                            <textarea rows={3} name="productSupplier" className="form-control" id="postalAddress" onChange={formik.handleChange} />
                            <p className='text-danger'>{formik.errors.productSupplier}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Hình Ảnh:</label>
                        <div>
                            <img src={formik.values.productImage} width={300} height={300} />
                        </div>
                        <input type="file" name="productImage" id="file" className="input-file" onChange={uploadFile} />
                        <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                            <FontAwesomeIcon icon={faUpload} />
                            <span className="js-fileName pl-2">Choose a file</span>
                        </label>
                        <p className='text-danger'>{formik.errors.productImage}</p>
                    </div>




                    <br />
                    <div className="form-group">
                        <div className="col-xs-offset-3 col-xs-9">
                            <input type="submit" className="btn btn-primary" defaultValue="Submit" />
                            <input type="reset" className="btn btn-default" defaultValue="Reset" />
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import * as Yup from "yup";
import { storage_bucket } from '../../firebase';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { DetailFoodAction, UpdateFoodAciton } from '../../redux/action/FoodAction';
import { GetFoodTypeAction } from '../../redux/action/FoodTypeAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { GetDecorByIdAction, UpdateDecorAction } from '../../redux/action/DecorAction';
import { GetDecorationProductByDecorIdAction, GetDecorationProductByIdAction, UpdateProductByDecorIdAction } from '../../redux/action/DecorationProductAction';
import { GetProductAction } from '../../redux/action/ProductAction';
import { history } from '../../App';
export default function EditDecorProduct (props) {
    const { arrDecorProductByDecorId } = useSelector(root => root.DecorationProductReducer);
    console.log(arrDecorProductByDecorId);
    const dispatch = useDispatch()
    const { id, id1 } = props.match.params;
    console.log(id1);
    useEffect(() => {
        const action = GetDecorationProductByDecorIdAction(id, id1);
        dispatch(action)
        const action1 = GetProductAction();
        dispatch(action1)

    }, []);
    const { arrProduct } = useSelector(root => root.ProductReducer);
    // console.log(detailFood);


    const validation = Yup.object({
        quantity: Yup.number()
            .min(1, "Số Lượng không bé hơn 1")
            .required("Không bỏ trống!"),
        price: Yup.number()
            .min(1, "Giá tiền không bé hơn 1")
            .required("Không bỏ trống!"),

    })

    const formik = useFormik({
        initialValues: {

            decorationId: arrDecorProductByDecorId.decorationId,
            productId: arrDecorProductByDecorId.product?.productId,
            quantity: arrDecorProductByDecorId.quantity,
            price: arrDecorProductByDecorId.price,
            decoration: {
                decorationId: "string",
                decorationName: "string",
                decorationPrice: 0,
                decorationImage: "string"
            },
            product: {
                productId: "string",
                decorationProductName: "string",
                productPrice: 0,
                productQuantity: 0,
                productDetails: "string",
                productImage: "string",
                productSupplier: "string",
                status: true
            }

        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            console.log(value);
            const action = await UpdateProductByDecorIdAction(value);
            await dispatch(action)
            toast(`Cập nhật thành công`, {
                position: toast.POSITION.TOP_RIGHT
            });
            history.push(`/viewdecor/${id}`)
        }

    })

    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: '25px' }}>
                        <div style={{ textDecoration: 'none', paddingRight: '10px', cursor: 'pointer', color: '#1d96ed' }} onClick={() => {
                            history.push(`/viewdecor/${id}`)
                        }}>Dụng Cụ Trang Trí</div> / <span style={{ paddingTop: '2px', fontSize: '25px', paddingLeft: '10px', paddingRight: '10px' }}>Chỉnh sửa dụng cụ trang trí</span> / <span style={{ paddingTop: '2px', color: 'red', fontSize: '25px', paddingLeft: '10px' }}>{arrDecorProductByDecorId.decoration?.decorationName}</span></div>
                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <div className="form-group col">
                                <label className="control-label col-xs-3" htmlFor="inputPassword">Giá Tiền:</label>
                                <div className="col-xs-9">
                                    <input type="" className="form-control" id="inputPassword" name="price" value={formik.values.price} onChange={formik.handleChange} />
                                    <p className='text-danger'>{formik.errors.price}</p>
                                </div>
                            </div>
                            {/* <label className="control-label col-xs-3" htmlFor="inputEmail">Tên Đạo Cụ:</label>
                            <select data-te-select-init data-te-select-visible-options="3" name='productId' className="form-control" onChange={formik.handleChange}>
                                <option selected value={id1}>{arrDecorProductByDecorId.product?.decorationProductName}</option>
                                {arrProduct.map((item, index) => {
                                    return <option key={index} value={item.productId}>{item.decorationProductName}</option>
                                })}
                            </select> */}
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputPassword">Số Lượng :</label>
                            <div className="col-xs-9">
                                <input type="" className="form-control" id="inputPassword" name="quantity" value={formik.values.quantity} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.quantity}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputPassword">Giá Tiền:</label>
                            <div className="col-xs-9">
                                <input type="" className="form-control" id="inputPassword" name="price" value={formik.values.price} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.price}</p>
                            </div>
                        </div>
                        <div className="form-group col">

                        </div>
                    </div> */}
                    {/* <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Hình Ảnh:</label>
                        <div style={{ marginBottom: '30px' }}>
                            <img src={formik.values.decorationImage} width={300} height={200} />
                        </div>
                        <input type="file" name="decorationImage" id="file" className="input-file" onChange={uploadFile} />
                        <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                            <FontAwesomeIcon icon={faUpload} />
                            <span className="js-fileName pl-2">Choose a file</span>
                        </label>
                        <p className='text-danger'>{formik.errors.decorationImage}</p>
                    </div> */}


                    <br />
                    <div className="form-group">
                        <div className="col-xs-offset-3 col-xs-9">
                            <input type="submit" className="btn btn-primary" defaultValue="Submit" value="Chỉnh Sửa" />

                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

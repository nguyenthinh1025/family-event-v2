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
import { GetProductAction } from '../../redux/action/ProductAction';
import { AddProductByDecorIdAction } from '../../redux/action/DecorationProductAction';
import { history } from '../../App';
export default function AddDecorProduct (props) {
    const { id } = props.match.params;
    console.log(id);
    const dispatch = useDispatch();
    useEffect(() => {
        const action = GetProductAction();
        dispatch(action)

    }, []);
    const { arrProduct } = useSelector(root => root.ProductReducer);
    console.log(arrProduct);


    const validation = Yup.object({
        quantity: Yup.number()
            .min(1, "Số Lượng không bé hơn 1")
            .required("Không bỏ trống!"),
        price: Yup.number()
            .min(1, "Giá tiền không bé hơn 1")
            .required("Không bỏ trống!"),
        productId: Yup.string()
            .required("Không bỏ trống!"),

    })

    const formik = useFormik({
        initialValues: {
            decorationId: id,
            productId: "",
            quantity: 0,
            price: 0,
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
            const action = await AddProductByDecorIdAction(value);
            await dispatch(action)
            toast(`Thêm mới  thành công`, {
                position: toast.POSITION.TOP_RIGHT
            });
            history.push(`/viewdecor/${id}`)
        }

    })

    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    <div className='d-flex' style={{ fontSize: '25px' }}><NavLink to='/decor' style={{ paddingRight: '10px' }}>Trang Trí</NavLink> / <span style={{ paddingLeft: '10px', paddingTop: '5px', fontSize: '25px' }}>Thêm mới vật dụng trang trí</span> </div>

                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>

                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputPassword">Tên Dụng Cụ:</label>
                            <select data-te-select-init data-te-select-visible-options="3" name='productId' className="form-control" onChange={formik.handleChange}>
                                <option selected >---Chọn Dụng Cụ---</option>
                                {arrProduct.map((item, index) => {
                                    return <option key={index} value={item.productId}>{item.decorationProductName}</option>
                                })}

                            </select>
                            <p className='text-danger'>{formik.errors.productId}</p>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Số Lượng:</label>
                            <div className="col-xs-9">
                                <input name="quantity" className="form-control" id="inputEmail" onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.quantity}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Giá tiền:</label>
                            <div className="col-xs-9">
                                <input name="price" className="form-control" id="inputEmail" onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.price}</p>
                            </div>
                        </div>
                        <div className="form-group col"></div>
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

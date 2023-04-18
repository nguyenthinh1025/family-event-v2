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
export default function EditDrink (props) {
    const { detailDrink } = useSelector(root => root.DrinkReducer);
    const dispatch = useDispatch()
    const { id } = props.match.params;
    useEffect(() => {
        const action = DetailDrinkAction(id);
        dispatch(action)
    }, []);
    console.log(detailDrink);


    const validation = Yup.object({
        foodName: Yup.string()
            .min(2, "Tối thiểu 2 kí tự")
            .max(150, "Tối đa 150 kí tự")
            .required("Không bỏ trống!"),
        dish: Yup.string()
            .min(2, "Tối thiểu 2 kí tự")
            .required("Không bỏ trống!"),
        foodPrice: Yup.number()
            .min(1, "Giá tiền không bé hơn 1")
            .required("Không bỏ trống!"),
        foodDescription: Yup.string()
            .min(2, "Tối thiểu 2 kí tự")
            .required("Không bỏ trống!"),
        foodIngredient: Yup.string()
            .min(2, "Tối thiểu 2 kí tự")
            .required("Không bỏ trống!"),
        cookingRecipe: Yup.string()
            .min(2, "Tối thiểu 2 kí tự")
            .required("Không bỏ trống!"),
        foodImage: Yup.string()
            .required("Không bỏ trống!"),
    })

    const formik = useFormik({
        initialValues: {
            foodId: detailDrink?.foodId,
            foodName: detailDrink?.foodName,
            dish: detailDrink?.dish,
            foodPrice: detailDrink?.foodPrice,
            foodDescription: detailDrink?.foodDescription,
            foodIngredient: detailDrink?.foodIngredient,
            foodOrigin: detailDrink?.foodOrigin,
            cookingRecipe: detailDrink?.cookingRecipe,
            foodImage: detailDrink?.foodImage,
            foodTypeId: detailDrink?.foodType?.foodTypeId,
            status: true
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            await console.log(value);
            const action = await UpdateDrinkAction(value);
            await dispatch(action)
            toast(`Cập Nhật ${formik.values.drinkName} thành công`, {
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
                    formik.setFieldValue("drinkImage", url)
                })
            }
        )
    }
    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className=' pl-5 pb-5'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: '25px' }}><NavLink to='/drink' style={{ textDecoration: 'none', paddingRight: '10px' }}>Thức Uống</NavLink> / <span style={{ paddingTop: '2px', fontSize: '25px', paddingLeft: '10px', paddingRight: '10px' }}>Chỉnh sửa thức uống</span> / <span style={{ paddingTop: '2px', color: 'red', fontSize: '25px', paddingLeft: '10px' }}>{detailDrink.foodName}</span></div>

                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Tên Thức Uống:</label>
                            <div className="col-xs-9">
                                <input name="foodName" className="form-control" id="inputEmail" value={formik.values.foodName} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.foodName}</p>
                            </div>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputPassword">Giá Tiền:</label>
                            <div className="col-xs-9">
                                <input type="number" className="form-control" id="inputPassword" name="foodPrice" value={formik.values.foodPrice} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.foodPrice}</p>
                            </div>
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Chi Tiết:</label>
                        <div className="col-xs-9">
                            <textarea rows={3} name="foodDescription" className="form-control" id="postalAddress" defaultValue={""} value={formik.values.foodDescription} onChange={formik.handleChange} />
                            <p className='text-danger'>{formik.errors.foodDescription}</p>
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Hình Ảnh:</label>
                        <div style={{ marginBottom: '30px' }}>
                            <img src={formik.values.foodImage} width={300} height={300} />
                        </div>
                        <input type="file" name="foodImage" id="file" className="input-file" onChange={uploadFile} />
                        <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                            <FontAwesomeIcon icon={faUpload} />
                            <span className="js-fileName">Choose a file</span>
                        </label>
                        <p className='text-danger'>{formik.errors.foodImage}</p>
                    </div>



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

import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { storage_bucket } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { AddDrinkAction } from '../../redux/action/DrinkAction';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';



export default function AddDrink () {
    const dispatch = useDispatch()
    const validation = Yup.object({
        drinkName: Yup.string()
            .min(2, "Name mininum 2 characters")
            .max(100, " Name maximum 100 characters")
            .required("Required!"),
        drinkQuantity: Yup.number()
            .min(1, " Quantity min 1")
            .required("Required!"),
        drinkPrice: Yup.number()
            .min(1, " Price min 1")
            .required("Required!"),
        drinkDetail: Yup.string()
            .min(2, "Detail mininum 2 characters")
            .required("Required!"),
        drinkImage: Yup.string()
            .required("Required!"),
    })

    const formik = useFormik({
        initialValues: {
            drinkId: "string",
            drinkName: "",
            drinkQuantity: 0,
            drinkPrice: 0,
            drinkDetail: "",
            drinkImage: "",
            status: true
        },
        validationSchema: validation,
        onSubmit: async (value) => {
            console.log(value);
            const action = await AddDrinkAction(value);
            await dispatch(action);
            toast(`Add Drink ${formik.values.drinkName} thành công`, {
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
            // console.log(snapshot);
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    formik.setFieldValue("drinkImage", url)
                })
            }
        )
        // console.log(uploadTask);
    }

    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: '25px' }}><NavLink to='/drink' style={{ textDecoration: 'none', paddingRight: '10px' }}>Thức Uống</NavLink> / <span style={{ paddingTop: '2px', fontSize: '25px', paddingLeft: '10px' }}>Thêm thức uống</span> </div>

                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Tên Thức Uống:</label>
                            <div className="col-xs-9">
                                <input name="drinkName" className="form-control" id="inputEmail" onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.drinkName}</p>
                            </div>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputPassword">Số Lượng:</label>
                            <div className="col-xs-9">
                                <input type="number" className="form-control" id="inputPassword" name="drinkQuantity" onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.drinkQuantity}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>

                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputPassword">Giá Tiền:</label>
                            <div className="col-xs-9">
                                <input type="number" className="form-control" id="inputPassword" name="drinkPrice" onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.drinkPrice}</p>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Chi Tiết:</label>
                        <div className="col-xs-9">
                            <textarea rows={3} name="drinkDetail" className="form-control" id="postalAddress" onChange={formik.handleChange} />
                            <p className='text-danger'>{formik.errors.drinkDetail}</p>
                        </div>
                    </div>



                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Hình Ảnh:</label>
                        <div>
                            {formik.values.drinkImage === "" ? <div></div> : <img src={formik.values.drinkImage} width={300} height={300} />}
                        </div>
                        <input type="file" name="drinkImage" id="file" className="input-file" onChange={uploadFile} />
                        <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                            <FontAwesomeIcon icon={faUpload} />
                            <span className="js-fileName pl-2">Choose a file</span>
                        </label>
                        <p className='text-danger'>{formik.errors.drinkImage}</p>
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


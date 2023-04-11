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
export default function EditDecor (props) {
    const { getDecorByID } = useSelector(root => root.DecorReducer);
    console.log(getDecorByID);
    const dispatch = useDispatch()
    const { id } = props.match.params;
    useEffect(() => {
        const action = GetDecorByIdAction(id);
        dispatch(action)
    }, []);
    // console.log(detailFood);


    const validation = Yup.object({
        decorationName: Yup.string()
            .required("Không bỏ trống!"),
        decorationPrice: Yup.number()
            .required("Không bỏ trống!"),
        decorationImage: Yup.string()
            .required("Không bỏ trống!"),

    })

    const formik = useFormik({
        initialValues: {
            decorationId: getDecorByID.decorationId,
            decorationName: getDecorByID.decorationName,
            decorationPrice: getDecorByID.decorationPrice,
            decorationImage: getDecorByID.decorationImage
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            console.log(value);
            const action = await UpdateDecorAction(value);
            await dispatch(action)
            toast(`Cập nhật ${formik.values.decorationName} thành công`, {
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
                    formik.setFieldValue("decorationImage", url)
                })
            }
        )
    }
    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    <div className='d-flex' style={{ fontSize: '25px' }}><NavLink to='/decor' style={{ paddingRight: '10px' }}>Trang Trí</NavLink> / <span style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '25px', paddingTop: '5px' }}>Chỉnh sửa trang trí</span> / <span style={{ color: 'red', paddingLeft: '10px', paddingRight: '10px', fontSize: '25px', paddingTop: '5px' }}>{getDecorByID.decorationName}</span></div>

                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Tên Trang Trí:</label>
                            <div className="col-xs-9">
                                <input name="decorationName" className="form-control" id="inputEmail" value={formik.values.decorationName} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.decorationName}</p>
                            </div>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputPassword">Giá Tiền:</label>
                            <div className="col-xs-9">
                                <input type="" className="form-control" id="inputPassword" name="decorationPrice" value={formik.values.decorationPrice} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.decorationPrice}</p>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
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

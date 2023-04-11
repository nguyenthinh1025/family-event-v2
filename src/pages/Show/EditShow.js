import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { detailGameAction, UpdateDrinkAction } from '../../redux/action/DrinkAction';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import * as Yup from "yup";
import { storage_bucket } from '../../firebase';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { history } from '../../App';
import { DetailGameAction, UpdateGameAction } from '../../redux/action/GameAction';
import { DetailShowAction, UpdateShowAction } from '../../redux/action/ShowAction';
export default function EditShow (props) {
    const { detailShow } = useSelector(root => root.ShowReducer);
    const dispatch = useDispatch()
    const { id } = props.match.params;
    useEffect(() => {
        const action = DetailShowAction(id);
        dispatch(action)
    }, []);



    const validation = Yup.object({
        showServiceName: Yup.string()
            .required("Không bỏ trống!"),
        showPrice: Yup.number()
            .min(1)
            .required("Không bỏ trống!"),
        light: Yup.string()
            .required("Không bỏ trống!"),
        sound: Yup.string()
            .required("Không bỏ trống!"),
        singer: Yup.string()
            .required("Không bỏ trống!"),
        showDescription: Yup.string()
            .required("Không bỏ trống!"),
        showImage: Yup.string()
            .required("Không bỏ trống!"),
    })

    const formik = useFormik({
        initialValues: {
            showId: detailShow.showId,
            showServiceName: detailShow.showServiceName,
            showPrice: detailShow.showPrice,
            light: detailShow.light,
            sound: detailShow.sound,
            singer: detailShow.singer,
            showDescription: detailShow.showDescription,
            showImage: detailShow.showImage,
            status: true,

        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            console.log(value);
            const action = await UpdateShowAction(value);
            await dispatch(action)
            toast(`Cập nhật  ${formik.values.showServiceName} thành công`, {
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
                    formik.setFieldValue("showImage", url)
                })
            }
        )
    }
    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>

                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: '25px' }}><NavLink to='/show' style={{ marginRight: '10px' }}>Tiết Mục</NavLink> / <span style={{ marginLeft: '10px', marginRight: '10px', paddingTop: '2px', fontSize: '25px' }}>Chỉnh sửa tiết mục</span> / <span style={{ color: 'red', marginLeft: '10px', paddingTop: '2px', fontSize: '25px' }}>{detailShow.showServiceName}</span></div>
                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Tên Tiết mục:</label>
                            <div className="col-xs-9">
                                <input name="showServiceName" className="form-control" id="inputEmail" value={formik.values.showServiceName} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.showServiceName}</p>
                            </div>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Giá Tiền:</label>
                            <div className="col-xs-9">
                                <input type='number' name="showPrice" className="form-control" id="inputEmail" value={formik.values.showPrice} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.showPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Ánh Sáng:</label>
                            <div className="col-xs-9">
                                <input name="light" className="form-control" id="inputEmail" value={formik.values.light} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.light}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Âm Thanh:</label>
                            <div className="col-xs-9">
                                <input name="sound" className="form-control" id="inputEmail" value={formik.values.sound} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.sound}</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Người Trình Diễnn:</label>
                        <div className="col-xs-9">
                            <textarea rows={3} name="singer" className="form-control" id="postalAddress" defaultValue={""} value={formik.values.singer} onChange={formik.handleChange} />
                            <p className='text-danger'>{formik.errors.singer}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Chi Tiết:</label>
                        <div className="col-xs-9">
                            <textarea rows={3} name="showDescription" className="form-control" id="postalAddress" defaultValue={""} value={formik.values.showDescription} onChange={formik.handleChange} />
                            <p className='text-danger'>{formik.errors.showDescription}</p>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Hình Ảnh:</label>
                        <div>
                            <img src={formik.values.showImage} width={300} height={300} />
                        </div>
                        <input type="file" name="showImage" id="file" className="input-file" onChange={uploadFile} />
                        <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                            <i className="icon fa fa-check" />
                            <span className="js-fileName">Choose a file</span>
                        </label>
                        <p className='text-danger'>{formik.errors.showImage}</p>
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

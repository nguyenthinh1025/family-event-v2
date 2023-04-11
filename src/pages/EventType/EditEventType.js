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
import { UpdateDecorAction } from '../../redux/action/DecorAction';
import { GetListEventTypeByIdAction, UpdateEventTypeAction } from '../../redux/action/EventTypeAction';
export default function EditEventType (props) {
    const { arrEventTypeByID } = useSelector(root => root.EventTypeReducer);
    console.log(arrEventTypeByID);
    const dispatch = useDispatch()
    const { id } = props.match.params;
    useEffect(() => {
        const action = GetListEventTypeByIdAction(id);
        dispatch(action)
    }, []);
    // console.log(detailFood);


    const validation = Yup.object({
        eventTypeName: Yup.string()
            .required("Không bỏ trống!"),
        eventTypeDescription: Yup.string()
            .required("Không bỏ trống!"),
        eventTypeImage: Yup.string()
            .required("Không bỏ trống!"),

    })

    const formik = useFormik({
        initialValues: {
            eventTypeId: arrEventTypeByID.eventTypeId,
            eventTypeName: arrEventTypeByID.eventTypeName,
            eventTypeImage: arrEventTypeByID.eventTypeImage,
            eventTypeDescription: arrEventTypeByID.eventTypeDescription
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            console.log(value);
            const action = await UpdateEventTypeAction(value);
            await dispatch(action)
            toast(`Cập nhật ${formik.values.eventTypeName} thành công`, {
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
                    formik.setFieldValue("eventTypeImage", url)
                })
            }
        )
    }
    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    <div className='' style={{ fontSize: '25px' }}><NavLink to='/eventtype'>Loại Sự Kiện</NavLink> / <span>Chỉnh sửa loại sự kiện</span> / <span style={{ color: 'red' }}>{arrEventTypeByID.eventTypeName}</span></div>

                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Loại Sự Kiện:</label>
                            <div className="col-xs-9">
                                <input name="eventTypeName" className="form-control" id="inputEmail" value={formik.values.eventTypeName} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.eventTypeName}</p>
                            </div>
                        </div>
                        <div className="form-group col">

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Chi Tiết:</label>
                        <div className="col-xs-9">
                            <textarea rows={3} name="eventTypeDescription" className="form-control" id="postalAddress" defaultValue={""} value={formik.values.eventTypeDescription} onChange={formik.handleChange} />
                            <p className='text-danger'>{formik.errors.eventTypeDescription}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Hình Ảnh:</label>
                        <div style={{ marginBottom: '30px' }}>
                            <img src={formik.values.eventTypeImage} width={300} height={300} />
                        </div>
                        <input type="file" name="eventTypeImage" id="file" className="input-file" onChange={uploadFile} />
                        <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                            <FontAwesomeIcon icon={faUpload} />
                            <span className="js-fileName pl-2">Choose a file</span>
                        </label>
                        <p className='text-danger'>{formik.errors.eventTypeImage}</p>
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

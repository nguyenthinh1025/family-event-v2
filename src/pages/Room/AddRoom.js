import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import * as Yup from "yup";
import { storage_bucket } from '../../firebase';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { AddRoomAction, GetListRoomByIdAction, UpdateRoomAction } from '../../redux/action/RoomAction';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function AddRoom (props) {
    const { detailRoom } = useSelector(root => root.RoomReducer);
    const dispatch = useDispatch()




    const validation = Yup.object({
        roomName: Yup.string()
            .required("Không bỏ trống!"),
        parking: Yup.string()
            .required("Không bỏ trống!"),
        capacity: Yup.number()
            .min(1, "Số Lượng khách không được dưới 1!")
            .required("Không bỏ trống!"),
        roomImage: Yup.string()
            .required("Không bỏ trống!"),
        roomDescription: Yup.string()
            .required("Không bỏ trống!"),

    })

    const formik = useFormik({
        initialValues: {
            roomId: "room",
            roomName: "",
            parking: "",
            capacity: 0,
            roomImage: "",
            roomDescription: "",
            status: true
        },
        validationSchema: validation,
        onSubmit: async (value) => {
            console.log(value);
            const action = await AddRoomAction(value);
            await dispatch(action)
            toast(`Thêm mới ${formik.values.roomName} thành công`, {
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
                    formik.setFieldValue("roomImage", url)
                })
            }
        )
    }
    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    {/* <div className='' style={{ fontSize: '25px' }}><NavLink to='/room'>Nơi Diễn Sự Kiện</NavLink> / <span>Thêm Mới Nơi Diễn Ra</span></div> */}
                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: '25px' }}><NavLink to='/room' style={{ textDecoration: 'none', paddingRight: '10px' }}>Nơi Tổ Chức Sự Kiện</NavLink> / <span style={{ paddingTop: '2px', fontSize: '25px', paddingLeft: '10px' }}>Thêm mới địa điễm</span> </div>
                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Tên Nơi Diễn Ra:</label>
                            <div className="col-xs-9">
                                <input name="roomName" className="form-control" id="inputEmail" onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.roomName}</p>
                            </div>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Bãi Đỗ Xe:</label>
                            <div className="col-xs-9">
                                <input name="parking" className="form-control" id="inputEmail" onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.parking}</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Số Lượng Khách :</label>
                        <div className="col-xs-9">
                            <input type="number" name="capacity" className="form-control" id="inputEmail" onChange={formik.handleChange} />
                            <p className='text-danger'>{formik.errors.capacity}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Chi Tiết:</label>
                        <div className="col-xs-9">
                            <textarea rows={3} name="roomDescription" className="form-control" id="postalAddress" onChange={formik.handleChange} />
                            <p className='text-danger'>{formik.errors.roomDescription}</p>
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Hình Ảnh:</label>
                        <div>
                            {formik.values.roomImage === "" ? <div></div> : <img src={formik.values.roomImage} width={300} height={300} />}
                        </div>
                        <input type="file" name="roomImage" id="file" className="input-file" onChange={uploadFile} />
                        <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                            <FontAwesomeIcon icon={faUpload} />
                            <span className="js-fileName pl-2">Choose a file</span>
                        </label>
                        <p className='text-danger'>{formik.errors.roomImage}</p>
                    </div>




                    <br />
                    <div className="form-group">
                        <div className="col-xs-offset-3 col-xs-9">
                            <input type="submit" className="btn btn-primary" defaultValue="Tạo mới" value="Tạo mới" />

                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

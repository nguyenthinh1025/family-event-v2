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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
export default function EditGame (props) {
    const { detailGame } = useSelector(root => root.GameReducer);
    const dispatch = useDispatch()
    const { id } = props.match.params;
    useEffect(() => {
        const action = DetailGameAction(id);
        dispatch(action)
    }, []);



    const validation = Yup.object({
        gameName: Yup.string()
            .required("Không bỏ trống"),
        gameDetails: Yup.string()
            .required("Không bỏ trống"),
        gameRules: Yup.string()
            .required("Không bỏ trống"),
        gameReward: Yup.string()
            .required("Không bỏ trống"),
        supplies: Yup.string()
            .required("Không bỏ trống"),
        gameImage: Yup.string()
            .required("Không bỏ trống"),
    })

    const formik = useFormik({
        initialValues: {
            gameId: detailGame.gameId,
            gameName: detailGame.gameName,
            gameServicePrice: detailGame.gameServicePrice,
            gameDetails: detailGame.gameDetails,
            gameRules: detailGame.gameRules,
            gameReward: detailGame.gameReward,
            supplies: detailGame.supplies,
            gameImage: detailGame.gameImage,
            status: true,
            entertainmentProduct: []
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            console.log(value);
            const action = await UpdateGameAction(value);
            await dispatch(action)
            toast(`Cập nhật ${formik.values.gameName} thành công`, {
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
                    formik.setFieldValue("gameImage", url)
                })
            }
        )
    }
    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: '25px' }}><NavLink to='/game' style={{ marginRight: '10px' }}>Trò Chơi</NavLink> / <span style={{ marginLeft: '10px', marginRight: '10px', paddingTop: '2px', fontSize: '25px' }}>Chỉnh sửa trò chơi</span> / <span style={{ color: 'red', marginLeft: '10px', paddingTop: '2px', fontSize: '25px' }}>{detailGame.gameName}</span></div>

                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Tên Trò Chơi:</label>
                            <div className="col-xs-9">
                                <input name="gameName" className="form-control" id="inputEmail" value={formik.values.gameName} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.gameName}</p>
                            </div>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Nơi Diễn Ra:</label>
                            <div className="col-xs-9">
                                <input name="supplies" className="form-control" id="inputEmail" value={formik.values.supplies} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.supplies}</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Chi Tiết:</label>
                        <div className="col-xs-9">
                            <textarea rows={3} name="gameDetails" className="form-control" id="postalAddress" defaultValue={""} value={formik.values.gameDetails} onChange={formik.handleChange} />
                            <p className='text-danger'>{formik.errors.gameDetails}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Luật Chơi:</label>
                        <div className="col-xs-9">
                            <textarea rows={3} name="gameRules" className="form-control" id="postalAddress" defaultValue={""} value={formik.values.gameRules} onChange={formik.handleChange} />
                            <p className='text-danger'>{formik.errors.gameRules}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Giải Thưởng:</label>
                        <div className="col-xs-9">
                            <textarea rows={3} name="gameReward" className="form-control" id="postalAddress" defaultValue={""} value={formik.values.gameReward} onChange={formik.handleChange} />
                            <p className='text-danger'>{formik.errors.gameReward}</p>
                        </div>
                    </div>




                    <div className="form-group">
                        <label className="control-label col-xs-3" htmlFor="postalAddress">Hình Ảnh:</label>
                        <div className='mb-3'>
                            <img src={formik.values.gameImage} width={300} height={300} />
                        </div>
                        <input type="file" name="gameImage" id="file" className="input-file" onChange={uploadFile} />
                        <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                            <FontAwesomeIcon icon={faUpload} />
                            <span className="js-fileName pt-2">Choose a file</span>
                        </label>
                        <p className='text-danger'>{formik.errors.gameImage}</p>
                    </div>




                    <br />
                    <div className="form-group">
                        <div className="col-xs-offset-3 col-xs-9">
                            <input type="submit" className="btn btn-primary" defaultValue="Submit" value="Chỉnh Sửa" />
                        </div>
                    </div>
                </form>
            </div>
        </div >

    )
}

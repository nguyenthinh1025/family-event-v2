import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import * as Yup from "yup";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { AddEntertainmenAction } from '../../redux/action/EntertainmentAction';
import { GetShowAction } from '../../redux/action/ShowAction';
import { GetGameAction } from '../../redux/action/GameAction';
import { AddEntertainmentProductAction } from '../../redux/action/EntertainmentProductAction';
import { history } from '../../App';
export default function AddEntertainmentProduct (props) {
    const { id } = props.match.params;
    console.log(id);
    const dispatch = useDispatch()
    useEffect(() => {
        const action = GetShowAction();
        dispatch(action)
        const action1 = GetGameAction();
        dispatch(action1)
    }, []);
    const { arrShow } = useSelector(root => root.ShowReducer);
    console.log(arrShow);
    const { arrGame } = useSelector(root => root.GameReducer);
    console.log(arrGame);

    const validation = Yup.object({
        showId: Yup.number()
            .required("Không bỏ trống!"),
        gameId: Yup.number()
            .required("Không bỏ trống!"),
        entertainmentProductPrice: Yup.number()
            .required("Không bỏ trống!")
            .min(1, "Giá tiền không bé hơn 1"),
        quantity: Yup.number()
            .required("Không bỏ trống!")
            .min(1, "Số Tiền không bé hơn 1"),

    })

    const formik = useFormik({
        initialValues: {
            entertainmentId: id,
            productId: "string",
            showId: "",
            gameId: "",
            entertainmentProductPrice: 0,
            quantity: 0
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            console.log(value);
            const action = await AddEntertainmentProductAction(value);
            await dispatch(action)
            toast(`Thêm mới thành công`, {
                position: toast.POSITION.TOP_RIGHT
            });

            history.push(`/editentertainment/${id}`)
        }

    })

    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    <div className='d-flex' style={{ fontSize: '25px' }}><NavLink to='/entertainment' style={{ paddingRight: '10px' }}>Giải Trí</NavLink> / <span style={{ paddingLeft: '10px', paddingTop: '5px', fontSize: '25px' }}>Thêm mới </span> </div>

                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputPassword">Trò Chơi:</label>
                            <select data-te-select-init data-te-select-visible-options="3" name='gameId' className="form-control" onChange={formik.handleChange}>
                                <option  >Chọn Trò chơi</option>
                                {arrGame.map((item, index) => {
                                    return <option key={index} value={item.gameId}>{item.gameName}</option>
                                })}

                            </select>
                            <p className='text-danger'>{formik.errors.gameId}</p>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputPassword">Tiết Mục:</label>
                            <select data-te-select-init data-te-select-visible-options="3" name='showId' className="form-control" onChange={formik.handleChange}>
                                <option  >Chọn Tiết Mục</option>
                                {arrShow.map((item, index) => {
                                    return <option key={index} value={item.showId}>{item.showServiceName}</option>
                                })}

                            </select>
                            <p className='text-danger'>{formik.errors.showId}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputPassword">Giá Tiền:</label>
                            <input type='number' name="entertainmentProductPrice" className="form-control" id="inputEmail" onChange={formik.handleChange} />
                            <p className='text-danger'>{formik.errors.entertainmentProductPrice}</p>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputPassword">Số Lượng:</label>
                            <input type='number' name="quantity" className="form-control" id="inputEmail" onChange={formik.handleChange} />
                            <p className='text-danger'>{formik.errors.quantity}</p>
                        </div>
                    </div>




                    <br />
                    <div className="form-group">
                        <div className="col-xs-offset-3 col-xs-9">
                            <input type="submit" className="btn btn-primary" defaultValue="Submit" value='Thêm mới' />
                            {/* <input type="reset" className="btn btn-default" defaultValue="Reset" /> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

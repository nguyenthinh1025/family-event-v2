import React from 'react'
import { useEffect } from 'react';
import { GetEntertainmentByIDActionAction } from '../../redux/action/EntertainmentAction';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { NavLink } from 'react-router-dom';
import { GetGameAction } from '../../redux/action/GameAction';
import { GetShowAction } from '../../redux/action/ShowAction';
import { UpdateEntertainmentProductAction } from '../../redux/action/EntertainmentProductAction';
import { toast } from 'react-toastify';
import { history } from '../../App';
export default function UpdateEntertainment (props) {
    const { arrEntertainmentProduct } = useSelector(root => root.EntertainmentReducer)
    const { arrGame } = useSelector(root => root.GameReducer);
    const { arrShow } = useSelector(root => root.ShowReducer);
    const dispatch = useDispatch()
    const { id, id1 } = props.match.params;
    console.log(id);
    console.log(id1);
    useEffect(() => {
        const action = GetEntertainmentByIDActionAction(id, id1)
        dispatch(action)
        const action1 = GetGameAction();
        dispatch(action1)
        const action2 = GetShowAction();
        dispatch(action2)
    }, []);
    console.log(arrEntertainmentProduct);
    const validation = Yup.object({

        entertainmentProductPrice: Yup.number()
            .min(1, "Giá tiền không bé hơn 1")
            .required("Không bỏ trống!"),
        quantity: Yup.number()
            .min(1, "Số lượng không bé hơn 1")
            .required("Không bỏ trống!"),

    })

    const formik = useFormik({
        initialValues: {
            entertainmentId: arrEntertainmentProduct.entertainmentId,
            productId: arrEntertainmentProduct.productId,
            showId: arrEntertainmentProduct.showId,
            gameId: arrEntertainmentProduct.gameId,
            entertainmentProductPrice: arrEntertainmentProduct.entertainmentProductPrice,
            quantity: arrEntertainmentProduct.quantity
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            console.log(value);
            const action = await UpdateEntertainmentProductAction(value);
            await dispatch(action)
            toast(`Cập Nhật  thành công`, {
                position: toast.POSITION.TOP_RIGHT
            });
            history.push(`/editentertainment/${value.entertainmentId}`)
        }

    })
    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className=' pl-5 pb-5'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: '25px' }}><NavLink to='/entertainment' style={{ textDecoration: 'none', paddingRight: '10px' }}>Giải Trí</NavLink> / <span style={{ paddingTop: '2px', fontSize: '25px', paddingLeft: '10px', paddingRight: '10px' }}>Chỉnh sửa </span> </div>

                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Tên Trò Chơi:</label>
                            <select data-te-select-init data-te-select-visible-options="3" name='gameId' className="form-control" onChange={formik.handleChange}>
                                <option selected value={arrEntertainmentProduct.game?.gameId}>{arrEntertainmentProduct.game?.gameName}</option>
                                {arrGame.map((item, index) => {
                                    return <option key={index} value={item.gameId}>{item.gameName}</option>
                                })}

                            </select>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputPassword">Tên Tiết Tục:</label>
                            <select data-te-select-init data-te-select-visible-options="3" name='showId' className="form-control" onChange={formik.handleChange}>
                                <option selected value={arrEntertainmentProduct.show?.showId}>{arrEntertainmentProduct.show?.showServiceName}</option>
                                {arrShow.map((item, index) => {
                                    return <option key={index} value={item.showId}>{item.showServiceName}</option>
                                })}
                            </select>
                        </div>
                    </div>


                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="postalAddress">Giá Tiền:</label>
                            <div className="col-xs-9">
                                <input type="number" className="form-control" id="inputPassword" name="entertainmentProductPrice" value={formik.values.entertainmentProductPrice} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.entertainmentProductPrice}</p>
                            </div>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="postalAddress">Số Lượng:</label>
                            <div className="col-xs-9">
                                <input type="number" className="form-control" id="inputPassword" name="quantity" value={formik.values.quantity} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.quantity}</p>
                            </div>
                        </div>
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

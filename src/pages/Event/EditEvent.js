import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { GetEventByIdAction, GetEventEnterAction, GetEventMenuAction, UpdateEventAction } from '../../redux/action/EventAction';
import moment from 'moment/moment';
export default function EditEvent (props) {
    const { arrEventId, eventMenu, eventEnter } = useSelector(root => root.ListEventReducer)
    const dispatch = useDispatch()
    const { id } = props.match.params;
    useEffect(() => {
        const action = GetEventByIdAction(id);
        dispatch(action)
        const action7 = GetEventMenuAction(id);
        dispatch(action7)
        const action8 = GetEventEnterAction(id);
        dispatch(action8)

    }, []);
    console.log(eventEnter);
    const validation = Yup.object({

    })

    const formik = useFormik({
        initialValues: {
            eventId: arrEventId.eventId,
            scriptId: arrEventId.scriptId,
            decorationId: arrEventId.decorationId,
            eventTypeId: arrEventId.eventTypeId,
            menuId: arrEventId.menuId,
            entertainmentId: arrEventId.entertainmentId,
            eventBookerId: arrEventId.eventBookerId,
            organizedPerson: arrEventId.organizedPerson,
            startDate: arrEventId.startDate,
            totalPrice: arrEventId.totalPrice,
            endDate: arrEventId.endDate,
            status: true,
            decoration: {
                decorationId: "string",
                decorationName: "string",
                decorationPrice: 0,
                decorationImage: "string"
            },
            entertainment: {
                entertainmentId: "string",
                status: true,
                entertainmentTotal: 0
            },
            eventBooker: {
                eventBookerId: "string",
                fullname: "string",
                email: "string",
                phone: "string",
                address: "string",
                gender: true,
                registerDate: "2023-04-09T08:47:04.262Z",
                dateOfBirth: "2023-04-09T08:47:04.262Z",
                image: "string",
                status: true,
                birthDay: "2023-04-09"
            },
            eventType: {
                eventTypeId: "string",
                eventTypeName: "string",
                eventTypeImage: "string",
                eventTypeDescription: "string"
            },
            menu: {
                menuId: "string",
                menuName: "string",
                priceTotal: 0,
                status: true
            },
            script: {
                id: "string",
                scriptName: "string",
                scriptContent: "string",
                status: true
            },
            dateTimeLocation: [
                {
                    eventId: "string",
                    roomId: "string",
                    date: "2023-04-09T08:47:04.263Z",
                    status: 0
                }
            ],
            payment: [
                {
                    paymentId: "string",
                    eventId: "string",
                    amount: 0,
                    payContent: "string",
                    date: "2023-04-09T08:47:04.263Z",
                    status: true
                }
            ]
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            console.log(value);
            const action = await UpdateEventAction(value);
            await dispatch(action)
            toast(`Cập nhật event ${value.organizedPerson} thành công`, {
                position: toast.POSITION.TOP_RIGHT
            });

        }

    })
    const handleChangeDatePicker = (value) => {
        const startDate = moment(value)
            ;
        formik.setFieldValue('startDate', startDate)
    }

    return (
        // <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
        //     <div className='container pl-5 pb-5'>
        //         <div className=' d-flex justify-content-between'>
        //             <div className='d-flex justify-content-between align-items-center' style={{ fontSize: '25px' }}><NavLink to='/event' style={{ textDecoration: 'none', paddingRight: '10px' }}>Sự Kiện</NavLink> / <span style={{ paddingTop: '2px', fontSize: '25px', paddingLeft: '10px', paddingRight: '10px' }}>Chỉnh sửa sự kiện</span> / <span style={{ paddingTop: '2px', color: 'red', fontSize: '25px', paddingLeft: '10px' }}>{arrEventId.organizedPerson}</span></div>

        //         </div>
        //     </div>
        //     <div className='container'>
        //         <form className="form-horizontal" onSubmit={formik.handleSubmit}>
        //             <div className='row'>
        //                 <div className="form-group col">
        //                     <label className="control-label col-xs-3" htmlFor="inputPassword">Kịch Bản : </label>
        //                     <select data-te-select-init data-te-select-visible-options="3" name='scriptId' className="form-control" onChange={formik.handleChange}>
        //                         <option selected value={arrEventId.script?.id}>{arrEventId.script?.scriptName}</option>
        //                         {arrScript.map((item, index) => {
        //                             return <option key={index} value={item.id}>{item.scriptName}</option>
        //                         })}

        //                     </select>
        //                 </div>
        //                 <div className="form-group col">
        //                     <label className="control-label col-xs-3" htmlFor="inputPassword">Trang Trí : </label>
        //                     <select data-te-select-init data-te-select-visible-options="3" name='decorationId' className="form-control" onChange={formik.handleChange}>
        //                         <option selected value={arrEventId.decoration?.decorationId}>{arrEventId.decoration?.decorationName}</option>
        //                         {arrDecor.map((item, index) => {
        //                             return <option key={index} value={item.decorationId}>{item.decorationName}</option>
        //                         })}

        //                     </select>
        //                 </div>
        //             </div>
        //             <div className='row'>
        //                 <div className="form-group col">
        //                     <label className="control-label col-xs-3" htmlFor="inputPassword">Menu : </label>
        //                     <select data-te-select-init data-te-select-visible-options="3" name='menuId' className="form-control" onChange={formik.handleChange}>
        //                         <option selected value={arrEventId.menu?.menuId}>{arrEventId.menu?.menuName}</option>
        //                         {arrMenu.map((item, index) => {
        //                             return <option key={index} value={item.menuId}>{item.menuName}</option>
        //                         })}

        //                     </select>
        //                 </div>
        //                 <div className="form-group col">
        //                     <label className="control-label col-xs-3" htmlFor="inputPassword">Giải Trí : </label>
        //                     <select data-te-select-init data-te-select-visible-options="3" name='entertainmentId' className="form-control" onChange={formik.handleChange}>
        //                         <option selected value={arrEventId.entertainment?.entertainmentId}>{arrEventId.entertainment?.entertainmentTotal}</option>
        //                         {arrEntertainment.map((item, index) => {
        //                             return <option key={index} value={item.entertainmentId}>{item.entertainmentTotal}</option>
        //                         })}

        //                     </select>
        //                 </div>
        //             </div>
        //             <div className='row'>
        //                 <div className="form-group col">
        //                     <label className="control-label col-xs-3" htmlFor="inputPassword">Người Đặt : </label>
        //                     <select data-te-select-init data-te-select-visible-options="3" name='eventBookerId' className="form-control" onChange={formik.handleChange}>
        //                         <option selected value={arrEventId.eventBooker?.eventBookerId}>{arrEventId.eventBooker?.fullname}</option>
        //                         {arrEventBooker.map((item, index) => {
        //                             return <option key={index} value={item.eventBookerId}>{item.fullname}<span className='pl-4' style={{ paddingLeft: '20px' }}>{item.phone}</span></option>
        //                         })}

        //                     </select>
        //                 </div>
        //                 <div className="form-group col">
        //                     <label className="control-label col-xs-3" htmlFor="inputPassword">Tên Sự Kiện : </label>
        //                     <input className="form-control" id="inputPassword" name="organizedPerson" value={formik.values.organizedPerson} onChange={formik.handleChange} />
        //                 </div>
        //             </div>
        //             <div className='row'>
        //                 <div className="form-group col">
        //                     <label className="control-label col-xs-3" htmlFor="inputPassword">Loại Sự Kiện: </label>
        //                     <select data-te-select-init data-te-select-visible-options="3" name='eventTypeId' className="form-control" onChange={formik.handleChange}>
        //                         <option selected value={arrEventId.eventType?.eventTypeId}>{arrEventId.eventType?.eventTypeName}</option>
        //                         {arrEventType.map((item, index) => {
        //                             return <option key={index} value={item.eventTypeId}>{item.eventTypeName}</option>
        //                         })}

        //                     </select>
        //                 </div>
        //                 <div className="form-group col">

        //                 </div>
        //             </div>
        //             <div className='row'>
        //                 <div className="form-group col">
        //                     <label className="control-label col-xs-3" htmlFor="inputPassword">Ngày Bắt Đầu : </label>
        //                     <input format={'DD/MM/YYYY'} type='date' className="form-control" id="inputPassword" name="startDate" value={moment(formik.values.startDate)} onChange={handleChangeDatePicker} />
        //                 </div>
        //                 <div className="form-group col">
        //                     <label className="control-label col-xs-3" htmlFor="inputPassword">Ngày Kết Thúc : </label>
        //                     <input type='date' className="form-control" id="inputPassword" name="endDate" value={formik.values.endDate} onChange={formik.handleChange} />
        //                 </div>
        //             </div>

        //             <br />
        //             <div className="form-group">
        //                 <div className="col-xs-offset-3 col-xs-9">
        //                     <input type="submit" className="btn btn-primary" defaultValue="Submit" value="Chỉnh Sửa" />

        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // </div>

        <div className="container bootdey">
            <div className="row invoice row-printable">
                <div className="col-md-10">
                    {/* col-lg-12 start here */}
                    <div className="panel panel-default plain" id="dash_0">
                        {/* Start .panel */}
                        <div className="panel-body p30">
                            <div className="row">
                                {/* Start .row */}
                                <div className="col-lg-6">
                                    {/* col-lg-6 start here */}
                                    <div className="invoice-logo"><img width={100} src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Invoice logo" /></div>
                                </div>
                                {/* col-lg-6 end here */}
                                <div className="col-lg-6">
                                    {/* col-lg-6 start here */}
                                    <div className="invoice-from">
                                        <ul className="list-unstyled text-right">
                                            <li>FamiLy Event</li>
                                            <li>Distric 9 , Hồ Chí Minh</li>
                                            <li>0123958382</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* col-lg-6 end here */}
                                <div className="col-lg-12">
                                    {/* col-lg-12 start here */}
                                    <div className="invoice-details mt25">
                                        <div className="well">
                                            <ul className="list-unstyled mb0">
                                                <li><strong>Mã Hóa Đơn : </strong> {arrEventId.eventId}</li>
                                                <li><strong>Ngày Tạo : </strong>{moment(arrEventId.startDate).format('DD/MM/YYYY')}</li>
                                                <li><strong>Ngày Kết Thúc : </strong>{moment(arrEventId.endDate).format('DD/MM/YYYY')} </li>
                                                <li><strong>Trạng Thái : </strong> <span className="label label-danger">Thành Công</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="invoice-to mt25">
                                        <ul className="list-unstyled">
                                            <li><strong>Khách Hàng : </strong></li>
                                            <li>{arrEventId.eventBooker?.fullname}</li>
                                            <li>{arrEventId.eventBooker?.address}</li>
                                            <li>{arrEventId.eventBooker?.phone}</li>
                                        </ul>
                                    </div>
                                    <div className="invoice-items">
                                        <div className="table-responsive" style={{ overflow: 'hidden', outline: 'none' }} tabIndex={0}>
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th className="per70 text-center">Chi Tiết</th>
                                                        <th className="per5 text-center">Số Lượng</th>
                                                        <th className="per25 text-center">Tổng Tiền</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div style={{ fontSize: '25px' }}>Đồ ăn :</div>
                                                            <div>{eventMenu?.map((item, index) => { return <Fragment key={index} className="d-flex"><span style={{ paddingLeft: '10px', fontSize: '15px' }}>+ {item.foodName}</span></Fragment> })}</div>
                                                        </td>
                                                        <td className="text-center">{eventMenu.length}</td>
                                                        <td className="text-center">{arrEventId.menu?.priceTotal.toLocaleString()} vnđ</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div style={{ fontSize: '25px' }}>Trò Chơi :</div>
                                                            <div>{eventEnter?.map((item, index) => {
                                                                return <Fragment key={index} className="d-flex">
                                                                    <span style={{ paddingLeft: '10px', fontSize: '15px' }}>+ {item.game?.gameName}</span>
                                                                </Fragment>
                                                            })}</div>
                                                            <div style={{ fontSize: '25px' }}>Tiết Mục :</div>
                                                            <div>{eventEnter?.map((item, index) => {
                                                                return <Fragment key={index} className="d-flex">
                                                                    <span style={{ paddingLeft: '10px', fontSize: '15px' }}>+ {item.show?.showServiceName}</span>
                                                                </Fragment>
                                                            })}</div>

                                                        </td>
                                                        <td className="text-center">{eventEnter.length}</td>
                                                        <td className="text-center">{arrEventId.entertainment?.entertainmentTotal.toLocaleString()} vnđ</td>
                                                    </tr>

                                                </tbody>
                                                <tfoot>

                                                    <tr>
                                                        <th colSpan={2} className="text-right">Tổng Tiền:</th>
                                                        <th className="text-center">{arrEventId.totalPrice.toLocaleString()}  vnđ</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                                {/* col-lg-12 end here */}
                            </div>
                            {/* End .row */}
                        </div>
                    </div>
                    {/* End .panel */}
                </div>
                {/* col-lg-12 end here */}
            </div>
        </div>


    )
}

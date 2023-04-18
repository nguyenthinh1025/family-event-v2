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
    console.log(arrEventId);
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
                                </div>
                                <div className='col-lg-6'>
                                    <div className="invoice-from">
                                        <ul className="list-unstyled text-right">
                                            <li style={{ fontSize: '25px', fontWeight: 'bold' }}>FamiLy Event</li>
                                            <li>Quận 9 , Hồ Chí Minh</li>
                                            <li>0123958382</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <h1 className='text-center ' style={{ marginTop: '10px' }}>Hóa Đơn</h1>
                            <div className="row">
                                {/* Start .row */}
                                <div className="col-lg-6">
                                    {/* col-lg-6 start here */}

                                </div>
                                {/* col-lg-6 end here */}
                                <div className="col-lg-6">
                                    {/* col-lg-6 start here */}

                                </div>
                                {/* col-lg-6 end here */}
                                <div className="col-lg-12">
                                    {/* col-lg-12 start here */}
                                    <div className="row">
                                        {/* Start .row */}
                                        <div className="col-lg-6">
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
                                        </div>
                                        <div className="col-lg-6 text-right">
                                            <div className="invoice-to mt25">
                                                <div className="invoice-logo"><img width={100} src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Invoice logo" /></div>
                                                <ul className="list-unstyled " style={{ position: 'relative' }}>
                                                    <li><strong>Khách Hàng : </strong></li>
                                                    <li><strong>Tên Kháchh Hàng : </strong>{arrEventId.eventBooker?.fullname}</li>
                                                    <li><strong>Địa Chỉ : </strong>{arrEventId.eventBooker?.address}</li>
                                                    <li><strong>Số Điện Thoại : </strong>{arrEventId.eventBooker?.phone}</li>
                                                </ul>
                                            </div>
                                        </div>
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
                                                            <div>{arrEventId.foods?.map((item, index) => { return <Fragment key={index} className="d-flex"><span style={{ paddingLeft: '10px', fontSize: '15px' }}><span className='fw-bold'> + {item.foodName}</span> -  Giá tiền : {item.foodPrice.toLocaleString()} vnđ</span></Fragment> })}</div>
                                                        </td>
                                                        <td className="text-center">{eventMenu.length}</td>
                                                        <td className="text-center">{arrEventId.foods?.reduce((a, b) => a + b.foodPrice, 0).toLocaleString()} vnđ</td>
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

                                                    {/* <tr>
                                                        <th colSpan={2} className="text-right">Tổng Tiền:</th>
                                                        <th className="text-center">{arrEventId.totalPrice.toLocaleString()}  vnđ</th>
                                                    </tr> */}
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

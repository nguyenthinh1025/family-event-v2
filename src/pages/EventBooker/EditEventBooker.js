import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import * as Yup from "yup";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { UpdateFamilyAction } from '../../redux/action/FamilyAction';
export default function EditEventBooker (props) {
    const dispatch = useDispatch()
    const { item } = props
    // console.log(productID);



    const validation = Yup.object({
        memberName: Yup.string()
            .required("Không bỏ trống!"),
        memberPhone: Yup.string()
            .required("Không bỏ trống!"),
        description: Yup.string()
            .required("Không bỏ trống!"),
        relation: Yup.string()
            .required("Không bỏ trống!"),


    })

    const formik = useFormik({
        initialValues: {
            id: item.id,
            eventBookerId: item.eventBookerId,
            memberId: "string",
            memberName: item.memberName,
            memberPhone: item.memberPhone,
            gender: item.gender,
            dateOfBirth: item.dateOfBirth,
            description: item.description,
            relation: item.relation,
            status: true,
            eventBooker: {
                eventBookerId: "string",
                fullname: "string",
                email: "string",
                phone: "string",
                address: "string",
                gender: true,
                registerDate: "2023-04-05T08:48:45.888Z",
                dateOfBirth: "2023-04-05T08:48:45.888Z",
                image: "string",
                status: true,
                birthDay: "2023-04-05"
            }
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            console.log(value);
            const action = await UpdateFamilyAction(value);
            await dispatch(action)
            toast(`Chỉnh sửa thông tin ${value.memberName} thành công`, {
                position: toast.POSITION.TOP_RIGHT
            });

        }

    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" style={{ zIndex: 99, marginTop: '100px' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Chỉnh sửa thông tin thành viên</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className="form-group col">
                                    <label className="control-label col-xs-3" htmlFor="inputEmail">Tên Thành Viên:</label>
                                    <div className="col-xs-9">
                                        <input name="memberName" className="form-control" id="inputEmail" value={formik.values.memberName} onChange={formik.handleChange} />
                                        <p className='text-danger'>{formik.errors.memberName}</p>
                                    </div>
                                </div>
                                <div className="form-group col">
                                    <label className="control-label col-xs-3" htmlFor="inputEmail">Số Điện Thọai:</label>
                                    <div className="col-xs-9">
                                        <input name="memberPhone" className="form-control" id="inputEmail" value={formik.values.memberPhone} onChange={formik.handleChange} />
                                        <p className='text-danger'>{formik.errors.memberPhone}</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="form-group col">
                                        <label className="control-label col-xs-3" htmlFor="inputEmail">Thông tin:</label>
                                        <div className="col-xs-9">
                                            <input name="description" className="form-control" id="inputEmail" value={formik.values.description} onChange={formik.handleChange} />
                                            <p className='text-danger'>{formik.errors.description}</p>
                                        </div>
                                    </div>
                                    <div className="form-group col">
                                        <label className="control-label col-xs-3" htmlFor="inputEmail">Mối Quan Hệ:</label>
                                        <div className="col-xs-9">
                                            <input name="relation" className="form-control" id="inputEmail" value={formik.values.relation} onChange={formik.handleChange} />
                                            <p className='text-danger'>{formik.errors.relation}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">

                                <button type="submit" className="btn btn-primary">Chỉnh Sửa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}

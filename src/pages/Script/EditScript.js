import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import * as Yup from "yup";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { GetListMenuByIdAction, UpdateMenuAction } from '../../redux/action/MenuAction';
import { GetScriptByIDAction, UpdateScriptAction } from '../../redux/action/ScriptAction';
export default function EditScript (props) {
    const { arrScriptID } = useSelector(root => root.ScriptReducer);
    const dispatch = useDispatch()
    const { id } = props.match.params;
    useEffect(() => {
        const action = GetScriptByIDAction(id);
        dispatch(action)
    }, []);

    console.log(arrScriptID);

    const validation = Yup.object({
        scriptName: Yup.string()
            .required("Không bỏ trống!"),
        scriptContent: Yup.string()
            .required("Không bỏ trống!"),

    })

    const formik = useFormik({
        initialValues: {
            id: arrScriptID.id,
            scriptName: arrScriptID.scriptName,
            scriptContent: arrScriptID.scriptContent,
            status: true
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            console.log(value);
            const action = await UpdateScriptAction(value.id, value);
            await dispatch(action)
            toast(`Cập nhật ${formik.values.scriptName} thành công`, {
                position: toast.POSITION.TOP_RIGHT
            });

        }

    })

    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: '25px' }}><NavLink to='/script' style={{ textDecoration: 'none', paddingRight: '10px' }}>Kịch Bản</NavLink> / <span style={{ paddingTop: '2px', fontSize: '25px', paddingLeft: '10px', paddingRight: '10px' }}>Chỉnh sửa kịch bản</span> / <span style={{ paddingTop: '2px', color: 'red', fontSize: '25px', paddingLeft: '10px' }}>{arrScriptID.scriptName}</span></div>

                </div>
            </div>
            <div className='container'>
                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Tên Kịch Bản:</label>
                            <div className="col-xs-9">
                                <input name="scriptName" className="form-control" id="inputEmail" value={formik.values.scriptName} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.scriptName}</p>
                            </div>
                        </div>
                        <div className="form-group col">
                            <label className="control-label col-xs-3" htmlFor="inputEmail">Chủ Đề:</label>
                            <div className="col-xs-9">
                                <input name="scriptContent" className="form-control" id="inputEmail" value={formik.values.scriptContent} onChange={formik.handleChange} />
                                <p className='text-danger'>{formik.errors.scriptContent}</p>
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

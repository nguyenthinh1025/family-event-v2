import { useFormik } from 'formik'
import React from 'react'
import { useEffect } from 'react'
import { history } from '../../App'
import { NavLink } from 'react-router-dom'
import { LoginAction } from '../../redux/action/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export default function Login () {
    const { msg } = useSelector(root => root.authReducer)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: (value) => {
            if (value.username === "admin" && value.password === "1234") {
                localStorage.setItem('admin', 'admin')
                localStorage.setItem('username', 'admin')
                history.push('/')
                window.location.reload()
            }
            else {
                const action = LoginAction(value);
                dispatch(action);

            }
        }
    })

    return (
        <div>
            <div className="login-root">
                <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
                    <div className="loginbackground box-background--white padding-top--64">
                        <div className="loginbackground-gridContainer">
                            <div className="box-root flex-flex" style={{ gridArea: 'top / start / 8 / end' }}>
                                <div className="box-root" style={{ backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: 1 }}>
                                </div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: '4 / 2 / auto / 5' }}>
                                <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }} />
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: '6 / start / auto / 2' }}>
                                <div className="box-root box-background--blue800" style={{ flexGrow: 1 }} />
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: '7 / start / auto / 4' }}>
                                <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }} />
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: '8 / 4 / auto / 6' }}>
                                <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }} />
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: '2 / 15 / auto / end' }}>
                                <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }} />
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: '3 / 14 / auto / end' }}>
                                <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }} />
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: '4 / 17 / auto / 20' }}>
                                <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }} />
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: '5 / 14 / auto / 17' }}>
                                <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }} />
                            </div>
                        </div>
                    </div>
                    <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
                        <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                            <h1><a href="/login" rel="dofollow" style={{ textDecoration: 'none', fontSize: '50px!important' }} className='header-text1'>Family Event</a></h1>
                        </div>
                        <div className="formbg-outer">
                            <div className="formbg">
                                <div className="formbg-inner padding-horizontal--48">
                                    <span className="padding-bottom--15">Đăng Nhập</span>
                                    <form id="stripe-login" onSubmit={formik.handleSubmit}>
                                        <div className="field padding-bottom--24">
                                            <label htmlFor="email">Tài Khoản : </label>
                                            <input name="username" onChange={formik.handleChange} />
                                        </div>
                                        <div className="field padding-bottom--24">
                                            <div className="grid--50-50">
                                                <label htmlFor="password">Mật Khẩu</label>

                                            </div>
                                            <input type="password" name="password" onChange={formik.handleChange} />
                                        </div>
                                        <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                                            {/* <label htmlFor="checkbox">
                                                <input type="checkbox" name="checkbox" /> Stay signed in for a week
                                            </label> */}
                                        </div>
                                        <div style={{ color: 'red', fontSize: '25px' }}>
                                            <h1 style={{ fontSize: '25px', color: 'red' }}>{msg}</h1>
                                        </div>
                                        <div className="field padding-bottom--24">
                                            <input type="submit" name="submit" defaultValue="Continue" value="Đăng Nhập" />
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <div className="footer-link padding-top--24">
                                <span>Bạn Chưa Có Tài Khoản? <NavLink to='/register'>Đăng Ký</NavLink></span>
                                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                                    <span><a href="#">© Family Event</a></span>
                                    <span><a href="#">Liên Hệ</a></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

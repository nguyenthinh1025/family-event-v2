import React, { useEffect } from 'react'
import { GetListMenuByProductIdAction } from '../../redux/action/MenuAction';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function ViewMenu (props) {
    const { id } = props.match.params;
    const dispatch = useDispatch()
    const { arrMenuByProductId } = useSelector(root => root.MenuReducer)
    useEffect(() => {
        const action = GetListMenuByProductIdAction(id);
        dispatch(action)
    }, []);
    console.log(arrMenuByProductId);
    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    <div className='container display-6 fw-bold title'>Danh Sách Đồ ăn Thức Uống Có Trong Menu</div>
                    <NavLink className='test' to='/addmenulist'>
                        <div className="primary-button">
                            <div className="custom-button">Thêm Mới</div>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div>
                <div className="container mt-2">
                    {/*   <div class="card card-block mb-2">
                  <h4 class="card-title">Card 1</h4>
                  <p class="card-text">Welcom to bootstrap card styles</p>
                  <a href="#" class="btn btn-primary">Submit</a>
              </div>   */}
                    <div className="row ">
                        {arrMenuByProductId.map((item, index) => {
                            return <div className="col-md-4 col-sm-6 item">
                                <div className="card item-card card-block">
                                    <h4 className="card-title text-right"><i className="material-icons">{item.productNavigation?.dish}</i></h4>
                                    <img className='image-menu' src={item.productNavigation?.foodImage} alt="menu" />
                                    <h5 className="item-card-title mt-3 mb-3 text-center " style={{ fontWeight: 'bold', fontSize: '30px' }}>{item.productNavigation?.foodName}</h5>
                                    <p className="card-text pl-5 pr-5 ">-Chi Tiết :{item.productNavigation?.foodDescription}</p>
                                    <div className='d-flex' style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div className='pt-3 pl-5 pr-5' style={{ fontWeight: 'bold', fontSize: '20px' }} >-Giá tiền : {item.productNavigation?.foodPrice.toLocaleString()} vnđ</div>
                                        <div>
                                            <img src='./../../images/edit.svg' width={30} className="mr-2" />
                                            <img src='./../../images/delete.svg' width={30} className="mr-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}


                    </div>
                </div>
            </div>

        </div>

    )
}

import React from 'react'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetFoodAction } from '../../redux/action/FoodAction';
import { useState } from 'react';
import { toast } from 'react-toastify';
export default function AddMenuList () {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const { arrFood } = useSelector(root => root.FoodReducer);
    console.log(arrFood);
    useEffect(() => {
        const action = GetFoodAction();
        dispatch(action)

    }, []);

    const [newObject, setNewObject] = useState({});
    const handleClick = (originalObject) => {
        const { foodId, foodPrice } = originalObject; // Destructuring các thuộc tính cần thiết của object cũ
        const newObj = { foodId, foodPrice }; // Tạo object mới với thuộc tính mới
        console.log(newObj);
        dispatch({ type: 'ADD_NEW_OBJECT', arrMenuList: newObj }); // Cập nhật state với object mới
    };
    console.log(newObject);
    return (
        <div classname="app-main__inner  pt-2" style={{ width: '100%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container pl-5 pb-5'>
                <div className=' d-flex justify-content-between'>
                    <div className='container display-6 fw-bold title'>Danh Sách Đồ ăn Thức Uống Có Trong Menu</div>
                    <NavLink className='test' to='/listmenu'>
                        <div className="primary-button">
                            <div className="custom-button">Xem Danh Sách</div>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div style={{ marginTop: '20px', marginLeft: '50px', width: '200px!important' }}>
                <input className='search-bar' onChange={(e) => setSearch(e.target.value)} />
                <div className='div1' />
            </div>
            <div>

            </div>
            <div>
                <div className="container mt-2">
                    {/*   <div class="card card-block mb-2">
              <h4 class="card-title">Card 1</h4>
              <p class="card-text">Welcom to bootstrap card styles</p>
              <a href="#" class="btn btn-primary">Submit</a>
          </div>   */}
                    <div className="row ">
                        {arrFood.filter(item => item.foodName.toLowerCase().includes(search.toLowerCase().trim())).map((item, index) => {
                            return <div className="col-md-4 col-sm-6 item" key={index} style={{ marginBottom: '40px' }}>
                                <div className="card item-card card-block">
                                    <h4 className="card-title text-right"><i className="material-icons">{item.dish}</i></h4>
                                    <img className='image-menu' src={item.foodImage} alt="menu" />
                                    <h5 className="item-card-title mt-3 mb-3 text-center " style={{ fontWeight: 'bold', fontSize: '30px' }}>{item.foodName}</h5>
                                    <p className="card-text pl-5 pr-5 ">-Chi Tiết :{item.foodDescription.slice(0, 200)}</p>
                                    <div className='d-flex' style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div className='pt-3 pl-5 pr-5' style={{ fontWeight: 'bold', fontSize: '20px' }} >-Giá tiền : {item.foodPrice.toLocaleString()} vnđ</div>
                                        <div>
                                            <img src='./../../images/add1.svg' width={30} className="mr-2"
                                                onClick={() => {
                                                    dispatch({ type: 'ADD_NEW_OBJECT', arrMenuList: item })

                                                    toast(`Thêm đồ ăn ${item.foodName} vào menu thành công`, {
                                                        position: toast.POSITION.TOP_RIGHT
                                                    }

                                                    )
                                                }}
                                            />
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

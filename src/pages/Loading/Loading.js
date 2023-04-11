import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';

export default function Loading () {
    const { isLoading } = useSelector(rootReducer => rootReducer.LoadingReducer);
    return (
        <Fragment>
            {
                isLoading ?
                    <div className='loading'>
                        < div class="box-loading" >
                            <div class="b b1"></div>
                            <div class="b b2"></div>
                            <div class="b b3"></div>
                            <div class="b b4"></div>
                        </div >
                    </div >
                    :
                    <div></div>

            }

        </Fragment>
    )
}

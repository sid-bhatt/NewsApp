import React from 'react'
import loading from './loading.gif';

function Loading() {
    return (
        <div className='text-center'>
            <img src={loading} alt='loading...'/>
        </div>
    )
}

export default Loading

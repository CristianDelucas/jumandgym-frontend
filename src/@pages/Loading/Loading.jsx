import React from 'react';

//Images
import loading from '../../assets/img/logo.png';
import Loader from "react-js-loader";


const Loading = () => {

    return (
        <div className="loading">
            <img src={loading} alt="logo" />
            <div className="loading__animation">
                <Loader type="bubble-top" bgColor={"#025F1C"} color={'#01748e'} size={50} />
            </div>
        </div>
    )
}

export default Loading;
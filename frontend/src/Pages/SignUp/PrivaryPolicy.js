import React from 'react';
import { ButtonBlue } from '../../GeneralCss';
import '../SignUp/privacyPolicy.css'

const PrivacyPolicy = (props) => {

    return <div className='Main_Div1'>
        <div className='Main_Div'>
            <div className='first_Div'></div>
            <div className='first_Div1'></div>
            <div className='first_Div2'></div>
            <div className='first_Div3'></div>
            <div className='first_Div4'></div>
            <div className='first_Div5'></div>
            <div className='first_Div6'></div>
            <div className='first_Div7'></div>
            <br></br>
            <div className='CloseBtnDiv'>
                <ButtonBlue font='25' onClick={props.handlePrivacy}>Close</ButtonBlue>
            </div>
        </div>
    </div>
}
export default PrivacyPolicy
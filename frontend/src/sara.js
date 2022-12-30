import React from 'react';
import {
    Button,
    ButtonBlue,
    ButtonDarkBlue,
    HeadersDiv,
    HeaderLabel
} from './GeneralCss'
import './General.css'

export default function Sara(){

    const Click = () =>{
        alert('sara')
    }

    return <div className='General_Body'>
        <div className='General_MainBlue_Div'>
            <h1>sara</h1>
            <Button onClick={Click} font = '35'>Saraaa</Button>
            <ButtonBlue font = '35'>Saraaa</ButtonBlue>
            <ButtonDarkBlue font = '35'>Saraaa</ButtonDarkBlue>
            <HeadersDiv fontLabel = '35' fontValue = '32' label = 'Sara Saad :' value = 'Henaaaaa'/>
        </div>
    </div>
}

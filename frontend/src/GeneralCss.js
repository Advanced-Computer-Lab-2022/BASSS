/*
TO DO LIST:
Button => white/Blue => color = {blue? Blue : White} width = {Num in px} height = {Num in px} font = {Num in px} :: DONE
H1.Div => white/Blue => color = {blue? Blue : White} font = {Num in px}  :: DONE
H1.Title => white/Blue => color = {blue? Blue : White} font = {Num in px}

dala3 => Div_withScrollBar => maxHeight = {Num in px}
 */

//${props => props.color}

import styled from 'styled-components';


export const Button = styled.button`
background-color: transparent;
color: #fff;
padding: 15px 15px;
border: 2px solid white;
text-align: center;
font-size: ${props => props.font}px;
border-radius: 10px;
width: ${props => props.width}px;
height: ${props => props.height}px;
cursor: pointer;
font-weight: 600;
&:hover{
    background-color: rgba(255, 255, 255, 0.814);
    color: rgb(3, 48, 76);
    font-weight: 600;
}
`
export const ButtonBlue = styled(Button)`
background-color: transparent;
color: rgba(3, 75, 120, 0.884);
padding: 15px 15px;
border: 2px solid rgba(3, 75, 120, 0.884);
text-align: center;
font-size: ${props => props.font};
border-radius: 10px;
width: ${props => props.width};
height: ${props => props.height};
cursor: pointer;
font-weight: 600;
&:hover{
    background-color: rgba(3, 75, 120, 0.884);
    color: white;
    font-weight: 600;
}
`

export const ButtonDarkBlue = styled(Button)`
background-color: transparent;
color: rgb(3, 48, 76);
padding: 15px 15px;
border: 2px solid  rgb(3, 48, 76);
text-align: center;
font-size: ${props => props.font};
border-radius: 10px;
width: ${props => props.width};
height: ${props => props.height};
cursor: pointer;
font-weight: 600;
&:hover{
    background-color: rgb(3, 48, 76);
    color: rgba(255, 255, 255, 0.814);
    font-weight: 600;
}
`
export const HeadersDiv = (props) =>{
    return <HeadersDiv1>
        <HeaderLabel font = {props.fontLabel}>{props.label}</HeaderLabel>
        <HeaderValue font = {props.fontValue}>{props.value}</HeaderValue>
    </HeadersDiv1>
}


export const HeadersDiv1 = styled.div`
    position: relative;
    width:fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
`
  
export const HeaderLabel = styled.h1`
    color: rgba(240, 240, 240, 0.949);
    width: fit-content;
    height: fit-content;
    font-weight: bold;
    font-size: ${props => props.font}px;
    `
  
export const HeaderValue = styled.h1`
    position: relative;
    color: rgba(237, 237, 237, 0.838);
    width: fit-content;
    height: fit-content;
    left: 10px;
    top: 2px;
    font-size: ${props => props.font}px;
    `
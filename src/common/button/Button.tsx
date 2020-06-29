import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import B from "./B.module.css"


export type ButtonNewTypes = {
    onClickHandler?:()=>void,
    name:string,
}


function ButtonNew(props: ButtonNewTypes) {
    return (
        <div className={B.box1}>
            <div className={B.btn + ' ' + B.btnone} onClick={props.onClickHandler} >
                <span>{props.name}</span>
            </div>
        </div>)
}

export default ButtonNew;
import React, {
    ButtonHTMLAttributes,
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    KeyboardEvent,
    useState
} from 'react';
import s from './inputNew.module.css';
import {AppTypes} from "../../App";


export type InputNyaTypes = {
    functionForNewInput?:(e: KeyboardEvent<HTMLInputElement>)=>void,
    nNew?:string,
    newArr?:Array<AppTypes>,
    onChangeHandler?:(e: ChangeEvent<HTMLInputElement>)=>void,
    onKeyPressHandler?:(e: KeyboardEvent<HTMLInputElement>)=>void,
    error?:()=>void,

};


function InputNew(props:InputNyaTypes) {

    return (
        <>
            <input className={s.inputNya}
                   value={props.nNew}
                   onKeyPress={ props.onKeyPressHandler}
                   onChange={props.onChangeHandler}/>




        </>

)
}
export default InputNew;
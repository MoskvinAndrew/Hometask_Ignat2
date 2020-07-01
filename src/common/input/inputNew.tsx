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
import {stringify} from "querystring";


export type InputNyaTypes = {

    nNew?:string,
    newArr?:Array<AppTypes>,
    onChangeHandler?:(e: ChangeEvent<HTMLInputElement>)=>void,
    onKeyPressHandler?:(e: KeyboardEvent<HTMLInputElement>)=>void,
    setnNew:(value:string)=>void,
    functionForNewInput?:()=>void,
    error?:string|null,
};


function InputNew(props:InputNyaTypes) {

    return (
        <>
            <input className={props.error !== " "?s.inputNya:s.inputNya+" "+s.errorStyle}
                   value={props.nNew}
                   onKeyPress={ props.onKeyPressHandler}
                   onChange={props.onChangeHandler}/>




        </>

)
}
export default InputNew;
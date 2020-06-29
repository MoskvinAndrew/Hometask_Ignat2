import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useState} from 'react';
import {v1} from "uuid";
import TH from "./ThirdHometask.module.css";
import {AppTypes} from "../../App";
import InputNew from "../input/inputNew";
import ButtonNew from "../button/Button";


type ThirdHometaskTypes={
    nNew:string,
    newArr:Array<AppTypes>,
    onChangeHandler:(e: ChangeEvent<HTMLInputElement>)=>void,
    onClickHandler:()=>void,
    onKeyPressHandler:(e: KeyboardEvent<HTMLInputElement>)=>void,


}


function ThirdHometask(props:ThirdHometaskTypes){

    return (
       <div className={TH.inputContainer}>
           <InputNew

                  nNew={props.nNew}
                  onChangeHandler={props.onChangeHandler}
                  onKeyPressHandler={props.onKeyPressHandler}
                  />

           <ButtonNew  onClickHandler={props.onClickHandler}name={"ADD"}/>
           <div className={TH.counter}><p>Обьектов в массиве:</p>
               <span className={TH.span}>{props.newArr.length}</span>

           </div>

       </div>
   )
}
export default ThirdHometask;
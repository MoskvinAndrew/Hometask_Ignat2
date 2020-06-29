import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './App.css';
import ThirdHometask from "./common/3Hometask/Third-Hometask";
import {v1} from "uuid";
import InputNew from "./common/input/inputNew";
import CheckBoxNew from "./common/checkBox/CheckBox";
import ButtonNew from "./common/button/Button";

export type AppTypes = {
    id: string,
    name: string,
}


function App() {

    let [nNew, setnNew] = useState<string>("");
    let [newArr, setnewArr] = useState<Array<{ id: string, name: string }>>([]);


    function NewElemInNewArr(name: string) {
        let newElement = {id: v1(), name: name};
        setnewArr([newElement, ...newArr]);
    }


    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setnNew(e.currentTarget.value)
    }

    console.log(nNew);


    function onClickHandler() {
        if (nNew !== '') {
            // alert('Privet' + ' ' + nNew);
            NewElemInNewArr(nNew);
            setnNew('');
        }
    }


    function onKeyPressHandler(e: KeyboardEvent<HTMLInputElement>) {
        if (e.charCode == 13) {
            (nNew !== "" && NewElemInNewArr(nNew));
            nNew !== "" && alert('Privet' + ' ' + nNew);
            setnNew('');
        }
    }


    function error() {
        return true
    }

    function functionForNewInput(e: KeyboardEvent<HTMLInputElement>) {
        if (e.charCode == 13) {
            alert('Функция сработала на энтер')
        }
    }


    return (
        <div className="App">
            <ThirdHometask
                nNew={nNew}
                newArr={newArr}
                onChangeHandler={onChangeHandler}
                onKeyPressHandler={onKeyPressHandler}
                onClickHandler={onClickHandler}

            />


            <div className="wrapperForNew">
                <InputNew
                    functionForNewInput={functionForNewInput}
                    error={error}/>
                <ButtonNew
                    name={"Моя кнопка"}
                />
                <CheckBoxNew/>
            </div>
        </div>
    );
}

export default App;

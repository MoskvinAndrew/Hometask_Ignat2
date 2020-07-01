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
    let [error, setErr] = useState<string|null>(null);
    let [nNew, setnNew] = useState<string>("");
    let [newArr, setnewArr] = useState<Array<{ id: string, name: string }>>([]);


    function NewElemInNewArr(name: string) {
        let newElement = {id: v1(), name: name};
        setnewArr([newElement, ...newArr]);
    }


    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setnNew(e.currentTarget.value);
        setErr("sdf");
    }

    function functionForNewInput() {
        alert('Функция сработала на энтер!');
    }





    function onClickHandler() {
        setErr("sd")
        if (nNew !== '') {
            // alert('Privet' + ' ' + nNew);
            NewElemInNewArr(nNew);
            setnNew('');

        }
    }





    function onKeyPressHandler(e: KeyboardEvent<HTMLInputElement>) {
        if (e.charCode == 13) {

            functionForNewInput();
            (nNew !== "" && NewElemInNewArr(nNew));
            nNew !== "" && alert('Privet' + ' ' + nNew);
            setnNew('');
        }
    }









    return (
        <div className="App">
            <ThirdHometask
                nNew={nNew}
                newArr={newArr}
                onKeyPressHandler={onKeyPressHandler}
                onChangeHandler={onChangeHandler}
                onClickHandler={onClickHandler}
                typeofButton={false}
                setnNew={setnNew}
                error={error}



            />


            <div className="wrapperForNew">
                <InputNew

                    onKeyPressHandler={onKeyPressHandler}
                    functionForNewInput={functionForNewInput}
                    setnNew={setnNew}

                   />
                <ButtonNew
                    name={"Моя кнопка"}
                    typeofButton={true}
                />
                <CheckBoxNew/>
            </div>
        </div>
    );
}

export default App;

import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import C from "./C.module.css"

type CheckBoxNewTypes = {

}

function CheckBoxNew(props: CheckBoxNewTypes) {
    return <div className={C.chekboxtwo}>
        <label className={C.checkbox}>
            <input type="checkbox" checked />
            <span className={C.checkbox__icon}></span>

        </label>
    </div>
}


export default CheckBoxNew;
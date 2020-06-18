import React from 'react';

import s from "./utils.module.css"

const FormElement = (Element) => {
    return ({input, meta, ...props}) => {
        const hasError = meta.touched && meta.error;
        return (

            <div className={s.formElement + " " + (hasError ? s.error : "")}>
                <Element {...input} {...props}/>
                {hasError && (<span>{meta.error}</span>)}
            </div>)


    }

}



export default FormElement;
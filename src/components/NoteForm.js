import React from "react";
import App from "../App"

const Form = ({onSubmit, value, onChange}) =>{
    return(
    <form onSubmit ={onSubmit}>
        <input value = {value} onChange={onChange}/>
        <button type="submit">save</button>
    </form>
    )
}
    export default Form  
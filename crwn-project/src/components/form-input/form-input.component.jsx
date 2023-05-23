import { Fragment } from "react"

const FormInput=({label,...otherProps})=>{
    return(
    <Fragment>
        <label>{label}</label>
       <input {...otherProps}/>
    </Fragment>)
}
export default FormInput

// <input type="text" required onChange={changeHandler} name="displayName" value={displayName}/>
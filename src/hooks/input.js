import { useState } from "react"

const Input=(validateValue)=>{
    const [value,setValue]=useState('')
    const [isTouched,setIsTouched]=useState(false)

    const validValue=validateValue(value);
    const hasError=!validValue && isTouched

    const onChangeValueHandler=(e)=>{
        setValue(e.target.value)
    }

    const onBlurValueHandler=()=>{
        setIsTouched(true)
    }

    const reset=()=>{
        setIsTouched(false)
        setValue('')
    }

    return{
        value:value,
        hasError:hasError,
        onChange:onChangeValueHandler,
        onBlur:onBlurValueHandler,
        reset:reset,
        validValue:validValue
    }

}
export default Input
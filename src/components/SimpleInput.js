// import { useState } from "react";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    value:enteredName,
    isValid:enteredNameIsValid,
    hasError:nameInputHasError,
    valueChangehandler:nameChangeHandler, 
    inputBlurhandler:nameBlurHandler,
    reset:resetNameInput
  }=useInput(value=>value.trim!=='')

  // const [enteredName,setEnteredName]=useState('')
  // const [enteredNameTouched,setEnteredNameTouched]=useState(false)
 

  // const enteredNameIsValid=enteredName.trim()!=='';
  // const nameInputIsInvalid=!enteredNameIsValid && enteredNameTouched

  let formIsValid=false
  if(enteredNameIsValid){
    formIsValid=true;
  }
  

  // const nameInputChangehandler=event=>{
  //   setEnteredName(event.target.value)
  // }

  // const nameInputBlurhandler=(event)=>{
  //   setEnteredNameTouched(true);
  // }

  const formSubmissionHandler=event=>{
    event.preventDefault();

    // setEnteredNameTouched(true)

    if(!enteredNameIsValid){
      return
    }
    console.log(enteredName)
    resetNameInput()
    // setEnteredName('');
    // setEnteredNameTouched(false)
  }
  // const nameInputClasses=nameInputIsInvalid?'form-control invalid':'form-control'
  const nameInputClasses=nameInputHasError?'form-control invalid':'form-control'


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        {/* <input type='text' id='name' value={enteredName} onChange={nameInputChangehandler} onBlur={nameInputBlurhandler}/> */}
        <input type='text' id='name' value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>

      </div>
      {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

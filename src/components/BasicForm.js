import Input from "../hooks/input";

const BasicForm = (props) => {

  const firstName=Input(value=>value.trim()!=='')
  const lastName=Input(value=>value.trim()!=='')
  const email=Input(value=>value.includes('@'))

  let formIsValid=false;
  if(firstName.validValue && lastName.validValue && email.validValue){
    formIsValid=true;
  }

  const formSubmitHandler=(event)=>{
    event.preventDefault()
    console.log(firstName.value,lastName.value,email.value)
    firstName.reset();
    lastName.reset();
    email.reset();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstName.hasError?'form-control invalid':'form-control'}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstName.value} onChange={firstName.onChange} onBlur={firstName.onBlur}/>
        </div>
        <div className={lastName.hasError?'form-control invalid':'form-control'}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastName.value} onChange={lastName.onChange} onBlur={lastName.onBlur}/>
        </div>
      </div>
      <div className={email.hasError?'form-control invalid':'form-control'}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={email.value} onChange={email.onChange} onBlur={email.onBlur}/>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

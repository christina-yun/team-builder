import React from 'react';

function Form(props){
    const { values, update, submit } = props;
    
    const onChange = event =>{
        const name = event.target.name;
        const value = event.target.value;
        update(name, value);
    } 

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <form>
            <div className='form-group inputs' onSubmit={onSubmit}>
                <label> Name
                    <input
                    type='text'
                    name='name'
                    value= {values.name}
                    placeholder='Type in your name'
                    onChange={onChange}
                    />
                </label>
                <label>Email
                    <input
                    type='email'
                    name='email'
                    value ={values.email}
                    onChange={onChange}
                    />
                </label>
                <label>Role
                    <select 
                    name='role'
                    value={values.role}
                    onChange={onChange}
                    >
                        <option value=''>-- Select Role --</option>
                        <option value='fullstack'>Fullstack Engineer</option>
                        <option value='pm'>Product Manager</option>
                        <option value='designer'>Designer</option>
                    </select>
                </label>

                <div className='submit'>
                    <button>Submit</button>
                </div>    
            </div>
        </form>
    )
}
export default Form; 
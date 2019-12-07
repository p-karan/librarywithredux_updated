import React from 'react';
import {Field,reduxForm} from "redux-form";
const LoginForm = (props) => {
    const {handleSubmit,pristine,reset,submitting}=props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={'form-group'}>
                    <label>User Name</label>
                    <Field component={'input'} type={'text'} name={'userName'} className={'form-control'}/>
                </div>
                <div className={'form-group'}>
                    <label>Password</label>
                    <Field component={'input'} type={'password'} name={'password'} className={'form-control'}/>
                </div>
                <div>
                    <button disabled={pristine || submitting} onClick={reset}>{'Clear'}</button>
                    <button disabled={pristine || submitting} className={'btn btn-info'}>{'Submit'}</button>
                </div>
            </form>
        </div>
    );
}

export default reduxForm(
    {form:'loginForm'}
)(LoginForm)
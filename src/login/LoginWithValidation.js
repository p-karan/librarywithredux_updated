import React from 'react';
import {Field,reduxForm} from "redux-form";
import Validate from "../Validate";
import renderField from '../RenderField'
const LoginWithValidation = (props) => {
    const {handleSubmit,pristine,reset,submitting}=props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={'form-group'}>
                    <Field component={renderField} type={'text'} name={'userName'} label={'User Name'} className={'form-control'}/>
                </div>
                <div className={'form-group'}>
                    <Field component={renderField} type={'password'} name={'password'} label={'Password'} className={'form-control'}/>
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
    {form:'loginForm',
    validate:Validate}
)(LoginWithValidation)
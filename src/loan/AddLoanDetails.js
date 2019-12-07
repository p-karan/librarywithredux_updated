import React from 'react';
import {Field,reduxForm,reset} from "redux-form";
import renderField from'../RenderField'
import Validate from "../Validate";
import myStore from "../store/greetingStore";

const afterSubmit=()=>{
    myStore.dispatch(reset('AddLoan'))
}

const AddLoanDetails = (props) => {
    const {handleSubmit,pristine,reset,submitting}=props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field label={'loanId'} type={'text'} name={'loanId'} component={renderField}></Field>
                <Field label={'loanType'} type={'text'} name={'loanType'} component={renderField}></Field>
                <Field label={'openDate'} type={'date'} name={'openDate'} component={renderField}></Field>
                <Field label={'closingDate'} type={'date'} name={'closingDate'} component={renderField}></Field>
                <Field label={'loanAmount'} type={'number'} name={'loanAmount'} component={renderField}></Field>
                <button disabled={pristine || submitting} onClick={reset}>{'Clear'}</button>
                <button disabled={pristine || submitting} className={'btn btn-info'}>{'Submit'}</button>
            </form>
        </div>
    );
}

export default reduxForm(
    {form:'AddLoan',
        onSubmitSuccess:afterSubmit,
        validate:Validate}
)(AddLoanDetails)
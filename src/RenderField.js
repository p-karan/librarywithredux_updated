import React from 'react';

const RenderField = (({input,label,type,meta:{touched, error,warning}}) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} {...input}/>

            {touched && ((error &&
                <span className="text-danger">{error}</span>)
                )}
        </div>
    );
}
)
export default RenderField
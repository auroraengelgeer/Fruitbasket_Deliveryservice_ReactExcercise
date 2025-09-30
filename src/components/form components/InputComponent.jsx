import React from 'react';

function InputComponent({inputType, inputId, inputName, inputLabel, register, inputClassName, ...rest}) {
    return (
        <div className={inputClassName}>
            <label htmlFor={inputId}>
                {inputLabel}
                <input
                    type={inputType}
                    id={inputId}
                    {...register(inputName)}
                    {...rest}
                />
            </label>
        </div>
    );
}

export default InputComponent;
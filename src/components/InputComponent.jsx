import React from 'react';

function InputComponent({inputType, inputId, inputName, inputLabel, register, inputClassName}) {
    return (
        <div className={inputClassName}>
            <label htmlFor={inputId}>
                {inputLabel}
                <input
                    type={inputType}
                    id={inputId}
                    {...register(inputName)}
                />
            </label>
        </div>
    );
}

export default InputComponent;
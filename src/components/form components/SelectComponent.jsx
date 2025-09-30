import React from 'react';

function SelectComponent({selectClassName, selectLabel, selectId, selectName, options, register}) {
    return (
        <div className={selectClassName}>
            <label htmlFor={selectId}>
                {selectLabel}
                <select
                    {...register(selectName)}
                    id={selectId}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                        ))}
                </select>
            </label>
        </div>
    );
}

export default SelectComponent;
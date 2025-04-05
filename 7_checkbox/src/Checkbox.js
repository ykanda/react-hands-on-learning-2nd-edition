import React, { useState, useEffect } from 'react';

const Checkbox = () => {
    const [checked, setChecked] = useState(false);


    useEffect(() => {
        alert(`Checkbox component loaded, ${checked.toString()}`);
    });

    return (
        <>
            <input type="checkbox" id="checkbox" value={checked} onChange={() => setChecked(checked => !checked)} />
            <label htmlFor="checkbox">{checked ? "checked" : "not checked"}</label>
        </>
    );
};

export default Checkbox;
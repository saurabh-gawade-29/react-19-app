import React, { forwardRef } from "react";

const CButton = forwardRef((props, ref) => {
    return (
        <button
            disabled={props.disabled}
            className={props.className}
            role={props.role}
            ref={ref}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
});


CButton.defaultProps = {
    label: "Submit",
};
export default CButton;
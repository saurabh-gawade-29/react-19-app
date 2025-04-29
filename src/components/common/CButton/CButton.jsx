import React, { forwardRef } from "react";
import PropTypes from "prop-types";

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

CButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

CButton.defaultProps = {
    label: "Submit",
};
export default CButton;
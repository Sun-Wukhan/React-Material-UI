import React from 'react';
import Button from "@material-ui/core/Button";

const Buttons = ({ children, ...props }) => {
    return (
        <Button {...props}>
            {children}
        </Button>
    )
}

export default Buttons

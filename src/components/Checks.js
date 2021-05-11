import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox'

const Checks = ({ children, ...props }) => {
    const [checked, setChecked] = useState(true)
    return (
        <Checkbox
            {...props}>
            {children}
        </Checkbox>
    )
}

export default Checks

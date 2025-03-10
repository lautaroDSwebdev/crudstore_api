import React from 'react'

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> { }

const Label = ({ children, ...props }: Props) => {
    return (
        <label {...props}>{children}</label>
    )
}

export default Label
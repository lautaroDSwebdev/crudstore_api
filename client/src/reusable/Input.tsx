import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = ({ children, ...props }: Props) => {
    return (
        <input {...props}>{children}</input>
    )
}

export default Input
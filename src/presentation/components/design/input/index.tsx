import React, { ChangeEventHandler } from 'react'

type InputProps = {
  value: number | string
  name: string
  label: string
  required?: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}
const Input: React.FC<InputProps> = ({ label, name, value, required, onChange }) => {
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }
  return (
    <div className="input-container">
      <input readOnly onFocus={enableInput} id={name} className="input" type={name} pattern=".+" required={required} value={value} onChange={onChange}/>
      <label className="label" htmlFor={name}>{label}</label>
    </div>
  )
}

export default Input

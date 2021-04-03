import React, { ChangeEventHandler, useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'

type InputProps = {
  value: number | string
  name: string
  label: string
  required?: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}
const Input: React.FC<InputProps> = ({ label, name, value, required, onChange }) => {
  const { errorState } = useContext(Context)
  const error = errorState[name]
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const getLabel = (): string => {
    return `${label}`
  }

  const getTitle = (): string => {
    return error
  }
  return (
    <div className="input-container">
      <input readOnly onFocus={enableInput} id={name} className="input" type={name} pattern=".+" required={required} value={value} onChange={onChange} />
      <label data-testid={`${name}-status`} title={getTitle()} className="label" htmlFor={name}>{getLabel()}</label>
    </div>
  )
}

export default Input

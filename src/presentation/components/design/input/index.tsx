import React, { DetailedHTMLProps, InputHTMLAttributes, useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &{
  label: string
}

const Input: React.FC<Props> = ({ label, ...props }) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const getLabel = (): string => {
    return `${label}`
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <div className="input-container">
      <input {...props} data-testid={props.name} readOnly onFocus={enableInput} className="input" onChange={handleChange} />
      <label data-testid={`${props.name}-status`} title={getTitle()} className="label" htmlFor={props.name}>{getLabel()}</label>
    </div>
  )
}

export default Input

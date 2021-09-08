import { Button as MaterialButton } from '@material-ui/core'
import React from 'react'

type ButtonProps = {
  label: string
}
const Button: React.FC<ButtonProps> = ({ label }) => {
  return <MaterialButton data-testid="submit" type="submit" className="button" disabled>{label}</MaterialButton>
}

export default Button

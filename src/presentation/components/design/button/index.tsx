import { Button as MaterialButton } from '@material-ui/core'
import React from 'react'

type ButtonProps = {
  label: string
}
const Button: React.FC<ButtonProps> = ({ label }) => {
  return <MaterialButton data-testid="submit" type="submit" variant="contained" disabled color="primary" fullWidth>{label}</MaterialButton>
}

export default Button

import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'
import { Button as MaterialButton } from '@material-ui/core'

type ButtonProps = {
  label: string
}
const Button: React.FC<ButtonProps> = ({ label }) => {
  const { state } = useContext(Context)
  return <MaterialButton data-testid="submit" type="submit" variant="contained" disabled={!!state.emailError || !!state.emailError } color="primary" fullWidth>{label}</MaterialButton>
}

export default Button

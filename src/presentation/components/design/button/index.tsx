import React from 'react'

type ButtonProps = {
  label: string
}
const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button data-testid="submit" type="submit" className="button" disabled>{label}</button>
}

export default Button

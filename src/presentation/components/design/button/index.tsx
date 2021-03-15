import React from 'react'

type ButtonProps = {
  label: string
}
const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button type="submit" className="button">{label}</button>
}

export default Button

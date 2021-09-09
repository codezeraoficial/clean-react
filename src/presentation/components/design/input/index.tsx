import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'
import { TextField, TextFieldProps, FormHelperText, FormControl, InputAdornment } from '@material-ui/core'
import { Error } from '@material-ui/icons'
type Props = TextFieldProps & {
  label: string
}

const Input: React.FC<Props> = ({ label, ...props }) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.disabled = false
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

  const getError = (): string => {
    return error
  }

  return (
    <FormControl variant="outlined" fullWidth>
      <TextField
        onChange={handleChange}
        autoComplete="new-password"
        autoFocus
        onFocus={enableInput}
        margin="dense"
        fullWidth
        label={getLabel()}
        variant="outlined"
        inputProps={{
          'data-testid': `${props.name}`
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Error style={{ fill: '#ff0033' }}/>
            </InputAdornment>
          )
        }}
        {...props}
      />
      <FormHelperText data-testid={`${props.name}-status`}>{getError()}</FormHelperText>
    </FormControl>
  )
}

export default Input

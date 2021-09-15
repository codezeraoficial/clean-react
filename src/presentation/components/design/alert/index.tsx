import React from 'react'
import { Snackbar, SnackbarProps } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

type Props = SnackbarProps & {
  message: string
  handleClose: () => void
  severity: 'success' | 'info' | 'warning' | 'error'
}

const Snack: React.FC<Props> = ({ message, handleClose, severity, ...props }) => {
  return (
    <Snackbar open={!!message} autoHideDuration={3000} onClose={handleClose} {...props}>
      <Alert onClose={handleClose} severity={severity} elevation={6} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Snack

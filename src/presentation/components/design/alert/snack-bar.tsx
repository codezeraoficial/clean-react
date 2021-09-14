import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import { Alert } from '@material-ui/lab'

type Props = {
  message: string
  handleClose: () => void
  severity: 'success' | 'info' | 'warning' | 'error'
}

const Snack: React.FC<Props> = ({ message, handleClose,severity }) => {
  return (
    <Snackbar open={!!message} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} elevation={6} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Snack

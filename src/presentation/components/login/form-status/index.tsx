import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'
import { CircularProgress } from '@material-ui/core'
import Snack from '../../design/alert'

const FormStatus: React.FC = () => {
  const { state: { isLoading, mainError }, setState } = useContext(Context)
  const handleClose = (): void => {
    setState((prevstate) => ({
      ...prevstate,
      mainError: ''
    }))
  }
  return (
    <div data-testid="error-wrap" className="formStatus">
      {isLoading && <CircularProgress size={20} data-testid="spinner" />}
      <Snack data-testid="alert-message" message={mainError} handleClose={handleClose} severity="error"/>
    </div>
  )
}

export default FormStatus

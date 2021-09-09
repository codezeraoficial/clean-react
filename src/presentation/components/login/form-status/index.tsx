import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'
import { CircularProgress } from '@material-ui/core'

const FormStatus: React.FC = () => {
  const { state: { isLoading, mainError } } = useContext(Context)
  return (
    <div data-testid="error-wrap" className="formStatus">
      {isLoading && <CircularProgress size={20}/>}
      {mainError && <span>{mainError}</span>}
    </div>
  )
}

export default FormStatus

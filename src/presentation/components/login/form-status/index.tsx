import React, { useContext } from 'react'
import { Spinner } from '../../design'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)

  return (
    <div data-testid="error-wrap" className="formStatus">
      {isLoading && <Spinner/>}
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  )
}

export default FormStatus

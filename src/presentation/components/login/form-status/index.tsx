import React, { useContext } from 'react'
import { Spinner } from '../../design'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state: { isLoading, mainError } } = useContext(Context)
  return (
    <div data-testid="error-wrap" className="formStatus">
      {isLoading && <Spinner/>}
      {mainError && <span>{mainError}</span>}
    </div>
  )
}

export default FormStatus

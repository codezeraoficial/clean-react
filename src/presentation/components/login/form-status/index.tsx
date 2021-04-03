import React, { useContext } from 'react'
import { Spinner } from '../../design'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state: { isLoading }, errorState: { main } } = useContext(Context)
  return (
    <div data-testid="error-wrap" className="formStatus">
      {isLoading && <Spinner/>}
      {main && <span>{main}</span>}
    </div>
  )
}

export default FormStatus

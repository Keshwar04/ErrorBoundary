import React from 'react'
import ErrorBounday from './errorBoundaries/errorBoundary'
import ErrorComponent from './errorComponents/errorComponent'
import ErrorComponent2 from './errorComponents/errorComponent2'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorBoundaryPackage from './errorBoundaries/errorBoundaryPackage'

const App = () => {
  const handleEventError = () =>{}
  return (
    <div>
      <ErrorBounday>
        <ErrorComponent />
      </ErrorBounday>
      <ErrorBoundary fallback={<ErrorBoundaryPackage/>} onError={handleEventError}>
        <ErrorComponent2 />
      </ErrorBoundary>
    </div>
  )
}

export default App
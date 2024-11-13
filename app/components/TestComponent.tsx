import React from 'react'
import useProjectIndex from '../hooks/useProjectIndexHook'

const TestComponent = () => {
  const index = useProjectIndex(3) // Testa med ett konstant värde

  return <div>Current Index: {index}</div>
}

export default TestComponent

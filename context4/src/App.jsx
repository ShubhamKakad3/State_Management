import React from 'react'
import { UserContextProvider } from './contexts/UserContext'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
function App() {
  return (
    <UserContextProvider>
      <Comp1 />
      <Comp2 />
    </UserContextProvider>
  )
}
export default App

import React from 'react';
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import { GlobalProvider } from './context/GlobalStates';
const App = () => {
  return (
    <GlobalProvider>
      <EmployeeTable />
    </GlobalProvider>
  )
}

export default App

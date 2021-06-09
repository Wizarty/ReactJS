
import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [employee, setEmployee] = useState(null);
    const [record, setRecord] = useState(0);
    const [response, setResponse] = useState('');
    const [searchField, setSearchField] = useState({ EmployeeName: '' });

    return (
        <GlobalContext.Provider
            value={{
                record,
                setRecord,
                response,
                setResponse,
                isModalOpen,
                setIsModalOpen,
                employee,
                setEmployee,
                searchField,
                setSearchField,
            }}>
            { props.children}
        </GlobalContext.Provider>
    )
}
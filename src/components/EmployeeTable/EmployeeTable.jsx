import React, { useState, useEffect, useContext } from 'react';
import { Table } from "antd";
import { fetchEmployee } from '../../utils/index';
import moment from "moment";
import ContextMenu from '../ContextMenu/ContextMenu';
import GeneralModal from '../GeneralModal/GeneralModal';
import { GlobalContext } from '../../context/GlobalStates';
import SearchField from '../SearchField/SearchField';
import EmployeeAdd from '../EmployeeAdd/EmployeeAdd';
import PhoneInput from 'react-phone-input-2';





const columns = [
    {
        key: "ID",
        title: "ID",
        dataIndex: "id",
        responsive: ['lg']
    },
    {
        key: "employeeName",
        title: "FullName",
        dataIndex: "employeeName"
    },
    {
        key: "employeeBirthDate",
        title: "Birth Date",
        dataIndex: "employeeBirthDate",
        render(EmployeeBirthDate) {
            return EmployeeBirthDate && moment(EmployeeBirthDate).format("DD.MM.YYYY");
        },
        responsive: ['md']
    },
    {
        key: "genderID",
        title: "Gender",
        dataIndex: "genderName",
    },
    {
        key: "phone",
        title: "Phone",
        dataIndex: "phone",
       
      
            
    },
    {
        key: "address",
        title: "Address",
        dataIndex: "address",
    }


];



const EmployeeTable = () => {
    const [employee, setEmployee] = useState([]);
    const [record, setRecord] = useState({
        record: null,
        visible: false,
        x: 0,
        y: 0
    });
    const { response, searchField } = useContext(GlobalContext);
    const handleRightClick = record => ({
        onContextMenu: event => {
            event.preventDefault()
            if (!record.visible) {
                document.addEventListener(`click`, function onClickOutside() {
                    setRecord({ ...record, visible: false })
                    document.removeEventListener(`click`, onClickOutside)
                })
            }
            setRecord({
                record,
                visible: true,
                x: event.clientX,
                y: event.clientY
            })
        }
    })

    useEffect(() => {
        fetchEmployee(searchField)
            .then(response => {
                setEmployee(response);
            })
            .catch(error => {
                console.log(error);
            })
    }, [response, searchField])
    return (
        <>
                <SearchField />
                
                <Table
                    columns={columns}
                    dataSource={employee}
                    pagination={false}
                    onRow={handleRightClick}
                    
                />
                <ContextMenu {...record} />
                <GeneralModal>
                    <EmployeeAdd />
                </GeneralModal>
        </>
    )
}


export default EmployeeTable

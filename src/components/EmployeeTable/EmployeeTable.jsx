import React, { useState, useEffect, useContext } from 'react';
import { Table } from "antd";
import { fetchEmployee } from '../../utils/index';
import moment from "moment";
import ContextMenu from '../ContextMenu/ContextMenu';
import GeneralModal from '../GeneralModal/GeneralModal';
import { GlobalContext } from '../../context/GlobalStates';
import SearchField from '../SearchField/SearchField';
import EmployeeAdd from '../EmployeeAdd/EmployeeAdd';





const columns = [
    {
        key: "id",
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
        key: "age",
        title: "Age",
        dataIndex: "age",
        render(Age) {
            return Age;
        },
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
    const { response,setId, searchField } = useContext(GlobalContext);
    const handleRightClick = record => ({
        onContextMenu: event => {
            event.preventDefault()
            if (!record.visible) {
                document.addEventListener(`click`, function onClickOutside() {
                    setRecord({ ...record, visible: false })
                    document.removeEventListener(`click`, onClickOutside)
                })
            }
            setId(record.id)
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
                  loading={employee.length > 0 ? false : true}
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

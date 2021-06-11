import React, { useContext } from 'react';
import './ContextMenu.css';
import { Plus, Edit, Delete } from "react-feather";
import { GlobalContext } from '../../context/GlobalStates';
import { deleteEmployee } from '../../utils/index';
import { Modal, } from 'antd';

const ContextMenu = ({ record, visible, x, y }) => {

    const { setRecord, setIsModalOpen, ID,  isModalVisible, setIsModalVisible, setEmployee, setResponse } = useContext(GlobalContext);

    const handleAddClick = () => {
        setEmployee(null);
        setIsModalOpen(true);
    }

    const handleEditClick = () => {
        setRecord(record);
        setEmployee({
            EmployeeName: record.employeeName,
            EmployeeBirthDateob: record.employeeBirthDate,
            Age:record.age,
            GenderID: record.genderName ===  'მდედრობითი' ? 2 : 1,
            Phone: record.phone,
            Address: record.address
        });
        setIsModalOpen(true);
    }
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        deleteEmployee(ID)
            .then(response => {
                setResponse(response);
            })
            .catch(error => {
                console.log(error);
            })
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return <>
    {visible &&
    <>
        <ul className="popup" style={{ left: `${x}px`, top: `${y}px` }}>
            <li onClick={handleAddClick}><Plus className="crud-buttons" color="#219e57" /><span className="crud-button-item">დამატება</span></li>
            <li onClick={handleEditClick}><Edit className="crud-buttons" color="#e7b057" /><span className="crud-button-item">რედაქტირება</span></li>
            <li onClick={showModal}><Delete className="crud-buttons" color="#800000" /><span className="crud-button-item">წაშლა</span></li>
        </ul>
         </>
        }
        { isModalVisible && <Modal title="წაშლა" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>გსურთ წაშალოთ დამსაქმებელი?</p>
        </Modal>}
    </>
}



export default ContextMenu


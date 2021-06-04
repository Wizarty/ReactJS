import React, { useContext } from 'react';
import { Modal } from 'antd';
import { GlobalContext } from '../../context/GlobalStates';

const GeneralModal = props => {
    const { isModalOpen, setIsModalOpen } = useContext(GlobalContext);

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    return (
        <Modal
            header={false}
            visible={isModalOpen}
            onCancel={handleCancel}
            footer={false}
        >
            {props.children}
        </Modal>
    );
}

export default GeneralModal
import React, { useContext } from 'react';
import {  Form, Input } from 'antd';
import { GlobalContext } from '../../context/GlobalStates';

const SearchField = () => {
    const { setSearchField } = useContext(GlobalContext);
    
    return (
        <div>
            <Form.Item
                name="fullname"
            >
                <Input
                    placeholder="სახელი და გვარი"
                    onChange={e => setSearchField({EmployeeName: e.target.value})}
                />
            </Form.Item>
        </div>
    )
}

export default SearchField

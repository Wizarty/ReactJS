import React, { useContext, useEffect, useRef } from 'react';
import { Form, Input, DatePicker, Select, Button } from 'antd'
import { addEmployee } from '../../utils/index';
import { GlobalContext } from '../../context/GlobalStates';
import moment from 'moment';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const datePicker = {
    width: '100%',
}

const EmployeeAdd = () => {

    const { employee, record, setResponse, setIsModalOpen } = useContext(GlobalContext);
    const ref = useRef(null);
    const onFinish = (values) => {
        
        const data = record && record.id > 0 ? { ...values, id: record.id } : { ...values }
        addEmployee(data)
            .then(response => {
                setResponse(response);
                setIsModalOpen(false);
            })
            .catch(error => {
                console.log("2", error)
            })
        
      
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    useEffect(() => {

        if (ref.current) {
            if (employee === null) {
                ref.current.setFieldsValue({
                    EmployeeName: null,
                    EmployeeBirthDate: null,
                    GenderID: null,
                    Phone: null,
                    Address: null
                })
            } else {
                ref.current.setFieldsValue({ ...employee, EmployeeBirthDate: moment(employee.EmployeeBirthDate) });
            }
        }
    }, [employee])

    return (
        <Form
            ref={ref}
            name="basic"
            style={{ padding: '20px' }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <div>
                <Form.Item
                    name="EmployeeName"
                >
                    <Input
                        placeholder="სახელი და გვარი"
                    />
                </Form.Item>

                <Form.Item
                    name="EmployeeBirthDate"
                >
                    <DatePicker
                        style={datePicker}
                        placeholder="დაბადების თარიღი"

                    />
                </Form.Item>

                <Form.Item
                    name="GenderID"
                >
                    <Select
                        placeholder="სქესი"
                        allowClear
                    >
                        <Select.Option value={1}>მამრობითი</Select.Option>
                        <Select.Option value={2}>მდედრობითი</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="Phone"
                    style={{ width: '100%' }}
                >
                  <PhoneInput
                  onlyCountries={['ge','ru','us']}
                  masks={{geo: '...-...-...'}}
                  
            
                
                />
                </Form.Item>

                <Form.Item
                    name="Address"
                >
                    <Input
                        placeholder="მისამართი"
                    />
                </Form.Item>

                <Form.Item >
                    <Button  type="primary" htmlType="submit">
                        შენახვა
                    </Button>
                    <Button onClick={() => { setIsModalOpen(false) }}>
                        გასვლა
                    </Button>
                </Form.Item>
            </div>
        </Form>
    )
}

export default EmployeeAdd

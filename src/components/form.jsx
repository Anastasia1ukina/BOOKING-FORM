import { Button, Form, Select, Space, ConfigProvider, DatePicker, TimePicker, Input } from 'antd';
import React from "react";
import { formData } from "../data";
import "./form.css";

const { Option } = Select;
const { floors, meetingRooms } = formData;
const dateFormatList = 'DD.MM.YYYY';
const timeFormatList = 'HH:mm';
const { TextArea } = Input;

const App = () => {
    const formRef = React.useRef(null);
    const onFinish = ({ tower, floor, meetingRoom, date, time, comment = "" }) => {
        console.log(JSON.stringify({
            tower,
            floor,
            meetingRoom,
            date,
            timeStart: time[0].format('HH:mm:ss'),
            timeEnd: time[1].format('HH:mm:ss'),
            comment,
        }));
    };
    const onReset = () => {
        formRef.current?.resetFields();
    };

    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#9f2ef4', }, }}>
            <Form className="form" ref={formRef} name="control-ref" onFinish={onFinish} >

                <Form.Item
                    className='item'
                    name="tower"
                    label="Башня"
                    labelCol={{ span: 24 }}
                    rules={[{ required: true, message: "Пожалуйста, заполните поле" },]}>
                    <Select placeholder="Выберите башню" allowClear>
                        <Option value="A">A</Option>
                        <Option value="B">B</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    className='item'
                    name="stage"
                    label="Этаж"
                    labelCol={{ span: 24 }}
                    rules={[{ required: true, message: "Пожалуйста, заполните поле" },]}>
                    <Select options={floors} placeholder="Выберите этаж" allowClear />
                </Form.Item>

                <Form.Item
                    className='item'
                    name="meetingRoom"
                    label="Номер переговорной комнаты"
                    labelCol={{ span: 24 }}
                    rules={[{ required: true, message: "Пожалуйста, заполните поле" },]}>
                    <Select options={meetingRooms} placeholder="Выберите номер переговорной" allowClear />
                </Form.Item>

                <Form.Item
                    className='item'
                    name="date" label="Дата"
                    labelCol={{ span: 24 }}
                    rules={[{ required: true, message: "Пожалуйста, заполните поле" },]}>
                    <DatePicker className='date' placeholder="Выберите дату" allowClear format={dateFormatList} />
                </Form.Item>

                <Form.Item
                    className='item'
                    name="time"
                    label="Время"
                    labelCol={{ span: 24 }}
                    rules={[{ required: true, message: "Пожалуйста, заполните поле" },]}>
                    <TimePicker.RangePicker className='time' placeholder={['Начало', 'Конец']} allowClear format={timeFormatList} />
                </Form.Item>


                <Form.Item
                    className='item'
                    name="comment"
                    label="Комментарий"
                    labelCol={{ span: 24 }}>
                    <TextArea
                        placeholder="Введите комментарий"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                </Form.Item>

                <Space className='wrapper-button' direction="horizontal">
                    <Button className='button' type="primary" htmlType="submit">Отправить</Button>
                    <Button className='button-2' htmlType="button" onClick={onReset}>Очистить</Button>
                </Space>
            </Form>
        </ConfigProvider>
    );
};

export default App;
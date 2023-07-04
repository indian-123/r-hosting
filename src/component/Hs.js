import React, { useState } from 'react';
import { Modal } from 'antd';
import './AboutPage.css'
import {  Row, Col, Image } from 'antd';



const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='body'>
      <button onClick={showModal}>Open Modal</button>
      <Modal
  title="Modal Title"
  visible={isModalVisible}
  onCancel={handleCancel}
  onOk={handleOk}

>
  <Row gutter={[16, 16]}>
    <Col span={12}>
      <Image src="https://imgs.search.brave.com/I-NUBXcCFqlSZr9UpwWMccGqK5FRcCpFV204yE5rpTY/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/OFpJZjNNTmJQbVFQ/U3liOS12eURBSGFF/OCZwaWQ9QXBp" />
    </Col>
    <Col span={12}>
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
      <p>Phone: 123-456-7890</p>
    </Col>
  </Row>
</Modal>

    </div>
  );
};

export default App;

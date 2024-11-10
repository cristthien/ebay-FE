import React, { useState } from 'react';
import { Modal, Button, Radio, Input } from 'antd';

const CancelOrderModal = ({ visible, onClose, onConfirm }) => {
    const [reason, setReason] = useState('');
    const [selectedReason, setSelectedReason] = useState('');

    const handleConfirm = () => {
        onConfirm(selectedReason, reason); // Gọi hàm xác nhận với lý do đã chọn và lý do nhập thêm
        onClose(); // Đóng modal
    };

    return (
        <Modal
            visible={visible}
            onCancel={onClose}
            footer={null}
            centered
            title="Cancel Order"
        >
            <p>Please select a reason for cancellation:</p>
            <Radio.Group onChange={(e) => setSelectedReason(e.target.value)} value={selectedReason}>
                <Radio value="Changed my mind">Changed my mind</Radio>
                <Radio value="Found a better price">Found a better price</Radio>
                <Radio value="Item not needed anymore">Item not needed anymore</Radio>
                <Radio value="Other">Other</Radio>
            </Radio.Group>
            {selectedReason === 'Other' && (
                <Input
                    placeholder="Please specify"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    style={{ marginTop: '10px' }}
                />
            )}
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
                <Button onClick={onClose} style={{ marginRight: '10px' }}>
                    Cancel
                </Button>
                <Button type="primary" onClick={handleConfirm}>
                    Confirm Cancellation
                </Button>
            </div>
        </Modal>
    );
};

export default CancelOrderModal;

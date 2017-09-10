import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class DepartmentModal extends Component {

    render() {
        return (
            <Modal onHide={this.props.onHide} show={this.props.show}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.department.properties.Name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe title="department-video" width="560" height="315" src={this.props.data.video} frameborder="0" allowFullScreen></iframe>
                    <p>{this.props.data.description}</p>
                </Modal.Body>
            </Modal>
        );
    }
}

export default DepartmentModal;
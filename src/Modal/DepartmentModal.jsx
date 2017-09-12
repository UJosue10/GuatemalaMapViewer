import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { AutoSizer } from 'react-virtualized';

class DepartmentModal extends Component {

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <Modal onHide={this.props.onHide} show={this.props.show}>
                <Modal.Body>
                    <div className="title-modal">{this.props.department.properties.Name}</div>
                    <AutoSizer disableHeight>
                        {
                            ({width}) => (
                                <iframe title="department-video" width={width} height={(width*9)/16} src={this.props.data.video} frameborder="0" allowFullScreen></iframe>
                            )
                        }
                    </AutoSizer>
                    <p className="description-modal">{this.props.data.description}</p>
                </Modal.Body>
            </Modal>
        );
    }
}

export default DepartmentModal;
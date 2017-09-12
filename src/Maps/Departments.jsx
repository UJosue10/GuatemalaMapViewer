import React, { Component } from 'react';
import { geoPath } from "d3-geo";
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const colors = {
    '001': 'rgba(75,119,190, 0.4)',
    '002': 'rgba(75,119,190, 0.4)',
    '003': 'rgba(75,119,190, 0.4)',
    '004': 'rgba(75,119,190, 0.4)',
    '005': 'rgba(75,119,190, 0.4)',
    '006': 'rgba(75,119,190, 0.4)',
    '007': 'rgba(75,119,190, 0.4)',
    '008': 'rgba(75,119,190, 0.4)',
    '009': 'rgba(75,119,190, 0.4)',
    '010': 'rgba(75,119,190, 0.4)',
    '011': 'rgba(75,119,190, 0.4)',
    '012': 'rgba(75,119,190, 0.4)',
    '013': 'rgba(75,119,190, 0.4)',
    '014': 'rgba(75,119,190, 0.4)',
    '015': 'rgba(75,119,190, 0.4)',
    '016': 'rgba(75,119,190, 0.4)',
    '017': 'rgba(75,119,190, 0.4)',
    '018': 'rgba(75,119,190, 0.4)',
    '019': 'rgba(75,119,190, 0.4)',
    '020': 'rgba(75,119,190, 0.4)',
    '021': 'rgba(75,119,190, 0.4)',
    '022': 'rgba(75,119,190, 0.4)',
}

class Department extends Component {

    handleDepartmentClick = () => {
        this.props.onClick(this.props.department)
    }

    render() {

        const tooltip = (
            <Tooltip id="tooltip">{this.props.department.properties.Name}</Tooltip>
        );

        return (
            <OverlayTrigger placement="left" overlay={tooltip}>
                <path
                    key={`dp-${this.props.department.id}`}
                    d={geoPath().projection(this.props.projection())(this.props.department)}
                    className="department"
                    fill={colors[this.props.department.id] || 'rgba(75,119,190, 0.4)'}
                    stroke="#111111"
                    strokeWidth={0.5}
                    onClick={this.handleDepartmentClick}
                />
            </OverlayTrigger>
        );
    }
}

export default Department;
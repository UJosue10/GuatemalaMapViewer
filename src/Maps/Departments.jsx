import React, { Component } from 'react';
import { geoPath } from "d3-geo";

const colors = {
    '001': '#FFA726',
    '002': '#9CCC65',
    '003': '#26A69A',
    '004': '#5C6BC0',
    '005': '#673AB7',
    '006': '#E64A19',
    '007': '#76FF03',
    '008': '#9E9E9E',
    '009': '#B0BEC5',
    '010': '#80D8FF',
    '011': '#536DFE',
    '012': '#651FFF',
    '013': '#82B1FF',
    '014': '#448AFF',
    '015': '#00B0FF',
    '016': '#FFAB00',
    '017': '#9C27B0',
    '018': '#E91E63',
    '019': '#f44336',
    '020': '#f44336',
    '021': '#c62828',
    '022': '#4E342E',
}

class Department extends Component {

    handleDepartmentClick = () => {
        alert(`You've clicked ${this.props.department.properties.Name}`);
    }

    render() {
        return (
            <path
                key={`dp-${this.props.department.id}`}
                d={geoPath().projection(this.props.projection())(this.props.department)}
                className="department"
                fill={colors[this.props.department.id] || '#8BC34A'}
                stroke="#FFFFFF"
                strokeWidth={0.5}
                onClick={this.handleDepartmentClick}
            />
        );
    }
}

export default Department;
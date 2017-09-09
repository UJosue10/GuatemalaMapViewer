import React, { Component } from 'react';
import { geoMercator } from "d3-geo";
import { feature } from "topojson-client";
import Deparment from './Departments';

class GuateMap extends Component {

    constructor() {
        super()
        this.state = {
            guatemalanData: [],
        }
    }

    projection() {
        return geoMercator().center([-90.1791813, 15.7113831]).scale(5000, 5000);
    }

    handleCountryClick(countryIndex) {
        alert(`Clicked on a department: ${this.state.guatemalanData[countryIndex].properties.Name}`);
    }

    componentDidMount() {
        fetch("/guatemala.json")
            .then(response => {
                if (response.status !== 200) {
                    console.log(`There was a problem: ${response.status}`)
                    return
                }
                response.json().then(guatemalanData => {
                    this.setState({
                        guatemalanData: feature(guatemalanData, guatemalanData.objects.countries).features,
                    })
                })
            })
    }

    renderDepartments = () => {
        return this.state.guatemalanData.map((department) => (
            <Deparment department={department} projection={this.projection} />
        ))
    }

    render() {
        return (
            <svg width={960} height={500} viewBox="0 0 960 500">
                <g className="departments">
                   {this.renderDepartments()}
                </g>
            </svg>
        );
    }
}

export default GuateMap;
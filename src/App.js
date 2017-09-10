import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import GuateMap from './Maps/GuateMap';
import DepartmentModal from './Modal/DepartmentModal';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      selectedDepartment: '',
      data: {},
      selectedData: {}
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/UJosue10/GuatemalaMapViewer/develop/public/data.json')
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        if (response.status !== 200 && response.status !== 304) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        response.json().then(data => {
          this.setState({
            data
          })
        })
      })
  }


  onClickDepartment = (selectedDepartment) => {
    const selectedData = this.state.data[selectedDepartment.properties.Name] || this.state.data.Guatemala;
    this.setState({ selectedDepartment, selectedData, showModal: true });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Publi A</h2>
        </div>
        <GuateMap onClickDepartment={this.onClickDepartment} />
        <div>
          {
            this.state.showModal && (
              <DepartmentModal show={this.state.showModal} onHide={this.hideModal} department={this.state.selectedDepartment} data={this.state.selectedData} />
            )
          }
        </div>
      </div>
    );
  }
}

export default App;

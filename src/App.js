import React, { Component } from 'react';
import {Table, Column} from 'react-virtualized';
import CSVReader from 'react-csv-reader';
import './App.css';
import 'react-virtualized/styles.css'

let globalData=['gag'];

class App extends Component {
  state = {
    data: globalData
  }

  displayData = (data) => {
    globalData = data;
    console.log('The new globalData', globalData);
    this.setState({
      data: globalData
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CSVReader 
            label="select the csv file you want to display"
            onFileLoaded={this.displayData}
          />
        </header>

        <div>
          <Table
            width={500}
            height={300}
            rowHeight={30}
            rowCount={globalData.length}
            rowGetter={({index}) => globalData[index]}
          >
            <Column 
              width={100}
              dataKey="0"
            />
            <Column 
              width={100}
              dataKey="1"
            />
            <Column 
              width={100}
              dataKey="2"
            />
            <Column 
              width={100}
              dataKey="3"
            />
            
          </Table>
        </div>
      </div>
    );
  }
}

export default App;

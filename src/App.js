import React from 'react';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import styles from './App.module.css';
import {fetchData} from './api';
class App extends React.Component{
    
    state={
        data:{},
        country:'',
    }

    async componentDidMount(){
        const fetchedData=await fetchData();
        //console.log(data);
        this.setState({data:fetchedData});
    }

    handleCountryChange=async(country)=>{
     //console.log(country);
     const fetchedData=await fetchData(country);
     //console.log(fetchedData);
     this.setState({data:fetchedData, country:country});
    }

    render(){
        const{data,country}=this.state;
        return(
            <div className={styles.container}>
                <h1>Covid-19 React Tracker</h1>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                
            </div>
        )
    }
}

export default App;
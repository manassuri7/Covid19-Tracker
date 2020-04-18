import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart=({data,country})=>{
    
      const [dailyData,setDailyData]=useState([]);
     
      useEffect(()=>{
         const fetchAPI=async()=>{
              setDailyData(await fetchDailyData()); //setting daily data directly
         }
         fetchAPI();
      },[]);

      const lineChart=(
        dailyData.length
        ?(
         <Line
             data={{
                 labels:dailyData.map(({date})=>date),//destructuring date from dailyDate
                 datasets:
                         [{
                             data:dailyData.map(({confirmed})=>confirmed),//destructuring confirmed from dailydata
                             label:'Infected',
                             borderColor:'#3333ff',
                             fill:true,
                            },
                         {
                            data:dailyData.map(({deaths})=>deaths),//destructuring recovered from dailydata
                             label:'Deaths',
                             borderColor:'red',
                             backgroundColor:'rgba(255,0,0,0.5)',
                             fill:true,
                         }],
                    // 2 datasets only as daily confirmed and daily deaths is der in api not daily recovered

             }}
         />)
         :null
      );

      const barChart=(
          data.confirmed?(
            <Bar
               data={{
                 labels:['Infected','Recovered','Deaths'],
                 datasets:[{
                     label:'People',
                     backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,255,0.5)'],
                     data:[data.confirmed.value,data.recovered.value,data.deaths.value]
                 }]
               }}
               options={{
                   legend:{display:false},
                   title:{display:true,text:`Current State in ${country}`},
                
               }}
             
            />
          ):null
      )

      return (
          <div className={styles.container}>
            {country?barChart:lineChart}
          </div>
    );
}
export default Chart;
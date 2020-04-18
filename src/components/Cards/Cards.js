import React from 'react';
import {Card, CardContent, Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup'; //library for counter
import styles from './Cards.module.css';
import cx from 'classnames'; //for adding multiple classnames, when using modules, that can b done using this
const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
       return 'Loading.......';
    }
    return(
    <div className={styles.container}>
        <Grid container spacing={3} justify='center'>
           <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
               <CardContent>
                   <Typography color="textSecondary" gutterBottom>Infected</Typography>  
                   <Typography variant="h5">
                       <CountUp start={0} end={confirmed.value} duration={2.5} seperator="," />
                    </Typography>  
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography> 
                   <Typography variant="body2" >No. of Active Cases of Covid-19</Typography>   
                </CardContent> 
           </Grid>
           <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
               <CardContent>
                   <Typography color="textSecondary" gutterBottom>Recovered</Typography>  
                   <Typography variant="h5">
                       <CountUp start={0} end={recovered.value} duration={2.5} seperator="," />
                    </Typography> 
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>  
                   <Typography variant="body2" >No. of Recoveries from Covid-19</Typography>   
                </CardContent> 
           </Grid>
           <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
               <CardContent>
                   <Typography color="textSecondary" gutterBottom>Deaths</Typography>  
                   <Typography variant="h5">
                       <CountUp start={0} end={deaths.value} duration={2.5} seperator="," />
                    </Typography>   
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography> 
                   <Typography variant="body2" >No. of Deaths caused by Covid-19</Typography>   
                </CardContent> 
           </Grid>
        </Grid>

    </div>
    )
}
export default Cards
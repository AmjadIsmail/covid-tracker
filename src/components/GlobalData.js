import React , { useEffect,useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
//npm install react-number-format --save
//https://www.npmjs.com/package/react-number-format
const useStylesTypography = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
  },
}));

export default function GlobalData() {
  const classes = useStyles();
  const classesTypoGraphy = useStylesTypography();
  const [globalData, setGlobalData] = useState();
  const [isloading,setIsloading] = useState(false);
  const Loading = "Loading...";
  useEffect( () => {
    async function fetchGlobalData(){
      setIsloading(true);
      const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats')     
      const DataFromApi = await apiResponse.json();
      console.log(DataFromApi);
      setGlobalData(DataFromApi);
      setIsloading(false);
    }
    fetchGlobalData();
  },[])

  if( isloading == true ){
  
    return (
    

      <div className={classes.root}>
            
        <Paper elevation={3} >
        <div  className={classesTypoGraphy.root}> 
            Global Data
            <Typography variant="h4" gutterBottom style={{color: 'green'}}>
            {Loading}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
        Count Global Data as of today
        </Typography>
        </div>
        </Paper>
       
        <Paper elevation={3} >
  
            
            <div  className={classesTypoGraphy.root}> 
            Active
            <Typography variant="h4" gutterBottom style={{color: 'green'}}>
            {Loading}
        </Typography>
        <Typography variant="subtitle2" gutterBottom style={{color: 'black',fontWeight : 'bold'}}>
         Global Data as of today
        </Typography>
        </div>
        </Paper>
        <Paper elevation={3} > 
         <div  className={classesTypoGraphy.root}> 
            Recovered
            <Typography variant="h4" gutterBottom style={{color: 'orange'}}>
            {Loading}
        </Typography>
        <Typography variant="subtitle2" gutterBottom >
        Recovered Global Data as of today
        </Typography>
        </div>
        </Paper>
        <Paper elevation={3} >
            <div  className={classesTypoGraphy.root}> 
            Fatalaties
            <Typography variant="h4" gutterBottom style={{color: 'red'}}>
            {Loading}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
        Fatalaties Global Data as of today
        </Typography>
        </div>
        </Paper>
      
      </div>
    );
  }
  else{

    return (
    

      <div className={classes.root}>
            
        <Paper elevation={3} >
        <div  className={classesTypoGraphy.root}> 
            Global Data Design and Developed By Amjad Ismail
            <Typography variant="h4" gutterBottom style={{color: 'green'}}>
            
            <NumberFormat value={globalData && globalData.results && globalData.results[0].total_cases} displayType={'text'} thousandSeparator={true} prefix={''} />
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
        Count Global Data as of today
        </Typography>
        </div>
        </Paper>
       
        <Paper elevation={3} >
  
            
            <div  className={classesTypoGraphy.root}> 
            Active
            <Typography variant="h4" gutterBottom style={{color: 'green'}}>  
            <NumberFormat value={globalData && globalData.results && globalData.results[0].total_active_cases} displayType={'text'} thousandSeparator={true} prefix={''} />
        </Typography>
        <Typography variant="subtitle2" gutterBottom style={{color: 'black',fontWeight : 'bold'}}>
         Global Data as of today
        </Typography>
        </div>
        </Paper>
        <Paper elevation={3} > 
         <div  className={classesTypoGraphy.root}> 
            Recovered
            <Typography variant="h4" gutterBottom style={{color: 'orange'}}>
            
            <NumberFormat value={globalData && globalData.results && globalData.results[0].total_recovered} displayType={'text'} thousandSeparator={true} prefix={''} />
        </Typography>
        <Typography variant="subtitle2" gutterBottom >
        Recovered Global Data as of today
        </Typography>
        </div>
        </Paper>
        <Paper elevation={3} >
            <div  className={classesTypoGraphy.root}> 
            Fatalaties
            <Typography variant="h4" gutterBottom style={{color: 'red'}}>
            
            <NumberFormat value={globalData && globalData.results && globalData.results[0].total_serious_cases} displayType={'text'} thousandSeparator={true} prefix={''} />
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
        Fatalaties Global Data as of today
        </Typography>
        </div>
        </Paper>
      
      </div>
    );

  }

}
  
//}
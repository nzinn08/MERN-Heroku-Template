import React from 'react';
import logo from '../../assets/logo.svg';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ColorPick from '../../components/color-pick';
import './Home.css';


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 500,
      },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    select: {
        minWidth: 130,
        "&:focus": {
            backgroundColor: "white"
        }
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function Home() {
    const classes = useStyles();
    const [age, setAge] = React.useState(10);

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
        <div>
        <AppBar color="primary" position="static" justifyContent="center" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <h1>Noah's LED Strip Thingy Majiggy That Does Stuff BUT WIRELESSLY</h1>
        </AppBar>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"80vh"}}>
            <Card className={classes.root}>
                <Typography align="center" variant="h6">
                Select LED Strip Effect
                </Typography>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%"}}>
                    <FormControl className={classes.formControl} style={{display:"inline-block", width:"90%"}}>
                        <InputLabel id="demo-simple-select-label">LED Strip Effect</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                        inputProps={{
                            classes: { select: classes.select }
                        }}
                        style={{width:"100%"}}
                        >
                        <MenuItem value={10}>Off</MenuItem>
                        <MenuItem value={20}>Single Color</MenuItem>
                        <MenuItem value={30}>Rave</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <ColorPick number={2}/>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", padding:"1vh"}}>
                <Button variant="contained" display="block" color="primary" style={{height:"70%", width:"50%"}}>
                Activate
                </Button>
                </div>
            </Card>
        </div>
        </div>
    );
}

export default Home;

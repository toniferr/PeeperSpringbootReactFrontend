import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  },
}));

export default function BasicTextFields() {
  const paperStyle={padding:"50px 20px", width:600, margin:"20px auto"};
  const classes = useStyles();
  const[name, setName] = useState('Por defecto')
  const[address, setAddress] = useState('')

  return (
      <Container>
          <Paper elevation={3}  style={paperStyle}>
           <h1 style={{color:"blue"}}><u>Add student</u></h1>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="filled-basic" label="Student Name" variant="outlined" fullWidth
                    value={name}
                    onChange={(e)=> setName(e.target.value)}/>
                {name}
                <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
                    value={address}
                    onChange={(e)=> setAddress(e.target.value)}/>
                {address}
            </form>
        </Paper>
    </Container>
  );
}

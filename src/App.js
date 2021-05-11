import logo from "./logo.svg";
import React, { useState } from 'react'
import "./App.css";
import Buttons from "./components/Buttons";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Checks from './components/Checks'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { ButtonGroup } from "@material-ui/core";
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors'
import { green } from '@material-ui/core/colors'
import 'fontsource-roboto'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0, 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 18,
    }
  },

  palette: {
    primary: {
      main: orange[400],
    },

    secondary: {
      main: green[400]
    }
  }
})


function App() {
  const [checked, setChecked] = useState(true)
  const styles = useStyles();

  return (

    <Container className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <Typography variant="h1">
            Hello Hasibul!
          </Typography>
          <Typography variant="h2">
            I teach you Material UI now
          </Typography>
          <Typography variant="subtitle">
            It is actually kind of fun
          </Typography>
          <TextField variant="filled" />

          <TextField variant="outlined"
            color="secondary"
            type="time"
            label="The Time" />

          <FormControlLabel
            control={
              <Checks
                checked={checked}
                color="primary"
                icon={<DeleteIcon />}
                inputProps={{
                  'aria-label': 'secondary checkbox'
                }}
                onChange={(e) => setChecked(e.target.checked)} />}
            label="Testing Checkbox" />


          <ButtonGroup>
            <Button startIcon={<SaveIcon />} variant="contained" color="primary">
              Save
            </Button>
            <Button endIcon={<DeleteIcon />} variant="contained" color="secondary">
              Delete
            </Button>
          </ButtonGroup>

          {/* variant and color both can be used to customize buttons */}
          {/* <Button
          startIcon={<SaveIcon />}
          endIcon={<SaveIcon />}
          onClick={() => alert("hello!")}
          size="large"
          variant="contained"
          color="secondary"
        >
          Hello world
        </Button> */}

          <img src={logo} className="App-logo" alt="logo" />
          <Button className={styles.root}>Styles Button</Button>
        </header>

      </ThemeProvider>
    </Container>
  );
}

export default App;

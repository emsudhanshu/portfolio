import './App.css';
import { Grid, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import { theme } from "./themes";
import IntroCard from './components/IntroCard';
import ProjectGrid from './components/ProjectGrid';

function App() {
  return (
    <Grid container p={5}>
      {/* <ThemeProvider theme={theme}>
        <Grid container direction='row' justifyContent='center'>
          <Header />
          <IntroCard />
          <ProjectGrid />
        </Grid>
      </ThemeProvider> */}
    </Grid>
  );
}

export default App;

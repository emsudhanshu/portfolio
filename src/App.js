import './App.css';
import { Grid2, ThemeProvider } from'@mui/material';
import Header from './components/Header';
import { theme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid2 container>
        <Header/>
      </Grid2>
    </ThemeProvider>
  );
}

export default App;

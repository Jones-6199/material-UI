import logo from "./logo.svg";
import "./App.css";
import Material from "./Material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import {green, purple} from "@mui/material/colors";
import Slider from '@mui/material/Slider';
import IconLabelButtons from "./ButtonsWithIcons"
import InputAdornments from "./InputAdornments"
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';
import AccordionExpandIcon from "./AccordionExpandIcon"


function App() {
  const theme = createTheme({
    palette: {
    primary: {
      main: orange[500],
    },
  
  },
  });

  return (
    <ThemeProvider theme={theme}>
      <AccordionExpandIcon />

    </ThemeProvider>
  );
}

export default App;

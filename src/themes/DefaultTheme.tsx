import { createMuiTheme } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

const palette: PaletteOptions = {
    type: 'light',
    primary: {
      main: '#3E92CC',
    },
    secondary: {
      main: '#ff8600',
    },
    text: {
      primary: 'rgba(9,9,59,0.87)',
      secondary: 'rgba(44,75,148,0.75)',
    },
  }


const DefaultTheme = createMuiTheme({
  palette: palette,

  props: {

  },
  
  overrides: {

  }
});

export default DefaultTheme;
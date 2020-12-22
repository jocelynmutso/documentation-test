import { createMuiTheme } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

const palette: PaletteOptions = {
  type: 'dark'
}

const DefaultTheme = createMuiTheme({
  palette: palette,

  props: {

  },
  
  overrides: {

  }
});

export default DefaultTheme;
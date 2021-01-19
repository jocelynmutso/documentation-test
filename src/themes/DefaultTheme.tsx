import { createMuiTheme } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

const palette: PaletteOptions = {
  type: 'light',
  primary: {
    main: '#114B8E',
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
  
  },

  typography: {
    h1: {
      fontSize: "2.2rem",
      lineHeight: 1.5,
      padding: 10,
      marginLeft: '10px',
      marginRight: '10px',
      fontFamily: '"Mulish", sans-serif',
      fontWeight: 800,
      textAlign: 'center',
    
    },
    h2: {
      fontSize: "1.8rem",
      lineHeight: 1.5,
      fontFamily: '"Mulish", sans-serif',
      fontWeight: 900,
    },
    h3: {
      fontSize: "1.5rem",
      lineHeight: 1.5,
      fontFamily: '"Mulish", sans-serif',
      fontWeight: 900,
    },
    h4: {
      fontSize: "1.2rem",
      lineHeight: 1,
      fontFamily: '"Mulish", sans-serif',
      fontWeight: 700
    },
    h5: {
      fontSize: "1.2rem",
      fontFamily: '"Mulish", sans-serif',
      fontWeight: 700
    },
    h6: {
      fontFamily: '"Mulish", sans-serif',
      fontWeight: 700
    },
    body1: {
      fontFamily: '"Mulish", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: '"Mulish", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      paddingBottom: 20,
    }
    }
})


export default DefaultTheme;
import React from 'react';
import { Theme, createMuiTheme } from '@material-ui/core/styles';


interface ShellContextType {  //declare what is in the context
  config: ShellContextConfig;
}

interface ShellContextConfig {
  folder: string,
  theme: {
    primary: Theme,
    secondary: Theme
  }
} //config will have seed values from where everything starts, to be used when provider initialises (ex: themes)

interface ShellContextProviderProps {
  config: ShellContextConfig;
  children: React.ReactNode;
}

const theme = createMuiTheme({});

const ShellContext = React.createContext<ShellContextType>({  //fill out the context, give initial values to make it shut up
  config: {
    folder: '',
    theme: {
      primary: theme,
      secondary: theme,
    }
  }
});


const ShellContextProvider: React.FC<ShellContextProviderProps> = ({children, config}) => {
  
  const content = { config };   //overwrite initial values anyway
  return (
    //initialise provider
    <ShellContext.Provider value={content}>
      {children}
    </ShellContext.Provider>
    
  );
}

export {ShellContextProvider, ShellContext};
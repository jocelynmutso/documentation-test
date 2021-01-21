import React from 'react';

import Shell from './core/Shell';
import { Service } from './core';


interface AppProps {
  loader: (setService: (service: Service.Content) => void) => void; 
}

const App: React.FC<AppProps> = ({loader}) => {
  const [service, setService] = React.useState<Service.Content | undefined>();

  React.useEffect(() => {
    loader(setService);
  }, [loader, setService]);

  if(!service) {
    return <div>Loading documentation...</div>
  }

  return <Shell service={service} />
}
export default App;
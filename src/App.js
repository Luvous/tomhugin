import './App.css';
import { MantineProvider } from '@mantine/core';
import Webpages from './routes/Router';

function App() {
  return (
    <MantineProvider >
      <div className="App">
        <Webpages />
      </div>
    </MantineProvider>
  );
}

export default App;

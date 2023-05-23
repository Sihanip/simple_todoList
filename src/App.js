import { Box, Stack } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  
  return (
    <div>
      <Box>
        <Stack direction="column">
          <Header/>
          <Main/>
        </Stack>
      </Box>
    </div>
  );
}

export default App;

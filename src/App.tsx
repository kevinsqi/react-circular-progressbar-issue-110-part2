import * as React from 'react';
import './App.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const App: React.FC = () => {
  return (
    <div style={{ width: 100 }}>
      <CircularProgressbar value={40} />
    </div>
  );
}

export default App;

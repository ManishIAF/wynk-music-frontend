import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SongDataProvider } from './DataContext/SongDataContext';
import { Indicator } from './DataContext/IndicatorContext';
import { QueueDataContext } from './DataContext/QueueDataContext';
import { ErrorProvider } from './DataContext/ErrorProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SongDataProvider>
    <Indicator>
      <QueueDataContext>
        <ErrorProvider>
          <App />
        </ErrorProvider>
      </QueueDataContext>
    </Indicator>
  </SongDataProvider>
);

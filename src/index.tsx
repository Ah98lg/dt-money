import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import { App } from './App';


createServer({
  routes(){
    this.namespace = 'api'

    this.get('/transactions', ()=>{
      return[
        {
          id: 1,
          title: 'Fumo',
          type: 'Income',
          price: 12.000,
          category: 'Comida',
          date: new Date(),
        },
        {
          id: 2,
          title: 'Cigarro',
          type: 'Outcome',
          price: 12,
          category: 'Suprimento',
          date: new Date(),
        },
        {
          id: 3,
          title: 'Charuto',
          type: 'Outcome',
          price: 60,
          category: 'Suprimento',
          date: new Date(),
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

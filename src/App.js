import React from 'react';
import './App.css';  // Para adicionar estilização personalizada

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="display-4 text-white">Bem-vindo ao site da Contak</h1><br /><br />
          <div className="button-container">
            <a href="https://contak.net.br" className="btn btn-primary btn-lg">Contak Contabilidade</a>
            <a href="https://contakbot.net.br" className="btn btn-success btn-lg">Chatbot</a>
            <a href="https://contakfiscal.net.br" className="btn btn-danger btn-lg">Fiscal</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
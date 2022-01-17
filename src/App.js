// import logo from './logo.svg';
import React from 'react';
import 'Main/App.css';
import EditorPage from 'Main/EditorPage';
import AppTopbar from 'Main/AppTopbar.js';


function App() {
  return (
    <div>
      <AppTopbar/>
      <div style={{padding: 16, display:"flex", flexDirection:"column", alignItems:"center"}}>
        <EditorPage/>
      </div>
    </div>
  
  );
}

export default App;

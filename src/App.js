import logo from './logo.svg';
import './App.css';
import EditorPage from './EditorPage';
import AppTopbar from './AppTopbar.js';


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

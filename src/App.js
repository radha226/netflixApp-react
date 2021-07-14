// import logo from './logo.svg';
// import './App.css';
import  {Header,subheader} from './components/Header';
import {CardComponent } from './components/Card';


function App() {
  return (
    <div className="App"> 
      <Header />
      {subheader()}
      <CardComponent />
    </div>
  );
}

export default App;

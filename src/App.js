// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Navbar";
import Flow from "./Flow";
import "./View/home.css"

function App() {
  return (
    <div className="contain" style={{display: "flex", flexDirection: "row"}}>
      <Navbar />
      <Flow />
    </div>
  );
}

export default App;

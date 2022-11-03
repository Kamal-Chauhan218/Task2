import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className='container'>
      <h1 className='heading'>45 comments</h1>
      <Card active={true}></Card>
      <Card></Card>
    </div>
  );
}

export default App;

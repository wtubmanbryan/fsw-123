import './App.css';
import Card from './components/card'

function App() {
  return (
    <div className="App">
      <Card title="Title 1" subtitle="Sub Title 1" info="Hello world 1!" bgColor="red" width="250px"/>
      <Card title="Title 2" subtitle="Sub Title 2" info="Hello world 2!" bgColor="orange" width="250px"/>
      <Card title="Title 3" subtitle="Sub Title 3" info="Hello world 3!" bgColor="yellow" width="250px"/>
      <Card title="Title 4" subtitle="Sub Title 4" info="Hello world 4!" bgColor="green" width="250px"/>
    </div>
  );
}

export default App;

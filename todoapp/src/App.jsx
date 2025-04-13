import { useState } from 'react';
import './App.css';
import TodoApp from './components/TodoApp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <TodoApp/>
    </div>
  )
}

export default App

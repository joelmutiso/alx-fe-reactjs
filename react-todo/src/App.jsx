import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </Router>
  )
}

export default App;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import TodoList from './components/TodoList'
import Testing from './components/Testing'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </Router>
  )
}

export default App;



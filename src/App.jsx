import { useState } from 'react'
import {nanoid} from 'nanoid'
import ListItem from './components/ListItem'
function App() {

  const [todo, setTodo] = useState([
    {id: nanoid(5),content: "item 1"}, 
    {id: nanoid(5),content: "item 2"}, 
    {id: nanoid(5),content: "item 3"}, 
  ])

  const [newTodo, setNewTodo] = useState('')

  function deleteTodo(id) {
    setTodo(todo.filter(todo => todo.id !== id))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTodo([...todo, {id: nanoid(5), content: newTodo}])
    setNewTodo('')
  }

  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">TODO LIST</h1>

        <form 
        onSubmit={handleSubmit}
        className="mb-10">
          <label htmlFor="todo-item"
          className="text-slate-50">Nouvelle tâche</label>
          <input 
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text" 
          className="mt-1 block w-full rounded"/>
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">Ajouter</button>
        </form>
        <ul>
          {todo.length === 0 && (
            <li className='text-slate-50 text-md'> Aucunes tâches à afficher</li>
          )}
          {todo.length > 0 && 
          todo.map(item => (
            <ListItem 
            key={item.id} 
            itemData={item} 
            deleteTodo= {deleteTodo}/>
          ))}
           
        </ul>
      </div>
    </div>
  )
}

export default App

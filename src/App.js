import React, { useState, createContext } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

export const TodoContext = createContext()

function App() {
<TodoItem key={todo.id} todo={todo} />

  return (

    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} />
      </div>
    </TodoContext.Provider>
  )
}
export default App
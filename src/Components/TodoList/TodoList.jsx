import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
      editing: false,
      currentId: "",
      currentValue: ""
    };
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  onAddTask = (e) => {
    e.preventDefault();
    if (this.state.value.trim() === "") return;

    const newTodo = {
      name: this.state.value.trim(),
      id: Date.now(), // Better unique ID than Math.random()
      completed: false
    };

    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
      value: ""
    }));
  };

  onToggleEdit = (todo) => {
    this.setState({
      editing: true,
      currentId: todo.id,
      currentValue: todo.name
    });
  };

  onEditInputChange = (e) => {
    this.setState({ currentValue: e.target.value });
  };

  onSubmitEditTodo = (e) => {
    e.preventDefault();
    this.onEditTodo(this.state.currentId, this.state.currentValue);
    this.setState({ editing: false });
  };

  onEditTodo = (id, newValue) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, name: newValue.trim() } : todo
      )
    }));
  };

  onDeleteTask = (itemId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== itemId)
    }));
  };

  onToggleComplete = (itemId) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === itemId ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  };

  render() {
    const { todos, value, editing, currentValue } = this.state;

    return (
      <div className='flex justify-center items-center w-full h-[100vh] my-10'>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Todo App</h1>
          
          {editing ? (
            <form onSubmit={this.onSubmitEditTodo} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Edit your task"
                  value={currentValue}
                  onChange={this.onEditInputChange}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Update
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={this.onAddTask} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add a new task"
                  value={value}
                  onChange={this.onChange}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add
                </button>
              </div>
            </form>
          )}

          <ul className="space-y-2">
            {todos.map(todo => (
              <li
                key={todo.id}
                className={`flex items-center justify-between p-3 border rounded-lg ${
                  todo.completed ? "bg-gray-50 border-gray-200" : "bg-white border-gray-300"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => this.onToggleComplete(todo.id)}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span
                    className={`${
                      todo.completed ? "line-through text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {todo.name}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => this.onToggleEdit(todo)}
                    className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => this.onDeleteTask(todo.id)}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {todos.length === 0 && (
            <div className="text-center py-6 text-gray-500">
              No tasks yet. Add one above!
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
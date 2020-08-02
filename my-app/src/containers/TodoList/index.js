import React, { Component } from 'react'
import Header from './components/Header'

class TodoList extends Component {
  render() {
    return (
      <div>
        <Header addUndoItem={console.log(1)} />
      </div>
    )
  }
}

function App() {
  return (
    <div className="container" title="dell lee" data-test='container'>
      {/* 为了代码不耦合，就可以不用代码级的选择器， 用 data-test  */}
      hello world
    </div>
  )
}

export default TodoList;
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ onClick }) => {
  let input
  return (
    <div>
      <form>
        <input ref={node => (input = node)} />
        <button
          type="button"
          onClick={e => {
            e.preventDefault()
            onClick(input.value)
          }}
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: value => dispatch(addTodo(value))
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)

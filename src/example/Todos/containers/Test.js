import React from 'react'
import { TestConsole } from '../actions'
import { connect } from 'react-redux'
const Test = ({ TConsole }) => {
  let count = 1
  return (
    <div
      onClick={() => {
        TConsole(count++)
      }}
    >
      你好，点击打印吧
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    TConsole: msg => dispatch(TestConsole(msg))
  }
}

export default connect(null, mapDispatchToProps)(Test)

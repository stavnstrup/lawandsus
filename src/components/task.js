import React from 'react'
import taskStyles from './task.module.scss'

const Task = ({ children }) => {
  return <div className={taskStyles.taskBox}>{children}</div>
}

export default Task

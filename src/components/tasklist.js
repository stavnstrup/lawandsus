import React from "react"

import tasklistStyles from "./tasklist.module.scss"

const TaskList = ({ children }) => {
  return <div className={tasklistStyles.allTasks}>{children}</div>
}

export default TaskList

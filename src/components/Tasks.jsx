import React from 'react'

import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle, onComplete }) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
            onComplete={onComplete}
          />
        )
      })}
    </>
  )
}
Tasks.defaultProps = {
  tasks: [],
}
Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
}

export default Tasks

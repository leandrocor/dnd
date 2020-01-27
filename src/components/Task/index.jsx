import React from "react"
import styled from "styled-components"
import { Draggable } from "react-beautiful-dnd"

const ItemList = styled.li`
  border: 1px solid lightgray;
  padding: 8px;
  margin-bottom: 8px;
  list-style: none;
  background: #ffffff;
`

export const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <ItemList
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.content}
        </ItemList>
      )}
    </Draggable>
  )
}

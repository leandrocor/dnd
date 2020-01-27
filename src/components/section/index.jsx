import React from "react"
import styled from "styled-components"
import { Task } from "../Task"
import { Droppable } from "react-beautiful-dnd"

const Wrapper = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
`

const Title = styled.h3`
  padding: 8px;
  margin: 0;
`

const List = styled.ul`
  padding: 8px;
  margin: 0;
`

export const Section = ({ section, tasks }) => {
  return (
    <Wrapper>
      <Title>{section.title}</Title>
      <Droppable droppableId={section.id}>
        {provided => (
          <List {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </Wrapper>
  )
}

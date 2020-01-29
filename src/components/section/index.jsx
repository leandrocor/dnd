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
  height: 50px;
`

const List = styled.ul`
  transition: opacity 0.3s, visibility 0.3s, height 0.3s;
  height: auto;
  padding: 0;
  margin: 0;
  &.nope {
    opacity: 0;
    visibility: hidden;
    height: 0;
  }
`

const Container = styled.div`
  background: ${props => (props.isDraggingOver ? "skyblue" : "white")};
`

export const Section = ({ section, tasks }) => {
  return (
    <Wrapper>
      <Droppable droppableId={section.id}>
        {(provided, snapshot) => (
          <Container
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            <Title>{section.title}</Title>
            <List
              className="nope"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </List>
          </Container>
        )}
      </Droppable>
    </Wrapper>
  )
}

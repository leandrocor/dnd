import React, { useState } from "react"
import ReactDOM from "react-dom"
import initalData from "./inital-data"
import styled from "styled-components"
import { Section } from "./components/section"
import { DragDropContext } from "react-beautiful-dnd"

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1;
  gap: 20px;
`

const App = () => {
  const [state, setState] = useState(initalData)

  // TODO: reorder sections
  const onDragEnd = result => {
    /*
    Destination: Nueva posición (Ej: 1)
    Source: Posición inicial (Ej: 3)
    DraggableId: Nombre tarea (Ej: Task-3)
  */

    const { destination, source, draggableId } = result

    // Si no existe Destination (el usuario disparó el evento Drag pero no cambió la posición) no retorna nada.
    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = state.sections[source.droppableId]
    const finish = state.sections[destination.droppableId]

    // Moverse dentro de una misma seccións
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }

      const newState = {
        ...state,
        sections: {
          ...state.sections,
          [newColumn.id]: newColumn
        }
      }

      setState(newState)
      return
    }

    // Moverse de una sección a otra
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)

    const newStart = {
      ...start,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    const newState = {
      ...state,
      sections: {
        ...state.sections,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }

    setState(newState)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        {state.sectionOrder.map(sectionId => {
          const section = state.sections[sectionId]
          const tasks = section.taskIds.map(taskId => state.tasks[taskId])
          return <Section key={section.id} section={section} tasks={tasks} />
        })}
      </Wrapper>
    </DragDropContext>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

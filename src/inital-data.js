const initalData = {
  // El objeto task contiene las tareas de las cuatro secciones. Cuando el usuario haga click en "finalizadas", se hace el request y se inyectan las tareas en tasks. Al mismo tiempo se hace un push de la referencia de la tarea en sections.section-X.tasksIds
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage." },
    "task-2": { id: "task-2", content: "Watch my favourite show." },
    "task-3": { id: "task-3", content: "Charge my phone." },
    "task-4": { id: "task-4", content: "Cook dinner." }
  },
  sections: {
    "section-1": {
      id: "section-1",
      title: "Hoy",
      taskIds: ["task-1", "task-3", "task-4"]
    },
    "section-2": {
      id: "section-2",
      title: "En proceso",
      taskIds: ["task-2"]
    },
    "section-3": {
      id: "section-3",
      title: "Estancadas",
      taskIds: []
    },
    "section-4": {
      id: "section-4",
      title: "Finalizadas",
      taskIds: []
    }
  },
  // Facilita el reordenamiento de los sections
  sectionOrder: ["section-1", "section-2", "section-3", "section-4"]
}

export default initalData

import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./events/EventList"
import { EventEditForm } from "./events/EventEditForm"
import { EventForm } from "./events/EventForm"
import { TaskList } from "./tasks/TaskList"
import { TaskForm } from './tasks/TaskForm'
import { TaskEditForm } from './tasks/TaskEditForm'
// import { Login } from "../components/auth/Login"
// import { Register } from "../components/auth/Register"
import { FriendList } from "./friends/FriendList"
import { FriendForm } from "./friends/FriendForm"
import { MsgBox } from './messages/privateMessages/MsgBox'

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route exact path="/friends">
        <FriendList />
      </Route>
      <Route exact path="/messages">

      </Route>
      <Route exact path="/messages/private">
        <MsgBox />
      </Route>
      <Route exact path="/friends/create">
          <FriendForm />
      </Route>
      <Route exact path="/tasks">
        <TaskList />
      </Route>
      <Route exact path="/tasks/:taskId(\d+)/edit">
        <TaskEditForm />
      </Route>
      <Route exact path="/tasks/create">
        <TaskForm />
      </Route>

      <Route exact path="/events">
        <EventList />
      </Route>
      <Route path="/events/:eventId(\d+)/edit">
        <EventEditForm />
      </Route>
      <Route path="/events/create">
        <EventForm />
      </Route>
    </>
  )
}

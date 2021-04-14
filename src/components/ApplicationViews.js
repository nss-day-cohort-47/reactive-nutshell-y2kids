import React from "react"
import { Route } from "react-router-dom"
// import { Login } from "../components/auth/Login"
// import { Register } from "../components/auth/Register"
import { FriendList } from "./friends/FriendList"
import { FriendForm } from "./friends/FriendForm"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route exact path="/friends">
        <FriendList />
      </Route>

      <Route exact path="/friends/create">
          <FriendForm />
      </Route>

      <Route path="/messages">
        {/* Render the component for the messages */}
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
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}

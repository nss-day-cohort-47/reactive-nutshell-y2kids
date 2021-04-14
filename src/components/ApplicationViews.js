import React from "react"
import { Route } from "react-router-dom"
import { FriendList } from "./friends/FriendList"
import { FriendForm } from "./friends/FriendForm"
import { MessageList } from './messages/MessageList'

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
        <MessageList />
      </Route>
      {/* <Route exact path="/tasks">
        <TaskList />
      </Route>
      <Route exact path="/tasks/:taskId(\d+)/edit">
        <TaskEditForm />
      </Route>
      <Route exact path="/tasks/create">
        <TaskForm />
      </Route> */}
      <Route exact path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}

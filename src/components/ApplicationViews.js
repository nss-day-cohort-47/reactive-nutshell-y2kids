import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./events/EventList"
import { EventEditForm } from "./events/EventEditForm"
import { EventForm } from "./events/EventForm"
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
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
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

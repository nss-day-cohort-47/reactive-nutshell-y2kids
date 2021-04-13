import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./events/EventList"
import { EventEditForm } from "./events/EventEditForm"
import { EventForm } from "./events/EventForm"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
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

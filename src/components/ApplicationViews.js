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
        <ArticleList />
      </Route>
      <Route path="/create">
        {/* Render the form to add new article */}
      <ArticleAddForm />
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
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}

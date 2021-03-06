import React from "react"
import { Route } from "react-router-dom"
import { FriendList } from "./friends/FriendList"
import { FriendForm } from "./friends/FriendForm"
import { MessageList } from './messages/MessageList'
import { MessageEditForm } from "./messages/MessageEditForm"
import { ArticleList } from "./articles/ArticleList"
import {ArticleAddForm } from "./articles/ArticleAddForm"
import {ArticleEditForm} from "./articles/ArticleEditForm"
import { EventList } from "./events/EventList"
import { EventEditForm } from "./events/EventEditForm"
import { EventForm } from "./events/EventForm"
import { TaskList } from "./tasks/TaskList"
import { TaskForm } from './tasks/TaskForm'
import { TaskEditForm } from './tasks/TaskEditForm'
import { MsgBox } from './messages/privateMessages/MsgBox'

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        <ArticleList />
      </Route>

      <Route exact path="/friends">
        <FriendList />
      </Route>

      <Route exact path="/messages">

      </Route>

      <Route exact path="/messages/private">
        <MsgBox />
      </Route>

      <Route exact path="/create">
        <ArticleAddForm />
      </Route>

      <Route path="/:articleId(\d+)/edit">
        <ArticleEditForm />
      </Route>

      <Route exact path="/friends/create">
        <FriendForm />
      </Route>

      <Route exact path="/friends/create/:userId(\d+)">
        <FriendForm />
      </Route>      

      <Route exact path="/messages">
        <MessageList />
      </Route>

      <Route exact path="/messages/:messageId(\d+)/edit">
        <MessageEditForm />
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

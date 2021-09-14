import React from 'react';
import Card, {CardVariant} from "./components/Card";
import EventExample from "./components/EventExample";
import {BrowserRouter, Route} from "react-router-dom";
import UserPage from "./components/UserPage";
import ToDosPage from "./components/ToDosPage";
import {NavLink} from "react-router-dom";
import UserItemPage from "./components/UserItemPage";
import ToDoItemPage from "./components/ToDoItemPage";

function App() {

    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to = "/users">Users</NavLink>
                    <NavLink to = "/todos" style={{margin:10}}>ToDos</NavLink>
                    <NavLink to = "/some" style={{margin:10}}>SomeExp</NavLink>
                </div>
                <Route path = {'/some'} exact>
                    <EventExample/>
                    <Card onClick={() => console.log('click')} variant={CardVariant.outlined} width={'200px'} height={'200px'}>
                        <button>Push</button>
                    </Card>
                </Route>
                <Route path = {'/users'} exact>
                    <UserPage/>
                </Route>
                <Route path = {'/todos'} exact>
                    <ToDosPage/>
                </Route>
                <Route path = {'/users/:id'} >
                    <UserItemPage/>
                </Route>
                <Route path = {'/todos/:id'} >
                    <ToDoItemPage/>
                </Route>
            </div>

        </BrowserRouter>
    );
}

export default App;

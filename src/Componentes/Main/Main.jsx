import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import NavBar from '../NavBar/NavBar'
import "./Main.css"
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Main = ({}) => {
    return (
        <>
        <BrowserRouter>
            <NavBar/>

        <Switch>        
           
                   
          <Route exact path="/category/:id">
              <ItemListContainer />
          </Route>
          <Route exact path="/items/:id">
              <ItemDetailContainer
               />
          </Route>
          
          <Route exact path ="/">
              <ItemListContainer greetings ="Productos"/>
          </Route>
         </Switch>  

        </BrowserRouter>
        </>
    )
}

export default Main
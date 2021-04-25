import React,{useState}  from "react"
import Header from "./components/header/Header"
import List from "./components/list/List"
import Detail from "./components/detail/Detail"
import {Redirect, Route, Switch} from "react-router-dom"
import "./_app.scss"

function App() {
    
  const [modelId, setModelId] = useState(null);

  return (
   <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact > 
             <List setModelId={setModelId} />
          </Route>
          <Route path="/detail" exact > 
             <Detail setModelId={setModelId} />
          </Route>
          <Route>
            <Redirect to="/" />    
          </Route>
        </Switch>
      </div>
   </>
  );
}

export default App;

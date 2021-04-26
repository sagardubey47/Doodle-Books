import React,{useState}  from "react"
import Header from "./components/header/Header"
import List from "./components/list/List"
import Detail from "./components/detail/Detail"
import {Redirect, Route, Switch, useHistory} from "react-router-dom"
import "./_app.scss"


function App() {
    
  const [modelId, setModelId] = useState(null);

  let history = useHistory();
  const handleBack = () => {
    history.push("/");
  }
  
  return (
      <div>
        <Header />
        <Switch>
          <div className="container">
            <Route path="/" exact > 
              <List setModelId={setModelId} />
            </Route>
            <Route path="/detail" exact > 
              <Detail handleBack={handleBack}/>
            </Route>
            <Route>
              <Redirect to="/" />    
            </Route>
          </div>
        </Switch>
     </div>
  );
}

export default App;

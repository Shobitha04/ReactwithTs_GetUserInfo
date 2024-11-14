import React from "react"
import HelloWorldComponent from "./assets/components/HelloWorldComponent/HelloWorldComponent"
import UsersListComponent from "./assets/components/HelloWorldComponent/UsersListComponent/UsersListComponent"

const App = () => {
  return (
    <React.Fragment>
      <UsersListComponent/>
      <HelloWorldComponent/>
    </React.Fragment>
    
    
  )
}

export default App
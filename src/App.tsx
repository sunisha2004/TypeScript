import Greet from "./Component/Greet"
import Person from "./Component/Person"
import PersonList from "./Component/PersonList"

function App() {

  const persondata = {
    first : "tovino",
    last: "Tomas"
  }

  const personlist = [
    {
      fname:"john",
      lname:"joe"
    },
    {
       fname:"tom",
      lname:"joe"

    },
    {
       fname:"Sam",
      lname:"joe"
    }

  ]

  return (
    <>
    <Greet name={"liya"} age={22} isLogin={false}/>
    <Person name={persondata}/>
    <PersonList names={personlist}/>
     
    </>
  )
}

export default App

import Container from "./Component/Container"
import Fetch from "./Component/Fetch"
import Greet from "./Component/Greet"
import Heading from "./Component/Heading"
import Oscar from "./Component/Oscar"
import Person from "./Component/Person"
import PersonList from "./Component/PersonList"
import Status from "./Component/Status"


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
    <Status status="success"/>
    <Heading>heading component</Heading>
    <Oscar>
      <Heading>Oscar holder</Heading>
    </Oscar>
    <Container styles={{border:'1px solid red',padding:'5px'}}></Container>
    <Fetch/>
     
    </>
  )
}

export default App

type person = {
    name:{
        first:string,
        last:string

    }
}

const Person = (props:person) => {
  return (
    <div>
        <h1>{props.name.first} {props.name.last}</h1>
    </div>
  )
}

export default Person
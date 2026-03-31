type Greetprop = {
    name:string,
    age:number,
    isLogin:boolean
}

const Greet = (props:Greetprop) => {
  return (
    <div>
        {props.isLogin ? `welcome ${props.name}`:'welcome'}
        <h1>{props.name}</h1>
        <h2>Age :{props.age} </h2>
    </div>
  )
}

export default Greet
type personlist = {
names :{
    
        fname:string
        lname:string
}[]

}
const PersonList = (props:personlist) => {
  return (
    <div>
        
        {props.names.map((nme,i)=>(
            <div key={i}>
                <p>{nme.fname}</p>
            <p>{nme.lname}</p>
                
            </div>
            
        )
        )}

    </div>
  )
}

export default PersonList
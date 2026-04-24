type StatusProps = {
    status:'success' | 'loading' | 'error'
}
function Status(props:StatusProps) {
    let message 
    if(props.status == 'loading'){
        message = "loading"
    }else if(props.status == 'success'){
        message = "Data fetched successfully"
    }else if(props.status == 'error'){
        message = 'Data fetch failed'
    }
  return (
    <h1>status - {message}</h1>
  )
}

export default Status
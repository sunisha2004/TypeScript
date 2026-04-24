type OscarHold = {
    children : React.ReactNode
}
function Oscar(props:OscarHold) {
  return (
    <div>{props.children}</div>
  )
}

export default Oscar
import type React from "react"

type containerProps = {
    styles:React.CSSProperties

}

function Container(props:containerProps) {
  return (
    <div style={props.styles}>
        Text here
    </div>
  )
}

export default Container
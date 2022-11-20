import React from 'react'

function Alert(props) {
  return (
  <div style={{height : '50px'}}>
  {  props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alert.message}</strong> {props.alert.type} .
</div>}
</div>
  )
}

export default Alert
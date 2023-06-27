import React from 'react'

export default function TextForm(props) {
  return (
    <div>
    
  <div className="form-group">
    <h2>{props.heading}</h2>
   
    <textarea
      className="form-control"
      id="myBox"
      rows={8}
      defaultValue={""}
    />
  </div>
    <button className="btn btn-primary">
      Convert to upperCase
    </button>


      
    </div>
  )
}

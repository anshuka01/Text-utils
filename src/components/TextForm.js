import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("UpperCase was clicked" + text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!","success")
  }
  const handleLoClick=()=>{
    console.log("LowerCase was clicked" + text);
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!","success")
  }
  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
   
  }
  const handleCopy=()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard!","success")
  }
    const [text,setText] = useState('');
    // text="new text";// wrong way to change the state
    // setText="new text"// right way to change the state
   
  return (
  <>
   <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}> 
   <h1>{props.heading}</h1>  
<div className="mb-3">
  <textarea className="form-control" value ={ text } onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button> 
<button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>

</div>
<div className='container my-2'  style={{color: props.mode==='dark'?'white':'#042743'}}>
<h2>Your text summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:'Enter something to preview it here'}</p>

</div>
 </> 
  
  )
}


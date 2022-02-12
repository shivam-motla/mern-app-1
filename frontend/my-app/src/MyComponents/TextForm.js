import React,{useState} from 'react'


export default function TextForm() {
    const [text_with_state, change_text] = useState("Initial text");
const fun1=()=>{
change_text(text_with_state.toUpperCase());
}

const fun2=(event)=>{
    change_text(event.target.value)
}

  return (
      <>
        <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a  comment here" onChange={fun2} value={text_with_state} id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Comments</label>
        </div>
        <div class="d-grid gap-2 d-md-block">
        <button class="btn btn-primary" onClick={fun1} type="button">Button</button>
        </div>
</>
)
}

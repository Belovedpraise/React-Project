import React from 'react'

export default function REGISTER() {

  const register =()=>{
    alert(`this is my details`)
  }
    return (
        <>
  <div class="p-5" >
  <h1 class="text-white">Register Here</h1> <br></br>
  <label for="exampleFormControlInput1" class="form-label">NAME</label>
  <input type="email" class="form-control w-50" id="exampleFormControlInput1" placeholder="INPUT NAME"/>
  <label for="exampleFormControlInput1" class="form-label">EMAIL</label>
  <input type="name@example.com" class="form-control w-50" 
  id="exampleFormControlInput1" placeholder="EMAIL"/><br></br>
    <label for="exampleFormControlInput1" class="form-label">PASSWORD</label>
  <input type="PASSWORD" class="form-control w-50" 
  id="exampleFormControlInput1" placeholder="PASSWORD"/><br></br>
  <input type="Submit" class="form-control w-50 " id="exampleFormControlInput1" placeholder="" onClick={register}/>
</div>
   
        </>
    )
}

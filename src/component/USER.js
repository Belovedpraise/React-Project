import React,{useState} from 'react'

export default function USER({inform,setInform}) {

const [user, setUser]= useState({Date:"", Time:"",Purpose:""});

const InputHall=(e)=>{
setUser({...user,[e.target.name]:e.target.value})
}


const BOOKING=(e)=>{
// let a=[...inform,user]
// setInform(a)
setInform([...inform,user])
setUser({Date:"", Time:"",Purpose:""})
}
    return (
        <>
        <div class="p-5" >
         <h1 class="text-white">Buk here</h1> <br></br>
  <label for="exampleFormControlInput1" class="form-label ">Date</label>
  <input type="Date" name="Date" class="form-control w-50 shadow p-4 mb-4 " id="exampleFormControlInput1" placeholder="Date" value={user.Date} onChange={InputHall}/>
  <label for="exampleFormControlInput1" class="form-label">Time</label>
  <input type="Time" name="Time" class="form-control w-50 shadow p-4 mb-4 " 
  id="exampleFormControlInput1" placeholder="Time" value={user.Time} onChange={InputHall}/>
<label for="exampleFormControlInput1" class="form-label">Purpose</label>
  <input type="text" name="purpose" class="form-control w-50 shadow p-4 mb-4" 
  id="exampleFormControlInput1"  placeholder="Purpose" onChange={InputHall}/>
  <input type="Submit"  class="form-control w-50  shadow p-4 mb-4" id="exampleFormControlInput1" placeholder="" onClick={BOOKING} /> 
  </div>

<table className="table">

<thead>
                   <th>S/N</th>
                   <th>BOOKING DATE</th>
                   <th>BROOKING TIME</th>
                   <th>BOOKING PURPOSE</th>
                
               </thead>
               <tbody>
  {inform.map((e,i)=>
<tr key={i}>
<th scope="row">{i+1}</th>
<th>{e.Date}</th>
<th>{e.Time}</th>
<th>{e.Purpose}</th>
</tr>
  
  )} 

</tbody>
</table>
        </>
    )
}

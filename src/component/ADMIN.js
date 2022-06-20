import React from 'react'


export default function ADMIN({inform,setInform, user,setUser,APPROVED}) {



    return (
        <>
   
   <div class="p-2" >
  <label for="exampleFormControlInput1" class="form-label">Event Name</label>
  <input type="Event Name" class="form-control w-50" 
  id="exampleFormControlInput1" placeholder="Event Name"/><br></br>
    <label for="exampleFormControlInput1" class="form-label">Event location</label>
  <input type="Event Location" class="form-control w-50" 
  id="exampleFormControlInput1" placeholder="Event Location"/><br></br>
    <label for="exampleFormControlInput1" class="form-label">Event Price</label>
  <input type="Event Price" class="form-control w-50" 
  id="exampleFormControlInput1" placeholder="Event Price"/><br></br>
  <input type="Submit" class="form-control w-50 " id="exampleFormControlInput1" placeholder="" />
</div>  

<div class="p-5" >

<table className="table">
               <thead>
                   <th>S/N</th>
                   <th>BOOKING DATE</th>
                   <th>BROOKING TIME</th>
                   <th>BOOKING PURPOSE</th>
                   <th>BOOKING PRICE</th>
                   <th>APPROVE</th>
               </thead>
           <tbody>
           {inform.map((e, i)=> (
               <tr key={i}>
                    <th scope="row">{i+1}</th>
                    <td>{e.Date}</td>
                    <td>{e.Time}</td>
                    <td>{e.Purpose}</td>
                    <td><input placeholder="Price"/></td>
                    
                    <td>
                        <button onClick={APPROVED}> APPROVE</button>
                    </td>
                    {/* <button>Edit</button> */}
               </tr>
           ))}
            </tbody>
            </table>
            </div>
</>
    )
}

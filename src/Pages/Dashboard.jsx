// import React, { memo } from 'react'
 
// function Card({ data, deletehandler, updatehandler }) {
//     console.log("child render")
//     return (
//         <div className="d-flex gap-5 flex-wrap p-5 justify-content-between m-auto my-5  w-75 ">
//  <h1 className='text-center w-100'>Dashboard</h1>
//             {data.length ? data.map((v, i) => (
//                 <div className='card  p-3 bg-info wh' key={i}>
//                     <button onClick={() => { deletehandler(i) }}>X</button>
                    
//                     <h4>Title :  {v.title}</h4>
//                     <p>Description : {v.Description}  </p>
//                     <p>Start Date : {v.Sdate}</p>
//                     <p>End date : {v.Edate}</p>
//                     <p>Status :{v.Status} </p>
//                     <p>Priority: {v.Priority} </p>
//                     <button onClick={() => { updatehandler(i) }}>Update</button>
//                 </div>
//             )): <h1 className=' m-auto'>No data</h1>}
//         </div>
//     )
// }
 
// export default memo(Card)
import React, { memo } from 'react'
 
function Card({ data, deletehandler, updatehandler }) {
    console.log("child render")
    return (
        <div className="d-flex gap-5 flex-wrap  justify-content-around  m-auto my-5  w-75 ">
  <h1 className='text-center w-100'>Dashboard</h1>
            {data.map((v, i) => (
                <div className='card w-fit p-3 bg-info shadow border border-success-subtle p-3 mb-5 bg-body-tertiary rounded wh' key={i}>
                    <button  className='bg-danger my-2' onClick={() => { deletehandler(i) }}>X</button>
                    
                    <h4>Title :  {v.name}</h4>
                    <p>Description : {v.Description}  </p>
                    <p> Start Date :{v.Sdate}</p>
                     <p> End Date :{v.Edate}</p>
                     <p>Status:{v.Status}</p>
                     <p>priority:{v.Priority}</p>
                    <button  className='bg-primary-subtle' onClick={() => { updatehandler(i) }}>Update</button>
                </div>
            ))}
        </div>
    )
}
 
export default memo(Card)
 
 
import React, { lazy } from 'react'
import useToggle from '../hooks/useToggle'
import useFetch from '../hooks/useFetch'

const Task20Nov = () => {
  
    
//     const{show,Toggle} = useToggle()
    const{user,setUser} = useFetch()
    const{post,setPost} = useFetch()
    
  return (
    // <div style={{height : 100 , width : 350, backgroundColor : "beige"}}>
    //     { show ? (
    //         <>
    //     <h1>Hii My Name Is Gurjasmanpreet Singh</h1>
    //     <button onClick={Toggle}>Show/Hide</button>
    //         </>
    //     ) : (
    //     <>
    //     <h1>This Info Is Hidden</h1>
    //     <button onClick={Toggle}>Show/Hide</button>
    //     </>
    //     )
    //     }
    // </div>



    
<div>
    
    <h1>API Fetch</h1>
    <br />
    {
        user.map((u) =>(
            <div key={u.id}>
            <h3>{u.name}</h3>
            </div>
        ))
    }
    <br />
    <br />
    <h1>API Fetch No 2</h1>
    {
        post.map((p) =>(
            <div key={p.id}>
            <h3>{p.title}</h3>
            </div>
        ))
    }
</div>

  )


}

export default Task20Nov

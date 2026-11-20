import React, { useEffect, useState } from 'react'

const useFetch = () => {
  const [user, setUser] = useState([])
  const [post, setPost] = useState([])
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUser(data))
    .catch(err => console.log(err))
  },[]);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPost(data))
    .catch(err => console.log(err))
  },[]);
  
  return {
    user,
    setUser,
    post,
    setPost,
  }
}


export default useFetch 

import React, { useEffect, useState } from 'react'

export const FetchWithInComponent = () => {

  const[posts, setPosts] = useState([])
  const[todos, setTodos]= useState([])
  const[search, setSearch] = useState("")


  useEffect (() =>{
    const getData = async() => {

      const url ="https://jsonplaceholder.typicode.com/posts"
      const responce = await fetch(url)
      const data=await responce.json()
      setPosts(data)
      console.log(data)

      const url2 ="https://jsonplaceholder.typicode.com/todos"
      const responce2 = await fetch(url2)
      const data2 = await responce2.json()
      setTodos(data2)

    }
    getData()
  },[])

  const handleDelete =(id) =>{
    const deleteData = posts.filter(each => each.id!==id)
    setPosts(deleteData)
  }
  const handleSearch = (event) =>{
    setSearch(event.target.value)
  }
  const handleSearchData = () =>{
    const postData = posts.filter(each => each.title.toLowerCase().includes(search.toLowerCase()))
    setPosts(postData)
  }
  return (
    <div>
      <h1>Fetching Posts data</h1>
      <input type="text" className='bi bi-search' placeholder= ' Search' onChange={handleSearch} />
      <button onClick={handleSearchData}>Search</button>
      <ul >
        {
          posts.map(eachPost => (
            <li key={eachPost.id} className='d-flex p-2'>
              <h4>{eachPost.id}</h4>
              <h4 className='ms-5 bi bi-person-fill'>{eachPost.title}</h4>
              <button className='btn btn-danger ms-5' onClick={() => handleDelete(eachPost.id)}>Delete</button>
            </li>

          ))
        }
      </ul>

      <ul>
        <h1>Fetching Todo's data</h1>
        {
          todos.map(eachtodo =>(
            <li key={eachtodo.id}>
              <h4>{eachtodo.title}</h4>
            </li>
          ))
        }
      </ul>

    </div>
  )
}

import axios, { all } from 'axios'
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [students,setStudents] = useState([])
  const [count,setCount] = useState(0)
  const [search, setSearch] = useState('')

  const [copyOfStudents,setCopyOfStudents] = useState([])




  // two arguments
  //    1. Arrow Function
  //    2. Array
  useEffect( () => {
    
  axios.get('https://omar-class-api.adaptable.app/students')
  .then((allStudents)=>{
    console.log(allStudents.data)
    setCopyOfStudents(allStudents.data)
  
    setStudents(allStudents.data)
  })



  // if the dependancy array is empty then this will only perform once
  },[])

   useEffect(()=>{ 
    console.log("Search changed")

    if(search.length ===0){
      axios.get('https://omar-class-api.adaptable.app/students')
      .then((allStudents)=>{
        console.log(allStudents.data)
        setStudents(allStudents.data)
      })
    }

    else{
      let filteredStudents = copyOfStudents.filter((oneStudent)=>{
        return oneStudent.name.includes(search)
      })
  
      setStudents(filteredStudents)
    }

    let filteredStudents = copyOfStudents.filter((oneStudent)=>{
          return oneStudent.name.includes(search)
        })

        setStudents(filteredStudents)


  },[search])

  // useEffect(()=>{

  //   console.log("Function running useEffect")
    
  //   let filteredStudents = copyOfStudents.filter((oneStudent)=>{
  //     return oneStudent.name.includes(search)
  //   })

  //   setStudents(filteredStudents)

  // },[search])

  
  function increaseCount(){
    setCount(count+1)

  }



  return (
    <>

    <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
      {students.map((oneStudent)=>{
        return(
          <div key={oneStudent.id}>
            <h1>Name:{oneStudent.name}</h1>
          </div>
        )
      })}

<h2> {count}</h2>
       
      <button onClick={increaseCount}>Click</button>
    </>
  )
}

export default App

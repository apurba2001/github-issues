import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const fetchData = async(page) =>{
    const result = await axios.get(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`)
    setData(result.data)
  }

  useEffect(()=>{
    fetchData(page)
  }, [page])

  const loadPrev = () =>{
    if(page === 1) return
    setPage(pre => pre - 1)
  }
  const loadNext = () => {
    setPage(pre => pre + 1)
  }
  return (
    <div className="container">
      <h2>Page: {page}</h2>
      <ol>
        {data?.map((item)=>  <li key={item.id}>{item.title}</li>)}
      </ol>
      <span><button id='load_prev' onClick={loadPrev}>Load Prev</button></span>
      <span><button id='load_next' onClick={loadNext}>Load Next</button></span>
    </div>
  )
}

export default App

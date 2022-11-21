export const fetchCourse = async()=>{
    const response = await fetch("http://localhost:9000/course") 
    const j = await response.json()   
    return j
    
}

export const searchTitle = async()=>{
    const response = await fetch("http://localhost:9000/guest/searchtitle")
    const j = await response.json()
    return j
}

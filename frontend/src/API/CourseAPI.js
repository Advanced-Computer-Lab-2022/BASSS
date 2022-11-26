export const fetchCourse = async()=>{
    const response = await fetch("http://localhost:9000/course") 
    const j = await response.json()   
    return j
}

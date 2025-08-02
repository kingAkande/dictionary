import React, { useEffect, useState } from "react";

const LocalStorage = () => {
    const [student , setStudent]= useState("");
    const [students , steStudents] = useState(()=>{
        const store = localStorage.getItem("students")
        return store ? JSON.parse(store) : []
    });

    function handleSubmit(e){
        e.preventDefault();
        if(!student) return
        steStudents((prevStudent)=>[...prevStudent , student])
        setStudent("")
    }

    useEffect(()=>{
        localStorage.setItem("students", JSON.stringify(students))
    },[students])
  return (
    <div>
      <form  onSubmit={handleSubmit}  action="">
        <input className="border" value={student} onChange={(e)=>setStudent(e.target.value)} type="text" />
        <button className="border px-4">SUB</button>
      </form>
      <div>
        {students.map((x,i)=> <div key={i}>{x}</div>)}
      </div>
      <Fetching/>
    </div>
  );
};

export default LocalStorage;


function Fetching(){

async function fetch() {
  
  
  const res = await fetch();
  
  if(!res.ok){
    if (res.status === 404) {
      console.error();
    }
    throw new Error("");
    
  }

  const data =  await res.json()
  console.log(data);
} 



  return(
    <div>
        {()=>fetch()}
    </div>
  )
}



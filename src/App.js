import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { apiUrl,filterData } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function App() {

  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);

  async function fetchdata(){
    setLoading(true);
    try{
        let response = await fetch(apiUrl);
        let output = await response.json();
        setCourses(output.data);
    }
    catch(error){
      toast.error("Network error");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchdata();
  },[]);

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar/>
      <Filter filterData={filterData}></Filter>
      <div className=' w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
        {
          loading ? (<Spinner/>):(<Cards courses={courses}/>) 
        }
      </div>
    </div>
  );
}

export default App;

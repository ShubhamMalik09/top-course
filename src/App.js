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
  const [category, setCategory] = useState(filterData[0].title);

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
    <div className='min-h-screen flex flex-col bg-purple-700'>
      <Navbar/>
      <div className=' pt-5'>
        <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
        <div className=' w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] pt-5'>
          {
            loading ? (<Spinner/>):(<Cards courses={courses} category={category}/>) 
          }
        </div>
      </div>
      
    </div>
  );
}

export default App;

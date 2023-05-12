import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <h1 className='text-2xl text-center text-indigo-600'>Coffee Shop</h1>
      <div className='grid md:grid-cols-2 gap-6 mt-10 m-20'>
        {
          coffees.map(coffee => <CoffeeCard // now we use state coffees variable
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App

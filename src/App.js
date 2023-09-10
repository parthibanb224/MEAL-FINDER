import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mealsData, setMealsData] = useState([]);
  const [preMeals, setPreMeals] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchQuery.length===0){
      alert("Enter a Food Name to Search")
    }
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then(response => {
        if(response.data.meals === null){
          alert("NO FOOD FOUND");
        }
        else{
          setMealsData(response.data.meals);
          setSearchQuery('');
        }
      })
      .catch(err => console.log(err))

  }

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then(res => setPreMeals(res.data.meals))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='app-container overflow-y-scroll'>
      <div className="w-3/5 mx-auto min-h-screen">
        <div className="container mx-auto p-4 text-center">
          <h1 className="text-3xl font-semibold text-white mb-4">Meal Finder</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Search for meals..."
                className="px-4 py-2 border rounded w-3/5"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="border bg-indigo-500 text-white ml-3 py-1 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
              >
                Search
              </button>
            </div>
          </form>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mealsData.length>0? mealsData.map((meals,index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={meals.strMealThumb}
                  alt={meals.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold mb-2">{meals.strMeal}</h2>
                  <a href={meals.strYoutube} target='_blank' rel='noopener noreferror' class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Watch Video</a>
                </div>
              </div>
            )) :
              preMeals?.map((meal,i) => 
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={meal.strMealThumb}
                    alt={meal.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h2 className="text-lg font-semibold mb-2">{meal.strMeal}</h2>
                    <a href={meal.strYoutube} target='_blank' rel='noopener noreferror' class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Watch Video</a>

                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

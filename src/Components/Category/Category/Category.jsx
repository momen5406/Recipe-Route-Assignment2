import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Category = () => {
  let {cat} = useParams();

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCategory = async(cat) => {
    try {
      const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
      const meals = [...data.data.meals];      
      setMeals(meals);
      setIsLoading(false);   
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategory(cat);
  }, [cat])



  return (
      <div className='px-10'>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-8 gap-y-16 my-10">
        {isLoading 
          ? (
            Array.from({length: 8}).map((_, index) => (
              <div key={index} className="group bg-white p-5 rounded-4xl text-center transition-all duration-600">
                <div className="animate-pulse">
                  <div className="rounded-full shadow-2xl w-3/4 h-40 bg-gray-200 mx-auto relative -top-10"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mt-4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mb-6"></div>
                  <div className="h-10 bg-gray-200 rounded-full w-1/2 mx-auto"></div>
                </div>
              </div>
            ))
          ) : (
            meals.map(meal => (
              <div key={meal.idMeal} className="group bg-white p-5 rounded-4xl text-center transition-all duration-600 hover:scale-105 hover:shadow-2xl">
                <img className='group-hover:rotate-360 transition-all duration-600 rounded-full shadow-2xl w-3/4 mx-auto relative -top-10' src={meal.strMealThumb} alt={meal.strMeal} />
                <h5 className='text-2xl font-semibold mb-4'>{meal.strMeal}</h5>
                <Link className='bg-secondary rounded-full text-white py-2 px-4 block hover:scale-105 hover:shadow-xl hover:bg-[#059669] transition-all duration-300' to={`/mealdetails/${meal.idMeal}`}>
                  View Recipe
                </Link>
              </div>
            ))
          )
        }
      </div>
    </div>
    );
}

export default Category
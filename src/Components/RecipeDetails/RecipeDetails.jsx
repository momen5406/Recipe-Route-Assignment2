import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  let { id } = useParams();
  const [meal, setMeal] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getRecipeDetails = async (id) => {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setMeal(data.meals[0]);

      let ing = [];
      for (var i = 1; i < 20; i++) {
        if (data.meals[0][`strIngredient${i}`] != "") {
          ing.push(data.meals[0][`strIngredient${i}`]);
        }
      }
      setIngredients(ing);

      let mes = [];
      for (var i = 1; i < 20; i++) {
        if (data.meals[0][`strMeasure${i}`] != " ") {
          mes.push(data.meals[0][`strMeasure${i}`]);
        }
      }
      setMeasures(mes);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipeDetails(id);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="animate-pulse p-10">
          <div className="h-12 w-2/3 bg-gray-200 rounded mb-8"></div>{" "}
          {/* Meal title */}
          <div className="grid lg:grid-cols-3 gap-5">
            {/* Left column (Image + buttons) */}
            <div>
              <div className="rounded-2xl bg-gray-200 w-full h-64"></div>{" "}
              {/* Meal image */}
              <div className="flex items-center justify-center gap-5 mt-5">
                <div className="bg-gray-200 px-8 py-4 rounded-xl w-32 h-10"></div>{" "}
                {/* Youtube btn */}
                <div className="bg-gray-200 px-8 py-4 rounded-xl w-32 h-10"></div>{" "}
                {/* Source btn */}
              </div>
            </div>

            {/* Middle column (Instructions) */}
            <div>
              <div className="space-y-3">
                {Array.from({ length: 8 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="h-4 bg-gray-200 rounded w-full"
                  ></div>
                ))}
              </div>
            </div>

            {/* Right column (Ingredients) */}
            <div className="bg-white p-5 h-fit rounded-2xl">
              <div className="h-8 w-1/2 bg-gray-200 rounded mb-2"></div>{" "}
              {/* Ingredients heading */}
              <div className="border-neutral-200 border-2 my-4"></div>
              <ul>
                {Array.from({ length: 6 }).map((_, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between border-b border-neutral-200 py-2"
                  >
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                    <div className="h-4 w-12 bg-gray-200 rounded"></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-10">
          <h2 className="text-5xl font-headings font-bold mb-8">
            {meal.strMeal}
          </h2>
          <div className="grid lg:grid-cols-3 gap-5">
            <div>
              <img className="rounded-2xl" src={meal.strMealThumb} alt="" />
              <div className="flex items-center justify-center gap-5 mt-5">
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  className="bg-[#DC2626] text-white px-4 py-2 border-x inline-block rounded-xl"
                >
                  <i className="fa-brands fa-youtube"></i> Youtube
                </a>
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  className="bg-secondary text-white px-4 py-2 border-x inline-block rounded-xl"
                >
                  <i className="fa-solid fa-globe"></i> Source
                </a>
              </div>
            </div>
            <p>{meal.strInstructions}</p>
            <div className="bg-white p-5 h-fit rounded-2xl">
              <h5 className="text-3xl font-bold">Ingredients</h5>
              <hr className="border-neutral-200 border-2 mt-2 mb-4" />
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between not-last-of-type:border-b border-neutral-200 not-last-of-type:pb-2 not-first-of-type:pt-2"
                  >
                    <span>{ingredient}:</span>
                    <span>{measures[index]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;

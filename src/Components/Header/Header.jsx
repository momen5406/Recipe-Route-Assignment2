import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCat() {
      try {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const categoryNames = [...data.categories];
        setCategories(categoryNames);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    getCat();
  }, []);

  const nav = useNavigate();

  function navigate(event) {
    nav(event.target.value)
  }

  return (
    <div className="p-10">
      <h2 className="font-headings text-4xl capitalize bg-linear-to-r from-amber-500 to-orange-700 bg-clip-text text-transparent">
        Learn, cook, Eat your food
      </h2>

      <select id="selectCat" onChange={navigate} className="sm:hidden block w-full bg-white border border-neutral-200 p-2 rounded-xl outline-none mt-10">
        <option value='/'>All</option>
        {categories.map((cat, index) => (
          <option key={index} value={`/category/${cat.strCategory}`}>{cat.strCategory}</option>
        ))}
      </select>

      <ul className="my-10 sm:flex flex-wrap gap-8 hidden">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <li key={index}>
              <div className="border border-neutral-300 py-2 px-4 rounded-full shadow transition-all duration-300 animate-pulse">
                <div className="h-5 w-12 bg-gray-200 rounded mx-auto"></div>
              </div>
            </li>
          ))
        ) : (
          <>
            <li>
              <NavLink
                className="border border-neutral-400 py-2 px-4 rounded-full shadow hover:shadow-xl transition-all duration-300"
                to="/"
              >
                All
              </NavLink>
            </li>
            {categories.map((cat) => (
              <li key={cat.strCategory}>
                <NavLink
                  className="border border-neutral-400 py-2 px-4 rounded-full shadow hover:bg-white hover:shadow-xl transition-all duration-300"
                  to={`/category/${cat.strCategory}`}
                >
                  {cat.strCategory}
                </NavLink>
              </li>
            ))}
          </>
        )}
      </ul>
      <hr className="border-neutral-300 sm:block hidden" />
    </div>
  );
};

export default Header;

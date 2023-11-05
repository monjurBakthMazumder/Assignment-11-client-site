import { useEffect, useState } from "react";
import HomeSlicer from "../../Component/Slider/HomeSlicer/HomeSlicer";
import Description from "../../Component/UI/Description";
import Heading from "../../Component/UI/Heading";
import useAxiosSecure from "../../Hock/axiosSecure";
import FeatureFoodCard from "../../Component/Card/FeatureFoodCard/FeatureFoodCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/feature-foods").then((res) => {
      setFoods(res.data);
    });
  }, [axiosSecure]);
  return (
    <div className="max-w-[100rem] w-full mx-auto xl:px-8">
      <HomeSlicer />
      <div className="my-10 sm:my-20">
        <Heading>Featured Foods</Heading>
        <Description>
          Explore our website for an array of delightful, nutritious food
          options available for generous donations.
        </Description>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {foods?.map((food) => (
            <FeatureFoodCard key={food._id} food={food} />
          ))}
        </div>
        <div className="text-center">
            <Link to={'/available-food'} className="px-4 py-2 bg-blue-600 border border-blue-600 text-white hover:text-blue-600 hover:bg-white text-lg my-5">Show All</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../Hock/axiosSecure";
import Heading from "../../Component/UI/Heading";
import Description from "../../Component/UI/Description";
import FeatureFoodCard from "../../Component/Card/FeatureFoodCard/FeatureFoodCard";

const AvailableFood = () => {
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/foods").then((res) => {
      setFoods(res.data);
    });
  }, [axiosSecure]);
  console.log(foods);

  return (
    <div className="max-w-[100rem] w-full mx-auto xl:px-8">
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
        </div>
      </div>
    </div>
  );
};

export default AvailableFood;

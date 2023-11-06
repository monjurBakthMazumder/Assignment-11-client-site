import { useEffect } from "react";
import { useState } from "react";
import Heading from "../../Component/UI/Heading";
import Description from "../../Component/UI/Description";
import FeatureFoodCard from "../../Component/Card/FeatureFoodCard/FeatureFoodCard";
import Loading from "../../Component/Loading/Loading";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hock/useAxiosSecure";

const AvailableFood = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    setLoading(true);
    axiosSecure.get("/foods").then((res) => {
      setFoods(res.data);
      setLoading(false);
    });
  }, [axiosSecure]);
  console.log(foods);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      search: "",
    },
  });
  const onSubmit = async (data) => {
    const search = data.search;
    console.log(search);
    setLoading(true);
    axiosSecure.get(`/foods?search=${search}`).then((res) => {
      setFoods(res.data);
      setLoading(false);
    });
  };

  return (
    <>
      <Helmet>
        <title>Foodies | Available Food</title>
      </Helmet>
      <div className="max-w-[100rem] w-full mx-auto xl:px-8">
        <div className="my-10 sm:my-20">
          <Heading>Featured Foods</Heading>
          <Description>
            Explore our website for an array of delightful, nutritious food
            options available for generous donations.
          </Description>
          <div className="">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center items-center"
            >
              <input
                {...register("search")}
                placeholder="Search by name..."
                className="py-3 px-4 max-w-xs w-full border border-blue-200 rounded-md rounded-r-none text-sm focus:border-blue-500 focus:ring-blue-500 outline-none"
              />
              <button
                type="submit"
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md rounded-l-none border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 text-sm "
              >
                Search
              </button>
            </form>
          </div>
          {loading ? (
            <Loading /> 
          ) : foods?.length < 1 ? (
            <div className="flex justify-center items-center h-[50vh] font-semibold text-2xl md:text-3xl lg:text-4xl">
              No food find
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
              {foods?.map((food) => (
                <FeatureFoodCard key={food._id} food={food} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AvailableFood;

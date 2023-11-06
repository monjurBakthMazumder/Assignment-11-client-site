import useAxiosSecure from "../../Hock/axiosSecure";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Component/Loading/Loading";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
const UpdateFood = () => {
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const id = useParams();

  useEffect(() => {
    setLoading(true);
    axiosSecure.get(`/foods/${id.id}`).then((res) => {
      setFood(res.data);
      setLoading(false);
    });
  }, [axiosSecure, id?.id]);
  const {
    _id,
    foodName,
    foodImg,
    quantity,
    pickupLocation,
    expiredDate,
    additionalInformation,
  } = food;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImg = form.foodImg.value;
    const quantity = form.quantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDate = form.expiredDate.value;
    const additionalInformation = form.additionalInformation.value;
    const updateFood = {
      foodName,
      foodImg,
      quantity,
      pickupLocation,
      expiredDate,
      additionalInformation,
    };
    console.log(updateFood);
    axiosSecure.put(`/foods/${_id}`, updateFood).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        Swal.fire({
          title: "Food updated",
          text: "Your food updated successfully",
          icon: "success"
        });
      }
    });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Helmet>
        <title>Foodies | Update Food</title>
      </Helmet>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto my-10 md:my-20 border-2 rounded border-blue-400 px-5 sm:px-10 py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Update Food
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
              <div className="w-full flex-1">
                <label htmlFor="foodName">
                  Food Name
                  <input
                    defaultValue={foodName}
                    name="foodName"
                    placeholder="Food Name"
                    className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2"
                  />
                </label>
              </div>
              <div className="w-full flex-1">
                <label htmlFor="foodImg">
                  Food img url
                  <input
                    defaultValue={foodImg}
                    name="foodImg"
                    placeholder="Food img url"
                    className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
              <div className="w-full flex-1">
                <label htmlFor="quantity">
                  Quantity
                  <input
                    type="number"
                    defaultValue={quantity}
                    name="quantity"
                    placeholder="Quantity"
                    className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2"
                  />
                </label>
              </div>
              <div className="w-full flex-1">
                <label htmlFor="pickupLocation">
                  Pickup Location
                  <input
                    defaultValue={pickupLocation}
                    name="pickupLocation"
                    placeholder="Pickup Location"
                    className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2"
                  />
                </label>
              </div>
              <div className="w-full flex-1">
                <label htmlFor="expiredDate">
                  Expired Date
                  <input
                    type="date"
                    defaultValue={expiredDate}
                    name="expiredDate"
                    placeholder="Expired Date"
                    className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2"
                  />
                </label>
              </div>
            </div>
            <div className="mb-5">
              <div className="w-full">
                <label htmlFor="additionalInformation">
                  Additional information
                  <textarea
                    defaultValue={additionalInformation}
                    name="additionalInformation"
                    className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2 resize-none"
                    rows="3"
                    placeholder="Additional information"
                  ></textarea>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateFood;

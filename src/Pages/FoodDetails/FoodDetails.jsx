import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hock/UseAuth";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import Loading from "../../Component/Loading/Loading";
import useAxiosSecure from "../../Hock/useAxiosSecure";
const FoodDetails = () => {
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const id = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      donationMoney: "",
      additionalInformation: "",
    },
  });
  const {
    _id,
    foodName,
    foodImg,
    quantity,
    pickupLocation,
    expiredDate,
    additionalInformation,
    donatorEmail,
    donatorName,
    status,
  } = food;
  const onSubmit = async (data) => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const donationMoney = data.donationMoney;
    const additionalNote = data.additionalNote;
    const requestFood = {
      foodName,
      foodImg,
      foodId: _id,
      donatorName,
      donatorEmail,
      requesterImg: user?.photoURL,
      requesterName: user?.displayName,
      requesterEmail: user?.email,
      requestDate: `${year}-${month}-${day}`,
      pickupLocation,
      expiredDate,
      donationMoney,
      additionalNote,
      status,
    };
    console.log(requestFood);
    axiosSecure.post("/request-foods", requestFood).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        reset()
        Swal.fire({
          title: "Send request",
          text: "Your food request is send successfully",
          icon: "success"
        });
      }
    });
  };
  useEffect(() => {
    setLoading(true);
    axiosSecure.get(`/foods/${id.id}`).then((res) => {
      setFood(res.data)
      setLoading(false)
    });
  }, [axiosSecure, id?.id]);
  console.log(id);
  
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Helmet>
        <title>Foodies | Food Details</title>
      </Helmet>
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-5 my-10 sm:my-20">
          <div className="flex-1">
            <img
              src={foodImg}
              alt={`image of ${foodName}`}
              className="w-full h-fit"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-bold">{foodName}</h1>
            <h1 className="text-lg font-medium my-1">Quantity: {quantity}</h1>
            <h1 className="font-bold text-base">Expire Date: {expiredDate}</h1>
            <h1 className="font-bold text-base">Status: {status}</h1>
            <p className="font-light text-justify my-3">
              {additionalInformation}
            </p>
            <h1 className="text-xl font-bold underline">Donor Information:</h1>
            <h1 className="font-bold text-base mt-2">Name: {donatorName}</h1>
            <h1 className="text-lg font-medium">
              Pickup location: {pickupLocation}
            </h1>

            {user ? (
              <button
                type="button"
                data-hs-overlay="#hs-modal-recover-account"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
              >
                Request
              </button>
            ) : (
              <Link
                to={"/sing-in"}
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
              >
                Login for food request
              </Link>
            )}

            <div
              id="hs-modal-recover-account"
              className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
            >
              <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
                  <div className="p-4 sm:p-7">
                    <div className="text-center">
                      <h2 className="block text-2xl font-bold text-gray-800 ">
                        Request for food
                      </h2>
                    </div>

                    <div className="mt-5">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid">
                          <label htmlFor="name">
                            Donation Money
                            <input
                              type="number"
                              {...register("donationMoney", {
                                required: "Donation Money is required",
                              })}
                              placeholder="Donation Money"
                              className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-1"
                            />
                          </label>
                          <p className="text-xs text-red-600 mt-1 mb-5">
                            {errors.donationMoney?.message}
                          </p>
                          <label htmlFor="additionalNote">
                            Additional Notes
                            <textarea
                              {...register("additionalNote", {
                                required: "Additional Notes is required",
                              })}
                              className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-1 resize-none"
                              rows="3"
                              placeholder="Additional Notes"
                            ></textarea>
                          </label>
                          <p className="text-xs text-red-600 mt-1 mb-5">
                            {errors.additionalNote?.message}
                          </p>
                          <button
                            type="submit"
                            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm "
                          >
                            send Request
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetails;

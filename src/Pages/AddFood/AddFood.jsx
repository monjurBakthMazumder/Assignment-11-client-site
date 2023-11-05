import { useForm } from "react-hook-form";
import UseAuth from "../../Hock/UseAuth";
import useAxiosSecure from "../../Hock/axiosSecure";
const AddFood = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      foodName: "",
      foodImg: "",
      quantity: "",
      pickupLocation: "",
      expiredDate: "",
      additionalInformation: "",
    },
  });
  const onSubmit = (data) => {
    const foodName = data.foodName;
    const foodImg = data.foodImg;
    const quantity = data.quantity;
    const pickupLocation = data.pickupLocation;
    const expiredDate = data.expiredDate;
    const additionalInformation = data.additionalInformation;
    const donatorEmail = user?.email;
    const donatorName = user?.displayName;
    const donatorImg = user?.photoURL;
    const status = "available";
    const addFood = {
      foodName,
      foodImg,
      quantity,
      pickupLocation,
      expiredDate,
      additionalInformation,
      donatorEmail,
      donatorName,
      donatorImg,
      status,
    };
    axiosSecure.post("/foods", addFood).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        alert("food added");
      }
    });
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto my-10 md:my-20 border-2 rounded border-blue-400 px-5 sm:px-10 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Add Food
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
            <div className="w-full flex-1">
              <label htmlFor="foodName">
                Food Name
                <input
                  {...register("foodName", {
                    required: "Food Name is required",
                  })}
                  placeholder="Food Name"
                  className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2"
                />
              </label>
              <p className="text-xs text-red-600 mt-1">
                {errors.foodName?.message}
              </p>
            </div>
            <div className="w-full flex-1">
              <label htmlFor="foodImg">
                Food img url
                <input
                  {...register("foodImg", {
                    required: "Food img url is required",
                  })}
                  placeholder="Food img url"
                  className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2"
                />
              </label>
              <p className="text-xs text-red-600 mt-1">
                {errors.foodImg?.message}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
            <div className="w-full flex-1">
              <label htmlFor="quantity">
                Quantity
                <input
                  {...register("quantity", {
                    required: "Quantity is required",
                  })}
                  placeholder="Quantity"
                  className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2"
                />
              </label>
              <p className="text-xs text-red-600 mt-1">
                {errors.quantity?.message}
              </p>
            </div>
            <div className="w-full flex-1">
              <label htmlFor="pickupLocation">
                Pickup Location
                <input
                  {...register("pickupLocation", {
                    required: "Pickup Location is required",
                  })}
                  placeholder="Pickup Location"
                  className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2"
                />
              </label>
              <p className="text-xs text-red-600 mt-1">
                {errors.pickupLocation?.message}
              </p>
            </div>
            <div className="w-full flex-1">
              <label htmlFor="expiredDate">
                Expired Date
                <input
                  type="date"
                  {...register("expiredDate", {
                    required: "Expired Date is required",
                  })}
                  placeholder="Expired Date"
                  className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2"
                />
              </label>
              <p className="text-xs text-red-600 mt-1">
                {errors.expiredDate?.message}
              </p>
            </div>
          </div>
          <div className="mb-5">
            <div className="w-full">
              <label htmlFor="additionalInformation">
                Additional information
              </label>
              <textarea
                {...register("additionalInformation", {
                  required: "Additional information is required",
                })}
                className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2 resize-none"
                rows="3"
                placeholder="Additional information"
              ></textarea>
              <p className="text-xs text-red-600 mt-1">
                {errors.additionalInformation?.message}
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;

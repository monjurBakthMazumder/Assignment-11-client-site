import PropTypes from "prop-types";
import { BiSolidLocationPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
const FeatureFoodCard = ({ food }) => {
  const {
    _id,
    foodName,
    foodImg,
    quantity,
    pickupLocation,
    expiredDate,
    additionalInformation,
    donatorName,
    donatorImg,
  } = food || {};
  return (
    <div>
      <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl ">
        <img
          src={foodImg}
          alt={`image of ${foodName}`}
          className="h-60 w-full object-cover "
        />
        <div className="p-4 flex-grow">
          <h3 className="text-2xl font-semibold text-gray-800 ">{foodName}</h3>
          <span className="text-xs font-semibold uppercase text-blue-600 my-1 flex items-center gap-[2px]">
            <BiSolidLocationPlus /> {pickupLocation}
          </span>
          <h3 className="text-base font-semibold text-gray-800 ">
            Quantity: {quantity}
          </h3>
          <h3 className=" text-gray-800 my-1">Expire date: {expiredDate}</h3>
          <p className="text-sm font-light text-justify">
            {additionalInformation?.slice(0, 200)}
          </p>
        </div>
          <div className="text-center mb-3">
            <Link
              to={`/food/${_id}`}
              className="px-2 py-1 bg-blue-600 border border-blue-600 text-white hover:text-blue-600 hover:bg-white"
            >
              Show All
            </Link>
          </div>
        <div className="bg-gray-200 h-[2px]"></div>
        <div className="flex items-center gap-3 p-4">
          <img
            className="inline-block h-[2rem] w-[2rem] rounded-md"
            src={donatorImg}
            alt={`image of ${donatorName}`}
          ></img>
          <p>{donatorName} (Donator)</p>
        </div>
      </div>
    </div>
  );
};

FeatureFoodCard.propTypes = {
  food: PropTypes.object,
};

export default FeatureFoodCard;

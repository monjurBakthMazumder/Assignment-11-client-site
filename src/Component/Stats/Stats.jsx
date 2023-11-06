const Stats = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-[100rem] w-full mx-auto ">
      <div className="border-2 rounded border-blue-400 flex justify-center items-center ">
        <div className="flex flex-col md:flex-row justify-around items-center my-10 gap-10">
          <div className="text-center">
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
              100%
            </p>
            <p className="mt-1 text-gray-500">Foods quality</p>
          </div>

          <div className="text-center">
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
              1,200+
            </p>
            <p className="mt-1 text-gray-500">Delivered</p>
          </div>

          <div className="text-center">
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
              200+
            </p>
            <p className="mt-1 text-gray-500">Delivered this month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

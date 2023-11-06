import Heading from "../UI/Heading";

const WhyDonateFood = () => {
  return (
    <div className="max-w-[100rem] w-full mx-auto my-10 md:my-20 px-4 sm:px-6 lg:px-8">
      <Heading>Why we donate food</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <img src="/whyDonate.png" alt="" className="w-full"/>
        <div className="hs-accordion-group divide-y divide-gray-200">
          <div
            className="hs-accordion pb-3 active"
            id="hs-basic-with-title-and-arrow-stretched-heading-one"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 "
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
            >
             Helping Those in Need: 
              <svg
                className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-one"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <p className="text-gray-600 ">
              Donating food is a tangible way to support individuals and families who may be struggling to put food on the table. It is a compassionate response to the basic need for nourishment.


              </p>
            </div>
          </div>

          <div
            className="hs-accordion pt-6 pb-3"
            id="hs-basic-with-title-and-arrow-stretched-heading-two"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 "
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
            >
             Reducing Food Waste:
              <svg
                className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-two"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <p className="text-gray-600 ">
               Food donation is an effective means to prevent perfectly edible food from going to waste. By redistributing surplus or excess food, we can minimize the environmental impact of food waste and contribute to sustainability.
              </p>
            </div>
          </div>

          <div
            className="hs-accordion pt-6 pb-3"
            id="hs-basic-with-title-and-arrow-stretched-heading-three"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 "
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
            >
              Community Engagement:
              <svg
                className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <p className="text-gray-600 ">
               Many people donate food as a way to connect with their local communities and create a sense of togetherness. It is a way to give back and build a stronger, more caring society.
              </p>
            </div>
          </div>

          <div
            className="hs-accordion pt-6 pb-3"
            id="hs-basic-with-title-and-arrow-stretched-heading-four"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 "
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
            >
              Tax Benefits:
              <svg
                className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-four"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
            >
              <p className="text-gray-600 ">
               In some countries, individuals and businesses may be eligible for tax benefits when they donate food. This can be an additional incentive to support food donation initiatives.
              </p>
            </div>
          </div>

          <div
            className="hs-accordion pt-6 pb-3"
            id="hs-basic-with-title-and-arrow-stretched-heading-five"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 "
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
            >
              Corporate Social Responsibility (CSR):
              <svg
                className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-five"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
            >
              <p className="text-gray-600 ">
               Companies often engage in food donation programs as part of their corporate social responsibility efforts. It is a way for businesses to demonstrate their commitment to social and environmental causes.
              </p>
            </div>
          </div>

          <div
            className="hs-accordion pt-6 pb-3"
            id="hs-basic-with-title-and-arrow-stretched-heading-six"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 "
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
            >
              Religious or Cultural Values: 
              <svg
                className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-six"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
            >
              <p className="text-gray-600 ">
              Some individuals or organizations may be guided by religious or cultural principles that emphasize charity and helping those
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDonateFood;

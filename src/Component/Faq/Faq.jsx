import Heading from "../UI/Heading";

const Faq = () => {
  return (
    <div>
      <div className="max-w-[100rem] w-full mx-auto my-10 md:my-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <Heading>Frequently Asked Questions</Heading>
        </div>

        <div className="mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
            <div>
              <h3 className="text-lg font-semibold ">
                What is the purpose of this food donation website?
              </h3>
              <p className="mt-2 text-justify">
                This website is dedicated to connecting individuals and
                organizations who want to donate food with those in need. We
                facilitate the process of food donation to reduce food waste and
                help those who are food insecure.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold ">
                How do I donate food through this website?
              </h3>
              <p className="mt-2 text-justify">
                To donate food, you can start by creating an account or using
                the guest donation option. Then, you can browse through the
                available donation opportunities, select the one that suits you,
                and follow the provided instructions for drop-off or pickup.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold ">
                Who can donate food on this website?
              </h3>
              <p className="mt-2 text-justify">
                Anyone can donate food on our platform. Individual donors,
                restaurants, supermarkets, and other food-related businesses are
                all welcome to contribute.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold ">
                Can I donate perishable items, or should I stick to
                non-perishable foods?
              </h3>
              <p className="mt-2 text-justify">
                You can donate both perishable and non-perishable items. Just
                make sure to provide information about the storage and
                expiration dates for perishable items to ensure their safe
                distribution.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold ">
                Do I need to pay for transportation to donate food?
              </h3>
              <p className="mt-2 text-justify">
                Transportation costs vary depending on the donation opportunity.
                Some organizations may offer to pick up the food, while others
                may require you to drop it off. Make sure to check the details
                provided for each donation opportunity.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold ">
                Is my food donation tax-deductible?
              </h3>
              <p className="mt-2 text-justify">
                In many countries, food donations to registered nonprofit
                organizations are tax-deductible. Check with the recipient
                organization and your local tax authority for specific
                guidelines and requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

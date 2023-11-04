import UseAuth from "../../../Hock/UseAuth";

const SocialSingIn = () => {
  const {singInWithGoogle} = UseAuth()
  const handleSocialLogin = media => {
    media()
    .then(result=> {
      console.log(result);
    })
    .catch(err=> {
      console.log(err);
    })
  }
  return (
    <div>
      <button
      onClick={()=> handleSocialLogin(singInWithGoogle)}
        type="button"
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-blue-500 font-medium bg-white text-blue-600 shadow-sm align-middle hover:bg-blue-500 hover:text-white"
      >
        Sing in with Google
      </button>
      <div className="flex items-center my-5">
        <div className="bg-blue-600 h-[2px] w-full"></div>
        <h1 className="text-xl">OR</h1>
        <div className="bg-blue-600 h-[2px] w-full"></div>
      </div>
    </div>
  );
};

export default SocialSingIn;

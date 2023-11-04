import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-blue-600 border-b border-white/[.5] text-sm py-3 sm:py-0">
      <nav
        className="relative max-w-[100rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            to={"/"}
            className="flex items-center gap-2 text-2xl font-semibold text-white"
            aria-label="Brand"
          >
            <img
              src="/logo.png"
              alt=""
              className="h-10 border rounded-full px-[6px] py-2 border-black"
            />
            Foodies
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-white/[.5] font-medium text-white/[.5] shadow-sm align-middle hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-medium text-white text-base underline sm:py-6"
                  : "font-medium text-white text-base sm:py-6"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/available-food"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-medium text-white text-base underline sm:py-6"
                  : "font-medium text-white text-base sm:py-6"
              }
            >
              Available Food
            </NavLink>
            <NavLink
              to={"/add-food"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-medium text-white text-base underline sm:py-6"
                  : "font-medium text-white text-base sm:py-6"
              }
            >
              Add Food
            </NavLink>
            <NavLink
              to={"/manage-my-food"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-medium text-white text-base underline sm:py-6"
                  : "font-medium text-white text-base sm:py-6"
              }
            >
              Manage My Food
            </NavLink>
            <NavLink
              to={"/my-food-request"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-medium text-white text-base underline sm:py-6"
                  : "font-medium text-white text-base sm:py-6"
              }
            >
              My Food Request
            </NavLink>
            <Link
              to={"/sing-in"}
              className="flex items-center gap-x-2 font-medium text-white text-base sm:border-l sm:border-white/[.3] sm:my-6 sm:pl-6"
            >
              Log in
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

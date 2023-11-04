
const Footer = () => {
    return (
        <footer className="bg-blue-600 border-t border-white/[.5]">

        <div className="w-full max-w-[100rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto ">
  {/* <!-- Grid --> */}
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
    <div className="col-span-full hidden lg:col-span-1 lg:block">
      <a className="flex-none text-2xl font-semibold dark:text-white" href="#" aria-label="Brand">Foodies</a>
      <p className="mt-3 text-xs sm:text-sm text-gray-300">© 2022 Foodies.</p>
    </div>
    {/* <!-- End Col --> */}

    <div>
      <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Product</h4>

      <div className="mt-3 grid space-y-3 text-sm">
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">Pricing</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">Changelog</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">Docs</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">Download</a></p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div>
      <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Company</h4>

      <div className="mt-3 grid space-y-3 text-sm">
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">About us</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">Blog</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">Careers</a> <span className="inline text-blue-600 dark:text-blue-500">— We&#39;re hiring</span></p>
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">Customers</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">Newsroom</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">Sitemap</a></p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div>
      <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Resources</h4>

      <div className="mt-3 grid space-y-3 text-sm">
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">Community</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">Help & Support</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">eBook</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">What&#39;s New</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">Status</a></p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div>
      <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Developers</h4>

      <div className="mt-3 grid space-y-3 text-sm">
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">Api</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">Status</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">GitHub</a> <span className="inline text-blue-600 dark:text-blue-500">— New</span></p>
      </div>

      <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Industries</h4>

      <div className="mt-3 grid space-y-3 text-sm">
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">Financial Services</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-100 hover:text-gray-300 " href="#">Education</a></p>
      </div>
    </div>
    {/* <!-- End Col --> */}
  </div>
  {/* <!-- End Grid --> */}

</div>
        </footer>
    );
};

export default Footer;
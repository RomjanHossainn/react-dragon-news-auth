import instraGram  from '../../assets/Instagram.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
import qzone1 from '../../assets/qZone1.png'
const RightSideNavbar = () => {
    return (
        <div>
           <div className="">
            <h2 className="text-2xl font-semibold mb-3">Login With</h2>
            <button
                className="group w-full mb-2 h-12 px-6 border-2 border-gray-300 rounded-md transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                    <div className="relative flex items-center space-x-4 justify-center">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg"
                                className="absolute left-0 w-5" alt="google logo"/>
                                 <span
                                     className="block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue
                                            with Google
                                </span>
                        </div>
            </button> 
            <button
                className="group w-full h-12 px-6 border-2 border-gray-300 rounded-md transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                    <div className="relative flex items-center space-x-4 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        className="absolute left-0 w-5 text-gray-700" viewBox="0 0 16 16">
                        <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                                            </path>
                                        </svg>
                                <span
                                 className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition dark:text-white duration-300 group-hover:text-blue-600 sm:text-base">Continue
                                    with Github
                                </span>
                            </div>
                </button>
           </div>
           <div className="mt-12">
           <h2 className="text-2xl font-semibold mb-3 text-[#403F3F]">Find Us On</h2>
           <div className='border rounded-lg'>
           <a href='#' 
                className="px-4  items-center w-full py-2 border-b flex gap-2 border-slate-200  text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <rect width="30" height="30" rx="15" fill="#F3F3F3"/>
                <path d="M18.2586 16.2051L18.6472 13.6456H16.2158V11.9854C16.2158 11.2851 16.5548 10.6019 17.6438 10.6019H18.75V8.42294C18.75 8.42294 17.7466 8.25 16.7877 8.25C14.7843 8.25 13.476 9.47611 13.476 11.6949V13.6456H11.25V16.2051H13.476V22.3928C13.9229 22.4637 14.3801 22.5 14.8459 22.5C15.3117 22.5 15.7689 22.4637 16.2158 22.3928V16.2051H18.2586Z" fill="#3B599C"/>
                </svg>
                Facebook
            </a>
           <a href='#' 
                className="px-4  items-center w-full py-2 border-b flex gap-2 border-slate-200  text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <rect width="30" height="30" rx="15" fill="#F3F3F3"/>
                <path d="M12.7228 20.25C11.0765 20.25 9.54175 19.8205 8.25 19.0793C9.34674 19.143 11.2822 18.9905 12.4861 17.9604C10.6751 17.8859 9.85835 16.64 9.75182 16.1075C9.90569 16.1608 10.6396 16.2246 11.0539 16.0756C8.97059 15.607 8.651 13.967 8.72202 13.4665C9.11263 13.7115 9.77549 13.7967 10.0359 13.7754C8.09467 12.5294 8.79304 10.6552 9.13631 10.2505C10.5294 11.9818 12.6172 12.9541 15.2001 13.0082C15.1514 12.8166 15.1257 12.6171 15.1257 12.4123C15.1257 10.9419 16.4506 9.75 18.0849 9.75C18.9388 9.75 19.7082 10.0754 20.2483 10.5959C20.819 10.4759 21.6777 10.1951 22.0976 9.95233C21.8859 10.6339 21.2271 11.2024 20.8286 11.4131C20.8254 11.4059 20.8319 11.4203 20.8286 11.4131C21.1787 11.3656 22.1258 11.2024 22.5 10.9746C22.315 11.3575 21.6165 11.9941 21.0433 12.3505C21.1499 16.5695 17.5514 20.25 12.7228 20.25Z" fill="#58A7DE"/>
                </svg>
                Twitter
            </a>
           <a href='#' 
                className="px-4  items-center w-full py-2 border-b flex gap-2 border-slate-200  text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <img src={instraGram} alt="" />
                Instragram
            </a>
           </div>
           <div className='mt-12 bg-[#F3F3F3] p-5 rounded-lg'>
           <h2 className="text-2xl font-semibold mb-3 text-[#403F3F]">Q zone </h2>
           <img src={qzone1} alt="" />
           <img src={qzone2} alt="" />
           <img src={qzone3} alt="" />
           </div>
           </div>
           
        </div>
    );
};

export default RightSideNavbar;
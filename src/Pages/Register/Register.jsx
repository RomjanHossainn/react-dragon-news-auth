import Navbar from "../../ShareComponets/Navbar/Navbar";

const Register = () => {
    return (
        <div className="py-8">
            <Navbar></Navbar>
            <div>
                <form className=" sm:w-3/4 md:w-2/3 lg:w-2/4 xl:w-2/5 mx-auto">
                    <h2 className="text-3xl font-bold text-gray-600 text-center border-b pb-8">Login your account</h2>
                    <div className="py-8 space-y-6">
                        <div>
                            <label className="text-lg block pb-1">Your Name</label>
                            <input className="w-full rounded-md bg-gray-200 px-2 outline-none py-3" type="text" name="name" id="" placeholder="Enter Your Name"/>
                        </div>
                        <div>
                            <label className="text-lg block pb-1">Photo URL</label>
                            <input className="w-full rounded-md bg-gray-200 px-2 outline-none py-3" type="text" name="photoURL" id="" placeholder="Enter Photo URL"/>
                        </div>
                        <div>
                            <label className="text-lg block pb-1">Email Address</label>
                            <input className="w-full rounded-md bg-gray-200 px-2 outline-none py-3" type="email" name="email" id="" placeholder="Enter Your Email"/>
                        </div>
                        <div>
                            <label className="text-lg block pb-1">Your Password</label>
                            <input className="w-full rounded-md px-2 outline-none bg-gray-200 py-3" type="password" name="password" id="" placeholder="Enter Your Password"/>
                        </div>
                        <div>
                            <input type="button" className=" btn btn-neutral w-full text-center" value="Login" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
const Login = () => {
    const { setUser, handleLogin, handleGoogleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const nav = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [error,setError] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("passwords");
        handleLogin(email, password).then(res => {
                setUser(res.user);
                location?.state? nav(`${location?.state}`) : nav("/");
        }
        ).catch(e =>{
            setError({...error,login:e.code})
        });
    }
    const handleGoogleSignInBtn = () => {
        handleGoogleSignIn().then(result => {
            setUser(result.user);
            location?.state ? nav(`${location?.state}`) : nav("/");
        }
        ).catch(e => {
            console.log(e.code);
        }
        )
    }
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-[#edf9f7] font-outfit">
            <div className="flex flex-col gap-6 animate-expand pt-5 md:pt-0">

                {/* Back */}
                <NavLink
                    to="/"
                    className="flex items-center gap-2 text-[#627884] hover:text-[#1abc9c]"
                >
                    <ArrowLeft size={16} />
                    <span>Back to Home</span>
                </NavLink>

                {/* Card */}
                <div className="shadow-mint md:w-[530px] rounded-xl bg-white flex flex-col items-center p-8">

                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-[#1abc9c] flex items-center justify-center text-white font-bold">
                            T
                        </div>
                        <h2 className="text-3xl font-bold text-[#1d2930]">
                            Teeth<span className="text-[#1abc9c]">Wizard</span>
                        </h2>
                    </div>

                    <p className="text-[#627884] text-base mb-6">
                        Sign in to your account
                    </p>

                    {/* 🔑 Shared Width Wrapper */}
                    <div className="w-5/6 flex flex-col items-center">

                        {/* Google */}
                        <button onClick={handleGoogleSignInBtn} className="w-full flex justify-center items-center gap-2 py-2 px-3 border border-[#dae7e7] rounded-xl text-[#1d2930] hover:text-[#1abc9c] hover:bg-[#d6f5ef]">
                            <FaGoogle />
                            <span className="capitalize">Continue with Google</span>
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-3 my-6 w-full">
                            <hr className="flex-1" />
                            <p className="text-[#627884] text-sm">Or continue with</p>
                            <hr className="flex-1" />
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">

                            {/* Email */}
                            <div className="w-full">
                                <label className="text-sm font-medium text-[#1d2930]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    name="email"
                                    required
                                    className="w-full mt-1 px-4 py-2 border border-[#dae7e7] rounded-xl outline-none focus:border-[#1abc9c]"
                                />
                            </div>

                            {/* Password */}
                            <div className="w-full">
                                <label className="text-sm font-medium text-[#1d2930]">
                                    Password
                                </label>
                                <div className="relative mt-1">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        name="passwords"
                                        required
                                        className="w-full px-4 py-2 border border-[#dae7e7] rounded-xl outline-none focus:border-[#1abc9c]"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#627884]"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>
                            {error?.login && <p className="label text-base font-medium text-red-500">{error?.login.slice(5,23)}</p>}
                            {/* Sign In */}
                            <button
                                type="submit"
                                className="w-full mt-2 bg-[#1abc9c] hover:bg-[#17a589] text-white py-2 rounded-xl font-semibold"
                            >
                                Sign In
                            </button>
                        </form>
                        {/* Footer */}
                        <p className="text-sm text-[#627884] mt-2">
                            Don&apos;t have an account?{" "}
                            <NavLink
                                to="/register"
                                className="text-[#1abc9c] hover:underline font-medium"
                            >
                                Sign up
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
const Register = () => {
    const nav = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [defaultError,setDefaultError] = useState({});
    const { handleRegister, setUser, updatedProfile, handleGoogleSignIn } = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords don't match!");
            return;
        };
        if( password.length<6)
            {
                setError("Password must contain at least 6 characters!");
                return;
            };
        if(!(/(?=.*[a-z])/).test(password))
            {
                setError("Password must contain at least one lowercase latter!");
                return;
            };
        if(!(/(?=.*[A-Z])/).test(password))
            {
                setError("Password must contain at least one uppercase latter!");
                return;
            };
        if(!(/(?=.*[0-9])/).test(password))
            {
                setError("Password must contain at least one number!");
                return;
            };
        if(!(/(?=.*[^a-zA-Z0-9])/).test(password))
            {
                setError("Password must contain at least one special character!");
                return;
            };
        setError("");
        const form = new FormData(e.target);
        const email = form.get("email");
        const pass = form.get("password");
        const photoURLs = form.get("photo_url");
        handleRegister(email, pass).then(result => {
            setUser(result.user);
            updatedProfile({
                photoURL: photoURLs
            }).then(() => {
                nav('/')
            }).catch(e => {
                console.log(e.code)
            })
        }
        ).catch(e =>{
            setDefaultError({...defaultError,login:e.code});
        } );
    }
    const handleGoogle = () => {
        handleGoogleSignIn().then(result => {
            setUser(result.user);
            nav('/');
        }
        ).catch(e => {
            console.log(e.code)
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
                        <button onClick={handleGoogle} className="w-full flex justify-center items-center gap-2 py-2 px-3 border border-[#dae7e7] rounded-xl text-[#1d2930] hover:text-[#1abc9c] hover:bg-[#d6f5ef]">
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
                        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>

                            {/* Email */}
                            <div className="w-full">
                                <label className="text-sm font-medium text-[#1d2930]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                    name="email"
                                    className="w-full mt-1 px-4 py-2 border border-[#dae7e7] rounded-xl outline-none focus:border-[#1abc9c]"
                                />
                            </div>
                            <div className="w-full">
                                <label className="text-sm font-medium text-[#1d2930]">
                                    Photo URL
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your photo url"
                                    required
                                    name="photo_url"
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
                                        value={password}
                                        required
                                        name="password"
                                        onChange={e => setPassword(e.target.value)}
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
                            <div className="w-full">
                                <label className="text-sm font-medium text-[#1d2930]">
                                    Confirm Password
                                </label>
                                <div className="relative mt-1">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Confirm your password"
                                        value={confirmPassword}
                                        required
                                        onChange={e => setConfirmPassword(e.target.value)}
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
                            {error && <p className="text-red-500 text-sm label">{error}</p>}
                            {defaultError?.login && <p className="text-red-500 text-sm label">{defaultError?.login.slice(5,18)}</p>}
                            <button
                                type="submit"
                                className="w-full mt-2 bg-[#1abc9c] hover:bg-[#17a589] text-white py-2 rounded-xl font-semibold"
                            >
                                Create Account
                            </button>
                        </form>
                        {/* Footer */}
                        <p className="text-sm text-[#627884] mt-2">
                            Already have an account?{" "}
                            <NavLink
                                to="/login"
                                className="text-[#1abc9c] hover:underline font-medium"
                            >
                                Sign in
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;
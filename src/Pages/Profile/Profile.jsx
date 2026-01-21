import { Calendar, Mail, User } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="bg-[#fcfdfd] min-h-screen font-outfit">
            <div className="pt-5 md:pt-20 w-11/12 md:w-2/5 mx-auto flex flex-col items-start gap-10">
                <h1 className='lg:text-4xl md:text-2xl text-xl w-[300px] md:w-[380px] mt-3 md:mt-0 lg:w-auto text-center md:text-start pl-14 md:pl-0 text-[#1d2930] font-bold'>My <span className='text-[#1abc9c]'>Profile</span></h1>
                <div className="bg-white shadow-lite rounded-2xl w-full h-auto p-8 flex flex-col gap-5 justify-center items-center">
                    {
                        user?.photoURL ? 
                            <img className="w-16 h-16 rounded-full" src={user?.photoURL} alt="userId" />
                    : <div className='w-16 h-16 flex justify-center items-center bg-[#e3f4f1] rounded-full'>
                        <User size="40" className='text-[#1abc9c]' />
                    </div>
                    }
                    <p className=" text-[#627884] text-base text-center  mx-auto">Member Since {user?.metadata.lastSignInTime}</p>
                    <div className="w-full h-auto rounded-xl bg-[#e9f8f5] flex justify-start items-center gap-3 px-2 md:px-6 py-4 mt-5">
                            <div className='w-12 h-12 px-2 md:px-0 flex justify-center items-center bg-[#c0ede3] rounded-full'>
                                <Mail size="24" className='text-[#1abc9c]' />
                            </div>
                            <div className="flex flex-col">
                                <h6 className="text-[#627884] text-sm md:text-base">{
                                        user?.email ? user?.email : "Email Address"
                                    }</h6>
                            </div>
                        </div>
                        <div className="w-full h-auto rounded-xl bg-[#e9f8f5] flex justify-start items-center gap-3 px-2 md:px-6 py-4 mt-5">
                            <div className='w-12 h-12 flex justify-center items-center bg-[#c0ede3] rounded-full'>
                                <Calendar size="24" className='text-[#1abc9c]' />
                            </div>
                            <div className="flex flex-col">
                                <h6 className="text-[#627884]">Account Status</h6>
                                <p className="text-lg font-bold text-[#1abc9c]">{user?.email ? "Active" : "Not Active"}</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
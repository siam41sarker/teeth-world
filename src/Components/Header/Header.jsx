import { useContext, useState } from 'react';
import logo from '../../assets/logohere.png';
import userIcon from '../../assets/userIcon.png'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Header = () => {
    const {user, handleLogOut} = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isScroll,setIsScroll] = useState(false);
    useEffect(()=>{
        const handdleScroll = () =>
            {
                setIsScroll(window.scrollY > 50);
            };
            window.addEventListener('scroll',handdleScroll);
            return ()=>window.removeEventListener('scroll',handdleScroll)
    },[]);
    
    return (
        <header className={`w-full font-outfit h-auto transition-all duration-300 z-50 ${
            isScroll ? 'fixed top-0 bg-[#fcfdfd]/80 backdrop-blur-md shadow-md' : 'bg-[#effaf8] relative'
        }`}>
            <div className=" w-10/12 lg:w-10/12 md:w-11/12 mx-auto flex items-center justify-between pt-10 md:mt-0 lg:pt-0">
                <div className="md:w-1/5 ">
                    <NavLink to='/'><img className='w-24  md:w-[150px] h-auto' src={logo} alt="logo" /></NavLink>
                </div>
                <nav className='text-base font-bold text-[#1abc9c]'>
                    <ul className='hidden lg:flex gap-10'>
                        <NavLink to="/" className='hover:text-[#6e6b6a]'>Home</NavLink>
                        <NavLink to="/all-treatments" className='hover:text-[#6e6b6a]'>All Treatments</NavLink>
                        <NavLink to="/profile" className='hover:text-[#6e6b6a]'>Profile</NavLink>
                        <NavLink to="my-appointments" className='hover:text-[#6e6b6a]'>My Appointments</NavLink>
                    </ul>
                </nav>
                <div className='flex justify-center items-center gap-2'>
                    <div className='w-10 h-10 relative left-12 md:left-0'>
                        {
                            user?.photoURL ? <img  referrerPolicy="no-referrer" className='w-full object-cover rounded-full' src={`${user?.photoURL}`} alt="userIcon" /> : <img className='w-full object-cover' src={userIcon} alt="userIcon" />
                        }
                    </div>
                    {
                        user?.email ? <button onClick={handleLogOut} className='btn bg-[#1abc9c] hover:bg-[#7cebd3] border-none text-white hidden lg:block'>Log Out</button> : <NavLink to="/login"> <button className='btn bg-[#1abc9c] hover:bg-[#7cebd3] border-none text-white hidden lg:block'>Login</button></NavLink>
                    }
                </div>
                <button className='lg:hidden ' onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen ? <svg className="w-6 h-6 md:w-10 md:h-10 text-[#1abc9c] absolute left-[350px] md:left-[740px] md:top-16 z-10 md:z-50 top-8" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg> :
                            <svg className="w-6 h-6 md:w-10 md:h-10 text-[#1abc9c]" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                    }
                </button>
            </div>
            {
                isOpen && <div className='flex lg:hidden flex-col gap-3 w-2/3 bg-white shadow-md rounded-xl absolute left-[123px] md:left-[250px] top-5 md:top-14 md:z-20'>
                    <nav className='lg:hidden text-base font-bold text-[#6e6b6a]'>
                        <ul className='flex lg:hidden flex-col gap-2 items-center p-5'>
                            <NavLink to="/" className='hover:text-[#6e6b6a]'>Home</NavLink>
                            <NavLink to="/all-treatments" className='hover:text-[#6e6b6a]'>All Treatments</NavLink>
                            <NavLink to="/profile" className='hover:text-[#6e6b6a]'>Profile</NavLink>
                            <NavLink to="my-appointments" className='hover:text-[#6e6b6a]'>My Appointments</NavLink>
                        </ul>
                    </nav>
                    <div className='lg:hidden flex justify-center px-4 pb-2'>
                        {
                            user?.email ? <button onClick={handleLogOut} className='btn  bg-[#1abc9c] hover:bg-[#7cebd3] border-none w-full text-white'>Log out</button> : <NavLink to="/login" className='btn  bg-[#1abc9c] hover:bg-[#7cebd3] border-none w-full text-white'>Login</NavLink>
                        }
                    </div>
                </div>
            }
        </header>
    );
}

export default Header;
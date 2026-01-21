import { NavLink } from 'react-router-dom';
import bannerImage from '../../assets/bannerImage.jpg';
import { Sparkles, ArrowRight } from "lucide-react";
const Banner = () => {
    return (
        <div className="w-full h-[950px] md:h-auto bg-[#effaf8] font-outfit -mt-10 md:-mt-0">
            <div className="lg:w-10/12 md:w-11/12 md:px-10 mx-auto flex flex-col md:flex-row gap-5 justify-center items-center md:items-stretch px-4  py-[90px]">
                <div className='w-full md:w-1/2 flex flex-col gap-7 md:gap-10'>
                    <div className='w-[300px] mx-auto md:mx-0  bg-[#d8f3ee] rounded-full flex gap-2 justify-center items-center py-2 px-3'>
                        <Sparkles className='text-[#1abc9c]' size="16"/>
                        <h6 className='text-lg text-[#1abc9c]'>Professional Dental Care</h6>
                    </div>
                    <h1 className='lg:text-6xl md:text-4xl text-xl w-[300px] md:w-[380px] mt-3 md:mt-0 lg:w-auto text-center md:text-start pl-14 md:pl-0 text-[#1d2930] font-bold'>Your Perfect <span className='text-[#1abc9c]'>Smile</span> Starts Here</h1>
                    <p className='text-lg text-[#627884] w-[380px] pr-6 md:pr-0 md:text-start  text-center md:w-[400px] lg:w-[504px] -mt-2 md:-mt-0'>Experience world-class dental treatments with our team of expert dentists. Book your appointment today and discover the difference quality care makes.</p>
                   <div className='flex gap-6 w-full justify-center md:justify-start'>
                        <NavLink to="/all-treatments" className='btn text-white bg-[#2fc3a4] flex gap-2 hover:gap-3 hover:bg-[#7cebd3] border-solid border-[#2fc3a4] hover:border-[#7cebd3]'>
                            <p>Explore Treatments</p>
                            <ArrowRight size="16"/>
                        </NavLink>
                        <NavLink to='/my-appointments' className='btn bg-white border border-[#edeff0]'>My Appointment</NavLink>
                   </div>
                   <div className='flex justify-center md:justify-start gap-10 mt-5'>
                        <div className='flex flex-col gap-1 text-center md:text-left'>
                            <p className='text-[#1abc9c] text-3xl font-semibold'>15+</p>
                            <p className='text-sm text-[#627884] '>Years Experience</p>
                        </div>
                        <div className='flex flex-col gap-1 text-center md:text-left'>
                            <p className='text-[#1abc9c] text-3xl font-semibold'>10K+</p>
                            <p className='text-sm text-[#627884] '>Happy Patients</p>
                        </div>
                        <div className='flex flex-col gap-1 text-center md:text-left'>
                            <p className='text-[#1abc9c] text-3xl font-semibold'>20+</p>
                            <p className='text-sm text-[#627884] '>Expert Dentists</p>
                        </div>
                   </div>
                </div>
                <div className='w-full md:w-1/2 mt-10 md:mt-0 relative md:left-12 lg:left-10'>
                    <img className='w-full h-auto md:h-full object-cover rounded-3xl shadow-lg' src={bannerImage} alt="bannerImage" />
                    <div className='w-[215px] h-20 flex gap-3 justify-center items-center rounded-2xl shadow-mint bg-white relative -top-12 -left-2 md:-top-16 md:-left-5 mt-4 md:mt-0 animate-float'>
                        <div className='flex justify-center items-center rounded-full w-10 h-10 bg-[#d8f3ee]'>
                            <Sparkles className='text-[#1abc9c]' size="16"/>
                        </div>
                        <div className='flex flex-col gap-1'>
                             <h5 className='text-lg text-[#1d2930] font-semibold'>Rated 4.9/5</h5>
                             <p className='text-sm text-[#627884]'>By 2000+ patients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
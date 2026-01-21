import { Quote } from 'lucide-react';
import EachFeed from '../EachFeed/EachFeed';
const Testimonials = ({ testimonial }) => {
    return (
        <div className='mt-10 md:mt-24 bg-[#f9fbfb] font-outfit pb-8 md:pb-12'>
            <div className='flex flex-col items-center w-10/12 mx-auto pt-10 md:pt-24 gap-6'>
                <div className='w-14 h-14 flex justify-center items-center bg-[#e3f4f1] rounded-full'>
                    <Quote size="24" className='text-[#1abc9c]' />
                </div>
                <div className='flex flex-col items-center gap-4'> 
                    <h1 className="text-center text-4xl font-bold text-[#1d2930]">
                        What Our <span className="text-[#1abc9c]">Patients</span> Say
                    </h1>
                    <p className=" text-[#627884] text-base text-center md:w-[700px] mx-auto">Real stories from real patients. See why thousands trust TeethWizard for their dental care.</p>
                </div>
                <div className='mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {
                            testimonial.map(eachFeed=><EachFeed key={eachFeed.id} feed={eachFeed}></EachFeed>)
                        }
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
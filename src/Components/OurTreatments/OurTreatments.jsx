import { NavLink } from "react-router-dom";
import EachCard from "./EachCard/EachCard";
import { ArrowRight } from "lucide-react";
const OurTreatments = ({ data }) => {
    return (
        <div className="bg-[#fcfdfd] font-outfit">
            <h1 className=" pt-10 md:pt-24 text-center text-4xl font-bold text-[#1d2930]">
                Our <span className="text-[#1abc9c]">Treatments</span>
            </h1>
            <p className="mt-7 text-[#627884] text-base text-center md:w-[700px] mx-auto">Discover our comprehensive range of dental services designed to give you the perfect smile you deserve.</p>
            <div className="mt-14 lg:w-11/10 mx-auto md:ml-16 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                {
                    data.slice(0, 4).map(each => <EachCard key={each.id} card={each}></EachCard>)
                }
            </div>
            <div className="mt-10 flex justify-center">
                <NavLink to='/all-treatments' className=' border-none bg-[#d8f3ee] hover:bg-[#2fc3a4] text-[#1abc9c] rounded-xl hover:text-white flex gap-2 hover:gap-3 transition-colors ease-in-out duration-300 justify-center items-center py-3 w-auto  px-3 '>
                    <p className="capitalize text-base text-current font-semibold">Explore Treatments</p>
                    <ArrowRight size="16" className="text-current " />
                </NavLink>
            </div>
        </div>
    );
}

export default OurTreatments;
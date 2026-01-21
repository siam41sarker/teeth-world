import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
const EachCard = ({card}) => {
     const {name,image,description,cost,id} = card;
    return (
        <div className="group overflow-hidden flex flex-col rounded-xl bg-white w-10/12 mx-auto md:mx-0 lg:w-[350px] 2xl:w-[380px] h-auto shadow-lite">
            <div className="w-full max-h-60 overflow-hidden">
                <img className="w-full h-full object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-500 ease-in-out" src={image} alt={name} />
            </div>
            <div className=" pl-5 flex flex-col gap-6 flex-1">
                <h2 className="pt-5  text-2xl font-bold text-[#1d2930]">{name}</h2>
                <p className=" text-[#627884] text-base  mx-auto">{description}</p>
                <div className="flex justify-between items-center pr-5 mt-auto pb-5">
                    <h1 className="text-3xl font-bold text-[#1abc9c]">${cost}</h1>
                    <NavLink to={`/details/${id}`} className=' border-none bg-[#d8f3ee] hover:bg-[#2fc3a4] text-[#1abc9c] rounded-xl hover:text-white flex gap-2 hover:gap-3 transition-colors ease-in-out duration-300 justify-center items-center py-3 w-44  px-3 '>
                        <p className="capitalize text-base text-current font-semibold">checkout more</p>
                        <ArrowRight size="16" className="text-current "/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default EachCard;
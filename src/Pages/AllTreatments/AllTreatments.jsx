import { useLoaderData } from "react-router-dom";
import EachCard from "../../Components/OurTreatments/EachCard/EachCard";
import { useMemo, useState } from "react";
const AllTreatments = () => {
    const treatments = useLoaderData();
    const [search,setSearch] = useState("");
    const filteredData = useMemo(()=>
            {
                return treatments.filter(eachItem=>eachItem.name.toLowerCase().includes(search.toLowerCase()));
            },[search,treatments])
    return (
        <div className="md:w-11/12 mx-auto pt-20 bg-[#FCFDFD] pb-14">
            <div className='flex flex-col items-center gap-4'>
                <h1 className="text-center text-4xl font-bold text-[#1d2930]">
                    All <span className="text-[#1abc9c]">Treatments</span>
                </h1>
                <p className=" text-[#627884] text-base text-center md:w-[650px] mx-auto">Browse our comprehensive range of dental services and find the perfect treatment for your needs.</p>
                {/* Search Box */}
                <div className="w-10/12 max-w-xl">
                    <div className="
            flex items-center gap-2 px-4 py-3 rounded-xl
            border border-[#dae7e7]
            transition-all duration-300
            focus-within:border-[#1abc9c]
            focus-within:ring-2
            focus-within:ring-[#1abc9c]/30
          ">
                        {/* Search Icon */}
                        <svg
                            className="w-5 h-5 text-[#8aa1a8]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>

                        <input
                            type="search"
                            placeholder="Search treatments..."
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                            className="
                w-full outline-none bg-transparent
                text-[#1d2930] placeholder-[#8aa1a8]
              "
                        />
                    </div>
                </div>
                {
                    filteredData.length>0 ? <div className="mt-14 lg:w-11/10 mx-auto md:ml-16 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                        {
                            filteredData.map(eachData=><EachCard key={eachData.id} card={eachData}></EachCard>)
                        }
                    </div> :  <p className=" text-[#627884] text-base text-center md:w-[650px] mx-auto">No Data Found!</p>
                }
            </div>
        </div>
    );
}

export default AllTreatments;
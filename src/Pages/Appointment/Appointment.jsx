import { useContext, useEffect, useState } from "react";
import { deleteFromLs, getDataFromLs } from "../../../public/local";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { Calendar, X } from "lucide-react";
const Appointment = () => {
    const getData = getDataFromLs();
    const { user } = useContext(AuthContext);
    const [selectedData, setSelectedData] = useState([]);
    const [confirmation, setConfirmation] = useState(false);
    const [appointmentCancel, setappointmentCancel] = useState(null);
    useEffect(() => {
        if (user?.email) {
            setSelectedData(getData.filter(eachData => eachData.emails === user?.email));
        }
    }, [user])
    const handleDate = sentDate => {
        const dateData = new Date(sentDate);
        const day = dateData.getDate();
        const year = dateData.getFullYear();
        const month = dateData.toLocaleDateString("un-US", { month: "long" });
        const customizedStr = dayInfo => {
            if (dayInfo > 3 && dayInfo < 21)
                return "th";
            switch (dayInfo % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th"
            }
        }
        return `${month} ${day}${customizedStr(day)}, ${year}`;
    };
    const handleCancel = (each) => {
        setappointmentCancel(each);
        setConfirmation(true);
    }
    const confirmCancel = () => {
        deleteFromLs(appointmentCancel);
        setSelectedData(previous => previous.filter(eachItem => !((eachItem.id === appointmentCancel.id) && (eachItem.date === appointmentCancel.date) && (eachItem.timeSlot === appointmentCancel.timeSlot))));
        setappointmentCancel(null);
        setConfirmation(false);
    };
    const cancelCancel = () => {
        setappointmentCancel(null);
        setConfirmation(false);
    };
    const formatBookedAt = (time) =>
        {
            if(!time)
                {
                    return "_";
                }
            const controlledTime = new Date(time);
            return controlledTime.toLocaleString("un-US",{
                year :"numeric",
                month: "numeric",
                day : "numeric",
                hour : "2-digit",
                minute : "2-digit",
                hour12 : true
            })
        }
    return (
        <div className="bg-[#fcfdfd] min-h-screen font-outfit mb-10">
            <div className="pt-5 md:pt-20 w-11/12 md:w-2/5 mx-auto flex flex-col items-start gap-10">
                <h1 className='lg:text-4xl md:text-2xl text-xl w-[300px] md:w-[380px] mt-3 md:mt-0 lg:w-auto text-center md:text-start pl-14  text-[#1d2930] font-bold'>My <span className='text-[#1abc9c]'>Appointments</span></h1>
                {
                    selectedData.map(each => <div key={each.id} className="bg-white shadow-lite rounded-2xl w-full h-auto p-8 flex flex-col md:flex-row  gap-5  items-stretch">
                        <div className="w-full md:w-1/2 flex ">
                            <img className="rounded-xl shadow-lite w-full h-full object-cover" src={each.image} alt={each.name} />
                        </div>
                        <div className=" w-full md:w-1/2 flex flex-col">
                            <h5 className='text-xl mt-3 md:mt-0 lg:w-auto text-center md:text-start  md:pl-0 text-[#1d2930] font-bold'>{each.name} </h5>
                            <div className="flex gap-5 items-center justify-center">
                                <p className="text-[#627884] text-base mb-6 text-center md:text-start">
                                {each.firstName + " " + each.lastName}</p>
                                <p className="text-[#627884] text-[12px] mb-6 text-center md:text-start mt-1">
                                Booked at : {formatBookedAt(each.bookedAt)}</p>
                            </div>
                            <div className="flex gap-2 text-[#1abc9c] justify-center md:justify-start">
                                <Calendar />
                                <p className="text-lg font-medium">{handleDate(each.date)}</p>
                            </div>
                            <h5 className=' md:text-lg text-base pt-10 md:mt-0 lg:w-auto text-center md:text-start  text-[#1d2930] font-bold '>Time Slot : <span className="text-[#1abc9c]">{each.timeSlot}</span> </h5>
                            <h5 className=' md:text-lg text-base md:mt-0 lg:w-auto text-center md:text-start  text-[#1d2930] font-bold '>Cost : <span className="text-[#1abc9c]">${each.cost}</span> </h5>
                            <h5 className=' md:text-lg text-base pt-1 md:mt-0 lg:w-auto text-center md:text-start  text-[#1d2930] font-bold '>Duration : <span className="text-[#1abc9c]">{each.duration}</span> </h5>
                            <h5 className=' md:text-lg text-base pt-1 md:mt-0 lg:w-auto text-center md:text-start  text-[#1d2930] font-bold '>Phone Number : <span className="text-[#1abc9c]">{each.phones}</span> </h5>
                            <h5 className=' md:text-lg text-base pt-1 md:mt-0 lg:w-auto text-center md:text-start  text-[#1d2930] font-bold '>Addrees : <span className="text-[#1abc9c]">{each.address}</span> </h5>
                            <button onClick={() => handleCancel(each)} className="w-10/12 h-[50px] shadow-md bg-red-500 text-white text-base md:text-xl rounded-xl mt-11 font-semibold flex gap-3 items-center pl-5 ml-6 md:ml-0 hover:font-bold hover:bg-red-600 hover:scale-105 transition-all duration-300 ease-in-out">
                                <X />
                                <p>Cancel Appointment</p>
                            </button>
                        </div>
                    </div>)
                }
            </div>
            {
                confirmation && <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-11/12 md:w-96 shadow-xl">
                        <h3 className="text-xl font-bold text-center text-[#1d2930] mb-4">
                            Cancel Appointment?
                        </h3>
                        <p className="text-[#627884] text-center mb-6">
                            Are you sure you want to cancel this appointment?
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={cancelCancel}
                                className="w-1/2 h-11 border rounded-xl font-semibold hover:bg-gray-100"
                            >
                                No
                            </button>
                            <button
                                onClick={confirmCancel}
                                className="w-1/2 h-11 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600"
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Appointment;
import { useLoaderData, useNavigate, } from "react-router-dom";
import { DollarSign, Clock1, CircleSmall, Calendar, ArrowLeft } from "lucide-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { init, send } from "@emailjs/browser";
import { addToLs, getDataFromLs } from "../../../public/local";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
init(import.meta.env.VITE_publicKey);
const DetailsTreatment = () => {
    const loadedData = useLoaderData();
    const { name, image, description, duration, whatToExpect, cost, id } = loadedData;
    const navigation = useNavigate();
    const { user } = useContext(AuthContext);
    const [selectedDate, setSelectedDate] = useState("");
   
    const handleModalSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const firstName = formData.get("first_name");
        const lastName = formData.get("last_name");
        const emails = formData.get("email");
        const phones = formData.get("phone");
        const date = formData.get("date");
        const address = formData.get("address");
        const timeSlot = formData.get("time_slot");
        const bookedAt = new Date().toISOString();
        const formattedTime = sentTime =>
            {
                 if(!sentTime)
                    return "_";
                const controlledTime = new Date(sentTime);
                return controlledTime.toLocaleString("un-US",{
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12 : true
                })
            }
        const templateParams = {
            first_name: firstName,
            last_name: lastName,
            email: emails,
            phone: phones,
            date: date,
            address: address,
            treatment_name: name,
            treatment_cost: cost,
            treatment_duration: duration,
            timeSlot: timeSlot,
            bookedAt:formattedTime(bookedAt)
        };
        let dataInfo = {
            firstName,
            lastName,
            emails,
            phones,
            date,
            address,
            name,
            cost,
            duration,
            image,
            id,
            timeSlot,
            bookedAt
        };
        const existingData = getDataFromLs();
        const exist = existingData.some(each => each.id === dataInfo.id && each.date === dataInfo.date && each.timeSlot === dataInfo.timeSlot);
        if (exist) {
            toast.warning("This appointment is Already booked!", {
                position: "top-center",
                autoClose: 3000,
                theme: "colored"
            })
            return;
        }
        addToLs(dataInfo);
        send(import.meta.env.VITE_serviceKEY,import.meta.env.VITE_templateKey, templateParams)
            .then((response) => {
                toast.success("Appointment booked! Confirmation email sent.", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "colored"
                })
                e.target.reset();
                setSelectedDate("");
                document.getElementById("my_modal_1").close();
            })
            .catch((err) => {
                console.error("Failed to send email:", err);
                toast.error("Failed to send appointment. Try again later.", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "colored"
                })
            });
    }
    return (
        <div className="bg-[#fcfdfd] p-10 md:max-w-7xl mx-auto font-outfit">
            <button onClick={() => navigation(-1)} className="flex gap-2 justify-center items-center text-[#627884] hover:text-[#1abc9c]">
                <ArrowLeft size="16" />
                <h6>Back to Treatments</h6>
            </button>
            <div className="flex flex-col md:flex-row gap-14 items-stretch mt-9">
                <div className="w-full h-auto  md:w-1/2">
                    <img className="w-full h-[400px] object-cover rounded-2xl shadow-lite" src={image} alt={name} />
                </div>
                <div className="md:w-1/2 flex flex-col md:gap-6 gap-4">
                    <h1 className='lg:text-4xl md:text-2xl text-xl w-[300px] md:w-[380px] mt-3 md:mt-0 lg:w-auto text-center md:text-start pl-6 md:pl-0 text-[#1d2930] font-bold'>{name}</h1>
                    <p className='text-lg text-[#627884] w-[380px] pr-16
                     md:pr-0 md:text-start  text-center md:w-[400px] lg:w-[650px] -mt-2 md:-mt-0 font-medium'>{description}</p>
                    <div className="flex -ml-4 md:-ml-0 flex-col md:flex-row gap-5 md:gap-10">
                        <div className="w-[340px] h-20 rounded-xl bg-[#e9f8f5] flex justify-start items-center gap-3 px-4">
                            <div className='w-10 h-10 flex justify-center items-center bg-[#c0ede3] rounded-full'>
                                <DollarSign size="20" className='text-[#1abc9c]' />
                            </div>
                            <div className="flex flex-col">
                                <h6 className="text-[#627884]">Cost</h6>
                                <p className="text-xl font-bold text-[#1abc9c]">${cost}</p>
                            </div>
                        </div>
                        <div className="w-[340px] h-20 rounded-xl bg-[#e9f8f5] flex justify-start items-center gap-3 px-4">
                            <div className='w-10 h-10 flex justify-center items-center bg-[#c0ede3] rounded-full'>
                                <Clock1 size="20" className='text-[#1abc9c]' />
                            </div>
                            <div className="flex flex-col">
                                <h6 className="text-[#627884]">Duration</h6>
                                <p className="text-xl font-bold text-[#1d2930]">{duration}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className='lg:text-lg md:text-2xl text-xl w-[300px] md:w-[380px] mt-3 md:mt-0 lg:w-auto text-start   text-[#1d2930] font-bold capitalize'>what to expect</h1>
                        <div className="flex flex-col gap-3">
                            {
                                whatToExpect?.map((eachExpect, idx) => <div key={idx} className="flex justify-center items-center gap-2">
                                    <div className='w-6 h-6 shrink-0 flex justify-center items-center bg-[#c0ede3] rounded-full'>
                                        <CircleSmall size="16" className='fill-[#1abc9c] text-[#1abc9c]' />
                                    </div>
                                    <p className='text-base text-[#627884] w-[380px] pr-6 md:pr-0 text-start md:w-[400px] lg:w-[650px] -mt-2 md:-mt-0 font-medium'>{eachExpect}</p>
                                </div>)
                            }
                        </div>
                    </div>
                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className='w-[230px] btn text-white bg-[#2fc3a4] shadow-mint flex gap-2 hover:gap-3 hover:bg-[#7cebd3] border-solid border-[#2fc3a4] hover:border-[#7cebd3]'>
                        <Calendar size={16} />
                        <p>BooK Appointment</p>
                    </button>
                </div>
            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box max-w-lg">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-[#1d2930]">
                            Book Appointment
                        </h3>
                        <form method="dialog">
                            <button className="text-gray-400 hover:text-gray-600 text-xl">
                                ✕
                            </button>
                        </form>
                    </div>
                    <form onSubmit={handleModalSubmit} className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-[#1d2930] font-medium">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    name="first_name"
                                    required
                                    className="input input-bordered w-full focus:outline-none focus:border-[#1abc9c]"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-[#1d2930] font-medium">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    name="last_name"
                                    required
                                    className="input input-bordered w-full focus:outline-none focus:border-[#1abc9c]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-[#1d2930] font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="example@email.com"
                                value={user?.email ? `${user?.email}` : ""}
                                name="email"
                                required
                                className="input input-bordered w-full focus:outline-none focus:border-[#1abc9c]"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-[#1d2930] font-medium">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="+1 (555) 123-4567"
                                name="phone"
                                required
                                className="input input-bordered w-full focus:outline-none focus:border-[#1abc9c]"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-[#1d2930] font-medium">
                                Appointment Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                required
                                min={new Date(new Date().setDate(new Date().getDate() + 1))
                                    .toISOString()
                                    .split("T")[0]}
                                onChange={e => setSelectedDate(e.target.value)}
                                className="input input-bordered w-full focus:outline-none focus:border-[#1abc9c]"
                            />
                        </div>
                        {
                            selectedDate && (
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm text-[#1d2930] font-medium">
                                        Time Slot
                                    </label>
                                    <select
                                        name="time_slot"
                                        required
                                        className="input input-bordered w-full focus:outline-none focus:border-[#1abc9c]"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Select a time slot
                                        </option>
                                        <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                                        <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                                        <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
                                        <option value="6:00 PM - 8:00 PM">6:00 PM - 8:00 PM</option>
                                        <option value="8:00 PM - 10:00 PM">8:00 PM - 10:00 PM</option>
                                    </select>
                                </div>
                            )
                        }
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-[#1d2930] font-medium">
                                Address
                            </label>
                            <input
                                type="text"
                                placeholder="123 Main St, City, State"
                                name="address"
                                required
                                className="input input-bordered w-full focus:outline-none focus:border-[#1abc9c]"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-4 w-full btn text-white bg-[#2fc3a4] hover:bg-[#7cebd3] border-none shadow-mint"
                        >
                            Make Appointment
                        </button>
                    </form>
                </div>
            </dialog>
            <ToastContainer />
        </div>
    );
}
export default DetailsTreatment;
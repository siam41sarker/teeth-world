import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import OurTreatments from "../../Components/OurTreatments/OurTreatments";
import Testimonials from "../../Components/Testimonials/Testimonials";
import { useEffect, useState } from "react";
const Home = () => {
    const data = useLoaderData();
    const [testtimonial,setTestimonial] = useState([]);
    useEffect(()=>
            {
               fetch('/testimonials.json')
               .then(res=>res.json())
               .then(treatData=>setTestimonial(treatData))
               .catch(e=>console.log(e))
            },[])
    return (
        <div>
           <Banner></Banner>
           <OurTreatments data={data}></OurTreatments>
           <Testimonials testimonial={testtimonial}></Testimonials>
        </div>
    );
}

export default Home;
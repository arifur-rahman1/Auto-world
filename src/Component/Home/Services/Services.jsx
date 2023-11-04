import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    return (
        <div>
            <div className="text-center my-20">
            <h1 className="text-xl font-bold text-orange-400">Service</h1>
                <h1 className="font-bold text-5xl">Our Service Area</h1>
                <p className="py-5">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {
                services.map(service=><Service key={service._id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;
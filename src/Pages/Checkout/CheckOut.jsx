import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthCotext } from "../../Providers/Authprovider";

const CheckOut = () => {
    const service=useLoaderData()
    const {title,price,_id,img}=service;
    // console.log(service);
    const {user}=useContext(AuthCotext);

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form =event.target;
    const firstName=form.firstName.value;
    const date=form.date.value;
    const email=form.email.value;
    const phoneNumber=form.yourPhone.value;
    const message=form.message.value;
    // console.log(firstName,date,phoneNumber,email,message);
    const booking={
        customerName:firstName,
        date,
        email,
        phoneNumber,
        message,
        price,
        service:title,
        serviceId:_id,
        img,
        
    }
    // console.log(oreder);
    fetch('http://localhost:5000/bookings',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.insertedId){
            alert('Service is booked successfylly')
        }
    })
    
    }
    return (
        <div>
            <h5 className="text-center text-3xl font-bold py-10">{title}</h5>
        <div className="bg-[#F3F3F3] container mx-auto">
           <div>
           <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center p-10 lg:p-16 gap-5">
                <input name="firstName" type="text" defaultValue={user?.displayName} placeholder="First Name" className="input input-bordered w-full " />
                <input name="date" type="date" placeholder="Last Name" className="input input-bordered w-full " />
                <input name="yourPhone" type="text" placeholder="Your Phone" className="input input-bordered w-full " />
                <input name="email" type="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full " />
                <textarea name="message" id="" cols="30" rows="30" placeholder="Your Message"
                className="input input-bordered w-full col-span-2 h-48"></textarea>
                <button type="submit" className="btn btn-block col-span-2 btn-primary">Order</button>
                </div>
            </form>
           </div>
            
            </div>         
        </div>
    );
};

export default CheckOut;
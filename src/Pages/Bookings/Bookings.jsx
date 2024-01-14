import { useContext, useEffect, useState } from "react";
import { AuthCotext } from "../../Providers/Authprovider";

const Bookings = () => {
    const {user}=useContext(AuthCotext);
    const [bookings,setBookings]=useState([]);
    const url =`http://localhost:5000/bookings?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[user])
    console.log(bookings);
    return (
        <div>
            
        </div>
    );
};

export default Bookings;
import PropTypes from 'prop-types';
const Service = ({service}) => {
    const {title,img,price}=service;
    return (
        <div className="card w-96 border-2 border-gray-200 ">
  <figure className="px-5 pt-5">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
    <p className="text-orange-400 font-bold"> price: ${price}</p>
    {/* <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
    );
};
Service.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    service: PropTypes.object,
}

export default Service;
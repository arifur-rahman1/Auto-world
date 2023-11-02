import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div>
<div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={parts} className="w-1/2 absolute right-0 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
    </div>
    <div className='lg:w-1/2'>
        <h3 className='font-bold text-orange-400 text-xl'>About Us</h3>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <p className="pb-6">Tthe majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>            
        </div>
    );
};

export default About;
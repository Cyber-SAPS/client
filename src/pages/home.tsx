
import { HeroComponent } from '../components/ui/hero'
import { FaFan } from "react-icons/fa";



export default function Home() {
  return (
    <>
      <HeroComponent />
      <section className='container mx-auto px-4 mt-5'>
        <div className='text-center mt-4 bg-blue-300 rounded p-4 mb-3'>
          <h2 className='font-bold'>Mission</h2>
          <p>To provide a professional policing service and in partnership with all communities to create
             a safer environment for all people in St. Lucia. </p>
        </div>
        <div className='text-center mt-4 bg-blue-300 rounded p-4 mb-3'>
          <h2 className='font-bold'>Vision</h2>
          <p>A professional community policing service, providing crime reduction, improved road safety 
            and a safer environment.</p>
        </div>
        <div className='text-center mt-4 p-5 bg-blue-300 rounded mb-4' >
          <h2 className='font-bold'>Core Values</h2>
          <section className='mt-5 py-3 text-left'>
            <h3 className='font-bold flex'> <FaFan color='white' /> &nbsp;Professionalism </h3>
            <p>We are committed to the highest level of competency, excellence, and customer service. 
              We will apply sound judgment and impartiality in the exercise of our duties. 
              </p>
          </section>
          <section className='mt-5 py-3 text-left'>
            <h3 className='font-bold flex'> <FaFan color='white' /> &nbsp;Integrity </h3>
            <p>We will value our customers and each other.
                We will practice honest and responsible 
                behaviour thus generating pr
                ide, confidence and trust
              </p>
          </section>
          <section className='mt-5 py-3 text-left'>
            <h3 className='font-bold flex'> <FaFan color='white' /> &nbsp;Equality </h3>
            <p>We will treat everyone in an impartial, fair
              , sensitive and ethical manner. We will value 
              ourselves, each other and members of our 
              community. We will show understanding and 
              tolerance of similarities and differences.  
              </p>
          </section>
          <section className='mt-5 py-3 text-left'>
            <h3 className='font-bold flex'> <FaFan color='white' /> &nbsp;Teamwork </h3>
            <p>We will facilitate consensus and promote teamwork. We will work together with the 
                members of our communities to achieve our 
                goals, making use of all available skills, 
                abilities and resources.  
              </p>
          </section>
          <section className='mt-5 py-3 text-left'>
            <h3 className='font-bold flex'> <FaFan color='white'/> &nbsp;Working with the community </h3>
            <p>We will continuously create and search for new ways of improving the quality of 
                customer service. We are committed to consultation and working with communities to 
                create a safe environment for everyone.   
              </p>
          </section>
        </div>
      </section>



    </>
  )
}

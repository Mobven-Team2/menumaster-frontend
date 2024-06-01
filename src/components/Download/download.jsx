import './download.scss'

import img1 from '../../assets/svg/image1.svg'


const DownloadPage = () => {
      return(
         <>
         <section className='downloadPage'>
            <div className='downloadPage__img'>
              <img className='downloadPage__img-One'  src={img1} alt="" /> 
              <div className='downloadPage__img-Two'>
                 <button className='downloadPage__img-btn'>Featured</button>
                 <h5 className='downloadPage__img-title'>Title</h5>
                 <p className='downloadPage__img-desc' >Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque.</p>
               </div>
            </div>
         </section>
         
         
         
         
         
         
         
         
         </>


      )



}
export default DownloadPage;
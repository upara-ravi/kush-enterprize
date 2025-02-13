import { useState } from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className='section'>
        <div className='col-6 f-s-div'>
          <img src="/new_images/img_2-Photoroom.png" alt="First Image" />
        </div>
        <div className='col-6 s-s-div'>
          <img src="/new_images/img_1.png" alt="Second Image" />
        </div>
      </section>
      
      
      <section className='section2'>
        <div className='main-image-container'>
          <div className='image-wrapper'>
            <div className='image1-cintainer'>
              <div className='for-image1'>
              </div>
              <div className='text-div'>
                <h2>
                  Premiume Choices
                </h2>
                <p>This is the best choice for who looking for premiume and luxuries.</p>
              </div>
            </div>
            <div className='image1-cintainer'>
              <div className='for-image2'>
              </div>
              <div className='text-div'>
                <h2>
                  Newly Launched NithghWare
                </h2>
                <p>This is the best choice for who looking for premiume and luxuries.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      
      <section className='section'>
        <div className='col-6 f-s-div'>
          <img src="/new_images/img_6-Photoroom.png" alt="First Image" />
        </div>
        <div className='col-6 s-s-div'>
          <img src="/new_images/img_7-Photoroom.png" alt="Second Image" />
        </div>
      </section>
      <section className='section3'>
        <div className='insta'>Follow in Instagram <strong> </strong> <a href="#"> Kush Enterprize</a> </div>
      </section>


      <section className='section4'>
        <div className='prime'>
          <div className='image-container'>
            <img src="/new_images/img_8-Photoroom.png" alt="" />
            <div className="overlay">
              <a href="#">Link Text</a>
            </div>
          </div>
          <div className='image-container'>
            <img src="/new_images/img_10-Photoroom.png" alt="" />
            <div className="overlay">
              <a href="#">Link Text</a>
            </div>
          </div>
          <div className='image-container'>
            <img src="/new_images/img_5-Photoroom.png" alt="" />
            <div className="overlay">
              <a href="#">Link Text</a>
            </div>
          </div>
          <div className='image-container'>
            <img src="/new_images/img_2-Photoroom.png" alt="" />
            <div className="overlay">
              <a href="#">Link Text</a>
            </div>
          </div>
          <div className='image-container'>
            <img src="/new_images/img_3-Photoroom.png" alt="" />
            <div className="overlay">
              <a href="#">Link Text</a>
            </div>
          </div>
        </div>
      </section>

    </>

  );
}

export default App

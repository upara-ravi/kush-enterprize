import { useState } from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <ParallaxProvider>
      <section className='section'>
        <div className='col-6 f-s-div'>
          <Parallax y={[-200, 200]}>
            <img src="/new_images/img_2-Photoroom.png" alt="First Image" />
          </Parallax>
        </div>
        <div className='col-6 s-s-div'>
          <img src="/new_images/img_1.png" alt="Second Image" />
        </div>
      </section>
    </ParallaxProvider>
  );
}

export default App

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

function Test() {
    return (
        <ParallaxProvider>
            <div style={{ height: '200vh' }}>
                <Parallax speed={-1000}>
                    <img src="/new_images/img_2-Photoroom.png" alt="Test Image" />
                </Parallax>
            </div>
        </ParallaxProvider>
    );
}

export default Test;
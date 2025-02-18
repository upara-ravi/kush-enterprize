// src/ParallaxComponent.jsx
import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const ParallaxComponent = () => {
    return (
        <ParallaxProvider>
            <div style={{ height: '200vh', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <div style={{ width: '400px', height: '600px', overflow: 'hidden' }}>
                    <Parallax y={[-50, 50]} tagouter="div">
                        <img
                            src="../../public/new_images/img_2-Photoroom.png"
                            alt="Parallax Image"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Parallax>
                </div>
                <div style={{ width: '400px', height: '600px', overflow: 'hidden' }}>
                    <img
                        src="../../public/new_images/img_1.png"
                        alt="Static Image"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default ParallaxComponent;
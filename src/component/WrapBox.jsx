import React from 'react';
import Container from './ContainerBox';

export default function Wrap() {
    return (
        <div className="w-screen h-screen bg-gray-300 flex items-center justify-center">
            <Container></Container>
        </div>
    );
}


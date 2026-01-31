'use client';

import { TypeAnimation } from 'react-type-animation';

export default function LandingWelcome() {
  return (
    <span className="text-8xl font-bold text-amber-500 dark:text-amber-400">
      {' '}
      <TypeAnimation
        sequence={['FFT Analysis', 2000, 'Texture Analysis', 2000, 'Noise Forensics', 2000]}
        wrapper="span"
        speed={25}
        repeat={Infinity}
        style={{color: '#f5a524'}}
      />
    </span>
  );
}

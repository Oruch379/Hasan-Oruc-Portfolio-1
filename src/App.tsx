import React from 'react';
import Zeyno from "./assets/zeyno.jpg";

export default function App() {
  return (
    <div className=''>
      <div className='flex p-40 justify-between items-center shrink-0'>
        <img src={Zeyno} alt="profile" className='rounded-full h-52 w-52 object-cover animate-pulse' />
        <p className='break-words max-w-sm text-center'>Hasan Oruc tarafından yapılan bir deneme sayfası. Portfolio olarak tasarlandı.</p>
      </div>
    </div>
    );
}



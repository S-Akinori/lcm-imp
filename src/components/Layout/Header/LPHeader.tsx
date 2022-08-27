import Link from 'next/link';
import React, { createContext, useState } from 'react';
import Button from 'src/components/parts/Button';
import ActionButton from 'src/components/parts/Button/ActionButton';
import { actionButtonContent } from 'src/contents/lp/common';

const LPHeader = () => {
  return (
    <>
      <header className="flex items-center fixed top-0 z-40 px-4 bg-main border-b border-main w-full h-16">
        <div className='flex justify-between items-center w-full'>
          <div className='text-xl md:text-3xl' style={{fontFamily: 'Cookie'}}>RING RING</div>
          <div className='flex items-center'>
            <div className='pr-6'><Button href={actionButtonContent.href} target="_blank" color='accent' style={{padding: '0.5rem 2rem 0.5rem 1rem'}}>LINEで無料相談</Button></div>
          </div>
        </div>
      </header>
      <div className="h-16"></div>
    </>
  )
}

export default LPHeader;
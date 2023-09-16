import React from 'react';
import { FaGitlab, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='py-4 flex flex-col flex-shrink-0 items-center border-t-2 border-bgred bg-bgdarkgray text-bgwhite justify-center gap-4'>
      <h3>Designed and Coded by Hasan Oruc</h3>
      <div className='text-3xl flex gap-2'>
      <a href='https://github.com/Oruch379' className='hover:text-bgred transition' target='_blank' rel="noopener noreferrer"><FaGithub /></a>
      <a href='https://gitlab.com/Oruch379' className='hover:text-bgred transition' target='_blank' rel="noopener noreferrer"><FaGitlab /></a>
      <a href='https://www.instagram.com/oruch379/' className='hover:text-bgred transition' target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </div>
  )
}

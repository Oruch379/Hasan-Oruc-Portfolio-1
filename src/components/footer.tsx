import React from 'react'
import { FaGitlab, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='py-4'>
      <div className='text-3xl flex gap-2 justify-center'>
      <FaGithub />
      <FaGitlab />
      <FaInstagram />
      </div>
    </div>
  )
}

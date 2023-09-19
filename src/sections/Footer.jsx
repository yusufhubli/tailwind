import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className=' max-container '>
      <div className=' flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className=' flex flex-col items-start'>
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="" />
          </a>
          <p className=' mt-6 text-base font-montserrat text-white-400 sm:max-w-sm leading-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, ipsam., ipsum dolor
            sit amet consectetur adipisicing elit. Officiis, ipsam.</p>
          <div className=' flex items-center gap-5 mt-8'>
            {socialMedia.map(icon => (
              <div className=' flex justify-center items-center w-12 h-12 bg-white rounded-full '>
                <img src={icon.src} width={24} height={24} alt="" />
              </div>
            ))
            }
          </div>
        </div>
        <div className=' flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap '>
          {footerLinks.map(sec => (
            <div key={sec}>
              <h4 className=' text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{sec.title}</h4>
              <ul>
                {sec.links.map(link => (
                  <li key={link.name} className=' leading-normal mt-3 text-white-400 font-montserrat text-base cursor-pointer hover:text-slate-gray'>
                    <a>{link.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className=' flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className=' flex flex-1 items-center gap-2 font-montserrat cursor-pointer'>
          <img src={copyrightSign} width={20} height={20} className=' rounded-full m-0' alt="" />
          <p>coplright. All rights reserved.</p>
        </div>
        <p className=' font-montserrat cursor-pointer'> Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer

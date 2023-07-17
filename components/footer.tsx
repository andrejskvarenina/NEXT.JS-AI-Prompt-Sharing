'use client'

import Link from "next/link"
import Image from "next/image"

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const Footer = () => {
  return (
    <footer className="w-full h-auto md:h-52 mt-20 glassmorphism flex flex-col md:flex-row gap-10 md:gap-0 sm:justify-around items-center">

      <div className="flex flex-col gap-2">
      <Link href='/' className="flex gap-2 items-center justify-center md:justify-start">
        <Image src='/assets/images/logo.svg' alt="Promptopia Logo" width={40} height={40} className="object-contain hidden sm:flex"/>
        <Image src='/assets/images/logo.svg' alt="Promptopia Logo" width={30} height={30} className="object-contain flex sm:hidden "/>
        <p className="font-satoshi font-semibold text-xl sm:text-3xl text-black tracking-wide">Promptopia</p>
      </Link>

      <p className="text-sm sm:text-base">Where human creativity meets artificial intelligence.</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-lg blue_gradient font-semibold font-satoshi">Subscribe to our Newsletter</p>
        <div className="flex gap-2 items-center">
          <input 
          type="text"
          className="search_input" 
          placeholder="@ Your e-mail adress"
          />
          <button>
            <SendRoundedIcon />
          </button>
        </div>
      </div>


      <div className="flex flex-col gap-2">
        <p className="text-lg orange_gradient font-semibold font-satoshi">FOLLOW US</p>
        <div className="flex items-center justify-evenly">
          <InstagramIcon/>
          <FacebookRoundedIcon />
          <TwitterIcon />
        </div>
      </div>

    </footer>
  )
}

export default Footer
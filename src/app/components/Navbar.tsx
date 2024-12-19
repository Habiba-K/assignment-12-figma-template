import React from 'react'
import Image from 'next/image'
import logo from "@/app/assests/logo.png"
import Button from './Button'
import arrow from "@/app/assests/Vector.png"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className=' w-full h-[92px] bg-[#043873] '>
      <div className='max-w-[1920px] py-4 lg:px-[100px] flex justify-between px-10 lg:justify-around items-center'>
        <Image
            src={logo}
            alt='logo'
            width={191}
            height={34} 
            className=''/>
        <div className='w-[80%] items-center hidden lg:flex gap-4 '>
                <ul className='text-[18px] leading-[23px] text-white flex justify-between '>
                    <li className='pl-8 pr-8'>Product</li>
                    <li className='pr-8'>Solution</li>
                    <li className='pr-8'>resources</li>
                    <li className='pr-8'>Pricing</li>
                </ul>
            <div className='flex whitespace-nowrap justify-center items-center'>
              <Button btnColor= 'text-black ' btnText='Login' bgColor='bg-[#FFE492]' mrl='ml-10' pdy='py-3' pdx='px-5'></Button>
              <div>
                <Button btnColor= 'text-white' btnText='Try Whitepace free ->' bgColor='bg-[#4F9CF9]' mrl='ml-2'pdy='py-3' pdx='px-2'> </Button>
              </div>
            </div>
        </div>

        
        <Sheet>
          <SheetTrigger className="flex lg:hidden ml-44">
          <MenuIcon className="w-5 h-5 text-white" />
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle className="flex justify-start items-center text-[#252B42]">
                  WhiteSpace
                <div className="relative ml-10"></div>
                
              </SheetTitle>
              <SheetDescription className="text-center">
                <div className="flex flex-col gap-6 mt-6 text-[#737373] text-sm">
                  <Link href={"#"} className="text-sm font-normal">
                    Home
                  </Link>
                  <Link href={"#"} className="text-sm font-normal">
                    Product
                  </Link>
                  <Link href={"#"} className="text-sm font-normal">
                    Solution
                  </Link>
                  <Link href={"#"} className="text-sm font-normal">
                    Resources
                  </Link>
                  <Link href={"#"} className="text-sm font-normal">
                    Pricing
                  </Link>
                  <Button btnColor= 'text-black ' btnText='Login' bgColor='bg-[#FFE492]' mrl='ml-0' pdy='py-3' pdx='px-5'></Button>
              <div>
                <Button btnColor= 'text-white' btnText='Try Whitepace free ->' bgColor='bg-[#4F9CF9]' mrl='ml-2'pdy='py-3' pdx='px-2'> </Button>
              </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default Navbar

import Menu from './svg/Menu'
import logo from '.././public/images/logo.png'
import avatar from '.././public/images/avatar.png'
import Image from 'next/image'
import Search from './Search'
import classnames from 'classnames'
import { FiMessageSquare } from 'react-icons/fi'
import { BiBellMinus } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
export default function Navbar() {
  return (
    <div className="flex items-center px-9 border-b-[1px] w-full justify-between">
      <MenuAndLogo />
      <div className="flex items-center">
        <Search />
        <Buttons />
        <Notification />
        <LoginLogout />
      </div>
    </div>
  )
}

function MenuAndLogo() {
  return (
    <div className="flex items-center gap-14 py-4 ">
      <Menu />
      <Image src={logo} height={74} width={85} alt="logo" />
    </div>
  )
}
function Buttons() {
  return (
    <button className="flex items-center gap-4 ml-14">
      <CTAButton title="Active Users" number="06" className="bg-[#87CE83]" />
      <CTAButton title="In Queue" number="06" className="bg-[#FFD37E]" />
    </button>
  )
}

function CTAButton({ title, number, className }) {
  return (
    <div
      className={classnames(
        ' flex items-center gap-2 h-[51px] px-4 rounded-lg ',
        className,
      )}
    >
      <span className="font-bold text-white">{title}</span>
      <div className="h-[37px] flex items-center justify-center w-[37px] bg-white font-bold text-xl text-black rounded-full">
        {number}
      </div>
    </div>
  )
}

function Notification() {
  return (
    <div className="flex items-center gap-4 ml-14">
      {/* message */}
      <button className="relative">
        <FiMessageSquare className="text-3xl" />
        <div className="absolute h-[13px] rounded-full bg- w-[13px] text-[8px] font-semibold bg-[#F45B5B] text-white flex items-center justify-center -top-1 right-0 ">
          10
        </div>
      </button>
      {/* bell */}
      <button className="relative">
        <BiBellMinus className="text-3xl" />
        <div className="absolute h-[13px] rounded-full bg- w-[13px] text-[8px] font-semibold bg-[#F45B5B] text-white flex items-center justify-center -top-1 right-0 ">
          10
        </div>
      </button>
    </div>
  )
}

function LoginLogout() {
  return (
    <div className="flex items-center gap-2 ml-7">
      <div className="flex flex-col items-end   text-sm font-medium ">
        <p>Armand</p>
        <p>Supervisor</p>
      </div>
      <Image
        src={avatar}
        height={48}
        width={48}
        alt="loginAvatar "
        className='rounded-full cursor-pointer'
      />
      <IoIosArrowDown className="text-2xl cursor-pointer" />
    </div>
  )
}

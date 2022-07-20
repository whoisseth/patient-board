import DarkModeBtn from './svg/DarkModeBtn'
import { BsEye } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import Heart from './svg/Heart'
import { FiSearch, FiEyeOff } from 'react-icons/fi'
import LabH from './svg/LabH'
import LabL from './svg/LabL'
import classnames from 'classnames'
import { useStore } from './../store/store'
import player from '../public/images/player.png'
import Image from 'next/image'

const shadowAndRound = 'shadow-[0px_12px_26px_rgba(16,30,115,0.06)] rounded-lg'
export default function Main() {
  return (
    <div className="h-full w-full bg-[#F5F5F5]  px-9 pt-3">
      <Event />
      <EventType />
      <GraphAndTools />
      <Measurement />
      <Finding />
      <Comments />
    </div>
  )
}

function Event() {
  return (
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-2xl font-bold text-[#00072B]">Event</h3>
      <div className="font-medium">
        <span className="text-[#8085E9]">Supervisor Queue</span>
        <span className="text-[#9A9A9A]"> / Event</span>
      </div>
    </div>
  )
}
function EventType() {
  const h1 = 'text-sm font-bold text-[#383838]'
  const p = 'text-[#2B2B2B]'
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="shadow-[0px_15px_30px_rgba(173,206,255,0.13)] bg-white rounded-[10px] h-[74px] w-full max-w-[1359px]  px-8 py-4 justify-between flex items-center">
        <div>
          <h1 className={h1}>Event Type</h1>
          <p className="text-[#F45B5B]">
            Atrial Fibrillation {' >= '} 30 seconds
          </p>
        </div>
        <div>
          <h1 className={h1}>Event ID</h1>
          <p className={p}>43215-002</p>
        </div>
        <div>
          <h1 className={h1}>Event date and time</h1>
          <p className={p}>13 Feb 12:49:26 PM (CST)</p>
        </div>
        <div>
          <h1 className={h1}>Time in Queue</h1>
          <p className={p}>07:39 (m:s)</p>
        </div>
        <div>
          <h1 className={h1}>Max HR</h1>
          <p className={p}>93 BPM</p>
        </div>
        <div>
          <h1 className={h1}>Age</h1>
          <p className={p}>34</p>
        </div>
        <div>
          <h1 className={h1}>Event Type</h1>
          <p className={p}>43215-002</p>
        </div>
        <div>
          <h1 className={h1}>Gender</h1>
          <p className={p}>Male</p>
        </div>
        <div>
          <h1 className="text-sm font-bold text-[#F45B5B]">Implant device</h1>
          <Heart className="mx-auto flex  justify-center" />
        </div>
      </div>
      <div className="flex  items-center ml-4">
        <div className="text-[#9A9A9A]">
          <div className="text-center"> AF Not Confirmed</div>
          <div className="text-xs w-[115px] text-center">
            Events Detected (Cut Strip to Confirmed)
          </div>
        </div>
        <div className="flex items-center gap-3 ml-2">
          <DarkModeBtn />
          <p className="text-[#F45B5B] font-medium">AFIB</p>
        </div>
        <button className="text-white flex items-center ml-5 gap-1 px-4 h-[40px] justify-center rounded-lg bg-[#8085E9] ">
          <BsEye />
          <span className="whitespace-nowrap">Show Criteria</span>
        </button>
      </div>
    </div>
  )
}
function GraphAndTools() {
  return (
    <div className="flex justify-between h-[443px] mb-3">
      <div
        className={classnames(
          '  bg-white w-full max-w-[1664px]  h-full ',
          shadowAndRound,
        )}
      ></div>

      <RightSideTools />
    </div>
  )
}

function RightSideTools() {
  return (
    <div
      className={classnames(
        'ml-4 h-full w-[94px] bg-white  flex  items-center justify-center ',
        shadowAndRound,
      )}
    >
      <div className="flex flex-col gap-4">
        <ToolsContainer>
          <FiSearch className="text-2xl" />
        </ToolsContainer>
        <ToolsContainer>
          <LabH />
        </ToolsContainer>
        <ToolsContainer>
          <LabL />
        </ToolsContainer>
        <ToolsContainer>
          <FiEyeOff className="text-2xl" />
        </ToolsContainer>
      </div>
    </div>
  )
}
function ToolsContainer({ children, ...props }) {
  return (
    <div
      className="h-[61px] w-[61px] bg-[#76C3FF] flex items-center justify-center rounded-lg text-white"
      {...props}
    >
      {children}
    </div>
  )
}

function Measurement() {
  return (
    <div className="flex  items-center gap-4 justify-between">
      {/* <div className="flex gap-4 items-center ml-5"> */}
      <div className="text-xl font-bold text[#474747]">Measurement</div>
      <MeasureComp t1="hr" t2="bmp" />
      <MeasureComp t1="hr" t2="bmp" />
      <MeasureComp t1="hr" t2="bmp" />
      <MeasureComp t1="hr" t2="bmp" />
      {/* </div> */}
    </div>
  )
}
function MeasureComp({ t1, t2 }) {
  const { menu } = useStore()
  //    max-w-[358px] w-[350px]
  return (
    <div
      className={classnames(
        '  flex justify-between  px-10 items-center h-[61px] bg-white mb-4',
        shadowAndRound,
        { 'w-[346px] ': menu, 'w-[359px]': !menu },
      )}
    >
      <div className="text-xl uppercase">{t1}</div>
      <input
        className="w-[100px] max-w-[110] h-[44px] border outline-none shadow-[0px 15px 30px rgba(206, 206, 206, 0.13)] rounded-[10px]"
        type="text"
        name=""
        id=""
      />
      <div className="text-xl uppercase">{t2}</div>
    </div>
  )
}

function Finding() {
  return (
    <div className="flex gap-[145px] items-center  w-fit mb-4">
      <div className="flex items-center">
        <div className="text-[#474747]">Finding</div>
        <select className="w-[256px] h-[38px] rounded-lg ml-[118px] border">
          <option>Select</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      {/* Ectopy */}
      <div className="flex items-center">
        <div className="text-[#474747]">Ectopy</div>
        <select className="w-[256px] h-[38px] rounded-lg ml-[20px] border">
          <option>Select</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </div>
  )
}

function Comments() {
  return (
    <div className="flex justify-between ">
      <div className="text-xl font-bold text[#474747]">Comments</div>
      <textarea
        type="text"
        className="ml-16 h-[74px] outline-none rounded-[10px] w-full max-w-[1000px]  border shadow-[0px_15px_30px_rgba(151,151,151,0.1)]"
      />
      <div className="flex flex-col gap-4 -mt-5">
        <div className="flex justify-between items-center">
          <Image src={player} height={44} width={252} />
          <button className="px-[6px]  bg-black text-white rounded-lg shadow-[0px_20px_40px_rgba(115,187,191,0.1)]  flex  items-center  w-[156px] h-[34px] gap-2">
            <span className="rounded-lg min-h-6 min-w-6 bg-white text-black text-sm ">
              {/* ✓ */}
              ✔️
            </span>
            <span className=" whitespace-nowrap">Get next strip</span>
          </button>
        </div>
        {/* Buttons */}
        <div className="flex gap-3 h-[34px] ">
          <button className="rounded-lg h-full text-white px-[50px] bg-[#8085E9]">
            Caliper
          </button>
          <button className="rounded-lg h-full text-white px-[50px] bg-[#88CE84]">
            <span>Accept</span>
          </button>
          <button className="rounded-lg h-full text-white px-[50px] bg-[#E5796E] flex items-center justify-center">
            <IoMdClose className="mr-1" />
            <span>Reject</span>
          </button>
        </div>
      </div>
    </div>
  )
}

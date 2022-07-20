import Dashboard from './svg/Dashboard'
import Queue from './svg/Queue'
import Panel from './svg/Panel'
import Admin from './svg/Admin'
import classnames from 'classnames'
import { useStore } from './../store/store'
import QuestionMark from './svg/QuestionMark'
import Headset from './svg/Headset'
export default function Sidebar() {
  return (
    <div className="pt-14 bg-white shadow-[0px_12px_24px_rgba(0,0,0,0.05)] relative  ">
      <div className="flex flex-col  gap-4 transition-all ">
        <SidebarLayout text="Dashboard">
          <Dashboard />
        </SidebarLayout>
        <SidebarLayout active text="Supervisor Queue">
          <Queue />
        </SidebarLayout>
        <SidebarLayout text="Report Panel">
          <Panel />
        </SidebarLayout>
        <SidebarLayout text="Admin">
          <Admin />
        </SidebarLayout>
      </div>

      {/*  Help and support*/}
      <div className="flex flex-col absolute bottom-10 ">
        <SidebarLayout text="Online Help">
          <QuestionMark />
        </SidebarLayout>
        <SidebarLayout text="Contact Support">
          <Headset />
        </SidebarLayout>
      </div>
    </div>
  )
}

function SidebarLayout({ children, text, active }) {
  const { menu } = useStore()
  return (
    <div
      className={classnames(
        ' flex  transition-all cursor-pointer items-center gap-3  px-9 py-2  hover:text-[#76C3FF]     hover:fill-blue-400 ',
        {
          'fill-blue-400 ': active,
          'fill-[#616161]   text-[#616161]': !active,
        },
        {
          'hover:border-[#76C3FF] hover:bg-[#DAEFFF] border-transparent   border-l-4 ': menu,
        },
        { ' !border-[#76C3FF]  text-[#76C3FF] bg-[#DAEFFF]  ': menu && active },
      )}
    >
      {children}
      {menu && <p className="whitespace-nowrap font-bold  ">{text}</p>}
    </div>
  )
}

// text-[#616161]
// hover:text-blue-400

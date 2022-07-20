import Dashboard from './svg/Dashboard'
import Queue from './svg/Queue'
import Panel from './svg/Panel'
import Admin from './svg/Admin'
import classnames from 'classnames'
import { useStore } from './../store/store'
export default function Sidebar() {
  return (
    <div className="pt-14 bg-white shadow-[0px_12px_24px_rgba(0,0,0,0.05)]  ">
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
    </div>
  )
}

function SidebarLayout({ children, text, active }) {
  const { menu } = useStore()
  return (
    <div
      className={classnames(
        ' flex  transition-all cursor-pointer items-center gap-3  px-9 py-2  hover:text-[#76C3FF] border-l-4     hover:fill-blue-400 ',
        // { 'border-transparent': !menu && !active },
        {
          'fill-blue-400  ': active,
          'fill-[#616161]   text-[#616161]': !active,
        },
        { 'hover:border-[#76C3FF] hover:bg-[#DAEFFF]': menu },
        {
          ' border-[#76C3FF]  text-[#76C3FF] bg-[#DAEFFF] ': menu && active,
        },
      )}
    >
      {children}
      {menu && <p className="whitespace-nowrap font-bold  ">{text}</p>}
    </div>
  )
}

// text-[#616161]
// hover:text-blue-400

import Navbar from './../components/Navbar'
import Sidebar from './../components/Sidebar'
import Main from './../components/Main'
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-108px)] max-h-fit">
        <Sidebar />
        <Main />
      </div>
    </>
  )
}

import './list.scss'
import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import Datatable from '../../components/database/Datatable'


const list = () => {
  return (
    <div className="lists">
      <SideBar/>
      <div className="listContainer">
        <NavBar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default list
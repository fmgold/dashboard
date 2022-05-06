import './list.scss'
import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'


const list = () => {
  return (
    <div className="lists">
      <SideBar/>
      <div className="listContainer">
        <NavBar/>
        Database
      </div>
    </div>
  )
}

export default list
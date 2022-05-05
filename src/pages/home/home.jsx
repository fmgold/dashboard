import './home.scss'
import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import Widget from '../../components/Widget/widget'
import Feature from '../../components/featured/Feature'
import Chart from '../../components/chart/Chart'

const home = () => {
  return (
    <div className='home'>
        <SideBar/>
        <div className="homeContainer">
          <NavBar/>
            <div className="widgets">
              <Widget  type="user"/>
              <Widget type="order"/>
              <Widget type="earning"/>
              <Widget type="balance"/>
            </div>
            <div className="chart">
              <Feature/>
              <Chart/>
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transaction</div>
            </div>
        </div>
    </div>
  )
}

export default home 
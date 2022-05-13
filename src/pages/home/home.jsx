import './home.scss'
import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import Widget from '../../components/Widget/widget'
import Feature from '../../components/featured/Feature'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

const home = () => {
  // let ArrayName = ["spiderman", "acquaman", "batman", "thor", "captain america","superman", "wander", "xmen"]
  // let numArr = [22,12,43,53,3,2,56,69,56,98]
  // let arraySort = ArrayName.concat(numArr);
  // arraySort.sort();
  // console.log(arraySort);
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
              <Chart title="Last 6 Months Revenue" aspect={2/1}/>
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transaction</div>
              <Table/>
            </div>
        </div>
    </div>
  )
}

export default home 
import './single.scss'
import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import Chart from '../../components/chart/Chart'
import Tables from '../../components/table/Table'

const Single = () => {
  return (
    <div className='single'>
      <SideBar/>
      <div className="singleContainer">
      <NavBar/>
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img src="https://img.a.transfermarkt.technology/portrait/big/7600-1464872266.jpg?lm=1" className='imgItem' alt="" />
            <div className="details">
              <h1 className="itemTitle">Andrea Iniesta</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">adni@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone</span>
                <span className="itemValue">+23490890908</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">022 Ajanlekoko Street, onikangaajipon, Lekki, Lagos</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Ghana</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3/1} title="Users Spending (Last 6 months)"/>
        </div>
      </div>
      <div className="bottom">
      <h1 className="title">Last Transaction</h1>
      <Tables/>
      </div>
      </div>
      
    </div>
  )
}

export default Single
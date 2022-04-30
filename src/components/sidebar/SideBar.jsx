import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">fmgold</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li> <DashboardIcon className="icon"/> <span>DashBoard</span></li>
          <p className="title">LIST</p>
          <li> <PersonOutlineOutlinedIcon className="icon"/> <span>Users</span></li>
          <li> <StoreOutlinedIcon className="icon"/> <span>Products</span></li>
          <li> <CreditCardOutlinedIcon className="icon"/> <span>Orders</span></li>
          <li> <LocalShippingIcon className="icon"/> <span>Delivery</span></li>
          <p className="title">USEFUL</p>
          <li> <SettingsSystemDaydreamOutlinedIcon className="icon"/> <span>Stats</span></li>
          <li><NotificationsNoneIcon className="icon"/><span>Notification</span></li>
          <p className="title">SERVICE</p>
          <li><PsychologyOutlinedIcon className="icon"/><span>System Health</span></li>
          <li><InsertChartIcon className="icon"/><span>Logs</span></li>
          <li><SettingsIcon className="icon"/><span>Settings</span></li>
          <p className="title">USER</p>
          <li><AccountCircleOutlinedIcon className="icon"/><span>Profile</span></li>
          <li><LoginOutlinedIcon className="icon"/><span>Logout</span></li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default SideBar;

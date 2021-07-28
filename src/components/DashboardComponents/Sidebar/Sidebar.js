import './Sidebar.css';
import { DashView, Analytics, Account, Payments } from '../../';
const Sidebar = ({
  sidebarShow: [showSidebar, setShowSidebar],
  setCurrentMain,
}) => {
  return (
    <div className='sidebar-wrapper'>
      <div className='header'>
        <h1>E-wallet</h1>
        <p
          onClick={() => {
            setShowSidebar(false);
          }}
        >
          <i className='fas fa-times'></i>
        </p>
      </div>
      <div className='sidebar-content'>
        <ul>
          <p>Main</p>
          <li
            onClick={() => {
              setCurrentMain(<DashView />);
              setShowSidebar(false);
            }}
          >
            <span>
              <i className='fas fa-spider'></i>
            </span>
            <span>Dashboard</span>
          </li>
          <li
            onClick={() => {
              setCurrentMain(<Analytics />);
              setShowSidebar(false);
            }}
          >
            <span>
              <i className='fas fa-chart-line'></i>
            </span>
            <span>Analytics</span>
          </li>
          <li
            onClick={() => {
              setCurrentMain(<Account />);
              setShowSidebar(false);
            }}
          >
            <span>
              <i className='fas fa-user-circle'></i>
            </span>
            <span>Account</span>
          </li>
          <li
            onClick={() => {
              setCurrentMain(<Payments />);
              setShowSidebar(false);
            }}
          >
            <span>
              <i className='fas fa-money-bill'></i>
            </span>
            Payments
          </li>
        </ul>
        <ul>
          <p className='others-p'>Others</p>
          <li>
            <span>
              <i className='fas fa-spider'></i>
            </span>
            <span>Blog</span>
          </li>
          <li>
            <span>
              <i className='fas fa-chart-line'></i>
            </span>
            <span>News</span>
          </li>
          <li>
            <span>
              <i className='fas fa-user-circle'></i>
            </span>
            <span>Courses</span>
          </li>
          <li>
            <span>
              <i className='fas fa-money-bill'></i>
            </span>
            <span>Summary</span>
          </li>
        </ul>
        <div className='sidebar-user'>
          <p>James Muhoro</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

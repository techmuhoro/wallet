import './Dashboard.css';
import { DashMain, DashSidebar, DashView } from '../../';
import { useState } from 'react';

const Dashboard = () => {
  const [full, setFull] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentMain, setCurrentMain] = useState(<DashView />);
  return (
    <div className={full ? 'dashboard full' : 'dashboard'}>
      <div className={showSidebar ? 'sidebar show' : 'sidebar'}>
        <DashSidebar
          sidebarShow={[showSidebar, setShowSidebar]}
          setCurrentMain={setCurrentMain}
        />
      </div>
      <div className='main'>
        <DashMain
          sidebarShow={[showSidebar, setShowSidebar]}
          settings={[full, setFull]}
          currentMain={currentMain}
        />
      </div>
    </div>
  );
};

export default Dashboard;

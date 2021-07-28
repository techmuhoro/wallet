import './Main.css';
import { DashHeader } from '../../';

const Main = ({ settings, sidebarShow, currentMain }) => {
  return (
    <div className='main-wrapper'>
      <DashHeader settings={settings} sidebarShow={sidebarShow} />
      <div className='dashboard-view'>{currentMain}</div>
    </div>
  );
};

export default Main;

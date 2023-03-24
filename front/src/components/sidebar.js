import './sidebar.css';
import { FaCalendar, FaEnvelope, FaListAlt, FaUser, FaUserCheck } from 'react-icons/fa';
import { TbTargetArrow } from 'react-icons/tb';

const sidebarNavItems = [
    {
        icon: <FaEnvelope />,

        classNam: 'primary'
    },
    {
        icon: <FaCalendar />,
        classNam: 'warning'
    },
    {
        icon: <TbTargetArrow />,
        classNam: 'info'
    },
    {
        icon: <FaUser />,
        classNam: 'info'
    },
    {
        icon: <FaUserCheck />,
        classNam: 'success'
    },
    {
        icon: <FaListAlt />,
        classNam: 'dark'
    }
]

const Sidebar = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reaflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return <div className='sidebar'>
        <div className="sidebar__menu">
            {
                sidebarNavItems.map((item, index) => (
                    <div className="sidebar__menu__item">
                        <div className={`sidebar__menu__item__icon ` + item.classNam } onDragStart={(event) => onDragStart(event, 'default')} draggable>
                            {item.icon}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;
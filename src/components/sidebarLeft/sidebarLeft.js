import {React, useState, useEffect, useRef} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebarLeft.css';
import Box from '@mui/material/Box';

const LeftSidebarItems = [
    {
        display: 'Dashboard',
        to: '/',
        section: ''
    },
    {
        display: 'Campaigns',
        to: '/campaigns',
        section: 'campaigns'
    },
    {
        display: 'Statement',
        to: '/statement',
        section: 'statement'
    },
    {
        display: 'Schedules',
        to: '/schedules',
        section: 'schedules'
    },
    {
        display: 'Projects',
        to: '/projects',
        section: 'projects'
    },
    {
        display: 'Payouts',
        to: '/payouts',
        section: 'payouts'
    },
];

const SidebarLeft = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = LeftSidebarItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return
    <div className='sidebar'>
        <div className="sidebar__logo">
            Animate
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                LeftSidebarItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
    </div>
</div>
}

export default SidebarLeft;
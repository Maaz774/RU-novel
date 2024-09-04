import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"
export const AdminSidebar = ({ setSelectedComponent }) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleSidebar = () => setCollapsed(!collapsed);

    const handleMenuItemClick = (item) => {
        setSelectedComponent(item);
    };

    return (
        <div id="sidebar-bg"className={`transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} min-h-screen bg-black text-white flex flex-col `}>
            <div className="flex items-center p-5 justify-between" id="logo-bg" >
                {!collapsed && (
                    <div className="logo">
                        <Link to="/admin-dashboard" title="Royal Road">
                        <img src="https://www.royalroad.com/dist/img/logo/rr-logo-smallcaps-flat-white-min.png" alt="Logo" className="h-8" />
                        </Link>
                        
                    </div>
                )}
                <div className="toggle-button">
                       <button onClick={toggleSidebar} className="flex items-center">
                          <i className={`fas ${collapsed ? 'fa-chevron-right' : 'fa-chevron-left '} text-gray-500  hover:text-blue-400 text-md`}></i>
                          <i className={`fas ${collapsed ? 'fa-chevron-right' : 'fa-chevron-left '} text-gray-400 hover:text-blue-400 text-md`}></i>
                        </button>
                </div>
            </div>
            <ul className={`menu-nav flex-1 ${collapsed ? 'flex-col justify-center' : 'flex-col items-start'} mt-5 pl-[16px] pr-5 `}>
                {['Admin Dashboard', 'Manage Employees', 'Submissions', 'Transactions', 'Advertising', 'UTM Tags','Borders','Notes'].map((item, index) => (
                    <li key={index} className="menu-item w-full">
                        <button onClick={() => handleMenuItemClick(item)} className={`menu-link p-2 flex ${collapsed ? 'justify-center' : 'justify-start'} items-center`}>
                            <i className={`fas ${['fa-th', 'fa-user-plus', 'fa-plus-square', 'fas fa-file-invoice', 'fa-ad', 'fa-pen-fancy',"fas fa-portrait",'fa-sticky-note'][index]} mr-2 md:mr-4 text-gray-500 hover:text-blue-400 `}></i>
                            {!collapsed && <span>{item}</span>}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
// 'Admin Dashboard', 'Manage Employees', 'Submissions', 'Transactions', 'Advertising', 'UTM Tags','Borders','Notes'
// 'fa-th', 'fa-user-plus', 'fa-plus-square', 'fas fa-file-invoice', 'fa-ad', 'fa-pen-fancy',"fas fa-portrait",'fa-sticky-note'
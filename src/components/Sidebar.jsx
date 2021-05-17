import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import logo from '../images/profile-pic.png';

const Sidebar = () => {
    return (
        <div className='sidebar-wrapper'>
            <div className='profile-section'>
                <img className='profile-pic' src={logo} alt='profile pic' />
                <div>
                    <h1>Mike</h1>
                    <div>
                        <p id='email'>contact@prussiananalytics.com</p>
                    </div>
                </div>
            </div>
            <div className='menu-links'>
                <NavLink to='/overview'>Overview</NavLink>
                <NavLink to='/settings'>User Settings</NavLink>
                <NavLink to='/planbilling'>Plan & Billing</NavLink>
                <NavLink to='/apps&integration'>Apps & Integration</NavLink>
                <NavLink to='/supporttickets'>Support Tickets</NavLink>
                <NavLink to='/closeaccount'>Close Account</NavLink>
            </div>
            <div className='storage'>
                <p>Storage</p>
                <div id='storage-loader'></div>
                <p id='storage-percentage'>0% of 25mb used.</p>
            </div>

            <div className='storage-upgrade'>
                <i className='fa fa-folder fa-lg'></i>
                <p>
                    <a href='/storage'>
                        Need More Storage?
                        <br />
                        <span>Upgrade to Individual</span>
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Sidebar;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignIn, faChevronDown, faUser, faPencil, faEnvelopeOpen, faBook, faClock, faStar, faHistory, faCogs, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userActions } from '../store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PageHeader = () => {
  
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.userData.theme);
  const barsClick = useSelector((state) => state.userData.barsClick);
  const user = useSelector((state) => state.userData.user);
  const isAuthenticated = useSelector((state) => state.userData.isAuthenticated);
  const navigate = useNavigate();
  
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleNavbar = () => {
    dispatch(userActions.setBarsClick(!barsClick));
  };



  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    dispatch(userActions.setLogout(false));
    localStorage.removeItem('authtoken')
    localStorage.removeItem('userEmail')
    navigate('/');
    window.location.reload(); // This will refresh the entire page
  };

  
    
  const profilePictureUrl = user.profilePicture;
    // ? `http://localhost:5001/uploads/${user.profilePicture}`
    // : '/default-avatar.png';

    return (
      <header className={`h-20 w-full z-50 ${theme === 'dark' ? 'bg-[#131313] text-white' : 'bg-white text-black'}`}>
        <div className="container mx-auto flex items-center justify-between h-full px-4 lg:px-8">
          <div className="flex items-center lg:ml-20 ml-0">
            <Link to="/" title="Royal Road">
              <img
                // src="https://www.royaload.com/dist/img/logo/rr-logo-gold-white-small-min.png"
                src="https://firebasestorage.googleapis.com/v0/b/ru-novel-images.appspot.com/o/border-images%2Flogo3.png?alt=media&token=5992bcd8-4adb-4c8c-89db-9e40ac5b2cef"
                alt="Royal Road"
                className="h-64 lg:h-64"
              />
              
                
              
            </Link>
          </div>
  
          {/* Large Screen */}
          <div className="hidden lg:flex items-center space-x-2">
            <ul className="flex space-x-4">
              <li className="relative">
                <Link
                  to="#"
                  className="flex items-center text-gray-400 hover:text-[#23527C]"
                  aria-label="Notifications - 0 new"
                >
                  <FontAwesomeIcon icon={faBell} className="text-[18px] lg:text-[20px] mt-4 lg:mt-5" />
                </Link>
              </li>
              {isAuthenticated ? (
                <li className="relative group">
                  <button
                    className={`flex items-center px-2 py-2 lg:py-3 text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                    style={{ height: '110%' }}
                    onClick={toggleDropdown}
                  >
                    <img
                      src={profilePictureUrl}
                      alt={user.username}
                      className="w-7 h-7 lg:w-8 lg:h-8 rounded-full mr-2"
                    />
                    <span className="text-gray-500 font-bold hover:text-gray-400">{user.username}</span>
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-gray-500" />
                  </button>
                  {dropdownVisible && (
                    <ul
                      style={{ zIndex: 10 }}
                      className={`absolute right-0 mt-2 text-[#bcc2cb] space-y-2 w-40 lg:w-48 text-sm ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-600'}`}
                    >
                      <li>
                        <Link to="/profile" className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                          <FontAwesomeIcon icon={faUser} className="mr-2 text-[#6fa7d7]" />
                          My Profile
                        </Link>
                      </li>
                      <li onClick={fetch}>
                      <Link to={
                            user.role === 'author'
                            ? '/author-dashboard'
                            : '/admin-dashboard'
                          } 
                          className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                          <FontAwesomeIcon icon={faPencil} className="mr-2 text-[#6fa7d7]" />
                          {user.role === 'author'
                            ? 'Author Dashboard'
                            : user.role === 'admin'
                            ? 'Admin Dashboard'
                            : 'Moderator Dashboard'}
                        </Link>
                        {/* <Link to="/author-dashboard" className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                          <FontAwesomeIcon icon={faPencil} className="mr-2 text-[#6fa7d7]" />
                          Author Dashboard
                        </Link> */}
                      </li>
                      <li>
                        <Link to="/messages" className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                          <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-2 text-[#6fa7d7]" />
                          Inbox
                        </Link>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <Link to="/my/follows" className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                          <FontAwesomeIcon icon={faBook} className="mr-2 text-[#6fa7d7]" />
                          Follow List
                        </Link>
                      </li>
                      <li>
                        <Link to="/my/readlater" className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                          <FontAwesomeIcon icon={faClock} className="mr-2 text-[#6fa7d7]" />
                          Read Later
                        </Link>
                      </li>
                      <li>
                        <Link to="/my/favorites" className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                          <FontAwesomeIcon icon={faStar} className="mr-2 text-[#6fa7d7]" />
                          Favorites
                        </Link>
                      </li>
                      <li>
                        <Link to="/my/history" className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                          <FontAwesomeIcon icon={faHistory} className="mr-2 text-[#6fa7d7]" />
                          History
                        </Link>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <Link to="/account/options" className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                          <FontAwesomeIcon icon={faCogs} className="mr-2 text-[#6fa7d7]" />
                          Settings
                        </Link>
                      </li>
                      <li>
                        <button type="button" onClick={handleLogout} className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                          <FontAwesomeIcon icon={faSignOut} className="mr-2 text-[#6fa7d7]" />
                          Log Out
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="flex items-center mr-4 lg:mr-6 text-[#337AB7] p-4 lg:p-[20px] text-[12px] lg:text-[14px] hover:bg-[#EEEEEE] hover:text-[#23527C]"
                  >
                    <FontAwesomeIcon icon={faSignIn} />
                    <span className="ml-2">Log In</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
  
          {/* Small Screen */}
          <div className="flex items-center lg:hidden">
            <Link
              to="#"
              className="flex text-gray-400 hover:text-[#23527C]"
              aria-label="Notifications - 0 new"
            >
              <FontAwesomeIcon icon={faBell} className="text-[18px] lg:text-[20px]" />
            </Link>
            {isAuthenticated ? (
              <div className="relative">
                <button
                  className={`flex items-center px-2 py-2 lg:py-3 text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                  onClick={toggleDropdown}
                >
                  <img
                    src={profilePictureUrl}
                    alt={user.username}
                    className="w-7 h-7 lg:w-8 lg:h-8 rounded-full mr-2"
                  />
                  <span className="text-gray-500 font-bold hover:text-gray-400">{user.username}</span>
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-gray-500" />
                </button>
                {dropdownVisible && (
                  <ul
                    style={{ zIndex: 10 }}
                    className={`absolute right-0 mt-2 text-[#bcc2cb] space-y-2 w-40 lg:w-48 text-sm ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-600'}`}
                  >
                    <li>
                      <Link to="/profile/525857" className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                        <FontAwesomeIcon icon={faUser} className="mr-2 text-[#6fa7d7]" />
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/author-dashboard" className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                        <FontAwesomeIcon icon={faPencil} className="mr-2 text-[#6fa7d7]" />
                        Author Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/private" className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                        <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-2 text-[#6fa7d7]" />
                        Inbox
                      </Link>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <Link to="/my/follows" className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                        <FontAwesomeIcon icon={faBook} className="mr-2 text-[#6fa7d7]" />
                        Follow List
                      </Link>
                    </li>
                    <li>
                      <Link to="/my/readlater" className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                        <FontAwesomeIcon icon={faClock} className="mr-2 text-[#6fa7d7]" />
                        Read Later
                      </Link>
                    </li>
                    <li>
                      <Link to="/my/favorites" className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                        <FontAwesomeIcon icon={faStar} className="mr-2 text-[#6fa7d7]" />
                        Favorites
                      </Link>
                    </li>
                    <li>
                      <Link to="/my/history" className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                        <FontAwesomeIcon icon={faHistory} className="mr-2 text-[#6fa7d7]" />
                        History
                      </Link>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <Link to="/account/options" className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                        <FontAwesomeIcon icon={faCogs} className="mr-2 text-[#6fa7d7]" />
                        Settings
                      </Link>
                    </li>
                    <li>
                      <li  onClick={handleLogout} className="flex items-center px-3 py-1 hover:bg-[#55616f]">
                        <FontAwesomeIcon icon={faSignOut} className="mr-2 text-[#6fa7d7]" />
                        Log Out
                      </li>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="flex items-center mr-4 lg:mr-6 text-[#337AB7] p-4 lg:p-[20px] text-[12px] lg:text-[14px] hover:bg-[#EEEEEE] hover:text-[#23527C]"
                >
                  <FontAwesomeIcon icon={faSignIn} />
                  <span className="ml-2">Log In</span>
                </Link>
              </div>
            )}
            <button
              onClick={toggleNavbar}
              className="flex items-center text-[14px] text-[#337AB7]  p-1 rounded-lg focus:outline-none hover:border-[#337AB7] lg:hidden"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faBars} className='ml-2' />
            </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default PageHeader;
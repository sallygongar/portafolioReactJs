import React from 'react';

import './css/styles.css';


const Sidebar = () =>{
 /* useEffect(() => {
    // Crear una nueva etiqueta <script>
    const script = document.createElement('script');
    script.src = '/js/script.js'; // Ruta del archivo script.js
    script.async = true;

    // Añadir el script al DOM
    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);*/

  return(
     <>
      <nav>
        <div className="sidebar-top-wrapper">
          <div className="sidebar-top">
            <a href="#" className="logo__wrapper">
              <img src="assets/astra.svg" alt="Logo" className="logo-small"/>
              <span className="hide">
                Astra
              </span>
            </a>
          </div>
          <div className="expand-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00979 2.72L10.3565 7.06667C10.8698 7.58 10.8698 8.42 10.3565 8.93333L6.00979 13.28"
                stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div className="search__wrapper">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 9L13 13M5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333Z"
              stroke="#697089" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <input type="search" placeholder="Search for anything..."/>
        </div>
        <div className="sidebar-links">
          <h2>Main</h2>
          <ul>
            <li>
              <a href="#dashboard" title="Dashboard" className="tooltip">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-dashboard" width="24"
                  height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4h6v8h-6z" />
                  <path d="M4 16h6v4h-6z" />
                  <path d="M14 12h6v8h-6z" />
                  <path d="M14 4h6v4h-6z" />
                </svg>
                <span className="link hide">Dashboard</span>
                <span className="tooltip__content">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#payments" title="Payments" className="tooltip">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-transform-filled" width="24"
                  height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 14a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" stroke-width="0"
                    fill="currentColor" />
                  <path
                    d="M16.707 2.293a1 1 0 0 1 .083 1.32l-.083 .094l-1.293 1.293h3.586a3 3 0 0 1 2.995 2.824l.005 .176v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-3a1 1 0 0 0 -.883 -.993l-.117 -.007h-3.585l1.292 1.293a1 1 0 0 1 -1.32 1.497l-.094 -.083l-3 -3a.98 .98 0 0 1 -.28 -.872l.036 -.146l.04 -.104c.058 -.126 .14 -.24 .245 -.334l2.959 -2.958a1 1 0 0 1 1.414 0z"
                    stroke-width="0" fill="currentColor" />
                  <path
                    d="M3 12a1 1 0 0 1 .993 .883l.007 .117v3a1 1 0 0 0 .883 .993l.117 .007h3.585l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.32 -.083l.094 .083l3 3a.98 .98 0 0 1 .28 .872l-.036 .146l-.04 .104a1.02 1.02 0 0 1 -.245 .334l-2.959 2.958a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.291 -1.293h-3.584a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-3a1 1 0 0 1 1 -1z"
                    stroke-width="0" fill="currentColor" />
                  <path d="M6 2a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" stroke-width="0"
                    fill="currentColor" />
                </svg>
                <span className="link hide">Payments</span>
                <span className="tooltip__content">Payments</span>
              </a>
            </li>
            <li>
              <a href="#analytics" title="Analytics" className="tooltip">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-pie" width="24"
                  height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8" />
                  <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
                </svg>
                <span className="link hide">Analytics</span>
                <span className="tooltip__content">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#products" title="Products" className="tooltip">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box" width="24" height="24"
                  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                  <path d="M12 12l8 -4.5" />
                  <path d="M12 12l0 9" />
                  <path d="M12 12l-8 -4.5" />
                </svg>
                <span className="link hide">Products</span>
                <span className="tooltip__content">Products</span>
              </a>
            </li>
            <li>
              <a href="#reports" title="Reports" className="tooltip">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-report-analytics" width="24"
                  height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                  <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                  <path d="M9 17v-5" />
                  <path d="M12 17v-1" />
                  <path d="M15 17v-3" />
                </svg>
                <span className="link hide">Reports</span>
                <span className="tooltip__content">Reports</span>
              </a>
            </li>
            <li>
              <a href="#users" title="Users" className="tooltip">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="24" height="24"
                  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
                <span className="link hide">Customers</span>
                <span className="tooltip__content">Customers</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar-links bottom-links">
          <h2>Settings</h2>
          <ul>
            <li>
              <a href="#settings" title="Settings" className="tooltip">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z">
                  </path>
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                </svg>
                <span className="link hide">Settings</span>
                <span className="tooltip__content">Settings</span>
              </a>
            </li>
            <li>
              <a href="#settings" title="Settings" className="tooltip">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-bank" width="24"
                  height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l18 0" />
                  <path d="M3 10l18 0" />
                  <path d="M5 6l7 -3l7 3" />
                  <path d="M4 10l0 11" />
                  <path d="M20 10l0 11" />
                  <path d="M8 14l0 3" />
                  <path d="M12 14l0 3" />
                  <path d="M16 14l0 3" />
                </svg>
                <span className="link hide">Billing</span>
                <span className="tooltip__content">Billing</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
     
     </>
  )
}

export default Sidebar;
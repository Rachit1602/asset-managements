import React from 'react';
import './Dashboard.css'; // Make sure to create a CSS file for styling

const Dashboard = () => {
    return (
        <div className="dashboard">
            <aside className="sidebar">
                <div className="sidebar-icon">📅</div>
                <div className="sidebar-icon">📊</div>
                <div className="sidebar-icon">👥</div>
                <div className="sidebar-icon">📆</div>
            </aside>
            <main className="main-content">
                <header className="header">
                    <h1 className='text-2xl font-bold'>Indore Connect</h1>
                    {/* <div className="profile-pic"></div> */}
                    <div>
                        <button className='rounded-xl px-4 py-1 bg-blue-700 text-white mr-1'>Login</button>
                        <button className='rounded-xl px-4 py-1 bg-green-700 text-white'>SignUp</button>
                    </div>
                </header>
                <div className="content">
                    <section className="calendar">
                        <h2>April 2022</h2>
                        <div className="calendar-grid">
                            {/* Render calendar dates here */}
                        </div>
                    </section>
                    <section className="asset-progress">
                        <h2 className='text-xl font-bold'>IMC Data Analytics Portal</h2>
                        <div className="progress-chart">
                            {/* Render progress chart here */}
                        </div>
                    </section>
                    <section className="team-directory">
                        <h2>Team directory</h2>
                        <div className="team-members">
                            <div className="team-member">
                                <div className="member-photo"></div>
                                <div className="member-info">
                                    <p>Alex R.</p>
                                    <p>Asset manager</p>
                                </div>
                            </div>
                            <div className="team-member">
                                <div className="member-photo"></div>
                                <div className="member-info">
                                    <p>Megan S.</p>
                                    <p>Community liaison</p>
                                </div>
                            </div>
                            <div className="team-member">
                                <div className="member-photo"></div>
                                <div className="member-info">
                                    <p>Rob T.</p>
                                    <p>Resource</p>
                                </div>
                            </div>
                            <div className="team-member">
                                <div className="member-photo"></div>
                                <div className="member-info">
                                    <p>Emily M.</p>
                                    <p>Data analyst</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="tasks-by-user">
                        <h2>Tasks by user</h2>
                        <div className="tasks">
                            <div className="task">
                                <h3>Asset tracking</h3>
                                <ul>
                                    <li>
                                        <span>Predictive maintenance</span>
                                        <span>Data analytics</span>
                                        <span className="start-button">Start</span>
                                        <span className="status urgent">Urgent</span>
                                    </li>
                                    <li>
                                        <span>Community engagement</span>
                                        <span>Resource optimization</span>
                                        <span className="status ongoing">Ongoing</span>
                                        <span className="status important">Important</span>
                                    </li>
                                    <li>
                                        <span>Maintenance plan</span>
                                        <span>Inspection day</span>
                                        <span className="status ongoing">Ongoing</span>
                                        <span className="status urgent">Urgent</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="task">
                                <h3>Asset evaluation</h3>
                                <ul>
                                    <li>
                                        <span>Community survey</span>
                                        <span>Data review</span>
                                        <span className="start-button">Start</span>
                                        <span className="status urgent">Urgent</span>
                                    </li>
                                    <li>
                                        <span>Asset feedback</span>
                                        <span>Data analysis</span>
                                        <span className="status ongoing">Ongoing</span>
                                        <span className="status important">Important</span>
                                    </li>
                                    <li>
                                        <span>Community insights</span>
                                        <span>Resource allocation</span>
                                        <span className="status paused">Paused</span>
                                        <span className="status low-priority">Low priority</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;

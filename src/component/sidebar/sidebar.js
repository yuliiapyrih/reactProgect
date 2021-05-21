import React from "react";
import logo from '../../accets/logo.png'
import home from '../../accets/home.png'

export default function Sidebar(){
    return(
        <div id="sidebar-wrapper">
            <div className="sidebar-heading"><img src={logo}/></div>
            <div className="list-group list-group-flush">
                <a href="/" className="list-group-item list-group-item-action active">
                    <p >
                        <img
                            src={home}/>
                            <span className="vidtext" >Home</span></p>
                </a>
                <a href="/none" className="list-group-item list-group-item-action "><p><span
                    className="glyphicon glyphicon-time"
                    aria-hidden="true"></span><span
                    className="vidtext">Time Management</span></p></a>
                <a href="/none" className="list-group-item list-group-item-action "><p>
                    <span className="glyphicon glyphicon-inbox" aria-hidden="true"></span><span
                    className="vidtext">Inbox</span></p>
                </a>
                <a href="/none" className="list-group-item list-group-item-action"><p>
                    <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span><span
                    className="vidtext">Calendar</span></p></a>
                <a href="/none" className="list-group-item list-group-item-action"><p>
                    <span className="glyphicon glyphicon-stats" aria-hidden="true"></span><span
                    className="vidtext">Analytics</span>
                </p></a>
                <a href="/test" className="list-group-item list-group-item-action"><p>
                    <span className="glyphicon glyphicon-cog" aria-hidden="true"></span><span
                    className="vidtext">Settings</span>
                </p></a>
            </div>
        </div>
    )
}

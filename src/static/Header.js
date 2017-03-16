import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <div className='container'>
                <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand">Sort Algorithm Visualization</a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link to="/">Bubblesort</Link>
                                </li>
                                <li>
                                    <Link to="/Selectionsort">Selectionsort</Link>
                                </li>
                                <li>
                                    <Link to="/Insertionsort">Insertionsort</Link>
                                </li>
                                <li>
                                    <Link to="/Compare">Compare</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}




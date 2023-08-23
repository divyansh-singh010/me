import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/flogo.png';
import './navbar.css';

export default function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg bg-light'>
			<div className='container-fluid nav-cont mx-auto'>
				<Link className='navbar-brand' to='/'>
					<img src={logo} alt='CAIC' width='50' height='50' /></Link>
				<button
					className='navbar-toggler '
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav navlinks'>
						<li className='nav-item'>
							<Link className='nav-link navlink active' aria-current='page' to='/clubs'>
								CLUBS
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link navlink' to='/societies'>
								SOCIETIES
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link navlink' to='/meetings'>
								MEETINGS
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link navlink' to='/usefulLinks'>
								USEFUL LINKS
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link navlink' to='/events'>
								EVENTS
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link navlink' to='/team'>
								TEAM
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link navlink' to='/tryst'>
								TRYST
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
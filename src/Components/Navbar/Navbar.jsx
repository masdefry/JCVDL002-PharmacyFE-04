import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Supports/Stylesheets/Components/Navbar.css';
import SehatY from '../../Supports/Assets/Navbar/SehatY.svg';
import Cart from '../../Supports/Assets/Navbar/cart.svg';
import Message from '../../Supports/Assets/Navbar/inbox.svg';
import Profile from '../../Supports/Assets/Navbar/profile.svg';
import Search from '../../Supports/Assets/Navbar/magGlass.svg';

export const Navbar = () => {
	return (
		<div className='Navbar row p-0 m-0'>
			<div className='nav-items row'>
				<div className='logo col'>
					<a href='/'>
						<img src={SehatY} alt='logo' />
					</a>
				</div>
				<div className='search col-4 offset-md-1'>
					<img src={Search} alt='' />
					<input type='text' placeholder='Search SehatY' />
				</div>
				<div className='link col-1'>
					<a href='#'>
						<img src={Cart} alt='Cart' />
					</a>
					<a href='#'>
						<img src={Message} alt='Message' />
					</a>
					<a href='/login'>
						<img src={Profile} alt='Profile' />
					</a>
				</div>
			</div>
		</div>
	);
};

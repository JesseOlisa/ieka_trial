import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { SettingsLinks } from '../../utils/data';

const isNotActiveStyle =
	'flex items-center py-3 w-full px-7 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle =
	'flex items-center py-3 w-full px-7 gap-3 text-gray-600 bg-green-200 font-extrabold border-r-2 border-green-700 transition-all duration-200 ease-in-out capitalize';

const Sidebar = ({ closeSidebar, sideBarLinks }) => {
	return (
		<div className='flex flex-col bg-white overflow-y-scroll min-w-210 hide-scrollbar shadow-md'>
			<div className='flex flex-col w-full h-95vh md:h-full justify-between'>
				<div className='flex flex-col gap-3'>
					<Link
						to='/'
						className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'
						onClick={closeSidebar}
					>
						<h1 className='text-5xl font-extrabold text-green-800'>ieka</h1>
					</Link>
					<div className='flex flex-col gap-1 text-gray-600'>
						{sideBarLinks.map((sidebarLink) => (
							<NavLink
								key={sidebarLink.title}
								to={`/dashboard/${sidebarLink.title}`}
								className={({ isActive }) =>
									isActive ? isActiveStyle : isNotActiveStyle
								}
							>
								<img
									src={sidebarLink.logo}
									alt='category'
									className='w-6 h-6 shadow-sm'
								/>
								{sidebarLink.name}
							</NavLink>
						))}
					</div>
				</div>

				<div className='flex flex-col gap-1 pb-5'>
					<h3 className='text-xs px-7 text-gray-500 uppercase font-extrabold'>
						Settings & Help
					</h3>
					{SettingsLinks.map((settingsLink) => (
						<NavLink
							key={settingsLink.title}
							to={`/${settingsLink.title}`}
							className={({ isActive }) =>
								isActive ? isActiveStyle : isNotActiveStyle
							}
						>
							<img
								src={settingsLink.logo}
								alt='category'
								className='w-6 h-6 shadow-sm'
							/>
							{settingsLink.name}
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

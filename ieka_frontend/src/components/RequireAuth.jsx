import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const RequireAuth = ({ allowedRoles }) => {
	const { auth } = useAuth();
	const location = useLocation();

	return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
		<Outlet />
	) : auth?.user ? (
		<Navigate
			to='/unauthorize'
			state={{ from: location }}
			replace
		/>
	) : (
		<Navigate
			to='/sign-in'
			state={{ from: location }}
			replace
		/>
	);
};

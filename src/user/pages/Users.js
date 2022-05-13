import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
	const USERS = [
		{
			id: 'u1',
			name: 'Achref Ghozlene',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png',
			places: 3,
		},
	];

	return <UserList items={USERS} />;
};

export default Users;

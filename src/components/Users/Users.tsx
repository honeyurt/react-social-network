import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { setUsers } from '../../redux/actions/users';

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.users);
  console.log(users);

  React.useEffect(() => {
    dispatch(setUsers());
  }, [dispatch]);

  return (
    <div>
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <nav>{user.name}</nav>
            <img src={user.photos.small} alt="UserPhoto" />
            <nav>{user.status}</nav>
          </div>
        ))}
    </div>
  );
};

export default Users;

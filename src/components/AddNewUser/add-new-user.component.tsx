import React, { useCallback, useState } from 'react';
import { userProjectTreeService, UsersProjectTree } from '../../repository';

import './add-new-user.css';

export const AddNewUser = () => {
  const [newUser, setNewUser] = useState<UsersProjectTree>({ rootTreeId: '', userIdProjectId: '' });

  const handleClick = useCallback(() => {
    userProjectTreeService.addUser(newUser);
  }, [newUser]);

  return (
    <div className="add-new-user">
      <h2>Add new user</h2>
      <input
        type="text"
        placeholder="User ID"
        value={newUser.userIdProjectId}
        onChange={(e) => {
          setNewUser({ ...newUser, userIdProjectId: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Root Tree ID"
        value={newUser.rootTreeId}
        onChange={(e) => {
          setNewUser({ ...newUser, rootTreeId: e.target.value });
        }}
      />
      <button onClick={handleClick}>Add new user</button>
    </div>
  );
};

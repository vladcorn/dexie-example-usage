import { usersProjectTreeTable } from '../dexie.db';
import { UsersProjectTree } from '../interfaces/users-project-tree';

class UserProjectTreeService {
  getUserProjectTreeByUserProjectTreeId(userProjectTreeId: string) {
    return usersProjectTreeTable.get({ userProjectTreeId });
  }

  addUser(userProjectTree: UsersProjectTree) {
    return usersProjectTreeTable.add(userProjectTree);
  }

  updateUserProjectTreeByUserProjectTreeId(userProjectTree: UsersProjectTree) {
    return usersProjectTreeTable.put(userProjectTree);
  }
}

export const userProjectTreeService = new UserProjectTreeService();

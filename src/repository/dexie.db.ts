import Dexie, { Table } from 'dexie';
import { UsersProjectTree } from './interfaces/users-project-tree';
import { ProjectTree } from './interfaces/project-tree';
import { Files } from './interfaces/files';
import { ProjectTreeState } from './interfaces/project-tree-state';

class AppDB extends Dexie {
  usersProjectTreeTable!: Table<UsersProjectTree>;
  projectTreeTable!: Table<ProjectTree>;
  projectTreeStateTable!: Table<ProjectTreeState>;
  filesTable!: Table<Files>;

  constructor() {
    super('FreeIDEApp');
    this.version(1).stores({
      usersProjectTreeTable: `userProjectTreeId, rootTreeId`,
      projectTreeTable: `treeId, parentTreeId, path, name, type, fileId`,
      filesTable: `fileId, content`,
      projectTreeStateTable: `userIdProjectId, state`,
    });
  }
}

export const { usersProjectTreeTable, projectTreeTable, filesTable, projectTreeStateTable } = new AppDB();

import { projectTreeTable } from '../dexie.db';
import { ProjectTree } from '../interfaces/project-tree';

class ProjectTreeService {
  async getById(treeId: string) {
    return projectTreeTable.get({ treeId });
  }

  add(projectTree: ProjectTree) {
    return projectTreeTable.add(projectTree);
  }

  update(projectTree: ProjectTree) {
    return projectTreeTable.put(projectTree);
  }
  
  getByParentId(parentId: string) {
    return projectTreeTable.where('parentTreeId').equals(parentId).toArray();
  }
}

export const projectTreeService = new ProjectTreeService();

import { projectTreeTable } from '../dexie.db';
import { ProjectTree } from '../interfaces/project-tree';

class ProjectTreeService {
  async getProjectTreeByTreeId(treeId: string) {
    return projectTreeTable.get({ treeId });
  }

  addProject(projectTree: ProjectTree) {
    return projectTreeTable.add(projectTree);
  }

  updateProjectTreeByTreeId(projectTree: ProjectTree) {
    return projectTreeTable.put(projectTree);
  }
}

export const projectTreeService = new ProjectTreeService();

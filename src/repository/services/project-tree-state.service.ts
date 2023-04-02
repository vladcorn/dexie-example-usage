import { projectTreeStateTable } from '../dexie.db';
import { ProjectTreeState } from '../interfaces/project-tree-state';

class ProjectTreeStateService {
  getProjectTreeStateByUserIdProjectId(userIdProjectId: string) {
    return projectTreeStateTable.get({ userIdProjectId });
  }

  addProjectTreeState(projectTreeState: ProjectTreeState) {
    return projectTreeStateTable.add(projectTreeState);
  }

  updateProjectTreeStateByUserIdProjectId(projectTreeState: ProjectTreeState) {
    return projectTreeStateTable.put(projectTreeState);
  }
}

export const projectTreeStateService = new ProjectTreeStateService();

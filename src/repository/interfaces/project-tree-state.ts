export interface ProjectTreeState {
  userIdProjectId: string;
  state: ProjectTreeStateMap;
}
export interface ProjectTreeStateMap {
  collapsed: Set<string>; // treeId
  openedFiles: Set<string>; // fileId
}

export interface ProjectTree {
  treeId: string; // userId_projectId_sha. sha is a `sha` from github
  content: ProjectTreeContentMap;
}

export interface ProjectTreeContentMap {
  path: string; // path from github
  name: string;
  type: ProjectTreeNodeType;
  treeId: string; // userId_projectId_sha. sha is a `sha` from github
  parentTreeId: string; // parent treeId
  fileId: string;
}

export type ProjectTreeNodeType = 'tree' | 'blob';

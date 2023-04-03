export interface ProjectTree extends ProjectTreeContentMap {
  treeId: string; // userId_projectId_sha. sha is a `sha` from github
}

export interface ProjectTreeContentMap {
  path: string; // path from github
  name: string;
  type: ProjectTreeNodeType;
  treeId: string; // userId_projectId_sha. sha is a `sha` from github
  parentTreeId: string | null; // parent treeId
  fileId: string | null;
}

export type ProjectTreeNodeType = 'tree' | 'blob';

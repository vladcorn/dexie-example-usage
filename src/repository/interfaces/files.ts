export interface Files {
  fileId: string; // userId_projectId_sha. sha is hex from github.
  content: Uint8Array;
}

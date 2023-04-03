import React, { useCallback, useState } from 'react';
import { ProjectTree, projectTreeService } from '../../repository';

export const AddNewProjectTree = () => {
  const [projectTree, setProjectTree] = useState<ProjectTree>({
    name: '',
    fileId: '',
    path: '',
    type: 'tree',
    parentTreeId: null,
    treeId: '',
  });

  const handleClick = useCallback(() => {
    projectTreeService.add(projectTree);
    setProjectTree({
      name: '',
      fileId: '',
      path: '',
      type: 'tree',
      parentTreeId: null,
      treeId: '',
    });
  }, [projectTree]);

  return (
    <div className="add-new-user">
      <h2>Add Project Tree</h2>
      <input
        type="text"
        placeholder="TreeId"
        value={projectTree.treeId}
        onChange={(e) => {
          setProjectTree({ ...projectTree, treeId: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="parentId"
        value={projectTree.parentTreeId}
        onChange={(e) => {
          setProjectTree({ ...projectTree, parentTreeId: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Name"
        value={projectTree.name}
        onChange={(e) => {
          setProjectTree({ ...projectTree, name: e.target.value });
        }}
      />
      <button onClick={handleClick}>Add new tree element</button>
    </div>
  );
};

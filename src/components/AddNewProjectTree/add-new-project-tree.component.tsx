import React, { useCallback, useState } from 'react';
import { ProjectTree, ProjectTreeContentMap, projectTreeService, userProjectTreeService } from '../../repository';

export const AddNewProjectTree = () => {
  const [projectTree, setProjectTree] = useState<ProjectTree>({
    content: new Map<string, ProjectTreeContentMap>(),
    treeId: '',
  });

  const handleClick = useCallback(() => {
    projectTreeService.addProject(projectTree);
  }, [projectTree]);

  return (
    <div className="add-new-user">
      <h2>Add Project Tree</h2>
      <input
        type="text"
        placeholder="User ID"
        value={projectTree.treeId}
        onChange={(e) => {
          setProjectTree({ ...projectTree, treeId: e.target.value });
        }}
      />
      <button onClick={handleClick}>Add new tree element</button>
    </div>
  );
};

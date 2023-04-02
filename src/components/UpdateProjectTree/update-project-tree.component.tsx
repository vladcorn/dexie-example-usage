import React, { useCallback, useState } from 'react';
import { ProjectTree, projectTreeService } from '../../repository';
import { useLiveQuery } from 'dexie-react-hooks';

export const UpdateProjectTree = () => {
  const [projectTreeId, setProjectTreeId] = useState('');
  const projectTree = useLiveQuery(projectTreeService.getProjectTreeByTreeId.bind(null, projectTreeId), [
    projectTreeId,
  ]) as ProjectTree;

  const [projectTreeName, setProjectTreeName] = useState('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setProjectTreeId(e.currentTarget.value);
    },
    [projectTreeId],
  );

  const handleUpdate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setProjectTreeName(e.currentTarget.value);
    },
    [projectTreeName],
  );
  const handleUpdateBtn = useCallback(() => {
    projectTreeService.updateProjectTreeByTreeId({
      ...projectTree,
      content: { ...projectTree?.content, name: projectTreeName },
    });
  }, [projectTreeName]);

  return (
    <div className="add-new-user">
      <h2>Update data project tree</h2>
      <input type="text" onChange={handleChange} placeholder="projectId" />
      <pre>{JSON.stringify(projectTree)}</pre>
      <input type="text" onChange={handleUpdate} placeholder="update project name" />
      <button onClick={handleUpdateBtn}>Update project Name</button>
    </div>
  );
};

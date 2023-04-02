import React, { useCallback, useState } from 'react';
import { ProjectTreeState, projectTreeStateService } from '../../repository';

export const AddNewTreeState = () => {
  const [state, setState] = useState({
    openedFiles: '',
    collapsed: '',
  });

  const handleClick = useCallback(() => {
    const newState: ProjectTreeState['state'] = {
      collapsed: new Set(...state.openedFiles.split(',')),
      openedFiles: new Set(...state.collapsed.split(',')),
    };

    const projectTreeState: ProjectTreeState = { state: newState, userIdProjectId: Date() };
    projectTreeStateService.addProjectTreeState(projectTreeState);
  }, [state]);

  return (
    <div className="add-new-user">
      <h2>Add new tree state</h2>
      <input
        value={state.openedFiles}
        onChange={(e) =>
          setState({
            ...state,
            openedFiles: e.currentTarget.value,
          })
        }
      />
      <input
        value={state.collapsed}
        onChange={(e) =>
          setState({
            ...state,
            collapsed: e.currentTarget.value,
          })
        }
      />
      <button onClick={handleClick}>Add new file</button>
    </div>
  );
};

import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { projectTreeService } from '../../repository';

export const ListOfTreeNodes = () => {
  const [parentId, setParentId] = useState('');
  const nodeList = useLiveQuery(projectTreeService.getByParentId.bind(null, parentId), [parentId]);

  return (
    <div>
      <h2>List of tree nodes</h2>
      <input
        type="text"
        value={parentId}
        onChange={(e) => {
          setParentId(e.currentTarget.value);
        }}
      />
      <pre>{JSON.stringify(nodeList, null, 2)}</pre>
    </div>
  );
};

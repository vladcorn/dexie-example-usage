import React from 'react';
import { AddNewUser } from './components/AddNewUser';
import { AddNewProjectTree } from './components/AddNewProjectTree';
import { AddNewFile } from './components/AddNewFile';
import './app.css';
import { AddNewTreeState } from './components/AddNewTreeState/add-new-tree-state.component';
import { UpdateProjectTree } from './components/UpdateProjectTree';
import { UpdateFile } from './components/UpdateFile';
import { ListOfTreeNodes } from './components/ListOfTreeNodes';

function App() {
  return (
    <div className="app">
      <div className="layout">
        <div>
          <AddNewProjectTree />
          <AddNewUser />
          <AddNewFile />
          <AddNewTreeState />
        </div>
        <div>
          <UpdateProjectTree />
          <UpdateFile />
          <ListOfTreeNodes />
        </div>
      </div>
    </div>
  );
}

export default App;

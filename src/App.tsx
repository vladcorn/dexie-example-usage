import { AddNewUser } from './components/AddNewUser';
import { AddNewProjectTree } from './components/AddNewProjectTree';
import { AddNewFile } from './components/AddNewFile';
import './app.css';
import { AddNewTreeState } from './components/AddNewTreeState/add-new-tree-state.component';
import { UpdateProjectTree } from './components/UpdateProjectTree';

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
        </div>
      </div>
    </div>
  );
}

export default App;

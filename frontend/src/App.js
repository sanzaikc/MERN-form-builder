import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { FormBuilderScreen } from "./screens/FormBuilderScreen";

function App() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <FormBuilderScreen />
      </DndProvider>
    </div>
  );
}

export default App;

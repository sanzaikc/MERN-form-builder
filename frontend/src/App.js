import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppLayout } from "./layouts/AppLayout";
import { FormBuilderScreen } from "./screens/FormBuilderScreen";
import { FormList } from "./screens/FormList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<FormList />} />
          <Route path="/create" element={<FormBuilderScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

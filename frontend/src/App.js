import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AppLayout } from "./layouts/AppLayout";
import { FormBuilderScreen } from "./screens/FormBuilderScreen";
import { FormList } from "./screens/FormList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/forms" replace={true} />} />
          <Route path="/forms" element={<FormList />} />
          <Route path="/forms/create" element={<FormBuilderScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

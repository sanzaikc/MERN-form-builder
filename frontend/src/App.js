import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AppLayout } from "./layouts/AppLayout";
import { CreateFormScreen } from "./screens/forms/CreateFormScreen";
import { EditFormScreen } from "./screens/forms/EditFormScreen";
import { FormListScreen } from "./screens/forms/FormListScreen";
import { SubmissionScreen } from "./screens/SubmissionScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/forms" replace={true} />} />
          <Route path="/forms" element={<FormListScreen />} />
          <Route path="/forms/create" element={<CreateFormScreen />} />
          <Route path="/forms/:formId/edit" element={<EditFormScreen />} />
          <Route path="/submission/:formId" element={<SubmissionScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

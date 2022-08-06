import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AppLayout } from "./layouts/AppLayout";
import { FormLayout } from "./layouts/FormLayout";
import { CreateFormScreen } from "./screens/forms/CreateFormScreen";
import { EditFormScreen } from "./screens/forms/EditFormScreen";
import { FormListScreen } from "./screens/forms/FormListScreen";
import { FormSubmissions } from "./screens/forms/submissions/FormSubmissions";
import { SubmissionDetailScreen } from "./screens/forms/submissions/SubmissionDetailScreen";
import { SubmitScreen } from "./screens/forms/submissions/SubmitScreen";
import { NotFound } from "./screens/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/forms" replace={true} />} />
          <Route path="/forms" element={<FormListScreen />} />
          <Route path="/forms/create" element={<CreateFormScreen />} />
          <Route path="/forms/:formId/edit" element={<EditFormScreen />} />
          <Route
            path="/forms/:formId/submissions"
            element={<FormSubmissions />}
          />

          <Route element={<FormLayout />}>
            <Route
              path="/submissions/:submissionId"
              element={<SubmissionDetailScreen />}
            />
            <Route
              path="/submissions/:formId/submit"
              element={<SubmitScreen />}
            />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

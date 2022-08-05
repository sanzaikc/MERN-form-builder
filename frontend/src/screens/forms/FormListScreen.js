import React from "react";
import { Link } from "react-router-dom";

import { useGetAllFormsQuery } from "../../redux/services/formService";

export const FormListScreen = () => {
  const { data: formList, isLoading } = useGetAllFormsQuery();

  if (isLoading) return <div>Loading...</div>;

  return !formList.length ? (
    <div>No Forms Yet!</div>
  ) : (
    <ul>
      {formList.map((form) => (
        <li key={form._id}>
          <Link to={`/forms/${form._id}/edit`}>{form.name}</Link>
        </li>
      ))}
    </ul>
  );
};

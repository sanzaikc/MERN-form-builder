import React from "react";

import { useGetAllFormsQuery } from "../redux/services/formService";

export const FormList = () => {
  const { data, isLoading } = useGetAllFormsQuery();

  if (isLoading) return <div>Loading...</div>;

  return <pre>{JSON.stringify(data, null, 3)}</pre>;
};

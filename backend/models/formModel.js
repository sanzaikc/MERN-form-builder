import mongoose from "mongoose";

// const fieldSchema = mongoose.Schema(
//   {
//     name: String,
//     type: String,
//   },
//   { strict: false }
// );

const formSchema = mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    fields: [mongoose.Schema.Types.Mixed],
  },
  { strict: false, timestamps: true }
);

export const Form = mongoose.model("Form", formSchema);

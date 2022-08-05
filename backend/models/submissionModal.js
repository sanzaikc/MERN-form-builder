import mongoose from "mongoose";

const submissionSchema = mongoose.Schema(
  {
    submitter: String,
    form: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
      required: true,
    },
    values: { type: Map, of: String },
  },
  { strict: false, timestamps: true }
);

export const Submission = mongoose.model("Submission", submissionSchema);

import mongoose from "mongoose";

const submissionSchema = mongoose.Schema(
  {
    name: String,
    form: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
      required: true,
    },
    values: [mongoose.Schema.Types.Mixed],
  },
  { strict: false }
);

export const Submission = mongoose.model("Submission", submissionSchema);

import mongoose from "mongoose";

const config = useRuntimeConfig();

export default async () => {
  try {
    await mongoose.connect(config.mongoUri);
  } catch (error) {
    console.log(error);
  }
};

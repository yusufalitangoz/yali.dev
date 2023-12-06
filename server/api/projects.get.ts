import Project from "~/server/models/project";

export default defineEventHandler(async () => {
  try {
    const res = await Project.find();
    return res;
  } catch (error) {
    console.log(error);
  }
});

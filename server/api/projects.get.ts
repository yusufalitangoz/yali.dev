import Project from "~/server/models/project";

export default defineEventHandler(async () => {
  const res = await Project.find();
  return res;
});

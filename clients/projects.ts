import type { ProjectProps } from "~/types";

class ProjectsClient {
  public async get(): Promise<ProjectProps[] | null> {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const { data } = await useFetch("/api/projects");
      return data.value as ProjectProps[];
    } catch {
      return null;
    }
  }
}

export default ProjectsClient;

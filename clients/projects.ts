import type { ProjectProps } from "~/types";

class ProjectsClient {
  public async get(): Promise<ProjectProps[] | null> {
    try {
      const { data } = await useFetch("/api/projects");
      return data.value as ProjectProps[];
    } catch {
      return null;
    }
  }
}

export default ProjectsClient;

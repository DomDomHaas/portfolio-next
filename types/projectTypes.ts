import type {LucideIcon} from "lucide-react";

/*export type Tag = {
  name: string;
  active: boolean;
}*/

export type ProjectItem = {
  title: string;
  images: string[];
  tags: string[];
  content: string;
  isActive?: boolean;
}


export type Project = {
  title: string;
  items: ProjectItem[];
}

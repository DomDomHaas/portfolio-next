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
}

export type ProjectGroupItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: ProjectItem[];
}

export type Project = {
  title: string;
  items: ProjectItem[];
}

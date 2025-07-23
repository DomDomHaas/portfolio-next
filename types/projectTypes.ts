import type {LucideIcon} from "lucide-react";

export type ProjectItem = {
  title: string;
  url: string;
}

export type ProjectGroupItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: ProjectItem[];
}

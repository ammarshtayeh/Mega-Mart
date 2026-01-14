export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

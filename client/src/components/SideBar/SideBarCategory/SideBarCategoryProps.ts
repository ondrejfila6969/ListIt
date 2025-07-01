import type { LucideProps } from "lucide-react";

export type SideBarCategoryProps = {
    name: string,
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    color: string,
    path: string
}
import type { LucideProps } from "lucide-react";

export type SideBarCategoryProps = {
    name: String,
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    color: string
}
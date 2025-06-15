import type React from "react";
import type { SideBarCategoryProps } from "./SideBarCategoryProps";

export const SideBarCategory: React.FC<SideBarCategoryProps> = (props) => {
    return(
        <>
            <div>
                
                <h1>{props.name}</h1>
            </div>
        </>
    )
}
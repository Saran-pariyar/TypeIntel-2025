// import path from "path";

export interface NavLinkInterface {
    name: string;
    path: string;
    subMenu?: [
        {
            name: string;
            path: string;
            isActive: (pathname: string) => boolean
        }
    ]; // Optional sub-menu items
    isActive?: (pathname: string) => boolean; // Optional function to determine active state
}
export interface NavLinkInterface {
    name: string;
    path: string;
    subMenu?: []; // Optional sub-menu items
    isActive?: (pathname: string) => boolean; // Optional function to determine active state
}
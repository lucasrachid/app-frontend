import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import HomeIcon from "@mui/icons-material/Home";
import App from "../pages/App";

export interface PageRoute {
    path: string;
    Element(): JSX.Element;
    name: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    notDisplayInDrawer?: boolean;
}

const pageRoutes: PageRoute[] = [
    {
        path: "/",
        Element: App,
        name: "Início",
        Icon: HomeIcon,
    },
];

export default pageRoutes;
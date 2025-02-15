import Login from "../pages/Login";
import Signin from "../pages/Signin";
import LayoutDefautlt from "../layout/LayoutDefault";
import Home from "../pages/Home";
import Private from "../components/Allrouter/Private";
import DScv from "../pages/HomeCompany/DScv";
import Logout from "../pages/Logout";
import InfoCV from "../pages/HomeCompany/InfoCV";
import PageLogin4Can from "../pages/PageLogin4Can"
import PageSignin4Can from "../pages/PageSignin4Can";
import DScty from "../pages/DScty";
import InfoCty from "../pages/HomeCompany/InfoCty";
import Filter from "../pages/Filter";
import SearchJob from "../pages/SearchJob";
import HomeCompany from "../pages/HomeCompany";
import Dashboard from "../pages/HomeCompany/Dashboard";
import EditInfoCty from "../pages/EditInfoCty";
export const routers = [
    {
        path: "/",
        element: <LayoutDefautlt />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signin",
                element: <Signin />
            },
            {
                path: "logout",
                element: <Logout />
            },
            {
                path: "login4can",
                element: <PageLogin4Can />
            },
            {
                path: "signin4can",
                element: <PageSignin4Can />
            },
            {
                path: "filter",
                element: <Filter />
            },
            {
                path: "searchJob",
                element: <SearchJob />
            },
            {
                element: <Private />,
                children: [
                    {
                        path: "dscv",
                        element: <DScv />
                    },
                    {
                        path: "homeCom",
                        element: <HomeCompany />
                    },
                    {
                        path: "dashborad",
                        element: <Dashboard />
                    },
                    {
                        path: "infoCV/:id",
                        element: (() => { 
                            // console.log("🚀 Router đã nhận đường dẫn infoCV/:id"); 
                            return <InfoCV />; 
                        })()
                    },
                    {
                        path: "dscty",
                        element: <DScty />
                    },
                    {
                        path: "infoCty/:id",
                        element: (() => { 
                            return <InfoCty /> 
                        })()
                    },
                    {
                        path: "editCty",
                        element: <EditInfoCty />
                    }
                ]
            }
        ]
    }
]
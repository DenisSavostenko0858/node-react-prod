import { ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, PRODUCT_ROUTE } from "./utils/consts"
import AdminPanel from "./page/AdminPanel"
import ProductCard from "./page/ProductCard"
import Auth from "./page/Auth"
import Shop from "./page/Shop"
import Basket from "./page/Basket"


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },    
    {
        path: REGISTER_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductCard
    }
]
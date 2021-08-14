import Home from './components/Home'
import Categories from './screens/category/Categories'
import AddCategory from './screens/category/AddCategory'
import EditCategory from './screens/category/EditCategory'
import AddProduct from './screens/product/AddProduct'
import Products from './screens/product/Products'
import EditProduct from './screens/product/EditProduct'


export default {
    mode:'history',
    routes: [
        {
            path:'/admin',
            component: Home
        },
        {
            path:'/admin/categories',
            component: Categories
        },
        {
            path:'/admin/addCategory',
            component: AddCategory
        },
        {
            path:'/admin/editCategory',
            component: EditCategory,
            props: true,
            name: 'EditCategory'
        },
        {
            path:'/admin/addProduct',
            component: AddProduct
        },
        {
            path:'/admin/products',
            component: Products
        },
        {
            path:'/admin/editProduct',
            component: EditProduct,
            props: true,
            name: 'EditProduct'
        },
    ]
}
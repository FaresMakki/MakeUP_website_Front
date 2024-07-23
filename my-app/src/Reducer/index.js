import {combineReducers} from "redux";

import User from "./User";
import Admin from "./Admin";
import Category from "./Category";
import SousCategory from "./SousCategory";
import Types from "./Types";
import Product from "./Product";

const rootReducer=combineReducers({
    usersinfo:User,
    admininfo:Admin,
    categoryinfo:Category,
    souscategory:SousCategory,
    typesinfo:Types,
    productInfo:Product
})
export default rootReducer
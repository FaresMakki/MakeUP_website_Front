// import React, { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faChevronRight, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
// import logo from './images/logo_haut.png';
// import { get_all_category } from "../../Action/Category";
// import Megamenu from "./Megamenu";
// import './Navbar_style.css';
//
// const NavBar = () => {
//     const dispatch = useDispatch();
//     const categories = useSelector((state) => state.categoryinfo.Category_list);
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const dropdownRef = useRef(null);
//
//     useEffect(() => {
//         dispatch(get_all_category());
//     }, [dispatch]);
//     const [isOpen, setIsOpen] = useState(false);
//
//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };
//
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setSelectedCategory(null); // Deselect category if clicked outside
//             }
//         };
//
//         document.addEventListener("mousedown", handleClickOutside);
//
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);
//
//     return (
//         <nav className="w-screen m-0 p-0 b-0">
//             <ul className="menus">
//                 <img src={logo} alt="Logo" className="logo_img" />
//                 <h1 className="navbar_h1">BeautyLeaf</h1>
//
//                 <div ref={dropdownRef} className="dropdown m-0 p-0 w-60 relative">
//                     <button tabIndex={0} role="button" className="flex justify-between items-center rounded-t-xl rounded-b-xl mt-2 bg-white h-11 w-60">
//                         <div className="flex items-center">
//                             <FontAwesomeIcon className="icon ml-3 mr-1 text-xl" icon={faBars} />
//                             <h2 className="text-xl">Category</h2>
//                         </div>
//                         <span className="arrow mr-3"></span>
//                     </button>
//
//                     <ul tabIndex={0} className="dropdown-content  bg-base-100 rounded-box z-[1] w-[240px]  p-2 shadow" >
//                         {categories.map((cat, index) => (
//                             <div key={index} className="flex items-center gap-3" onClick={() => {
//                                 setSelectedCategory(cat._id)
//                             }}>
//
//                             <div className="dropdown dropdown-right w-full dropdown-end m-2">
//
//                                     <div
//                                         tabIndex={0}
//                                         role="button"
//                                         className="flex w-full  m-0 p-0 justify-between items-center"
//                                         onClick={toggleDropdown}
//                                     >
//                                         <div className="flex items-center">
//                                             <div className="avatar">
//                                                 <div className="mask mask-squircle mt-1 ml-0 h-12 w-12">
//                                                     <img src={`${cat.icone}`} alt="Product image"/>
//                                                 </div>
//                                             </div>
//                                             <div className="ml-2">
//                                                 <h2 className="font-bold text-xl mt-3">{cat.Name}</h2>
//                                             </div>
//                                         </div>
//                                         <FontAwesomeIcon className="ml-4 text-xl" icon={faChevronRight} />
//
//
//
//                                     </div>
//
//                                 </div>
//                                 {isOpen && (
//                                     <ul tabIndex={0}
//                                         className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[600px] mt-[400px]  ml-[240px]  p-2 shadow m">
//                                         <Megamenu  categoryId={selectedCategory} />
//                                     </ul>
//                                 )}
//                             </div>
//
//                         ))}
//
//
//                     </ul>
//
//
//                 </div>
//                 {/*{selectedCategory && (*/}
//                 {/*    <div className="ml-">*/}
//                 {/*        <Megamenu categoryId={selectedCategory} />*/}
//                 {/*    </div>*/}
//                 {/*)}*/}
//                 <a href="#" className="white_button">Acceuil</a>
//                 <a href="#" className="white_button">Produits en promo</a>
//                 <div className="form-control mt-3 h-9">
//                     <input type="text" placeholder="Search" className="input search"/>
//                 </div>
//                 <a href="#" className="white_button">A propos de nous</a>
//                 <a href="/user" className="user_icon">
//                     <FontAwesomeIcon icon={faUser}/>
//                 </a>
//                 <a href="/cart" className="cart_icon">
//                     <FontAwesomeIcon icon={faShoppingCart}/>
//                 </a>
//             </ul>
//
//         </nav>
//     );
// };
//
// export default NavBar;
// import React, { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faChevronRight, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
// import logo from './images/logo_haut.png';
// import { get_all_category } from "../../Action/Category";
// import Megamenu from "./Megamenu";
// import './Navbar_style.css';
//
// const NavBar = () => {
//     const dispatch = useDispatch();
//     const categories = useSelector((state) => state.categoryinfo.Category_list);
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const dropdownRef = useRef(null);
//
//     useEffect(() => {
//         dispatch(get_all_category());
//     }, [dispatch]);
//
//     const [openCategories, setOpenCategories] = useState({});
//
//     const toggleDropdown = (categoryId) => {
//         setOpenCategories((prevOpenCategories) => ({
//             ...prevOpenCategories,
//             [categoryId]: !prevOpenCategories[categoryId],
//         }));
//     };
//
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setSelectedCategory(null); // Deselect category if clicked outside
//                 setOpenCategories({}); // Close all categories if clicked outside
//             }
//         };
//
//         document.addEventListener("mousedown", handleClickOutside);
//
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);
//
//     return (
//         <nav className="w-screen m-0 p-0 b-0">
//             <ul className="menus">
//                 <img src={logo} alt="Logo" className="logo_img" />
//                 <h1 className="navbar_h1">BeautyLeaf</h1>
//
//                 <div ref={dropdownRef} className="dropdown m-0 p-0 w-60 relative">
//                     <button tabIndex={0} role="button" className="flex justify-between items-center rounded-t-xl rounded-b-xl mt-2 bg-white h-11 w-60">
//                         <div className="flex items-center">
//                             <FontAwesomeIcon className="icon ml-3 mr-1 text-xl" icon={faBars} />
//                             <h2 className="text-xl">Category</h2>
//                         </div>
//                         <span className="arrow mr-3"></span>
//                     </button>
//
//                     <ul tabIndex={0} className="dropdown-content  bg-base-100 rounded-box z-[1] w-[240px]  p-2 shadow">
//                         {categories.map((cat, index) => (
//                             <div key={index} className="flex items-center gap-3" onClick={() => {
//                                 setSelectedCategory(cat._id);
//                             }}>
//                                 <div className="dropdown dropdown-right w-full dropdown-end m-2">
//                                     <div
//                                         tabIndex={0}
//                                         role="button"
//                                         className="flex w-full  m-0 p-0 justify-between items-center"
//                                         onClick={() => toggleDropdown(cat._id)}
//                                     >
//                                         <div className="flex items-center">
//                                             <div className="avatar">
//                                                 <div className="mask mask-squircle mt-1 ml-0 h-12 w-12">
//                                                     <img src={`${cat.icone}`} alt="Product image" />
//                                                 </div>
//                                             </div>
//                                             <div className="ml-2">
//                                                 <h2 className="font-bold text-xl mt-3">{cat.Name}</h2>
//                                             </div>
//                                         </div>
//                                         <FontAwesomeIcon className="ml-4 text-xl" icon={faChevronRight} />
//                                     </div>
//                                 </div>
//                                 {openCategories[cat._id] && (
//                                     <ul tabIndex={0}
//                                         className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[600px] mt-[400px] ml-[240px] p-2 shadow m">
//                                         <Megamenu categoryId={selectedCategory} />
//                                     </ul>
//                                 )}
//                             </div>
//                         ))}
//                     </ul>
//                 </div>
//                 <a href="#" className="white_button">Acceuil</a>
//                 <a href="#" className="white_button">Produits en promo</a>
//                 <div className="form-control mt-3 h-9">
//                     <input type="text" placeholder="Search" className="input search" />
//                 </div>
//                 <a href="#" className="white_button">A propos de nous</a>
//                 <a href="/user" className="user_icon">
//                     <FontAwesomeIcon icon={faUser} />
//                 </a>
//                 <a href="/cart" className="cart_icon">
//                     <FontAwesomeIcon icon={faShoppingCart} />
//                 </a>
//             </ul>
//         </nav>
//     );
// };
//
// export default NavBar;
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronRight, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo_haut.png';
import { get_all_category } from "../../Action/Category";
import Megamenu from "./Megamenu";
import './Navbar_style.css';

const NavBar = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categoryinfo.Category_list);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        dispatch(get_all_category());
    }, [dispatch]);

    const [openCategories, setOpenCategories] = useState({});

    const toggleDropdown = (categoryId) => {
        setOpenCategories((prevOpenCategories) => {
            const newOpenCategories = Object.keys(prevOpenCategories).reduce((acc, key) => {
                acc[key] = false;
                return acc;
            }, {});
            return {
                ...newOpenCategories,
                [categoryId]: !prevOpenCategories[categoryId],
            };
        });
    };
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const updateCounter = () => {
            const items = JSON.parse(localStorage.getItem('prod')) || [];
            setCounter(items.length);
        };

        // Initialize the counter on component mount
        updateCounter();

        // Listen for storage changes
        window.addEventListener('storage', updateCounter);

        return () => {
            window.removeEventListener('storage', updateCounter);
        };
    }, []);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setSelectedCategory(null); // Deselect category if clicked outside
                setOpenCategories({}); // Close all categories if clicked outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="w-screen m-0 p-0 b-0">
            <ul className="menus">
                <img src={logo} alt="Logo" className="logo_img" />
                <h1 className="navbar_h1">BeautyLeaf</h1>

                <div ref={dropdownRef} className="dropdown m-0 p-0 w-60 relative  ">
                    <button tabIndex={0} role="button" className="flex justify-between items-center rounded-t-xl  rounded-b-xl mt-2 bg-white h-11 w-60">
                        <div className="flex items-center">
                            <FontAwesomeIcon className="icon ml-3 mr-1 text-xl" icon={faBars} />
                            <h2 className="text-xl">Category</h2>
                        </div>
                        <span className="arrow mr-3"></span>
                    </button>

                    <ul tabIndex={0} className="dropdown-content  bg-base-100 rounded-box z-[1] w-[240px]  p-2 shadow bg-gradient-to-t  from-emerald-50 via-white to-white">
                        {categories.map((cat, index) => (
                            <div key={index} className="flex items-center gap-3" onClick={() => {
                                setSelectedCategory(cat._id);
                                toggleDropdown(cat._id);
                            }}>
                                <div className="dropdown dropdown-right w-full dropdown-end m-2">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="flex w-full  m-0 p-0 justify-between items-center"
                                    >
                                        <div className="flex items-center">
                                            <div className="avatar">
                                                <div className="mask mask-squircle mt-1 ml-0 h-12 w-12">
                                                    <img src={`${cat.icone}`} alt="Product image" />
                                                </div>
                                            </div>
                                            <div className="ml-2">
                                                <h2 className="font-bold text-xl mt-3">{cat.Name}</h2>
                                            </div>
                                        </div>
                                        <FontAwesomeIcon className="ml-4 text-xl" icon={faChevronRight} />
                                    </div>
                                </div>
                                {openCategories[cat._id] && (
                                    <ul tabIndex={0}
                                        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[600px] mt-[400px] ml-[240px] p-2 shadow m">

                                        <Megamenu categoryId={selectedCategory} />
                                    </ul>
                                )}
                            </div>
                        ))}
                    </ul>
                </div>
                <a href="#" className="white_button">Acceuil</a>
                <a href="#" className=" white_button" style={{marginLeft:"50px"}}>Promotion</a>
                <div className="form-control mt-3 h-9">
                    <input type="text" placeholder="Search" className="input search" />
                </div>
                <a href="#" className="white_button">A propos de nous</a>
                <a href="/user" className="user_icon">
                    <FontAwesomeIcon icon={faUser} />
                </a>
                <a href="/cart" className="flex cart_icon">
                    <FontAwesomeIcon className={"mt-[5px]"} icon={faShoppingCart}/>
                    <div className="badge badge-warning text-lg w-1/3 text-green-800">{counter}</div>

                </a>
            </ul>
        </nav>
    );
};

export default NavBar;

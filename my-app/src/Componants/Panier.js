import NavBar from "./ProductList/NavBar";
import im from "./ProductList/images/logo_haut.png";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { get_all_product_mainphoto } from "../Action/Product";

const Panier = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('prod')) || []);
    const MainPicture = useSelector(state => state.productInfo.PhotoList);

    useEffect(() => {
        dispatch(get_all_product_mainphoto());
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('prod', JSON.stringify(items));
    }, [items]);

    const handleDelete = (id) => {
        const updatedItems = items.filter(item => item._id !== id);
        setItems(updatedItems);
        localStorage.setItem('prod', JSON.stringify(updatedItems));
    };


    const [counter, setCounter] = useState(1)


    const incremant=()=>{
        setCounter(counter+1)
    }
    const decremant=()=>{
        if(counter>1){setCounter(counter-1)}

    }

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-10">
                <NavBar />
            </div>
            <div className={"mt-[100px] flex font-bold text-4xl text-emerald-800 ml-[150px]"}>Panier
            </div>
            <hr className={"ml-[150px] h-1 w-[100px] bg-gray-100 rounded-3xl dark:bg-gray-700 "} />
            <div>
                <div className="overflow-x-auto h-[5440px] ">
                    <table className="ml-[150px] table w-[1500px] table-pin-rows">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Prices</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {items && items.length > 0 ? (
                            items.map((prod, index) => {
                                const filteredPicture = MainPicture.filter(Photo => Photo.IdProduct === prod._id);
                                return (
                                    <tr key={index}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={filteredPicture[0] ? filteredPicture[0].mainpicture : 'default_image_url'}
                                                            alt="Product"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{prod.Name}</div>
                                                    <div className="text-sm opacity-50">{prod.brand}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={"flex"}>
                                            <form className="  ">

                                                <div className="relative flex items-center max-w-[8rem]">
                                                    <button type="button" id="decrement-button"
                                                            onClick={decremant}
                                                            data-input-counter-decrement="quantity-input"
                                                            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                        <svg className="w-3 h-3 text-gray-900 dark:text-white"
                                                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                             fill="none" viewBox="0 0 18 2">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                  stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                                        </svg>
                                                    </button>

                                                    <div className=" text-3xl mb-2 ml-4 mr-4 bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                        {counter}
                                                    </div>
                                                    <button type="button" id="increment-button"
                                                            onClick={incremant}
                                                            data-input-counter-increment="quantity-input"
                                                            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                        <svg className="w-3 h-3 text-gray-900 dark:text-white"
                                                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                             fill="none" viewBox="0 0 18 18">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                  stroke-linejoin="round" stroke-width="2"
                                                                  d="M9 1v16M1 9h16"/>
                                                        </svg>
                                                    </button>
                                                </div>

                                            </form>
                                        </td>
                                        <td>
                                            <p className="p-0 ml-4 b-0 font-extrabold text-2xl mt-0 text-green-800">{prod.Prices}dt
                                            </p>
                                        </td>
                                        <th>
                                            <button
                                                className="btn btn-circle btn-outline btn-error"
                                                onClick={() => handleDelete(prod._id)}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </th>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="3">
                                    <h1 className="text-center">Nothing added to your cart</h1>
                                </td>
                            </tr>
                        )}
                        </tbody>
                        {/* foot */}
                        <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Prices</th>
                            <th></th>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <footer className="w-full fixed bottom-0 footer bg-emerald-950 text-base-content p-10" style={{ height: "200px " }}>
                <aside>
                    <img src={im} style={{ width: "150px", height: "150" }} alt="Company Logo" />
                    <p className={"text-white"}>
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title text-white">Services</h6>
                    <a className="link link-hover text-white">Branding</a>
                    <a className="link link-hover text-white">Design</a>
                    <a className="link link-hover text-white">Marketing</a>
                    <a className="link link-hover text-white">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-white">Company</h6>
                    <a className="link link-hover text-white">About us</a>
                    <a className="link link-hover text-white">Contact</a>
                    <a className="link link-hover text-white">Jobs</a>
                    <a className="link link-hover text-white">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-white">Legal</h6>
                    <a className="link link-hover text-white">Terms of use</a>
                    <a className="link link-hover text-white">Privacy policy</a>
                    <a className="link link-hover text-white">Cookie policy</a>
                </nav>
            </footer>
        </>
    );
};

export default Panier;

import NavBar from "./NavBar";
import im from  "./images/logo_haut.png"
import React, {useEffect, useState} from "react";
import Filter_Sidebar from "./Filter_Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {get_all_product_mainphoto, GetproductDiscount} from "../../Action/Product";
import {useNavigate} from "react-router-dom";

const ProductList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_all_product_mainphoto());
        dispatch(GetproductDiscount());
    }, [dispatch]);

    const Products = useSelector(state => state.productInfo.Productlist);
    const MainPicture = useSelector(state => state.productInfo.PhotoList);
    const discountlist = useSelector(state => state.productInfo.Discountslist);
    const filteredProducts = Products.filter(product => product.typeid === "58");


    // console.log(Products);
    // console.log(filteredProducts);
    const nav= useNavigate()
    function productdetail(id) {
        nav(`/productinfo/${id}`)
    }

    return (
        <>
            <div className="flex flex-col h-screen">
                <div className="fixed top-0 left-0 right-0 z-10">
                    <NavBar/>
                </div>


                <div className="flex flex-1 pt-16">
                    <div className="w-64 bg-dark-1">
                        <Filter_Sidebar/>
                    </div>
                    <div className="flex flex-col flex-1 p-4">
                        <h1 className="text-5xl text-left ml-18 mb-4">Parfume</h1>
                        <div className="flex flex-wrap">
                            {filteredProducts && filteredProducts.length > 0 ? (
                                filteredProducts.map((prod, index) => {
                                    const filteredPhoto = MainPicture.find(Photo => Photo.IdProduct === prod._id);
                                    const discount = discountlist.filter(dis => dis.Product_id === prod._id);
                                    return (
                                        <div key={index} className="ml-9 card bg-base-100 w-64 h-84 m-4 mb-0"
                                             onClick={() => {


                                                 productdetail(prod._id)

                                             }}>
                                            <figure className="relative z-[1] rounded-md bg-white ">
                                                {discount && discount.length > 0 ? (

                                                    <div
                                                        className="ribbon absolute -top-10 -left-5 h-40 w-40 overflow-hidden before:absolute before:top-0 before:right-0 before:-z-[1] before:border-4 before:border-blue-500 after:absolute after:left-0 after:bottom-0 after:-z-[1] after:border-4 after:border-blue-500">
                                                        <div
                                                            className=" absolute -left-14 top-[43px] w-60 -rotate-45 bg-gradient-to-br  from-emerald-950 via-emerald-800 to-emerald-950 py-2.5 text-center text-white shadow-md">
                                                            <h2 className={"justify-items-center text-xl mr-5"}>{
                                                                discount[0].discountper
                                                            } %</h2>
                                                        </div>
                                                    </div>
                                                ) : (""
                                                )}

                                                <img className="w-full h-full object-cover"
                                                     src={filteredPhoto ? filteredPhoto.mainpicture : 'default_image_url'}
                                                     alt="product"
                                                />
                                            </figure>
                                            <div className="items-center m-0 p-0 card-body">
                                                <h2 className="p-1 m-0 card-title items-center">{prod.Name}</h2>
                                                <div className="rating">
                                                    <input type="radio" name="rating-1"
                                                           className="mask mask-star w-3 h-3 bg-orange-400"/>
                                                    <input type="radio" name="rating-1"
                                                           className="mask mask-star w-3 h-3 bg-orange-400"
                                                           defaultChecked/>
                                                    <input type="radio" name="rating-1"
                                                           className="mask mask-star w-3 h-3 bg-orange-400"/>
                                                    <input type="radio" name="rating-1"
                                                           className="mask mask-star w-3 h-3 bg-orange-400"/>
                                                    <input type="radio" name="rating-1"
                                                           className="mask mask-star w-3 h-3 bg-orange-400"/>
                                                </div>
                                                {discount && discount.length > 0 ? (
                                                    <div className={"flex"}>
                                                        <p className="line-through   p-0 m-0 b-0 font-thin text-xl mt-1 opacity-50 text-emerald-950">{prod.Prices}dt</p>
                                                        <p className=" p-0 ml-4 b-0 font-extrabold text-2xl  mt-0 text-green-800">{
                                                            (discount[0].discountper * prod.Prices / 100).toFixed(1)}dt</p>

                                                    </div>
                                                ) : (
                                                    <p className="    p-0 m-0 b-0 font-thin text-xl mt-1  text-emerald-950.">{prod.Prices}dt</p>

                                                )}
                                                <p className="p-0 m-0 b-0 text-md text-emerald-950"></p>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p>Nothing Found</p>
                            )}
                        </div>

                    </div>

                </div>


                <footer className="footer bg-emerald-950 text-base-content p-10" style={{marginTop: "150px "}}>
                    <aside>

                        <img src={im} className={"ml-[260px]"} alt={""} style={{ width: "150px", height: "150"}}/>


                        <p className={"text-white ml-[230px]"}>
                            ACME Industries Ltd.
                            <br/>
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

            </div>

        </>
    );
};

export default ProductList;























































import NavBar from "./ProductList/NavBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import im from "./ProductList/images/logo_haut.png"
import {useDispatch, useSelector} from "react-redux";
import {json, useParams} from "react-router-dom";
import {GetproductDiscount, getsugession, Getsuggestion} from "../Action/Product";
const Product_info = () => {
    const {id}=useParams()

    const [counter, setCounter] = useState(1)
    const Products = useSelector(state => state.productInfo.Productlist);
    const pictures = useSelector(state => state.productInfo.PhotoList);
    const sugg = useSelector(state => state.productInfo.suggetion);
    const discountlist = useSelector(state => state.productInfo.Discountslist);
    const discount = discountlist.filter(dis => dis.Product_id === id);

    const filteredPhoto = pictures.find(Photo => Photo.IdProduct === id);
    const prod = Products.find(product => product._id === id);
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(Getsuggestion(prod.typeid))

    }, [prod]);
    console.log(sugg)
    const incremant=()=>{
        setCounter(counter+1)
    }
    const decremant=()=>{
        if(counter>1){setCounter(counter-1)}

    }

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {

        setActiveIndex(activeIndex === index ? null : index);
    };


    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorited(!isFavorited);
    };

    const addpanier = () => {
        const items = JSON.parse(localStorage.getItem('prod')) || [];
        items.push(prod);
        localStorage.setItem('prod', JSON.stringify(items));

        // Dispatch a custom event to notify about the change
        window.dispatchEvent(new Event('storage'));

    };


    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-10">
                <NavBar/>
            </div>
            <div className="grid grid-cols-2">

                <div className="col-span-1 mt-50" style={{marginTop: '100px', marginLeft: '80px'}}>

                    <div className="carousel flex w-110 h-120 ml-3 mt-4">
                        <div id="item0" className="carousel-item w-full">
                            <img
                                src={filteredPhoto.mainpicture}
                                className=" rounded-3xl  " alt={""} style={{width: "690px", height: "680px"}}/>
                        </div>

                        {filteredPhoto.Pictures.map((p, index) =>

                            <div key={index} id={`item${index+1}`} className="carousel-item w-full">
                                <img
                                    src={p}
                                    className="" style={{width: "690px", height: "680px"}} alt={""}/>
                            </div>
                        )}

                    </div>
                    <div className="  justify-items-center gap-2 py-2"
                         style={{width: "700px", marginTop: '10px', marginLeft: '0px'}}>

                        <a href={`#item0`} key={0} className="btn p-0 bg-white  btn-lg"
                           style={{width: '80px', height: '80px'}}>
                            <img className={"rounded-md"}
                                 src={filteredPhoto.mainpicture}
                                 alt={""}
                                 style={{width: '100%', height: '100%'}}
                            />
                        </a>


                        {filteredPhoto.Pictures.map((p, index) =>

                            <a href={`#item${index + 1}`} key={index} className="btn p-0 bg-white  btn-lg"
                               style={{width: '80px', height: '80px'}}>
                                <img className={"rounded-md"}
                                     src={p}
                                     alt={""}
                                     style={{width: '100%', height: '100%'}}
                                />
                            </a>
                        )}


                    </div>
                </div>

                <div className="col-span-1 mt-50" style={{marginTop: '200px', marginLeft: '60px'}}>
                    <div className={"flex"}>
                        <h1 className={"text-5xl "}>{prod.Name}</h1>

                    </div>
                    <div className={"flex flex-col items-start "} style={{width: "780px", marginRight: "40px"}}>
                        <h3 className={"opacity-50 text-xl m-2 text-emerald-950 full "}>{prod.brand}</h3>
                        <p className={"flex text-left font-thin text-lg"}>{prod.Description}</p>

                    </div>
                    <hr className=" h-1   bg-gray-100  rounded md:my-8 dark:bg-gray-700" style={{width: "780px"}}/>

                    <div className={"flex"}>
                        {discount && discount.length>0?(
                            <div className={"flex mt-3"}>
                                <h4 className={"text-4xl mr-2"}>Prix:</h4>
                                <h4 className=" line-through opacity-70 text-4xl text-emerald-950">{prod.Prices}dt</h4>
                                <h4 className=" ml-7  text-4xl text-emerald-950">{(discount[0].discountper * prod.Prices / 100).toFixed(1)}dt</h4>
                            </div>

                        ): (
                            <div className={"flex mt-3"}>
                                <h4 className={"text-4xl mr-2"}>Prix:</h4>
                                <h4 className="text-4xl text-emerald-950">{prod.Prices}dt</h4>
                            </div>

                        )}


                        <div className={"flex "} style={{marginLeft: "300px", marginTop: "0px"}}>

                            <button onClick={decremant} className={"flex bg-emerald-800 rounded-3xl w-10 h-10 mt-2"}>
                                <FontAwesomeIcon className={"text-white text-3xl"} icon={faMinus} style={{marginTop:"6px",marginLeft:"6px"}}/>
                            </button>
                            <h3 className={"text-5xl  mt-1 ml-4 mr-5"}>{counter}</h3>

                            <button onClick={incremant} className={"flex bg-emerald-800 rounded-3xl w-10 h-10 mt-2"}>
                                <FontAwesomeIcon className={"text-white text-3xl"} icon={faPlus} style={{marginTop:"6px",marginLeft:"6px"}}

                                /></button>
                        </div>


                    </div>
                    <hr className=" h-1   bg-gray-100  rounded md:my-8 dark:bg-gray-700" style={{width: "780px"}}/>

                    <div className={"flex"}>
                        <button onClick={addpanier} className=" btn btn-wide bg-pink-500 text-white text-xl rounded-3xl">Ajout au panier
                        </button>

                    </div>
                    <div className="flex mt-9" onClick={handleFavoriteClick}>
                        <FontAwesomeIcon
                            icon={isFavorited ? fasHeart : farHeart}
                            style={{color: isFavorited ? 'hotpink' : 'red', fontSize: "40px"}}
                        />
                        <span className=" font-bold  " style={{marginTop: "2px", marginLeft: "14px", fontSize: '24px'}}>Ajout Au Favoris</span>
                    </div>
                    <hr className=" h-1   bg-gray-100  rounded md:my-8 dark:bg-gray-700" style={{width: "780px"}}/>
                    <div className={"flex"}
                         >
                        <div className="badge w-[170px] h-[50px] text-white text-2xl badge-success gap-2">

                            En Stock
                        </div>
                    </div>
                </div>

            </div>


            <div className={"flex "} style={{marginLeft: "100px", marginTop: "100px"}}>
                <div className="space-y-2">

                    <div className="bg-white">
                        <div
                            className="collapse-title text-xl font-medium cursor-pointer flex justify-between items-center"
                            onClick={() => toggleAccordion(1)}
                        >
                            <span>QU'EST-CE QUE CELA FAIT POUR VOUS</span>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={`transform transition-transform ${
                                    activeIndex === 1 ? 'rotate-180' : 'rotate-0'
                                }`}
                            />
                        </div>
                        <div
                            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                                activeIndex === 1 ? 'max-h-screen' : 'max-h-0'
                            }`}
                        >
                            <div className="p-4 ml-3 text-left" style={{width: "800px", marginRight: "40px"}}>
                                <p>{prod.effects}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white " style={{width: "900px"}}>
                        <div
                            className="collapse-title text-xl font-medium cursor-pointer flex justify-between items-center"
                            onClick={() => toggleAccordion(2)}
                        >
                            <span>COMMENT UTILISER</span>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={` transform transition-transform ${
                                    activeIndex === 2 ? 'rotate-180' : 'rotate-0'
                                }`} style={{marginLeft: "100px"}}
                            />
                        </div>
                        <div
                            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                                activeIndex === 2 ? 'max-h-screen' : 'max-h-0'
                            }`}
                        >
                            <div className="p-4 ml-3 text-left" style={{width: "800px", marginRight: "40px"}}>
                                <p>{prod.Comment_utiliser}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white">
                        <div
                            className="collapse-title text-xl font-medium cursor-pointer flex justify-between items-center"
                            onClick={() => toggleAccordion(3)}
                        >
                            <span>TOUS LES INGRÉDIENTS NATURELS</span>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={`transform transition-transform ${
                                    activeIndex === 3 ? 'rotate-180' : 'rotate-0'
                                }`}
                            />
                        </div>
                        <div
                            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                                activeIndex === 3 ? 'max-h-screen' : 'max-h-0'
                            }`}
                        >
                            <div className="p-4 ml-3 text-left" style={{width: "800px", marginRight: "40px"}}>
                                <p>{prod.ingredients}</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <h1 className={"  text-left font-bold text-4xl"} style={{marginLeft: "70px", marginTop: "100px"}}>Related
                Product</h1>
            <div className="carousel carousel-center  rounded-box  space-x-4 p-4 bg-white"
                 style={{width: "1400", marginLeft: "60px", marginTop: "100px",height:"450px"}}>






                {sugg.map((prod, index) => {
                    const filteredPhoto = pictures.find(Photo => Photo.IdProduct === prod._id);
                    return (
                        <div className="carousel-item">

                            <div className="items-center m-0 p-0 card-body">
                                <img
                                    src={filteredPhoto ? filteredPhoto.mainpicture : 'default_image_url'}
                                    className="rounded-box" style={{height: "300px"}}/>
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
                                <p className="p-0 m-0 b-0 text-md text-emerald-950">{prod.Prices}$</p>
                            </div>
                        </div>


                    );
                })}


            </div>


            <footer className="footer bg-emerald-950 text-base-content p-10" style={{marginTop: "150px "}}>
                <aside>

                    <img src={im} style={{width:"150px",height:"150"}} />


                    <p className={"text-white"}>
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


        </>
    );
};

export default Product_info;

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Sidebar, {SidebarItem} from "./Sidebar";
import {BarChart3, Boxes, LayoutDashboard, LifeBuoy, Package, Receipt, Settings, UserCircle} from "lucide-react";
import {add_Sous_category, delete_Sous_category, get_Sous_category, Update_Sous_category} from "../Action/SousCategory";
import {useNavigate, useParams} from "react-router-dom";
import {FaPlus} from "react-icons/fa";
import {format, isValid, parse} from 'date-fns';

import {
    addprod, addprodDiscount,
    addprodphotos,
    deleteprod,
    deleteproductdiscount,
    get_all_product_mainphoto,
    GetproductDiscount
} from "../Action/Product";
import {add_category} from "../Action/Category";
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';



function AdminProductlist() {
    const {id}=useParams()
    const dispatch=useDispatch()
    const [reload,setreload]=useState(false)
    const [reloaddis,setreloaddis]=useState(false)
    const [files, setFiles] = useState([]);
    const[updateid,updatedidset]=useState("")
    const [mainpictures, setmainpictures] = useState("");
    const Products = useSelector(state => state.productInfo.Productlist);
    const MainPicture = useSelector(state => state.productInfo.PhotoList);
    const discountlist = useSelector(state => state.productInfo.Discountslist);
    const filteredProducts = Products.filter(product => product.typeid === "58");
    const addedprod = useSelector(state => state.productInfo.addedprod);
    const [name,setname]=useState("")
    const [Price,setPrice]=useState("")
    const [Description,setDescription]=useState("")
    const [ingredients,setingredients]=useState("")
    const [Comment_utiliser,setComment_utiliser]=useState("")
    const [effects,seteffects]=useState("")
    const [brand,setbrand]=useState("")
    const [hide,sethide]=useState(true)
    const [addphotoid, setAddphotoid] = useState("")
    const [iddiscount, setIddiscount] = useState("")
    const [proddiscount, setProddiscount] = useState([])
    const  navgate=useNavigate()
    const defaultDate = parse('23-07-2024', 'dd-MM-yyyy', new Date());
    const formattedDefaultDate = format(defaultDate, 'dd-MM-yyyy');
    const [startDate, setStartDate] = useState(formattedDefaultDate);
    const [endDate, setEndDate] = useState(formattedDefaultDate);
    const [discountpers, setdiscountpers] = useState("");
    const handleFileChange = (event) => {
        setFiles(event.target.files);
    };
    useEffect(() => {
        dispatch(get_all_product_mainphoto());
    }, [dispatch,reload]);
    useEffect(() => {
        dispatch(GetproductDiscount());
    }, [dispatch,reload]);
    function handelchange() {
        sethide(!hide)
    }
    function handleUpdateproduit() {


        const dis={
            Product_id:iddiscount,
            discountper:discountpers,
            startdate:startDate,
            enddate:endDate

        }
        dispatch(addprodDiscount(dis))
    }
    function Addphoto(){
      const   id=addphotoid
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const promises = Array.from(files).map((file) => {
                return new Promise((resolve, reject) => {
                    const fileReader = new FileReader();
                    fileReader.onloadend = () => {
                        resolve(fileReader.result);
                    };

                    fileReader.onerror = reject;
                    fileReader.readAsDataURL(file);
                });
            });
            Promise.all(promises).then((base64Images) => {
                const pictures = base64Images.map((base64Image) => ({ base64Image }));

                if (id !== null ) {
                    const imgs = {
                        IdProduct: id,
                        Pictures: pictures,
                        mainpicture: reader.result
                    };

                    dispatch(addprodphotos(imgs));
                }
            }).catch((error) => {
                console.error('Error processing files:', error);
            });
        });

        reader.readAsDataURL(mainpictures.target.files[0]);


    }
    function addProduct() {
        const prod= {Name:name,
            Prices:Price,
            Description:Description,
            ingredients:ingredients,
            Comment_utiliser:Comment_utiliser,
            effects:effects,
            brand:brand,
            typeid:"58"
        }
        dispatch(addprod(prod))






    }
    function DeleteProduct(_id) {
        dispatch(deleteprod(_id))
        setreload(!reload)
    }
    function showmodal(_id) {
        updatedidset(_id)
        document.getElementById('my_modal_3').showModal()


    }
    function showphotoinput(_id) {
        setAddphotoid(_id)
        document.getElementById('my_modal_4').showModal()


    }
    function showDiscountModel(_id) {
          setIddiscount(_id)
          setProddiscount(discountlist.filter(dis => dis.Product_id === _id))
          console.log(proddiscount[0])
        document.getElementById('my_modal_5').showModal()


    }
    function DeleteDiscount(_id) {
        dispatch(deleteproductdiscount(_id))
        setreload(!reloaddis)
    }
    const handleStartDateChange = (date) => {
        if (isValid(date)) {
            setStartDate(format(date, 'dd-MM-yyyy'));
        } else {
            setStartDate('');
        }
        console.log(startDate)

    };
    const handleEndDateChange = (date) => {
        if (isValid(date)) {
            setEndDate(format(date, 'dd-MM-yyyy'));
        } else {
            setEndDate('');
        }
        console.log(endDate)
    };
    const parseDate = (dateString) => {
        const parsedDate = parse(dateString, 'dd-MM-yyyy', new Date());
        return isValid(parsedDate) ? parsedDate : null;
    };
    function add_discount() {
        const dis={
            Product_id:iddiscount,
            discountper:discountpers,
            startdate:startDate,
            enddate:endDate

        }
        dispatch(addprodDiscount(dis))
    }

    return (
        <div className={"flex h-full  "}>


            <div
                className={"sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-0   max-sm:hidden lg:w[264px] "}>
                <Sidebar>

                    <SidebarItem icon={<LayoutDashboard size={20}/>} text={"Dashboard"}/>
                    <SidebarItem icon={<BarChart3 size={20}/>} text={"Statistics"}/>
                    <SidebarItem icon={<UserCircle size={20}/>} text={"Users"}/>
                    <SidebarItem icon={<Boxes size={20}/>} text={"Inventory"} active/>
                    <SidebarItem icon={<Package size={20}/>} text={"Orders"}/>
                    <SidebarItem icon={<Receipt size={20}/>} text={"Billings"}/>
                    <hr className={"my-3"}/>
                    <SidebarItem icon={<Settings size={20}/>} text={"Setting"}/>
                    <SidebarItem icon={<LifeBuoy size={20}/>} text={"Help"}/>


                </Sidebar>

            </div>

            <div className={"flex min-h-screen flex-1 flex-col m-0 "}>
                <div className="navbar  bg-emerald-950  ">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl"><h2 className={"text-white"}>Admin page</h2></a>
                    </div>
                    <div className="flex-none">
                        <button className={"btn bg-emerald-950"}><h3 className={"text-white"}>logout</h3></button>
                    </div>
                </div>

                <div className={"flex flex-col items-start m-4"}>
                    <div className={"mt-3 mb-3 items-end text-xl"}><h2>Categories/SousCategories/Types/product</h2>
                    </div>
                    <button className="btn btn-wide bg-emerald-950 flex items-center gap-2"
                            onClick={() => document.getElementById('my_modal_2').showModal()}>
                        <FaPlus className="text-white"/>
                        <h2 className="text-white">ADD Product</h2>
                    </button>
                </div>


                {filteredProducts && filteredProducts.length > 0 ?

                    <div className="max-w-7xl m-4 ">
                        <table className=" table-xs ml-[150px] table w-[1300px] table-pin-rows ">
                            {/* head */}
                            <thead>
                            <tr className={" bg-gray-200"}>
                                <th></th>
                                <th className={"text-2xl"}>Products</th>
                                <th className={"text-2xl"}>update</th>
                                <th className={"text-2xl"}>Photos</th>
                                <th className={"text-2xl"}>Discount</th>
                                <th className={"text-2xl"}>delete</th>

                            </tr>

                            </thead>
                            <tbody>
                            {/* row 1 */}

                            {filteredProducts.map((op, index) => {
                                const pic = MainPicture.filter(photo => photo.IdProduct === op._id);
                                return (
                                    <tr key={index}>
                                        <th>
                                            <h2 className="text-2xl text-emerald-800">{index + 1}</h2>
                                        </th>


                                        <td>

                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        {pic[0]&& <img
                                                            src={pic[0] ? pic[0].mainpicture : 'default_image_url'}
                                                            alt={"Productimage"}/>}
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className="font-bold text-2xl text-emerald-800"
                                                    >{op.Name}</button>
                                                    <div className="opacity-50 text-xs m-2 text-emerald-950"
                                                    >{op.updatedAt}</div>
                                                </div>
                                            </div>

                                        </td>


                                        <td>
                                            <button className="btn btn-outline btn-warning"
                                                    onClick={() => showmodal(op._id)}>
                                                <h2 className="text-yellow-300">Update Product</h2>
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-outline btn-primary"
                                                    onClick={() => showphotoinput(op._id)}>
                                                <h2 className="text-blue-800-300">Productphotos</h2>
                                            </button>
                                        </td>
                                        <th>
                                            <button className="btn btn-outline "
                                                    onClick={() => showDiscountModel(op._id)}>
                                                <h2 className="text-lime-700-800-300">ADDDiscount</h2>
                                            </button>
                                        </th>
                                        <th>
                                            <button className="btn btn-circle btn-outline btn-error"
                                                    onClick={() => DeleteProduct(op._id)}>
                                            <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12"/>
                                                </svg>
                                            </button>
                                        </th>
                                    </tr>
                                );
                            })}


                            </tbody>
                            {/* foot */}
                            <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Update</th>
                                <th>Photo</th>
                                <th>Discount</th>
                                <th>delete</th>
                            </tr>
                            </tfoot>
                        </table>


                    </div>
                    : <div role="alert" className="alert alert-success">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>No Product added</span>
                    </div>

                }


            </div>


            <dialog id="my_modal_2" className="modal w-[1400px] rounded-3xl  h-[550px] mt-[200px] ml-[300px] bg-white">
                <div className="  w-[1390px] h-[550px] mb-3" style={{width: "1390px", height: "780px"}}>

                    <h2 className="text-3xl text-emerald-950 mb-6 text-center">Add Product</h2>

                    <div className="space-y-6 flex  flex-wrap">
                        <div className="flex mt-6 ml-[30px] items-center space-x-4">
                            <label className="text-emerald-950  w-1/11 text-right">Product Name</label>
                            <input type="text"
                                   className="input input-success w-[300px] h-[50px]"
                                   value={name}
                                   onChange={(e) => setname(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center ml-[30px] space-x-4">
                            <label className="text-emerald-950 w-1/11  text-right">Product Price</label>
                            <input type="text"
                                   className="input input-success  w-[300px] h-[50px]"
                                   value={Price}
                                   onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center ml-[30px] space-x-4">
                            <label className="text-emerald-950 w-1/11 text-right">Product Brand</label>
                            <input type="text"
                                      className="input input-success  w-[300px]"
                                      value={brand}
                                      onChange={(e) => setbrand(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center ml-[30px] space-x-4">
                            <label className="text-emerald-950 w-[87px] ">Usage Instructions</label>
                            <textarea
                                className="input input-success  w-[500px] h-[70px]"
                                value={Comment_utiliser}
                                onChange={(e) => setComment_utiliser(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center ml-[30px] space-x-4">
                            <label className="text-emerald-950 w-[87px] ">Product Effects</label>
                            <textarea type="text"
                                   className="input input-success  w-[500px] h-[70px]"
                                   value={effects}
                                   onChange={(e) => seteffects(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center ml-[30px] space-x-4">
                            <label className="text-emerald-950 w-[87px]  text-left">Product Description</label>
                            <textarea
                                className="input input-success w-[500px] h-[150px]"
                                value={Description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center ml-[30px] space-x-4">
                            <label className="text-emerald-950 w-[87px]  text-left">Product Ingredients</label>
                            <textarea
                                className="input input-success w-[500px] h-[150px]"
                                value={ingredients}
                                onChange={(e) => setingredients(e.target.value)}
                            />
                        </div>


                    </div>

                    <div className="mt-8 text-center">
                        <button className="btn bg-green-600 w-[300px]" onClick={addProduct}>
                            <h2 className="text-white">Success</h2>
                        </button>
                    </div>
                    <form method="dialog">
                        <button className="btn bg-red-600 w-[300px]" >
                            <h2 className="text-white">Close</h2>
                        </button>
                    </form>

                </div>

            </dialog>












            <dialog id="my_modal_3" className="modal w-[1400px] rounded-3xl  h-[550px] mt-[200px] ml-[300px] bg-white">
                <div className="  w-[1390px] h-[550px] mb-3" style={{width: "1390px", height: "780px"}}>

                    <h2 className="text-3xl text-emerald-950 mb-6 text-center">Update Product</h2>

                    <div className="space-y-6 flex  flex-wrap">
                        <div className="flex mt-6 ml-[30px] items-center space-x-4">
                            <label className="text-emerald-950  w-1/11 text-right">New Name</label>
                            <input type="text"
                                   className="input input-success w-[300px] h-[50px]"
                                   value={name}
                                   onChange={(e) => setname(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center ml-[30px] space-x-4">
                            <label className="text-emerald-950 w-1/11  text-right">New Price</label>
                            <input type="text"
                                   className="input input-success  w-[300px] h-[50px]"
                                   value={Price}
                                   onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center ml-[30px] space-x-4">
                            <label className="text-emerald-950 w-1/11 text-right">New Brand</label>
                            <input type="text"
                                   className="input input-success  w-[300px]"
                                   value={brand}
                                   onChange={(e) => setbrand(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center ml-[30px] space-x-4">
                            <label className="text-emerald-950 w-[87px] ">New Instructions</label>
                            <textarea
                                className="input input-success  w-[500px] h-[70px]"
                                value={Comment_utiliser}
                                onChange={(e) => setComment_utiliser(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center ml-[30px] space-x-4">
                            <label className="text-emerald-950 w-[87px] ">New Effects</label>
                            <textarea type="text"
                                      className="input input-success  w-[500px] h-[70px]"
                                      value={effects}
                                      onChange={(e) => seteffects(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center ml-[30px] space-x-4">
                            <label className="text-emerald-950 w-[87px]  text-left">New Description</label>
                            <textarea
                                className="input input-success w-[500px] h-[150px]"
                                value={Description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center ml-[30px] space-x-4">
                            <label className="text-emerald-950 w-[87px]  text-left">New Ingredients</label>
                            <textarea
                                className="input input-success w-[500px] h-[150px]"
                                value={ingredients}
                                onChange={(e) => setingredients(e.target.value)}
                            />
                        </div>


                    </div>

                    <div className="mt-8 text-center">
                        <button className="btn bg-green-600 w-[300px]" onClick={handleUpdateproduit}>
                            <h2 className="text-white">Success</h2>
                        </button>
                    </div>
                    <form method="dialog">
                        <button className="btn bg-red-600 w-[300px]">
                            <h2 className="text-white">Close</h2>
                        </button>
                    </form>

                </div>
            </dialog>











            <dialog id="my_modal_10" className="modal">
                <div className="h-[400px] w-[800px]">


                    <div className={"space-y-7 rounded-;d rounded-b-3xl rounded-t-3xl bg-white  h-100  "}>
                        <h2 className={"text-3xl text-amber-950"}>update souscategory</h2>
                        <input
                            type="text"
                            value={discountpers}
                            onChange={(e) => setdiscountpers(e.target.value)}
                            placeholder="Discount % "
                            className="input input-bordered input-md w-full max-w-xs"/>

                        <div id="date-range-picker" className=" ml-[150px] flex items-center">


                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                </div>
                                <DatePicker
                                    selected={parseDate(startDate)}
                                    onChange={handleStartDateChange}
                                    selectsStart
                                    startDate={parseDate(startDate)}
                                    endDate={parseDate(endDate)}
                                    dateFormat="dd-MM-yyyy"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholderText="Select date start"
                                />
                            </div>
                            <span className="mx-4 text-gray-500">to</span>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                </div>
                                <DatePicker
                                    selected={parseDate(endDate)}
                                    onChange={handleEndDateChange}
                                    selectsEnd
                                    startDate={parseDate(startDate)}
                                    endDate={parseDate(endDate)}
                                    minDate={parseDate(startDate)}
                                    dateFormat="dd-MM-yyyy"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholderText="Select date end"
                                />
                            </div>
                        </div>


                        <button className="btn bg-green-600  " onClick={add_discount}><h2
                            className={"text-white"}>Success</h2></button>


                    </div>

                </div>
                <form method="dialog" className="modal-backdrop">
                <button>close</button>
                </form>
            </dialog>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">


                    <div className={"space-y-7 rounded-;d rounded-b-3xl rounded-t-3xl bg-white  h-100  "}>
                        <div className="flex items-center ml-[30px] space-x-4">

                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                   htmlFor="multiple_files">
                                uploaded pictures
                            </label>
                            <input className="file-input file-input-bordered file-input-md w-full max-w-xs"
                                   id="multiple_files"
                                   type="file"
                                   multiple
                                   onChange={handleFileChange}
                            />


                        </div>
                        <div className="flex items-center ml-[30px] space-x-4">

                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                   htmlFor="multiple_files">
                                MainProductPicture
                            </label>
                            <input type="file"
                                   className="file-input file-input-bordered file-input-md w-full max-w-xs"
                                   onChange={(e) => {
                                       setmainpictures(e)
                                   }}
                            />


                        </div>


                        <button className="btn bg-green-600  " onClick={Addphoto}><h2
                            className={"text-white"}>Success</h2></button>


                    </div>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <dialog id="my_modal_5" className="modal">
                <div className="w-[1500px] h-[700px]">


                    <div className={"space-y-7 rounded-;d rounded-b-3xl rounded-t-3xl bg-white  h-100  "}>
                        <form method="dialog" className={"ml-[1450px]"}>
                            <button className="  btn-circle  bg-white  w-[50px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </form>
                        <h2 className={"font-bold text-2xl text-left m-7 mt-[20px] ml-[150px]"}>Discounts</h2>
                        <div className={"flex flex-col ml-[150px] items-start m-4"}>
                            <button className="btn btn-wide bg-emerald-950 flex items-center gap-2"
                                    onClick={() => document.getElementById('my_modal_10').showModal()}>
                                <FaPlus className="text-white"/>
                                <h2 className="text-white">AddCategory</h2>
                            </button>

                        </div>
                        {proddiscount && proddiscount.length > 0 ?

                            <div className="max-w-7xl m-4 h-[500px] ">
                                <table className=" table-xs ml-[150px] table w-[1300px] table-pin-rows ">
                                    {/* head */}
                                    <thead>
                                    <tr className={" bg-gray-200"}>
                                        <th></th>
                                        <th className={"text-2xl"}>pourcentage</th>
                                        <th className={"text-2xl"}>date de debut</th>
                                        <th className={"text-2xl"}>date dde fin</th>
                                        <th className={"text-2xl"}>delete</th>

                                    </tr>

                                    </thead>
                                    <tbody>
                                    {/* row 1 */}

                                    {proddiscount.map((op, index) => {
                                        return (
                                            <tr key={index}>
                                                <th>
                                                    <h2 className="text-2xl text-emerald-800">{index + 1}</h2>
                                                </th>


                                                <td>

                                                    <div className="flex items-center gap-3">

                                                        <div>
                                                            <button className="font-bold text-2xl text-emerald-800"
                                                            >{op.discountper}%
                                                            </button>
                                                            <div className="opacity-50 text-xs m-2 text-emerald-950"
                                                            >{op.updatedAt}</div>
                                                        </div>
                                                    </div>

                                                </td>


                                                <td>
                                                    <div className="flex items-center gap-3">

                                                        <div>
                                                            <button className="font-bold text-2xl text-emerald-800"
                                                            >{op.startdate}</button>

                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center gap-3">

                                                        <div>
                                                            <button className="font-bold text-2xl text-emerald-800"
                                                            >{op.enddate}</button>

                                                        </div>
                                                    </div>
                                                </td>

                                                <th>
                                                    <button className="btn btn-circle btn-outline btn-error"
                                                            onClick={() => DeleteDiscount(op._id)}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-6 w-6"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M6 18L18 6M6 6l12 12"/>
                                                        </svg>
                                                    </button>
                                                </th>
                                            </tr>
                                        );
                                    })}


                                    </tbody>
                                    {/* foot */}
                                    <tfoot>
                                    <tr>
                                        <th></th>
                                        <th className={"text-lg"}>pourcentage</th>
                                        <th className={"text-lg"}>date de debut</th>
                                        <th className={"text-lg"}>date dde fin</th>
                                        <th className={"text-lg"}>delete</th>

                                    </tr>
                                    </tfoot>
                                </table>


                            </div>
                            : <div role="alert" className=" mt-[200px] alert justify-items-center ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 shrink-0 stroke-current justify-items-center"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span className={" justify-items-center"}>No discount added added</span>


                            </div>

                        }


                    </div>

                </div>

            </dialog>
        </div>
    );
}

export default AdminProductlist;

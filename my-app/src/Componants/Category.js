import React, {useEffect, useState} from 'react';
import Sidebar, {SidebarItem} from "./Sidebar";
import {BarChart3, Boxes, LayoutDashboard, LifeBuoy, Package, Receipt, Settings, UserCircle} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import {add_category, delete_category, get_all_category, Update_category} from "../Action/Category";
import {useNavigate} from "react-router-dom";
import {FaPlus} from "react-icons/fa";
function Category(props) {
    const [activeState, setActiveState] = useState({
        Dashboard: false,
        Statistics: false,
        Users: false,
        Inventory: true,
        Orders: false,
        Billings: false,
        Setting: false,
        Help: false,
    });
    const dispatch=useDispatch()
    const [reload,setreload]=useState(false)

    useEffect(() => {

        dispatch(get_all_category())
        console.log(11)

    }, [reload]);
   const category=useSelector(state => state.categoryinfo.Category_list)
    const [img,setimg]=useState("")
    const [name,setname]=useState("")
    const toggleActive = (itemName) => {
        const newActiveState = { ...activeState };
        Object.keys(newActiveState).forEach((key) => {
            newActiveState[key] = false;
        });
        newActiveState[itemName] = true;
        setActiveState(newActiveState);
    };
   const [hide,sethide]=useState(true)
    const navigate=useNavigate()
    function handelchange() {
        sethide(!hide)
    }

    function handleUpdateCategory() {
        if (img) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                dispatch(Update_category({ _id: updateid, Name: name, icone: reader.result }));
            });
            reader.readAsDataURL(img.target.files[0]);
            setreload(!reload)
        } else {
            dispatch(Update_category({ _id: updateid, Name: name, icone: "" }));
            setreload(!reload)
        }

        document.getElementById('my_modal_3').close();
    }
    function addcategory() {
        console.log(name)
        const reader=new FileReader()
        reader.addEventListener("load",()=>{
            dispatch(add_category({Name:name,icone:reader.result}))
        })
        reader.readAsDataURL(img.target.files[0])



        console.log(`tryint to add`)

        console.log(` get list is done`)

    }
    function DeleteCategory(_id) {
        dispatch(delete_category(_id))
        setreload(!reload)
    }
    const[updateid,updatedidset]=useState("")
    function showmodal(_id) {
        updatedidset(_id)
        document.getElementById('my_modal_3').showModal()
    }
    function GotosousCategory(_id) {
            navigate(`/admin/sousCategory/${_id}`)
        }

    return (
        <div className={"flex  h-full"}>



            <div
                className={"sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  p-0   max-sm:hidden lg:w[264px] "}>
                <Sidebar>

                    <SidebarItem icon={<LayoutDashboard size={20}/>} text={"Dashboard"} active={activeState.Dashboard}
                                 onclick={() => toggleActive('Dashboard')}/>
                    <SidebarItem icon={<BarChart3 size={20}/>} text={"Statistics"} active={activeState.Statistics}
                                 onclick={() => toggleActive('Statistics')}/>
                    <SidebarItem icon={<UserCircle size={20}/>} text={"Users"} active={activeState.Users}
                                 onclick={() => toggleActive('Users')}/>
                    <SidebarItem icon={<Boxes size={20}/>} text={"Inventory"} active={activeState.Inventory}
                                 onclick={() => toggleActive('Inventory')}/>
                    <SidebarItem icon={<Package size={20}/>} text={"Orders"} active={activeState.Orders}
                                 onclick={() => toggleActive('Orders')}/>
                    <SidebarItem icon={<Receipt size={20}/>} text={"Billings"} active={activeState.Billings}
                                 onclick={() => toggleActive('Billings')}/>
                    <hr className={"my-3"}/>
                    <SidebarItem icon={<Settings size={20}/>} text={"Setting"} active={activeState.Setting}
                                 onclick={() => toggleActive('Setting')}/>
                    <SidebarItem icon={<LifeBuoy size={20}/>} text={"Help"} active={activeState.Help}
                                 onclick={() => toggleActive('Help')}/>


                </Sidebar>

            </div>

            <div className={"flex min-h-screen flex-1 flex-col  "}>
                <div className="navbar  bg-emerald-950  ">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl"><h2 className={"text-white"}>Admin page</h2></a>
                    </div>
                    <div className="flex-none">
                        <button className={"btn bg-emerald-950"}><h3 className={"text-white"}>logout</h3></button>
                    </div>
                </div>


                {/*<div className={"flex flex-col items-start mt-5 mb-5 "}>*/}

                {/*    <button className=" btn btn-wide  bg-emerald-950  "*/}
                {/*            onClick={() => document.getElementById('my_modal_2').showModal()}>*/}
                {/*        <h2 className={"text-white"}> AddCategory</h2>*/}
                {/*    </button>*/}

                {/*</div>*/}
                <div className={"flex flex-col items-start m-4"}>
                    <div className={"mt-3 mb-3 items-end text-xl"}><h2>Categories</h2></div>
                    <button className="btn btn-wide bg-emerald-950 flex items-center gap-2"
                            onClick={() => document.getElementById('my_modal_2').showModal()}>
                        <FaPlus className="text-white"/>
                        <h2 className="text-white">AddCategory</h2>
                    </button>
                </div>



                {category && category.length > 0 ?

                    <div className="max-w-7xl m-4">
                        <table className="table table-xs    ">
                            {/* head */}
                            <thead>
                            <tr className={" bg-gray-200"}>
                                <th></th>
                                <th className={"text-2xl"}>Name</th>
                                {/*<th>hidden</th>*/}
                                <th className={"text-2xl"}>update</th>
                                <th className={"text-2xl"}>delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}

                            {category.map((op, index) =>


                                <tr>
                                    <th>
                                        <h2 className={"text-2xl text-emerald-800"}>{index + 1}</h2>

                                    </th>

                                    <td>

                                    <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img onClick={() => GotosousCategory(op._id)}
                                                         src={`${op.icone}`}
                                                         alt={"Productimage"}/>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="font-bold text-2xl text-emerald-800"
                                                        onClick={() => GotosousCategory(op._id)}>{op.Name}</button>
                                                <div className="opacity-50 text-xs m-2 text-emerald-950"
                                                     onClick={() => GotosousCategory(op._id)}>{op.updatedAt}</div>
                                            </div>
                                        </div>

                                    </td>


                                    <td>
                                        <button className="btn btn-outline btn-warning"
                                                onClick={() => showmodal(op._id)}>
                                            <h2 className={"text-yellow-300"}> Updatecategory</h2>
                                        </button>
                                    </td>


                                    <th>
                                        <button className="btn btn-circle btn-outline btn-error"
                                                onClick={() => DeleteCategory(op._id)}>
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
                            )
                            }

                            </tbody>
                            {/* foot */}
                            <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Update</th>
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
                        <span>No categorie added</span>
                    </div>

                }


            </div>


            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">


                    <div className={"space-y-7 rounded-;d rounded-b-3xl rounded-t-3xl bg-white  h-100  "}>
                        <h2 className={"text-3xl text-emerald-950"}>add category</h2>
                        <input type="text"
                               placeholder="Categorie Name"
                               className="mt-4 input  input-success w-full max-w-xs" value={name} onChange={(e) => {
                            setname(e.target.value)
                        }}/>


                        <input type="file" placeholder="chose an icone "
                               className="file-input  file-input-success w-full max-w-xs"
                               onChange={(e) => {
                                   setimg(e)
                               }}/>


                        <br/>

                        <button className="btn bg-green-600  " onClick={addcategory}><h2
                            className={"text-white"}>Success</h2></button>


                    </div>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>


            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">


                    <div className={"space-y-7 rounded-;d rounded-b-3xl rounded-t-3xl bg-white  h-100  "}>
                        <h2 className={"text-3xl text-amber-950"}>update category</h2>
                        <input type="text"
                               placeholder="Categorie Name"
                               className="mt-4 input  input-warning w-full max-w-xs" value={name} onChange={(e) => {
                            setname(e.target.value)
                        }}/>


                        <input type="file" placeholder="chose an icone "
                               className="file-input  file-input-warning w-full max-w-xs"
                               onChange={(e) => {
                                   setimg(e)
                               }}/>


                        <br/>

                        <button className="btn bg-green-600  " onClick={handleUpdateCategory}><h2
                            className={"text-white"}>Success</h2></button>


                    </div>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
}

export default Category;
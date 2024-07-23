import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Sidebar, {SidebarItem} from "./Sidebar";
import {BarChart3, Boxes, LayoutDashboard, LifeBuoy, Package, Receipt, Settings, UserCircle} from "lucide-react";
import {useParams} from "react-router-dom";
import {add_types, delete_types, get_types, Update_types} from "../Action/Type";
import {FaPlus} from "react-icons/fa";




function Types() {

    const {id}=useParams()
    console.log(id)
    const dispatch=useDispatch()
    const [reload,setreload]=useState(false)

    useEffect(() => {

        dispatch(get_types(id))


    }, [reload]);

    const typelist=useSelector(state => state.typesinfo.typesList)
    const [name,setname]=useState("")

    const [hide,sethide]=useState(true)

    function handelchange() {
        sethide(!hide)
    }



    function handleUpdateType() {



        dispatch(Update_types({ id: updateid, Name: name}));
        setreload(!reload)


        document.getElementById('my_modal_3').close();
    }



    function addTypes() {



        console.log(`tryint to add`)
        dispatch(add_types({Name:name,sousCategoryid:id}))

        console.log(` get list is done`)

    }

    function Deletetypes(_id) {
        dispatch(delete_types(_id))
        setreload(!reload)
    }
    const[updateid,updatedidset]=useState("")
    function showmodal(_id) {
        updatedidset(_id)
        document.getElementById('my_modal_3').showModal()


    }

    return (
        <div className={" flex h-full   "}>



            <div
                className={"sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-0 max-sm:hidden lg:w[264px] p-0  m-0"}>
                <Sidebar>

                    <SidebarItem icon={<LayoutDashboard size={20}/>} text={"Dashboard"} />
                    <SidebarItem icon={<BarChart3 size={20}/>} text={"Statistics"} />
                    <SidebarItem icon={<UserCircle size={20}/>} text={"Users"}/>
                    <SidebarItem icon={<Boxes size={20}/>} text={"Inventory"} active/>
                    <SidebarItem icon={<Package size={20}/>} text={"Orders"} />
                    <SidebarItem icon={<Receipt size={20}/>} text={"Billings"} />
                    <hr className={"my-3"}/>
                    <SidebarItem icon={<Settings size={20}/>} text={"Setting"} />
                    <SidebarItem icon={<LifeBuoy size={20}/>} text={"Help"} />


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


                {/*<div className={"flex flex-col items-start m-4"}>*/}
                {/*    <div className={" mt-3 mb-3 items-end"}><h2 className={""}>Categories/SousCategories/Types</h2></div>*/}
                {/*    <button className=" btn btn-wide bg-emerald-950"*/}
                {/*            onClick={() => document.getElementById('my_modal_2').showModal()}>*/}
                {/*        <h2 className={"text-white "}> AddTypes</h2>*/}
                {/*    </button>*/}

                {/*</div>*/}


                {/*<div>*/}

                {/*    <h1 className={"text-4xl font-bold text-emerald-950 m-7 textarea-lg"}>Types Table</h1>*/}

                {/*</div>*/}
                <div className={"flex flex-col items-start m-4"}>
                    <div className={"mt-3 mb-3 items-end text-xl"}><h2>Categories/SousCategories/Types</h2></div>
                    <button className="btn btn-wide bg-emerald-950 flex items-center gap-2"
                            onClick={() => document.getElementById('my_modal_2').showModal()}>
                        <FaPlus className="text-white" />
                        <h2 className="text-white">AddTypes</h2>
                    </button>
                </div>

                {typelist && typelist.length > 0 ?

                    <div className="max-w-7xl m-4 ">
                        <table className="table table-xs  ">
                            {/* head */}
                            <thead>
                            <tr className={" bg-gray-200"} >
                                <th></th>
                                <th className={"text-2xl"}>Name</th>
                                {/*<th>hidden</th>*/}
                                <th className={"text-2xl"}>update</th>
                                <th className={"text-2xl"}>delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}

                            {typelist.map((op, index) =>


                                <tr>
                                    <th >
                                        <h2 className={"text-2xl text-emerald-800"}>{index + 1}</h2>
                                    </th>

                                    <td>

                                        <div className="flex items-center gap-3">

                                            <div>
                                                <div className="font-bold text-2xl text-emerald-800">{op.Name}</div>
                                                <div className=" opacity-50 text-xs m-2 text-emerald-950">{op.updatedAt}</div>
                                            </div>
                                        </div>

                                    </td>


                                    <td>
                                        <button className="btn btn-outline btn-warning"
                                                onClick={() => showmodal(op._id)}>
                                            <h2 className={"text-yellow-500"}> Update type</h2>
                                        </button>
                                    </td>


                                    <th>
                                        <button className="btn btn-circle btn-outline btn-error"
                                                onClick={() => Deletetypes(op._id)}>
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
                        <span>No types added</span>
                    </div>

                }


            </div>


            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">


                    <div className={"space-y-7 rounded-;d rounded-b-3xl rounded-t-3xl bg-white  h-100  "}>
                        <h2 className={"text-3xl text-emerald-950"}>add types</h2>
                        <input type="text"
                               placeholder="type Name"
                               className="mt-4 input  input-success w-full max-w-xs" value={name} onChange={(e) => {
                            setname(e.target.value)
                        }}/>
                        <br/>

                        <button className="btn bg-green-600  " onClick={addTypes}><h2
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
                        <h2 className={"text-3xl text-amber-950"}>update types</h2>
                        <input type="text"
                               placeholder="type Name"
                               className="mt-4 input  input-warning w-full max-w-xs" value={name} onChange={(e) => {
                            setname(e.target.value)
                        }}/>



                        <br/>

                        <button className="btn bg-green-600  " onClick={handleUpdateType}><h2
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

export default Types;

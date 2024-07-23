import React, {createContext, useContext, useState} from 'react';
import logo from "../Adminlogo.png";
import {ChevronLeft, ChevronRight} from "lucide-react";
const SidebarContext = createContext()

const Sidebar = (children) => {
    const [expanded, setExpanded] = useState(true)

    return (


        <aside className=" flex h-full      ">
            <nav className="h-full flex flex-col   shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center bg-emerald-950 h-16 border-0 m-0">
                    <img
                        src={logo}
                        className={`overflow-hidden transition-all ${
                            expanded ? "w-32" : "w-0"
                        }`}
                        alt=""
                    />
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg "
                    >
                        {expanded ? <ChevronLeft className={"text-white"}/>

                            : <ChevronRight className={"text-white"}/>
                        }
                    </button>
                </div>

                <SidebarContext.Provider value={{expanded}}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>

                <div className="border-t flex p-3">

                    <div
                        className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
                    >
                        <div className="leading-4">
                            <h4 className="font-semibold">Fares</h4>
                            <span className="text-xs text-gray-600">Faresmakki21@gmail.com</span>
                        </div>
                    </div>
                </div>
            </nav>
        </aside>


    );
};




export function SidebarItem({ icon, text, active, alert,onclick }) {


    const { expanded } = useContext(SidebarContext)
    //     ? "bg-gradient-to-tr from-indigo-200 to-indigo-100"
    //     : "hover:bg-indigo-50 text-gray-600"
    const handelclick=(state)=>{
        state={
            Dashboard:false,
            Statistics:false,
            Users:false,
            Inventory:false,
            Billings:false,
            Setting:false,
            Help:false,
        }
        state={
            ...state,
            [text]:true
        }



    }
    return (
        <li onClick={onclick}
            className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
                active ?" bg-emerald-950 from-indigo-200 to-indigo-100  text-indigo-800"
                    : "hover:bg-indigo-50 text-gray-600"
            }
    `}
        >
                        <span
                            className={`
                    transition-all 
                    ${active ? "text-white" : "text-emerald-950"}
                `}
                        >
                {icon}
            </span>
            <span
                className={`overflow-hidden transition-all ${
                    active ? "text-white" : "text-emerald-950"
                } ${
                    expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
        {text}
      </span>
            {alert && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                        expanded ? "" : "top-2"
                    }`}
                />
            )}

            {!expanded && (
                <div
                    className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
                >
                    {text}
                </div>
            )}
        </li>
    )
}
export default Sidebar;

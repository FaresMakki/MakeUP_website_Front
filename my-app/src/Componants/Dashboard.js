import React, {useEffect, useState} from 'react';
import Sidebar, {SidebarItem} from "./Sidebar";
import {BarChart3, Boxes, LayoutDashboard, LifeBuoy, Package, Receipt, Settings, UserCircle} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import {add_category, delete_category, get_all_category, Update_category} from "../Action/Category";
import {useNavigate} from "react-router-dom";
import {FaPlus} from "react-icons/fa";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {FaBox, FaShoppingCart, FaTruck, FaUndo} from "react-icons/fa";


function Dashboard(props) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const data = {
        labels: ['JUIL', 'AOUT', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
            {
                label: 'Montant',
                data: [50, 100, 150, 200, 300, 400],
                borderColor: 'rgba(0, 128, 0, 1)',
                backgroundColor: 'rgba(0, 128, 0, 0.2)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Graph d\'achat',
            },
        },
    };











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

    const toggleActive = (itemName) => {
        const newActiveState = { ...activeState };
        Object.keys(newActiveState).forEach((key) => {
            newActiveState[key] = false;
        });
        newActiveState[itemName] = true;
        setActiveState(newActiveState);
    };





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
                <main className="flex-1 p-8">
                    <h1 className="text-2xl font-bold text-green-950 md:text-left">Montant total des ventes</h1>
                    <section className="grid grid-cols-4 gap-8 mb-8">
                        {[
                            {title: 'Commandes totale', value: '0.00dt', perc: '0.00%', icon: <FaShoppingCart/>},
                            {title: 'Commandes en cours', value: '0.00dt', perc: '0.00%', icon: <FaTruck/>},
                            {title: 'Commandes livrais', value: '0.00dt', perc: '0.00%', icon: <FaBox/>},
                            {title: 'Commandes retournés', value: '0.00dt', perc: '0.00%', icon: <FaUndo/>},
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded shadow">
                                <h2 className="text-lg font-semibold text-green-950 flex items-center">
                                    {item.icon}
                                    <span className="ml-2 text-emerald-800"> <h2
                                        className="text-emerald-800">{item.title}</h2></span>
                                </h2>
                                <div className="flex items-center justify-between">
                                    <p className="text-2xl text-green-950">{item.value}</p>
                                    <p className="text-green-500">{item.perc}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                    <section className="grid grid-cols-3 gap-8 mb-8">
                        <div className="col-span-2 bg-white p-8 rounded shadow">
                            <div className="flex justify-end mt-4">
                                <h2 className="p-2 text-lg font-semibold text-green-950 md:text-left">Graph d'achat</h2>

                                <button className="p-2 text-green-950">Semaine</button>
                                <button className="p-2 text-green-950">Mois</button>
                                <button className="p-2 text-green-950">Année</button>
                            </div>
                            <Line data={data} options={options}/>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h2 className="text-lg font-semibold text-green-950">Produits Plus Vendus</h2>
                            <ul>
                                {[
                                    {
                                        name: 'Savon De Fleur',
                                        total_price: '10000dt',
                                        price: '5.00dt',
                                        sales: '2000 ventes',
                                        image: 'path/to/image'
                                    },
                                    {
                                        name: 'Crème Solaire',
                                        total_price: '8998.5dt',
                                        price: '10.50dt',
                                        sales: '857 ventes',
                                        image: 'path/to/image'
                                    },
                                    {
                                        name: 'Huile de cheveux',
                                        total_price: '7995dt',
                                        price: '20.50dt',
                                        sales: '390 ventes',
                                        image: 'path/to/image'
                                    },
                                ].map((product, index) => (
                                    <li key={index} className="flex items-center mb-4">
                                        <img src={product.image} alt={product.name} className="w-16 h-16 mr-4"/>
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <h3 className="text-lg text-green-950">{product.name}</h3>
                                                <p className="text-xl text-green-950">{product.total_price}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p className="text-green-950">{product.price}</p>
                                                <p className="text-green-950">{product.sales}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-green-950 text-white p-2 rounded mt-4">Rapport</button>
                        </div>
                    </section>
                    <section className="grid grid-cols-4 gap-8">
                        <div className="bg-white p-4 rounded shadow">
                            <h2 className="text-lg font-semibold text-green-950">Panier Moyenne</h2>
                            <p className="text-2xl text-green-950">0.00dt</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h2 className="text-lg font-semibold text-green-950">Comptes</h2>
                            <p className="text-2xl text-green-950">0</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h2 className="text-lg font-semibold text-green-950">Produits</h2>
                            <p className="text-2xl text-green-950">0</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h2 className="text-lg font-semibold text-green-950">Taux de retour</h2>
                            <p className="text-2xl text-green-950">0%</p>
                        </div>
                    </section>
                </main>


            </div>


        </div>
    );
}

export default Dashboard;
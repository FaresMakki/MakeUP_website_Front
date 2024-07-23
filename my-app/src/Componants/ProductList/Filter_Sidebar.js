import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {clearProductList, getprodbyprices, Sortproduct} from "../../Action/Product";
import rootReducer from "../../Reducer";

const Filter_Sidebar = () => {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState({

        'Brands1': false,
        'Brands2': false,
        'Brands3': false,
        'Brands4': false,
        'Brands5': false,
        '10%': false,
        '20%': false,
        '30%': false,
        '40%': false,
        '50%+': false,
    });
    const [rangeValue, setRangeValue] = useState(40);
    const [trieasc,settrieasc]=useState(true)

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);

    };
    const reset = () => {

        dispatch((getprodbyprices(100000)))

    };
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedCheckboxes((prevSelected) => ({
            ...prevSelected,
            [name]: checked,
        }));
    };
    const dispatch=useDispatch()
    const filterprice=()=>{

        dispatch(getprodbyprices(rangeValue))
    }
    const sortprod=()=>{
        dispatch(Sortproduct(trieasc))
    }


    return (
        <aside className="sidebar bg-white flex h-full scrollbar-hide p-4">
            <div className="w-full">
                <h2 className="sidebar_h2_sous_titre mt-4 mb-4">Prix</h2>

                <input type="range" min={0} max="800" value={rangeValue} className="range" step="25"
                       onChange={handleRangeChange}/>
                <div className="flex w-full justify-between px-2 text-xs">
                    <span>{rangeValue}dt</span>

                </div>
                <button className="btn bg-green-950  text-white mt-4" onClick={filterprice}>Apply</button>
                <button className="btn ml-3 btn-outline btn-success" onClick={reset}>Reset</button>

                <hr className="my-4"/>

                <h2 className="sidebar_h2_sous_titre">Brands</h2>
                <form>

                    <label className="label cursor-pointer">
                        <span className="label-text mt-3"> Trie ascendant</span>
                        <input type="radio" name="radio-10" onClick={() => settrieasc(true)}
                               className="radio checked:bg-blue-500"/>
                    </label>
                    <label className="label cursor-pointer">
                        <span className="label-text mt-3">Trie descendant</span>
                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500"
                               onClick={() => settrieasc(false)}/>
                    </label>
                </form>
                <button className="btn bg-green-950 text-white mt-4" onClick={sortprod}>Apply</button>

                <hr className="my-4"/>

                <h2 className="sidebar_h2_sous_titre mt-5">Remise</h2>
                <form>
                    {['10%', '20%', '30%', '40%', '50%+'].map((key) => (
                        <label key={key} className="flex items-center cursor-pointer mt-2">
                            <input
                                type="checkbox"
                                name={key}
                                checked={selectedCheckboxes[key]}
                                onChange={handleCheckboxChange}
                                className="checkbox [--chkbg:theme(colors.emerald.600)] [--chkfg:white]"
                            />
                            <span className="label-text ml-2 mt-5">{key}</span>
                        </label>
                    ))}
                    <button className="btn bg-green-950 text-white mt-4">Apply</button>
                </form>
            </div>
        </aside>
    );
};

export default Filter_Sidebar;

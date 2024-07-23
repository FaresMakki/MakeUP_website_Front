import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_Sous_category } from '../../Action/SousCategory';
import { get_types } from '../../Action/Type';

function Megamenu(props) {
    const dispatch = useDispatch();
    const souscategories = useSelector(state => state.souscategory.SousCategooryList);
    const types = useSelector(state => state.typesinfo.typesList);

    useEffect(() => {
        dispatch(get_Sous_category("all"));
        dispatch(get_types("all"));
    }, [dispatch]);

    const filteredSouscategories = souscategories.filter(sc => sc.Categoryid === props.categoryId);

    return (
        filteredSouscategories && filteredSouscategories.length > 0 ? (
            <div className="mt-4 border border-gray-200 shadow-lg rounded-lg  bg-gradient-to-t  from-emerald-50 via-white to-white   dark:bg-gray-800 dark:border-gray-600">
                <div className="grid max-w-screen-xl px-6 py-8 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                >
                    {filteredSouscategories.map((souscat, index) => (
                        <div key={index} className="block p-4 rounded-lg  dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                            <div className="font-bold text-blue-600 dark:text-blue-400 mb-3">{souscat.Name}</div>
                            <ul className="space-y-2">
                                {types
                                    .filter(t => t.sousCategoryid === souscat._id)
                                    .map((type, subIndex) => (
                                        <li key={subIndex}>
                                            <a className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" href="#">
                                                {type.Name}
                                            </a>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            <div className="text-center py-5 text-gray-700 dark:text-gray-300">No subcategories available</div>
        )
    );
}

export default Megamenu;

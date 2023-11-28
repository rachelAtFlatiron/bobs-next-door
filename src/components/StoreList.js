import React from "react"
import Store from "./Store"

function StoreList({ stores, search }) {
    const filteredStores = stores.filter(store => {
        return store.name.toLowerCase().includes(search.toLowerCase()) //to lower case
    })
    const renderStores = filteredStores.map(store => <Store store={store} key={store.id}/>) //make sure to update with filtered stores, not ALL the stores
    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {renderStores}
            </tbody>
        
        </table>
    );
}

export default StoreList;
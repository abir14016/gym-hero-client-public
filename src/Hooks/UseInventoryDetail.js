import { useEffect, useState } from "react"

const UseInventoryDetail = inventoryId => {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        fetch(`https://gentle-cove-36367.herokuapp.com/inventory/${inventoryId}`)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [inventoryId]);

    return [inventory, setInventory];
}

export default UseInventoryDetail;
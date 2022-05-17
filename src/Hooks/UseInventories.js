import { useEffect, useState } from "react"

const UseInventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch("https://gentle-cove-36367.herokuapp.com/inventory")
            .then(res => res.json())
            .then(data => setInventories(data))
    }, []);

    return [inventories, setInventories];
}

export default UseInventories;
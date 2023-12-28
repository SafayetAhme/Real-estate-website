import { useEffect, useState } from "react";


const UseItem = () => {
    const [item, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            })
    }, [])
    return [item, loading]
}

export default UseItem;
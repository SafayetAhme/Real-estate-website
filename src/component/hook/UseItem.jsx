import { useEffect, useState } from "react";


const UseItem = () => {
    const [item, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://server-site-liart.vercel.app/item')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            })
    }, [])
    return [item, loading]
}

export default UseItem;
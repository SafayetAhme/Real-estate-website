import { useEffect, useState } from "react";


const UseAgent = () => {
    const [agent, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://server-site-liart.vercel.app/agent')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            })
    }, [])
    return [agent, loading]
}

export default UseAgent
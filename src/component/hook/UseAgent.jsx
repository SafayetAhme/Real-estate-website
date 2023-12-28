import { useEffect, useState } from "react";


const UseAgent = () => {
    const [agent, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/agent')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            })
    }, [])
    return [agent, loading]
}

export default UseAgent
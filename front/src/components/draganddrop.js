import { useEffect, useState } from 'react';
import { Canvas } from 'reaflow';
import '../App.css';
import { getEdges, getNodes } from '../services/allServices';

const Draganddrop = () => {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    useEffect(() => {
        getNodes().then(data => { setNodes(data.data); console.log('nodes', data.data) });
    }, []);

    useEffect(() => {
        getEdges().then(data => { setEdges(data.data); console.log('edges', data.data) });
    }, []);
    
    
    return <>
        <button className='darkligt'>Start scenario</button>
        <Canvas
            maxWidth={1600}
            maxHeight={800}
            nodes={nodes}
            edges={edges}
            direction="RIGHT"
            onLayoutChange={layout => console.log('Layout', layout)} 
        />
        </>
    ;
};

export default Draganddrop;

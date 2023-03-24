import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    {
        id: 'edges-1',
        type: 'input',
        data: { label: 'Input 1', emoji: '😎' },
        position: { x: 0, y: 80 },
        sourcePosition: 'right',
        targetPosition: 'left',
    },
    { 
        id: 'edges-2', 
        data: { label: 'Node 2' },
        position: { x: 250, y: 80 },
        sourcePosition: 'right',
        targetPosition: 'left',
    },
    { 
        id: 'edges-2a', 
        data: { label: 'Node 2a' },
        sourcePosition: 'right',
        position: { x: 500, y: 80 },
        targetPosition: 'left',
    },
    { 
        id: 'edges-2b', 
        data: { label: 'Node 2b' },
        sourcePosition: 'right',
        position: { x: 500, y: 280 },
        targetPosition: 'left',
    },
    { 
        id: 'edges-3', 
        data: { label: 'Node 3' },
        position: { x: 750, y: 80 },
        sourcePosition: 'right',
        targetPosition: 'left',
    },
    { 
        id: 'edges-4', 
        data: { label: 'Node 4' },
        position: { x: 1000, y: 80 },
        sourcePosition: 'right',
        targetPosition: 'left',
    },
    { 
        id: 'edges-3a', 
        data: { label: 'Node 3a' },
        position: { x: 150, y: 300 },
        sourcePosition: 'right',
        targetPosition: 'left',
    },
    { 
        id: 'edges-5', 
        data: { label: 'Node 5' },
        position: { x: 250, y: 400 },
        sourcePosition: 'right',
        targetPosition: 'left',
    },
    {
        id: 'edges-6',
        data: { label: 'Output 6' },
        position: { x: 50, y: 550 },
        sourcePosition: 'right',
        targetPosition: 'left',
    },
    {
        id: 'edges-7',
        data: { label: 'Output 7' },
        position: { x: 250, y: 550 },
        sourcePosition: 'right',
        targetPosition: 'left',
    }
]

const initialEdges = [
    {
        id: 'edges-e1-2',
        source: 'edges-1',
        target: 'edges-2',
        type: 'step',
        label: 'bezier edge (default)',
    },
    {
        id: 'edges-e2-2a',
        source: 'edges-2',
        target: 'edges-2a',
        type: 'step',
        label: 'smoothstep edge',
    },
    {
        id: 'edges-e2-3',
        source: 'edges-2',
        target: 'edges-3',
        type: 'step',
        label: 'step edge',
    },
    {
        id: 'edges-e2-3',
        source: 'edges-2',
        target: 'edges-3',
        type: 'step',
        label: 'step edge',
    },
    {
        id: 'edges-2a-2b',
        source: 'edges-2a',
        target: 'edges-2b',
        type: 'step',
        label: 'step edge',
    }
]

const EdgesFlow = () => {
    const [nodes, , ] = useNodesState(initialNodes);
    const [edges, setEdges, ] = useEdgesState(initialEdges);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            style={{ position: 'inherit' }}
            attributionPosition="top-left"
        />
    );
};

export default EdgesFlow;
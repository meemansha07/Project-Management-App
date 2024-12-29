// app/projects/[id]/ProjectContent.tsx
"use client";

import React from 'react';
import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from '../BoardView';

type Props = {
    params: { id: string };
};

const ProjectContent = ({ params }: Props) => {
    const { id } = params;
    
    const [activeTab, setActiveTab] = React.useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = React.useState(false);

    return (
        <div>
            <ProjectHeader 
                activeTab={activeTab} 
                setActiveTab={setActiveTab}
            />
            
            {activeTab === "Board" && (
            <Board 
            id={id} 
            setIsModalNewTaskOpen={setIsModalNewTaskOpen} 
            />
            )}
            {/*{activeTab === "List" && <div>List View</div>}
            {activeTab === "Timeline" && <div>Timeline View</div>}
            {activeTab === "Table" && <div>Table View</div>} */}
        </div>
    );
};

export default ProjectContent;
"use client";

import React, { useState } from 'react';
import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from "../BoardView";
import List from "../ListView";
import Timeline from "../TimelineView";
import Table from "../TableView";
import ModalNewTask from '@/components/ModalNewTask';

type Props = {
    params: Promise<{ id: string }>;
};

const Project = ({ params }: Props) => {
    // Unwrap params using React.use()
    const resolvedParams = React.use(params);
    const { id } = resolvedParams;
    
    const [activeTab, setActiveTab] = React.useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = React.useState(false);

    return (
        <div className="h-full w-full">
            <ModalNewTask
            isOpen={isModalNewTaskOpen}
            onClose={() => setIsModalNewTaskOpen(false)}
            id={id}
            />
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
            {activeTab === "List" && (
                <List 
                    id={id} 
                    setIsModalNewTaskOpen={setIsModalNewTaskOpen} 
                />
            )}
            {activeTab === "Timeline" && (
                <Timeline 
                    id={id} 
                    setIsModalNewTaskOpen={setIsModalNewTaskOpen} 
                />
            )}
            {activeTab === "Table" && (
                <Table 
                    id={id} 
                    setIsModalNewTaskOpen={setIsModalNewTaskOpen} 
                />
            )}
        </div>
    );
};

export default Project;
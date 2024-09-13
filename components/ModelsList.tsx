"use client"

import React, { useEffect, useState } from 'react';
import { getData } from '@/api/api';

interface Model {
    Model_ID: number;
    Make_Name: string;
    Model_Name: string;
}

interface Props {
    makeId: string;
    year: string;
}

const ModelsList: React.FC<Props> = ({ makeId, year }) => {
    const [models, setModels] = useState<Model[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(`/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);

            setModels(data);
            setLoading(false);
        };

        fetchData();

    }, [makeId, year]);

    if (loading) return <div>Getting data...</div>;

    return (
        <section>
             <ul>
                {models.map((model) => (
                    <li key={model.Model_ID} className='mt-4'>
                        {model.Make_Name} {model.Model_Name}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ModelsList;
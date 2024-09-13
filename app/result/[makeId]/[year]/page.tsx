import React, { Suspense } from 'react';
const ModelsList = React.lazy(() => import('../../../../components/ModelsList'));

interface Props {
    params: {
        makeId: string;
        year: string;
    };
}

const ResultPage: React.FC<Props> = ({ params }) => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="text-center">
                <h1 className="text-xl font-bold mb-8 mt-8 text-[#683142]" style={{ fontSize: '26px' }}>All models of {params.year} year:</h1>
                <Suspense fallback={<div>Getting data...</div>}>
                    <ModelsList makeId={params.makeId} year={params.year} />
                </Suspense>
            </div>
        </div>
    );
};

export default ResultPage;
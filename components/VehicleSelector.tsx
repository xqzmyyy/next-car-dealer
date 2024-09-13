import { getData } from '@/api/api';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Props {
    MakeId: number;
    MakeName: string;
}

const VehicleSelector: React.FC = () => {
    const [make, setMake] = useState<Props[]>([]);
    const [selectedMake, setSelectedMake] = useState<Props | null>(null);
    const [selectedYear, setSelectedYear] = useState<string>('');

    const currYear = new Date().getFullYear();
    const years = Array.from({ length: currYear - 2015 + 1 }, (_, i) => (2015 + i).toString());

    // getting data:
    const getMakes = async () => {
        try {
            const res = await getData('/vehicles/GetMakesForVehicleType/car?format=json');
            
            if (res && res.length) return setMake(res);
            
            setMake([]);
        } catch (err) {
            console.error(err);
            alert('Oops..Error fetching data');
        }
    };

    useEffect(() => {
        getMakes();
    }, []);

    // check for disabled button
    const isNextButtonEnabled = selectedMake && selectedYear;

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-transparent border-2 border-[#683142] rounded-xl">
            <div className="mb-4">
                <label htmlFor="make-selector" className="block text-sm font-medium text-[#F6F2F6] mb-2">Vehicle Make:</label>
                <select
                    id="make-selector"
                    value={selectedMake?.MakeName || ''}
                    onChange={(e) => {
                        const selected = make.find(m => m.MakeName === e.target.value);
                        setSelectedMake(selected || null);
                    }}
                    className="w-full p-2 pr-8 bg-transparent border border-[#995E7C] rounded-md focus:outline-none focus:ring-[#995E7C] focus:border-[#995E7C]"
                >
                    <option value="">Select Make</option>
                    {make.map((make) => (
                        <option key={make.MakeId} value={make.MakeName}>
                            {make.MakeName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="year-selector" className="block text-sm font-medium text-[#F6F2F6] mb-2">Model Year:</label>
                <select
                    id="year-selector"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full p-2 border bg-transparent border-[#995E7C] rounded-md focus:outline-none focus:ring-[#995E7C] focus:border-[#995E7C]"
                >
                    <option value="">Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mt-6">
                <Link 
                    href={isNextButtonEnabled ? `/result/${selectedMake?.MakeId}/${selectedYear}` : '#'}
                    className={`w-full text-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#683142] hover:bg-[#7e3a4f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#683142] ${!isNextButtonEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={(e) => {
                        if (!isNextButtonEnabled) {
                            e.preventDefault();
                        }
                    }}
                >
                    Next
                </Link>
            </div>
        </div>
    );
}

export default VehicleSelector;
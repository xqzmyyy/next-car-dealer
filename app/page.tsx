"use client"

import VehicleSelector from "@/components/VehicleSelector";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4" style={{ fontSize: '35px' }}>
                Welcome to Car Dealer App!
            </h1>
            <span className="text-xl mb-6" style={{ fontSize: '22px' }}>
                Please, select your data:
            </span>
            <div className="w-full max-w-md">
                <VehicleSelector />
            </div>
        </div>
    );
}

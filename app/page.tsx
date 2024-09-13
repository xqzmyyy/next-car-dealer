"use client"

import VehicleSelector from "@/components/VehicleSelector";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4 text-center" style={{ fontSize: '35px' }}>
                Welcome to Car Dealer App!
            </h1>
            <span className="text-xl mb-6" style={{ fontSize: '22px' }}>
                Please, select your data:
            </span>
            <section className="w-full max-w-md pr-4 pl-4">
                <VehicleSelector />
            </section>
        </div>
    );
}

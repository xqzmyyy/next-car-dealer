import { getData } from '@/api/api';

interface Props {
    MakeId: number;
}

interface PathParams {
    makeId: string;
    year: string;
}

// generate static path
export async function generateStaticParams() {
    try {
        const makes = await getData('/vehicles/GetMakesForVehicleType/car?format=json') as Props[];

        const makeIds = makes.map((make) => make.MakeId);
        const currYear = new Date().getFullYear();
        const years = Array.from({ length: currYear - 2015 + 1 }, (_, i) => 2015 + i);

        const paths: PathParams[] = makeIds.flatMap((makeId) =>
            years.map((year) => ({
                makeId: makeId.toString(),
                year: year.toString(),
            }))
        );

        return paths.map(path => ({
            params: path
        }));
    } catch (error) {
        console.log(error);
        alert('Oops..Error fetching data');
        return [];
    }
}

export const getData = async (endpoint: string) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + endpoint);
        const data = await res.json();

        return data.Results || [];
    } catch (err) {
        console.error(err);
        alert('Error fetching data');
        return [];
    }
}
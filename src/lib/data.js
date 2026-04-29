export const photoData = async() => {
    const res = await fetch(`${process.env.BASE_URL}/data.json`)
    const data = await res.json();
    return data;
}
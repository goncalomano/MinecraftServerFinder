
export const getServerData = async (serverIP: string) => {
    try {
        const res = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        const data = await res.json();
        return data
    } catch (error) {
        console.error("Failed to fetch data: ", error);
        return null;
    }
}
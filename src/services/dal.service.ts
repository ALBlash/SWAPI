// data access layer//
export async function getCollection<T>(resource: string): Promise<{ results: T[] }> {
    const res = await fetch(`https://swapi.dev/api/${resource}`);
    return res.json();
}


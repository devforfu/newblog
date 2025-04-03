export async function load({ fetch }) {
    const response = await fetch('api/notes');
    return await response.json();
}

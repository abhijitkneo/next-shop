const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function GET() {
    try {
        const res = await fetch(`${BASE_URL}/products`);

        if(!res.ok) {
            throw new Error('Failed to fetch products from external API');
        }

        const data = await res.json();

        return Response.json(data);       

    } catch (error) {
        return new Response('Failed to fetch the data', {status: 500})
    }
}
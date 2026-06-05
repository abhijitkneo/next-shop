const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getProducts = async () => {
    //const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_SITE_URL : ''
    console.log(baseUrl, '<<<');
    
    const res = await fetch(`${apiUrl}/products`, {
        cache: 'no-cache'
    });
    
    if(!res.ok) {
        throw new Error('Failed to load the products');
    }

    return res.json();
}
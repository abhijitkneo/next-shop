//const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getProducts = async () => {
    //const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_SITE_URL : ''
    //console.log(baseUrl, '<<<');
    
    const res = await fetch(`${apiUrl}/products`, {
        cache: 'no-store'
    });
    
    if(!res.ok) {
        throw new Error('Failed to load the products');
    }

    return res.json();
}

export const getProductById = async(id: string | number) => {
    const res = await fetch(`${apiUrl}/products/${id}`, {
        cache: "no-store"
    });

    if(!res.ok) {
        throw new Error('Failed to load product details')
    }

    return res.json();

}
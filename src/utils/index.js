export async function storefront(query, variables = {}) {

    const shopify = `https://shekemelectric.myshopify.com/admin/api/2023-04/graphql.json
    `

    const response = await fetch(`https://shekemelectric.myshopify.com/admin/api/2023-04/graphql.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_ACCESS_TOKEN,
        },
        body: JSON.stringify({query, variables}),
    })

    return response.json()
}

// TODO: ERROR HANDLING!!!!!!!!

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Footer, Navbar } from '@/components'

import { storefront } from '@/utils'

import vercel from '../../public/unicorn.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products }) {

  const test = process.env.NEXT_PUBLIC_ACCESS_TOKEN

  console.log(test)

  console.log({products})

  

  const demoProducts = [
    {
      "productName": "tesla charger",
      "productId": 0,
    },
    {
      "productName": "epcon charger",
      "productId": 1,
    },
    {
      "productName": "chinese charger",
      "productId": 2,
    },


  ]


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main>
        <Navbar />
          <div className={styles.banner}>
            <h1 className={styles.bannerTitle}>Shekem Electric</h1>
            <p className={styles.bannerText}>
              !המקום הכי טוב במרששת לקנות מטענים לרחב החשמלי שלכם
              !נבנה בגאווה על ידי צוות קודים להצלת העולם
            </p>
            <p className={styles.bannerCta}>buy now!</p>
            <div>
              
            </div>
          </div>
          <div className={styles.prdouctList}>
            <div className={styles.listContainer}>
              {demoProducts.map((product) => (
                <div className={styles.product}>
                    <Image alt="Vercel logo"
                      src={vercel}
                      width={200}
                      height={200}
                      style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }} 
                  />
                  <h1>{product.productName}</h1>
                </div>
              ))}
            </div>

          </div>
        <Footer />
     </main>
    </>
  )
}

// CHANGE TO GET SSR - GET SERVER SIDE PROPS!!!!!

export async function getStaticProps() {

  const { data } = await storefront(productQuery)

  return {
    props : {
      products: data,
    }
  }
}

const productQuery = `
query {
  shop {
    name
    primaryDomain {
      url
      host
    }
  }
}
`

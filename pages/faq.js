import { useEffect, useState } from "react"

export async function getStaticProps(context) {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
    .then( result => {
        return result.json();
    })
    .then( result => {
        return result;
    });

    return {
      props: {
        faq        
      },
    };
}

export default function FaqPage({ faq }) {
    return (
        <>
            <ul>
                {
                    faq &&
                    faq.map( ({ question, answer }, index) => 
                        <li key={index}>
                            <article>
                                <h2>{question}</h2>
                                <p>{answer}</p>
                            </article>
                        </li>
                    )
                }
            </ul>
        </>
    )
}
import Link from '../src/components/Link';
import PageTitle from '../src/components/PageTitle';

// SSG - Static Site Generation;
// SSR - Server Side Rendering;
// ISG - Incremental Static Generation

// export async function getServerSideProps {
//     console.log('Em modo DEV, sempre roda a cada acesso.');
//     console.log('Rodando a cada acesso que o site recebe.');
// }

export async function getStaticProps(context) {
    console.log('Em modo DEV, sempre roda a cada acesso.');

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
        <div>
            <PageTitle 
                label="FAQ - Alura Cases Campanha"
            />
            <h1>Alura Cases - Página de perguntas FAQ</h1>
            <Link href="/" label="Ir para a home"/>
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
        </div>
    )
}
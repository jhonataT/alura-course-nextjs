import NextHead from 'next/head';

export default function PageTitle({ label}) {
    return (
        <NextHead>
            <title>{ label }</title>
        </NextHead>
    )
}
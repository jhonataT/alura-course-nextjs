import NextLink from 'next/link';

export default function Link({ href, label, ...props }) {
    return (
        <NextLink href={href} passHref>
            <a {...props}>{label}</a>
        </NextLink>
    );
}
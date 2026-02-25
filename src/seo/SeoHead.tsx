import { Helmet } from 'react-helmet-async';

type SeoHeadProps = {
  title: string;
  description: string;
  path?: string;
};

const baseUrl = 'https://www.sovana.fr';

export function SeoHead({ title, description, path = '' }: SeoHeadProps) {
  const canonical = `${baseUrl}${path}`;

  return (
    <Helmet>
      <html lang="fr" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
    </Helmet>
  );
}

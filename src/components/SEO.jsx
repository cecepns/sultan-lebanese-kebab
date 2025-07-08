import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  structuredData 
}) => {
  const defaultTitle = "Sultan Lebanese Kebab - Kebab Autentik Lebanon di Balikpapan | Pesan Online";
  const defaultDescription = "Nikmati kebab autentik Lebanon terenak di Balikpapan. Bahan berkualitas halal, cita rasa asli Lebanon. Lokasi: Perumahan Balikpapan Kota Blok B No 28. Pesan online via WhatsApp: 0813-4538-3331";
  const defaultKeywords = "kebab lebanon, kebab balikpapan, sultan lebanese kebab, makanan halal, kebab autentik, pesan kebab online, delivery kebab balikpapan, franchise kebab";
  const defaultImage = "/src/assets/logo-clean.png";
  const defaultUrl = "https://sultanlebanesekebab.com";

  const finalTitle = title ? `${title} | Sultan Lebanese Kebab` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalImage = image || defaultImage;
  const finalUrl = url || defaultUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={finalImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 
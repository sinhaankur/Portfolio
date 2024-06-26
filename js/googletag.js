//Googletag
import React from 'react';

function GoogleTagManager() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-BHWHS9S8Q8"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-BHWHS9S8Q8');
        `}
      </script>
      {/* End Google tag (gtag.js) */}

      {/* Google Tag Manager */}
      <script>
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N6T2NFT3');
        `}
      </script>
      {/* End Google Tag Manager */}
    </>
  );
}

export default GoogleTagManager;

import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='LP-box'>
        <h1>Søger du en</h1>
        <p>
          Jeg designer og koder smukke hjemmesider med de nyeste teknologier
        </p>
        {/* <img
          className='LP-img'
          src='/undraw_heatmap_uyye.svg'
          alt='BigCo Inc. logo'
        /> */}
        <ul className='LP-info'>
          <li>mor</li>
          <li>Projekter</li>
          <li>Teknologier</li>
          <li>Om_mig</li>
          <li>Kontakt</li>
        </ul>
      </div>
      <img
        className='LP-img2'
        src='/undraw_heatmap_uyye.svg'
        alt='BigCo Inc. logo'
      />
      <ul className='bubbles'>
        <li className='bubbles_1'></li>
        <li className='bubbles_2'></li>
        <li className='bubbles_3'></li>
        <li className='bubbles_4'></li>
        <li className='bubbles_5'></li>
        <li className='bubbles_6'></li>
        <li className='bubbles_7'></li>
        <li className='bubbles_8'></li>
        <li className='bubbles_9'></li>
        <li className='bubbles_10'></li>
      </ul>
    </div>
  );
}

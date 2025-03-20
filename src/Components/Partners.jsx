function Partners() {
    const logos = [
        { src: 'BackHub logo.svg',
          alt: 'Partner 1', 
          link: '' },
        { src: 'CableLabs logo.svg',
          alt: 'Partner 2', 
          link: 'https://example.com' },
        { src: 'DBS logo.svg',
          alt: 'Partner 3', 
          link: 'https://example.com' },
        { src: 'EasyEuro logo.svg',
          alt: 'Partner 4', 
          link: 'https://example.com' },
        { src: 'AMD logo.svg', 
          alt: 'Partner 5', 
          link: 'https://example.com' },
    ];

    return (
        <section className='bg-[#07292F] py-6'>
            <p className='text-primary text-center uppercase font-semibold mb-4'>
                Our Trusted Partners
            </p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center'>
                {logos.map((logo, index) => (
                    <a 
                        href={logo.link} 
                        key={index} 
                        className={`w-32 ${index === logos.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
                    >
                        <img src={logo.src} alt={logo.alt} className='object-contain w-full' />
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Partners;

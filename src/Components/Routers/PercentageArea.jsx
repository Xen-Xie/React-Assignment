function PercentageArea() {
    const Percentage = [
        {
            percent: '32%',
            texts: 'Improvement in Open Rates'
        },
        {
            percent: '75%',
            texts: 'Improvement in Ramp Time'
        },
        {
            percent: '35%',
            texts: 'Improvement in Meetings Booked'
        }
    ];

    return (
        <section>
            <div className='relative flex items-center min-h-[40vh] px-6 md:px-20 bg-[#07292F] bg-right bg-cover mx-3 rounded-lg'>
                <div>
                    <div className='space-y-2 text-left my-2 md:my-7'>
                        <h1 className='font-bold text-foreground text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-md leading-tight'>
                            Allocate effort where your reps make an impact.
                        </h1>
                        <h2 className='text-primary text-xl italic font-semibold'>
                            Let us handle the rest.
                        </h2>
                        <p className='text-foreground max-w-md leading-tight'>
                            Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 items-center text-start'>
                        {Percentage.map((item, index) => (
                            <div key={index} className='space-y-2'>
                                <h1 className='text-primary font-bold text-2xl md:text-3xl lg:text-4xl'>
                                    {item.percent}
                                </h1>
                                <p className='max-w-[200px] text-[#E9EEF1] leading-tight py-2'>
                                    {item.texts}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PercentageArea;

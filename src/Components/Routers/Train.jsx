import React from 'react'

function Train() {
    const Texts = [
        {
            texts: 'Quick to ramp',
            images: 'ph_check-circle-duotone.svg'
        },
        {
            texts: 'Easy to optimize',
            images: 'ph_check-circle-duotone.svg'
        },
        {
            texts: 'Quick to scale up',
            images: 'ph_check-circle-duotone.svg'
        },
        {
            texts: 'Works with all your existing tools',
            images: 'ph_check-circle-duotone.svg'
        }
    ]
  return (
    <section className="w-full overflow-hidden">
    <div className="relative flex items-center min-h-[40vh] px-6 md:px-20 bg-[#07292F] bg-right bg-cover mx-3 rounded-lg justify-center max-w-screen-sm md:max-w-full">
        <div className="space-y-3">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">Train your aiDR on your...</h1>
            <h1 className="italic font-semibold text-lg text-primary">preferred email style</h1>
            <p className="text-foreground max-w-[300px] leading-tight">
                You’re in control. Train your aiDR on elements of your Marketing strategy.
            </p>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-6 items-center w-full">
                {Texts.map((text, index) => (
                    <div key={index} className="flex items-center gap-2 p-2">
                        <img src={text.images} alt="" className="w-5 h-5" />
                        <p className="text-white">{text.texts}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
</section>

  )
}

export default Train
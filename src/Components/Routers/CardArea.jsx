import React from 'react'

function CardArea() {
    const Cards = [
        {
            imgs: "ph_magic-wand-duotone.svg",
            title: "Youre in Control",
            description: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work."
        },
        {
            imgs: "ph_graph-duotone.svg",
            title: "Infinitely Scalable",
            description: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly."
        },
        {
            imgs: "ph_arrows-out-cardinal-duotone.svg",
            title: "Incredibly Flexible",
            description: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time."
        },
    ]
  return (
    <section className='mt-3'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center py-7'>
            {
                Cards.map((card, index)=>(
                    <div key={index} className='space-y-5 px-8 py-3 md:space-y-2'>
                        <img src={card.imgs} alt={card.title} className='w-12 h-12'/>
                        <h1 className='font-bold text-foreground'>{card.title}</h1>
                        <p className=' text-foreground leading-tight'>{card.description}</p>

                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default CardArea
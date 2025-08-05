import Image from "next/image"


type CardProps = {
    url: string
    title: string
    description: string

}





export default function AtvCard({url, title, description} : CardProps) {
    return (
        <>
            <div className="bg-amber-300 pb-2.5 max-w-[400px] rounded-2xl">
                <div>
                    <Image 
                    src={url}
                    alt="sla"
                    width={400}
                    height={400}
                    className="rounded-t-2xl"
                    />
                </div>
                <h2 className="px-3 text-4xl my-1">{title}</h2>
                <p className="px-3">{description}</p>
            </div>
        </>
    )
}

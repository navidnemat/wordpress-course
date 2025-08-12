interface cartProps {
    text: string
    name: string
    img: string
}

export default function FeedbackItem({ text, name }: cartProps) {
    return (
        <div className="bg-white/60 backdrop-blur-md rounded-2xl py-5 px-6 shadow-md border border-white/40 transition-all hover:shadow-xl duration-300 my-10 md:mx-0 mx-2 min-h-[220px]">


            {/* <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <img key={i} src="/images/icon-star.svg" width={18} height={18} alt="star" />
                ))}
            </div> */}

            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/60 shadow-sm">
                    <img src="/images/user-01.webp" alt="user" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="text-[16px] font-semibold text-gray-800">{name}</h3>
                </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-[15px]">
                {text}
            </p>
        </div>
    )
}
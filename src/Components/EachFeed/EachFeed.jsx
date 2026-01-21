import { Star } from 'lucide-react';
const EachFeed = ({ feed }) => {
    const { name, image, feedback, date, rating } = feed;
    return (
        <div className='md:w-[440px] w-full h-auto rounded-xl shadow-lite p-6'>
            <div className='flex gap-4'>
                <div className=" w-1/3">
                    <img className="md:w-12 md:h-12 w-10 h-10 rounded-full object-cover" src={image} alt={name} />
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col items-start gap-2">
                        <h3 className="text-center text-xl font-medium text-[#1d2930]">{name}</h3>
                        {
                            rating === 5 ? <div className="flex justify-center gap-1">
                                <Star size="16" className='text-[#1abc9c] fill-[#1abc9c]' />
                                <Star size="16" className='text-[#1abc9c] fill-[#1abc9c]' />
                                <Star size="16" className='text-[#1abc9c] fill-[#1abc9c]' />
                                <Star size="16" className='text-[#1abc9c] fill-[#1abc9c]' />
                                <Star size="16" className='text-[#1abc9c] fill-[#1abc9c]' />
                            </div> : rating === 4 ? <div className="flex justify-center gap-1">
                                <Star size="16" className='text-[#1abc9c] fill-[#1abc9c]' />
                                <Star size="16" className='text-[#1abc9c] fill-[#1abc9c]' />
                                <Star size="16" className='text-[#1abc9c] fill-[#1abc9c]' />
                                <Star size="16" className='text-[#1abc9c] fill-[#1abc9c]' />
                                <Star size="16" className='text-gray-400' />
                            </div> : rating === 3 ? <div className="flex justify-center gap-1">
                                <Star size="16" className='text-[#1abc9c] fill-[#1abc9c]' />
                                <Star size="16" className='text-[#1abc9c] fill-[#1abc9c]' />
                                <Star size="16" className='text-[#1abc9c] fill-[#1abc9c]' />
                                <Star size="16" className='text-gray-400' />
                                <Star size="16" className='text-gray-400' />
                            </div> : rating === 2 ? <div className="flex justify-center gap-1">
                                <Star size="16" className='text-[#1abc9c] fill-[#1abc9c]' />
                                <Star size="16" className='text-[#1abc9c] fill-[#1abc9c]' />
                                <Star size="16" className='text-gray-400' />
                                <Star size="16" className='text-gray-400' />
                                <Star size="16" className='text-gray-400' />
                            </div> : <div className="flex justify-center gap-1">
                                <Star size="16" className='text-[#1abc9c] fill-[#1abc9c]' />
                                <Star size="16" className='text-gray-400' />
                                <Star size="16" className='text-gray-400' />
                                <Star size="16" className='text-gray-400' />
                                <Star size="16" className='text-gray-400' />
                            </div>
                        }
                        <p className=" text-[#627884] text-sm text-left">{feedback}</p>
                    </div>
                   
                </div>
                 <p className=" text-[#627884] text-[10px] md:text-sm text-left relative top-[6px] left-4 w-[200px]">{date}</p>
            </div>
            
        </div>
    );
}

export default EachFeed;
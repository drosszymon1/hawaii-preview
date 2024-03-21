import "./style.scss";
import applyText from "@/assets/apply-text.svg";
import Image from 'next/image';

export const ApplyCircleCursor = () => {
    return (
        // <div className="ballOuter absolute w-[290px] h-[290px] z-[9991]">
            <div className={`flex justify-center items-center flex-4 ball absolute`}>
                <div className="insideText">
                    <Image src={applyText} alt="Apply" width={66} height={63} />
                </div>
            </div>
        // </div>
    )
}
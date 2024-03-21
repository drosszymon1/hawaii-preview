import "./style.css";
import Image from 'next/image';
import shellLogo from "@/assets/shell-logo.svg";
import shellIcon from "@/assets/shell-icon.svg";
import allohaBorder from "@/assets/aloha-big-border.svg";

interface SponsorCircleProps {
    active?: boolean;
}

export const SponsorCircle = ({ active }: SponsorCircleProps) => {
    return (
        <div className={`flex justify-center items-center circle-box flex-4 ${active ? "active" : "inactive"} relative`}>
            {active ? (
                <div className="flex justify-center items-center gap-[13px]">
                    <Image src={shellIcon} alt="Shell Icon" width={34} height={44} />
                    <Image src={shellLogo} alt="Shell Logo" width={161} height={20} />
                </div>
            ) : (
                <>
                    <Image className="absolute" src={allohaBorder} alt="Shell Icon" width={234} height={246} />
                    <div className="flex justify-center items-center">
                        <div className="absolute">
                        </div>
                        <p className="heading4 active-text">TBA</p>
                    </div>
                </>
            )}
        </div>
    )
}
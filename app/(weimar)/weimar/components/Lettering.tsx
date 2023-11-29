import lettering from "@/public/weimar/images/QFFW Lettering.png";
import Image from "next/image";

export default function Lettering() {
	return <div className="flex flex-col h-1/2">
        <div className="flex-1"/>
        <Image src={lettering} alt="lettering"/>
    </div>
}

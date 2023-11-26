import lettering from "@/public/weimar/images/QFFW Lettering.png"
import Image from "next/image"

export default function Lettering(){
    return <div>
        <Image src={lettering} alt="lettering"/>
    </div>
}
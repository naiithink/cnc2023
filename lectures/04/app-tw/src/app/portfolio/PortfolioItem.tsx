import Image from "next/image";

interface PortfolioItemType {
    title: string;
    description: string;
    thumbnail: string;
    link?: string;
}

export default function PortfolioItem({ title, description, thumbnail }: PortfolioItemType) {
    return (
        <div className="bg-zinc-300 p-5">
            <h2 className="text-amber-600 text-lg font-semibold">
                {title}
            </h2>
            <Image
                src={thumbnail}
                alt={"Thumbnail of " + title}
                width="300"
                height="100"
            />
            <p className="text-gray-600">
                {description}
            </p>
        </div>
    );
}

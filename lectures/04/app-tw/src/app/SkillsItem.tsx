import { createElement } from "react";
import { IconType } from "react-icons";

interface SkillsItemInterface {
    title: string;
    description: string;
    icon: IconType;
}

export default function SkillsItem({ title, description, icon }: SkillsItemInterface) {
    return (
        <div className="bg-[#e1e1e1] p-5">
            <div className="text-amber-600">
                <div className="text-3xl">
                    {createElement(icon)}
                </div>
                <h2 className="font-semibold text-xl">
                    {title}
                </h2>
            </div>
            <p className="text-gray-700">
                {description}
            </p>
        </div>
    );
}

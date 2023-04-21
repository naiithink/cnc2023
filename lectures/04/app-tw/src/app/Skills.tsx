import SkillsItem from "./SkillsItem";
import { ImHtmlFive } from "react-icons/im";

export default function Skills() {
    return (
        <div className="bg-[#323338] py-24">
            <div className="container mx-auto">
                <div className="mb-10">
                    <h1 className="text-yellow-500 font-bold text-5xl">Skills</h1>
                    <div className="border-b-[7px] border-b-white w-10 mt-2"></div>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <SkillsItem
                        icon={ImHtmlFive}
                        title="HTML"
                        description="Building the entire website using nothing but the vanilla HTML."
                    />
                    <SkillsItem
                        icon={ImHtmlFive}
                        title="HTML"
                        description="Building the entire website using nothing but the vanilla HTML."
                    />
                    <SkillsItem
                        icon={ImHtmlFive}
                        title="HTML"
                        description="Building the entire website using nothing but the vanilla HTML."
                    />
                    <SkillsItem
                        icon={ImHtmlFive}
                        title="HTML"
                        description="Building the entire website using nothing but the vanilla HTML."
                    />
                    <SkillsItem
                        icon={ImHtmlFive}
                        title="HTML"
                        description="Building the entire website using nothing but the vanilla HTML."
                    />
                    <SkillsItem
                        icon={ImHtmlFive}
                        title="HTML"
                        description="Building the entire website using nothing but the vanilla HTML."
                    />
                </div>
            </div>
        </div>
    );
}

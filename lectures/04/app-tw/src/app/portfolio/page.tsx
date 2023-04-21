import PageHeader from "@/components/PageHeader";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
    return (
        <div className="bg-[#2c2c2c]">
            <div className="container mx-auto mb-10 mt-20">
                <PageHeader
                    header="Portfolio"
                />
                <div className="grid grid-cols-4">
                    {
                        Array(10).fill(0).map(() => {
                            return (
                                <PortfolioItem
                                    title="Work #1"
                                    description="I'm starting to love making websites."
                                    thumbnail="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/603ec5023c4ad8fde1783428_Ij2FnlaQX3wZEqCdfWmynR3kTFRlelaf-BXa21868XGfGWQiBv5FISkffcRaUhXrgoKiMX9FiLDGZ2jxwKGdt_vTyGUVHlqcm9uMjUBNQRgltzfgD3TulNwNixxWI2R3ay9vcAc7.jpeg"
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

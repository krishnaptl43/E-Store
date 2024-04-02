import { useEffect } from "react";
import BrandSection from "../components/sections/BrandSection";
import CallToAction from "../components/sections/CallToAction";
import CategorySection from "../components/sections/CategorySection";
import FeaturedProduct from "../components/sections/FeaturedProduct";
import FeaturesSection from "../components/sections/FeaturesSection";
import MainSlider from "../components/sections/MainSlider";
import RecentProduct from "../components/sections/RecentProduct";
import { useTitle } from "../customHook/customHooks";

export default function HomePage() {
    const title = useTitle()

    useEffect(() => {
        title("Home")
    }, [title])

    return (
        <>
            <MainSlider />
            <BrandSection />
            <FeaturesSection />
            <CategorySection />
            <CallToAction />
            <FeaturedProduct />
            <RecentProduct />
        </>
    )
}

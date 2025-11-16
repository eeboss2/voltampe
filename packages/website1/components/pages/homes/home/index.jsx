import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BannerTwo from "./banner";
import SwitchTab from "../../common/dark-light";
import Services from "./services";
import About from "./about";
import WhoAre from "./who-are";
import Faq from "./faq";
import Portfolio from "./portfolio";
import Pricing from "./pricing";
import News from "./news";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import FooterTwo from "@/components/layout/footers/footer-two";
import ChooseUs from "./choose-us";

const HomeTwo = ({addClass}) => {
    return (
        <>
            {/* addClass="two"    addClass={addClass} */}
            {/* <SEO pageTitle="Volty Electric Power Tecology Company" /> */}
            <SwitchTab addClass={addClass} />
            <HeaderOne addClass={addClass} />
            <BannerTwo />
            <About />
            <Services />
            <ChooseUs  addClass={addClass} />
            <Portfolio />
            <Faq />
            <WhoAre addClass={addClass} />
            <News />
            <FooterTwo />
            <ScrollToTop addClass={addClass} /> 
        </>
    );
};

export default HomeTwo;
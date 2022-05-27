import {lazy} from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
    return (
        <Container>
            <ScrollToTop/>
            <ContentBlock
                type="left"
                title={AboutContent.title}
                content={AboutContent.text + '\n'+ AboutContent.text2}
                button={IntroContent.button}
                icon="graphs.svg"
                id="about"
            />
            <ContentBlock
                type="right"
                title={IntroContent.title}
                content={IntroContent.text}
                button={IntroContent.button}
                icon="waving.svg"
                id="intro"
            />

            <ContentBlock
                type="left"
                title={ProductContent.title}
                content={ProductContent.text}
                button={IntroContent.button}
                icon="developer.svg"
                id="product"
            />

            <ContentBlock
                type="right"
                title={MissionContent.title}
                content={MissionContent.text}
                button={IntroContent.button}
                icon="product-launch.svg"
                id="contact"
            />

            <ContentBlock
                type="left"
                title={ContactContent.title}
                content={ContactContent.text}
                button={IntroContent.button}
                icon="spain.svg"
                id="product"
            />

        </Container>
    );
};

export default Home;

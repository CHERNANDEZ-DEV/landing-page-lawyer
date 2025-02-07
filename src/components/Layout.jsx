import { Bar } from "./Bar";
import { Bottom } from "./Bottom";
import MainSection from "../pages/MainSection";
import AboutMe from "../pages/AboutMe";
import Services from "../pages/Services";

const Layout = ({ children }) => {
    return (
        <div>
            <MainSection/>
            <AboutMe/>
            {children}
            <Services />
            {/* <Bottom /> */}
        </div>
    );
};

export default Layout;

import Head from "./Head";
import About from "./About";
import TattooGallery from "./TattooGallery";
import Contact from "./Contact";
import {Content} from "antd/es/layout/layout";

const App = () => {
    return (
        <Content>
            <Head/>
            <About/>
            <TattooGallery/>
            <Contact/>
        </Content>
    );
}

export default App;

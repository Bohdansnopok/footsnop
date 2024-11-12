import {Brands} from "../../components/mainPageComponents/Brands/Brands";
import {Header} from "../../components/mainPageComponents/Header/Header";
import './Main.css'
import {Content} from "../../components/mainPageComponents/Content/Content";

export function Main() {
    return (
        <div className="mainPage">
            <Header/>
            <Brands/>
            <Content/>
        </div>
    );
}
import { Fragment } from "react/jsx-runtime";
import BlurIn from "./magicui/Blur-in";
import Particles from "./magicui/Particles";
import CustomButton from "./Button";
import TextRevealByWord from "./magicui/text-reveal";
import Globe from "./magicui/Globe";
function TitleScreen() {
    return (
        <Fragment>
            <Particles color="black"  quantity={200}></Particles>

            <Particles color="black" size={0.3} ></Particles>

            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <div style={{ fontFamily: "monospace", fontWeight: "normal", fontSize: "20px", marginBottom: "5px" }}>
                    <BlurIn word="HI , I AM KSHITIJ JATHAR" duration={1}></BlurIn>
                </div>
                <div style={{ textAlign: "center", fontFamily: "monospace", fontWeight: "normal", fontSize: "14px" }}>
                    <BlurIn word="AM 22 , AND I LIKE TO CODE !!" duration={2}></BlurIn>
                </div>
            {/* <CustomButton /> */}
            </div>
        </Fragment>
    );
}

export default TitleScreen;

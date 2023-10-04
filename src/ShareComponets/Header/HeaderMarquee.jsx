import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const HeaderMarquee = () => {
    return (
        <div className="flex bg-[#F3F3F3] items-center py-3 px-4 rounded-md">
            <div className="">
                <button className="btn btn-secondary">Braking News</button>
            </div>
            <div>
                <Marquee speed={80} delay={1}>
                    <Link className="mr-16 font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                    <Link className=" font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, distinctio.
                    </Link>
                </Marquee>
                
            </div>
        </div>
    );
};

export default HeaderMarquee;
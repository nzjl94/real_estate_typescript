import Theme    from "../ui/elements/theme";
import Detail   from "./detail";
import Social   from "./social";
import Start 	from "../ui/components/TEXT_BUTTON";

export default () => <Theme>
    <div className="w-full">
        <Start parentClass="cp-pd-t-1" show={true} />
        <Detail />
        <Social />
    </div>
</Theme>
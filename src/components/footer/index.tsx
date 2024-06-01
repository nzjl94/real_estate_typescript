import React    from 'react'
import Theme    from "../ui/elements/theme";

import Detail   from "./detail";
import Social   from "./social";

export default () => <Theme>
    <div className="w-full">
        <Detail />
        <Social />
    </div>
</Theme>
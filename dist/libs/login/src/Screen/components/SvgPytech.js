import { memo } from "react";
import LoginSvg from '../../../../assets/images/login_letras.svg';
import LoginSvgDark from '../../../../assets/images/login_letras_dark.svg';
import { useApp } from "@/libs/providers/App";
export default memo(({ size = 200 }) => {
    const { colorScheme } = useApp();
    const props = { width: size, height: size };
    if (colorScheme === 'dark')
        return <LoginSvgDark {...props}/>;
    return <LoginSvg {...props}/>;
});

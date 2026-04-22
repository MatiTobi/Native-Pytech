import { memo } from "react"
import LogoSvg from '../../../../assets/images/logo_letras.svg'
import LogoSvgDark from '../../../../assets/images/logo_letras_dark.svg'
import { useApp } from "libs/providers/App"



export default memo(({ size=200 }: { size?: number }) => {
    
    const { colorScheme } = useApp()

    const props = {width: size, height: size}

    if (colorScheme === 'dark') return <LogoSvgDark {...props}/>
    return <LogoSvg {...props}/>
})
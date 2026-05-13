import { type SFSymbol } from 'sf-symbols-typescript';


type Props = {
    /**
        The name of the system image (SF Symbol).
        For example: 'photo', 'heart.fill', 'star.circle'
        @ios
    */
    systemName?: SFSymbol;
    /**
        The size of the icon.
        @ios
        @default 100
    */
    size?: number;
}

export default Props
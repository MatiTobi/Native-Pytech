import { Input, Gradient, SvgPytech, SvgLogoPytech } from './components'



type Props = {
    title: string;
    subtitle?: string;
    iconPage?: React.ReactNode;
    bottomElements?: React.ReactNode[] | React.ReactNode;
}


export type Component =  React.MemoExoticComponent<React.FC<Props>> & {
    Gradient: typeof Gradient
    Input: typeof Input
    SvgPytech: typeof SvgPytech
    SvgLogoPytech: typeof SvgLogoPytech
}

export default Props
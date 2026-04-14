import Button from './Button';
type Props = {
    children: React.ReactNode;
    backgroundColorPage: string;
};
export type Component = React.MemoExoticComponent<React.FC<Props>> & {
    Button: typeof Button;
};
export default Props;

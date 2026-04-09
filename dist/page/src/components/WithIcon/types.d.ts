import React from 'react';
import Subtitle from '../Subtitle';
import PropsPageWrapper from '../PageWrapper/types';
type Props = {
    children?: React.ReactNode;
    renderIcon?: () => React.ReactNode;
    style?: PropsPageWrapper['style'];
    title?: string;
    subtitle?: string;
    renderSubtitle?: () => React.ReactElement<typeof Subtitle>;
};
export type Component = React.MemoExoticComponent<React.FC<Props>> & {
    Subtitle: typeof Subtitle;
};
export default Props;

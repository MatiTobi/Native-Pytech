import React from 'react';
type Props = {
    /**
        Children to display in the navigation link.
    */
    children?: React.ReactNode;
    /**
        Function to navigate to the destination page.
    */
    onPress?: () => void;
};
declare const _default: React.MemoExoticComponent<({ children, onPress }: Props) => React.JSX.Element>;
export default _default;

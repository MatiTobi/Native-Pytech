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
    /**
        Add a <Spacer /> so teh Image is aligned to the right.
        @default true
    */
    addSpacer?: boolean;
};
declare const _default: React.MemoExoticComponent<({ children, onPress, addSpacer }: Props) => React.JSX.Element>;
export default _default;

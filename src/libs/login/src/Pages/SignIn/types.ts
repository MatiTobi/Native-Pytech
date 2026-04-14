
type Props = {
    title: string;
    subtitle?: string;
    iconPage?: React.ReactNode;
}


export type Store = {
    fields: {
        name: {
            value: string | null;
            error: string | null;
        };
        lastName: {
            value: string | null;
            error: string | null;
        };
        email: {
            value: string | null;
            error: string | null;
        };
        newPassword: {
            value: string | null;
            error: string | null;
        };
        confirmPassword: {
            value: string | null;
            error: string | null;
        };
    };
    createAccountEnabled: boolean;
}

export default Props
declare function numberToTextCurrency(value: number): string;
declare const Formats: {
    numberToText: (value: number) => string;
    TextToNumber: (value: string) => number;
    numberToTextCurrency: typeof numberToTextCurrency;
    dateToText: (value: string) => string;
    capitalizeText: (string: string) => string;
    phoneToText: (phone: number | string) => string;
};
export default Formats;

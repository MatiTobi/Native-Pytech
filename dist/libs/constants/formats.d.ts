declare function numberToTextCurrency(value: number): string;
declare const Formats: {
    numberToText: (value: number) => string;
    TextToNumber: (value: string) => number;
    numberToTextCurrency: typeof numberToTextCurrency;
    capitalizeText: (string: string) => string;
    phoneToText: (phone: number | string) => string;
    dateToText: (value: string) => string;
    dateToTextFormat: (date: Date, format?: string) => any;
};
export default Formats;

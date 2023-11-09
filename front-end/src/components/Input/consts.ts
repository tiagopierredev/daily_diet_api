export type MaskInputProps =
    | 'date'
    | 'phone'
    | 'mobilePhone'
    | 'cep'
    | 'cpf'
    | 'cnpj'
    | 'cpfOrCnpj'
    | 'hours'
    | 'rg'
    | 'number'
    | 'percentage'
    | 'money'
    | 'card'
    | 'dateForCard'
    | 'text'
    | 'agency'
    | 'coupom';

export const maskInput = (text: string, type?: MaskInputProps) => {
    if (type === 'number') {
        const mask = [];
        const regex = /[0-9]/;
        for (let i = 0; i < text.length; i++) {
            mask.push(regex);
        }
        return mask;
    }

    if (type === 'coupom') {
        const mask = [];
        const regex = /^[A-Za-zÀ-ÿ0-9]*$/;
        for (let i = 0; i < text.length; i++) {
            mask.push(regex);
        }
        return mask;
    }

    if (type === 'text') {
        const mask = [];
        const regex = /^[A-Za-zÀ-ÿ\s]*$/;
        for (let i = 0; i < text.length; i++) {
            mask.push(regex);
        }
        return mask;
    }

    if (type === 'percentage') {
        const cleanText = text.replace(/\D+/g, '');
        if (!cleanText.charAt(2)) {
            return [/\d/, /\d/, '%'];
        }

        if (!cleanText.charAt(4)) {
            return [/\d/, /\d/, '.', /\d/, /\d/, '%'];
        }

        return [/\d/, /\d/, /\d/, '.', /\d/, /\d/, '%'];
    }

    if (type === 'phone') {
        return [
            '(',
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
        ];
    }

    if (type === 'cep') {
        return [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    }

    if (type === 'card') {
        return [
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
        ];
    }

    if (type === 'mobilePhone') {
        return [
            '(',
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
        ];
    }

    if (type === 'date') {
        const cleanText = text.replace(/\D+/g, '');

        let secondDigitDayMask = /\d/;

        if (cleanText.charAt(0) === '0') {
            secondDigitDayMask = /[1-9]/;
        }
        if (cleanText.charAt(0) === '3') {
            secondDigitDayMask = /[01]/;
        }

        let secondDigitMonthMask = /\d/;

        if (cleanText.charAt(2) === '0') {
            secondDigitMonthMask = /[1-9]/;
        }
        if (cleanText.charAt(2) === '1') {
            secondDigitMonthMask = /[012]/;
        }

        return [
            /[0-3]/,
            secondDigitDayMask,
            '/',
            /[0-1]/,
            secondDigitMonthMask,
            '/',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
        ];
    }

    if (type === 'dateForCard') {
        const cleanText = text.replace(/\D+/g, '');

        let secondDigitMonthMask = /\d/;

        if (cleanText.charAt(0) === '0') {
            secondDigitMonthMask = /[1-9]/;
        }
        if (cleanText.charAt(0) === '1') {
            secondDigitMonthMask = /[012]/;
        }

        return [/[0-1]/, secondDigitMonthMask, '/', /\d/, /\d/];
    }

    if (type === 'hours') {
        const cleanText = text.replace(/\D+/g, '');

        let secondDigitMonthMask = /\d/;

        if (cleanText.charAt(0) === '0') {
            secondDigitMonthMask = /[0-9]/;
        }
        if (cleanText.charAt(0) === '1') {
            secondDigitMonthMask = /[0-9]/;
        }
        if (cleanText.charAt(0) === '2') {
            secondDigitMonthMask = /[0-3]/;
        }

        return [/[0-2]/, secondDigitMonthMask, ':', /[0-5]/, /[0-9]/];
    }

    if (type === 'cpf') {
        return [
            /\d/,
            /\d/,
            /\d/,
            '.',
            /\d/,
            /\d/,
            /\d/,
            '.',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
        ];
    }

    if (type === 'cpfOrCnpj') {
        if (text.length > 14) {
            return [
                /\d/,
                /\d/,
                '.',
                /\d/,
                /\d/,
                /\d/,
                '.',
                /\d/,
                /\d/,
                /\d/,
                '/',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
            ];
        }
        return [
            /\d/,
            /\d/,
            /\d/,
            '.',
            /\d/,
            /\d/,
            /\d/,
            '.',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
        ];
    }

    if (type === 'cnpj') {
        return [
            /\d/,
            /\d/,
            '.',
            /\d/,
            /\d/,
            /\d/,
            '.',
            /\d/,
            /\d/,
            /\d/,
            '/',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
        ];
    }

    if (type === 'rg') {
        return [
            /\d/,
            /\d/,
            '.',
            /\d/,
            /\d/,
            /\d/,
            '.',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
        ];
    }

    if (type === 'agency') {
        return [/\d/, /\d/, /\d/, /\d/, /[0-9-]/, /[xX]?/];
    }

    return '';
};

import chalk from 'chalk';
export default function make(text, tint) {
    let link = chalk;
    if (tint.bold) {
        link = link.bold;
    }
    if (tint.line) {
        link = link.underline;
    }
    if (tint.backTone) {
        switch (tint.backTone) {
            case 'black':
                link = link.bgBlack;
                break;
            case 'red':
                link = link.bgRed;
                break;
            case 'green':
                link = link.bgGreen;
                break;
            case 'yellow':
                link = link.bgYellow;
                break;
            case 'blue':
                link = link.bgBlue;
                break;
            case 'magenta':
                link = link.bgMagenta;
                break;
            case 'cyan':
                link = link.bgCyan;
                break;
            case 'white':
                link = link.bgWhite;
                break;
            case 'blackBright':
                link = link.bgBlackBright;
                break;
            case 'redBright':
                link = link.bgRedBright;
                break;
            case 'greenBright':
                link = link.bgGreenBright;
                break;
            case 'yellowBright':
                link = link.bgYellowBright;
                break;
            case 'blueBright':
                link = link.bgBlueBright;
                break;
            case 'magentaBright':
                link = link.bgMagentaBright;
                break;
            case 'cyanBright':
                link = link.bgCyanBright;
                break;
            case 'whiteBright':
                link = link.bgWhiteBright;
                break;
            default:
                link = link.bgHex(tint.backTone);
                break;
        }
    }
    if (tint.tone) {
        switch (tint.tone) {
            case 'black':
                link = link.black;
                break;
            case 'red':
                link = link.red;
                break;
            case 'green':
                link = link.green;
                break;
            case 'yellow':
                link = link.yellow;
                break;
            case 'blue':
                link = link.blue;
                break;
            case 'magenta':
                link = link.magenta;
                break;
            case 'cyan':
                link = link.cyan;
                break;
            case 'white':
                link = link.white;
                break;
            case 'blackBright':
                link = link.blackBright;
                break;
            case 'redBright':
                link = link.redBright;
                break;
            case 'greenBright':
                link = link.greenBright;
                break;
            case 'yellowBright':
                link = link.yellowBright;
                break;
            case 'blueBright':
                link = link.blueBright;
                break;
            case 'magentaBright':
                link = link.magentaBright;
                break;
            case 'cyanBright':
                link = link.cyanBright;
                break;
            case 'whiteBright':
                link = link.whiteBright;
                break;
            default:
                link = link.hex(tint.tone);
                break;
        }
    }
    return link(text);
}
//# sourceMappingURL=node.js.map
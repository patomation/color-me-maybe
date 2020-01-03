const colors = new Map([
    ["aliceblue",
        [240, 248, 255]],
    ["antiquewhite",
        [250, 235, 215]],
    ["aqua",
        [0, 255, 255]],
    ["aquamarine",
        [127, 255, 212]],
    ["azure",
        [240, 255, 255]],
    ["beige",
        [245, 245, 220]],
    ["bisque",
        [255, 228, 196]],
    ["black",
        [0, 0, 0]],
    ["blanchedalmond",
        [255, 235, 205]],
    ["blue",
        [0, 0, 255]],
    ["blueviolet",
        [138, 43, 226]],
    ["brown",
        [165, 42, 42]],
    ["burlywood",
        [222, 184, 135]],
    ["cadetblue",
        [95, 158, 160]],
    ["chartreuse",
        [127, 255, 0]],
    ["chocolate",
        [210, 105, 30]],
    ["coral",
        [255, 127, 80]],
    ["cornflowerblue",
        [100, 149, 237]],
    ["cornsilk",
        [255, 248, 220]],
    ["crimson",
        [220, 20, 60]],
    ["cyan",
        [0, 255, 255]],
    ["darkblue",
        [0, 0, 139]],
    ["darkcyan",
        [0, 139, 139]],
    ["darkgoldenrod",
        [184, 134, 11]],
    ["darkgray",
        [169, 169, 169]],
    ["darkgreen",
        [0, 100, 0]],
    ["darkgrey",
        [169, 169, 169]],
    ["darkkhaki",
        [189, 183, 107]],
    ["darkmagenta",
        [139, 0, 139]],
    ["darkolivegreen",
        [85, 107, 47]],
    ["darkorange",
        [255, 140, 0]],
    ["darkorchid",
        [153, 50, 204]],
    ["darkred",
        [139, 0, 0]],
    ["darksalmon",
        [233, 150, 122]],
    ["darkseagreen",
        [143, 188, 143]],
    ["darkslateblue",
        [72, 61, 139]],
    ["darkslategray",
        [47, 79, 79]],
    ["darkslategrey",
        [47, 79, 79]],
    ["darkturquoise",
        [0, 206, 209]],
    ["darkviolet",
        [148, 0, 211]],
    ["deeppink",
        [255, 20, 147]],
    ["deepskyblue",
        [0, 191, 255]],
    ["dimgray",
        [105, 105, 105]],
    ["dodgerblue",
        [30, 144, 255]],
    ["firebrick",
        [178, 34, 34]],
    ["floralwhite",
        [255, 250, 240]],
    ["forestgreen",
        [34, 139, 34]],
    ["fuchsia",
        [255, 0, 255]],
    ["gainsboro",
        [220, 220, 220]],
    ["ghostwhite",
        [248, 248, 255]],
    ["gold",
        [255, 215, 0]],
    ["goldenrod",
        [218, 165, 32]],
    ["gray",
        [128, 128, 128]],
    ["green",
        [0, 128, 0]],
    ["greenyellow",
        [173, 255, 47]],
    ["grey",
        [128, 128, 128]],
    ["honeydew",
        [240, 255, 240]],
    ["hotpink",
        [255, 105, 180]],
    ["indianred",
        [205, 92, 92]],
    ["indigo",
        [75, 0, 130]],
    ["ivory",
        [255, 255, 240]],
    ["khaki",
        [240, 230, 140]],
    ["lavender",
        [230, 230, 250]],
    ["lavenderblush",
        [255, 240, 245]],
    ["lawngreen",
        [124, 252, 0]],
    ["lemonchiffon",
        [255, 250, 205]],
    ["lightblue",
        [173, 216, 230]],
    ["lightcoral",
        [240, 128, 128]],
    ["lightcyan",
        [224, 255, 255]],
    ["lightgoldenrodyellow",
        [250, 250, 210]],
    ["lightgray",
        [211, 211, 211]],
    ["lightgreen",
        [144, 238, 144]],
    ["lightgrey",
        [211, 211, 211]],
    ["lightpink",
        [255, 182, 193]],
    ["lightsalmon",
        [255, 160, 122]],
    ["lightseagreen",
        [32, 178, 170]],
    ["lightskyblue",
        [135, 206, 250]],
    ["lightslategray",
        [119, 136, 153]],
    ["lightslategrey",
        [119, 136, 153]],
    ["lightsteelblue",
        [176, 196, 222]],
    ["lightyellow",
        [255, 255, 224]],
    ["lime",
        [0, 255, 0]],
    ["limegreen",
        [50, 205, 50]],
    ["linen",
        [250, 240, 230]],
    ["magenta",
        [255, 0, 255]],
    ["maroon",
        [128, 0, 0]],
    ["mediumaquamarine",
        [102, 205, 170]],
    ["mediumblue",
        [0, 0, 205]],
    ["mediumorchid",
        [186, 85, 211]],
    ["mediumpurple",
        [147, 112, 219]],
    ["mediumseagreen",
        [60, 179, 113]],
    ["mediumslateblue",
        [123, 104, 238]],
    ["mediumspringgreen",
        [0, 250, 154]],
    ["mediumturquoise",
        [72, 209, 204]],
    ["mediumvioletred",
        [199, 21, 133]],
    ["midnightblue",
        [25, 25, 112]],
    ["mintcream",
        [245, 255, 250]],
    ["mistyrose",
        [255, 228, 225]],
    ["moccasin",
        [255, 228, 181]],
    ["navajowhite",
        [255, 222, 173]],
    ["navy",
        [0, 0, 128]],
    ["oldlace",
        [253, 245, 230]],
    ["olive",
        [128, 128, 0]],
    ["olivedrab",
        [107, 142, 35]],
    ["orange",
        [255, 165, 0]],
    ["orangered",
        [255, 69, 0]],
    ["orchid",
        [218, 112, 214]],
    ["palegoldenrod",
        [238, 232, 170]],
    ["palegreen",
        [152, 251, 152]],
    ["paleturquoise",
        [175, 238, 238]],
    ["palevioletred",
        [219, 112, 147]],
    ["papayawhip",
        [255, 239, 213]],
    ["peachpuff",
        [255, 218, 185]],
    ["peru",
        [205, 133, 63]],
    ["pink",
        [255, 192, 203]],
    ["plum",
        [221, 160, 221]],
    ["powderblue",
        [176, 224, 230]],
    ["purple",
        [128, 0, 128]],
    ["rebeccapurple",
        [102, 51, 153]],
    ["red",
        [255, 0, 0]],
    ["rosybrown",
        [188, 143, 143]],
    ["royalblue",
        [65, 105, 225]],
    ["saddlebrown",
        [139, 69, 19]],
    ["salmon",
        [250, 128, 114]],
    ["sandybrown",
        [244, 164, 96]],
    ["seagreen",
        [46, 139, 87]],
    ["seashell",
        [255, 245, 238]],
    ["sienna",
        [160, 82, 45]],
    ["silver",
        [192, 192, 192]],
    ["skyblue",
        [135, 206, 235]],
    ["slateblue",
        [106, 90, 205]],
    ["slategray",
        [112, 128, 144]],
    ["slategrey",
        [112, 128, 144]],
    ["snow",
        [255, 250, 250]],
    ["springgreen",
        [0, 255, 127]],
    ["steelblue",
        [70, 130, 180]],
    ["tan",
        [210, 180, 140]],
    ["teal",
        [0, 128, 128]],
    ["thistle",
        [216, 191, 216]],
    ["tomato",
        [255, 99, 71]],
    ["turquoise",
        [64, 224, 208]],
    ["violet",
        [238, 130, 238]],
    ["wheat",
        [245, 222, 179]],
    ["white",
        [255, 255, 255]],
    ["whitesmoke",
        [245, 245, 245]],
    ["yellow",
        [255, 255, 0]],
    ["yellowgreen",
        [154, 205, 50]]]);
function hsltorgb(h, s, l) {//https://gist.github.com/vahidk/05184faf3d92a0aa1b46aeaa93b07786
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let hp = h / 60.0;
    let x = c * (1 - Math.abs((hp % 2) - 1));
    let rgb1;
    if (isNaN(h)) rgb1 = [0, 0, 0];
    else if (hp <= 1) rgb1 = [c, x, 0];
    else if (hp <= 2) rgb1 = [x, c, 0];
    else if (hp <= 3) rgb1 = [0, c, x];
    else if (hp <= 4) rgb1 = [0, x, c];
    else if (hp <= 5) rgb1 = [x, 0, c];
    else if (hp <= 6) rgb1 = [c, 0, x];
    let m = l - c * 0.5;
    return [
        Math.round(255 * (rgb1[0] + m)),
        Math.round(255 * (rgb1[1] + m)),
        Math.round(255 * (rgb1[2] + m))];
}
const Util = {
    deHex(arr) {
        return arr.map(val => parseInt(val, 16));
    },
    clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    },
    lerpNumber(start, end, percent) {
        return start + (end - start) * percent;
    },
    hex(number) {
        let n = number.toString(16);
        if (n.length === 1) return 0 + n;
        return n;
    }
}

const COL_Interval = 255 / 16;
const COL_RGBMax = 255;
/**
 * primary export
 *
 * @class Color
 */
class Color {
    constructor(r, g, b, a) {
        if (Number.isNaN(+r)) {
            let other = Color.fromString(r);
            this._r = other._r;
            this._b = other._b;
            this._g = other._g;
            this._a = other._a;
        } else {
            this._r = Util.clamp(Math.round(+r), 0, 255);
            this._g = Util.clamp(Math.round(+g), 0, 255);
            this._b = Util.clamp(Math.round(+b), 0, 255);
            this._a = Util.clamp(+a, 0, 1);
        }
    }
    /**
     *
     * 
     * @static
     * @param {string} colStr
     * @returns {Color}
     * @memberof Color
     */
    static fromString(colStr) {
        if (/#[0-9A-F]{3,4}|#[0-9A-F]{6}|#[0-9A-F]{8}/.test(colStr)) {
            return Color.fromHex(colStr);
        } else if (/rgb/.test(colStr)) {
            return Color.fromRGB(colStr);
        } else if (/hsl/.test(colStr)) {
            return Color.fromHSL(colStr);
        } else {
            return Color.fromColorString(colStr);
        }
    }
    /**
     *
     *
     * @static
     * @param {string} hexStr
     * @returns {Color}
     * @memberof Color
     */
    static fromHex(hexStr) {
        hexStr = hexStr.replace(/\s/g, '');
        let [r, g, b, a] = [0, 0, 0, 0];
        if (hexStr.length < 6) {
            [, r, g, b, a] = Util.deHex(hexStr.match(/#([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])*/i));
            if (Number.isNaN(a)) a = COL_Interval;
            return new Color(r * 16, g * 16, b * 16, a * 16);
        } else {
            [, r, g, b, a] = Util.deHex(hexStr.match(/#([0-9A-F][0-9A-F])([0-9A-F][0-9A-F])([0-9A-F][0-9A-F])([0-9A-F][0-9A-F])*/i));
            if (Number.isNaN(a)) a = COL_RGBMax;
            return new Color(r, g, b, a);
        }
    }
    /**
     *
     *
     * @static
     * @param {string} rgbString
     * @returns {Color}
     * @memberof Color
     */
    static fromRGB(rgbString) {
        rgbString = rgbString.replace(/\s/g, '');
        let [r, g, b, a] = [0, 0, 0, 0];
        if (rgbString.substr(0, 4) === "rgba") {
            [, r, g, b, a] = rgbString.match(/rgba\((\d+),(\d+),(\d+),([\d\.]+)\)/i);
        } else {
            [, r, g, b, a] = rgbString.match(/rgb\((\d+),(\d+),(\d+)\)/i);
        }
        if (Number.isNaN(a) || a === undefined) a = 1;
        return new Color(r, g, b, a);
    }
    /**
     *
     *
     * @static
     * @param {string} hslStr
     * @returns {Color}
     * @memberof Color
     */
    static fromHSL(hslStr) {
        hslStr = hslStr.replace(/\s/g, '');
        let [h, s, l, a] = [0, 0, 0, 1];
        if (hslStr.substr(0, 4) === "hsla") {
            [, h, s, l, a] = hslStr.match(/hsla\((\d+),(\d+)\%,(\d+)\%,([\d\.]+)\)/i);
        } else {
            [, h, s, l, a] = hslStr.match(/hsl\((\d+),(\d+)\%,(\d+)\%\)/i);
        }
        if (Number.isNaN(a) || a === undefined) a = 1;
        const [R, G, B] = hsltorgb(+h, +s / 100, +l / 100);
        return new Color(R, G, B, a);
    }
    /**
     *
     *
     * @static
     * @param {string} colStr
     * @returns {Color}
     * @memberof Color
     */
    static fromColorString(colStr) {
        if (colors.has(colStr.toLowerCase())) {
            const [r, g, b] = colors.get(colStr.toLowerCase());
            return new Color(r, g, b, 1);
        } else {
            throw new Error("unable to find color " + colStr);
        }
    }
    /**
     *
     *
     * @static
     * @returns {Color}
     * @memberof Color
     */
    static random() {
        return new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random() * 255);
    }
    /**
     *
     *
     * @static
     * @param {string} name
     * @param {function} func
     * @memberof Color
     */
    static extend(name, func) {
        Object.defineProperty(Color.prototype, name, { value: func });
    }



    //class functions
    /**
     *
     *
     * @param {string} [type="RGB"]
     * @returns {string}
     * @memberof Color
     */
    toString(type = "RGB") {
        switch (type.toUpperCase()) {
            case "HEX":
                if (this._a != 1) {
                    return `#${Util.hex(this._r)}${Util.hex(this._g)}${Util.hex(this._b)}${Util.hex(Math.round(this._a * 255))}`;
                } else {
                    return `#${Util.hex(this._r)}${Util.hex(this._g)}${Util.hex(this._b)}`;
                }
            default:
                if (this._a != 1) {
                    return `rgba(${this._r},${this._g},${this._b},${this._a})`;
                } else {
                    return `rgb(${this._r},${this._g},${this._b})`;
                }
        }
    }
    /**
     *
     *
     * @param {number} value [0-255]
     * @returns {Color}
     * @memberof Color
     */
    r(value) {
        return new Color(value, this._g, this._b, this._a);
    }
    /**
     *
     *
     * @param {number} value [0-255]
     * @returns {Color}
     * @memberof Color
     */
    g(value) {
        return new Color(this._r, value, this._b, this._a);
    }
    /**
     *
     *
     * @param {number} value [0-255]
     * @returns {Color}
     * @memberof Color
     */
    b(value) {
        return new Color(this._r, this._g, value, this._a);
    }
    /**
     *
     *
     * @param {number} value [0-1]
     * @returns {Color}
     * @memberof Color
     */
    a(value) {
        return new Color(this._r, this._g, this._b, value);
    }
    /**
     *
     *
     * @param {Color} other
     * @param {number} percent [0-100]
     * @returns {Color}
     * @memberof Color
     */
    mix(other, percent) {
        percent /= 100;
        return new Color(
            Util.lerpNumber(this._r, other._r, percent),
            Util.lerpNumber(this._g, other._g, percent),
            Util.lerpNumber(this._b, other._b, percent),
            Util.lerpNumber(this._r, other._a, percent))
    }
    /**
     *
     *
     * @param {number} percent
     * @returns {Color}
     * @memberof Color
     */
    luminance(percent) {
        percent /= 100;
        return new Color(
            Math.round(Math.min(Math.max(0, this._r + (this._r * percent)), 255)),
            Math.round(Math.min(Math.max(0, this._g + (this._g * percent)), 255)),
            Math.round(Math.min(Math.max(0, this._b + (this._b * percent)), 255)),
            this._a
        );
    }
    /**
     *
     *
     * @param {number} percent [0-100]
     * @returns {Color}
     * @memberof Color
     */
    darken(percent) {
        return this.luminance(-percent);
    }
    /**
     *
     *
     * @param {number} percent [0-100]
     * @returns {Color}
     * @memberof Color
     */
    lighten(percent) {
        return this.luminance(percent);//alias for luminance;
    }
    /**
     *
     *
     * @returns {Color}
     * @memberof Color
     */
    grayscale() {
        let avg = (this._r + this._b + this._g) / 3;
        return new Color(avg, avg, avg, this._a);
    }
    /**
     *
     *
     * @returns {Color}
     * @memberof Color
     */
    invert() {
        return new Color(255 - this._r, 255 - this._g, 255 - this._b, this._a);
    }


    //non chainable methods
    /**
     *
     *
     * @returns {Number}
     * @memberof Color
     */
    red() {
        return this._r;
    }
    /**
     *
     *
     * @returns {Number}
     * @memberof Color
     */
    green() {
        return this._g;
    }
    /**
     *
     *
     * @returns {Number}
     * @memberof Color
     */
    blue() {
        return this._b;
    }
    /**
     *
     *
     * @returns {Number}
     * @memberof Color
     */
    alpha() {
        return this._a;
    }
}
export default Color;
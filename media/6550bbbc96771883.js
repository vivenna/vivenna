(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[79701], {

    /***/
    229186: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var RFb, QFb, SFb, TFb;
            __c.OFb = function(a) {
                const [b,c] = a.toString().split(/[eE]/);
                [,a] = b.match(RegExp("[0-9]*\\.([0-9]*)")) || [];
                return Math.min(5, Math.max(0, ((a === null || a === void 0 ? void 0 : a.length) || 0) - (parseInt(c, 10) || 0)))
            }
            ;
            __c.KW = function([a,b], c) {
                if (b.Zi) {
                    var d = b.Zi;
                    d = __c.ES.has(d) ? d : void 0
                } else
                    d = void 0;
                b = b.gf == null || b.gf === d ? __c.PFb(d) : b.gf;
                return [{
                    ...a,
                    decimal: c > 0 ? {
                        length: 0,
                        padding: Math.min(5, c)
                    } : void 0,
                    minimumIntegerDigits: c > 0 ? Math.max(a.minimumIntegerDigits, 1) : a.minimumIntegerDigits
                }, {
                    Zi: d,
                    gf: b
                }]
            }
            ;
            RFb = function*(a) {
                let b = 0;
                for (let c = 1; c < a.length; c++) {
                    const d = a[c - 1]
                      , e = a[c];
                    (QFb.has(d) || QFb.has(e)) && d !== e && (yield a.slice(b, c),
                    b = c)
                }
                yield a.slice(b)
            }
            ;
            __c.PFb = a => {
                switch (a) {
                case void 0:
                case ",":
                case "\u2019":
                    return ".";
                case ".":
                case "'":
                case " ":
                    return ",";
                default:
                    throw new __c.E(a);
                }
            }
            ;
            QFb = new Set("ymdhs0".split(""));
            SFb = /^("[^"]*")?((?:[,.\-:/ ZTymdhs]|000)+)(am\/pm)?("[^"]*")?$/i;
            TFb = /"/g;
            __c.LW = a => {
                const [,b,c,d,e] = a.match(SFb) || [];
                if (c != null) {
                    a = Array.from(RFb(c));
                    d && a.push("am/pm");
                    var f = b ? b.replace(TFb, "") : void 0;
                    const h = [];
                    for (let k = 0; k < a.length; k += 2) {
                        var g = a[k];
                        const l = a[k + 1];
                        switch (g) {
                        case "ddd":
                        case "dddd":
                            h.push({
                                kind: "weekday",
                                format: g === "ddd" ? "short" : "long",
                                separator: l
                            });
                            break;
                        case "mmm":
                        case "mmmm":
                            h.push({
                                kind: "month",
                                format: g === "mmm" ? "short" : "long",
                                separator: l
                            });
                            break;
                        case "yy":
                        case "yyyy":
                            h.push({
                                kind: "year",
                                format: g === "yy" ? "2-digit" : "numeric",
                                separator: l
                            });
                            break;
                        case "d":
                        case "dd":
                            h.push({
                                kind: "day",
                                format: g === "dd" ? "2-digit" : "numeric",
                                separator: l
                            });
                            break;
                        case "h":
                        case "hh":
                            h.push({
                                kind: "hour",
                                format: g === "hh" ? "2-digit" : "numeric",
                                separator: l
                            });
                            break;
                        case "m":
                        case "mm":
                            g = g === "mm" ? "2-digit" : "numeric";
                            const m = h[h.length - 1];
                            m != null && m.kind === "hour" ? h.push({
                                kind: "minute",
                                format: g,
                                separator: l
                            }) : h.push({
                                kind: "month",
                                format: g,
                                separator: l
                            });
                            break;
                        case "s":
                        case "ss":
                            h.push({
                                kind: "second",
                                format: g === "ss" ? "2-digit" : "numeric",
                                separator: l
                            });
                            break;
                        case "000":
                            h.push({
                                kind: "millisecond",
                                format: "3-digit",
                                separator: l
                            });
                            break;
                        case "am/pm":
                            h.push({
                                kind: "ampm",
                                separator: l
                            });
                            break;
                        default:
                            throw Error(`Invalid date component format '${g}'`);
                        }
                    }
                    return {
                        prefix: f,
                        le: h,
                        suffix: e ? e.replace(TFb, "") : void 0
                    }
                }
            }
            ;
            __c.UFb = "yyyy-mm-ddThh:mm:ss.000Z;yyyy-mm-dd hh:mm:ss.000;yyyy-mm-dd hh:mm:ss;yyyy-mm-dd hh:mm;dd/mm/yy;dd/mm/yyyy;mm/dd/yy;mm/dd/yyyy;m/d/yyyy;yyyy/mm/dd;dd-mm-yy;dd-mm-yyyy;mm-dd-yy;mm-dd-yyyy;mmm d, yyyy;dd.mm.yy;dd.mm.yyyy;yyyy-mm-dd;dd mmm yy;dd mmm yyyy;d mmm yyyy;dd mmmm yy;dd mmmm yyyy;dd-mmm-yy;dd-mmm-yyyy;dd-mmmm-yy;dd-mmmm-yyyy;mm/yy;mm/yyyy;mmm yy;mmm yyyy;mmmm yy;mmmm yyyy;dd mmm;dd mmmm;mmm dd;mmmm dd;dd-mm;mm-dd;dd/mm;mm/dd;yyyy;mmmm;mmm;h:mm:ss am/pm;hh:mm am/pm;h am/pm;hh:mm;hh:mm:ss".split(";");
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/6550bbbc96771883.js.map

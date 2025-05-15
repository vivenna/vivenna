(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[30139], {

    /***/
    229894: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(229186);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var j1 = function(a) {
                a.SO.push("");
                a.BM.push("")
            }
              , k1 = function(a, b, c, d, e) {
                a.change(b, f => ({
                    count: ((f === null || f === void 0 ? void 0 : f.count) || 0) + 1,
                    ya: c,
                    auto: ((f === null || f === void 0 ? void 0 : f.auto) || 0) + (d ? 1 : 0),
                    Nd: e
                }))
            }
              , m1 = function(a, {JA: b, auto: c}) {
                a.SO.push(b);
                a.BM.push(b);
                b.trim() !== "" && k1(a.oZa, "@", l1, c, 0)
            }
              , YQb = function(a, {vga: b, JA: c, format: d, Nd: e, auto: f}) {
                a.SO.push(b);
                a.BM.push(c);
                k1(a.$Ra, d, {
                    Zi: a.bSa.Zi,
                    gf: a.bSa.gf,
                    format: d
                }, f, e !== null && e !== void 0 ? e : 0)
            }
              , ZQb = function(a, {vga: b, JA: c, format: d, auto: e}) {
                a.SO.push(b);
                a.BM.push(c);
                k1(a.Ve, d, {
                    Zi: void 0,
                    gf: void 0,
                    format: d
                }, e, 0)
            }
              , $Qb = [{
                prefix: void 0,
                suffix: void 0,
                percent: !1,
                currency: void 0,
                locale: void 0,
                Tf: 0,
                Mc: !1,
                tJ: !1,
                decimal: void 0,
                minimumIntegerDigits: 1
            }, {
                Zi: void 0,
                gf: void 0
            }]
              , aRb = {
                long: "mmmm",
                short: "mmm",
                numeric: "m",
                "2-digit": "mm"
            };
            var bRb = /^("[^"]*" *)?(\[\$[^\]]+\])?(.*?)(\[\$[^\]]+\])?( *"[^"]*")?$/, eRb = (a, {hKa: b}) => {
                var c;
                a = a.map(f => f.values());
                a = __c.ns(a, f => f.reduce( (g, h) => g + h.count, 0)).sort( (f, g) => g.count - g.auto - (f.count - f.auto) || g.count - f.count).filter(f => f.ya != null);
                const d = b ? cRb : dRb;
                b = a.find( ({ya: f}) => {
                    var g = f.format;
                    const [,,,h] = g.match(bRb) || [];
                    (g = d.has(h || g)) && !(g = f.Zi == null) && (g = f.Zi,
                    g = (__c.ES.has(g) ? g : void 0) != null);
                    g && !(g = f.gf == null) && (f = f.gf,
                    g = (__c.vjb.has(f) ? f : void 0) != null);
                    return g
                }
                );
                if ((b === null || b === void 0 ? void 0 : b.ya) != null) {
                    var e = __c.qA(b.ya.format);
                    if (!e)
                        return b.ya;
                    a.sort( (f, g) => g.Nd - f.Nd);
                    a = (c = a[0]) === null || c === void 0 ? void 0 : c.Nd;
                    if (!a)
                        return b.ya;
                    [c] = __c.KW([e, b.ya], a);
                    return {
                        format: __c.FS(c),
                        Zi: b.ya.Zi,
                        gf: b.ya.gf
                    }
                }
            }
            , l1 = {
                format: "@",
                gf: void 0,
                Zi: void 0
            }, fRb = ["M", "MM", "MMM", "MMMM"], gRb = class {
                constructor(a) {
                    this.bSa = a;
                    this.oZa = new n1;
                    this.$Ra = new n1;
                    this.Ve = new n1;
                    this.SO = [];
                    this.BM = []
                }
            }
            , iRb = ([,...a], b) => {
                if (a.length !== 0) {
                    var c = b.hKa
                      , d = new gRb(b.FE)
                      , e = [];
                    for (const q of a) {
                        var f, g;
                        if (q) {
                            var h = {
                                A8: q.A8,
                                EB: q.EB
                            }, k = q.format == null, l = (f = q.content) === null || f === void 0 ? void 0 : f.ek, m;
                            a = (m = (g = q.content) === null || g === void 0 ? void 0 : g.Jz) !== null && m !== void 0 ? m : "";
                            switch (l === null || l === void 0 ? void 0 : l.type) {
                            case 0:
                                e.push(h);
                                j1(d);
                                break;
                            case 9:
                            case 6:
                            case void 0:
                                j1(d);
                                break;
                            case 2:
                                if (c) {
                                    l = l.date;
                                    l = (new Date(Date.UTC(l.year, l.month - 1, l.day))).getTime().toString();
                                    a: {
                                        h = q.format;
                                        if (!h) {
                                            h = "yyyy-mm-dd";
                                            break a
                                        }
                                        h = __c.D(__c.Ui(h));
                                        let r = "";
                                        for (const t of h)
                                            r = t.type === 1 && fRb.includes(t.value) ? r + t.value.toLowerCase() : r + t.value;
                                        h = r
                                    }
                                    ZQb(d, {
                                        vga: l,
                                        JA: a,
                                        format: h,
                                        auto: k
                                    })
                                } else
                                    m1(d, {
                                        JA: a,
                                        auto: k
                                    });
                                break;
                            case 4:
                                m1(d, {
                                    JA: a,
                                    auto: k
                                });
                                break;
                            case 7:
                                m1(d, {
                                    JA: a,
                                    auto: k
                                });
                                break;
                            case 8:
                                m1(d, {
                                    JA: a,
                                    auto: k
                                });
                                break;
                            case 3:
                                m1(d, {
                                    JA: a,
                                    auto: k
                                });
                                break;
                            case 1:
                                var n, p;
                                k = l.value.toString();
                                ((p = q.content) === null || p === void 0 ? 0 : (n = p.ya) === null || n === void 0 ? 0 : n.Ac) ? (l = q.content.ya.Ac,
                                q.format ? (h = q.format,
                                h = __c.qA(h) ? h : __c.Xi("sheetToChartsFormatting")) : h = void 0,
                                YQb(d, {
                                    vga: k,
                                    JA: a,
                                    format: h !== null && h !== void 0 ? h : "_",
                                    Nd: l.type !== "date" ? l.Nd : void 0,
                                    auto: !1
                                })) : (l = __c.OFb(l.value),
                                h = __c.FS({
                                    ...hRb,
                                    decimal: {
                                        length: 0,
                                        padding: l
                                    }
                                }),
                                YQb(d, {
                                    vga: k,
                                    JA: a,
                                    format: h,
                                    Nd: l,
                                    auto: !0
                                }));
                                break;
                            default:
                                throw new __c.E(l);
                            }
                        } else
                            j1(d)
                    }
                    return {
                        Usb: eRb([d.oZa, d.$Ra, d.Ve], b),
                        SO: d.SO,
                        BM: d.BM,
                        BKa: e
                    }
                }
            }
            , jRb, n1, kRb, dRb, cRb, hRb;
            ( ({prefix: a, le: b, suffix: c}) => {
                const d = [];
                a && d.push(`"${a}"`);
                b.forEach(e => {
                    switch (e.kind) {
                    case "year":
                        d.push(e.format === "2-digit" ? "yy" : "yyyy");
                        break;
                    case "day":
                        d.push(e.format === "2-digit" ? "dd" : "d");
                        break;
                    case "weekday":
                        d.push(e.format === "long" ? "dddd" : "ddd");
                        break;
                    case "hour":
                        d.push(e.format === "2-digit" ? "hh" : "h");
                        break;
                    case "minute":
                        d.push(e.format === "2-digit" ? "mm" : "m");
                        break;
                    case "second":
                        d.push(e.format === "2-digit" ? "ss" : "s");
                        break;
                    case "month":
                        d.push(aRb[e.format]);
                        break;
                    case "millisecond":
                        d.push("000");
                        break;
                    case "ampm":
                        d.push("am/pm");
                        break;
                    default:
                        throw new __c.E(e);
                    }
                    d.push(e.separator)
                }
                );
                c && d.push(`"${c}"`);
                return d.join("")
            }
            )(__c.LW("dd mmm yyyy"));
            jRb = class {
                Wqb(a) {
                    var b = a[0]
                      , c = iRb(a, {
                        hKa: !0,
                        FE: this.ud.gh.FE
                    });
                    if (c == null) {
                        var d;
                        var e = {
                            ...__c.Ncb,
                            id: b === null || b === void 0 ? void 0 : b.A8,
                            label: b === null || b === void 0 ? void 0 : (d = b.content) === null || d === void 0 ? void 0 : d.Jz.replace(/[\n\r]/, " "),
                            values: Array.from({
                                length: a.length - 1
                            }, () => ""),
                            ya: l1,
                            F: void 0
                        };
                        return (0,
                        __c.Ga)(e)
                    }
                    a = c.Usb;
                    d = c.SO;
                    const f = c.BM;
                    c = c.BKa;
                    b = {
                        ...__c.Ncb,
                        id: b === null || b === void 0 ? void 0 : b.A8,
                        label: b === null || b === void 0 ? void 0 : (e = b.content) === null || e === void 0 ? void 0 : e.Jz.replace(/[\n\r]/, " "),
                        values: a != null ? d : f,
                        ya: a !== null && a !== void 0 ? a : l1,
                        F: void 0
                    };
                    return c.length > 0 ? (0,
                    __c.Ha)({
                        BKa: c,
                        data: b
                    }) : (0,
                    __c.Ga)(b)
                }
                constructor(a) {
                    this.ud = a
                }
            }
            ;
            n1 = class {
                change(a, b) {
                    this.m.set(a, b(this.m.get(a)))
                }
                values() {
                    return [...this.m.values()]
                }
                constructor() {
                    this.m = new Map
                }
            }
            ;
            kRb = ( () => {
                var a = g => h => (h & g) !== 0;
                const b = a(1)
                  , c = a(2)
                  , d = a(4)
                  , e = a(8)
                  , [f] = $Qb;
                a = [1, 2, 6, 4, 8, 10].flatMap(g => {
                    const h = {
                        ...f,
                        Mc: c(g),
                        tJ: d(g),
                        percent: e(g),
                        currency: void 0
                    }
                      , k = [b(g) && "Default", c(g) && "Grouping", d(g) && "Scientific Notation", e(g) && "Percent"].filter(l => !!l).join(",");
                    return Array.from({
                        length: 6
                    }, (l, m) => ({
                        label: k + ",Padding=" + m,
                        format: {
                            ...h,
                            decimal: m === 0 ? void 0 : {
                                length: 0,
                                padding: m
                            }
                        }
                    }))
                }
                );
                a.unshift({
                    label: "No minimum integers",
                    format: {
                        ...f,
                        minimumIntegerDigits: 0
                    }
                });
                return a
            }
            )().map(a => __c.FS(a.format));
            dRb = new Set(kRb.concat(l1.format));
            cRb = new Set(kRb.concat(l1.format).concat(__c.UFb));
            hRb = {
                prefix: void 0,
                suffix: void 0,
                decimal: void 0,
                percent: !1,
                locale: void 0,
                currency: void 0,
                Mc: !1,
                minimumIntegerDigits: 1,
                Tf: 0,
                tJ: !1
            };
            __c.Nva = {};
            __c.Nva.z2a = jRb;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/e55891ae77676cd4.js.map

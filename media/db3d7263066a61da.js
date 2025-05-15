(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[78423], {

    /***/
    414180: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(913825);
        __web_req__(25380);
        __web_req__(190240);
        __web_req__(581698);
        __web_req__(205177);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var YW = __c.YW;
            var RX = __c.RX;
            var vB = __c.vB;
            var uB = __c.uB;
            var Pu = __c.Pu;
            var E = __c.E;
            var wu = __c.wu;
            var YX, VGb, XGb, YGb, ZGb, UGb, $Gb, aHb, TGb, WGb, bHb, cHb, eHb, dHb, fHb, $X, aY, bY, cY, gHb, hHb, iHb, dY, eY, gY, hY, jY, kY, lHb, nHb, kHb, mHb, mY, nY, pHb, rHb, qHb, tHb, iY, qY;
            YX = function({scale: a, maxWidth: b, fontSize: c, fontFamily: d, fontWeight: e, jn: f}) {
                const g = TGb(a);
                a = f({
                    Mj: g.values.map( ({text: h}) => h),
                    maxWidth: b,
                    fontSize: c,
                    fontFamily: d,
                    fontWeight: e,
                    textAlign: "center",
                    textBaseline: "alphabetic"
                }).map( (h, k) => ({
                    ...h,
                    index: k,
                    count: g.values.length,
                    vha: g.values[k].text,
                    key: g.values[k].key
                }));
                return g.Yv === "linear" ? {
                    Yv: g.Yv,
                    measurements: a.map( (h, k) => {
                        const {Ufa: l, FN: m} = g.values[k];
                        return {
                            ...h,
                            Ufa: l,
                            FN: m
                        }
                    }
                    )
                } : {
                    Yv: g.Yv,
                    measurements: a.filter( ({text: h}) => h !== "")
                }
            }
            ;
            VGb = function({direction: a, fontSize: b, fontFamily: c, fontWeight: d, measureText: e}) {
                a = UGb({
                    direction: a,
                    fontSize: b,
                    fontFamily: c,
                    fontWeight: d,
                    measureText: e
                });
                return b * .5 + a
            }
            ;
            XGb = function({float: a, cB: b, maxHeight: c, ds: d, Yya: e, bqa: f}) {
                return function(g, h) {
                    switch (a) {
                    case "left":
                        return new wu(-h.width / 2 - d - e,WGb(h, g, b, c));
                    case "right":
                        return new wu(f + h.width / 2 + d + e,WGb(h, g, b, c));
                    case "top":
                        return new wu(g,-e - c + b - h.actualBoundingBoxAscent + h.height / 2);
                    case "bottom":
                        return new wu(g,f + e + b - h.actualBoundingBoxAscent + h.height / 2);
                    default:
                        throw new E(a);
                    }
                }
            }
            ;
            YGb = function({config: a, labels: b, Csb: c, bqa: d, Yya: e}) {
                const f = a.float;
                a = a.ds;
                const g = Math.max(...b.measurements.map( ({actualBoundingBoxAscent: m}) => m))
                  , h = Math.max(...b.measurements.map( ({actualBoundingBoxDescent: m}) => m))
                  , k = XGb({
                    float: f,
                    cB: g,
                    maxHeight: g + h,
                    ds: a,
                    Yya: e,
                    bqa: d
                })
                  , l = (m, n) => __c.Vu({
                    center: k(m, n),
                    width: n.width,
                    height: n.height
                });
                return {
                    labels: b.measurements.map(m => ({
                        Uo: m,
                        position: l(c[m.index], m)
                    })),
                    NZa: l,
                    Yv: b.Yv
                }
            }
            ;
            ZGb = function(a, b) {
                const c = b * __c.uu / 180;
                return a.map(d => {
                    d.position = d.position.translate(-d.position.width / 2, 0);
                    d.position = d.position.transform(__c.Lu(d.position.r, c));
                    const e = d.position.translate(Math.abs(d.position.tr.x - d.position.br.x) / 2, 0);
                    return {
                        ...d,
                        position: e
                    }
                }
                )
            }
            ;
            UGb = function({direction: a, fontSize: b, fontFamily: c, fontWeight: d, measureText: e}) {
                switch (a) {
                case "vertical":
                    return e({
                        text: " ",
                        fontSize: b,
                        fontFamily: c,
                        fontWeight: d
                    }).FQ;
                case "horizontal":
                    return 0;
                default:
                    throw new E(a);
                }
            }
            ;
            $Gb = function(a, b, c) {
                const d = a.direction === "horizontal" ? b : c;
                return a.scale.clone({
                    cc: a.direction !== "vertical" || a.$L ? () => [0, d] : () => [d, 0]
                })
            }
            ;
            aHb = function(a) {
                const b = a.kind;
                switch (b) {
                case "band":
                    return a.Pb().map(c => a.get(c) + a.Ds / 2);
                case "point":
                    return a.Pb().map(c => a.get(c));
                case "linear":
                    return a.Nq().map(c => a.get(c));
                default:
                    throw new E(b);
                }
            }
            ;
            TGb = function(a) {
                const b = a.kind;
                switch (b) {
                case "band":
                case "point":
                    var c = a.Pb().map(e => a.nd(e));
                    const d = __c.XX(c);
                    c = c.map( (e, f) => ({
                        text: e,
                        key: d[f]
                    }));
                    return {
                        Yv: b,
                        values: c
                    };
                case "linear":
                    return c = a.Nq().map(e => {
                        const f = a.nd(e);
                        return {
                            Ufa: !!f.length,
                            FN: e,
                            text: f,
                            key: e.toString()
                        }
                    }
                    ),
                    {
                        Yv: b,
                        values: c
                    };
                default:
                    throw new E(b);
                }
            }
            ;
            WGb = function(a, b, c, d) {
                b += a.height / 2;
                b += c - a.actualBoundingBoxAscent;
                return b - d / 2
            }
            ;
            bHb = function(a, b) {
                if (a.length === 0)
                    return {
                        labels: a,
                        Dy: new Set
                    };
                const c = {
                    labels: [a[0]],
                    Dy: new Set
                };
                let d = a[0];
                for (let e = 1; e < a.length; e++) {
                    const f = a[e]
                      , g = d.position.rotation === 0 ? Pu(d.position.la.x - b.left, d.position.la.y - b.top, d.position.br.x + b.right, d.position.br.y + b.bottom) : d.position;
                    (f.position.rotation === 0 ? Pu(f.position.la.x - b.left, f.position.la.y - b.top, f.position.br.x + b.right, f.position.br.y + b.bottom) : f.position).Mo(g) ? c.Dy.add(f.Uo.index) : (c.labels.push(f),
                    d = f)
                }
                return c
            }
            ;
            cHb = function({items: a}) {
                let b = 0
                  , c = 1;
                for (let d = b; d < a.length; d++) {
                    const e = a[b + c];
                    if (!e)
                        break;
                    a[b].position.Mo(e.position) ? c += 1 : b = d
                }
                return c
            }
            ;
            eHb = function(a, b) {
                var c = a.map(k => {
                    if (k.position.rotation === 0) {
                        const l = Pu(k.position.la.x - b.left, k.position.la.y - b.top, k.position.br.x + b.right, k.position.br.y + b.bottom);
                        return {
                            ...k,
                            position: l
                        }
                    }
                    return k
                }
                );
                const [d,e] = dHb(c);
                c = cHb({
                    items: d.map(k => k.label)
                });
                var f = cHb({
                    items: e.map(k => k.label)
                });
                const g = new Set
                  , h = Math.max(c, f);
                c = e.length > 1 ? e.reduce( (k, {label: l, index: m}, n) => {
                    n % h === 0 && l.Uo.Ufa ? k.push(a[m]) : g.add(l.Uo.index);
                    return k
                }
                , []) : [];
                f = d.length > 1 ? d.reduce( (k, {label: l, index: m}, n) => {
                    n % h === 0 && l.Uo.Ufa ? k.push(a[m]) : g.add(l.Uo.index);
                    return k
                }
                , []) : [];
                return {
                    labels: [...c, ...f],
                    Dy: g
                }
            }
            ;
            dHb = function(a) {
                const [b,c] = a.reduce( ([d,e], f, g) => {
                    f.Uo.FN === 0 ? (d.push({
                        label: f,
                        index: g
                    }),
                    e.push({
                        label: f,
                        index: g
                    })) : f.Uo.FN < 0 ? e.push({
                        label: f,
                        index: g
                    }) : f.Uo.FN > 0 && d.push({
                        label: f,
                        index: g
                    });
                    return [d, e]
                }
                , [[], []]);
                return [b, c.reverse()]
            }
            ;
            fHb = function(a, b=uB) {
                for (let e = 0; e < a.length; e++) {
                    var c = a[e].position;
                    c = Pu(c.la.x - b.left, c.la.y - b.top, c.br.x + b.right, c.br.y + b.bottom);
                    for (let f = e + 1; f < a.length; f++) {
                        var d = a[f].position;
                        d = Pu(d.la.x - b.left, d.la.y - b.top, d.br.x + b.right, d.br.y + b.bottom);
                        if (c.Mo(d))
                            return !0
                    }
                }
                return !1
            }
            ;
            $X = function({config: a, wE: b, width: c, height: d, rotate: e, fontFamily: f, fontSize: g, fontWeight: h, measureText: k}) {
                const l = a.direction
                  , m = a.float
                  , n = $Gb(a, c, d)
                  , p = aHb(n)
                  , q = VGb({
                    direction: l,
                    fontFamily: f,
                    fontSize: g,
                    fontWeight: h,
                    measureText: k
                })
                  , r = YGb({
                    config: a,
                    labels: b,
                    Csb: p,
                    bqa: l === "horizontal" ? d : c,
                    Yya: q
                });
                a = k({
                    text: " ",
                    fontSize: g,
                    fontFamily: f,
                    fontWeight: h
                }).FQ;
                b = {
                    ...uB,
                    left: a * 2
                };
                a = 0;
                e && fHb(r.labels, b) && (a = m === "top" ? 45 : -45,
                r.labels = ZGb(r.labels, a));
                const {labels: t, Dy: v} = r.Yv === "linear" ? eHb(r.labels, b) : bHb(r.labels, b);
                r.labels = t;
                c = __c.ZX(t.map(u => u.position), {
                    width: c,
                    height: d
                });
                return {
                    fontSize: g,
                    labels: t.map(u => {
                        const x = u.Uo;
                        return {
                            position: __c.iv(u.position).transform(x.actualBoundingBoxLeft, x.actualBoundingBoxAscent),
                            text: x.text,
                            vha: x.vha,
                            key: x.key,
                            fO: (y, z) => {
                                u = {
                                    ...u,
                                    position: r.NZa(y, x)
                                };
                                z !== 0 && (u = ZGb([u], z)[0]);
                                return __c.iv(u.position).transform(x.actualBoundingBoxLeft, x.actualBoundingBoxAscent)
                            }
                            ,
                            bob: p[x.index],
                            N$a: x.index
                        }
                    }
                    ),
                    Aq: a,
                    wa: c,
                    Dy: v,
                    direction: l,
                    scale: n
                }
            }
            ;
            aY = function({scale: a, labels: b, fontSize: c, Aq: d, direction: e}) {
                if (a.kind === "linear") {
                    const f = a.ka()
                      , g = f.Nq();
                    return {
                        numeric: b.map( ({text: h, key: k, vha: l, fO: m, N$a: n}) => ({
                            text: h,
                            value: g[n],
                            fontSize: c,
                            fO: m,
                            textAnchor: "middle",
                            dominantBaseline: "alphabetic",
                            Aq: d,
                            key: k,
                            hd: h.length && h !== l ? l : void 0,
                            axis: {
                                scale: f,
                                direction: e
                            }
                        })),
                        Ot: []
                    }
                }
                return {
                    numeric: [],
                    Ot: b.map( ({text: f, key: g, vha: h, fO: k, bob: l}) => {
                        const {x: m, y: n} = k(l, d);
                        return {
                            x: m,
                            y: n,
                            text: f,
                            value: f,
                            fontSize: c,
                            textAnchor: "middle",
                            dominantBaseline: "alphabetic",
                            Aq: d,
                            key: g,
                            hd: f.length && f !== h ? h : void 0,
                            axis: {
                                scale: a,
                                direction: e
                            }
                        }
                    }
                    )
                }
            }
            ;
            __c.ZX = function(a, {width: b, height: c}) {
                return a.length === 0 ? uB : a.map(d => __c.Su(d)).reduce( (d, e) => ({
                    left: Math.max(d.left, 0 - e.la.x),
                    right: Math.max(d.right, e.br.x - b),
                    bottom: Math.max(d.bottom, e.br.y - c),
                    top: Math.max(d.top, 0 - e.la.y)
                }), uB)
            }
            ;
            bY = function(a) {
                return a.reduce( (b, c) => ({
                    top: Math.max(b.top, c.top),
                    right: Math.max(b.right, c.right),
                    bottom: Math.max(b.bottom, c.bottom),
                    left: Math.max(b.left, c.left)
                }), uB)
            }
            ;
            cY = function({E2: a, MCa: b, VP: c, e6: d, WP: e, gC: f, j6: g, k6: h}) {
                d = vB([b, d]);
                const k = vB([c, e]);
                d = {
                    top: Math.max(a.top, c.top, e.top),
                    right: (h === null || h === void 0 ? 0 : h.AC) ? Math.max(k.right, d.right - a.right) : Math.max(k.right, d.right, a.right),
                    bottom: (f === null || f === void 0 ? 0 : f.AC) ? Math.max(d.bottom, k.bottom - a.bottom) : Math.max(d.bottom, k.bottom, a.bottom),
                    left: (g === null || g === void 0 ? 0 : g.AC) ? Math.max(k.left, d.left - a.left) : Math.max(k.left, d.left, a.left)
                };
                h = {
                    top: 0,
                    right: (h === null || h === void 0 ? 0 : h.AC) ? a.right : 0,
                    bottom: (f === null || f === void 0 ? 0 : f.AC) ? a.bottom : 0,
                    left: (g === null || g === void 0 ? 0 : g.AC) ? a.left : 0
                };
                return {
                    wa: vB([d, h]),
                    OE: d,
                    DM: h,
                    CE: Math.max(c.top, e.top),
                    LP: (f === null || f === void 0 ? 0 : f.AC) ? b.bottom + a.bottom : b.bottom,
                    TP: (g === null || g === void 0 ? 0 : g.AC) ? c.left + a.left : c.left
                }
            }
            ;
            gHb = function({ua: a, $m: b, AK: c, width: d, height: e, color: f}) {
                const g = __c.ut(__c.qt(f), .6);
                f = __c.ut(__c.qt(f), .25);
                let h = []
                  , k = []
                  , l = []
                  , m = []
                  , n = []
                  , p = [];
                if (a === null || a === void 0 ? 0 : a.ij)
                    a.scale.kind === "linear" ? h = dY({
                        scale: a.scale,
                        direction: a.direction,
                        height: e,
                        width: d,
                        Qka: g,
                        mM: f
                    }) : k = eY({
                        scale: a.scale,
                        direction: a.direction,
                        height: e,
                        width: d,
                        mM: f
                    });
                if (b === null || b === void 0 ? 0 : b.ij)
                    b.scale.kind === "linear" ? l = dY({
                        scale: b.scale,
                        direction: b.direction,
                        height: e,
                        width: d,
                        Qka: g,
                        mM: f
                    }) : m = eY({
                        scale: b.scale,
                        direction: b.direction,
                        height: e,
                        width: d,
                        mM: f
                    });
                if (c === null || c === void 0 ? 0 : c.ij)
                    c.scale.kind === "linear" ? n = dY({
                        scale: c.scale,
                        direction: c.direction,
                        height: e,
                        width: d,
                        Qka: g,
                        mM: f
                    }) : p = eY({
                        scale: c.scale,
                        direction: c.direction,
                        height: e,
                        width: d,
                        mM: f
                    });
                return {
                    CI: h,
                    wI: k,
                    DI: l,
                    xI: m,
                    EI: n,
                    yI: p
                }
            }
            ;
            hHb = function(a) {
                return a.Nq().map(b => [b, a.get(b)])
            }
            ;
            iHb = function(a) {
                return a.Pb().map(b => [b, a.get(b)])
            }
            ;
            dY = function({scale: a, direction: b, height: c, width: d, Qka: e, mM: f}) {
                const g = a.ka();
                switch (b) {
                case "horizontal":
                    return hHb(g).map( ([h,k]) => ({
                        key: `${h}`,
                        rra: h === 0,
                        start: new wu(k,c),
                        end: new wu(k,0),
                        value: h,
                        axis: {
                            scale: g,
                            direction: b
                        },
                        color: h === 0 ? e : f
                    }));
                case "vertical":
                    return hHb(g).map( ([h,k]) => ({
                        key: `${h}`,
                        rra: h === 0,
                        start: new wu(0,k),
                        end: new wu(d,k),
                        value: h,
                        axis: {
                            scale: g,
                            direction: b
                        },
                        color: h === 0 ? e : f
                    }));
                default:
                    throw new E(b);
                }
            }
            ;
            eY = function({direction: a, scale: b, height: c, width: d, mM: e}) {
                switch (a) {
                case "horizontal":
                    return iHb(b).map( ([f,g]) => ({
                        key: `${f}`,
                        rra: !1,
                        start: new wu(g,c),
                        end: new wu(g,0),
                        value: f,
                        axis: {
                            scale: b,
                            direction: a
                        },
                        color: e
                    }));
                case "vertical":
                    return iHb(b).map( ([f,g]) => ({
                        key: `${f}`,
                        rra: !1,
                        start: new wu(0,g),
                        end: new wu(d,g),
                        value: f,
                        axis: {
                            scale: b,
                            direction: a
                        },
                        color: e
                    }));
                default:
                    throw new E(a);
                }
            }
            ;
            __c.fY = function({point: {x: a, y: b}, bounds: {yK: c, OP: d, an: e, lm: f}}) {
                return a >= c && a <= d && b >= e && b <= f
            }
            ;
            gY = function({d: a, diff: b}) {
                var c, d;
                return ((d = (c = RX(b.prev.values())) === null || c === void 0 ? void 0 : c.axis.scale) !== null && d !== void 0 ? d : a.axis.scale).get(a.value)
            }
            ;
            hY = function({d: a, diff: b}) {
                var c, d, e;
                return ((e = (c = (d = RX(b.enter.values())) !== null && d !== void 0 ? d : RX(b.update.values())) === null || c === void 0 ? void 0 : c.axis.scale) !== null && e !== void 0 ? e : a.axis.scale).get(a.value)
            }
            ;
            jY = function({j: a, yt: b, Dw: c, M: d, xa: e}) {
                a = new YW({
                    xb: {
                        enter: {
                            $k: {
                                value: (g, h) => g.axis.direction === "horizontal" ? gY({
                                    d: g,
                                    diff: h
                                }) : g.start.x
                            },
                            al: {
                                value: (g, h) => g.axis.direction === "vertical" ? gY({
                                    d: g,
                                    diff: h
                                }) : g.start.y
                            },
                            Zp: {
                                value: (g, h) => g.axis.direction === "horizontal" ? gY({
                                    d: g,
                                    diff: h
                                }) : g.end.x
                            },
                            $p: {
                                value: (g, h) => g.axis.direction === "vertical" ? gY({
                                    d: g,
                                    diff: h
                                }) : g.end.y
                            },
                            LG: {
                                value: g => g.color.r
                            },
                            KG: {
                                value: g => g.color.g
                            },
                            Da: {
                                value: g => g.color.b
                            },
                            Ca: {
                                value: () => 0
                            }
                        },
                        update: {
                            $k: {
                                value: g => g.start.x
                            },
                            al: {
                                value: g => g.start.y
                            },
                            Zp: {
                                value: g => g.end.x
                            },
                            $p: {
                                value: g => g.end.y
                            },
                            LG: {
                                value: g => g.color.r
                            },
                            KG: {
                                value: g => g.color.g
                            },
                            Da: {
                                value: g => g.color.b
                            },
                            Ca: {
                                value: g => g.color.a
                            }
                        },
                        exit: {
                            $k: {
                                value: (g, h) => g.axis.direction === "horizontal" ? hY({
                                    d: g,
                                    diff: h
                                }) : g.start.x
                            },
                            al: {
                                value: (g, h) => g.axis.direction === "vertical" ? hY({
                                    d: g,
                                    diff: h
                                }) : g.start.y
                            },
                            Zp: {
                                value: (g, h) => g.axis.direction === "horizontal" ? hY({
                                    d: g,
                                    diff: h
                                }) : g.end.x
                            },
                            $p: {
                                value: (g, h) => g.axis.direction === "vertical" ? hY({
                                    d: g,
                                    diff: h
                                }) : g.end.y
                            },
                            LG: {
                                value: g => g.color.r
                            },
                            KG: {
                                value: g => g.color.g
                            },
                            Da: {
                                value: g => g.color.b
                            },
                            Ca: {
                                value: () => 0
                            }
                        },
                        Xe: {
                            $k: !0,
                            al: !0,
                            Zp: !0,
                            $p: !0,
                            LG: !1,
                            KG: !1,
                            Da: !1,
                            Ca: !1
                        }
                    },
                    data: b,
                    M: d,
                    j: a,
                    ne: 500,
                    Qe: 500,
                    pe: 500,
                    getKey: g => g.key,
                    tj: 0,
                    El: 0
                });
                const {Zb: f} = e(a);
                return function() {
                    return iY(c, {
                        children: iY(jHb, {
                            Zb: f
                        })
                    })
                }
            }
            ;
            kY = function({j: a, yt: b, M: c, xa: d}) {
                a = new YW({
                    xb: {
                        enter: {
                            $k: {
                                value: f => f.start.x
                            },
                            al: {
                                value: f => f.start.y
                            },
                            Zp: {
                                value: f => f.end.x
                            },
                            $p: {
                                value: f => f.end.y
                            },
                            LG: {
                                value: f => f.color.r
                            },
                            KG: {
                                value: f => f.color.g
                            },
                            Da: {
                                value: f => f.color.b
                            },
                            Ca: {
                                value: () => 0
                            }
                        },
                        update: {
                            $k: {
                                value: f => f.start.x
                            },
                            al: {
                                value: f => f.start.y
                            },
                            Zp: {
                                value: f => f.end.x
                            },
                            $p: {
                                value: f => f.end.y
                            },
                            LG: {
                                value: f => f.color.r
                            },
                            KG: {
                                value: f => f.color.g
                            },
                            Da: {
                                value: f => f.color.b
                            },
                            Ca: {
                                value: f => f.color.a
                            }
                        },
                        exit: {
                            $k: {
                                value: f => f.start.x
                            },
                            al: {
                                value: f => f.start.y
                            },
                            Zp: {
                                value: f => f.end.x
                            },
                            $p: {
                                value: f => f.end.y
                            },
                            LG: {
                                value: f => f.color.r
                            },
                            KG: {
                                value: f => f.color.g
                            },
                            Da: {
                                value: f => f.color.b
                            },
                            Ca: {
                                value: () => 0
                            }
                        },
                        Xe: {
                            $k: !0,
                            al: !0,
                            Zp: !0,
                            $p: !0,
                            LG: !1,
                            KG: !1,
                            Da: !1,
                            Ca: !1
                        }
                    },
                    data: b,
                    M: c,
                    j: a,
                    ne: 500,
                    Qe: 500,
                    pe: 500,
                    getKey: f => f.key,
                    tj: 0,
                    El: 0
                });
                const {Zb: e} = d(a);
                return function() {
                    return iY(jHb, {
                        Zb: e
                    })
                }
            }
            ;
            lHb = function(a, b, c) {
                var d, e;
                c = c ? (e = (d = RX(b.prev.values())) === null || d === void 0 ? void 0 : d.axis.scale) !== null && e !== void 0 ? e : a.axis.scale : a.axis.scale;
                return a.fO(c.get(a.value), kHb(a, b))
            }
            ;
            nHb = function(a, b, c) {
                var d, e, f;
                c = c ? (f = (d = (e = RX(b.enter.values())) !== null && e !== void 0 ? e : RX(b.update.values())) === null || d === void 0 ? void 0 : d.axis.scale) !== null && f !== void 0 ? f : a.axis.scale : a.axis.scale;
                return a.fO(c.get(a.value), mHb(a, b))
            }
            ;
            kHb = function(a, b) {
                var c, d;
                return (d = (c = RX(b.prev.values())) === null || c === void 0 ? void 0 : c.Aq) !== null && d !== void 0 ? d : a.Aq
            }
            ;
            mHb = function(a, b) {
                var c, d, e;
                return (e = (c = (d = RX(b.enter.values())) !== null && d !== void 0 ? d : RX(b.update.values())) === null || c === void 0 ? void 0 : c.Aq) !== null && e !== void 0 ? e : a.Aq
            }
            ;
            mY = function({j: a, ys: b, Dw: c, Zl: d, kk: e, labels: f, M: g, xa: h}) {
                a = new YW({
                    xb: {
                        enter: {
                            x: {
                                value: (m, n) => lHb(m, n, m.axis.direction === "horizontal").x
                            },
                            y: {
                                value: (m, n) => lHb(m, n, m.axis.direction === "vertical").y
                            },
                            rotation: {
                                value: (m, n) => kHb(m, n)
                            },
                            fontSize: {
                                value: m => m.fontSize
                            },
                            opacity: {
                                value: () => 0
                            }
                        },
                        update: {
                            x: {
                                value: m => m.fO(m.axis.scale.get(m.value), m.Aq).x
                            },
                            y: {
                                value: m => m.fO(m.axis.scale.get(m.value), m.Aq).y
                            },
                            rotation: {
                                value: m => m.Aq
                            },
                            fontSize: {
                                value: m => m.fontSize
                            },
                            opacity: {
                                value: () => 1,
                                end: 0
                            }
                        },
                        exit: {
                            x: {
                                value: (m, n) => nHb(m, n, m.axis.direction === "horizontal").x
                            },
                            y: {
                                value: (m, n) => nHb(m, n, m.axis.direction === "vertical").y
                            },
                            rotation: {
                                value: (m, n) => mHb(m, n)
                            },
                            fontSize: {
                                value: m => m.fontSize
                            },
                            opacity: {
                                value: () => 0
                            }
                        },
                        Xe: {
                            x: !0,
                            y: !0,
                            rotation: !1,
                            fontSize: !0,
                            opacity: !1
                        }
                    },
                    data: f,
                    M: g,
                    j: a,
                    ne: 500,
                    Qe: 500,
                    pe: 500,
                    getKey: m => m.key,
                    tj: 0,
                    El: 0
                });
                const k = __c.XW(b, new Set(["transform", "fontSize", "opacity"]))
                  , {Zb: l} = h(a);
                return lY(function() {
                    return iY(c, {
                        children: iY(oHb, {
                            Zb: l,
                            Hu: k,
                            Zl: d,
                            kk: e
                        })
                    })
                })
            }
            ;
            nY = function({j: a, ys: b, Zl: c, kk: d, labels: e, M: f, xa: g}) {
                a = new YW({
                    xb: {
                        enter: {
                            x: {
                                value: l => l.x
                            },
                            y: {
                                value: l => l.y
                            },
                            rotation: {
                                value: l => l.Aq
                            },
                            fontSize: {
                                value: l => l.fontSize
                            },
                            opacity: {
                                value: () => 0
                            }
                        },
                        update: {
                            x: {
                                value: l => l.x
                            },
                            y: {
                                value: l => l.y
                            },
                            rotation: {
                                value: l => l.Aq
                            },
                            fontSize: {
                                value: l => l.fontSize
                            },
                            opacity: {
                                value: () => 1,
                                end: 0
                            }
                        },
                        exit: {
                            x: {
                                value: l => l.x,
                                end: 0
                            },
                            y: {
                                value: l => l.y,
                                end: 0
                            },
                            rotation: {
                                value: l => l.Aq,
                                end: 0
                            },
                            fontSize: {
                                value: l => l.fontSize,
                                end: 0
                            },
                            opacity: {
                                value: () => 0,
                                end: 0
                            }
                        },
                        Xe: {
                            x: !0,
                            y: !0,
                            rotation: !1,
                            fontSize: !0,
                            opacity: !1
                        }
                    },
                    data: e,
                    M: f,
                    j: a,
                    ne: 500,
                    Qe: 500,
                    pe: 500,
                    getKey: l => l.key,
                    tj: 0,
                    El: 0
                });
                const h = __c.XW(b, new Set(["transform", "fontSize", "opacity"]))
                  , {Zb: k} = g(a);
                return lY(function() {
                    return iY(oHb, {
                        Zb: k,
                        Hu: h,
                        Zl: c,
                        kk: d
                    })
                })
            }
            ;
            pHb = function({ua: a, j6: b, k6: c, width: d, height: e, VP: f, WP: g, kM: h, Ko: k}) {
                var l = vB([f, g]);
                const m = d - l.left - l.right;
                h = h(m, e);
                e = k(m, e, new wu(0,0));
                ({wa: b} = cY({
                    E2: h,
                    MCa: uB,
                    VP: f,
                    WP: g,
                    e6: e,
                    gC: a === null || a === void 0 ? void 0 : a.gC,
                    j6: b,
                    k6: c
                }));
                if (a != null)
                    if (e = a.NCa,
                    f = a.gC.scale,
                    e.length === 0)
                        var n = [b.left, d - b.right];
                    else if (a = e[0],
                    g = a.index,
                    c = a.width / 2,
                    k = e[e.length - 1],
                    e = k.index,
                    k = d - k.width / 2,
                    g === e) {
                        var p;
                        [g] = (p = f.H8({
                            center: c,
                            index: g
                        }, d - b.right, a.count)) !== null && p !== void 0 ? p : [c, d - l.right];
                        [,l] = (n = f.I8({
                            center: k,
                            index: e
                        }, b.left, a.count)) !== null && n !== void 0 ? n : [b.left, k];
                        n = [g, l]
                    } else
                        n = f.J8({
                            center: c,
                            index: g
                        }, {
                            center: k,
                            index: e
                        }, a.count);
                else
                    n = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY];
                const [q,r] = n;
                return Math.min(r, d - b.right) - Math.max(q, b.left)
            }
            ;
            rHb = function({gC: a, Vub: b, width: c, height: d, VP: e, WP: f, fontFamily: g, fontSize: h, fontWeight: k, kM: l, Ko: m, measureText: n}) {
                e = vB([e, f]);
                f = c - e.left - e.right;
                l = l(f, d);
                m = m(f, d, new wu(0,0));
                do {
                    var p = qHb({
                        gC: a,
                        NCa: b.measurements,
                        width: c,
                        Zub: e,
                        E2: l,
                        e6: m
                    });
                    ({width: f} = p);
                    const r = p.Oga;
                    p = $X({
                        config: a,
                        wE: b,
                        width: f,
                        height: d,
                        fontFamily: g,
                        fontSize: h,
                        fontWeight: k,
                        rotate: !0,
                        measureText: n
                    });
                    if (r == null)
                        break;
                    var q = p.Dy;
                    if (q = r != null && q.has(r))
                        b.measurements = b.measurements.filter(t => t.index !== r)
                } while (q);
                return {
                    axis: p,
                    width: f
                }
            }
            ;
            qHb = function({gC: a, NCa: b, Zub: c, E2: d, e6: e, width: f}) {
                const g = bY([c, d, e])
                  , h = a.scale
                  , k = b[b.length - 1];
                a = b.map(n => {
                    const p = n.index
                      , q = Math.SQRT1_2 * n.width
                      , r = k.index
                      , t = f - Math.SQRT1_2 * k.height;
                    if (p === r) {
                        var v;
                        const [x] = (v = h.H8({
                            center: q,
                            index: p
                        }, f - g.right, n.count)) !== null && v !== void 0 ? v : [q, f - g.right];
                        var u;
                        [,n] = (u = h.I8({
                            center: t,
                            index: r
                        }, g.left, n.count)) !== null && u !== void 0 ? u : [g.left, t];
                        return {
                            range: [x, n],
                            Oga: p
                        }
                    }
                    return {
                        range: h.J8({
                            center: q,
                            index: p
                        }, {
                            center: t,
                            index: r
                        }, n.count),
                        Oga: p
                    }
                }
                );
                a = __c.ns(a, ({range: n}) => n[0]);
                const [l,m] = a.range;
                return {
                    width: Math.min(m, f - g.right) - Math.max(l, g.left),
                    Oga: l > g.left ? a.Oga : void 0
                }
            }
            ;
            __c.sHb = function({j: a, M: b, xa: c, wa: d}) {
                a = new YW({
                    xb: {
                        enter: {
                            top: {
                                value: f => f.top
                            },
                            right: {
                                value: f => f.right
                            },
                            bottom: {
                                value: f => f.bottom
                            },
                            left: {
                                value: f => f.left
                            }
                        },
                        update: {
                            top: {
                                value: f => f.top,
                                zb: !0
                            },
                            right: {
                                value: f => f.right,
                                zb: !0
                            },
                            bottom: {
                                value: f => f.bottom,
                                zb: !0
                            },
                            left: {
                                value: f => f.left,
                                zb: !0
                            }
                        },
                        exit: {
                            top: {
                                value: f => f.top
                            },
                            right: {
                                value: f => f.right
                            },
                            bottom: {
                                value: f => f.bottom
                            },
                            left: {
                                value: f => f.left
                            }
                        },
                        Xe: {
                            top: !0,
                            right: !0,
                            bottom: !0,
                            left: !0
                        }
                    },
                    data: d,
                    M: b,
                    j: a,
                    tj: 0,
                    El: 0,
                    ne: 500,
                    Qe: 500,
                    pe: 500,
                    getKey: () => "margin"
                });
                const {yw: e} = c(a);
                return {
                    d1a() {
                        const f = e();
                        return oY( () => pY( () => {
                            const g = f.get().at(0);
                            return g ? {
                                top: g.Yc.top.get(),
                                right: g.Yc.right.get(),
                                bottom: g.Yc.bottom.get(),
                                left: g.Yc.left.get()
                            } : uB
                        }
                        ), [f])
                    }
                }
            }
            ;
            tHb = __webpack_require__(443763);
            iY = tHb.jsx;
            qY = tHb.jsxs;
            var uHb = __webpack_require__(875604)
              , vHb = uHb.memo
              , oY = uHb.useMemo;
            var rY = __webpack_require__(519427)
              , wHb = rY.action
              , pY = rY.computed
              , xHb = rY.observable;
            var lY = __webpack_require__(446474).Pi;
            var yHb = class {
                WLa(a, b, c, d, e, f, g) {
                    e = e(c, d);
                    if (!b.Fq) {
                        var h = f(c, d, new wu(0,0));
                        c = g(c, d, new wu(0,0));
                        e = bY([e, h, c]);
                        return {
                            wa: e,
                            OE: e,
                            DM: uB,
                            CE: c.top,
                            LP: 0,
                            TP: 0,
                            labels: {
                                CI: [],
                                wI: [],
                                DI: [],
                                xI: [],
                                EI: [],
                                yI: []
                            }
                        }
                    }
                    var k = {
                        fontFamily: b.Ze,
                        fontSize: b.fontSize,
                        fontWeight: b.fontWeight
                    }
                      , l = {
                        ...k,
                        width: c,
                        height: d
                    };
                    (b = a.ua) && (h = $X({
                        config: b,
                        wE: YX({
                            scale: b.scale,
                            maxWidth: b.Hr || Infinity,
                            ...k,
                            jn: this.Fa.jn
                        }),
                        ...l,
                        rotate: !0,
                        measureText: this.Fa.measureText
                    }));
                    const m = a.$m;
                    let n;
                    m && (n = $X({
                        config: m,
                        wE: YX({
                            scale: m.scale,
                            maxWidth: m.Hr || Infinity,
                            ...k,
                            jn: this.Fa.jn
                        }),
                        ...l,
                        rotate: !1,
                        measureText: this.Fa.measureText
                    }));
                    a = a.AK;
                    let p;
                    a && (p = $X({
                        config: a,
                        wE: YX({
                            scale: a.scale,
                            maxWidth: a.Hr || Infinity,
                            ...k,
                            jn: this.Fa.jn
                        }),
                        ...l,
                        rotate: !1,
                        measureText: this.Fa.measureText
                    }));
                    k = (h === null || h === void 0 ? void 0 : h.wa) || uB;
                    l = bY([n === null || n === void 0 ? void 0 : n.wa, p === null || p === void 0 ? void 0 : p.wa].filter(__c.wb));
                    f = f(c, d, new wu(0,k.bottom));
                    c = g(c, d, new wu(-l.left,0));
                    const {wa: q, OE: r, DM: t, CE: v, LP: u, TP: x} = cY({
                        E2: e,
                        MCa: k,
                        VP: l,
                        e6: f,
                        WP: c,
                        gC: b,
                        j6: m,
                        k6: a
                    })
                      , {numeric: y, Ot: z} = h != null ? aY(h) : {
                        numeric: [],
                        Ot: []
                    }
                      , {numeric: A, Ot: B} = n != null ? aY(n) : {
                        numeric: [],
                        Ot: []
                    }
                      , {numeric: G, Ot: H} = p != null ? aY(p) : {
                        numeric: [],
                        Ot: []
                    };
                    return {
                        wa: q,
                        OE: r,
                        DM: t,
                        CE: v,
                        LP: u,
                        TP: x,
                        labels: {
                            CI: y,
                            wI: z,
                            DI: A,
                            xI: B,
                            EI: G,
                            yI: H
                        }
                    }
                }
                PLa(a, b, c, d) {
                    return b.ij ? gHb({
                        ua: a.ua,
                        $m: a.$m,
                        AK: a.AK,
                        width: c,
                        height: d,
                        color: b.hk
                    }) : {
                        CI: [],
                        wI: [],
                        DI: [],
                        xI: [],
                        EI: [],
                        yI: []
                    }
                }
                constructor(a) {
                    this.Fa = a
                }
            }
            ;
            var zHb = __c.XW("line", new Set(["x1", "x2", "y1", "y2", "stroke"]))
              , jHb = ({Zb: a}) => iY(a, {
                children: ({Yc: b, key: c}) => iY(AHb, {
                    ...b
                }, c)
            })
              , AHb = vHb( ({LG: a, KG: b, Da: c, Ca: d, $k: e, al: f, Zp: g, $p: h}) => {
                const k = pY( () => __c.At(new __c.yt(a.get(),b.get(),c.get(),d.get())));
                return iY(zHb, {
                    x1: e,
                    x2: g,
                    y1: f,
                    y2: h,
                    stroke: k,
                    strokeWidth: 1
                })
            }
            );
            var oHb = ({Zb: a, Hu: b, Zl: c, kk: d}) => iY(a, {
                children: ({Yc: e, key: f, pi: g}) => iY(BHb, {
                    Hu: b,
                    Zl: c,
                    kk: d,
                    label: g,
                    ...e
                }, f)
            })
              , BHb = vHb( ({label: {textAnchor: a, dominantBaseline: b, text: c, key: d, hd: e}, Hu: f, Zl: g, kk: h, x: k, y: l, rotation: m, fontSize: n, opacity: p}) => {
                const q = pY( () => `translate(${k.get()}, ${l.get()}) rotate(${m.get()})`);
                return iY(f, {
                    textAnchor: a,
                    dominantBaseline: b,
                    transform: q,
                    fontSize: n,
                    opacity: p,
                    onMouseEnter: e && g ? r => g(e, {
                        YE: r.currentTarget.getBoundingClientRect(),
                        key: d,
                        Aq: m.get()
                    }) : void 0,
                    onMouseLeave: e ? h : void 0,
                    children: c
                }, d)
            }
            );
            var CHb = class {
                WLa(a, b, c, d, e, f, g) {
                    if (!b.Fq) {
                        var h = g(c, d, new wu(0,0));
                        f = f(c - h.left, d, new wu(0,0));
                        d = e(c - h.left, d);
                        d = bY([d, f, h]);
                        return {
                            wa: d,
                            OE: d,
                            DM: uB,
                            CE: d.top,
                            LP: 0,
                            TP: 0,
                            labels: {
                                CI: [],
                                wI: [],
                                DI: [],
                                xI: [],
                                EI: [],
                                yI: []
                            }
                        }
                    }
                    const k = b.Ze
                      , l = b.fontSize
                      , m = b.fontWeight
                      , n = {
                        fontFamily: k,
                        fontSize: l,
                        fontWeight: m
                    };
                    var p = {
                        ...n,
                        width: c,
                        height: d
                    };
                    b = a.ua;
                    let q;
                    b && (q = YX({
                        scale: b.scale,
                        maxWidth: Math.min(b.Hr || Infinity, c),
                        ...n,
                        jn: this.Fa.jn
                    }));
                    const r = a.$m;
                    let t;
                    r && (t = YX({
                        scale: r.scale,
                        maxWidth: Math.min(r.Hr || Infinity, c),
                        ...n,
                        jn: this.Fa.jn
                    }),
                    h = $X({
                        config: r,
                        wE: t,
                        ...p,
                        rotate: !1,
                        measureText: this.Fa.measureText
                    }));
                    a = a.AK;
                    let v, u;
                    a && (v = YX({
                        scale: a.scale,
                        maxWidth: Math.min(a.Hr || Infinity, c),
                        ...n,
                        jn: this.Fa.jn
                    }),
                    u = $X({
                        config: a,
                        wE: v,
                        ...p,
                        rotate: !1,
                        measureText: this.Fa.measureText
                    }));
                    p = bY([h === null || h === void 0 ? void 0 : h.wa, u === null || u === void 0 ? void 0 : u.wa].filter(__c.wb));
                    g = g(c, d, new wu(-p.left,0));
                    let x = pHb({
                        ua: b != null && (q === null || q === void 0 ? void 0 : q.measurements) != null ? {
                            gC: b,
                            NCa: q.measurements
                        } : void 0,
                        j6: r,
                        k6: a,
                        width: c,
                        height: d,
                        VP: p,
                        WP: g,
                        kM: e,
                        Ko: f
                    }), y;
                    b && q && (y = $X({
                        config: b,
                        wE: q,
                        width: x,
                        height: d,
                        ...n,
                        rotate: !1,
                        measureText: this.Fa.measureText
                    }));
                    y != null && y.Dy.size > 0 && b && q && ({axis: y, width: x} = rHb({
                        gC: b,
                        Vub: q,
                        width: c,
                        height: d,
                        VP: p,
                        WP: g,
                        kM: e,
                        Ko: f,
                        fontFamily: k,
                        fontSize: l,
                        fontWeight: m,
                        measureText: this.Fa.measureText
                    }));
                    r && t && (h = $X({
                        config: r,
                        wE: t,
                        width: x,
                        height: d,
                        fontFamily: k,
                        fontSize: l,
                        fontWeight: m,
                        rotate: !1,
                        measureText: this.Fa.measureText
                    }));
                    a && v && (u = $X({
                        config: a,
                        wE: v,
                        width: x,
                        height: d,
                        fontFamily: k,
                        fontSize: l,
                        fontWeight: m,
                        rotate: !1,
                        measureText: this.Fa.measureText
                    }));
                    c = e(x, d);
                    p = bY([h === null || h === void 0 ? void 0 : h.wa, u === null || u === void 0 ? void 0 : u.wa].filter(__c.wb));
                    e = (y === null || y === void 0 ? void 0 : y.wa) || uB;
                    d = f(x, d, new wu(0,e.bottom));
                    const {wa: z, OE: A, DM: B, CE: G, LP: H, TP: K} = cY({
                        E2: c,
                        MCa: e,
                        VP: p,
                        e6: d,
                        WP: g,
                        gC: b,
                        j6: r,
                        k6: a
                    })
                      , {numeric: I, Ot: L} = y != null ? aY(y) : {
                        numeric: [],
                        Ot: []
                    }
                      , {numeric: P, Ot: S} = h != null ? aY(h) : {
                        numeric: [],
                        Ot: []
                    }
                      , {numeric: U, Ot: ba} = u != null ? aY(u) : {
                        numeric: [],
                        Ot: []
                    };
                    return {
                        wa: z,
                        OE: A,
                        DM: B,
                        CE: G,
                        LP: H,
                        TP: K,
                        labels: {
                            CI: I,
                            wI: L,
                            DI: P,
                            xI: S,
                            EI: U,
                            yI: ba
                        }
                    }
                }
                PLa(a, b, c, d) {
                    return b.ij ? gHb({
                        ua: a.ua,
                        $m: a.$m,
                        AK: a.AK,
                        width: c,
                        height: d,
                        color: b.hk
                    }) : {
                        CI: [],
                        wI: [],
                        DI: [],
                        xI: [],
                        EI: [],
                        yI: []
                    }
                }
                constructor(a) {
                    this.Fa = a
                }
            }
            ;
            __c.sY = ({j: a, SQ: b, Ki: c, hb: d, Fa: e, Ms: f, width: g, height: h, $b: k, xa: l, kM: m= () => uB, Ko: n= () => uB, xt: p= () => uB}) => {
                function q() {
                    const Ub = Ua()
                      , hc = oY( () => pY( () => {
                        var cc;
                        return (cc = Ub.get().at(0)) === null || cc === void 0 ? void 0 : cc.Yc
                    }
                    ), [Ub]);
                    return oY( () => xHb({
                        get top() {
                            var cc, Xb;
                            return (Xb = (cc = hc.get()) === null || cc === void 0 ? void 0 : cc.top.get()) !== null && Xb !== void 0 ? Xb : 0
                        },
                        get left() {
                            var cc, Xb;
                            return (Xb = (cc = hc.get()) === null || cc === void 0 ? void 0 : cc.left.get()) !== null && Xb !== void 0 ? Xb : 0
                        },
                        get right() {
                            var cc, Xb;
                            return (Xb = (cc = hc.get()) === null || cc === void 0 ? void 0 : cc.right.get()) !== null && Xb !== void 0 ? Xb : 0
                        },
                        get bottom() {
                            var cc, Xb;
                            return (Xb = (cc = hc.get()) === null || cc === void 0 ? void 0 : cc.bottom.get()) !== null && Xb !== void 0 ? Xb : 0
                        }
                    }), [hc])
                }
                const r = a.xd ? new CHb(e) : new yHb(e)
                  , t = pY( () => r.WLa(b, a, g.get(), h.get(), m, n, p));
                e = pY( () => t.get().labels.CI);
                const v = pY( () => t.get().labels.wI)
                  , u = pY( () => t.get().labels.DI)
                  , x = pY( () => t.get().labels.xI)
                  , y = pY( () => t.get().labels.EI)
                  , z = pY( () => t.get().labels.yI)
                  , A = pY( () => t.get().wa)
                  , B = pY( () => t.get().OE)
                  , G = pY( () => t.get().DM)
                  , H = pY( () => t.get().CE)
                  , K = pY( () => new wu(0,t.get().LP))
                  , I = pY( () => new wu(-t.get().TP,0))
                  , {d1a: L} = __c.sHb({
                    j: a,
                    M: k,
                    xa: l,
                    wa: pY( () => [G.get()])
                })
                  , P = pY( () => {
                    const {left: Ub, right: hc} = A.get();
                    return a.xd ? g.get() - Ub - hc : g.get()
                }
                )
                  , S = pY( () => {
                    const {top: Ub, bottom: hc} = A.get();
                    return a.oga ? h.get() - Ub - hc : h.get()
                }
                )
                  , U = pY( () => r.PLa(b, a, P.get(), S.get()))
                  , ba = pY( () => U.get().CI)
                  , ha = pY( () => U.get().wI)
                  , oa = pY( () => U.get().DI)
                  , ka = pY( () => U.get().xI)
                  , ma = pY( () => U.get().EI)
                  , wa = pY( () => U.get().yI)
                  , W = c ? new __c.ZW : void 0
                  , aa = c && W ? wHb( (Ub, {YE: hc, key: cc, Aq: Xb}) => {
                    const Hc = a.lM();
                    if (Hc != null) {
                        var Qc = a.zoom
                          , sd = hc.width / Qc
                          , Vg = hc.height / Qc
                          , dc = hc.left / Qc - Hc.left;
                        hc = hc.top / Qc - Hc.top;
                        __c.NW(W, c, {
                            content: Ub,
                            mu: Xb === 0 ? {
                                top: hc,
                                left: dc,
                                width: sd,
                                height: Vg
                            } : {
                                top: hc + Vg / 2,
                                left: dc + sd / 2,
                                width: 0,
                                height: 0
                            },
                            placement: "top-center",
                            arrow: !0,
                            key: cc
                        })
                    }
                }
                ) : void 0
                  , qa = c && W ? wHb( () => {
                    __c.OW(W, c)
                }
                ) : void 0;
                var Ia = pY( () => [A.get()]);
                Ia = new YW({
                    xb: {
                        enter: {
                            top: {
                                value: Ub => Ub.top
                            },
                            left: {
                                value: Ub => Ub.left
                            },
                            right: {
                                value: Ub => Ub.right
                            },
                            bottom: {
                                value: Ub => Ub.bottom
                            }
                        },
                        update: {
                            top: {
                                value: (Ub, hc) => {
                                    var cc, Xb;
                                    return Math.max(Ub.top, (Xb = (cc = RX(hc.prev.values())) === null || cc === void 0 ? void 0 : cc.top) !== null && Xb !== void 0 ? Xb : 0)
                                }
                            },
                            left: {
                                value: (Ub, hc) => {
                                    var cc, Xb;
                                    return Math.max(Ub.left, (Xb = (cc = RX(hc.prev.values())) === null || cc === void 0 ? void 0 : cc.left) !== null && Xb !== void 0 ? Xb : 0)
                                }
                            },
                            right: {
                                value: (Ub, hc) => {
                                    var cc, Xb;
                                    return Math.max(Ub.right, (Xb = (cc = RX(hc.prev.values())) === null || cc === void 0 ? void 0 : cc.right) !== null && Xb !== void 0 ? Xb : 0)
                                }
                            },
                            bottom: {
                                value: (Ub, hc) => {
                                    var cc, Xb;
                                    return Math.max(Ub.bottom, (Xb = (cc = RX(hc.prev.values())) === null || cc === void 0 ? void 0 : cc.bottom) !== null && Xb !== void 0 ? Xb : 0)
                                }
                            }
                        },
                        exit: {
                            top: {
                                value: Ub => Ub.top
                            },
                            left: {
                                value: Ub => Ub.left
                            },
                            right: {
                                value: Ub => Ub.right
                            },
                            bottom: {
                                value: Ub => Ub.bottom
                            }
                        },
                        Xe: {
                            top: !0,
                            left: !0,
                            right: !0,
                            bottom: !0
                        }
                    },
                    data: Ia,
                    M: k,
                    j: a,
                    ne: 0,
                    Qe: 0,
                    pe: 0,
                    getKey: () => "margins",
                    tj: 0,
                    El: 0
                });
                const {yw: Ua} = l(Ia);
                Ia = lY(function({children: Ub}) {
                    const hc = q()
                      , cc = oY( () => __c.UX(function() {
                        const Xb = a.vc;
                        return {
                            width: hc.left + a.Ep + hc.right,
                            height: Xb.top + a.Gk + Xb.bottom,
                            left: -hc.left,
                            top: -Xb.top
                        }
                    }), [hc]);
                    return iY(cc, {
                        children: Ub
                    })
                });
                const ib = lY(function({children: Ub}) {
                    const hc = q()
                      , cc = oY( () => __c.UX(function() {
                        const Xb = a.vc;
                        return {
                            width: Xb.left + a.Ep + Xb.right,
                            height: hc.top + a.Gk + hc.bottom,
                            left: -Xb.left,
                            top: -hc.top
                        }
                    }), [hc]);
                    return iY(cc, {
                        children: Ub
                    })
                });
                k = {
                    j: a,
                    M: k,
                    xa: l
                };
                d = {
                    ...k,
                    ys: d,
                    Zl: aa,
                    kk: qa
                };
                const fb = mY({
                    ...d,
                    Dw: ib,
                    labels: e
                })
                  , yb = nY({
                    ...d,
                    labels: v
                })
                  , Za = mY({
                    ...d,
                    Dw: Ia,
                    labels: u
                })
                  , Qa = nY({
                    ...d,
                    labels: x
                })
                  , Bb = mY({
                    ...d,
                    Dw: Ia,
                    labels: y
                })
                  , Cb = nY({
                    ...d,
                    labels: z
                })
                  , bc = jY({
                    ...k,
                    yt: ba,
                    Dw: ib
                })
                  , mb = kY({
                    ...k,
                    yt: ha
                })
                  , hb = jY({
                    ...k,
                    yt: oa,
                    Dw: Ia
                })
                  , Db = kY({
                    ...k,
                    yt: ka
                })
                  , Xc = jY({
                    ...k,
                    yt: ma,
                    Dw: Ia
                })
                  , Pe = kY({
                    ...k,
                    yt: wa
                });
                return {
                    xG: A,
                    OE: B,
                    Wtb: L,
                    CE: H,
                    f6: K,
                    yW: I,
                    JW: __c.UX( () => f.get()),
                    $P: lY(function() {
                        const Ub = L()
                          , hc = oY( () => __c.$W(function() {
                            return {
                                top: 0,
                                left: Ub.get().left
                            }
                        }), [Ub]);
                        return qY(hc, {
                            children: [iY(bc, {}), iY(mb, {}), iY(hb, {}), iY(Db, {}), iY(Xc, {}), iY(Pe, {})]
                        })
                    }),
                    aQ: lY(function() {
                        const Ub = L()
                          , hc = oY( () => __c.$W(function() {
                            return {
                                top: Ub.get().bottom,
                                left: Ub.get().left
                            }
                        }), [Ub])
                          , cc = oY( () => __c.$W(function() {
                            return {
                                top: 0,
                                left: Ub.get().left + Ub.get().right
                            }
                        }), [Ub]);
                        return qY("g", {
                            children: [qY(hc, {
                                children: [iY(fb, {}), iY(yb, {})]
                            }), iY(Za, {}), iY(Qa, {}), qY(cc, {
                                children: [iY(Bb, {}), iY(Cb, {})]
                            })]
                        })
                    }),
                    ih: P,
                    jg: S
                }
            }
            ;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/db3d7263066a61da.js.map

(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[47628], {

    /***/
    482919: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(543471);
        __web_req__(767719);
        __web_req__(611076);
        __web_req__(321467);
        __web_req__(190240);
        __web_req__(859864);
        __web_req__(418410);
        __web_req__(913825);
        __web_req__(726917);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var wu = __c.wu;
            var IWb = function({mj: a, values: b, eb: c, config: d}) {
                if (!a.label_by.ok || !a.value_by.ok)
                    return !1;
                a = b.value_by;
                if (!a)
                    return !1;
                __c.C(c.id === a.id);
                return a.values.some( (e, f) => r3({
                    values: b,
                    config: d,
                    index: f
                }))
            }
              , r3 = function({values: a, config: b, index: c}) {
                var d, e, f;
                const g = (d = a.label_by) === null || d === void 0 ? void 0 : d.values;
                a = (e = a.value_by) === null || e === void 0 ? void 0 : e.values;
                if (b = (f = b.ha.ref) === null || f === void 0 ? void 0 : f.type) {
                    if (g == null)
                        return !1;
                    switch (b) {
                    case "COUNT":
                        return g[c] != null && g[c] !== "";
                    case "AVERAGE":
                    case "MIN":
                    case "MAX":
                    case "SUM":
                    case "MEDIAN":
                        break;
                    default:
                        throw new __c.E(b);
                    }
                }
                a == null ? c = !1 : (c = a[c],
                c = c != null && Number.isFinite(c) && c > 0);
                return c
            }
              , JWb = function(a, b) {
                const c = Math.sqrt(a.x ** 2 + a.y ** 2);
                a = Math.atan2(a.x, -a.y);
                a = a < 0 ? 2 * Math.PI + a : a;
                Math.abs(a - b) > Math.PI && (a += 2 * Math.PI * (a > b ? -1 : 1));
                return {
                    angle: a,
                    radius: c
                }
            }
              , KWb = function(a) {
                return a < Math.PI / 2 ? a : a < Math.PI ? Math.PI - a : a < 3 * Math.PI / 2 ? Math.PI + a : 2 * Math.PI - a
            }
              , LWb = function(a) {
                return a <= Math.PI ? 1 : -1
            }
              , MWb = function(a) {
                return a < Math.PI / 2 || a > Math.PI * 1.5 ? -1 : 1
            }
              , OWb = function({Zb: a, hb: b}) {
                return s3(a, {
                    children: ({Yc: c, key: d, pi: e}) => s3(NWb, {
                        label: e,
                        hb: b,
                        ...c
                    }, d)
                })
            }
              , PWb = function({labels: a, j: b, M: c, xa: d, Hh: e, hb: f}) {
                a = new __c.YW({
                    xb: {
                        enter: {
                            sI: {
                                value: k => k.sI,
                                end: 0
                            },
                            iK: {
                                value: k => k.iK,
                                end: 0
                            },
                            tI: {
                                value: k => k.tI
                            },
                            jK: {
                                value: k => k.jK
                            },
                            fontSize: {
                                value: k => k.fontSize
                            },
                            opacity: {
                                value: () => 0,
                                end: .5
                            }
                        },
                        update: {
                            sI: {
                                value: k => k.sI
                            },
                            iK: {
                                value: k => k.iK
                            },
                            tI: {
                                value: k => k.tI
                            },
                            jK: {
                                value: k => k.jK
                            },
                            fontSize: {
                                value: k => k.fontSize
                            },
                            opacity: {
                                value: () => 1,
                                end: 0
                            }
                        },
                        exit: {
                            sI: {
                                value: k => k.sI,
                                end: 0
                            },
                            iK: {
                                value: k => k.iK,
                                end: 0
                            },
                            tI: {
                                value: k => k.tI,
                                end: 0
                            },
                            jK: {
                                value: k => k.jK,
                                end: 0
                            },
                            fontSize: {
                                value: k => k.fontSize,
                                end: 0
                            },
                            opacity: {
                                value: () => 0,
                                end: 0
                            }
                        },
                        Xe: {
                            sI: !1,
                            iK: !1,
                            tI: !0,
                            jK: !0,
                            fontSize: !0,
                            opacity: !1
                        }
                    },
                    data: a,
                    M: c,
                    j: b,
                    Hh: e,
                    ne: 500,
                    Qe: 500,
                    pe: 0,
                    getKey: k => k.key
                });
                const {Zb: g} = d(a)
                  , h = __c.XW(f, new Set(["x", "y", "fontSize", "opacity"]));
                return () => s3(OWb, {
                    Zb: g,
                    hb: h
                })
            }
              , RWb = function({j: a, M: b, xa: c, wa: d}) {
                a = new __c.YW({
                    xb: {
                        enter: {
                            Lba: {
                                value: () => 0
                            }
                        },
                        update: {
                            Lba: {
                                value: f => f
                            }
                        },
                        exit: {
                            Lba: {
                                value: () => 0
                            }
                        },
                        Xe: {
                            Lba: !0
                        }
                    },
                    data: t3( () => d.get().top === 0 ? [] : [d.get().top]),
                    M: b,
                    j: a,
                    tj: 0,
                    El: 0,
                    ne: 500,
                    Qe: 500,
                    pe: 500,
                    getKey: () => "labelsTopMargin"
                });
                const {yw: e} = c(a);
                return function() {
                    const f = e();
                    return QWb( () => t3( () => {
                        var g, h;
                        return (h = (g = f.get().at(0)) === null || g === void 0 ? void 0 : g.Yc.Lba.get()) !== null && h !== void 0 ? h : 0
                    }
                    ), [f])
                }
            }
              , SWb = function(a) {
                return `${Math.round(a * 1E3) / 10}%`
            }
              , $Wb = function(a, b, c) {
                var d = b.j;
                const e = d.fontSize;
                var f = d.fontWeight
                  , g = d.Ze;
                const h = d.ig
                  , k = d.Lc;
                var l = d.He
                  , m = b.rows
                  , n = b.gF;
                b = Math.min(k, l) / 2;
                const p = e * .4
                  , q = {
                    labels: [],
                    wa: __c.uB,
                    radius: b
                };
                if (!d.Fq)
                    return q;
                d = TWb({
                    rows: m,
                    Sk: c
                });
                c = UWb(d, {
                    fontSize: e,
                    fontFamily: g,
                    Jf: a.Fa.Jf,
                    fontWeight: f,
                    textAlign: "center",
                    textBaseline: "alphabetic"
                });
                a = a.Fa.measureText({
                    text: " ",
                    fontSize: e,
                    fontFamily: g,
                    fontWeight: f
                }).FQ * 2;
                const r = b + a;
                f = g = VWb({
                    labels: d,
                    measurements: c,
                    radius: r,
                    width: k,
                    gF: n,
                    isa: p
                });
                const t = __c.XX(m.map(v => v.label));
                m = b;
                if (n === "shrink") {
                    const v = (.4 * r) ** 2;
                    g = f = f.filter( ({ba: x}) => {
                        if (x.width > k)
                            return !1;
                        var y = WWb(x);
                        if (y = y.x ** 2 + y.y ** 2 >= v)
                            y = !__c.gv(x, [new wu(0,0)], 1E-10);
                        return y
                    }
                    );
                    if (!f.length)
                        return q;
                    let u;
                    do {
                        ({index: n, distance: d} = XWb(g, b));
                        m = d - a;
                        f = VWb({
                            labels: f,
                            measurements: c,
                            radius: d,
                            width: k,
                            gF: "grow",
                            isa: p
                        });
                        ({labels: f, Dy: u} = YWb(f));
                        if (!f.length)
                            return q;
                        g = g.filter( ({index: x}) => !u.has(x))
                    } while (u.has(n))
                } else
                    ({labels: f} = YWb(f));
                if (!f.length)
                    return q;
                l = ZWb({
                    labels: f.map(v => v.ba),
                    width: k,
                    height: l
                });
                return h ? {
                    labels: f.map( ({Mi: v, Sca: u, jub: x, ckb: y, index: z, angle: A}) => {
                        const {angle: B, radius: G} = JWb(x, A)
                          , {angle: H, radius: K} = JWb(y, A);
                        return {
                            value: v,
                            name: u,
                            dominantBaseline: "alphabetic",
                            textAnchor: "middle",
                            tI: K,
                            jK: G,
                            sI: H,
                            iK: B,
                            key: t[z],
                            fontSize: e
                        }
                    }
                    ),
                    wa: l,
                    radius: m
                } : {
                    labels: [],
                    wa: l,
                    radius: m
                }
            }
              , v3 = function({rows: a, Sk: b}) {
                const c = a.reduce( (e, {key: f, hV: g, uba: h}) => {
                    f = b.LH === f || b.dN.TF.has(f);
                    return h && f ? e + (u3 * 2 - g) : e
                }
                , 0)
                  , d = Math.PI * 2 / (Math.PI * 2 + c);
                return a.map(e => {
                    var f = e.key;
                    const g = e.hV
                      , h = e.uba;
                    f = b.LH === f || b.dN.TF.has(f);
                    return {
                        ...e,
                        hV: h && f ? 2 * u3 : g * d
                    }
                }
                )
            }
              , TWb = function({rows: a, Sk: b}) {
                const c = [];
                a = v3({
                    rows: a,
                    Sk: b
                });
                for (let d = 0, e = 0; d < a.length; d++) {
                    const {value: f, label: g, Mi: h, hV: k, uba: l} = a[d];
                    l || c.push({
                        Sca: g,
                        Mi: h,
                        angle: e + k / 2,
                        index: d,
                        value: f
                    });
                    e += k
                }
                return c
            }
              , aXb = function({rows: a, Sk: b}) {
                const c = [];
                let d = 0;
                a = v3({
                    rows: a,
                    Sk: b
                });
                for (b = 0; b < a.length; b++) {
                    const {label: e, Mi: f, hV: g} = a[b];
                    c.push({
                        label: `${e}: ${f}`,
                        angle: d + g / 2,
                        index: b
                    });
                    d += g
                }
                return c
            }
              , UWb = function(a, {fontSize: b, fontFamily: c, Jf: d, fontWeight: e, textAlign: f, textBaseline: g}) {
                b = d({
                    Mj: [...a.map(h => h.Sca), ...a.map(h => h.Mi)],
                    fontSize: b,
                    fontWeight: e,
                    fontFamily: c,
                    textAlign: f,
                    textBaseline: g
                });
                c = new Map;
                for (d = 0; d < a.length; d++)
                    c.set(a[d].index, {
                        name: b[d],
                        value: b[a.length + d]
                    });
                return c
            }
              , VWb = function({labels: a, measurements: b, radius: c, width: d, gF: e, isa: f}) {
                return a.map( ({angle: g, index: h, value: k, Sca: l, Mi: m}) => {
                    var n = __c.D(b.get(h));
                    const p = n.name;
                    n = n.value;
                    var q = Math.max(p.width, n.width)
                      , r = p.height + n.height + f
                      , t = q / 2;
                    const v = r / 2
                      , u = Math.atan2(t, c + v);
                    t = Math.atan2(v, c + t);
                    q = g < u || g > 2 * Math.PI - u ? bXb(q, r, g, c, -1) : g < Math.PI / 2 - t ? w3(q, r, g, c, 1, -1) : g < Math.PI / 2 + t ? cXb(q, r, g, c, 1) : g < Math.PI - u ? w3(q, r, g, c, 1, 1) : g < Math.PI + u ? bXb(q, r, g, c, 1) : g < 3 * Math.PI / 2 - t ? w3(q, r, g, c, -1, 1) : g < 3 * Math.PI / 2 + t ? cXb(q, r, g, c, -1) : w3(q, r, g, c, -1, -1);
                    e === "shrink" && (g > Math.PI && q.ma.x < -d / 2 ? (r = (-d / 2 - q.ma.x) / Math.sin(g),
                    q = q.transform(__c.Iu(r * Math.sin(g), -r * Math.cos(g)))) : g < Math.PI && q.r.x > d / 2 && (r = (d / 2 - q.r.x) / Math.sin(g),
                    q = q.transform(__c.Iu(r * Math.sin(g), -r * Math.cos(g)))));
                    return {
                        ba: q,
                        index: h,
                        value: k,
                        angle: g,
                        radius: c,
                        Sca: l,
                        Mi: m,
                        ckb: new wu(q.t.x + (p.actualBoundingBoxLeft - p.actualBoundingBoxRight) / 2,q.t.y + p.actualBoundingBoxAscent),
                        jub: new wu(q.b.x + (n.actualBoundingBoxLeft - n.actualBoundingBoxRight) / 2,q.b.y - n.actualBoundingBoxDescent)
                    }
                }
                ).sort( (g, h) => g.value === h.value ? g.index - h.index : h.value - g.value)
            }
              , bXb = function(a, b, c, d, e) {
                d = e * (d + b / 2);
                return __c.Vu({
                    center: new wu(-d * Math.tan(c),d),
                    width: a,
                    height: b
                })
            }
              , cXb = function(a, b, c, d, e) {
                d = e * (d + a / 2);
                return __c.Vu({
                    center: new wu(d,-d / Math.tan(c)),
                    width: a,
                    height: b
                })
            }
              , w3 = function(a, b, c, d, e, f) {
                const g = Math.sqrt((a / 2) ** 2 + (b / 2) ** 2);
                f = Math.atan2(a * e, -b * f) - c;
                e = Math.sin(f) / d;
                f = Math.PI - f - Math.asin(g * e);
                d = e === 0 ? d + g : Math.sin(f) / e;
                return __c.Vu({
                    center: new wu(d * Math.sin(c),-d * Math.cos(c)),
                    width: a,
                    height: b
                })
            }
              , XWb = function(a, b) {
                const {index: c, GL: d} = a.reduce( (e, {ba: f, index: g}) => {
                    f = WWb(f);
                    f = f.x ** 2 + f.y ** 2;
                    return f < e.GL ? {
                        GL: f,
                        index: g
                    } : e
                }
                , {
                    GL: b ** 2,
                    index: -1
                });
                return {
                    distance: Math.sqrt(d),
                    index: c
                }
            }
              , WWb = function(a) {
                return [dXb(a.la, a.tr), dXb(a.bl, a.br), eXb(a.la, a.bl), eXb(a.tr, a.br)].reduce( (b, c) => c.x ** 2 + c.y ** 2 < b.x ** 2 + b.y ** 2 ? c : b, new wu(Infinity,Infinity))
            }
              , dXb = function(a, b) {
                const c = Math.min(a.x, b.x);
                b = Math.max(a.x, b.x);
                return c > 0 ? new wu(c,a.y) : b < 0 ? new wu(b,a.y) : new wu(0,a.y)
            }
              , eXb = function(a, b) {
                const c = Math.min(a.y, b.y);
                b = Math.max(a.y, b.y);
                return c > 0 ? new wu(a.x,c) : b < 0 ? new wu(a.x,b) : new wu(a.x,0)
            }
              , YWb = function(a) {
                const b = []
                  , c = new Set;
                for (let d = 0; d < a.length; d++) {
                    const e = a[d]
                      , f = e.ba;
                    b.some( ({ba: g}) => f.Mo(g)) ? c.add(e.index) : b.push(e)
                }
                return {
                    labels: b,
                    Dy: c
                }
            }
              , ZWb = function({labels: a, width: b, height: c}) {
                return a.reduce( (d, e) => ({
                    left: Math.max(d.left, -b / 2 - e.la.x),
                    right: Math.max(d.right, e.br.x - b / 2),
                    bottom: Math.max(d.bottom, e.br.y - c / 2),
                    top: Math.max(d.top, -c / 2 - e.la.y)
                }), __c.uB)
            }
              , gXb = function({Zb: a, ...b}) {
                return s3(a, {
                    children: ({Yc: c, key: d, pi: e}) => s3(fXb, {
                        segment: e,
                        ...c,
                        ...b
                    }, d)
                })
            }
              , hXb = function({store: a, segments: b, M: c, xa: d, Hh: e, ...f}) {
                a = new __c.YW({
                    xb: {
                        enter: {
                            Jj: {
                                value: h => h.Jj,
                                end: 0
                            },
                            Pk: {
                                value: h => h.Jj,
                                Vf: 1,
                                easing: __c.ax.Jx
                            },
                            radius: {
                                value: h => h.radius
                            },
                            LA: {
                                value: h => h.LA
                            },
                            Ja: {
                                value: h => h.Ja
                            },
                            Ca: {
                                value: h => h.Ca
                            },
                            Da: {
                                value: h => h.Da
                            },
                            opacity: {
                                value: h => h.opacity,
                                end: 0
                            }
                        },
                        update: {
                            Jj: {
                                value: h => h.Jj
                            },
                            Pk: {
                                value: h => h.Pk
                            },
                            radius: {
                                value: h => h.radius
                            },
                            LA: {
                                value: h => h.LA
                            },
                            Ja: {
                                value: h => h.Ja,
                                zb: !0
                            },
                            Ca: {
                                value: h => h.Ca,
                                zb: !0
                            },
                            Da: {
                                value: h => h.Da,
                                zb: !0
                            },
                            opacity: {
                                value: h => h.opacity,
                                end: .6
                            }
                        },
                        exit: {
                            Jj: {
                                value: h => h.Jj,
                                end: 0
                            },
                            Pk: {
                                value: h => h.Pk,
                                end: 0
                            },
                            radius: {
                                value: h => h.radius,
                                end: 0
                            },
                            LA: {
                                value: h => h.LA,
                                end: 0
                            },
                            Ja: {
                                value: h => h.Ja,
                                end: 0
                            },
                            Ca: {
                                value: h => h.Ca,
                                end: 0
                            },
                            Da: {
                                value: h => h.Da,
                                end: 0
                            },
                            opacity: {
                                value: () => 0,
                                end: 0
                            }
                        },
                        Xe: {
                            Jj: !1,
                            Pk: !1,
                            radius: !0,
                            LA: !0,
                            Ja: !1,
                            Ca: !1,
                            Da: !1,
                            opacity: !1
                        }
                    },
                    data: b,
                    M: c,
                    j: a.j,
                    Hh: e,
                    ne: 500,
                    Qe: 500,
                    pe: 0,
                    getKey: h => h.key
                });
                const {Zb: g} = d(a);
                return () => s3(gXb, {
                    Zb: g,
                    ...f
                })
            }
              , x3 = __webpack_require__(443763)
              , iXb = x3.Fragment
              , s3 = x3.jsx
              , y3 = x3.jsxs;
            var z3 = __webpack_require__(875604)
              , jXb = z3.memo
              , kXb = z3.useCallback
              , QWb = z3.useMemo;
            var A3 = __webpack_require__(519427)
              , B3 = A3.action
              , t3 = A3.computed
              , lXb = A3.observable;
            var C3 = __webpack_require__(446474).Pi;
            var mXb = __c.ZIb()
              , nXb = __c.qX(mXb, {
                filter_by: !0
            });
            var NWb = jXb( ({label: {name: a, value: b, dominantBaseline: c, textAnchor: d}, sI: e, iK: f, tI: g, jK: h, fontSize: k, opacity: l, hb: m}) => {
                const n = t3( () => KWb(e.get()))
                  , p = t3( () => KWb(f.get()))
                  , q = t3( () => LWb(e.get()))
                  , r = t3( () => MWb(e.get()))
                  , t = t3( () => LWb(f.get()))
                  , v = t3( () => MWb(f.get()))
                  , u = t3( () => Math.sin(n.get()) * g.get() * q.get())
                  , x = t3( () => Math.cos(n.get()) * g.get() * r.get())
                  , y = t3( () => Math.sin(p.get()) * h.get() * t.get())
                  , z = t3( () => Math.cos(p.get()) * h.get() * v.get());
                return y3(iXb, {
                    children: [s3(m, {
                        textAnchor: d,
                        dominantBaseline: c,
                        x: u,
                        y: x,
                        opacity: l,
                        fontSize: k,
                        children: a
                    }), s3(m, {
                        textAnchor: d,
                        dominantBaseline: c,
                        x: y,
                        y: z,
                        opacity: l,
                        fontSize: k,
                        children: b
                    })]
                })
            }
            );
            var oXb = ({store: a, M: b, xa: c, Hh: d, Sk: e, Aa: f, hb: g}) => {
                const h = t3( () => $Wb(f, a, e))
                  , k = t3( () => h.get().labels)
                  , l = t3( () => h.get().wa)
                  , m = t3( () => h.get().radius)
                  , n = t3( () => f.pza(a, e, l.get(), m.get()))
                  , p = PWb({
                    labels: k,
                    j: a.j,
                    M: b,
                    xa: c,
                    Hh: d,
                    hb: g
                });
                b = RWb({
                    j: a.j,
                    M: b,
                    xa: c,
                    wa: l
                });
                return {
                    Mia: C3( () => a.j.Fq ? s3(p, {}) : null),
                    wa: l,
                    radius: m,
                    pza: n,
                    Xtb: b
                }
            }
            ;
            var pXb = ({Mia: a, Segments: b}) => y3("g", {
                children: [s3(b, {}), s3(a, {})]
            })
              , qXb = ({width: a, height: b}) => s3("svg", {
                width: a,
                height: b,
                viewBox: "0 0 100 100",
                opacity: "0.5",
                filter: "grayscale(1)",
                children: y3("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [s3("path", {
                        fill: "#37E5D4",
                        fillRule: "nonzero",
                        d: "M50 10a40 40 0 0 1 38.61 29.56L50 50V10z"
                    }), s3("path", {
                        fill: "#00D1E1",
                        fillRule: "nonzero",
                        d: "M88.04 37.64A40 40 0 0 1 71.86 83.5L50 50l38.04-12.36z"
                    }), s3("path", {
                        fill: "#00BBEB",
                        fillRule: "nonzero",
                        d: "M73.51 82.36a40 40 0 0 1-48.6-1.21L50 50l23.51 32.36z"
                    }), s3("path", {
                        fill: "#01A3ED",
                        fillRule: "nonzero",
                        d: "M26.49 82.36a40 40 0 0 1-13.87-46.6L50 50 26.49 82.36z"
                    }), s3("path", {
                        fill: "#3089E5",
                        fillRule: "nonzero",
                        d: "M11.96 37.64A40 40 0 0 1 50.4 10L50 50 11.96 37.64z"
                    })]
                })
            });
            var u3 = Math.PI / 360
              , rXb = class {
                static A(a) {
                    __c.Q(a, {
                        zhb: t3,
                        dI: t3,
                        b_: t3,
                        kK: t3,
                        values: t3,
                        UN: t3,
                        tha: t3,
                        WKa: t3,
                        format: t3,
                        c0a: t3,
                        YI: t3,
                        Ni: t3,
                        bx: t3,
                        Av: t3,
                        EBa: t3,
                        nz: t3,
                        rows: t3,
                        pk: t3,
                        DBa: t3,
                        Pa: t3,
                        En: t3,
                        zn: lXb.ref
                    })
                }
                get gF() {
                    return this.j.xd ? "shrink" : "grow"
                }
                get Jfb() {
                    return this.j.Va.type === "PIE" ? 0 : .5
                }
                get zhb() {
                    return this.j.km ? "numbers" : "percentages"
                }
                get dI() {
                    var a;
                    return (a = this.bindings.eb) === null || a === void 0 ? void 0 : a.label_by
                }
                get b_() {
                    var a, b;
                    const c = this.kK
                      , d = (b = this.bindings.vr) === null || b === void 0 ? void 0 : (a = b.label_by) === null || a === void 0 ? void 0 : a.map(f => f !== null && f !== void 0 ? f : "");
                    var e;
                    return d !== null && d !== void 0 ? d : Array.from({
                        length: (e = c === null || c === void 0 ? void 0 : c.values.count()) !== null && e !== void 0 ? e : 0
                    }, () => "")
                }
                get kK() {
                    var a;
                    return (a = this.bindings.eb) === null || a === void 0 ? void 0 : a.value_by
                }
                get values() {
                    var a;
                    return (a = this.bindings.values) === null || a === void 0 ? void 0 : a.value_by
                }
                get UN() {
                    const a = this.b_
                      , b = __c.XX(a);
                    return a.map( (c, d) => ({
                        label: c,
                        key: b[d]
                    }))
                }
                get tha() {
                    const a = this.values;
                    var b;
                    return (b = a === null || a === void 0 ? void 0 : a.values.map(c => c !== null && c !== void 0 ? c : 0)) !== null && b !== void 0 ? b : []
                }
                get WKa() {
                    const a = this.Ni;
                    return this.tha.filter( (b, c) => a === null || a === void 0 ? void 0 : a[c])
                }
                get format() {
                    const a = this.values;
                    if (!this.j.km)
                        return SWb;
                    const b = this.bindings.bq;
                    return b ? b : a != null ? c => __c.lX(a, c) : String
                }
                get c0a() {
                    var a = this.UN;
                    const b = this.tha
                      , c = this.DBa
                      , d = this.dI
                      , e = this.j.Va.ha.ref
                      , f = this.j.F;
                    if (e) {
                        const g = d === null || d === void 0 ? void 0 : d.ya;
                        if (f == null || f.type !== "groups" || d == null || g == null)
                            return [];
                        a = d.values.map(m => m.value);
                        const h = __c.eX(f)
                          , {groups: k, values: [l]} = __c.WZ(e.type, a, b);
                        return k.map( (m, n) => {
                            const p = __c.kX(__c.iX(g), m);
                            var q;
                            return {
                                label: p.ok ? p.value : m,
                                value: (q = l[n]) !== null && q !== void 0 ? q : 0,
                                key: `${m}__${0}`,
                                color: __c.dX(h.get(__c.BX.rw(m)))
                            }
                        }
                        )
                    }
                    return a.map( ({label: g, key: h}, k) => ({
                        label: g,
                        value: b[k],
                        key: h,
                        color: c[k]
                    }))
                }
                get YI() {
                    var a = this.UN;
                    const b = this.WKa
                      , c = this.Pa
                      , d = this.dI
                      , e = this.Ni
                      , f = this.j.Va.ha.ref
                      , g = this.j.F;
                    if (f) {
                        const h = d === null || d === void 0 ? void 0 : d.ya;
                        if (g == null || g.type !== "groups" || d == null || h == null)
                            return [];
                        a = d.values.map(n => n.value).filter( (n, p) => e === null || e === void 0 ? void 0 : e[p]);
                        const k = __c.eX(g)
                          , {groups: l, values: [m]} = __c.WZ(f.type, a, b);
                        return l.map( (n, p) => {
                            const q = __c.kX(__c.iX(h), n);
                            var r;
                            return {
                                label: q.ok ? q.value : n,
                                value: (r = m[p]) !== null && r !== void 0 ? r : 0,
                                key: `${n}__${0}`,
                                color: __c.dX(k.get(__c.BX.rw(n)))
                            }
                        }
                        )
                    }
                    return a.map( ({label: h, key: k}, l) => ({
                        label: h,
                        value: b[l],
                        key: k,
                        color: c[l]
                    }))
                }
                get Ni() {
                    const a = this.bx
                      , b = this.Vh;
                    if (a)
                        return a.map( (c, d) => b(d))
                }
                get bx() {
                    const a = this.dI
                      , b = this.kK
                      , c = this.j
                      , d = this.bindings;
                    if (a || b)
                        return __c.D(a !== null && a !== void 0 ? a : b).values.toArray().map( (e, f) => r3({
                            values: __c.D(d.values),
                            index: f,
                            config: c.Va
                        }))
                }
                get Av() {
                    const a = this.bx;
                    return a ? a.some(b => b) : !1
                }
                get EBa() {
                    return this.c0a.filter( ({value: a}) => Number.isFinite(a) && a > 0)
                }
                get nz() {
                    return this.YI.filter( ({value: a}) => Number.isFinite(a) && a > 0)
                }
                get rows() {
                    const a = this.format
                      , b = this.j.km
                      , c = this.nz.reduce( (d, {value: e}) => d + e, 0);
                    return this.nz.map( ({key: d, label: e, value: f, color: g}) => ({
                        key: d,
                        label: e,
                        Hea: c === 0 ? 0 : f / c,
                        value: f,
                        color: g
                    })).map(d => {
                        const e = d.Hea * 2 * Math.PI
                          , f = e <= u3;
                        return {
                            ...d,
                            Mi: a(b ? d.value : d.Hea),
                            uba: f,
                            hV: e
                        }
                    }
                    )
                }
                get pk() {
                    return this.EBa.map(a => ({
                        text: a.label,
                        Up: a.key
                    }))
                }
                get DBa() {
                    const a = this.j.F;
                    return Array.from({
                        length: this.tha.length
                    }, (b, c) => __c.dX(a.Pa.get(c.toString())))
                }
                get Pa() {
                    const a = this.Ni;
                    return this.DBa.filter( (b, c) => a === null || a === void 0 ? void 0 : a[c])
                }
                get En() {
                    return this.EBa.map(a => a.color)
                }
                constructor(a, b, c) {
                    this.j = a;
                    this.bindings = b;
                    this.Vh = c;
                    this.lt = (rXb.A(this),
                    "row");
                    this.zn = void 0
                }
            }
            ;
            var sXb = class {
                oF(a, b) {
                    a.zn = b
                }
                segments(a, b, c, d) {
                    if (!a.j.ig)
                        return [];
                    const e = a.Jfb * c
                      , f = []
                      , g = v3({
                        rows: a.rows,
                        Sk: b
                    });
                    let h = 0;
                    for (let l = 0; l < g.length; l++) {
                        const {key: m, color: n, label: p, Mi: q, hV: r, uba: t} = g[l]
                          , {ma: v, a: u, b: x} = __c.Ht(n)
                          , y = {
                            content: `${p}: ${q}`,
                            anchor: d[l].anchor,
                            placement: d[l].placement
                        }
                          , z = h
                          , A = Math.max(Math.min(h + r, Math.PI * 2 - 1E-4), h + 1E-4);
                        var k = __c.LZ(b, m);
                        const B = b.dN.TF.has(m)
                          , G = k || a.zn != null && a.zn !== m ? .3 : 1;
                        k = t && B || !t && !k;
                        h += r;
                        f.push({
                            radius: c,
                            LA: e,
                            Jj: z,
                            Pk: A,
                            color: n,
                            Ja: v,
                            Ca: u,
                            Da: x,
                            key: m,
                            hd: y,
                            opacity: G,
                            Hgb: k
                        })
                    }
                    return f
                }
                pza(a, b, c, d) {
                    return aXb({
                        rows: a.rows,
                        Sk: b
                    }).map( ({index: e, angle: f}) => {
                        var g = d / 2
                          , h = a.j;
                        h = new wu(h.Lc / 2 + (h.xd ? 0 : c.left),h.He / 2 + c.top);
                        g = new wu(h.x + g * Math.cos(f - Math.PI / 2),h.y + g * Math.sin(f - Math.PI / 2));
                        f *= 180 / Math.PI;
                        const {anchor: k, placement: l} = f >= 337.5 || f < 22.5 ? {
                            anchor: g,
                            placement: "top-center"
                        } : f >= 22.5 && f < 67.5 ? {
                            anchor: g,
                            placement: "top-start"
                        } : f >= 67.5 && f < 112.5 ? {
                            anchor: g,
                            placement: "end-center"
                        } : f >= 112.5 && f < 157.5 ? {
                            anchor: g,
                            placement: "bottom-start"
                        } : f >= 157.5 && f < 202.5 ? {
                            anchor: g,
                            placement: "bottom-center"
                        } : f >= 202.5 && f < 247.5 ? {
                            anchor: g,
                            placement: "bottom-end"
                        } : f >= 247.5 && f < 292.5 ? {
                            anchor: g,
                            placement: "start-center"
                        } : {
                            anchor: g,
                            placement: "top-end"
                        };
                        return {
                            anchor: k,
                            placement: l,
                            index: e
                        }
                    }
                    )
                }
                constructor(a) {
                    this.Fa = a
                }
            }
            ;
            var tXb = __c.XW("path", new Set(["d", "fill", "opacity"]))
              , fXb = jXb( ({segment: {hd: a, Hgb: b, key: c}, Jj: d, Pk: e, radius: f, LA: g, Ja: h, Ca: k, Da: l, opacity: m, web: n, xeb: p, veb: q}) => {
                const r = t3( () => {
                    var x = g.get();
                    if (x !== 0) {
                        var y = new wu(0,0)
                          , z = f.get()
                          , A = d.get()
                          , B = e.get();
                        if (B <= A)
                            x = "";
                        else {
                            var G = new wu(z * Math.sin(A) + y.x,z * -Math.cos(A) + y.y)
                              , H = new wu(z * Math.sin(B) + y.x,z * -Math.cos(B) + y.y)
                              , K = new wu(x * Math.sin(A) + y.x,x * -Math.cos(A) + y.y);
                            y = new wu(x * Math.sin(B) + y.x,x * -Math.cos(B) + y.y);
                            A = B - A > Math.PI;
                            x = `M${G.x} ${G.y} ` + `A${z} ${z} 0 ${A ? 1 : 0} 1 ${H.x} ${H.y} ` + `L${y.x} ${y.y} ` + `A${x} ${x} 0 ${A ? 1 : 0} 0 ${K.x} ${K.y} ` + "Z"
                        }
                    } else
                        x = new wu(0,0),
                        z = f.get(),
                        G = d.get(),
                        H = e.get(),
                        H <= G ? x = "" : (K = new wu(z * Math.sin(G) + x.x,z * -Math.cos(G) + x.y),
                        A = new wu(z * Math.sin(H) + x.x,z * -Math.cos(H) + x.y),
                        x = `M${K.x} ${K.y} ` + `A${z} ${z} 0 ${H - G > Math.PI ? 1 : 0} 1 ${A.x} ${A.y} ` + `L${x.x} ${x.y} ` + "Z");
                    return x
                }
                )
                  , t = t3( () => __c.Jt(new __c.Dt(h.get(),k.get(),l.get())))
                  , v = kXb( () => n === null || n === void 0 ? void 0 : n({
                    key: c,
                    hd: a
                }), [n, c, a])
                  , u = kXb( () => q === null || q === void 0 ? void 0 : q({
                    key: c,
                    hd: a
                }), [q, c, a]);
                return s3("g", {
                    onMouseEnter: v,
                    onMouseLeave: p,
                    pointerEvents: b ? "auto" : "none",
                    children: s3(__c.DX, {
                        onClick: u,
                        children: s3(tXb, {
                            d: r,
                            fill: t,
                            opacity: m
                        })
                    })
                })
            }
            );
            __c.Ekb = {
                o9a: ({store: a, ec: b, $b: c, xa: d, Fa: e, Ki: f, Mf: g}) => {
                    var h = __c.SW({
                        store: a
                    });
                    const k = new __c.m_(a,nXb,["value_by"],["label_by"])
                      , {tDa: l, XKa: m, nk: n, Vh: p} = __c.RLb({
                        j: a,
                        B7: k,
                        ec: b,
                        hb: h,
                        Fa: e,
                        bindings: nXb,
                        JD: __c.QKb(mXb),
                        vT: IWb,
                        ZH: r3,
                        Mf: g
                    })
                      , q = new rXb(a,k,p)
                      , r = new sXb(e)
                      , t = __c.cX({
                        j: a,
                        Wg: e.Wg,
                        Iu: qXb,
                        width: t3( () => a.Lc),
                        height: t3( () => a.He)
                    })
                      , {FK: v, Sk: u, Er: x, cW: y} = __c.SZ({
                        bj: q,
                        M: c,
                        xa: d,
                        j: a,
                        Fa: e,
                        hb: h,
                        width: t3( () => a.xd ? a.width : L.get() * 2),
                        Mf: g
                    })
                      , {aEa: z, height: A, a1a: B} = __c.YLb({
                        j: a,
                        rows: t3( () => [{
                            component: s3(l, {}),
                            height: m,
                            key: "filters"
                        }, {
                            component: s3(v, {}),
                            height: x,
                            key: "legend"
                        }]),
                        spacing: t3( () => .8)
                    })
                      , {size: G, dW: H} = __c.VZ({
                        j: a,
                        M: c,
                        xa: d,
                        size: t3( () => A.get() !== 0 ? .8 : 0),
                        GQ: !1,
                        HQ: !1
                    });
                    b = t3( () => r.segments(q, u, L.get(), P.get()));
                    e = __c.TZ([b]);
                    const {Mia: K, wa: I, radius: L, pza: P, Xtb: S} = oXb({
                        store: q,
                        M: c,
                        xa: d,
                        Hh: e,
                        Sk: u,
                        Aa: r,
                        hb: h
                    })
                      , U = f ? new __c.ZW : void 0
                      , ba = f && U ? B3( ({key: aa, hd: qa}) => {
                        const Ia = qa.content
                          , Ua = qa.placement;
                        qa = qa.anchor;
                        r.oF(q, aa);
                        __c.NW(U, f, {
                            content: Ia,
                            mu: {
                                top: qa.y + x.get(),
                                left: qa.x,
                                width: 0,
                                height: 0
                            },
                            placement: Ua,
                            arrow: !1,
                            key: aa
                        })
                    }
                    ) : void 0
                      , ha = f && U ? B3( () => {
                        r.oF(q);
                        __c.OW(U, f)
                    }
                    ) : void 0;
                    h = f && U ? B3( ({key: aa, hd: qa}) => {
                        __c.hy.Ar || (f.key === aa && f.open ? ha === null || ha === void 0 || ha() : ba === null || ba === void 0 || ba({
                            key: aa,
                            hd: qa
                        }))
                    }
                    ) : void 0;
                    const oa = hXb({
                        segments: b,
                        web: ba,
                        xeb: ha,
                        veb: h,
                        store: q,
                        M: c,
                        xa: d,
                        Hh: e
                    })
                      , ka = t3( () => a.ig && !q.Av)
                      , ma = t3( () => ({
                        top: A.get() + I.get().top + G.get(),
                        left: I.get().left,
                        right: I.get().right,
                        bottom: I.get().bottom
                    }))
                      , wa = __c.$W(function() {
                        return {
                            top: a.Gk / 2 + a.vc.top,
                            left: a.Ep / 2 + a.UB
                        }
                    })
                      , W = C3(function() {
                        return s3(pXb, {
                            Mia: K,
                            Segments: oa
                        })
                    });
                    return {
                        Rk: () => ma.get(),
                        nk: n,
                        Vh: p,
                        xs: C3(function() {
                            var aa = y();
                            const qa = H()
                              , Ia = S()
                              , Ua = B(new Map([["legend", aa]]));
                            aa = QWb( () => __c.$W(function() {
                                return {
                                    top: a.vc.top - Ua.get() - qa.get() - Ia.get(),
                                    left: a.UB
                                }
                            }), [Ua, Ia, qa]);
                            return ka.get() ? s3(t, {}) : y3("g", {
                                children: [s3(aa, {
                                    children: s3(z, {})
                                }), s3(wa, {
                                    children: s3(W, {})
                                })]
                            })
                        })
                    }
                }
            };
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/70a7de264f62c45e.js.map

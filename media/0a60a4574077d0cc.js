(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[44868], {

    /***/
    611076: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(543471);
        __web_req__(418410);
        __web_req__(685828);
        __web_req__(726917);
        __web_req__(190240);
        __web_req__(179212);
        __web_req__(913825);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var C = __c.C;
            var Q = __c.Q;
            var O = __c.O;
            var KZ = __c.KZ;
            var D = __c.D;
            var E = __c.E;
            var SKb, TKb, XZ, VKb, WKb, XKb, YKb, ZKb, $Kb, aLb, $Z, eLb, iLb, lLb, mLb, sLb, tLb, oLb, uLb, vLb, yLb, zLb, CLb, DLb, HLb, KLb, NLb, OLb, SLb, ULb, VLb, f_, g_, a_, h_;
            __c.QKb = function(a) {
                var b = {
                    filter_by: !0
                };
                const c = {};
                for (const d of Object.keys(a.ge)) {
                    if (!(d in b))
                        continue;
                    const e = d;
                    c[e] = a.ge[e]
                }
                return new __c.pX(c,a.config,a.Xb)
            }
            ;
            __c.RKb = function(a) {
                switch (a.type) {
                case "GROUPED_COLUMN":
                case "STACKED_COLUMN":
                case "GROUPED_ROW":
                case "STACKED_ROW":
                case "PIE":
                case "DONUT":
                case "LINE":
                case "STACKED_AREA":
                case "SCATTERPLOT":
                case "BUBBLEPLOT":
                case "DOTPLOT":
                case "BAR_RACE":
                case "RADAR":
                case "FUNNEL":
                    var b, c;
                    return (c = a.ha) === null || c === void 0 ? void 0 : (b = c.ref) === null || b === void 0 ? void 0 : b.type;
                case "GROUPED_DOTPLOT":
                case "PACKED_CIRCLES":
                case "TREEMAP":
                case "HISTOGRAM":
                    break;
                default:
                    throw new E(a);
                }
            }
            ;
            SKb = function(a, b) {
                let c = 0;
                const d = __c.Oc(e => {
                    const f = e.OI
                      , g = c;
                    c = f.fp;
                    f.fp === g || a !== null && a !== void 0 && a.ho({
                        ...b,
                        ...e
                    })
                }
                , 1E3);
                return e => {
                    d(e)
                }
            }
            ;
            __c.WZ = function(a, b, ...c) {
                if (a === "COUNT") {
                    const g = new Map;
                    for (const k of b) {
                        var d;
                        const l = (d = g.get(k)) !== null && d !== void 0 ? d : 0;
                        g.set(k, l + 1)
                    }
                    g.delete("");
                    const h = [...g.values()];
                    return {
                        groups: [...g.keys()],
                        values: c.length > 0 ? c.map( () => h) : [h]
                    }
                }
                const e = [...(new Set(b)).values()]
                  , f = new Map(e.map(g => [g, []]));
                c.forEach(g => {
                    var h = new Map(e.map(k => [k, []]));
                    for (let k = 0; k < b.length; ++k)
                        D(h.get(b[k]), "Group should exist").push(g[k]);
                    for (const [k,l] of h)
                        g = D(f.get(k), "Grouped column should exist"),
                        h = l.filter(m => m != null && Number.isFinite(m)),
                        g.push(h.length > 0 ? TKb(a, h) : void 0)
                }
                );
                return {
                    groups: [...f.keys()],
                    values: __c.aX([...f.values()])
                }
            }
            ;
            TKb = function(a, b) {
                switch (a) {
                case "AVERAGE":
                    return b.reduce( (c, d) => c + d, 0) / b.length;
                case "MIN":
                    return Math.min(...b);
                case "MAX":
                    return Math.max(...b);
                case "SUM":
                    return b.reduce( (c, d) => c + d, 0);
                case "MEDIAN":
                    return a = [...b].sort( (c, d) => d - c),
                    a.length % 2 === 0 ? (a[a.length / 2] + a[a.length / 2 - 1]) / 2 : a[Math.floor(b.length / 2)];
                default:
                    throw new E(a);
                }
            }
            ;
            XZ = function({id: a, label: b, values: c}) {
                return {
                    id: a,
                    label: b,
                    values: c,
                    kind: "number",
                    format: UKb
                }
            }
            ;
            VKb = function({filters: a, gap: b}) {
                if (a.length === 0)
                    return null;
                let c = 0;
                return YZ("g", {
                    children: a.map( ({filter: d, height: e}, f) => {
                        if (e === 0)
                            return null;
                        d = YZ("g", {
                            transform: `translate(0, ${c})`,
                            children: d
                        }, f);
                        c += e + b;
                        return d
                    }
                    )
                })
            }
            ;
            WKb = function({store: a}) {
                return ZZ( () => {
                    const b = a.filters.map(c => {
                        const d = a.jdb(c);
                        return {
                            filter: YZ(d, {}),
                            height: a.QLa(c)
                        }
                    }
                    );
                    return YZ(VKb, {
                        filters: b,
                        gap: a.s1a
                    })
                }
                )
            }
            ;
            XKb = function(a, b) {
                b = b.j;
                return a.Fa.measureText({
                    text: " - ",
                    fontFamily: b.Ze,
                    fontSize: b.fontSize,
                    fontWeight: b.fontWeight
                })
            }
            ;
            YKb = function(a, b, c) {
                b = b.j;
                return a.Fa.Jf({
                    Mj: c,
                    fontFamily: b.Ze,
                    fontSize: b.fontSize,
                    fontWeight: b.fontWeight
                })
            }
            ;
            ZKb = function(a, b, c, d) {
                b = b.j;
                return a.Fa.Wg({
                    text: c,
                    fontFamily: b.Ze,
                    fontSize: b.fontSize,
                    fontWeight: b.fontWeight,
                    maxWidth: d
                })
            }
            ;
            $Kb = function(a, b, c, d) {
                b = b.j;
                return a.Fa.jn({
                    Mj: c,
                    fontFamily: b.Ze,
                    fontSize: b.fontSize,
                    fontWeight: b.fontWeight,
                    maxWidth: d
                })
            }
            ;
            aLb = function(a, b, c, d, e) {
                const f = XKb(a, b)
                  , g = f.width * 3
                  , h = (e - g) / 2;
                d = d.find(p => p < h);
                const [k,l] = $Kb(a, b, c, d ? e - d - g : h);
                a = k.width + g + l.width;
                b = k.text + " - " + l.text;
                const {cB: m, E5: n} = KZ([k, l, f]);
                return {
                    e1: a,
                    c1: n,
                    ZM: m,
                    label: b
                }
            }
            ;
            $Z = function(a, b) {
                return Math.min(Math.max(a, .75), b)
            }
            ;
            eLb = function({hb: a, Fa: b, ...c}) {
                const d = new bLb(c)
                  , e = new cLb(b);
                b = a_( () => e.height(d));
                const f = a_( () => e.pka(d));
                return {
                    o6: ZZ( () => YZ(dLb, {
                        pka: f.get(),
                        hb: a
                    })),
                    height: b
                }
            }
            ;
            iLb = function({min: a, max: b, step: c, rotation: d, Cj: e, Nj: f, gN: g, rP: h, gu: k, width: l, Fa: m, j: n, ec: p, hb: q, koa: r}) {
                const t = new fLb({
                    gu: k,
                    width: l,
                    Cj: e,
                    Nj: f,
                    gN: g,
                    rP: h,
                    min: a,
                    max: b,
                    rotation: d,
                    step: c,
                    j: n
                })
                  , v = new gLb(p)
                  , u = a_( () => v.P4(t, "lower"))
                  , x = a_( () => v.P4(t, "upper"))
                  , {o6: y, height: z} = r ? eLb({
                    width: l,
                    uE: u,
                    NF: x,
                    Fa: m,
                    j: n,
                    hb: q
                }) : {
                    o6: null,
                    height: a_( () => 0)
                }
                  , A = a_( () => v.height(t, z))
                  , B = __c.$W(function() {
                    return {
                        left: 0,
                        top: r ? A.get() - k.get() : 0
                    }
                });
                return {
                    bja: ZZ(G => {
                        const H = G.Ln
                          , K = G.Mn
                          , I = G.onDragStart
                          , L = G.onDragEnd
                          , P = b_( (oa, ka) => {
                            v.JE(t, oa, ka, {
                                Ln: H,
                                Mn: K,
                                onDragStart: I
                            })
                        }
                        , [I, H, K])
                          , S = b_( (oa, ka) => v.LN(t, oa, ka, {
                            Ln: H,
                            Mn: K
                        }), [H, K])
                          , U = b_( () => v.LE(t, L), [L])
                          , ba = b_(oa => v.KE(t, oa), [])
                          , ha = b_( (oa, ka) => v.MN(t, oa, ka, {
                            Ln: H,
                            Mn: K
                        }), [H, K]);
                        return c_("g", {
                            children: [y && YZ(y, {}), YZ(B, {
                                children: YZ(hLb, {
                                    ...G,
                                    uE: u.get(),
                                    NF: x.get(),
                                    min: a.get(),
                                    max: b.get(),
                                    step: c.get(),
                                    width: l,
                                    height: k.get(),
                                    Yi: t.Yi,
                                    JE: P,
                                    LN: S,
                                    LE: U,
                                    KE: ba,
                                    MN: ha
                                })
                            })]
                        })
                    }
                    ),
                    height: A
                }
            }
            ;
            lLb = function({control: a, j: b, ec: c, hb: d, Fa: e, Wk: f, config: g, tl: h, Mf: k}) {
                const l = new jLb(f,g,h)
                  , m = new kLb(b,k)
                  , n = u => m.Ln(l, u)
                  , p = u => m.Mn(l, u);
                f = a_( () => b.fontSize * 2);
                const q = a_( () => b.fontSize * .8)
                  , r = a_( () => b.fontSize * .06)
                  , {bja: t, height: v} = iLb({
                    min: a_( () => {
                        var u;
                        return (u = l.min) !== null && u !== void 0 ? u : 0
                    }
                    ),
                    max: a_( () => {
                        var u;
                        return (u = l.max) !== null && u !== void 0 ? u : 0
                    }
                    ),
                    step: a_( () => l.step),
                    rotation: a_( () => b.rotation),
                    gu: f,
                    width: a_( () => b.Lc),
                    Cj: a_( () => {
                        var u;
                        return (u = l.Cj) !== null && u !== void 0 ? u : 0
                    }
                    ),
                    Nj: a_( () => {
                        var u;
                        return (u = l.Nj) !== null && u !== void 0 ? u : 0
                    }
                    ),
                    gN: a_( () => {
                        var u;
                        return (u = l.gN) !== null && u !== void 0 ? u : ""
                    }
                    ),
                    rP: a_( () => {
                        var u;
                        return (u = l.rP) !== null && u !== void 0 ? u : ""
                    }
                    ),
                    Fa: e,
                    j: b,
                    ec: c,
                    hb: d,
                    koa: !0
                });
                return {
                    u6: ZZ(function() {
                        return l.visible ? YZ(t, {
                            Ln: n,
                            Mn: p,
                            fillColor: D(a.Re.color),
                            uu: q.get(),
                            EF: "rgb(240, 241, 245)",
                            kha: "rgb(255, 255, 255)",
                            Q4: "rgb(255, 255, 255)",
                            R4: "rgba(28, 39, 48, 0.5)",
                            MZa: r.get(),
                            ariaLabel: O("DHkbSw")
                        }) : null
                    }),
                    height: a_( () => l.visible ? v.get() : 0),
                    t$: l,
                    cp: () => m.cp(l),
                    nk: () => !0,
                    Vh: u => m.Vh(l, u)
                }
            }
            ;
            mLb = function(a) {
                __c.w(a.length > 0, "zero candidate combinations received");
                a = a.map( ({Kh: b, backgroundColor: c}, d) => ({
                    Kh: b,
                    backgroundColor: c,
                    A8a: Math.abs(__c.Mt(b, c)),
                    index: d
                }));
                return __c.ns(a, b => b.A8a)
            }
            ;
            __c.nLb = function(a, b) {
                var c = b.map( ({Kh: d, backgroundColor: e, Hp: f}) => {
                    e ? (e = __c.ut(e, f),
                    e = __c.cI(e, a)) : e = a;
                    return {
                        Kh: d,
                        backgroundColor: e
                    }
                }
                );
                ({index: c} = mLb(c));
                return b[c]
            }
            ;
            sLb = function({width: a, height: b, pqa: c, hasNext: d, Gda: e, zda: f, buttons: g, offset: h, lr: k, fillColor: l, Tca: m, padding: n, WCa: p}) {
                const q = d_()
                  , r = d_()
                  , t = d_()
                  , v = d_();
                a -= .5;
                const u = b - .5
                  , {EGa: x, JZa: y} = oLb(l, 1)
                  , {EGa: z, JZa: A} = oLb(l, .05);
                l = u / a < .5 ? u : a * .35;
                const B = Math.min(u / a * 2, .5);
                return c_(pLb, {
                    children: [c_("defs", {
                        children: [YZ("filter", {
                            id: q,
                            x: "0",
                            y: "0",
                            filterUnits: "userSpaceOnUse",
                            children: YZ("feDropShadow", {
                                dx: "1",
                                dy: "2",
                                stdDeviation: "2",
                                floodColor: "rgba(37, 39, 37, 0.3)"
                            })
                        }), c_("linearGradient", {
                            id: t,
                            children: [YZ("stop", {
                                stopColor: "rgb(255, 255, 255)",
                                offset: "0%",
                                stopOpacity: c ? 0 : 1
                            }), YZ("stop", {
                                stopColor: "rgb(255, 255, 255)",
                                offset: `${100 * B}%`
                            }), YZ("stop", {
                                stopColor: "rgb(255, 255, 255)",
                                offset: `${100 * (1 - B)}%`
                            }), YZ("stop", {
                                stopColor: "rgb(255, 255, 255)",
                                offset: "100%",
                                stopOpacity: d ? 0 : 1
                            })]
                        }), YZ("mask", {
                            id: r,
                            children: YZ("rect", {
                                width: a,
                                height: u,
                                rx: u / 2,
                                ry: u / 2,
                                x: .25,
                                y: .25,
                                fill: `url(#${t})`
                            })
                        }), YZ("clipPath", {
                            id: v,
                            children: YZ("rect", {
                                width: a,
                                height: u,
                                rx: u / 2,
                                ry: u / 2,
                                x: .25,
                                y: .25,
                                fill: `url(#${t})`,
                                mask: `url(#${r})`
                            })
                        })]
                    }), YZ("rect", {
                        width: a,
                        height: u,
                        rx: u / 2,
                        ry: u / 2,
                        x: .25,
                        y: .25,
                        fill: "rgb(255, 255, 255)",
                        stroke: "#bfbfbf",
                        filter: `url(#${q})`,
                        strokeWidth: .5
                    }), YZ("g", {
                        clipPath: `url(#${v})`,
                        mask: `url(#${r})`,
                        children: YZ("g", {
                            style: k ? void 0 : {
                                transition: "transform 1s"
                            },
                            transform: `translate(${n + .25 - h} ${n + .25})`,
                            children: g.map( (G, H) => YZ(p, {
                                ...G,
                                height: u - 2 * n,
                                Veb: A,
                                Teb: z,
                                Ppb: y,
                                Mpb: x
                            }, H))
                        })
                    }), c && YZ("g", {
                        transform: `translate(0 ${(b - u) / 2})`,
                        children: YZ(__c.FX, {
                            height: u,
                            width: l,
                            fill: "rgb(255, 255, 255)",
                            fillOpacity: 0,
                            icon: qLb,
                            Eaa: {
                                color: "rgb(37, 38, 39)"
                            },
                            Fqa: m,
                            onClick: e,
                            ariaLabel: O("sogysQ"),
                            tabIndex: -1
                        })
                    }), d && YZ("g", {
                        transform: `translate(${a - l} ${(b - u) / 2})`,
                        children: YZ(__c.FX, {
                            height: u,
                            width: l,
                            fill: "rgb(255, 255, 255)",
                            fillOpacity: 0,
                            icon: rLb,
                            Eaa: {
                                color: "rgb(37, 38, 39)"
                            },
                            Fqa: m,
                            onClick: f,
                            ariaLabel: O("8TgGyw"),
                            tabIndex: -1
                        })
                    })]
                })
            }
            ;
            tLb = function({x: a, ZM: b, width: c, height: d, label: e, value: f, selected: g, Mpb: h, Ppb: k, Teb: l, Veb: m, onClick: n, onFocus: p, hb: q, padding: r}) {
                const [t,v] = e_("none")
                  , u = b_( () => {
                    v("none");
                    n(f)
                }
                , [n, v, f])
                  , x = b_(K => {
                    K.key !== "Enter" && K.code !== "Space" || n(f)
                }
                , [n, f])
                  , y = b_( () => {
                    __c.Vx.Oo && v("auto");
                    p(a)
                }
                , [a, p, v])
                  , z = b_( () => v("none"), [v])
                  , [A,B] = e_(!1)
                  , G = b_( () => {
                    B(!0)
                }
                , [B])
                  , H = b_( () => {
                    B(!1)
                }
                , [B]);
                g || (A ? (h = l,
                k = m) : (h = "rgb(255, 255, 255)",
                k = "rgb(13, 18, 22)"));
                return YZ(__c.DX, {
                    role: "button",
                    onClick: u,
                    ariaLabel: e,
                    children: c_("g", {
                        tabIndex: 0,
                        transform: `translate(${a} 0)`,
                        onKeyDown: x,
                        onFocus: y,
                        onBlur: z,
                        onMouseOver: G,
                        onMouseOut: H,
                        style: {
                            outline: `${t} -webkit-focus-ring-color`
                        },
                        children: [YZ("rect", {
                            x: "0",
                            y: "0",
                            rx: d / 2,
                            ry: d / 2,
                            width: c,
                            height: d,
                            fill: h,
                            fillOpacity: g || A ? 1 : 0
                        }), YZ("g", {
                            transform: `translate(0 ${r})`,
                            children: YZ(q, {
                                x: c / 2,
                                y: b,
                                fill: k,
                                textAnchor: "middle",
                                dominantBaseline: "alphabetic",
                                children: e
                            })
                        })]
                    })
                })
            }
            ;
            oLb = function(a, b) {
                a = __c.ut(__c.qt(a), b);
                a = __c.cI(a, __c.st("rgb(255, 255, 255)"));
                b = [{
                    Kh: __c.st("rgb(13, 18, 22)"),
                    backgroundColor: a,
                    Hp: 1
                }, {
                    Kh: __c.st("rgb(255, 255, 255)"),
                    backgroundColor: a,
                    Hp: 1
                }];
                ({Kh: b} = __c.nLb(a, b));
                return {
                    EGa: __c.mja(a),
                    JZa: __c.zt(b)
                }
            }
            ;
            uLb = function(a, b) {
                var c = b.j;
                const d = c.Ze
                  , e = c.fontSize;
                c = c.fontWeight;
                return a.Jf({
                    Mj: b.options.map(f => f.label),
                    fontFamily: d,
                    fontSize: e,
                    fontWeight: c
                })
            }
            ;
            vLb = function(a, b, c) {
                const d = a.Bn;
                var e = a.XC;
                const f = (b.length - 1) * a.qla;
                a = 2 * d * b.length;
                const g = b.reduce( (h, k) => h + k, 0);
                e = a + g + f + 2 * e;
                return e < c ? (c - (e - a)) / (b.length * 2) : d
            }
            ;
            yLb = function(a) {
                const {Jf: b, hb: c, DF: d, ...e} = a
                  , f = new wLb(e)
                  , g = new xLb(b)
                  , h = a_( () => g.buttons(f))
                  , k = a_( () => g.height(f))
                  , l = v => g.xSa(f, h.get(), v)
                  , m = v => YZ(tLb, {
                    hb: c,
                    ...v,
                    onClick: d,
                    onFocus: l,
                    padding: f.Bn
                })
                  , n = a_( () => g.$v(f, h.get()))
                  , p = a_( () => g.pqa(f, h.get()))
                  , q = a_( () => g.hasNext(f, h.get()))
                  , r = () => g.Gda(f, h.get())
                  , t = () => g.zda(f, h.get());
                return {
                    XCa: ZZ(v => YZ(sLb, {
                        ...v,
                        buttons: h.get(),
                        width: f.width,
                        height: k.get(),
                        pqa: p.get(),
                        hasNext: q.get(),
                        offset: n.get(),
                        Gda: r,
                        zda: t,
                        lr: __c.oB(),
                        Tca: f.Tca,
                        padding: f.XC,
                        WCa: m
                    })),
                    height: k
                }
            }
            ;
            zLb = function(a, b) {
                switch (a) {
                case "buttons":
                    return b === "column" ? "col_button" : "row_button";
                case "dropdown":
                    return b === "column" ? "col_dropdown" : "row_dropdown";
                default:
                    throw new E(a);
                }
            }
            ;
            CLb = function({control: a, j: b, Wk: c, hb: d, Jf: e, config: f, tl: g, Mf: h}) {
                const k = new ALb(c,f,g)
                  , l = new BLb(b,h);
                c = m => l.DF(k, m, a.type);
                switch (a.type) {
                case "buttons":
                    f = a_( () => k.values);
                    g = a_( () => l.options(k));
                    const {XCa: m, height: n} = yLb({
                        type: "multi",
                        values: f,
                        options: g,
                        DF: c,
                        Jf: e,
                        j: b,
                        hb: d,
                        width: a_( () => b.Lc)
                    });
                    return {
                        u6: ZZ(function() {
                            if (k.visible)
                                return YZ(m, {
                                    fillColor: D(a.Re.color)
                                })
                        }),
                        height: a_( () => k.visible ? n.get() : 0),
                        t$: k,
                        cp: () => l.cp(k),
                        nk: p => l.nk(k, p),
                        Vh: p => l.Vh(k, p)
                    };
                case "dropdown":
                    throw Error("Dropdown component is unimplemented");
                default:
                    throw new E(a);
                }
            }
            ;
            DLb = function(a, b) {
                a = a.options;
                if (!(!a.get().length || b < 0 || b > a.get().length))
                    return a.get()[b].value
            }
            ;
            HLb = function({options: a, rotation: b, gu: c, width: d, Cj: e, Nj: f, Fa: g, j: h, ec: k, hb: l, koa: m}) {
                const n = new ELb({
                    options: a,
                    rotation: b,
                    gu: c,
                    width: d,
                    Cj: e,
                    Nj: f,
                    j: h
                })
                  , p = new FLb(k)
                  , q = a_( () => p.P4(n, "lower"))
                  , r = a_( () => p.P4(n, "upper"))
                  , {o6: t, height: v} = m ? eLb({
                    width: d,
                    uE: q,
                    NF: r,
                    Fa: g,
                    j: h,
                    hb: l
                }) : {
                    o6: void 0,
                    height: a_( () => 0)
                }
                  , u = a_( () => p.height(n, v))
                  , x = __c.$W(function() {
                    return {
                        left: 0,
                        top: m ? u.get() - c.get() : 0
                    }
                });
                return {
                    bja: ZZ(y => {
                        const z = y.Ln
                          , A = y.Mn
                          , B = y.onDragStart
                          , G = y.onDragEnd
                          , H = b_( (S, U) => {
                            p.JE(n, S, U, {
                                Ln: z,
                                Mn: A,
                                onDragStart: B
                            })
                        }
                        , [B, z, A])
                          , K = b_( (S, U) => p.LN(n, S, U, {
                            Ln: z,
                            Mn: A
                        }), [z, A])
                          , I = b_( () => p.LE(n, G), [G])
                          , L = b_(S => p.KE(n, S), [])
                          , P = b_(S => p.MN(n, S, {
                            Ln: z,
                            Mn: A
                        }), [z, A]);
                        return c_("g", {
                            children: [t && YZ(t, {}), YZ(x, {
                                children: YZ(GLb, {
                                    ...y,
                                    Gjb: 0,
                                    Mx: n.Mx,
                                    uE: q.get(),
                                    NF: r.get(),
                                    options: a,
                                    width: d,
                                    height: c.get(),
                                    Yi: n.Yi,
                                    JE: H,
                                    LN: K,
                                    LE: I,
                                    KE: L,
                                    MN: P
                                })
                            })]
                        })
                    }
                    ),
                    height: u
                }
            }
            ;
            KLb = function({control: a, j: b, ec: c, hb: d, Fa: e, Wk: f, config: g, tl: h, Mf: k}) {
                const l = new ILb(f,g,h)
                  , m = new JLb(b,k);
                f = a_( () => m.options(l));
                g = a_( () => D(l.Cj));
                h = a_( () => D(l.Nj));
                const n = u => m.Ln(l, u)
                  , p = u => m.Mn(l, u);
                k = a_( () => b.fontSize * 2);
                const q = a_( () => b.fontSize * .8)
                  , r = a_( () => b.fontSize * .06)
                  , {bja: t, height: v} = HLb({
                    options: f,
                    rotation: a_( () => b.rotation),
                    gu: k,
                    width: a_( () => b.Lc),
                    Cj: g,
                    Nj: h,
                    Fa: e,
                    j: b,
                    ec: c,
                    hb: d,
                    koa: !0
                });
                return {
                    u6: ZZ(function() {
                        return l.visible ? YZ(t, {
                            Ln: n,
                            Mn: p,
                            fillColor: D(a.Re.color),
                            uu: q.get(),
                            EF: "rgb(240, 241, 245)",
                            kha: "rgb(255, 255, 255)",
                            Q4: "rgb(255, 255, 255)",
                            R4: "rgba(28, 39, 48, 0.5)",
                            MZa: r.get(),
                            ariaLabel: O("XKR/qg")
                        }) : null
                    }),
                    height: a_( () => l.visible ? v.get() : 0),
                    t$: l,
                    cp: () => m.cp(l),
                    nk: u => m.nk(l, u),
                    Vh: u => m.Vh(l, u)
                }
            }
            ;
            NLb = function({control: a, j: b, Wk: c, hb: d, Jf: e, config: f, tl: g, Mf: h}) {
                const k = new LLb(c,f,g)
                  , l = new MLb(b,h);
                c = m => l.DF(k, m, a.type);
                switch (a.type) {
                case "buttons":
                    f = a_( () => k.value);
                    g = a_( () => l.options(k));
                    const {XCa: m, height: n} = yLb({
                        type: "single",
                        value: f,
                        options: g,
                        DF: c,
                        Jf: e,
                        j: b,
                        hb: d,
                        width: a_( () => b.Lc)
                    });
                    return {
                        u6: ZZ(function() {
                            if (k.visible)
                                return YZ(m, {
                                    fillColor: D(a.Re.color)
                                })
                        }),
                        height: a_( () => k.visible ? n.get() : 0),
                        t$: k,
                        cp: () => l.cp(k),
                        nk: p => l.nk(k, p),
                        Vh: p => l.Vh(k, p)
                    };
                case "dropdown":
                    throw Error("Dropdown component is unimplemented");
                default:
                    throw new E(a);
                }
            }
            ;
            OLb = function(a, b, c) {
                const d = a.j;
                var e = a.ec;
                const f = a.hb
                  , g = a.Fa
                  , h = a.tl;
                a = a.Mf;
                switch (b.type) {
                case "single":
                    switch (e = b.control.ref,
                    e.type) {
                    case "buttons":
                        return NLb({
                            control: e,
                            j: d,
                            Wk: c,
                            hb: f,
                            Jf: g.Jf,
                            config: b,
                            tl: h,
                            Mf: a
                        });
                    case "dropdown":
                        throw Error(`Unimplemented control type: ${e.type}`);
                    default:
                        throw new E(e);
                    }
                case "multi":
                    switch (e = b.control.ref,
                    e.type) {
                    case "buttons":
                        return CLb({
                            control: e,
                            j: d,
                            Wk: c,
                            hb: f,
                            Jf: g.Jf,
                            config: b,
                            tl: h,
                            Mf: a
                        });
                    case "dropdown":
                        throw Error(`Unimplemented control type: ${e.type}`);
                    default:
                        throw new E(e);
                    }
                case "range":
                    const k = b.control.ref;
                    switch (k.type) {
                    case "slider":
                        return KLb({
                            control: k,
                            j: d,
                            ec: e,
                            hb: f,
                            Fa: g,
                            Wk: c,
                            config: b,
                            tl: h,
                            Mf: a
                        });
                    default:
                        throw new E(k.type);
                    }
                default:
                    throw new E(b);
                }
            }
            ;
            __c.RLb = function({j: a, B7: b, ec: c, hb: d, Fa: e, bindings: f, JD: g, vT: h, ZH: k, Mf: l}) {
                const m = u => h({
                    mj: f.zw(a),
                    values: f.y_(a),
                    eb: u,
                    config: a.Va
                })
                  , n = u => k({
                    mj: f.zw(a),
                    values: f.y_(a),
                    index: u,
                    config: a.Va
                })
                  , p = c === null || c === void 0 ? void 0 : c.filters;
                var q = () => new PLb(a,b,c,p != null,d,e,f,g,m,n,l);
                const r = p ? p.Hd(a.Va, q) : q()
                  , t = new QLb;
                q = WKb({
                    store: r
                });
                const v = a_( () => r.height);
                return {
                    tDa: q,
                    XKa: v,
                    INb: () => a_( () => 0),
                    nk: u => t.nk(r, u),
                    Vh: u => t.Vh(r, u)
                }
            }
            ;
            SLb = function({component: a, top: b}) {
                const c = b_( () => ({
                    left: 0,
                    top: b.get()
                }), [b]);
                return YZ(__c.QW, {
                    getPosition: c,
                    children: a
                })
            }
            ;
            ULb = function({rows: a}) {
                return a.map(b => TLb(SLb, {
                    ...b,
                    key: b.key
                }))
            }
            ;
            VLb = function(a, b) {
                return a.map( ({key: c, height: d}) => {
                    var e;
                    return ((e = b === null || b === void 0 ? void 0 : b.get(c)) !== null && e !== void 0 ? e : d).get()
                }
                )
            }
            ;
            __c.YLb = function({j: a, rows: b, spacing: c, offset: d=a_( () => 0), minHeight: e=a_( () => 0), align: f=a_( () => "start")}) {
                const g = new WLb(a,b,c,d,e,f)
                  , h = new XLb;
                a = a_( () => h.height(g));
                return {
                    aEa: ZZ(function({Rxb: k}) {
                        const l = a_( () => {
                            const m = h.position(g, k);
                            return b.get().map( (n, p) => ({
                                ...n,
                                top: a_( () => m[p])
                            }))
                        }
                        );
                        return YZ(ULb, {
                            rows: l.get()
                        })
                    }),
                    height: a,
                    a1a: (k=new Map) => a_( () => h.height(g, k))
                }
            }
            ;
            f_ = __webpack_require__(519427);
            g_ = f_.action;
            a_ = f_.computed;
            h_ = f_.observable;
            var i_ = __webpack_require__(443763)
              , pLb = i_.Fragment
              , YZ = i_.jsx
              , c_ = i_.jsxs;
            var ZZ = __webpack_require__(446474).Pi;
            var j_ = __webpack_require__(875604)
              , TLb = j_.createElement
              , b_ = j_.useCallback
              , d_ = j_.useId
              , k_ = j_.useRef
              , e_ = j_.useState;
            var l_ = __webpack_require__(635872).Om;
            var UKb;
            __c.m_ = class {
                static A(a) {
                    Q(a, {
                        A7: a_,
                        laa: a_,
                        config: a_,
                        mj: a_,
                        valid: a_,
                        values: a_,
                        vr: a_,
                        eb: a_,
                        Eeb: a_,
                        kFa: a_,
                        bq: a_
                    })
                }
                get ha() {
                    const a = this.config;
                    if (a != null)
                        return __c.RKb(a)
                }
                get A7() {
                    return this.config != null ? this.bindings.BA(this.j) : void 0
                }
                get laa() {
                    const a = this.A7;
                    if (a != null)
                        for (const c of this.qMa) {
                            var b = a[c];
                            b = Array.isArray(b) ? b[0] : b;
                            if (b != null)
                                return b
                        }
                }
                get config() {
                    if (!this.j.wra)
                        return this.j.Va
                }
                get mj() {
                    if (this.config != null) {
                        if (this.ha !== "COUNT")
                            return this.bindings.zw(this.j);
                        var a = {
                            ...this.bindings.zw(this.j)
                        };
                        for (const b of this.Gha)
                            a[b] = (0,
                            __c.Ga)();
                        return a
                    }
                }
                get valid() {
                    return __c.pGb(this.mj)
                }
                get values() {
                    const a = this.eb;
                    if (this.config != null && a != null) {
                        if (this.ha !== "COUNT" || this.laa == null)
                            return this.bindings.y_(this.j);
                        var b = {
                            ...this.bindings.y_(this.j)
                        };
                        for (const d of this.Gha) {
                            const e = b[d];
                            if (Array.isArray(e)) {
                                var c = a[d];
                                C(Array.isArray(c), "Expected series to be an array");
                                b[d] = c.map(f => {
                                    const g = e.find(h => h.id === f.id);
                                    if (g == null)
                                        return XZ({
                                            id: f.id,
                                            label: f.label,
                                            values: f.values.map( () => {}
                                            )
                                        });
                                    C(g.kind === "number", "Expected number values");
                                    return XZ(g)
                                }
                                )
                            } else
                                e == null ? (c = D(a[d], "Expected invalid one binding to have a non-null series result"),
                                C(!Array.isArray(c), "Expected invalid one binding to have one series"),
                                b[d] = XZ({
                                    id: c.id,
                                    label: c.label,
                                    values: c.values.map( () => {}
                                    )
                                })) : (C(e.kind === "number", "Expected number values"),
                                b[d] = XZ(e))
                        }
                        return b
                    }
                }
                get vr() {
                    const a = this.values;
                    return a != null ? this.bindings.uLa(a) : void 0
                }
                get eb() {
                    let a = this.A7;
                    if (a != null) {
                        var b = this.laa;
                        if (this.ha !== "COUNT" || b == null)
                            return a;
                        a = {
                            ...a
                        };
                        for (const c of this.Gha) {
                            const d = a[c];
                            d == null ? a[c] = b : Array.isArray(d) && d.length === 0 && (a[c] = [b])
                        }
                        return a
                    }
                }
                get Eeb() {
                    return this.laa != null
                }
                get kFa() {
                    var a, b, c = this.A7;
                    if (c != null) {
                        var d = {};
                        for (const k of Object.keys(this.bindings.ge))
                            d[k] = (0,
                            __c.Ga)();
                        if (this.ha == null)
                            return d;
                        var [e,f] = this.qMa;
                        if (f == null)
                            return d;
                        var [g,h] = [c[e], c[f]];
                        c = (a = Array.isArray(g) ? g[0] : g) === null || a === void 0 ? void 0 : a.id;
                        a = (b = Array.isArray(h) ? h[0] : h) === null || b === void 0 ? void 0 : b.id;
                        return c == null || a == null || c === a ? d : {
                            ...d,
                            [f]: (0,
                            __c.Ha)([{
                                kind: 1
                            }])
                        }
                    }
                }
                get bq() {
                    var a, b = this.ha;
                    if (b === "AVERAGE" || b === "MEDIAN") {
                        b = this.Gha[0];
                        var c = (a = this.values) === null || a === void 0 ? void 0 : a[b];
                        if (c != null) {
                            a = Array.isArray(c) ? c[0] : c;
                            C(a.kind === "number", "Expected number values");
                            var [d,e] = a.format
                              , f = e.gf
                              , g = e.Zi;
                            return h => {
                                var k, l;
                                const m = Math.min(__c.OFb(h), 2);
                                var n, p;
                                return __c.oA(h, {
                                    ...d,
                                    decimal: {
                                        length: Math.max(m, (n = (k = d.decimal) === null || k === void 0 ? void 0 : k.length) !== null && n !== void 0 ? n : 0),
                                        padding: (p = (l = d.decimal) === null || l === void 0 ? void 0 : l.padding) !== null && p !== void 0 ? p : 0
                                    }
                                }, {
                                    ...e,
                                    gf: f !== null && f !== void 0 ? f : __c.PFb(g != null ? __c.ES.has(g) ? g : void 0 : void 0)
                                })
                            }
                        }
                    }
                }
                constructor(a, b, c, d) {
                    this.j = a;
                    this.bindings = b;
                    this.Gha = c;
                    this.qMa = d;
                    __c.m_.A(this)
                }
            }
            ;
            UKb = [{
                prefix: void 0,
                suffix: void 0,
                Tf: 0,
                locale: void 0,
                Mc: !1,
                tJ: !1,
                decimal: void 0,
                minimumIntegerDigits: 1,
                percent: !1,
                currency: void 0
            }, {
                Zi: void 0,
                gf: void 0
            }];
            var QLb = class {
                nk(a, b) {
                    return a.filters.every(c => a.zdb(c)(b))
                }
                Vh(a, b) {
                    return a.filters.every(c => a.ydb(c)(b))
                }
            }
            ;
            var cLb = class {
                height(a) {
                    var b = a.uE;
                    const c = a.NF
                      , d = a.Bn;
                    b = c ? [b.Mi.get(), c.Mi.get()] : [b.Mi.get()];
                    ({E5: a} = KZ(YKb(this, a, b)));
                    return a + 2 * d + 1.5
                }
                pka(a) {
                    var b = a.width
                      , c = a.uE
                      , d = a.NF;
                    const e = a.Bn
                      , f = b - .75
                      , g = 2 * e;
                    b -= g + 1.5;
                    if (!d || c.cx.get() === d.cx.get() && c.Mi.get() === d.Mi.get()) {
                        var h = ZKb(this, a, c.Mi.get(), b);
                        d = h.text;
                        a = h.actualBoundingBoxAscent;
                        b = h.width + g + 1.5;
                        h = a + h.actualBoundingBoxDescent + g;
                        return [{
                            x: $Z(c.cx.get() - b / 2, f - b),
                            y: .75,
                            width: b,
                            label: d,
                            ZM: a,
                            height: h,
                            Bn: e
                        }]
                    }
                    h = [c, d];
                    var k = h.map(x => x.Mi.get());
                    k = YKb(this, a, k);
                    const l = k.map( ({width: x}) => x)
                      , {cB: m, E5: n} = KZ(k);
                    h = h.map( (x, y) => {
                        y = l[y] + g + 1.5;
                        const z = n + g + 1.5;
                        return {
                            x: $Z(x.cx.get() - y / 2, f - y),
                            y: .75,
                            width: y,
                            label: x.Mi.get(),
                            ZM: m,
                            height: z,
                            Bn: e
                        }
                    }
                    );
                    const [p,q] = h;
                    if (p.x + p.width <= q.x)
                        return h;
                    const {e1: r, c1: t, ZM: v, label: u} = aLb(this, a, h.map(x => x.label), l, b);
                    a = r + g + 1.5;
                    b = t + g + 1.5;
                    c = c.cx.get() + (d.cx.get() - c.cx.get()) / 2;
                    return [{
                        x: $Z(c - a / 2, f - a),
                        y: .75,
                        width: a,
                        label: u,
                        ZM: v,
                        height: b,
                        Bn: e
                    }]
                }
                constructor(a) {
                    this.Fa = a
                }
            }
            ;
            var dLb = ({pka: a, hb: b}) => YZ("g", {
                children: a.map( (c, d) => YZ(ZLb, {
                    ...c,
                    hb: b
                }, d))
            })
              , ZLb = ({x: a, y: b, height: c, width: d, label: e, ZM: f, Bn: g, hb: h}) => c_("g", {
                transform: `translate(${a} ${b})`,
                children: [YZ("rect", {
                    x: "0",
                    y: "0",
                    rx: "4",
                    ry: "4",
                    width: d,
                    height: c,
                    stroke: "rgba(57, 76, 96, 0.15)",
                    strokeWidth: 1.5,
                    fill: "rgb(255, 255, 255)"
                }), YZ("g", {
                    transform: `translate(0 ${g + .75})`,
                    children: YZ(h, {
                        x: d / 2,
                        y: f,
                        fill: "rgb(13, 18, 22)",
                        textAnchor: "middle",
                        dominantBaseline: "alphabetic",
                        children: e
                    })
                })]
            });
            var bLb = class {
                get j() {
                    return this.da.j
                }
                get uE() {
                    return this.da.uE.get()
                }
                get NF() {
                    var a;
                    return (a = this.da.NF) === null || a === void 0 ? void 0 : a.get()
                }
                get width() {
                    return this.da.width.get()
                }
                get Bn() {
                    return this.j.fontSize / 3
                }
                constructor(a) {
                    this.da = a
                }
            }
            ;
            var hLb = ZZ( ({uE: a, NF: b, min: c, max: d, width: e, height: f, fillColor: g, EF: h, uu: k, kha: l, D_a: m, Q4: n, R4: p, MZa: q, ariaLabel: r, Yi: t, JE: v, LN: u, LE: x, KE: y, MN: z}) => {
                const A = k_(null)
                  , B = k_(null)
                  , G = k_(null)
                  , [H,K] = e_("none")
                  , I = b_(aa => {
                    aa.stopPropagation();
                    u({
                        x: aa.clientX,
                        y: aa.clientY
                    }, {
                        jp: A,
                        Hv: B,
                        xw: G
                    })
                }
                , [u])
                  , L = b_(aa => {
                    aa.stopPropagation();
                    x();
                    window.removeEventListener("mousemove", I);
                    window.removeEventListener("mouseup", L)
                }
                , [x, I])
                  , P = b_(aa => {
                    aa.stopPropagation();
                    K("none");
                    v({
                        x: aa.clientX,
                        y: aa.clientY
                    }, {
                        jp: A,
                        Hv: B,
                        xw: G
                    });
                    window.addEventListener("mousemove", I);
                    window.addEventListener("mouseup", L)
                }
                , [I, L, v, K])
                  , S = b_(aa => {
                    aa.stopPropagation();
                    K("none");
                    aa = aa.touches[0];
                    v({
                        x: aa.clientX,
                        y: aa.clientY
                    }, {
                        jp: A,
                        Hv: B,
                        xw: G
                    })
                }
                , [v, K])
                  , U = b_(aa => {
                    aa.stopPropagation();
                    aa = aa.touches[0];
                    u({
                        x: aa.clientX,
                        y: aa.clientY
                    }, {
                        jp: A,
                        Hv: B,
                        xw: G
                    })
                }
                , [u])
                  , ba = b_(aa => {
                    aa.stopPropagation();
                    aa.touches.length === 0 && x()
                }
                , [x])
                  , ha = b_(aa => {
                    z(aa, {
                        jp: A,
                        Hv: B,
                        xw: G
                    })
                }
                , [z])
                  , oa = b_( () => {
                    y("lower")
                }
                , [y])
                  , ka = b_( () => {
                    y("upper")
                }
                , [y])
                  , ma = f / 2
                  , wa = b_( () => {
                    __c.Vx.Oo && K("auto")
                }
                , [K])
                  , W = b_( () => K("none"), [K]);
                return c_("g", {
                    tabIndex: 0,
                    onMouseDown: P,
                    onTouchStartCapture: S,
                    onTouchMoveCapture: U,
                    onTouchEndCapture: ba,
                    onKeyDown: ha,
                    "aria-valuemin": c,
                    "aria-valuemax": d,
                    "aria-label": r,
                    onFocus: wa,
                    onBlur: W,
                    style: {
                        cursor: t ? "grabbing" : "pointer",
                        outline: `${H} -webkit-focus-ring-color`
                    },
                    children: [YZ("rect", {
                        height: f,
                        width: e.get(),
                        fill: "transparent"
                    }), YZ(__c.iZ, {
                        ref: A,
                        color: h,
                        uu: k,
                        strokeWidth: m,
                        strokeColor: l,
                        x1: ma,
                        y1: ma,
                        x2: e.get() - ma,
                        y2: ma
                    }), YZ(__c.jZ, {
                        color: g,
                        uu: k,
                        x1: a.cx,
                        y1: ma,
                        x2: b.cx,
                        y2: ma
                    }), YZ(__c.hZ, {
                        ref: B,
                        fill: n,
                        strokeColor: p,
                        strokeWidth: q,
                        onKeyDown: oa,
                        ...a
                    }), YZ(__c.hZ, {
                        ref: G,
                        fill: n,
                        strokeColor: p,
                        strokeWidth: q,
                        onKeyDown: ka,
                        ...b
                    })]
                })
            }
            );
            var gLb = class {
                static A(a) {
                    Q(a, {
                        JE: g_,
                        LE: g_,
                        KE: g_,
                        Q3: g_
                    })
                }
                height(a, b) {
                    const c = a.gu;
                    a = a.rX;
                    return b.get() + a + c
                }
                P4(a, b) {
                    const c = a.width
                      , d = a.gu
                      , e = a.min
                      , f = a.max
                      , g = a.Cj
                      , h = a.Nj
                      , k = a.gN;
                    a = a.rP;
                    const l = a_( () => c)
                      , m = d / 2
                      , n = b === "lower" ? g : h
                      , p = b === "lower" ? k : a;
                    return {
                        cx: a_( () => __c.bZ(n, e, f, m, l)),
                        cy: m,
                        r: m,
                        value: a_( () => n),
                        Mi: a_( () => p)
                    }
                }
                JE(a, b, c, d) {
                    var e = this.VK(a, b, c.jp);
                    if (!a.Yi && e) {
                        b = e.ai;
                        e = e.LO;
                        var {onDragStart: f, ...g} = d;
                        a.Yi = !0;
                        this.ec && (this.ec.gE = !0);
                        f === null || f === void 0 || f();
                        this.Q3(a, b, c);
                        this.Kr(a, e, c, g)
                    }
                }
                LN(a, b, c, d) {
                    (b = this.VK(a, b, c.jp)) && this.Kr(a, b.LO, c, d)
                }
                LE(a, b) {
                    a.Yi = !1;
                    setTimeout(g_( () => {
                        this.ec && (this.ec.gE = !1)
                    }
                    ), 0);
                    b === null || b === void 0 || b()
                }
                KE(a, b) {
                    a.Ny = b
                }
                MN(a, b, c, d) {
                    var e = c.xw;
                    const f = c.jp
                      , g = a.min
                      , h = a.max;
                    var k = a.step
                      , l = D(this.UD(a, c.Hv, f));
                    e = D(this.UD(a, e, f));
                    k = k !== "any" ? k : 1;
                    l = a.Ny === "lower" ? l : e;
                    b.key === "Home" || b.metaKey && b.key === "ArrowLeft" ? this.Kr(a, g, c, d) : b.key === "End" || b.metaKey && b.key === "ArrowRight" ? this.Kr(a, h, c, d) : b.key === "ArrowLeft" && l - k >= g ? this.Kr(a, l - k, c, d) : b.key === "ArrowRight" && l + k <= h && this.Kr(a, l + k, c, d)
                }
                VK(a, b, c) {
                    var d;
                    if (c = (d = c.current) === null || d === void 0 ? void 0 : d.getBoundingClientRect()) {
                        var e = a.min
                          , f = a.max;
                        d = a.step;
                        a = __c.cZ(c, b.x, b.y, a.rotation);
                        a = e + __c.$Y(Math.min(Math.max(a, 0), 1), f - e);
                        b = __c.aZ(a, d);
                        return {
                            ai: a,
                            LO: b
                        }
                    }
                }
                Q3(a, b, c) {
                    var d = c.jp;
                    const e = c.xw;
                    c = D(this.UD(a, c.Hv, d));
                    d = D(this.UD(a, e, d));
                    a.Ny = b <= c ? "lower" : b >= d ? "upper" : b < c + (d - c) / 2 ? "lower" : "upper"
                }
                UD(a, b, c) {
                    b = D(b.current).getBoundingClientRect();
                    return (a = this.VK(a, {
                        x: b.left + b.width / 2,
                        y: b.top + b.height / 2
                    }, c)) ? a.LO : void 0
                }
                Kr(a, b, c, d) {
                    const e = a.Ny;
                    var f = a.min
                      , g = a.max
                      , h = a.step;
                    const k = c.jp
                      , l = c.xw;
                    h = h !== "any" ? h : 1;
                    c = D(this.UD(a, c.Hv, k));
                    a = D(this.UD(a, l, k));
                    f = Math.max(f, Math.min(b, a - h));
                    b = Math.min(Math.max(c + h, b), g);
                    !e || e === "lower" && Math.abs(c - f) < .01 || e === "upper" && Math.abs(a - b) < .01 || (g = d.Ln,
                    d = d.Mn,
                    e === "lower" ? g(f) : d(b))
                }
                constructor(a) {
                    this.ec = a;
                    gLb.A(this)
                }
            }
            ;
            var fLb = class {
                static A(a) {
                    Q(a, {
                        Yi: h_.ref,
                        Ny: h_.ref,
                        rX: a_
                    })
                }
                get gu() {
                    return this.da.gu.get()
                }
                get rX() {
                    return this.da.j.fontSize * .3
                }
                get min() {
                    return this.da.min.get()
                }
                get max() {
                    return this.da.max.get()
                }
                get Cj() {
                    return this.da.Cj.get()
                }
                get Nj() {
                    return this.da.Nj.get()
                }
                get gN() {
                    return this.da.gN.get()
                }
                get rP() {
                    return this.da.rP.get()
                }
                get width() {
                    return this.da.width.get()
                }
                get rotation() {
                    return this.da.rotation
                }
                get step() {
                    return this.da.step.get()
                }
                constructor(a) {
                    this.da = a;
                    this.Yi = (fLb.A(this),
                    !1);
                    this.Ny = "lower"
                }
            }
            ;
            var kLb = class {
                static A(a) {
                    Q(a, {
                        Ln: g_,
                        Mn: g_,
                        cp: g_
                    })
                }
                Ln(a, b) {
                    a.Cj = b;
                    this.ho({
                        NN: "row_slider",
                        action: "drag",
                        ON: {
                            mga: !0,
                            orientation: "row",
                            fp: -1,
                            ns: -1
                        },
                        OI: {
                            mga: !0,
                            orientation: "row",
                            fp: -1,
                            ns: -1
                        }
                    })
                }
                Mn(a, b) {
                    a.Nj = b;
                    this.ho({
                        NN: "row_slider",
                        action: "drag",
                        ON: {
                            k$: !0,
                            orientation: "row",
                            fp: -1,
                            ns: -1
                        },
                        OI: {
                            k$: !0,
                            orientation: "row",
                            fp: -1,
                            ns: -1
                        }
                    })
                }
                cp(a) {
                    a.config.dg = {
                        start: a.Cj,
                        end: a.Nj
                    }
                }
                Vh(a, b) {
                    const c = a.Cj
                      , d = a.Nj;
                    a = a.Iha.get(b);
                    return a == null || c == null || d == null ? !0 : a >= c && a <= d
                }
                constructor(a, b) {
                    this.j = a;
                    this.fa = b;
                    this.ho = (kLb.A(this),
                    void 0);
                    this.ho = SKb(this.fa, {
                        Op: a.Op,
                        Zj: a.Zj,
                        Rz: __c.IZ(a.Va)
                    })
                }
            }
            ;
            var jLb = class {
                static A(a) {
                    Q(a, {
                        nI: h_.ref,
                        sP: h_.ref,
                        values: a_,
                        isDirty: a_
                    })
                }
                get bounds() {
                    const a = this.Wk.bounds;
                    if (a) {
                        var b = Math.pow(10, this.cJa);
                        return {
                            min: Math.floor(a.min * b) / b,
                            max: Math.ceil(a.max * b) / b
                        }
                    }
                }
                get ya() {
                    return this.Wk.ya
                }
                get cJa() {
                    var a, b, c;
                    return (c = (b = this.ya) === null || b === void 0 ? void 0 : (a = b.format[0].decimal) === null || a === void 0 ? void 0 : a.length) !== null && c !== void 0 ? c : 0
                }
                get Iha() {
                    return this.Wk.Iha
                }
                get visible() {
                    return this.bounds != null
                }
                get min() {
                    var a;
                    return (a = this.bounds) === null || a === void 0 ? void 0 : a.min
                }
                get max() {
                    var a;
                    return (a = this.bounds) === null || a === void 0 ? void 0 : a.max
                }
                get step() {
                    return 1 / Math.pow(10, this.cJa)
                }
                get values() {
                    var a, b;
                    if (this.min && this.max) {
                        var c, d = (c = this.tl ? this.nI : (a = this.config.dg) === null || a === void 0 ? void 0 : a.start) !== null && c !== void 0 ? c : this.min, e;
                        a = (e = this.tl ? this.sP : (b = this.config.dg) === null || b === void 0 ? void 0 : b.end) !== null && e !== void 0 ? e : this.max;
                        d = Math.min(Math.max(d, this.min), this.max);
                        a = Math.min(Math.max(a, this.min), this.max);
                        d === a && (d - this.step >= this.min ? d -= this.step : a + this.step <= this.max && (a += this.step));
                        return {
                            lower: d,
                            upper: a
                        }
                    }
                }
                get Cj() {
                    var a;
                    return (a = this.values) === null || a === void 0 ? void 0 : a.lower
                }
                set Cj(a) {
                    this.nI = a
                }
                get Nj() {
                    var a;
                    return (a = this.values) === null || a === void 0 ? void 0 : a.upper
                }
                set Nj(a) {
                    this.sP = a
                }
                get gN() {
                    var a = this.Cj
                      , b = this.ya;
                    if ((a = a === null || a === void 0 ? void 0 : a.toString()) && b)
                        return b = __c.kX(b, a),
                        b.ok ? b.value : a
                }
                get rP() {
                    var a = this.Nj, b = this.ya, c;
                    a = (c = a === null || a === void 0 ? void 0 : a.toString()) !== null && c !== void 0 ? c : "";
                    if (!b)
                        return a;
                    b = __c.kX(b, a);
                    return b.ok ? b.value : a
                }
                get isDirty() {
                    var a, b;
                    const c = this.config
                      , d = this.Nj;
                    return this.visible ? this.Cj !== ((a = c.dg) === null || a === void 0 ? void 0 : a.start) || d !== ((b = c.dg) === null || b === void 0 ? void 0 : b.end) : !1
                }
                constructor(a, b, c) {
                    var d, e;
                    this.Wk = a;
                    this.config = b;
                    this.tl = c;
                    this.nI = (jLb.A(this),
                    void 0);
                    this.nI = (d = b.dg) === null || d === void 0 ? void 0 : d.start;
                    this.sP = (e = b.dg) === null || e === void 0 ? void 0 : e.end
                }
            }
            ;
            var $Lb = class {
                static A(a) {
                    Q(a, {
                        options: a_
                    })
                }
                get options() {
                    var a;
                    const b = this.key
                      , c = this.vT
                      , d = (a = this.bindings.eb) === null || a === void 0 ? void 0 : a[b];
                    if (d == null)
                        return [];
                    a = Array.isArray(d) ? d : [d];
                    const e = __c.XX(a.map(f => f.label));
                    return a.map( (f, g) => {
                        if (f.label != null && f.label !== "")
                            var h = f.label;
                        else {
                            h = g;
                            if (h < 26)
                                h = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(h);
                            else {
                                var k = [];
                                do
                                    k.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(h % 26)),
                                    h = Math.floor(h / 26) - 1;
                                while (h >= 0);
                                h = k.reverse().join("")
                            }
                            h = __c.Gb("QsdX+g", [h])
                        }
                        return {
                            direction: "column",
                            label: h,
                            key: e[g],
                            eb: f,
                            index: g
                        }
                    }
                    ).filter( ({eb: f}) => c(f))
                }
                constructor(a, b, c) {
                    this.bindings = a;
                    this.key = b;
                    this.vT = c;
                    this.orientation = ($Lb.A(this),
                    "column")
                }
            }
            ;
            var aMb = class {
                static A(a) {
                    Q(a, {
                        values: a_,
                        Iha: a_,
                        bounds: a_,
                        ya: a_
                    })
                }
                get values() {
                    var a;
                    const b = (a = this.JD.values) === null || a === void 0 ? void 0 : a.filter_by.get(this.filter);
                    if (b && b.kind === "number")
                        return b.values.map( (c, d) => c ? {
                            value: c,
                            index: d
                        } : void 0).filter(__c.wb).filter( ({index: c}) => this.ZH(c))
                }
                get Iha() {
                    return this.values ? new Map(this.values.map( ({index: a, value: b}) => [a, b])) : new Map
                }
                get bounds() {
                    var a = this.values;
                    if (a !== null && a !== void 0 && a.length)
                        return a = a.map( ({value: b}) => b),
                        {
                            min: Math.min(...a),
                            max: Math.max(...a)
                        }
                }
                get ya() {
                    var a;
                    const b = (a = this.JD.values) === null || a === void 0 ? void 0 : a.filter_by.get(this.filter);
                    if (b && b.kind === "number")
                        return b
                }
                constructor(a, b, c) {
                    this.filter = a;
                    this.JD = b;
                    this.ZH = c;
                    aMb.A(this)
                }
            }
            ;
            var bMb = class {
                static A(a) {
                    Q(a, {
                        options: a_
                    })
                }
                get options() {
                    var a, b = (a = this.JD.values) === null || a === void 0 ? void 0 : a.filter_by.get(this.filter);
                    if (b && b.kind === "string") {
                        b = b.values.map( (c, d) => ({
                            value: c,
                            index: d
                        })).filter( (c, d) => this.ZH(d));
                        a = new Map;
                        for (const {value: c, index: d} of b)
                            (b = a.get(c)) ? (b.indices.add(d),
                            c === "" && (b.label = O("71B9bw"))) : a.set(c, {
                                direction: "row",
                                label: c !== "" ? c : __c.Gb("uDOZTg", [d + 1]),
                                key: c,
                                indices: new Set([d]),
                                index: d
                            });
                        return Array.from(a.values())
                    }
                }
                constructor(a, b, c) {
                    this.filter = a;
                    this.JD = b;
                    this.ZH = c;
                    this.orientation = (bMb.A(this),
                    "row")
                }
            }
            ;
            var qLb = __c.GX(__c.$kb);
            var rLb = __c.GX(__c.dlb);
            var xLb = class {
                static A(a) {
                    Q(a, {
                        Gda: g_,
                        zda: g_,
                        xSa: g_
                    })
                }
                buttons(a) {
                    var b = a.options;
                    const c = a.values;
                    var d = a.width;
                    const e = uLb(this, a)
                      , {cB: f} = KZ(e);
                    d = vLb(a, e.map( ({width: k}) => k), d);
                    const g = [];
                    let h = 0;
                    for (const [k,{label: l, value: m}] of b.entries())
                        b = e[k].width + 2 * d,
                        g.push({
                            label: l,
                            value: m,
                            x: h,
                            ZM: f,
                            width: b,
                            selected: c.has(m)
                        }),
                        h += b + a.qla;
                    return g
                }
                height(a) {
                    const b = a.Bn
                      , c = a.XC;
                    if (!a.options.length)
                        return 0;
                    ({E5: a} = KZ(uLb(this, a)));
                    return a + 2 * b + 2 * c
                }
                $v(a, b) {
                    if (!b.length)
                        return 0;
                    b = b[b.length - 1];
                    return Math.min(a.$v, b.x + b.width - (a.width - 2 * a.XC))
                }
                pqa(a, b) {
                    a = this.$v(a, b);
                    return Math.abs(a) > .01
                }
                hasNext(a, b) {
                    const c = a.width
                      , d = this.$v(a, b);
                    b = b[b.length - 1];
                    return d + (c - 2 * a.XC) < b.x + b.width - .01
                }
                tfa(a, b, c, d, e) {
                    const f = c + b * (d === "prev" ? -1 : 1);
                    if (d === "next") {
                        d = a.findIndex(g => g.x + g.width > f);
                        if (d < 0 || a[d].x + a[d].width === e)
                            return e - b;
                        if (c === a[d].x)
                            return c + b;
                        a[d].x + a[d].width < f && (d += 1);
                        return a[d].x + b <= e ? a[d].x : e - b
                    }
                    d = a.findIndex(g => g.x >= f);
                    d > 0 && c === a[d].x && --d;
                    return a[d].x || 0
                }
                Gda(a, b) {
                    const c = a.width
                      , d = this.$v(a, b)
                      , e = b[b.length - 1];
                    a.$v = this.tfa(b, c - 2 * a.XC, d, "prev", e.x + e.width)
                }
                zda(a, b) {
                    const c = a.width
                      , d = this.$v(a, b)
                      , e = b[b.length - 1];
                    a.$v = this.tfa(b, c - 2 * a.XC, d, "next", e.x + e.width)
                }
                xSa(a, b, c) {
                    const d = a.$v;
                    if (__c.Vx.Oo && c !== d) {
                        b = b[b.length - 1];
                        b = b.x + b.width;
                        var e = a.width - 2 * a.XC;
                        a.$v = c > d ? Math.min(c, b - e) : c
                    }
                }
                constructor(a) {
                    this.Jf = a;
                    xLb.A(this)
                }
            }
            ;
            var wLb = class {
                static A(a) {
                    Q(a, {
                        values: a_,
                        $v: h_.ref,
                        Bn: a_,
                        XC: a_,
                        qla: a_,
                        Tca: a_
                    })
                }
                get j() {
                    return this.da.j
                }
                get options() {
                    return this.da.options.get()
                }
                get width() {
                    return this.da.width.get()
                }
                get values() {
                    if (this.da.type === "single") {
                        const a = this.da.value.get();
                        return a ? new Set([a]) : new Set
                    }
                    return this.da.values.get()
                }
                get Bn() {
                    return this.j.fontSize * .6
                }
                get XC() {
                    return this.j.fontSize / 6
                }
                get qla() {
                    return this.j.fontSize / 3
                }
                get Tca() {
                    return this.j.fontSize / 16
                }
                constructor(a) {
                    this.da = a;
                    this.$v = (wLb.A(this),
                    0)
                }
            }
            ;
            var BLb = class {
                static A(a) {
                    Q(a, {
                        DF: g_,
                        cp: g_
                    })
                }
                options(a) {
                    var b, c;
                    return (c = (b = a.options) === null || b === void 0 ? void 0 : b.map( ({label: d, key: e}) => ({
                        label: d,
                        value: e
                    }))) !== null && c !== void 0 ? c : []
                }
                DF(a, b, c) {
                    const d = this.options(a).length
                      , e = a.selectedOptions.size;
                    a.values.has(b) ? a.values.delete(b) : a.values.add(b);
                    this.ho({
                        NN: zLb(c, a.direction),
                        action: "select",
                        ON: {
                            orientation: a.direction,
                            fp: e,
                            ns: d
                        },
                        OI: {
                            orientation: a.direction,
                            fp: a.selectedOptions.size,
                            ns: d
                        }
                    })
                }
                cp(a) {
                    a.config.oD = Array.from(a.exa)
                }
                nk(a, b) {
                    const c = a.selectedOptions;
                    return a.options && c !== null && c !== void 0 && c.size ? Array.from(c).some(d => d.direction !== "column" ? !0 : d.eb === b) : !0
                }
                Vh(a, b) {
                    const c = a.selectedOptions;
                    return a.options && c !== null && c !== void 0 && c.size ? Array.from(c).some(d => d.direction !== "row" ? !0 : d.indices.has(b)) : !0
                }
                ho(a) {
                    var b;
                    (b = this.fa) === null || b === void 0 || b.ho({
                        ...a,
                        Op: this.j.Op,
                        Zj: this.j.Zj,
                        Rz: __c.IZ(this.j.Va)
                    })
                }
                constructor(a, b) {
                    this.j = a;
                    this.fa = b;
                    BLb.A(this)
                }
            }
            ;
            var ALb = class {
                static A(a) {
                    Q(a, {
                        values: h_.shallow,
                        options: a_,
                        hTa: a_,
                        selectedOptions: a_,
                        exa: a_,
                        isDirty: a_,
                        direction: a_
                    })
                }
                get visible() {
                    return this.options != null && this.options.length > 0
                }
                get options() {
                    return this.Wk.options
                }
                get hTa() {
                    var a;
                    return new Set((a = this.options) === null || a === void 0 ? void 0 : a.filter(__c.wb).map(b => b.key))
                }
                get selectedOptions() {
                    var a;
                    const b = this.tl ? this.values : new Set(this.config.oD);
                    return new Set((a = this.options) === null || a === void 0 ? void 0 : a.filter(c => b.has(c.key)))
                }
                get exa() {
                    return new Set(Array.from(this.selectedOptions).map(a => a.key))
                }
                get isDirty() {
                    const a = this.exa;
                    if (!this.visible)
                        return !1;
                    const b = cMb.intersection(new Set(this.config.oD), this.hTa);
                    return !(b.size === a.size && cMb.isSubsetOf(b, a))
                }
                get direction() {
                    return this.Wk.orientation
                }
                constructor(a, b, c) {
                    this.Wk = a;
                    this.config = b;
                    this.tl = c;
                    this.type = (ALb.A(this),
                    "text_multi");
                    this.values = new Set(b.oD)
                }
            }
              , cMb = class {
                static intersection(a, b) {
                    const c = new Set;
                    for (const d of a)
                        b.has(d) && c.add(d);
                    return c
                }
                static isSubsetOf(a, b) {
                    for (const c of a)
                        if (!b.has(c))
                            return !1;
                    return !0
                }
            }
            ;
            var GLb = ZZ( ({uE: a, NF: b, width: c, height: d, fillColor: e, EF: f, uu: g, kha: h, D_a: k, Q4: l, R4: m, ariaLabel: n, JE: p, LN: q, LE: r, KE: t, MN: v, Yi: u, Gjb: x, Mx: y}) => {
                const z = k_(null)
                  , A = k_(null)
                  , B = k_(null)
                  , [G,H] = e_("none")
                  , K = b_(W => {
                    W.stopPropagation();
                    q({
                        x: W.clientX,
                        y: W.clientY
                    }, {
                        jp: z,
                        Hv: A,
                        xw: B
                    })
                }
                , [q])
                  , I = b_(W => {
                    W.stopPropagation();
                    r();
                    window.removeEventListener("mousemove", K);
                    window.removeEventListener("mouseup", I)
                }
                , [K, r])
                  , L = b_(W => {
                    W.stopPropagation();
                    H("none");
                    p({
                        x: W.clientX,
                        y: W.clientY
                    }, {
                        jp: z,
                        Hv: A,
                        xw: B
                    });
                    window.addEventListener("mousemove", K);
                    window.addEventListener("mouseup", I)
                }
                , [K, I, p, H])
                  , P = b_(W => {
                    H("none");
                    W.stopPropagation();
                    W = W.touches[0];
                    p({
                        x: W.clientX,
                        y: W.clientY
                    }, {
                        jp: z,
                        Hv: A,
                        xw: B
                    })
                }
                , [p, H])
                  , S = b_(W => {
                    W.stopPropagation();
                    W = W.touches[0];
                    q({
                        x: W.clientX,
                        y: W.clientY
                    }, {
                        jp: z,
                        Hv: A,
                        xw: B
                    })
                }
                , [q])
                  , U = b_(W => {
                    W.stopPropagation();
                    W.touches.length === 0 && r()
                }
                , [r])
                  , ba = b_(W => {
                    v(W)
                }
                , [v])
                  , ha = b_( () => {
                    t("lower")
                }
                , [t])
                  , oa = b_( () => {
                    t("upper")
                }
                , [t])
                  , ka = d / 2
                  , ma = b_( () => {
                    __c.Vx.Oo && H("auto")
                }
                , [H])
                  , wa = b_( () => H("none"), [H]);
                return c_("g", {
                    tabIndex: 0,
                    onMouseDown: L,
                    onTouchStartCapture: P,
                    onTouchMoveCapture: S,
                    onTouchEndCapture: U,
                    onKeyDown: ba,
                    "aria-valuemin": x,
                    "aria-valuemax": y,
                    "aria-label": n,
                    onFocus: ma,
                    onBlur: wa,
                    style: {
                        cursor: u ? "grabbing" : "pointer",
                        outline: `${G} -webkit-focus-ring-color`
                    },
                    children: [YZ("rect", {
                        height: d,
                        width: c.get(),
                        fill: "transparent"
                    }), YZ(__c.iZ, {
                        ref: z,
                        color: f,
                        uu: g,
                        strokeWidth: k,
                        strokeColor: h,
                        x1: ka,
                        y1: ka,
                        x2: c.get() - ka,
                        y2: ka
                    }), YZ(__c.jZ, {
                        color: e,
                        uu: g,
                        x1: a.cx,
                        y1: ka,
                        x2: b.cx,
                        y2: ka
                    }), YZ(__c.hZ, {
                        ref: A,
                        fill: l,
                        strokeColor: m,
                        onKeyDown: ha,
                        ...a
                    }), YZ(__c.hZ, {
                        ref: B,
                        fill: l,
                        strokeColor: m,
                        onKeyDown: oa,
                        ...b
                    })]
                })
            }
            );
            var ELb = class {
                static A(a) {
                    Q(a, {
                        Yi: h_.ref,
                        Ny: h_.ref,
                        rX: a_,
                        eca: a_,
                        Bha: a_,
                        Mx: a_
                    })
                }
                get gu() {
                    return this.da.gu.get()
                }
                get rX() {
                    return this.da.j.fontSize * .3
                }
                get options() {
                    return this.da.options
                }
                get eca() {
                    const a = this.da.Cj
                      , b = this.da.options.get().findIndex(c => c.value === a.get());
                    return b === -1 ? 0 : Math.min(b, this.Mx - (this.Mx === 0 ? 0 : 1))
                }
                get Bha() {
                    const a = this.da.Nj
                      , b = this.da.options.get().findIndex(c => c.value === a.get());
                    return b === -1 ? 0 : Math.min(b, this.Mx)
                }
                get Mx() {
                    return Math.max(this.options.get().length - 1, 0)
                }
                get width() {
                    return this.da.width.get()
                }
                get rotation() {
                    return this.da.rotation
                }
                constructor(a) {
                    this.da = a;
                    this.Yi = (ELb.A(this),
                    !1);
                    this.Ny = "lower"
                }
            }
            ;
            var dMb = O("549lAQ")
              , FLb = class {
                static A(a) {
                    Q(a, {
                        JE: g_,
                        LE: g_,
                        KE: g_,
                        Q3: g_,
                        Kr: g_
                    })
                }
                height(a, b) {
                    const c = a.gu;
                    a = a.rX;
                    return b.get() + a + c
                }
                P4(a, b) {
                    const c = a.width
                      , d = a.gu
                      , e = a.eca
                      , f = a.Bha
                      , g = a.Mx
                      , h = a_( () => c)
                      , k = d / 2
                      , l = b === "lower" ? e : f;
                    return {
                        cx: a_( () => __c.bZ(l, 0, g, k, h)),
                        cy: k,
                        r: k,
                        value: a_( () => l),
                        Mi: a_( () => {
                            const m = a.options;
                            return !m.get().length || l < 0 || l >= m.get().length ? dMb : m.get()[l].label
                        }
                        )
                    }
                }
                JE(a, b, c, d) {
                    var e = this.VK(a, b, c.jp);
                    if (!a.Yi && e) {
                        b = e.ai;
                        e = e.LO;
                        var {onDragStart: f, ...g} = d;
                        a.Yi = !0;
                        this.ec && (this.ec.gE = !0);
                        f === null || f === void 0 || f();
                        this.Q3(a, b, c);
                        this.Kr(a, e, g)
                    }
                }
                LN(a, b, c, d) {
                    (b = this.VK(a, b, c.jp)) && this.Kr(a, b.LO, d)
                }
                LE(a, b) {
                    a.Yi = !1;
                    setTimeout(g_( () => {
                        this.ec && (this.ec.gE = !1)
                    }
                    ), 0);
                    b === null || b === void 0 || b()
                }
                KE(a, b) {
                    a.Ny = b
                }
                MN(a, b, c) {
                    const d = a.Mx;
                    var e = a.eca;
                    const f = a.Bha;
                    e = a.Ny === "lower" ? e : f;
                    b.key === "Home" || b.metaKey && b.key === "ArrowLeft" ? this.Kr(a, 0, c) : b.key === "End" || b.metaKey && b.key === "ArrowRight" ? this.Kr(a, d, c) : b.key === "ArrowLeft" && e - 1 >= 0 ? this.Kr(a, e - 1, c) : b.key === "ArrowRight" && e + 1 <= d && this.Kr(a, e + 1, c)
                }
                VK(a, b, c) {
                    var d;
                    if (c = (d = c.current) === null || d === void 0 ? void 0 : d.getBoundingClientRect())
                        return d = a.Mx,
                        a = __c.cZ(c, b.x, b.y, a.rotation),
                        a = 0 + __c.$Y(Math.min(Math.max(a, 0), 1), d - 0),
                        b = __c.aZ(a, 1),
                        {
                            ai: a,
                            LO: b
                        }
                }
                Q3(a, b, c) {
                    var d = c.jp;
                    const e = c.xw;
                    c = D(this.UD(a, c.Hv, d));
                    d = D(this.UD(a, e, d));
                    a.Ny = b <= c ? "lower" : b >= d ? "upper" : b < c + (d - c) / 2 ? "lower" : "upper"
                }
                UD(a, b, c) {
                    b = D(b.current).getBoundingClientRect();
                    return (a = this.VK(a, {
                        x: b.left + b.width / 2,
                        y: b.top + b.height / 2
                    }, c)) ? a.LO : void 0
                }
                Kr(a, b, c) {
                    var d = a.eca;
                    const e = a.Bha
                      , f = a.Ny
                      , g = Math.max(0, Math.min(b, e - 1));
                    b = Math.min(Math.max(d + 1, b), a.Mx);
                    !f || f === "lower" && d === g || f === "upper" && e === b || (d = c.Ln,
                    c = c.Mn,
                    f === "lower" ? d(D(DLb(a, g))) : c(D(DLb(a, b))))
                }
                constructor(a) {
                    this.ec = a;
                    FLb.A(this)
                }
            }
            ;
            var JLb = class {
                static A(a) {
                    Q(a, {
                        Ln: g_,
                        Mn: g_,
                        cp: g_
                    })
                }
                Ln(a, b) {
                    var c, d, e;
                    const f = a.options.length
                      , g = (c = a.lz) === null || c === void 0 ? void 0 : c.index;
                    c = (d = a.Lx) === null || d === void 0 ? void 0 : d.index;
                    a.Cj = b;
                    b = (e = a.Lx) === null || e === void 0 ? void 0 : e.index;
                    g != null && c != null && b != null && this.ho({
                        NN: a.direction === "column" ? "col_slider" : "row_slider",
                        action: "drag",
                        ON: {
                            mga: !0,
                            orientation: a.direction,
                            fp: g - c + 1,
                            ns: f
                        },
                        OI: {
                            mga: !0,
                            orientation: a.direction,
                            fp: g - b + 1,
                            ns: f
                        }
                    })
                }
                Mn(a, b) {
                    var c, d, e;
                    const f = a.options.length
                      , g = (c = a.Lx) === null || c === void 0 ? void 0 : c.index;
                    c = (d = a.lz) === null || d === void 0 ? void 0 : d.index;
                    a.Nj = b;
                    b = (e = a.lz) === null || e === void 0 ? void 0 : e.index;
                    g != null && c != null && b != null && this.ho({
                        NN: a.direction === "column" ? "col_slider" : "row_slider",
                        action: "drag",
                        ON: {
                            k$: !0,
                            orientation: a.direction,
                            fp: c - g + 1,
                            ns: f
                        },
                        OI: {
                            k$: !0,
                            orientation: a.direction,
                            fp: b - g + 1,
                            ns: f
                        }
                    })
                }
                cp(a) {
                    var b, c;
                    a.config.dg = {
                        start: (b = a.Lx) === null || b === void 0 ? void 0 : b.key,
                        end: (c = a.lz) === null || c === void 0 ? void 0 : c.key
                    }
                }
                options(a) {
                    return a.options.map( ({label: b, key: c}) => ({
                        label: b,
                        value: c
                    }))
                }
                nk(a, b) {
                    return (b = a.lTa.get(b)) && a.Lx && a.lz ? b.index >= a.Lx.index && b.index <= a.lz.index : !0
                }
                Vh(a, b) {
                    return (b = a.kTa.get(b)) && a.Lx && a.lz ? b.index >= a.Lx.index && b.index <= a.lz.index : !0
                }
                constructor(a, b) {
                    this.j = a;
                    this.fa = b;
                    this.ho = (JLb.A(this),
                    void 0);
                    this.ho = SKb(this.fa, {
                        Op: a.Op,
                        Zj: a.Zj,
                        Rz: __c.IZ(a.Va)
                    })
                }
            }
            ;
            var ILb = class {
                static A(a) {
                    Q(a, {
                        nI: h_.ref,
                        sP: h_.ref,
                        direction: a_,
                        options: a_,
                        B2: a_,
                        lTa: a_,
                        kTa: a_,
                        selectedOptions: a_,
                        isDirty: a_
                    })
                }
                get visible() {
                    return this.options != null && this.options.length > 0
                }
                get Cj() {
                    var a;
                    const b = this.tl ? this.nI : (a = this.config.dg) === null || a === void 0 ? void 0 : a.start;
                    if (this.options.length)
                        return b == null ? this.options[0].key : b
                }
                set Cj(a) {
                    this.nI = a
                }
                get Nj() {
                    var a;
                    const b = this.tl ? this.sP : (a = this.config.dg) === null || a === void 0 ? void 0 : a.end;
                    if (this.options.length)
                        return b == null ? this.options[this.options.length - 1].key : b
                }
                set Nj(a) {
                    this.sP = a
                }
                get direction() {
                    return this.Wk.orientation
                }
                get options() {
                    var a;
                    return (a = this.Wk.options) !== null && a !== void 0 ? a : []
                }
                get B2() {
                    var a;
                    return new Map((a = this.options) === null || a === void 0 ? void 0 : a.map(b => [b.key, b]))
                }
                get lTa() {
                    var a;
                    return new Map((a = this.options) === null || a === void 0 ? void 0 : a.map(b => {
                        if (b.direction === "column")
                            return [b.eb, b]
                    }
                    ).filter(__c.wb))
                }
                get kTa() {
                    var a;
                    return new Map((a = this.options) === null || a === void 0 ? void 0 : a.flatMap(b => {
                        if (b.direction === "row")
                            return Array.from(b.indices).map(c => [c, b])
                    }
                    ).filter(__c.wb))
                }
                get selectedOptions() {
                    const a = this.options;
                    var b = this.B2
                      , c = this.Cj;
                    const d = this.Nj;
                    if (a.length)
                        return c = c ? b.get(c) : void 0,
                        b = d ? b.get(d) : void 0,
                        c || (c = a[0]),
                        b || (b = a[a.length - 1]),
                        c.index > b.index && ([c,b] = [b, c]),
                        {
                            Lx: c,
                            lz: b
                        }
                }
                get Lx() {
                    var a;
                    return (a = this.selectedOptions) === null || a === void 0 ? void 0 : a.Lx
                }
                get lz() {
                    var a;
                    return (a = this.selectedOptions) === null || a === void 0 ? void 0 : a.lz
                }
                get isDirty() {
                    var a, b, c, d;
                    const e = this.config
                      , f = this.Lx
                      , g = this.lz;
                    return this.visible ? ((f === null || f === void 0 ? void 0 : f.key) !== ((a = e.dg) === null || a === void 0 ? void 0 : a.start) || (g === null || g === void 0 ? void 0 : g.key) !== ((b = e.dg) === null || b === void 0 ? void 0 : b.end)) && ((f === null || f === void 0 ? void 0 : f.key) !== ((c = e.dg) === null || c === void 0 ? void 0 : c.end) || (g === null || g === void 0 ? void 0 : g.key) !== ((d = e.dg) === null || d === void 0 ? void 0 : d.start)) : !1
                }
                constructor(a, b, c) {
                    var d, e;
                    this.Wk = a;
                    this.config = b;
                    this.tl = c;
                    this.type = (ILb.A(this),
                    "text_range");
                    this.nI = (d = b.dg) === null || d === void 0 ? void 0 : d.start;
                    this.sP = (e = b.dg) === null || e === void 0 ? void 0 : e.end
                }
            }
            ;
            var MLb = class {
                static A(a) {
                    Q(a, {
                        DF: g_,
                        cp: g_
                    })
                }
                options(a) {
                    var b, c;
                    return (c = (b = a.options) === null || b === void 0 ? void 0 : b.map( ({label: d, key: e}) => ({
                        label: d,
                        value: e
                    }))) !== null && c !== void 0 ? c : []
                }
                DF(a, b, c) {
                    const d = this.options(a).length
                      , e = a.value ? 1 : 0;
                    a.value = a.value !== b ? b : void 0;
                    this.ho({
                        NN: zLb(c, a.direction),
                        action: "select",
                        ON: {
                            orientation: a.direction,
                            fp: e,
                            ns: d
                        },
                        OI: {
                            orientation: a.direction,
                            fp: a.jV ? 1 : 0,
                            ns: d
                        }
                    })
                }
                cp(a) {
                    var b;
                    a.config.fA = (b = a.jV) === null || b === void 0 ? void 0 : b.key
                }
                nk(a, b) {
                    const c = a.jV;
                    return a.options && c && c.direction === "column" ? c.eb === b : !0
                }
                Vh(a, b) {
                    const c = a.jV;
                    return a.options && c && c.direction === "row" ? c.indices.has(b) : !0
                }
                ho(a) {
                    var b;
                    (b = this.fa) === null || b === void 0 || b.ho({
                        ...a,
                        Op: this.j.Op,
                        Zj: this.j.Zj,
                        Rz: __c.IZ(this.j.Va)
                    })
                }
                constructor(a, b) {
                    this.j = a;
                    this.fa = b;
                    MLb.A(this)
                }
            }
            ;
            var LLb = class {
                static A(a) {
                    Q(a, {
                        value: h_.ref,
                        options: a_,
                        B2: a_,
                        jV: a_,
                        isDirty: a_,
                        direction: a_
                    })
                }
                get visible() {
                    return this.options != null && this.options.length > 0
                }
                get options() {
                    return this.Wk.options
                }
                get B2() {
                    var a;
                    return new Map((a = this.options) === null || a === void 0 ? void 0 : a.map(b => [b.key, b]))
                }
                get jV() {
                    const a = this.tl ? this.value : this.config.fA;
                    if (a != null)
                        return this.B2.get(a)
                }
                get isDirty() {
                    const a = this.jV;
                    return this.visible ? (a === null || a === void 0 ? void 0 : a.key) !== this.config.fA : !1
                }
                get direction() {
                    return this.Wk.orientation
                }
                constructor(a, b, c) {
                    this.Wk = a;
                    this.config = b;
                    this.tl = c;
                    this.type = (LLb.A(this),
                    "text_single");
                    this.value = b.fA
                }
            }
            ;
            var PLb = class {
                static A(a) {
                    Q(a, {
                        filters: a_,
                        height: a_
                    })
                }
                get filters() {
                    var a, b;
                    return (b = (a = this.j.Va.G.ref) === null || a === void 0 ? void 0 : a.filters.toArray()) !== null && b !== void 0 ? b : []
                }
                get s1a() {
                    return this.j.fontSize * .8
                }
                get height() {
                    return this.filters.reduce( (a, b, c, d) => {
                        b = this.QLa(b);
                        return a + b + (c !== d.length - 1 ? this.s1a : 0)
                    }
                    , 0)
                }
                constructor(a, b, c, d, e, f, g, h, k, l, m) {
                    this.j = a;
                    this.B7 = b;
                    this.ec = c;
                    this.tl = d;
                    this.hb = e;
                    this.Fa = f;
                    this.bindings = g;
                    this.JD = h;
                    this.vT = k;
                    this.ZH = l;
                    this.Mf = m;
                    this.Qbb = (PLb.A(this),
                    new __c.AX(this.j,this.JD));
                    this.RD = l_(n => {
                        var p = this.j
                          , q = this.bindings
                          , r = this.B7
                          , t = this.Qbb
                          , v = this.vT
                          , u = this.ZH;
                        switch (n.type) {
                        case "column":
                            a: switch (p = p.Zj,
                            p) {
                            case "GROUPED_COLUMN":
                            case "STACKED_COLUMN":
                            case "GROUPED_ROW":
                            case "STACKED_ROW":
                            case "PIE":
                            case "DONUT":
                            case "LINE":
                            case "STACKED_AREA":
                            case "BAR_RACE":
                            case "HISTOGRAM":
                            case "RADAR":
                            case "FUNNEL":
                                C("value_by"in q.ge);
                                q = "value_by";
                                break a;
                            case "SCATTERPLOT":
                            case "BUBBLEPLOT":
                            case "DOTPLOT":
                            case "GROUPED_DOTPLOT":
                                C("y_value_by"in q.ge);
                                q = "y_value_by";
                                break a;
                            case "PACKED_CIRCLES":
                            case "TREEMAP":
                                C("group_by"in q.ge);
                                q = "group_by";
                                break a;
                            default:
                                throw new E(p);
                            }
                            r = new $Lb(r,q,v);
                            return OLb(this, n.config.ref, r);
                        case "row-text":
                            return r = new bMb(n,t,u),
                            OLb(this, n.config.ref, r);
                        case "row-numeric":
                            r = new aMb(n,t,u);
                            a: {
                                n = n.config.ref;
                                v = this.j;
                                q = this.ec;
                                p = this.hb;
                                t = this.Fa;
                                u = this.tl;
                                const x = this.Mf;
                                switch (n.type) {
                                case "range":
                                    const y = n.control.ref;
                                    switch (y.type) {
                                    case "slider":
                                        n = lLb({
                                            control: y,
                                            j: v,
                                            ec: q,
                                            hb: p,
                                            Fa: t,
                                            Wk: r,
                                            tl: u,
                                            config: n,
                                            Mf: x
                                        });
                                        break a;
                                    default:
                                        throw new E(y.type);
                                    }
                                default:
                                    throw new E(n.type);
                                }
                                n = void 0
                            }
                            return n;
                        default:
                            throw new E(n);
                        }
                    }
                    );
                    this.jdb = l_(n => this.RD(n).u6);
                    this.vt = l_(n => this.RD(n).t$);
                    l_(n => this.RD(n).cp);
                    this.QLa = l_(n => this.RD(n).height.get());
                    this.zdb = l_(n => this.RD(n).nk);
                    this.ydb = l_(n => this.RD(n).Vh)
                }
            }
            ;
            var XLb = class {
                position(a, b) {
                    const c = a.spacing
                      , d = a.offset
                      , e = a.minHeight
                      , f = a.align;
                    return a.yva.position(VLb(a.rows, b), {
                        spacing: c,
                        offset: d,
                        minHeight: e,
                        align: f
                    })
                }
                height(a, b) {
                    const c = a.spacing
                      , d = a.offset
                      , e = a.minHeight
                      , f = a.align;
                    return a.yva.height(VLb(a.rows, b), {
                        spacing: c,
                        offset: d,
                        minHeight: e,
                        align: f
                    })
                }
            }
            ;
            var WLb = class {
                static A(a) {
                    Q(a, {
                        rows: a_,
                        spacing: a_,
                        offset: a_,
                        minHeight: a_,
                        align: a_
                    })
                }
                get rows() {
                    return this.Mja.get()
                }
                get spacing() {
                    return this.aX.get()
                }
                get offset() {
                    return this.mG.get()
                }
                get minHeight() {
                    return this.S4a.get()
                }
                get align() {
                    return this.I4a.get()
                }
                constructor(a, b, c, d, e, f) {
                    this.j = a;
                    this.Mja = b;
                    this.aX = c;
                    this.mG = d;
                    this.S4a = e;
                    this.I4a = f;
                    this.yva = (WLb.A(this),
                    void 0);
                    this.yva = new __c.LKb(a)
                }
            }
            ;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/0a60a4574077d0cc.js.map

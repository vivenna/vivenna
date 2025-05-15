(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[92646], {

    /***/
    418410: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(190240);
        __web_req__(726917);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var lKb, mKb, pKb, tKb, sKb, uKb, qKb, vKb, rKb, wKb, yKb, zKb, AKb;
            lKb = function(a) {
                return __c.Fs({
                    selected_items: a.fp,
                    total_items: a.ns,
                    orientation: a.orientation,
                    start_value: a.mga,
                    end_value: a.k$
                })
            }
            ;
            __c.IZ = function(a) {
                switch (a.type) {
                case "STACKED_COLUMN":
                case "STACKED_ROW":
                case "STACKED_AREA":
                    return a.Od;
                case "GROUPED_COLUMN":
                case "GROUPED_ROW":
                case "PIE":
                case "DONUT":
                case "LINE":
                case "SCATTERPLOT":
                case "BUBBLEPLOT":
                case "DOTPLOT":
                case "GROUPED_DOTPLOT":
                case "PACKED_CIRCLES":
                case "TREEMAP":
                case "BAR_RACE":
                case "HISTOGRAM":
                case "RADAR":
                case "POPULATION_PYRAMID":
                case "FUNNEL":
                case "DUMBBELL":
                case "LOLLIPOP":
                case "SUNBURST":
                case "TIME_SERIES":
                case "PROGRESS":
                case "PICTOGRAM":
                    break;
                default:
                    throw new __c.E(a);
                }
            }
            ;
            mKb = function(a, {store: b, Sbb: c, Bub: d, lt: e, Op: f, Zj: g, Rz: h}) {
                var k;
                const l = b.yH.size;
                b.yH.has(c) ? b.yH.delete(c) : b.TF.size === d - 1 ? b.yH.clear() : b.yH.add(c);
                (k = a.fa) === null || k === void 0 || k.ho({
                    NN: "legend",
                    action: "click",
                    Op: f,
                    Zj: g,
                    Rz: h,
                    ON: {
                        fp: l,
                        ns: d,
                        orientation: e
                    },
                    OI: {
                        fp: b.yH.size,
                        ns: d,
                        orientation: e
                    }
                })
            }
            ;
            pKb = function({Zb: a, hb: b, g5: c, d5: d}) {
                return JZ(a, {
                    children: ({Yc: e, key: f, pi: g}) => nKb(oKb, {
                        item: g,
                        hb: b,
                        ...e,
                        key: f,
                        g5: c,
                        d5: d
                    })
                })
            }
            ;
            __c.KZ = function(a) {
                const b = Math.max(...a.map( ({actualBoundingBoxAscent: c}) => c));
                a = Math.max(...a.map( ({actualBoundingBoxDescent: c}) => c));
                return {
                    cB: b,
                    E5: b + a
                }
            }
            ;
            __c.LZ = function(a, b) {
                return a.LH == null && a.dN.TF.size === 0 ? !1 : !(a.LH === b || a.dN.TF.has(b))
            }
            ;
            tKb = function(a) {
                var b = a.bj.pk
                  , c = a.Fa
                  , d = a.gRa
                  , e = a.j;
                const f = e.Ze
                  , g = e.fontSize;
                e = e.fontWeight;
                if (b.every(n => n.text.length === 0))
                    return {
                        items: [],
                        height: 0
                    };
                d = c.jn({
                    Mj: b.map(n => n.text),
                    fontFamily: f,
                    fontSize: g,
                    fontWeight: e,
                    maxWidth: d
                });
                const {cB: h, E5: k} = __c.KZ(d);
                c = Math.max(a.xZa, k) + 2 * a.wT.height;
                b = qKb({
                    store: a,
                    mtb: d,
                    pk: b,
                    YU: c,
                    GBa: k,
                    cB: h
                });
                d = rKb(a, b);
                const {items: l, height: m} = sKb({
                    store: a,
                    rows: d,
                    YU: c,
                    align: d.length === b.length ? "start" : "center"
                });
                return {
                    items: l,
                    height: m
                }
            }
            ;
            sKb = function({store: a, rows: b, YU: c, align: d}) {
                var e = a.sWa;
                const f = a.E8;
                var g = {
                    spacing: .5,
                    offset: 0,
                    minHeight: 0,
                    align: "start"
                };
                const h = e.position(b.map( () => c), g);
                e = e.height(b.map( () => c), g);
                g = b.map(l => f.width(l.map(m => m.width), {
                    spacing: .5,
                    offset: 0,
                    minWidth: 0,
                    align: "start"
                }));
                const k = Math.max(...g);
                return {
                    items: b.flatMap( (l, m) => uKb({
                        store: a,
                        na: l,
                        YU: c,
                        y: h[m],
                        align: d,
                        gjb: k
                    })),
                    height: e
                }
            }
            ;
            uKb = function({store: a, na: b, y: c, align: d, gjb: e}) {
                const f = a.E8;
                a = a.width.get();
                d = {
                    spacing: .5,
                    offset: d === "start" ? (a - e) / 2 : 0,
                    minWidth: a,
                    align: d
                };
                const g = f.position(b.map(h => h.width), d);
                return b.map( (h, k) => ({
                    ...h,
                    x: g[k],
                    y: c
                }))
            }
            ;
            qKb = function({store: a, mtb: b, pk: c, YU: d, GBa: e, cB: f}) {
                return b.map( (g, h) => {
                    var k;
                    const l = (k = c[h].uA) !== null && k !== void 0 ? k : c[h].Up;
                    if (b.length < 2)
                        k = "none";
                    else {
                        k = a.dN;
                        var m = a.LH;
                        k = k.TF.has(l) ? "active" : m === l ? "hovered" : k.TF.size ? "inactive" : "none"
                    }
                    return vKb({
                        store: a,
                        label: g,
                        uA: l,
                        Up: c[h].Up,
                        gxa: k,
                        YU: d,
                        GBa: e,
                        cB: f
                    })
                }
                )
            }
            ;
            vKb = function({store: a, label: b, uA: c, Up: d, gxa: e, YU: f, GBa: g, cB: h}) {
                const k = a.wT
                  , l = a.j.fontSize;
                a = wKb(a, b.width);
                return {
                    label: {
                        ...b,
                        $F: b.actualBoundingBoxLeft,
                        vz: f / 2 + h - g / 2 - k.height,
                        fontSize: l
                    },
                    uA: c,
                    Up: d,
                    width: a,
                    height: f,
                    Ecb: e === "inactive" ? .5 : 1,
                    gxa: e
                }
            }
            ;
            rKb = function(a, b) {
                if (b.length === 0)
                    return [];
                const c = a.E8;
                a = a.width.get();
                const d = {
                    spacing: .5,
                    offset: 0,
                    minWidth: 0,
                    align: "start"
                }
                  , [e,...f] = b;
                b = [e];
                const g = [b];
                for (const h of f)
                    c.width([...b, h].map(k => k.width), d) < a ? b.push(h) : (b = [h],
                    g.push(b));
                return g
            }
            ;
            wKb = function(a, b) {
                const c = a.E8
                  , d = a.wT;
                a = [a.xZa, b].filter(e => e !== 0);
                return c.width(a, {
                    spacing: 1,
                    offset: 0,
                    minWidth: 0,
                    align: "start"
                }) + 2 * d.width
            }
            ;
            yKb = function({j: a, M: b, xa: c, Er: d}) {
                a = new __c.YW({
                    xb: {
                        enter: {
                            Er: {
                                value: f => f
                            }
                        },
                        update: {
                            Er: {
                                value: f => f
                            }
                        },
                        exit: {
                            Er: {
                                value: f => f,
                                oX: !0
                            }
                        },
                        Xe: {
                            Er: !0
                        }
                    },
                    data: MZ( () => d.get() === 0 ? [] : [d.get()]),
                    M: b,
                    j: a,
                    tj: 0,
                    El: 0,
                    ne: 500,
                    Qe: 500,
                    pe: 500,
                    getKey: () => "legendHeight"
                });
                const {yw: e} = c(a);
                return function() {
                    const f = e();
                    return xKb( () => MZ( () => {
                        var g, h;
                        return (h = (g = f.get().at(0)) === null || g === void 0 ? void 0 : g.Yc.Er.get()) !== null && h !== void 0 ? h : 0
                    }
                    ), [f])
                }
            }
            ;
            zKb = function({items: a, M: b, xa: c, j: d, hb: e, g5: f, d5: g}) {
                a = new __c.YW({
                    xb: {
                        enter: {
                            x: {
                                value: l => l.x - l.QJa,
                                zb: !0
                            },
                            y: {
                                value: l => l.y,
                                zb: !0
                            },
                            width: {
                                value: l => l.width,
                                zb: !0
                            },
                            height: {
                                value: l => l.height,
                                zb: !0
                            },
                            SJ: {
                                value: l => l.mw.radius,
                                zb: !0
                            },
                            Fga: {
                                value: l => l.mw.Ja
                            },
                            Dga: {
                                value: l => l.mw.Ca
                            },
                            Ega: {
                                value: l => l.mw.Da
                            },
                            Iba: {
                                value: l => l.label.$F,
                                zb: !0
                            },
                            Jba: {
                                value: l => l.label.vz,
                                zb: !0
                            },
                            RN: {
                                value: l => l.padding.width,
                                zb: !0
                            },
                            Uda: {
                                value: l => l.padding.height,
                                zb: !0
                            },
                            gap: {
                                value: l => l.gap,
                                zb: !0
                            },
                            fontSize: {
                                value: l => l.label.fontSize,
                                zb: !0
                            },
                            opacity: {
                                value: () => 0,
                                end: .5,
                                zb: !0
                            }
                        },
                        update: {
                            x: {
                                value: l => l.x
                            },
                            y: {
                                value: l => l.y
                            },
                            width: {
                                value: l => l.width
                            },
                            height: {
                                value: l => l.height
                            },
                            SJ: {
                                value: l => l.mw.radius
                            },
                            Fga: {
                                value: l => l.mw.Ja,
                                zb: !0
                            },
                            Dga: {
                                value: l => l.mw.Ca,
                                zb: !0
                            },
                            Ega: {
                                value: l => l.mw.Da,
                                zb: !0
                            },
                            Iba: {
                                value: l => l.label.$F
                            },
                            Jba: {
                                value: l => l.label.vz
                            },
                            RN: {
                                value: l => l.padding.width
                            },
                            Uda: {
                                value: l => l.padding.height
                            },
                            gap: {
                                value: l => l.gap,
                                zb: !0
                            },
                            fontSize: {
                                value: l => l.label.fontSize
                            },
                            opacity: {
                                value: l => l.Ecb,
                                end: 0
                            }
                        },
                        exit: {
                            x: {
                                value: l => l.x + l.QJa,
                                zb: !0
                            },
                            y: {
                                value: l => l.y,
                                zb: !0
                            },
                            width: {
                                value: l => l.width,
                                zb: !0
                            },
                            height: {
                                value: l => l.height,
                                zb: !0
                            },
                            SJ: {
                                value: l => l.mw.radius,
                                zb: !0
                            },
                            Fga: {
                                value: l => l.mw.Ja
                            },
                            Dga: {
                                value: l => l.mw.Ca
                            },
                            Ega: {
                                value: l => l.mw.Da
                            },
                            Iba: {
                                value: l => l.label.$F,
                                zb: !0
                            },
                            Jba: {
                                value: l => l.label.vz,
                                zb: !0
                            },
                            RN: {
                                value: l => l.padding.width,
                                zb: !0
                            },
                            Uda: {
                                value: l => l.padding.height,
                                zb: !0
                            },
                            gap: {
                                value: l => l.gap,
                                zb: !0
                            },
                            fontSize: {
                                value: l => l.label.fontSize,
                                zb: !0
                            },
                            opacity: {
                                value: () => 0,
                                end: .5,
                                zb: !0
                            }
                        },
                        Xe: {
                            x: !0,
                            y: !0,
                            width: !0,
                            height: !0,
                            SJ: !0,
                            Fga: !1,
                            Dga: !1,
                            Ega: !1,
                            Iba: !0,
                            Jba: !0,
                            RN: !0,
                            Uda: !0,
                            gap: !0,
                            fontSize: !0,
                            opacity: !1
                        }
                    },
                    data: a,
                    M: b,
                    j: d,
                    ne: 500,
                    Qe: 500,
                    pe: 500,
                    getKey: l => l.Up
                });
                const {Zb: h} = c(a)
                  , k = __c.XW(e, new Set(["x", "y", "fontSize", "opacity"]));
                return () => JZ(pKb, {
                    Zb: h,
                    hb: k,
                    g5: f,
                    d5: g
                })
            }
            ;
            AKb = {
                Ad: "chart_filter_interacted",
                Be(a) {
                    return __c.Fs({
                        option_type: a.NN,
                        action: a.action,
                        chart_id: a.Op,
                        chart_type: a.Zj,
                        chart_type_variant: a.Rz,
                        option_value_before: lKb(a.ON),
                        option_value_after: lKb(a.OI),
                        editing_context: a.Sc == null ? void 0 : __c.Gs(a.Sc)
                    })
                }
            };
            __c.LS.prototype.ho = __c.ea(7, function(a) {
                this.Hb.track(AKb, a)
            });
            var NZ = __webpack_require__(519427)
              , BKb = NZ.action
              , MZ = NZ.computed
              , OZ = NZ.observable;
            var CKb = __webpack_require__(443763)
              , JZ = CKb.jsx
              , DKb = CKb.jsxs;
            var PZ = __webpack_require__(875604)
              , nKb = PZ.createElement
              , EKb = PZ.useCallback
              , xKb = PZ.useMemo;
            var FKb = class {
                static A(a) {
                    __c.Q(a, {
                        yH: OZ.ref,
                        TF: MZ
                    })
                }
                get TF() {
                    if (!this.tV.get())
                        return new Set;
                    const a = this.keys.get();
                    return new Set([...this.yH].filter(b => a.includes(b)))
                }
                constructor(a, b) {
                    this.keys = a;
                    this.tV = b;
                    this.yH = (FKb.A(this),
                    OZ.set())
                }
            }
              , GKb = class {
                constructor(a) {
                    this.fa = a
                }
            }
            ;
            var HKb = {
                none: "rgba(13, 18, 22, 0)",
                hovered: "rgba(64, 87, 109, 0.07)",
                active: "rgba(57, 76, 96, 0.15)",
                inactive: "rgba(13, 18, 22, 0)"
            }
              , IKb = __c.XW("rect", new Set(["width", "height", "opacity", "rx"]))
              , JKb = __c.XW("circle", new Set(["cx", "cy", "r", "fill", "opacity"]))
              , oKb = ({item: {label: a, uA: b, gxa: c}, hb: d, x: e, y: f, width: g, height: h, SJ: k, Fga: l, Dga: m, Ega: n, Iba: p, Jba: q, RN: r, Uda: t, gap: v, fontSize: u, opacity: x, g5: y, d5: z}) => {
                const A = MZ( () => __c.Jt(new __c.Dt(l.get(),m.get(),n.get())))
                  , B = EKb( () => ({
                    left: e.get(),
                    top: f.get()
                }), [e, f])
                  , G = EKb( () => ({
                    left: r.get(),
                    top: t.get()
                }), [r, t])
                  , H = MZ( () => k.get() + v.get() + p.get());
                a = DKb(__c.QW, {
                    getPosition: B,
                    children: [JZ(IKb, {
                        width: g,
                        height: h,
                        opacity: MZ( () => 1),
                        rx: MZ( () => h.get() * .2),
                        fill: HKb[c],
                        style: {
                            transition: "fill 0.15s ease-in-out"
                        }
                    }), DKb(__c.QW, {
                        getPosition: G,
                        children: [JZ(JKb, {
                            cx: k,
                            cy: MZ( () => h.get() / 2 - t.get()),
                            r: k,
                            fill: A,
                            opacity: x
                        }), JZ(d, {
                            x: H,
                            y: q,
                            dominantBaseline: "alphabetic",
                            textAnchor: "start",
                            opacity: x,
                            fontSize: u,
                            children: a.text
                        })]
                    })]
                });
                return JZ(__c.DX, {
                    onClick: () => y(b),
                    children: JZ("g", {
                        onMouseEnter: () => z(b),
                        onMouseLeave: () => z(b),
                        children: a
                    })
                })
            }
            ;
            var QZ = class {
                static A(a) {
                    __c.Q(a, {
                        URa: MZ,
                        spacing: MZ,
                        HHa: MZ,
                        FLa: MZ,
                        I: MZ,
                        width: MZ,
                        alignmentOffset: MZ,
                        offset: MZ
                    })
                }
                get URa() {
                    return this.Tw.filter(a => a !== 0)
                }
                get spacing() {
                    return this.aX * this.j.fontSize
                }
                get HHa() {
                    return this.Tw.reduce( (a, b) => a + b, 0)
                }
                get FLa() {
                    return this.Tw.length ? this.spacing * (this.URa.length - 1) : 0
                }
                get I() {
                    return this.HHa + this.FLa
                }
                get width() {
                    return Math.max(this.I, this.minWidth)
                }
                get alignmentOffset() {
                    const a = this.width - this.I;
                    switch (this.align) {
                    case "start":
                        return 0;
                    case "center":
                        return a / 2;
                    case "end":
                        return a;
                    default:
                        throw new __c.E(this.align);
                    }
                }
                get offset() {
                    return this.alignmentOffset + this.mG
                }
                constructor(a, b, c, d, e, f) {
                    this.j = a;
                    this.Tw = b;
                    this.aX = c;
                    this.mG = d;
                    this.minWidth = e;
                    this.align = f;
                    QZ.A(this)
                }
            }
              , KKb = class {
                position(a, {spacing: b, offset: c, minWidth: d, align: e}) {
                    a = new QZ(this.j,a,b,c,d,e);
                    b = [];
                    c = a.offset;
                    for (const f of a.Tw)
                        b.push(c),
                        f !== 0 && (c += f + a.spacing);
                    return b
                }
                width(a, {offset: b, spacing: c, minWidth: d, align: e}) {
                    return (new QZ(this.j,a,c,b,d,e)).width
                }
                constructor(a) {
                    this.j = a
                }
            }
            ;
            var RZ;
            RZ = class {
                static A(a) {
                    __c.Q(a, {
                        VRa: MZ,
                        spacing: MZ,
                        rWa: MZ,
                        ELa: MZ,
                        W: MZ,
                        height: MZ,
                        alignmentOffset: MZ,
                        offset: MZ
                    })
                }
                get VRa() {
                    return this.Ij.filter(a => a !== 0)
                }
                get spacing() {
                    return this.aX * this.j.fontSize
                }
                get rWa() {
                    return this.Ij.reduce( (a, b) => a + b, 0)
                }
                get ELa() {
                    return this.Ij.length ? this.spacing * (this.VRa.length - 1) : 0
                }
                get W() {
                    return this.rWa + this.ELa
                }
                get height() {
                    return Math.max(this.W, this.minHeight)
                }
                get alignmentOffset() {
                    const a = this.height - this.W;
                    switch (this.align) {
                    case "start":
                        return 0;
                    case "center":
                        return a / 2;
                    case "end":
                        return a;
                    default:
                        throw new __c.E(this.align);
                    }
                }
                get offset() {
                    return this.alignmentOffset + this.mG
                }
                constructor(a, b, c, d, e, f) {
                    this.j = a;
                    this.Ij = b;
                    this.aX = c;
                    this.mG = d;
                    this.minHeight = e;
                    this.align = f;
                    RZ.A(this)
                }
            }
            ;
            __c.LKb = class {
                position(a, {spacing: b, offset: c, minHeight: d, align: e}) {
                    a = new RZ(this.j,a,b,c,d,e);
                    b = [];
                    c = a.offset;
                    for (const f of a.Ij)
                        b.push(c),
                        f !== 0 && (c += f + a.spacing);
                    return b
                }
                height(a, {offset: b, spacing: c, minHeight: d, align: e}) {
                    return (new RZ(this.j,a,c,b,d,e)).height
                }
                constructor(a) {
                    this.j = a
                }
            }
            ;
            var MKb = class {
                static A(a) {
                    __c.Q(a, {
                        LH: OZ.ref,
                        wT: MZ,
                        gRa: MZ,
                        Rz: MZ
                    })
                }
                get SJ() {
                    return .5 * this.j.fontSize
                }
                get xZa() {
                    return this.SJ * 2
                }
                get GOa() {
                    return 1 * this.j.fontSize
                }
                get wT() {
                    return {
                        width: .5 * this.j.fontSize,
                        height: .5 * this.j.fontSize
                    }
                }
                get gRa() {
                    const a = this.wT
                      , b = this.GOa
                      , c = this.SJ;
                    return this.width.get() - 2 * a.width - b - 2 * c
                }
                get Rz() {
                    return __c.IZ(this.j.Va)
                }
                constructor(a, b, c, d, e) {
                    this.j = a;
                    this.bj = b;
                    this.dN = c;
                    this.Fa = d;
                    this.width = e;
                    this.sWa = (MKb.A(this),
                    void 0);
                    this.LH = void 0;
                    this.sWa = new __c.LKb(a);
                    this.E8 = new KKb(a)
                }
            }
              , NKb = class {
                legend(a) {
                    const b = a.bj.En
                      , c = a.j
                      , d = c.fontSize;
                    if (!c.tV)
                        return {
                            items: [],
                            height: 0
                        };
                    const {items: e, height: f} = tKb(a);
                    return {
                        height: f,
                        items: e.map( (g, h) => {
                            h = b[h];
                            const {ma: k, a: l, b: m} = __c.Ht(h);
                            return {
                                ...g,
                                padding: a.wT,
                                gap: a.GOa,
                                mw: {
                                    radius: a.SJ,
                                    color: h,
                                    Ja: k,
                                    Ca: l,
                                    Da: m
                                },
                                QJa: d
                            }
                        }
                        )
                    }
                }
                constructor(a) {
                    this.Khb = a
                }
            }
            ;
            __c.SZ = ({bj: a, j: b, M: c, xa: d, Fa: e, hb: f, width: g, Mf: h}) => {
                var k = MZ( () => b.tV)
                  , l = MZ( () => a.pk.map(r => {
                    var t;
                    return (t = r.uA) !== null && t !== void 0 ? t : r.Up
                }
                ));
                k = new FKb(l,k);
                h = new GKb(h);
                const m = new MKb(b,a,k,e,g)
                  , n = new NKb(h)
                  , p = MZ( () => n.legend(m));
                e = MZ( () => p.get().height);
                g = MZ( () => p.get().items);
                const q = MZ( () => p.get().items.length);
                h = BKb(r => {
                    var t = q.get();
                    const v = m.j;
                    mKb(n.Khb, {
                        store: m.dN,
                        Sbb: r,
                        Bub: t,
                        lt: m.bj.lt,
                        Op: v.Op,
                        Zj: v.Zj,
                        Rz: m.Rz
                    })
                }
                );
                k = BKb(r => {
                    m.LH = m.LH === r ? void 0 : r
                }
                );
                l = yKb({
                    j: b,
                    M: c,
                    xa: d,
                    Er: e
                });
                return {
                    FK: zKb({
                        items: g,
                        j: b,
                        hb: f,
                        g5: h,
                        d5: k,
                        M: c,
                        xa: d
                    }),
                    Sk: m,
                    Er: e,
                    cW: l
                }
            }
            ;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/b6ec73a9dd1263b0.js.map

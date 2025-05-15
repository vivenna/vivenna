(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[49222], {

    /***/
    78999: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(841629);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var E = __c.E;
            var C = __c.C;
            var a2b = function(a, b, c, d) {
                c = new $1b(c,d);
                C(a.count() === 1, "Only single widget root element is supported");
                a = a.first();
                C(a != null && a.type === "layout", `Unexpected widget root found: ${a === null || a === void 0 ? void 0 : a.type}`);
                c.Uha(a, b)
            }
              , c2b = function(a) {
                return {
                    ...__c.pdb,
                    ...H5,
                    top: 0,
                    left: 0,
                    width: a.width,
                    height: a.height,
                    viewBox: {
                        top: 0,
                        left: 0,
                        width: a.Oha.width,
                        height: a.Oha.height
                    },
                    kb: a.kb.map(b2b)
                }
            }
              , d2b = function(a) {
                switch (a.YB) {
                case 0:
                    var b = __c.vk.yc().attrs({
                        "font-size": a.fontSize,
                        leading: a.lineHeight ? a.lineHeight * 1E3 : void 0,
                        "text-align": a.textAlign || "start",
                        "font-weight": a.fontWeight,
                        "font-family": a.fontFamily,
                        "font-kerning": "normal",
                        "font-feature-liga": "on",
                        "font-feature-clig": "on",
                        "font-feature-calt": "on",
                        direction: a.direction
                    });
                    a.color && b.$f("color", a.color);
                    b = b.qc(a.text.endsWith("\n") ? a.text : `${a.text}\n`).build();
                    var c;
                    return {
                        ...__c.gL,
                        ...I5,
                        ...H5,
                        Ka: (c = a.Ka) !== null && c !== void 0 ? c : 0,
                        text: b,
                        Jg: 2
                    };
                case 1:
                    return b = a.text,
                    {
                        ...__c.gL,
                        ...I5,
                        ...H5,
                        text: b,
                        Jg: 2
                    };
                default:
                    throw new E(a);
                }
            }
              , M5 = function({content: a, fill: b, border: c, X: d}) {
                b = {
                    ...__c.adb,
                    fill: J5(b),
                    border: K5(c),
                    X: L5(d)
                };
                switch (a.type) {
                case "shape":
                    return {
                        ...b,
                        element: c2b(a)
                    };
                case "text":
                    return {
                        ...b,
                        element: d2b(a)
                    };
                case "layout":
                    return {
                        ...b,
                        element: e2b(a)
                    };
                default:
                    throw new E(a);
                }
            }
              , e2b = function({cells: a, border: b, fill: c, X: d, gridTemplateColumns: e, gridTemplateRows: f, columnGap: g, rowGap: h}) {
                return {
                    ...__c.bdb,
                    ...I5,
                    ...H5,
                    I: I5.width,
                    W: I5.height,
                    fill: J5(c),
                    border: K5(b),
                    direction: 1,
                    X: L5(d),
                    cells: new Map(a.map(k => [k.id, M5(k)])),
                    behavior: {
                        rules: [{
                            Kg: void 0,
                            grid: {
                                gridTemplateColumns: e,
                                gridTemplateRows: f,
                                columnGap: g !== null && g !== void 0 ? g : 0,
                                rowGap: h !== null && h !== void 0 ? h : 0,
                                Zg: f2b(a)
                            }
                        }]
                    },
                    Ee: void 0
                }
            }
              , f2b = function(a) {
                return new Map(a.map(b => [b.id, g2b(b)]))
            }
              , g2b = function(a) {
                const b = a.placement.padding;
                return {
                    ...__c.jCa,
                    ...a.placement,
                    alignSelf: "center",
                    padding: {
                        ...__c.qR,
                        ...(b != null ? typeof b === "number" ? {
                            all: b
                        } : b : {})
                    }
                }
            }
              , K5 = function(a) {
                var b;
                const c = (b = a === null || a === void 0 ? void 0 : a.color) !== null && b !== void 0 ? b : "#000000";
                var d;
                return {
                    ...__c.wE,
                    all: a ? {
                        ...__c.fR,
                        weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                        color: c,
                        Lf: !0
                    } : void 0
                }
            }
              , L5 = function(a) {
                return {
                    ...__c.pR,
                    ...(a != null ? typeof a === "number" ? {
                        all: a
                    } : a : {})
                }
            }
              , b2b = function(a) {
                return {
                    ...__c.qdb,
                    ...a,
                    fill: J5(a.fill),
                    stroke: h2b(a.stroke)
                }
            }
              , h2b = function(a) {
                return a ? {
                    ...__c.fR,
                    color: a.color,
                    weight: a.weight
                } : void 0
            }
              , J5 = function(a) {
                var b;
                const c = {
                    ...__c.Xv,
                    Ka: (b = a === null || a === void 0 ? void 0 : a.Ka) !== null && b !== void 0 ? b : 0
                };
                switch (a === null || a === void 0 ? void 0 : a.type) {
                case "color":
                    return {
                        ...c,
                        color: a.color
                    };
                case "gradient":
                    return {
                        ...c,
                        cb: a.cb
                    };
                case void 0:
                    return c;
                default:
                    throw new E(a);
                }
            }
              , n2b = function(a, b) {
                const c = new Map(b.cells.map(e => [e.id, e]));
                i2b(a.cells, c, (e, f) => {
                    let g = !1;
                    j2b(e.element, f.content, () => {
                        a.cells.delete(f.id);
                        a.cells.set(f.id, M5(f));
                        g = !0
                    }
                    );
                    g || (N5(e.fill, f.fill),
                    k2b(e.border, f.border),
                    l2b(e.X, f.X))
                }
                , e => M5(e));
                m2b(a.behavior, b, c);
                N5(a.fill, b.fill);
                l2b(a.X, b.X);
                k2b(a.border, b.border);
                var d;
                a.Ka = (d = b.Ka) !== null && d !== void 0 ? d : 0
            }
              , m2b = function(a, b, c) {
                O5(a.rules, [b], d => {
                    o2b(d.grid.gridTemplateColumns, b.gridTemplateColumns) || (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                    o2b(d.grid.gridTemplateRows, b.gridTemplateRows) || (d.grid.gridTemplateRows = b.gridTemplateRows);
                    var e;
                    d.grid.columnGap = (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                    var f;
                    d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                    i2b(d.grid.Zg, c, (g, h) => {
                        const k = h.placement.padding
                          , l = h.placement.gridColumnEnd
                          , m = h.placement.gridRowStart
                          , n = h.placement.gridRowEnd
                          , p = h.placement.alignSelf;
                        g.gridColumnStart = h.placement.gridColumnStart;
                        g.gridColumnEnd = l;
                        g.gridRowStart = m;
                        g.gridRowEnd = n;
                        typeof k === "number" && g.padding.all !== k ? g.padding.all = k : typeof k !== "number" && (g.padding.ra = k === null || k === void 0 ? void 0 : k.ra,
                        g.padding.Ea = k === null || k === void 0 ? void 0 : k.Ea,
                        g.padding.qa = k === null || k === void 0 ? void 0 : k.qa,
                        g.padding.La = k === null || k === void 0 ? void 0 : k.La);
                        g.alignSelf = p
                    }
                    , g => g2b(g))
                }
                , d => {
                    var e, f;
                    return {
                        Kg: void 0,
                        grid: {
                            gridTemplateColumns: b.gridTemplateColumns,
                            gridTemplateRows: b.gridTemplateRows,
                            columnGap: (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                            rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                            Zg: f2b(d.cells)
                        }
                    }
                }
                )
            }
              , p2b = function(a, b) {
                O5(a.kb, b.kb, (e, f) => {
                    e.d = f.d;
                    N5(e.fill, f.fill);
                    e.stroke.ref && f.stroke ? (e = e.stroke.ref,
                    f = f.stroke,
                    e.color = f.color,
                    e.weight = f.weight) : e.stroke.set(h2b(f.stroke))
                }
                , e => b2b(e));
                const {viewBox: c, width: d} = c2b(b);
                a.width = d;
                __c.Uu(a.viewBox).equals(__c.Uu(c)) || (a.viewBox = c)
            }
              , j2b = function(a, b, c) {
                switch (b.type) {
                case "shape":
                    a.type === "shape" ? p2b(a, b) : c();
                    break;
                case "text":
                    a.type === "text" && __c.vk.domain.Mb(__c.vk.ka(a.text), d2b(b).text) || c();
                    break;
                case "layout":
                    a.type === "layout" ? n2b(a, b) : c();
                    break;
                default:
                    throw new E(b);
                }
            }
              , i2b = function(a, b, c, d) {
                const e = new Set(a.keys());
                for (const [f,g] of b)
                    (b = a.get(f)) ? (e.delete(f),
                    c(b, g)) : a.set(f, d(g));
                e.forEach(f => a.delete(f))
            }
              , O5 = function(a, b, c, d) {
                const e = a.toArray();
                for (let f = 0; f < Math.max(e.length, b.length); f++)
                    if (f < e.length && f < b.length)
                        c(e[f], b[f]);
                    else if (f < e.length && f >= b.length)
                        a.delete(e[f]);
                    else if (f >= e.length && f < b.length) {
                        const g = d(b[f]);
                        a.append(g)
                    }
            }
              , N5 = function(a, b) {
                switch (b === null || b === void 0 ? void 0 : b.type) {
                case "color":
                    a.color = b.color;
                    a.cb.set(void 0);
                    var c;
                    a.Ka = (c = b.Ka) !== null && c !== void 0 ? c : 0;
                    break;
                case "gradient":
                    if (a.cb.ref && __c.Q2a.domain.Mb(a.cb.ref, b.cb))
                        break;
                    a.color = void 0;
                    a.cb.set(b.cb);
                    var d;
                    a.Ka = (d = b.Ka) !== null && d !== void 0 ? d : 0;
                    break;
                default:
                    a.color = void 0,
                    a.cb.set(void 0)
                }
            }
              , l2b = function(a, b) {
                b = L5(b);
                a.all = b.all;
                a.SC = b.SC;
                a.PC = b.PC;
                a.RC = b.RC;
                a.OC = b.OC
            }
              , k2b = function(a, b) {
                b = K5(b).all;
                var c;
                if (c = b)
                    c = a.all.ref,
                    c = !(c && b ? __c.xE.domain.Mb(__c.xE.ka(c), b) : !c && !b);
                c && a.all.set(b)
            }
              , o2b = function(a, b) {
                return a.length === b.length && a.every(c => b.includes(c))
            }
              , r2b = function(a, b, c, d) {
                let e = a.MVa.get(b);
                if (e)
                    return e;
                e = {
                    Zw: new q2b(c.Zv,b,d,c.Rqa),
                    MFa: void 0,
                    zPa: void 0,
                    yRa: __c.eW.mode
                };
                a.MVa.set(b, e);
                return e
            }
              , t2b = function(a, b, c, d, e) {
                var f, g;
                e = r2b(a, c, b, e);
                const h = e.Zw
                  , k = e.zPa
                  , l = e.MFa
                  , m = e.yRa;
                c = __c.hQ.ka(c);
                const n = ((f = (g = a.sz).Zpa) === null || f === void 0 ? void 0 : f.call(g, d)) || __c.eW;
                h.Bj === k && s2b.structural(c, l) && n.mode === m || (e.MFa = c,
                e.zPa = h.Bj,
                e.yRa = n.mode,
                b = b.render(h, n),
                a.Pjb.update(d, b),
                a2b(d, b, (p, q) => a.zP.ira.set(p, q), (p, q, r) => a.zP.refs.set(p, {
                    ref: q,
                    key: r
                })))
            }
              , w2b = function(a, b) {
                const c = []
                  , d = () => c.forEach(e => e());
                c.push(a.Dkb());
                c.push(u2b( () => {
                    a: {
                        var e = new v2b;
                        for (const f of b)
                            if (e.CP(f),
                            e.Woa) {
                                e = e.Woa;
                                break a
                            }
                        e = void 0
                    }
                    return e && (a.Tb.isLoaded(e) || a.csa.has(e))
                }
                , e => {
                    if (e) {
                        for (const f of b)
                            C(f.type === "layout"),
                            a.vk.Sea(f);
                        d()
                    }
                }
                ));
                return d
            }
              , x2b = function(a, b) {
                return {
                    $z: ({Ph: c}) => {
                        var d;
                        const {Zw: e} = r2b(a.renderer, c, b, a.s1)
                          , f = __c.jQ.create([])
                          , g = [];
                        g.push(w2b(a.pcb, f));
                        g.push(u2b( () => {
                            var k, l;
                            return [(k = (l = a.sz).Zpa) === null || k === void 0 ? void 0 : k.call(l, f), __c.hQ.ka(c), e.Bj]
                        }
                        , () => {
                            t2b(a.renderer, b, c, f, a.s1)
                        }
                        , {
                            fireImmediately: !0,
                            equals: s2b.structural
                        }));
                        const h = (d = b.Ita) === null || d === void 0 ? void 0 : d.call(b, {
                            Zw: e
                        });
                        h && g.push(h);
                        return {
                            Ra: f,
                            Rt: () => {
                                g.forEach(k => k())
                            }
                        }
                    }
                }
            }
              , z2b = function(a, b) {
                let c = a.o7.get(b);
                c || (c = y2b("weakKey"),
                a.o7.set(b, c));
                c.reportObserved()
            }
              , P5 = __webpack_require__(519427)
              , s2b = P5.comparer
              , A2b = P5.computed
              , y2b = P5.createAtom
              , Q5 = P5.observable
              , u2b = P5.reaction
              , B2b = P5.runInAction;
            var C2b = class {
                static A(a) {
                    __c.Q(a, {
                        nmb: Q5.ref,
                        Edb: Q5.ref
                    })
                }
                constructor() {
                    this.Zpa = (C2b.A(this),
                    void 0)
                }
            }
            ;
            var D2b = class {
                constructor() {
                    this.sources = new WeakMap
                }
            }
              , q2b = class {
                static A(a) {
                    __c.Q(a, {
                        Ne: A2b
                    })
                }
                get APa() {
                    var a = this.s1
                      , b = this.Ph
                      , c = this.Rqa;
                    let d = a.sources.get(b);
                    d || (d = Q5.box(c),
                    a.sources.set(b, d));
                    return d
                }
                get Bj() {
                    return this.APa.get()
                }
                get Ne() {
                    return this.Zv.ru({
                        type: "dict",
                        value: this.Ph
                    })
                }
                Wl(a) {
                    this.APa.set(a instanceof Function ? {
                        ...this.Bj,
                        ...a()
                    } : {
                        ...this.Bj,
                        ...a
                    })
                }
                constructor(a, b, c, d) {
                    this.Zv = a;
                    this.Ph = b;
                    this.s1 = c;
                    this.Rqa = d;
                    q2b.A(this)
                }
            }
            ;
            var $1b = class {
                Z5(a, b) {
                    this.CVa(a, b);
                    b.ref && this.jwa(a, b.ref, b.key)
                }
                FP(a, b) {
                    b.ref && this.jwa(a.text, b.ref, b.key)
                }
                xCa(a, b) {
                    switch (b.content.type) {
                    case "shape":
                        C(a.element.type === "shape");
                        this.Z5(a.element, b.content);
                        break;
                    case "text":
                        C(a.element.type === "text");
                        this.FP(a.element, b.content);
                        break;
                    case "layout":
                        C(a.element.type === "layout");
                        this.Uha(a.element, b.content);
                        break;
                    default:
                        throw new E(b.content);
                    }
                }
                Uha(a, b) {
                    this.CVa(a, b);
                    b.ref && this.jwa(a, b.ref, b.key);
                    for (const [c,d] of a.cells)
                        a = b.cells.find(e => e.id === c),
                        C(!!d && !!a),
                        this.xCa(d, a)
                }
                constructor(a, b) {
                    this.CVa = a;
                    this.jwa = b
                }
            }
            ;
            var H5 = {
                locked: !0,
                Ak: {
                    DY: !1,
                    IV: !1
                },
                $h: !0
            }
              , I5 = {
                top: 0,
                left: 0,
                width: 1,
                height: 1
            };
            var E2b = class {
                constructor(a) {
                    this.vk = a;
                    this.update = (b, c) => {
                        O5(b, [c], (d, e) => {
                            switch (d.type) {
                            case "layout":
                                n2b(d, e);
                                break;
                            default:
                                throw Error(`Not supported element type: ${d.type}`);
                            }
                        }
                        , d => {
                            a: switch (d.type) {
                            case "layout":
                                d = {
                                    ...e2b(d),
                                    ...H5,
                                    width: d.minWidth,
                                    height: d.minHeight,
                                    I: d.minWidth,
                                    W: d.minHeight
                                };
                                break a;
                            default:
                                throw new E(d.type);
                            }
                            return d
                        }
                        );
                        for (const d of b)
                            C(d.type === "layout"),
                            d.width = c.minWidth,
                            d.height = c.minHeight,
                            d.I = c.minWidth,
                            d.W = c.minHeight,
                            c.direction && (d.direction = c.direction),
                            this.vk.Sea(d)
                    }
                }
            }
            ;
            var F2b = class {
                constructor(a, b, c) {
                    this.Pjb = a;
                    this.zP = b;
                    this.sz = c;
                    this.MVa = new WeakMap
                }
            }
            ;
            var G2b = class {
                static A(a) {
                    __c.Q(a, {
                        csa: Q5.shallow
                    })
                }
                constructor(a, b) {
                    this.Tb = a;
                    this.vk = b;
                    this.csa = (G2b.A(this),
                    new Set);
                    this.gpa = new Set;
                    this.Dkb = () => {
                        this.J$ || (this.J$ = __c.qga(this.Tb).subscribe(d => {
                            B2b( () => {
                                this.csa.add(d.id)
                            }
                            )
                        }
                        ));
                        const c = Symbol();
                        this.gpa.add(c);
                        return () => {
                            this.gpa.delete(c);
                            this.gpa.size <= 0 && this.J$ && (this.J$.unsubscribe(),
                            this.J$ = void 0)
                        }
                    }
                }
            }
              , v2b = class extends __c.VC {
                CP(a, b) {
                    this.Woa || super.CP(a, b)
                }
                FP(a) {
                    this.Woa = (a = a.text.zx("font-family")["font-family"].values().next().value) && __c.ss(a).id
                }
            }
            ;
            var H2b = !1
              , I2b = class {
                register(a, b) {
                    this.bD.has(a) || (this.bD.set(a, b),
                    H2b || (__c.iQ.set(a, x2b(this, b)),
                    H2b = !0))
                }
                get(a) {
                    return this.bD.get(a)
                }
                constructor(a, b, c, d, e) {
                    this.renderer = a;
                    this.s1 = b;
                    this.sz = c;
                    this.Tb = d;
                    this.vk = e;
                    this.bD = new Map;
                    this.pcb = new G2b(this.Tb,this.vk)
                }
            }
            ;
            var J2b = class {
                delete(a) {
                    var b;
                    const c = this.map.delete(a);
                    c && ((b = this.o7.get(a)) === null || b === void 0 || b.reportChanged());
                    return c
                }
                get(a) {
                    z2b(this, a);
                    return this.map.get(a)
                }
                has(a) {
                    z2b(this, a);
                    return this.map.has(a)
                }
                set(a, b) {
                    if (!this.map.has(a) || this.map.get(a) !== b) {
                        var c;
                        this.map.set(a, b);
                        (c = this.o7.get(a)) === null || c === void 0 || c.reportChanged()
                    }
                    return this
                }
                constructor() {
                    this.o7 = new WeakMap;
                    this.map = new WeakMap
                }
            }
            ;
            var K2b = class {
                constructor() {
                    this.ira = new J2b;
                    this.refs = new J2b
                }
            }
              , L2b = class {
                getContext(a) {
                    return this.zP.refs.get(a)
                }
                iM(a) {
                    return this.zP.ira.get(a)
                }
                constructor(a, b, c) {
                    this.zP = a;
                    this.s1 = b;
                    this.renderer = c
                }
            }
            ;
            __c.ZPa = {
                Yfb: function(a) {
                    const b = new C2b
                      , c = new K2b
                      , d = new F2b(new E2b(a.vk),c,b)
                      , e = new D2b;
                    a = new I2b(d,e,b,a.Tb,a.vk);
                    return {
                        sz: b,
                        lOb: new L2b(c,e,d),
                        c6: a,
                        zP: c
                    }
                }
            };
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/6d77fa4026abe873.js.map

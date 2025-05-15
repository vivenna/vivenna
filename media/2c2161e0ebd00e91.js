(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[70911], {

    /***/
    88780: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(878415);
        __web_req__(914242);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var Hf = __c.Hf;
            var E = __c.E;
            var w = __c.w;
            var T3b = function(a) {
                return () => a
            }
              , c6 = function(a, b, c, d) {
                return new U3b(a,b,c,d)
            }
              , d6 = function(a, b) {
                return b(a)
            }
              , V3b = function(a, b, c) {
                return c(a, b)
            }
              , W3b = function(a, b) {
                return b(a)
            }
              , e6 = function(a, b) {
                return a === b || b.map(c => a.pra(X3b(c)))
            }
              , Z3b = function(a, b) {
                return a.jta(b).map(c => new Y3b(c,d => d.props[b]))
            }
              , X3b = function(a) {
                w(a instanceof f6);
                return a
            }
              , h6 = function(a, b) {
                if (a === b)
                    return !0;
                switch (typeof a) {
                case "string":
                case "number":
                case "boolean":
                case "undefined":
                    return !1;
                case "object":
                    if (typeof b !== "object" || a.kind !== b.kind)
                        return !1;
                    switch (a.kind) {
                    case "array":
                        return b.kind === "array" && g6(a.items, b.items);
                    case "set":
                        var c;
                        if (c = b.kind === "set")
                            a = a.items,
                            b = b.items,
                            c = a === b ? !0 : a.size !== b.size ? !1 : g6([...a], [...b]);
                        return c;
                    case "map":
                        if (c = b.kind === "map")
                            a = a.items,
                            b = b.items,
                            c = a === b ? !0 : a.size !== b.size ? !1 : g6([...a.keys(), ...a.values()], [...b.keys(), ...b.values()]);
                        return c;
                    case "record":
                        return b.kind === "record" && $3b(a.fields, b.fields);
                    case "instance":
                        return b.kind === "instance" && a.instance === b.instance;
                    default:
                        throw new E(a);
                    }
                default:
                    throw new E(a);
                }
            }
              , g6 = function(a, b) {
                if (a === b)
                    return !0;
                if (a.length !== b.length)
                    return !1;
                for (let c = 0; c < a.length; c++)
                    if (!h6(a[c], b[c]))
                        return !1;
                return !0
            }
              , $3b = function(a, b) {
                if (a === b)
                    return !0;
                const c = Object.keys(a)
                  , d = Object.keys(b)
                  , e = new Set([...c, ...d]);
                if (c.length !== e.size || d.length !== e.size)
                    return !1;
                for (const f of e)
                    if (!h6(a[f], b[f]))
                        return !1;
                return !0
            }
              , i6 = function(a) {
                return typeof a === "string" ? JSON.stringify(a) : String(a)
            }
              , j6 = function(a, b, c) {
                switch (c.kind) {
                case 0:
                    return a4b(c.value);
                case 1:
                    const f = j6(a, b, c.Ou);
                    return b4b[c.name].map(r => k6(r, f));
                case 2:
                    const g = j6(a, b, c.G5a)
                      , h = j6(a, b, c.H5a);
                    return c4b[c.name].map(r => d4b(r, g, h));
                case 3:
                    const k = c.args.map(r => r.kind !== 13 ? new e4b(j6(a, b, r)) : new f4b(j6(a, b, r.$Fb)))
                      , l = c.name;
                    switch (l) {
                    case 0:
                    case 1:
                        var d = k.map(r => r.Zoa(t => t.type, t => t.type.WM()));
                        return d6(d, r => l6.union(...r).map(t => g4b[l](t).map(v => h4b(v, k))));
                    default:
                        return i4b[l].map(r => h4b(r, k))
                    }
                case 4:
                    return j4b(j6(a, b, c.C8), (r, t) => k4b(a, b, c.param, t, c.body).map(v => l4b[c.name](t, v.resultType).map(u => m4b(u, r, v))));
                case 5:
                    const m = c.entries.map( ([r,t]) => [j6(a, b, r), j6(a, b, t)]);
                    d = l6.union(...m.map( ([r]) => r.type));
                    var e = l6.union(...m.map( ([,r]) => r.type));
                    return V3b(d, e, (r, t) => n4b[0](r, t).map(v => o4b(v, m)));
                case 6:
                    const n = Hf(c.fields, r => j6(a, b, r));
                    d = Hf(n, r => r.type);
                    return W3b(d, r => p4b[0](r).map(t => q4b(t, n)));
                case 7:
                    d = a.types.resolve(c.name);
                    if (!d)
                        throw Error(`cannot instantiate unknown type: ${c.name}`);
                    const p = j6(a, b, {
                        kind: 6,
                        fields: c.args
                    });
                    return d.fkb.map(r => k6(r, p, {
                        sq: !0
                    }));
                case 8:
                    return d = j6(a, b, c.base),
                    r4b(d, c.lKb);
                case 9:
                    return s4b(b, c.name);
                case 10:
                    return d = __c.zd(c.defs, r => j6(a, b, r)),
                    t4b(a, b, d, c.body);
                case 11:
                    d = j6(a, b, c.test).as(l6.Rh);
                    e = j6(a, b, c.Ezb);
                    const q = j6(a, b, c.alternate);
                    return u4b(d, e, q);
                case 12:
                    return j6(a, b, c.body).computed();
                default:
                    throw new E(c);
                }
            }
              , k4b = function(a, b, c, d, e) {
                return j6(a, b.define(c, d), e).map(f => v4b.of(d, f.type, g => h => f.eval(g.define(c, h))))
            }
              , a4b = function(a) {
                switch (typeof a) {
                case "string":
                    return m6(l6.string, a);
                case "number":
                    return m6(l6.number, a);
                case "boolean":
                    return m6(l6.Rh, a);
                case "undefined":
                    return m6(l6.undefined, a);
                default:
                    throw new E(a);
                }
            }
              , r4b = function(a, b) {
                return a.map(c => Z3b(c.type, b).map( ({type: d, get: e}) => k6(new n6(c.type,d,e), c)))
            }
              , s4b = function(a, b) {
                return a.resolve(b).map(c => o6.of(c, d => d.resolve(b)))
            }
              , t4b = function(a, b, c, d) {
                const e = __c.zd(c, f => f.type);
                return w4b(j6(a, new p6(new Map(e),b), d), f => {
                    const g = __c.zd(c, h => h.eval(f));
                    return new p6(new Map(g),f)
                }
                )
            }
              , u4b = function(a, b, c) {
                return b.map(d => c.map(e => {
                    const f = l6.union(d.type, e.type);
                    return o6.of(f, g => {
                        const h = a.eval(g)
                          , k = d.eval(g)
                          , l = e.eval(g);
                        return () => h() ? k() : l()
                    }
                    )
                }
                ))
            }
              , k6 = function({yka: a, resultType: b, apply: c}, d, e) {
                const f = d.as(a);
                return new o6(b,g => {
                    const h = f.eval(g);
                    if (e === null || e === void 0 ? 0 : e.sq) {
                        const k = x4b(c);
                        return () => k(h())
                    }
                    return () => c(h())
                }
                )
            }
              , d4b = function({yka: a, I5a: b, resultType: c, apply: d}, e, f) {
                const g = e.as(a)
                  , h = f.as(b);
                return new o6(c,k => {
                    const l = g.eval(k)
                      , m = h.eval(k);
                    return () => d(l(), m())
                }
                )
            }
              , h4b = function({K5a: a, resultType: b, apply: c}, d) {
                let e;
                const f = d.map(g => g.Xka(h => h.as(a), h => h.as(e !== null && e !== void 0 ? e : e = l6.C8(a))));
                return new o6(b,g => {
                    const h = l => l.eval(g)
                      , k = f.map(l => l.Xka(h, h));
                    return () => {
                        const l = [];
                        k.forEach(m => {
                            m.Zoa(n => l.push(n()), n => l.push(...n()))
                        }
                        );
                        return c(l)
                    }
                }
                )
            }
              , m4b = function({e6a: a, resultType: b, reduce: c}, d, e) {
                const f = y4b(e, a);
                return o6.of(b, g => {
                    const h = d.eval(g)
                      , k = f.eval(g)
                      , l = x4b(m => {
                        m = m.map(T3b);
                        return [m, m.map(k)]
                    }
                    );
                    return () => {
                        const [m,n] = l(h());
                        return c(m, n)
                    }
                }
                )
            }
              , o4b = function({keyType: a, valueType: b, resultType: c, apply: d}, e) {
                const f = e.map( ([g,h]) => [g.as(a), h.as(b)]);
                return new o6(c,g => {
                    const h = f.map( ([k,l]) => [k.eval(g), l.eval(g)]);
                    return () => d(h.map( ([k,l]) => [k(), l()]))
                }
                )
            }
              , q4b = function({J5a: a, resultType: b, apply: c}, d) {
                const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                if (e.length)
                    throw Error(`too few arguments (missing ${e})`);
                const f = z4b(a, (g, h) => d[h].as(g));
                return new o6(b,g => {
                    const h = A4b(f, k => k.eval(g));
                    return () => c(B4b(h, k => k()))
                }
                )
            }
              , m6 = function(a, b) {
                const c = T3b(b);
                return new o6(a, () => c)
            }
              , j4b = function(a, b) {
                return a.type.WM().map(c => b(a.as(l6.C8(c)), c))
            }
              , w4b = function(a, b) {
                return new o6(a.type,c => a.eval(b(c)))
            }
              , y4b = function(a, b) {
                if (!e6(a.resultType, b))
                    throw Error(`type ${a.resultType} is not assignable to expected type: ${b}`);
                return a
            }
              , x4b = function(a) {
                let b;
                return c => {
                    if (b && q6.Yg(b.u, c))
                        return b.v;
                    const d = a(c);
                    b = {
                        u: c,
                        v: d
                    };
                    return d
                }
            }
              , z4b = function(a, b) {
                return Hf(a, b)
            }
              , A4b = function(a, b) {
                return Hf(a, b)
            }
              , B4b = function(a, b) {
                return Hf(a, b)
            }
              , G4b = function(a) {
                const b = a.types
                  , c = a.values;
                class d {
                    optional() {
                        const H = this.Zga
                          , K = this.Pea
                          , I = this.LCa
                          , L = b.union(this.type, b.undefined);
                        return new d(L,P => P != null ? H(P) : void 0, (P, S, U) => U != null ? K(P, S, U) : void 0, (P, S, U, ba) => U != null ? I(P, S, U, ba) : ba.delete(S))
                    }
                    wB() {
                        return new d(this.type,this.Zga,this.Pea, (H, K) => {
                            throw H.error(K, "read-only field");
                        }
                        )
                    }
                    N5(H) {
                        return H ? new d(this.type,this.Zga, (K, I, L) => {
                            L = this.Pea(K, I, L);
                            L != null && H(K, I, L);
                            return L
                        }
                        , (K, I, L, P) => {
                            L != null && H(K, I, L);
                            this.LCa(K, I, L, P)
                        }
                        ) : this
                    }
                    Psb(H, K) {
                        const I = this.Zga
                          , L = this.Pea
                          , P = this.LCa;
                        return C4b(this.type, S => {
                            const U = () => L(H, K, S.get(K));
                            return {
                                Ydb: () => I(U()),
                                ULa: U,
                                wqb: ba => P(H, K, ba, S)
                            }
                        }
                        )
                    }
                    constructor(H, K, I, L) {
                        this.type = H;
                        this.Zga = K;
                        this.Pea = I;
                        this.LCa = L
                    }
                }
                a = new d(b.string,H => H,r6("string", H => H.value),s6("string"));
                const e = new d(b.Rh,H => H,r6("boolean", H => H.value),s6("boolean"))
                  , f = (new d(b.number,H => H,r6("int32", H => H.value),s6("int32"))).N5(H => Number.isInteger(H))
                  , g = (new d(b.number,H => H,r6("double", H => H.value),s6("double"))).N5(H => Number.isFinite(H))
                  , h = new d(b.instance("Fill"),H => c.instance("Fill", H),r6("fill", H => H.value),s6("fill"))
                  , k = a.optional()
                  , l = e.optional()
                  , m = f.optional()
                  , n = g.optional()
                  , p = h.optional()
                  , q = a.wB()
                  , r = e.wB()
                  , t = f.wB()
                  , v = g.wB()
                  , u = h.wB()
                  , x = k.wB()
                  , y = l.wB()
                  , z = m.wB()
                  , A = n.wB()
                  , B = p.wB()
                  , G = {
                    [0]: {
                        [0]: {
                            string: a,
                            boolean: e,
                            int32: f,
                            double: g,
                            fill: h
                        },
                        [1]: {
                            string: q,
                            boolean: r,
                            int32: t,
                            double: v,
                            fill: u
                        }
                    },
                    [1]: {
                        [0]: {
                            string: k,
                            boolean: l,
                            int32: m,
                            double: n,
                            fill: p
                        },
                        [1]: {
                            string: x,
                            boolean: y,
                            int32: z,
                            double: A,
                            fill: B
                        }
                    }
                };
                return (H, K) => {
                    const I = new D4b(H)
                      , L = Hf(K, S => S.key)
                      , P = Hf(K, S => {
                        var U = S.GUa;
                        const ba = S.HRa;
                        switch (S.type) {
                        case "string":
                            U = G[U][ba].string.N5(E4b(S.nJ));
                            break;
                        case "boolean":
                            U = G[U][ba]["boolean"];
                            break;
                        case "double":
                            U = G[U][ba]["double"].N5(F4b(S.range));
                            break;
                        case "int32":
                            U = G[U][ba].int32.N5(F4b(S.range));
                            break;
                        case "fill":
                            U = G[U][ba].fill;
                            break;
                        default:
                            throw new E(S);
                        }
                        return U.Psb(I, S.key)
                    }
                    );
                    return {
                        nma: new Map(Object.entries(P).map( ([S,U]) => [L[S], U.type])),
                        eval: S => {
                            const U = Hf(P, oa => oa.eval(S))
                              , ba = Hf(U, oa => ({
                                get: oa.ULa
                            }))
                              , ha = Hf(U, oa => ({
                                get: oa.ULa,
                                set: oa.wqb
                            }));
                            return {
                                opb: new Map(Object.entries(U).map( ([oa,ka]) => [L[oa], ka.Ydb])),
                                data: Object.create(null, ba),
                                bkb: Object.create(null, ha)
                            }
                        }
                    }
                }
            }
              , r6 = function(a, b) {
                return (c, d, e) => {
                    if (e == null)
                        throw c.error(d, "not found");
                    if (e.type !== a)
                        throw c.error(d, `type error: expected ${a}, was ${e.type}`);
                    return b(e)
                }
            }
              , s6 = function(a) {
                return (b, c, d, e) => {
                    if (d == null)
                        throw b.error(a, "value is nullish");
                    if (a === "string" && typeof d === "string" || a === "boolean" && typeof d === "boolean" || a === "double" && typeof d === "number" || a === "int32" && typeof d === "number")
                        b = {
                            type: a,
                            value: d
                        };
                    else {
                        if (a === "fill" && typeof d === "object")
                            throw b.error(a, "Write for fill is not yet supported");
                        throw b.error(a, `type error: expected ${a}, but received ${typeof d}`);
                    }
                    e.set(c, b)
                }
            }
              , F4b = function(a) {
                if (a) {
                    var b = a.min
                      , c = a.max;
                    w(b == null || c == null || b <= c);
                    return (d, e, f) => {
                        if (b != null && f < b)
                            throw d.error(e, `value below min ${b}: ${f}`);
                        if (c != null && f > c)
                            throw d.error(e, `value above max ${b}: ${f}`);
                    }
                }
            }
              , E4b = function(a) {
                if (a)
                    return (b, c, d) => {
                        if (!a.test(d))
                            throw b.error(c, `value does not match regex ${a}: '${d}'`);
                    }
            }
              , C4b = function(a, b) {
                return {
                    type: a,
                    eval: b
                }
            }
              , I4b = function() {
                return (new H4b({})).add( (a, b) => ({
                    Fill: new a("Fill",{
                        color: b.string
                    },c => __c.cP.create({
                        ...__c.Xv,
                        color: c.color
                    }))
                })).add( (a, b) => ({
                    RectElement: new a("RectElement",{
                        top: b.number,
                        left: b.number,
                        width: b.number,
                        height: b.number,
                        rotation: b.union(b.number, b.undefined),
                        fill: b.instance("Fill"),
                        X: b.union(b.array(b.number), b.undefined)
                    },c => {
                        var d, e, f;
                        const g = __c.Vv.create({
                            ...__c.Wv,
                            top: c.top,
                            left: c.left,
                            width: c.width,
                            height: c.height,
                            rotation: (e = c.rotation) !== null && e !== void 0 ? e : __c.Wv.rotation,
                            fill: __c.Xv,
                            X: (f = (d = c.X) === null || d === void 0 ? void 0 : d.items) !== null && f !== void 0 ? f : __c.Wv.X
                        });
                        Object.defineProperties(g, {
                            fill: {
                                value: c.fill.instance
                            }
                        });
                        return g
                    }
                    )
                }))
            }
              , t6 = function() {
                throw Error("ref not found");
            }
              , K4b = function(a, b) {
                return class extends J4b {
                    componentDidCatch(c) {
                        a.error(c);
                        this.setState({
                            hasError: !0
                        })
                    }
                    render() {
                        return this.state.hasError ? u6(__c.Ly, {
                            background: "criticalLow",
                            width: "full",
                            height: "full",
                            padding: "0.25u",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            role: "alert",
                            children: u6(__c.Iy, {
                                size: "xsmall",
                                alignment: "center",
                                children: __c.O("Q6XSow")
                            })
                        }) : u6(b, {
                            ...this.props
                        })
                    }
                    constructor(...c) {
                        super(...c);
                        this.state = {
                            hasError: !1
                        }
                    }
                }
            }
              , P4b = function(a, b, c) {
                const d = f => f.ga.Ph;
                switch (c.type) {
                case 0:
                    c = c.$z;
                    if (typeof c === "object") {
                        var e = a.U_a.types;
                        e = e.C8(e.instance("RectElement"));
                        return L4b(a, d, b, e, c, f => new M4b( () => f().map(g => g.instance)))
                    }
                    return N4b(d, b, c);
                case 1:
                    return O4b(a, d, b, c.Component);
                default:
                    throw new E(c);
                }
            }
              , L4b = function(a, b, c, d, e, f) {
                const g = a.Jma(a.U_a, c, d).compile(e);
                return {
                    type: 0,
                    $z: h => ({
                        Ra: f(g.eval(b(h)))
                    })
                }
            }
              , N4b = function(a, b, c) {
                return {
                    type: 0,
                    $z: d => c(b.eval(a(d)).data)
                }
            }
              , O4b = function(a, b, c, d) {
                return {
                    type: 1,
                    Component: K4b(a.H, Q4b( ({model: e}) => {
                        const [f] = R4b( () => c.eval(b(e)).bkb);
                        return u6(d, {
                            data: f
                        })
                    }
                    ))
                }
            }
              , S4b = function(a) {
                const b = new WeakMap;
                return c => {
                    let d = b.get(c);
                    d || (d = a(c),
                    b.set(c, d));
                    return d
                }
            }
              , T4b = __webpack_require__(519427)
              , v6 = T4b.computed
              , U4b = T4b.observable;
            var u6 = __webpack_require__(443763).jsx;
            var w6 = __webpack_require__(875604)
              , Q4b = w6.memo
              , J4b = w6.PureComponent
              , R4b = w6.useState;
            var n6 = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b, c) {
                    this.yka = a;
                    this.resultType = b;
                    this.apply = c
                }
            }
              , x6 = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b, c, d) {
                    this.yka = a;
                    this.I5a = b;
                    this.resultType = c;
                    this.apply = d
                }
            }
              , y6 = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b, c) {
                    this.K5a = a;
                    this.resultType = b;
                    this.apply = c
                }
            }
              , W4b = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b, c) {
                    var d = V4b;
                    this.keyType = a;
                    this.valueType = b;
                    this.resultType = c;
                    this.apply = d
                }
            }
              , Y4b = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b) {
                    var c = X4b;
                    this.J5a = a;
                    this.resultType = b;
                    this.apply = c
                }
            }
              , U3b = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b, c, d) {
                    this.itemType = a;
                    this.e6a = b;
                    this.resultType = c;
                    this.reduce = d
                }
            }
            ;
            var Y3b = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b) {
                    this.type = a;
                    this.get = b
                }
            }
            ;
            var Z4b = class {
            }
              , e4b = class extends Z4b {
                Xka(a) {
                    return new e4b(a(this.value))
                }
                Zoa(a) {
                    return a(this.value)
                }
                constructor(a) {
                    super();
                    this.value = this.value = a
                }
            }
              , f4b = class extends Z4b {
                Xka(a, b) {
                    return new f4b(b(this.value))
                }
                Zoa(a, b) {
                    return b(this.value)
                }
                constructor(a) {
                    super();
                    this.value = this.value = a
                }
            }
            ;
            var f6 = class {
                map(a) {
                    return a(this)
                }
            }
              , z6 = class extends f6 {
                pra(a) {
                    return this === a || a.bya(b => this.w0(b))
                }
                WM() {
                    throw Error(`${this} is not iterable`);
                }
                jta(a) {
                    var b;
                    const c = (b = this.propTypes) !== null && b !== void 0 ? b : this.propTypes = this.fca();
                    if (!c)
                        throw Error(`${this} is not navigable"`);
                    if (!c.hasOwnProperty(a))
                        throw Error(`${this} has no navigable property "${a}"`);
                    return c[a]
                }
                fca() {
                    throw Error(`${this} is not navigable`);
                }
                hpa(a) {
                    a(this)
                }
                bya(a) {
                    return a(this)
                }
                constructor() {
                    super();
                    this.kind = "simple";
                    this.propTypes = void 0
                }
            }
              , A6 = class extends z6 {
                w0(a) {
                    return a instanceof A6 && this.name === a.name
                }
                toString() {
                    return this.name
                }
                constructor(a) {
                    super();
                    this.name = a
                }
            }
              , B6 = class extends z6 {
                w0(a) {
                    return a instanceof B6 && this.jD === a.jD
                }
                toString() {
                    return this.jD.name
                }
                constructor(a) {
                    super();
                    this.jD = a
                }
            }
              , C6 = class extends z6 {
                w0(a) {
                    return a instanceof C6 && this.jD === a.jD && e6(this.Ou, a.Ou)
                }
                toString() {
                    return `${this.jD}<${this.Ou}>`
                }
                constructor(a, b) {
                    super();
                    this.jD = a;
                    this.Ou = b
                }
            }
              , $4b = class extends C6 {
                WM() {
                    return this.Ou
                }
                fca() {
                    const a = this.Ou;
                    return {
                        size: l6.number,
                        empty: l6.Rh,
                        get first() {
                            return l6.optional(a)
                        }
                    }
                }
                constructor(a) {
                    super("array", a)
                }
            }
              , a5b = class extends C6 {
                WM() {
                    return this.Ou
                }
                fca() {
                    const a = this.Ou;
                    return {
                        size: l6.number,
                        empty: l6.Rh,
                        get first() {
                            return l6.optional(a)
                        }
                    }
                }
                constructor(a) {
                    super("set", a)
                }
            }
              , b5b = class extends z6 {
                w0(a) {
                    return a instanceof b5b && e6(this.key, a.key) && e6(this.value, a.value)
                }
                toString() {
                    return `map<${this.key}, ${this.value}>`
                }
                constructor(a, b) {
                    super();
                    this.key = a;
                    this.value = b
                }
            }
              , c5b = class extends z6 {
                w0(a) {
                    return a instanceof c5b ? Object.entries(a.fields).every( ([b,c]) => this.fields.hasOwnProperty(b) && e6(this.fields[b], c)) : !1
                }
                fca() {
                    return this.fields
                }
                toString() {
                    const a = Object.entries(this.fields);
                    return a.length ? `{ ${a.map( ([b,c]) => `${b}: ${c}`).join(", ")} }` : "{}"
                }
                constructor(a) {
                    super();
                    this.fields = a
                }
            }
              , D6 = class extends f6 {
                pra(a) {
                    return this === a || this.rm.every(b => b.pra(a))
                }
                WM() {
                    const a = this.rm.map(b => b.WM());
                    return d6(a, b => l6.union(...b))
                }
                jta(a) {
                    const b = this.rm.map(c => c.jta(a));
                    return d6(b, c => l6.union(...c))
                }
                hpa(a) {
                    this.rm.forEach(b => b.hpa(a))
                }
                bya(a) {
                    return this.rm.some(b => b.bya(a))
                }
                toString() {
                    return this.rm.length ? this.rm.map(a => a.toString()).join(" | ") : "never"
                }
                constructor(a) {
                    super();
                    this.rm = a;
                    this.kind = "disjunction";
                    w(a.length !== 1)
                }
            }
              , E6 = new D6([])
              , d5b = new A6("string")
              , e5b = new A6("number")
              , f5b = new A6("boolean")
              , g5b = new A6("undefined")
              , h5b = class {
                get never() {
                    return E6
                }
                get string() {
                    return d5b
                }
                get number() {
                    return e5b
                }
                get Rh() {
                    return f5b
                }
                get undefined() {
                    return g5b
                }
                optional(a) {
                    return l6.union(a, l6.undefined)
                }
                array(a) {
                    return new $4b(a)
                }
                set(a) {
                    return new a5b(a)
                }
                C8(a) {
                    return new D6([new $4b(a), new a5b(a)])
                }
                map(a, b) {
                    return new b5b(a,b)
                }
                Wc(a) {
                    return new c5b({
                        ...a
                    })
                }
                union(...a) {
                    if (a.length === 0)
                        return E6;
                    if (a.length === 1)
                        return a[0];
                    const b = new Set;
                    for (const d of a)
                        X3b(d).hpa(e => b.add(e));
                    a = [...b];
                    if (a.length === 0)
                        return E6;
                    if (a.length === 1)
                        return a[0];
                    if (a.length === 2) {
                        const [d,e] = a;
                        return e6(d, e) ? e : e6(e, d) ? d : new D6(a)
                    }
                    const c = new Set;
                    for (const d of a)
                        [...c].some(e => e6(d, e)) || (c.forEach(e => e6(e, d) && c.delete(e)),
                        c.add(d));
                    return c.size === 1 ? [...c][0] : new D6([...c])
                }
            }
              , i5b = class extends h5b {
                instance(a) {
                    return new B6(a)
                }
            }
              , l6 = new i5b
              , j5b = class extends h5b {
                instance(a) {
                    return new B6(__c.D(this.classes[a]))
                }
                constructor(a) {
                    super();
                    this.classes = a
                }
            }
            ;
            var k5b, l5b, F6 = Symbol("value"), G6 = class {
                get props() {
                    var a;
                    return (a = this.W4a) !== null && a !== void 0 ? a : this.W4a = this.zka()
                }
            }
            , m5b = class {
                get size() {
                    return this[F6].length
                }
                get empty() {
                    return this[F6].length === 0
                }
                get first() {
                    return this[F6][0]
                }
                constructor(a) {
                    this[F6] = a
                }
            }
            ;
            k5b = Symbol.iterator;
            var n5b = class extends G6 {
                zka() {
                    return new m5b(this.items)
                }
                map(a) {
                    return this.items.map(a)
                }
                [k5b]() {
                    return this.items[Symbol.iterator]()
                }
                toString() {
                    return this.items.length ? `[${Array.from(this.items, i6).join(", ")}]` : "[]"
                }
                constructor(a) {
                    super();
                    this.kind = "array";
                    this.items = [...a]
                }
            }
              , o5b = class {
                get size() {
                    return this[F6].size
                }
                get empty() {
                    return this[F6].size === 0
                }
                get first() {
                    return this[F6][Symbol.iterator]().next().value
                }
                constructor(a) {
                    this[F6] = a
                }
            }
            ;
            l5b = Symbol.iterator;
            var p5b = class extends G6 {
                zka() {
                    return new o5b(this.items)
                }
                map(a) {
                    return Array.from(this.items, a)
                }
                [l5b]() {
                    return this.items[Symbol.iterator]()
                }
                toString() {
                    return this.items.size ? `Set [${Array.from(this.items, i6).join(", ")}]` : "Set []"
                }
                constructor(a) {
                    super();
                    this.kind = "set";
                    this.items = new Set(a)
                }
            }
              , q5b = class {
                toString() {
                    return this.items.size ? `Map {${Array.from(this.items, ([a,b]) => `[${i6(a)}]: ${i6(b)}`).join(", ")}}` : "Map {}"
                }
                constructor(a) {
                    this.items = a;
                    this.kind = "map"
                }
            }
              , r5b = class extends G6 {
                zka() {
                    return this.fields
                }
                toString() {
                    const a = Object.entries(this.fields);
                    return a.length ? `{ ${[...a].map( ([b,c]) => `${b}: ${i6(c)}`).join(", ")} }` : "{}"
                }
                constructor(a) {
                    super();
                    this.fields = a;
                    this.kind = "record"
                }
            }
              , s5b = class {
                toString() {
                    return `[instance ${this.jD.name}]`
                }
                constructor(a, b) {
                    this.jD = a;
                    this.instance = b;
                    this.kind = "instance"
                }
            }
              , t5b = class {
                array(a) {
                    return new n5b(a)
                }
                arrayOf(...a) {
                    return new n5b(a)
                }
                set(a) {
                    return new p5b(a)
                }
                map(a) {
                    return new q5b(new Map(a))
                }
                Wc(a) {
                    return new r5b({
                        ...a
                    })
                }
            }
              , u5b = class extends t5b {
                instance(a, b) {
                    return new s5b(a,b)
                }
                stringify(a) {
                    return i6(a)
                }
                constructor() {
                    super();
                    this.Yg = h6
                }
            }
              , q6 = new u5b
              , v5b = class extends t5b {
                instance(a, b) {
                    a = __c.D(this.classes[a]);
                    return new s5b(a,b)
                }
                constructor(a) {
                    super();
                    this.classes = a
                }
            }
            ;
            var b4b = {
                [0]: new n6(l6.number,l6.number,a => -a),
                [1]: new n6(l6.string,l6.number,a => a.length),
                [2]: new n6(l6.Rh,l6.Rh,a => !a)
            }
              , c4b = {
                [0]: new x6(l6.number,l6.number,l6.number, (a, b) => a + b),
                [1]: new x6(l6.number,l6.number,l6.number, (a, b) => a - b),
                [2]: new x6(l6.number,l6.number,l6.number, (a, b) => a * b),
                [3]: new x6(l6.number,l6.number,l6.number, (a, b) => a / b),
                [4]: new x6(l6.number,l6.number,l6.number, (a, b) => a % b),
                [5]: new x6(l6.string,l6.string,l6.string, (a, b) => a + b),
                [6]: new x6(l6.number,l6.number,l6.Rh, (a, b) => a === b),
                [7]: new x6(l6.number,l6.number,l6.Rh, (a, b) => a !== b),
                [8]: new x6(l6.number,l6.number,l6.Rh, (a, b) => a < b),
                [9]: new x6(l6.number,l6.number,l6.Rh, (a, b) => a <= b),
                [10]: new x6(l6.number,l6.number,l6.Rh, (a, b) => a > b),
                [11]: new x6(l6.number,l6.number,l6.Rh, (a, b) => a >= b),
                [12]: new x6(l6.Rh,l6.Rh,l6.Rh, (a, b) => a && b),
                [13]: new x6(l6.Rh,l6.Rh,l6.Rh, (a, b) => a || b)
            }
              , i4b = {
                [2]: new y6(l6.number,l6.number,a => a.reduce( (b, c) => b + c, 0)),
                [3]: new y6(l6.number,l6.number,a => a.reduce( (b, c) => b * c, 1)),
                [4]: new y6(l6.number,l6.number,a => Math.max(...a)),
                [5]: new y6(l6.number,l6.number,a => Math.min(...a)),
                [6]: new y6(l6.string,l6.string,a => a.join(""))
            }
              , w5b = a => q6.array(a)
              , x5b = a => q6.set(a)
              , g4b = {
                [0]: a => new y6(a,l6.array(a),w5b),
                [1]: a => new y6(a,l6.set(a),x5b)
            }
              , V4b = a => q6.map(a)
              , n4b = {
                [0]: (a, b) => new W4b(a,b,l6.map(a, b))
            }
              , X4b = a => q6.Wc(a)
              , p4b = {
                [0]: a => new Y4b(a,l6.Wc(a))
            }
              , y5b = (a, b) => q6.array(b.map(c => c()))
              , z5b = (a, b) => q6.array(b.flatMap(c => c().items))
              , A5b = (a, b) => q6.array(a.filter( (c, d) => b[d]()).map(c => c()))
              , B5b = (a, b) => b.some(c => c())
              , C5b = (a, b) => b.every(c => c())
              , D5b = (a, b) => {
                var c;
                return (c = a.find( (d, e) => b[e]())) === null || c === void 0 ? void 0 : c()
            }
              , l4b = {
                [0]: (a, b) => c6(a, b, l6.array(b), y5b),
                [1]: (a, b) => b.WM().map(c => c6(a, l6.array(c), l6.array(c), z5b)),
                [2]: a => c6(a, l6.Rh, l6.array(a), A5b),
                [3]: a => c6(a, l6.Rh, l6.Rh, B5b),
                [4]: a => c6(a, l6.Rh, l6.Rh, C5b),
                [5]: a => c6(a, l6.Rh, l6.optional(a), D5b)
            };
            var p6 = class {
                define(a, b) {
                    return new p6(new Map([[a, b]]),this)
                }
                resolve(a) {
                    const b = this.defs.get(a);
                    if (b)
                        return b;
                    if (this.parent)
                        return this.parent.resolve(a);
                    throw Error(`undefined symbol: ${a}`);
                }
                constructor(a, b) {
                    this.defs = a;
                    this.parent = b
                }
            }
            ;
            var F5b = (a, b, c) => {
                const d = new p6(new Map(b.nma))
                  , e = new E5b(a);
                return {
                    compile: f => {
                        const g = j6(e, d, f).as(c);
                        return {
                            eval: h => {
                                h = new p6(new Map(b.eval(h).opb));
                                return g.eval(h)
                            }
                        }
                    }
                }
            }
              , E5b = class {
                constructor(a) {
                    this.types = a
                }
            }
              , o6 = class {
                static of(a, b) {
                    return new o6(a,b)
                }
                as(a) {
                    if (!e6(this.type, a))
                        throw Error(`inferred type ${this.type} does not match expected type: ${a}`);
                    return this
                }
                eval(a) {
                    return this.Cja(a)
                }
                computed() {
                    return new o6(this.type,a => {
                        const b = v6(this.eval(a), {
                            equals: q6.Yg
                        });
                        return () => b.get()
                    }
                    )
                }
                map(a) {
                    return a(this)
                }
                constructor(a, b) {
                    this.type = a;
                    this.Cja = b
                }
            }
              , v4b = class {
                static of(a, b, c) {
                    return new v4b(a,b,c)
                }
                eval(a) {
                    return this.Cja(a)
                }
                map(a) {
                    return a(this)
                }
                constructor(a, b, c) {
                    this.resultType = b;
                    this.Cja = c
                }
            }
            ;
            var H4b = class {
                add(a) {
                    a = a(G5b, this.types);
                    return new H4b({
                        ...this.classes,
                        ...a
                    })
                }
                resolve(a) {
                    return this.classes[a]
                }
                constructor(a) {
                    this.classes = a;
                    this.types = new j5b(this.classes);
                    this.values = new v5b(this.classes)
                }
            }
              , G5b = class {
                constructor(a, b, c) {
                    this.name = a;
                    this.create = c;
                    this.fkb = new n6(l6.Wc(b),l6.instance(this),d => q6.instance(this, c(d.fields)))
                }
            }
            ;
            var D4b = class {
                error(a, b) {
                    return Error(`widget '${this.DCa}': schema error on key '${a}': ${b}`)
                }
                constructor(a) {
                    this.DCa = a
                }
            }
            ;
            var H5b = Object.freeze({
                empty: !0,
                count() {
                    return 0
                },
                toArray() {
                    return []
                },
                es() {
                    return new Map
                },
                first() {},
                last() {},
                next() {
                    t6()
                },
                Ub() {
                    t6()
                },
                Ge() {
                    t6()
                },
                HA() {
                    t6()
                },
                has() {
                    return !1
                },
                mt() {
                    return this
                },
                map() {
                    return []
                },
                flatMap() {
                    return []
                },
                filter() {
                    return []
                },
                forEach() {},
                reduce(a, b) {
                    return b
                },
                some() {
                    return !1
                },
                every() {
                    return !0
                },
                [Symbol.iterator]() {
                    return [][Symbol.iterator]()
                }
            });
            var I5b;
            I5b = Symbol.iterator;
            var M4b = class {
                static A(a) {
                    __c.Q(a, {
                        xe: v6,
                        Ex: v6
                    })
                }
                get xe() {
                    return this.P5a().map(a => {
                        let b = this.$Ma.get(a);
                        b == null && (b = `${this.Yeb++}`,
                        this.$Ma.set(a, b));
                        return {
                            id: b,
                            ref: a
                        }
                    }
                    )
                }
                get Ex() {
                    const a = new Map;
                    this.xe.forEach( (b, c) => b && a.set(b.ref, c));
                    return a
                }
                Jl(a) {
                    return __c.D(this.Ex.get(a), "ref not found")
                }
                get empty() {
                    return !this.xe.length
                }
                count() {
                    return this.xe.length
                }
                toArray() {
                    return this.xe.map(a => a.ref)
                }
                es() {
                    return new Map(this.map( (a, b) => [b, a]))
                }
                get v$() {
                    const a = this.xe[0];
                    return a && a.ref
                }
                get Pba() {
                    const a = this.xe[this.xe.length - 1];
                    return a && a.ref
                }
                first(a) {
                    if (!a)
                        return this.v$;
                    const b = this.xe.find(c => a(c.ref));
                    return b && b.ref
                }
                last(a) {
                    if (!a)
                        return this.Pba;
                    const b = this.xe;
                    for (let c = b.length - 1; c >= 0; c--) {
                        const d = b[c];
                        if (a(d.ref))
                            return d.ref
                    }
                }
                next(a, b) {
                    const c = this.xe;
                    for (a = this.Jl(a) + 1; a < c.length; a++) {
                        const d = c[a];
                        if (!b || b(d.ref))
                            return d.ref
                    }
                }
                Ub(a, b) {
                    const c = this.xe;
                    for (a = this.Jl(a) - 1; a >= 0; a--) {
                        const d = c[a];
                        if (!b || b(d.ref))
                            return d.ref
                    }
                }
                Ge(a, b) {
                    a = this.Ex.get(a);
                    b = this.Ex.get(b);
                    w(a != null);
                    w(b != null);
                    return a < b ? -1 : a > b ? 1 : 0
                }
                HA(a) {
                    return this.xe[this.Jl(a)].id
                }
                has(a) {
                    return this.Ex.has(a)
                }
                mt(a) {
                    return new __c.kO(this,a)
                }
                map(a) {
                    return this.xe.map( ({ref: b, id: c}) => a(b, c))
                }
                flatMap(a) {
                    return this.xe.flatMap( ({ref: b, id: c}) => a(b, c))
                }
                filter(a) {
                    return this.xe.filter(b => a(b.ref, b.id)).map(b => b.ref)
                }
                forEach(a) {
                    this.xe.forEach( (b, c) => a(b.ref, b.id, c))
                }
                reduce(a, b) {
                    return this.xe.reduce( (c, d) => a(c, d.ref, d.id), b)
                }
                some(a) {
                    return this.xe.some(b => a(b.ref, b.id))
                }
                every(a) {
                    return this.xe.every(b => a(b.ref, b.id))
                }
                [I5b]() {
                    return this.toArray()[Symbol.iterator]()
                }
                constructor(a) {
                    this.P5a = a;
                    this.Yeb = (M4b.A(this),
                    0);
                    this.$Ma = new WeakMap
                }
            }
            ;
            var J5b = new Set
              , K5b = {
                $z: () => ({
                    Ra: H5b
                })
            }
              , L5b = class {
                static A(a) {
                    __c.Q(a, {
                        efa: U4b.shallow
                    })
                }
                Sfb(a, b, c) {
                    const d = __c.D(this.upb.qfa.get(a));
                    w(d === b);
                    w(!this.efa.has(a));
                    b = P4b(this, b, c);
                    this.efa.set(a, b);
                    J5b.has(a) || (__c.iQ.set(a, K5b),
                    J5b.add(a));
                    return b
                }
                Tbb(a) {
                    return this.efa.get(a)
                }
                constructor(a, b, c, d) {
                    this.upb = a;
                    this.U_a = b;
                    this.Jma = c;
                    this.H = d;
                    this.efa = (L5b.A(this),
                    new Map)
                }
            }
            ;
            var M5b = class {
                static A(a) {
                    __c.Q(a, {
                        qfa: U4b.shallow
                    })
                }
                Tfb(a, b) {
                    w(!this.qfa.has(a));
                    b = this.s9a(a, b);
                    b = {
                        nma: b.nma,
                        eval: S4b(b.eval)
                    };
                    this.qfa.set(a, b);
                    return b
                }
                constructor(a) {
                    this.s9a = a;
                    this.qfa = (M5b.A(this),
                    new Map)
                }
            }
            ;
            __c.bQa = {
                Xfb: function(a) {
                    a = a.H;
                    var b = {
                        ap: I4b(),
                        Jma: F5b
                    };
                    const {ap: c, Jma: d} = b;
                    b = new M5b(G4b(c));
                    a = new L5b(b,c,d,a);
                    return {
                        ECa: b,
                        mOb: b,
                        c6: a,
                        b6: a
                    }
                }
            };
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/2c2161e0ebd00e91.js.map

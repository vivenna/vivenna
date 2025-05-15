(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[35024], {

    /***/
    738083: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var gI = __c.gI;
            var Jc = __c.Jc;
            var Q = __c.Q;
            var Uu = __c.Uu;
            var O = __c.O;
            var Ix = __c.Ix;
            var wu = __c.wu;
            var D = __c.D;
            var E = __c.E;
            var X4 = function(a, b) {
                switch (b.reference.type) {
                case 0:
                    const c = a.oR(b.reference.Sh);
                    a = a.WU(b.reference.ci);
                    return c != null && a != null;
                case 1:
                    return a.oR(b.reference.Sh) != null;
                case 2:
                    return a.WU(b.reference.ci) != null;
                case 3:
                    return !1;
                default:
                    throw new E(b.reference);
                }
            }
              , i0b = function(a, b, c) {
                switch (c.type) {
                case "invalid":
                    return !1;
                case "canonical":
                    if (c.ea.length > 0)
                        return !1;
                    a = a.TE(c.aY.slice(1).trim());
                    return a.result !== "success" ? !1 : __c.mE(new __c.pE, a.XG).filter(d => {
                        switch (d.type) {
                        case 0:
                            return X4(b, d);
                        case 1:
                            return X4(b, d.start) && X4(b, d.end);
                        default:
                            throw new E(d);
                        }
                    }
                    ).length > 0;
                default:
                    throw new E(c);
                }
            }
              , j0b = function(a, b, c, d) {
                const e = [];
                for (const k of c)
                    for (const l of d) {
                        c = k.na;
                        var f = l.column
                          , g = a.layout.cells.get(c, f);
                        if (!g || (k.boundary === "start" ? g.span.Qb === c : g.span.Tc === c))
                            if (c = b.get(`${f.id}:${c.id}`),
                            c = k.boundary === "start" ? c === null || c === void 0 ? void 0 : c.ra : c === null || c === void 0 ? void 0 : c.Ea) {
                                g = e[e.length - 1];
                                f = (f = a.layout.cols.next(f)) ? {
                                    column: f,
                                    boundary: "start"
                                } : {
                                    column: D(a.layout.cols.last()),
                                    boundary: "end"
                                };
                                var h;
                                if (h = g)
                                    h = g.xoa,
                                    h = h.column === l.column && h.boundary === l.boundary;
                                h && (h = g.nWa,
                                h = h.na === k.na && h.boundary === k.boundary);
                                h && g.color === c.color && g.weight === c.weight && g.jc === c.jc && g.jc === 0 ? g.xoa = f : e.push({
                                    nWa: k,
                                    Arb: l,
                                    xoa: f,
                                    color: c.color,
                                    weight: c.weight,
                                    jc: c.jc
                                })
                            }
                    }
                return e
            }
              , k0b = function(a, b, c, d, e) {
                const f = [];
                for (const l of d)
                    for (const m of c) {
                        var g = m.na
                          , h = l.column;
                        d = a.layout.cells.get(g, h);
                        if (!d || (l.boundary === "start" ? d.span.Lb === h : d.span.Fc === h))
                            if (d = b.get(`${h.id}:${g.id}`),
                            (d = l.boundary === "start" ? d === null || d === void 0 ? void 0 : d.qa : d === null || d === void 0 ? void 0 : d.La) && (l.boundary !== "start" || e(g, h) !== 1)) {
                                h = f[f.length - 1];
                                g = (g = a.layout.rows.next(g)) ? {
                                    na: g,
                                    boundary: "start"
                                } : {
                                    na: D(a.layout.rows.last()),
                                    boundary: "end"
                                };
                                var k;
                                if (k = h)
                                    k = h.xHa,
                                    k = k.column === l.column && k.boundary === l.boundary;
                                k && (k = h.Boa,
                                k = k.na === m.na && k.boundary === m.boundary);
                                k && h.color === d.color && h.weight === d.weight && h.jc === d.jc && h.jc === 0 ? h.Boa = g : f.push({
                                    xHa: l,
                                    Lrb: m,
                                    Boa: g,
                                    color: d.color,
                                    weight: d.weight,
                                    jc: d.jc
                                })
                            }
                    }
                return f
            }
              , l0b = function(a, b, c, d, e) {
                const f = a.fYa.S8a(c, b.layout.rows.last(), b.layout.cols.last());
                a = (q, r) => {
                    const t = f.get(q) || 0
                      , v = f.get(r) || 0;
                    return t <= v ? q : r
                }
                ;
                const g = new Map;
                if (d.length === 0 || e.length === 0)
                    return g;
                var h = []
                  , k = b.layout.cols.Ub(e[0].column);
                k && h.push({
                    column: k,
                    boundary: "start"
                });
                h.push(...e);
                (e = b.layout.cols.next(e[e.length - 1].column)) && h.push({
                    column: e,
                    boundary: "start"
                });
                e = [];
                (k = b.layout.rows.Ub(d[0].na)) && e.push({
                    na: k,
                    boundary: "start"
                });
                e.push(...d);
                (d = b.layout.rows.next(d[d.length - 1].na)) && e.push({
                    na: d,
                    boundary: "start"
                });
                for (const q of h) {
                    h = (d = q.boundary === "start" ? q.column : void 0) ? b.layout.cols.Ub(d) : b.layout.cols.last();
                    for (const r of e) {
                        var l = r.boundary === "start" ? r.na : void 0;
                        k = l ? b.layout.rows.Ub(l) : b.layout.rows.last();
                        var m = d && l && c.get(`${d.id}:${l.id}`)
                          , n = d && k && c.get(`${d.id}:${k.id}`);
                        l = h && l && c.get(`${h.id}:${l.id}`);
                        var p = h && k && c.get(`${h.id}:${k.id}`);
                        k = q.boundary === "end" ? l === null || l === void 0 ? void 0 : l.La : m === null || m === void 0 ? void 0 : m.qa;
                        m = r.boundary === "end" ? n === null || n === void 0 ? void 0 : n.Ea : m === null || m === void 0 ? void 0 : m.ra;
                        n = q.boundary === "end" ? p === null || p === void 0 ? void 0 : p.La : n === null || n === void 0 ? void 0 : n.qa;
                        l = r.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Ea : l === null || l === void 0 ? void 0 : l.ra;
                        p = __c.rDa({
                            ra: n,
                            Ea: k,
                            qa: l,
                            La: m
                        }, a);
                        let t;
                        switch (p) {
                        case "blockStart":
                            t = n;
                            break;
                        case "blockEnd":
                            t = k;
                            break;
                        case "inlineStart":
                            t = l;
                            break;
                        case "inlineEnd":
                            t = m;
                            break;
                        default:
                            t = void 0
                        }
                        const {height: v, width: u} = (t === null || t === void 0 ? void 0 : t.jc) === 1 ? {
                            height: t.weight,
                            width: t.weight
                        } : {
                            height: Math.max((l === null || l === void 0 ? void 0 : l.weight) || 0, (m === null || m === void 0 ? void 0 : m.weight) || 0),
                            width: Math.max((n === null || n === void 0 ? void 0 : n.weight) || 0, (k === null || k === void 0 ? void 0 : k.weight) || 0)
                        };
                        g.set(Y4(q, r), __c.QE(p, v / 2, u / 2))
                    }
                }
                return g
            }
              , m0b = function(a, b, c, d, e, f) {
                if (d.length === 0 || e.length === 0)
                    return [];
                const g = j0b(b, c, d, e);
                f = k0b(b, c, d, e, f);
                const h = l0b(a, b, c, d, e)
                  , k = a.Odb(b)
                  , l = a.hdb(b)
                  , m = b.direction === "rtl";
                a = g.map(n => {
                    var p, q, r = n.Arb, t = n.xoa, v = n.nWa;
                    const u = n.color
                      , x = n.weight;
                    n = n.jc;
                    const y = m ? -1 : 1
                      , z = (p = h.get(Y4(r, v))) === null || p === void 0 ? void 0 : p.La;
                    p = (q = h.get(Y4(t, v))) === null || q === void 0 ? void 0 : q.qa;
                    if (z != null && p != null) {
                        q = D(k.get(v.na));
                        var A = D(l.get(r.column));
                        r = D(l.get(t.column));
                        v = v.boundary === "start" ? q.start : q.end;
                        q = A.start;
                        t = t.boundary === "start" ? r.start : r.end;
                        return {
                            color: u,
                            weight: x,
                            jc: n,
                            p1: new wu(q + z * y,v),
                            p2: new wu(t + p * y,v),
                            ...__c.VE((t - q) * y, n * x, z)
                        }
                    }
                }
                ).filter(__c.wb);
                return [...f.map(n => {
                    var p, q, r = n.xHa, t = n.Lrb, v = n.Boa;
                    const u = n.color
                      , x = n.weight;
                    n = n.jc;
                    const y = (p = h.get(Y4(r, t))) === null || p === void 0 ? void 0 : p.Ea;
                    p = (q = h.get(Y4(r, v))) === null || q === void 0 ? void 0 : q.ra;
                    if (y != null && p != null) {
                        q = D(l.get(r.column));
                        var z = D(k.get(t.na));
                        t = D(k.get(v.na));
                        r = r.boundary === "start" ? q.start : q.end;
                        q = z.start;
                        v = v.boundary === "start" ? t.start : t.end;
                        return {
                            color: u,
                            weight: x,
                            jc: n,
                            p1: new wu(r,q + y),
                            p2: new wu(r,v + p),
                            ...__c.VE(v - q, n * x, y)
                        }
                    }
                }
                ).filter(__c.wb), ...a]
            }
              , n0b = function(a) {
                const b = [];
                a = a.filter(c => c.weight !== 0 && c.color != null);
                a = __c.Ad(a, c => c.weight);
                a = Array.from(a.entries()).sort( ([c], [d]) => c - d);
                for (const [c,d] of a) {
                    a = __c.Ad(d, e => `${e.$j}_${e.ak}`);
                    for (const [,e] of a) {
                        const {ak: f, $j: g} = e[0];
                        a = __c.Ad(e, h => h.color);
                        for (const [h,k] of a)
                            b.push({
                                weight: c,
                                color: h,
                                lines: k,
                                $j: g,
                                ak: f
                            })
                    }
                }
                return b
            }
              , o0b = function(a, b, c, d) {
                var e = __c.Mtb;
                const f = b.get().flatMap(k => a.layout.rows.last() === k ? [{
                    na: k,
                    boundary: "start"
                }, {
                    na: k,
                    boundary: "end"
                }] : [{
                    na: k,
                    boundary: "start"
                }])
                  , g = c.get().flatMap(k => a.layout.cols.last() === k ? [{
                    column: k,
                    boundary: "start"
                }, {
                    column: k,
                    boundary: "end"
                }] : [{
                    column: k,
                    boundary: "start"
                }])
                  , h = new Map;
                for (const k of b.get())
                    for (const l of c.get())
                        b = l && k ? e.fYa.Xob(a, l, k) : void 0,
                        b && h.set(`${l.id}:${k.id}`, b);
                c = m0b(e, a, h, f, g, d);
                return n0b(c)
            }
              , Z4 = function() {
                const [a] = (0,
                __c.fc)( () => Ix());
                return a
            }
              , p0b = function(a) {
                switch (a) {
                case 2:
                    return O("ibdecg");
                case 7:
                    return O("446quA");
                case 5:
                    return O("j1fbqg");
                case 1:
                    return O("O5i4AQ");
                case 6:
                    return O("C0VHsg");
                case 4:
                    return O("9ND0kg");
                case -1:
                    return O("RWqnLA");
                case 9:
                    return O("nQR/7w");
                case -2:
                    return O("P23rtA");
                case 3:
                    return O("+IXmVg");
                default:
                    throw new E(a);
                }
            }
              , q0b = function(a, b, c) {
                const d = [a];
                for (; a != null && a !== b; )
                    (a = c.next(a)) && d.push(a);
                return d
            }
              , r0b = function(a) {
                const b = a.direction === "rtl" ? -(0,
                __c.Ptb)(a) / 2 : -(0,
                __c.Ntb)(a) / 2
                  , c = -(0,
                __c.Otb)(a) / 2
                  , d = a.width + (0,
                __c.Ntb)(a) / 2 + (0,
                __c.Ptb)(a) / 2;
                a = a.height + (0,
                __c.Otb)(a) / 2 + (0,
                __c.Qtb)(a) / 2;
                return Uu({
                    top: 0,
                    left: 0,
                    width: d,
                    height: a,
                    rotation: 0
                }).translate(b, c)
            }
              , s0b = function(a) {
                return b => ({
                    type: "react",
                    node: (0,
                    __c.N)(a, {
                        ...b
                    })
                })
            }
              , u0b = function(a) {
                var b;
                const c = a.Qy;
                var d = a.content;
                const e = a.context;
                a = a.Xo;
                __c.C((d === null || d === void 0 ? void 0 : (b = d.ag) === null || b === void 0 ? void 0 : b.type) === "formula");
                b = d.ek;
                const f = {
                    type: "dom",
                    render: h => h.innerText = ""
                };
                switch (b.type) {
                case 9:
                    d = f;
                    break;
                case 6:
                    var g;
                    d = (g = c.kja) === null || g === void 0 ? void 0 : g.call(c, {
                        content: __c.ke(__c.c4a, {
                            ...__c.cdb,
                            value: b.value
                        }),
                        context: e,
                        Xo: a
                    });
                    break;
                case 1:
                case 3:
                case 4:
                case 2:
                case 7:
                case 8:
                    d = t0b(c, e, d.Jz, d.ek.type);
                    break;
                case 0:
                    d = {
                        type: "react",
                        node: $4(__c.dS, {
                            label: p0b(b.error),
                            children: $4(__c.Ly, {
                                width: "full",
                                display: "flex",
                                justifyContent: "center",
                                children: $4(__c.WDb, {
                                    tone: "critical"
                                })
                            })
                        })
                    };
                    break;
                default:
                    throw new E(b);
                }
                return d !== null && d !== void 0 ? d : f
            }
              , t0b = function(a, b, c, d) {
                var e;
                return (e = a.nja) === null || e === void 0 ? void 0 : e.call(a, {
                    context: b,
                    value: c,
                    valueType: d
                })
            }
              , x0b = function(a) {
                const b = a.Qy
                  , c = a.Af
                  , d = a.usb
                  , e = a.nb;
                b.nja = f => __c.vKa({
                    ...f,
                    nb: e
                });
                b.pEa = f => u0b({
                    ...f,
                    Qy: b
                });
                b.kja = s0b(v0b({
                    Af: c,
                    cQ: void 0
                }));
                b.rEa = w0b(d, e);
                b.sEa = s0b(f => $4(a5, {
                    ...f,
                    nb: e
                }))
            }
              , y0b = function({label: a, Ua: b, width: c, height: d, scale: e, GHa: f}) {
                return $4("div", {
                    style: {
                        width: c,
                        height: d,
                        transform: `scale(${e})`
                    },
                    className: "bx74uQ",
                    children: b5(__c.Iy, {
                        className: c5("ivlMMQ", d5(f)),
                        size: "small",
                        alignment: "center",
                        children: [b && $4(b, {
                            size: "small"
                        }), a]
                    })
                })
            }
              , d5 = function(a) {
                return {
                    _2BX0vg: a === "primary-default",
                    JfW_Cg: a === "primary-low",
                    isMgNg: a === "primary-active",
                    xwWDeQ: a === "secondary-default",
                    w0EyUQ: a === "secondary-low",
                    _8p5AIA: a === "secondary-active"
                }
            }
              , A0b = function({sd: a, QMa: b, scale: c, Ho: d, Io: e, N1a: f}) {
                const g = e5( () => {
                    const m = d === null || d === void 0 ? void 0 : d.get();
                    if (m != null && m.length !== 0)
                        return new __c.EE(m)
                }
                , [d])
                  , h = e(1)
                  , k = e(c)
                  , l = {
                    ssE9Tg: !a,
                    OkifGQ: a
                };
                return $4(__c.Jy, {
                    Qp: "light",
                    light: "light",
                    Ls: "light",
                    dark: "light",
                    children: m => $4("div", {
                        className: c5("ze9QCQ", l, m.className),
                        style: {
                            width: k,
                            height: k
                        },
                        children: $4("div", {
                            style: {
                                width: h,
                                height: h,
                                transform: `scale(${c})`
                            },
                            className: c5("N7J3UA", l),
                            ref: g === null || g === void 0 ? void 0 : g.Xl,
                            children: $4(__c.hS, {
                                className: c5("m8CFdg", l, {
                                    G6wL4w: f,
                                    W_E0wA: b
                                }),
                                ariaLabel: O("ruWN9A"),
                                children: $4(z0b, {
                                    size: "tiny"
                                })
                            })
                        })
                    })
                })
            }
              , C0b = function() {
                const a = new B0b
                  , b = new __c.IS
                  , c = f5(f => {
                    const {scale: g=1, LMa: h, size: k="small", N1a: l=!0} = f
                      , m = g5(n => a.Io({
                        scale: n,
                        size: k,
                        Vsa: h
                    }), [k, h]);
                    return $4(A0b, {
                        ...f,
                        scale: h ? Math.max(g, h) : g,
                        sd: f.sheet.direction === "rtl",
                        QMa: f.selection != null && a.$gb(f.sheet, f.selection),
                        Io: m,
                        N1a: l
                    })
                }
                )
                  , d = f5(f => {
                    const {scale: g=1, LMa: h, size: k="small", sheet: l, selection: m, Dpb: n} = f
                      , p = g5(u => a.Io({
                        scale: u,
                        size: k,
                        Vsa: h
                    }), [k, h])
                      , q = h ? Math.max(g, h) : g
                      , r = g5(u => m != null && a.dxa(m).has(u), [m])
                      , t = g5(u => m != null && a.Oeb(l, m).has(u), [l, m])
                      , v = g5(u => {
                        const x = n != null && l.layout.cols.Ge(u, n.Lb) >= 0 && l.layout.cols.Ge(u, n.Fc) <= 0;
                        return r(u) ? x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                    }
                    , [l, n, t, r]);
                    return $4(h5, {
                        ...f,
                        fd: g,
                        Bd: q,
                        Io: p,
                        QD: v,
                        DE: b
                    })
                }
                )
                  , e = f5(f => {
                    const {scale: g=1, LMa: h, size: k="small", sheet: l, selection: m, Dpb: n} = f
                      , p = g5(u => a.Io({
                        scale: u,
                        size: k,
                        Vsa: h
                    }), [k, h])
                      , q = h ? Math.max(g, h) : g
                      , r = g5(u => m != null && a.fxa(m).has(u), [m])
                      , t = g5(u => m != null && a.Peb(l, m).has(u), [l, m])
                      , v = g5(u => {
                        const x = n != null && l.layout.rows.Ge(u, n.Qb) >= 0 && l.layout.rows.Ge(u, n.Tc) <= 0;
                        return r(u) ? x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                    }
                    , [l, n, t, r]);
                    return $4(i5, {
                        ...f,
                        fd: q,
                        Bd: g,
                        Io: p,
                        QD: v,
                        DE: b
                    })
                }
                );
                return {
                    o2a: c,
                    n2a: d,
                    p2a: e
                }
            }
              , D0b = function(a) {
                const b = a.Ap
                  , c = () => null;
                return __c.Sx(d => $4(j5, {
                    ...d,
                    Ap: b,
                    rh: c
                }))
            }
              , E0b = function({sheet: a, Y: b, range: c, Fd: d}) {
                k5( () => l5( () => {
                    if (d.current != null) {
                        var e, f = (e = b === null || b === void 0 ? void 0 : b.get()) !== null && e !== void 0 ? e : 1;
                        e = a.direction === "rtl";
                        e = c ? a.qa(c.Lb) * f * (e ? 1 : -1) : 0;
                        var g = c ? -a.ra(c.Qb) * f : 0;
                        d.current.style.transform = `translate(${e}px, ${g}px)`;
                        d.current.style.width = `${a.width * f}px`;
                        d.current.style.height = `${a.height * f}px`
                    }
                }
                ), [a, c, d, b])
            }
              , H0b = function({onScroll: a}) {
                const b = new F0b(a);
                return {
                    GB: b,
                    Xia: f5(c => $4(G0b, {
                        sheet: c.sheet,
                        GB: b,
                        children: c.children
                    }))
                }
            }
              , K0b = function(a) {
                const b = a.Ap
                  , c = a.ff
                  , d = a.gYa
                  , e = ({children: k}) => k
                  , {GB: f, Xia: g} = H0b({
                    onScroll: a.onScroll
                });
                class h extends I0b {
                    get GK() {
                        const k = this.props.ja.Zs;
                        switch (k) {
                        case "screen":
                            return g;
                        case "print":
                            return e;
                        default:
                            throw new E(k);
                        }
                    }
                    componentDidMount() {
                        d.QXa(this.props.item, {
                            Ob: this.props.Ob,
                            ja: this.props.ja
                        })
                    }
                    componentWillUnmount() {
                        d.G7a(this.props.item, {
                            Ob: this.props.Ob,
                            ja: this.props.ja
                        })
                    }
                    render() {
                        d.QXa(this.props.item, {
                            Ob: this.props.Ob,
                            ja: this.props.ja
                        });
                        return $4(J0b, {
                            ...this.props,
                            Y: this.Y,
                            Ap: b,
                            GK: this.GK,
                            rh: this.rh,
                            gYa: d,
                            GB: f
                        })
                    }
                    constructor(...k) {
                        super(...k);
                        this.Y = m5( () => {
                            const l = this.props.item;
                            var m = this.props.ja
                              , n = m.Zs;
                            m = m.zoom;
                            switch (n) {
                            case "screen":
                                return m;
                            case "print":
                                n = d.Sdb(l);
                                if (!n)
                                    return 1;
                                ({width: n} = new __c.eF(l,n.Ob,{
                                    zoom: m
                                }));
                                return n / l.config.width;
                            default:
                                throw new E(n);
                            }
                        }
                        );
                        this.rh = f5(l => $4("div", {
                            className: "wKvivQ",
                            children: $4(__c.DKa, {
                                ...this.props,
                                ...l,
                                ff: c
                            })
                        }))
                    }
                }
                return {
                    j4a: h,
                    GB: f
                }
            }
              , L0b = function(a, b) {
                if (b != null && b.Lb != null && b.Qb != null && b.Fc != null && b.Tc != null) {
                    var c = a.qa(b.Lb)
                      , d = a.ra(b.Qb)
                      , e = a.qa(b.Fc) + b.Fc.width - c;
                    a = a.ra(b.Tc) + b.Tc.height - d;
                    return Uu({
                        top: d,
                        left: c,
                        width: e,
                        height: a
                    })
                }
            }
              , N0b = function(a) {
                const b = a.Ap
                  , c = () => null;
                return d => $4(M0b, {
                    ...d,
                    Ap: b,
                    rh: c
                })
            }
              , R0b = function(a) {
                const b = {
                    transform: "translate(-1000px, -1000px) scale(0)"
                }
                  , c = {
                    WGa: b,
                    Xu: b,
                    Ga: {},
                    nn: {}
                }
                  , d = n5( () => a.Yy.style || c, h => {
                    var k;
                    Object.assign(a.e8.style, h.WGa);
                    Object.assign(a.ZK.style, h.Xu);
                    Object.assign(a.YC.style, h.Ga);
                    Object.assign(a.cD.style, h.nn);
                    h = h === null || h === void 0 ? void 0 : (k = h.Ga) === null || k === void 0 ? void 0 : k.textDecoration;
                    a.YC.classList.toggle("OQx3PQ", h === "underline");
                    a.YC.classList.toggle("_99ezUA", h === "line-through");
                    a.YC.classList.toggle("kppAqQ", h === "underline line-through")
                }
                , {
                    fireImmediately: !0,
                    equals: O0b
                })
                  , e = n5( () => a.Ora, h => {
                    a.YC.classList.toggle("_84KvRA", !h);
                    a.e8.classList.toggle("_84KvRA", !h);
                    a.ZK.classList.toggle("TL_RLA", !h)
                }
                , {
                    fireImmediately: !0
                })
                  , f = n5( () => a.renderer, h => {
                    a.Q8 && (h === null || h === void 0 ? void 0 : h.type) !== "react" ? (a.Q8 = void 0,
                    a.Y2.remove()) : a.cD.innerHTML = "";
                    switch (h === null || h === void 0 ? void 0 : h.type) {
                    case "react":
                        a.Q8 = P0b(h.node, a.Y2);
                        a.cD.appendChild(a.Y2);
                        break;
                    case "dom":
                        h.render(a.cD);
                        break;
                    case void 0:
                        break;
                    default:
                        throw new E(h);
                    }
                    a.Qta()
                }
                , {
                    fireImmediately: !0
                })
                  , g = Q0b ? n5( () => a.lqa, h => {
                    a.YC.classList.toggle("qxD1GA", h)
                }
                , {
                    fireImmediately: !0
                }) : void 0;
                return () => {
                    d();
                    e();
                    f();
                    g === null || g === void 0 || g()
                }
            }
              , O0b = function(a, b) {
                return JSON.stringify(a) === JSON.stringify(b)
            }
              , T0b = function(a) {
                const b = a.Ry
                  , c = a.NB
                  , d = a.lC
                  , e = a.h1a
                  , f = a.wn
                  , g = new S0b(c)
                  , h = (k, l) => f ? i0b(f, k, l) : !1;
                return k => $4(o5, {
                    ...k,
                    PM: h,
                    lC: d,
                    NB: c,
                    Ry: b,
                    mra: g,
                    h1a: e === null || e === void 0 ? void 0 : e.get()
                })
            }
              , Y4 = (a, b) => `${a.column.id}-${a.boundary}:${b.na.id}-${b.boundary}`
              , v0b = ({Af: a, cQ: b}) => c => (0,
            __c.N)(__c.Stb, {
                ...c,
                Af: a,
                cQ: b
            })
              , p5 = __webpack_require__(443763)
              , U0b = p5.Fragment
              , $4 = p5.jsx
              , b5 = p5.jsxs;
            var V0b = __webpack_require__(358579).Z;
            var W0b = __webpack_require__
              , X0b = W0b(993864)
              , c5 = W0b.n_x(X0b)();
            var f5 = __webpack_require__(446474).Pi;
            var q5 = __webpack_require__(875604)
              , r5 = q5.Component
              , I0b = q5.PureComponent
              , g5 = q5.useCallback
              , k5 = q5.useEffect
              , Y0b = q5.useLayoutEffect
              , e5 = q5.useMemo
              , s5 = q5.useRef
              , Z0b = q5.useState;
            var t5 = __webpack_require__(635872)
              , u5 = t5.Om
              , $0b = t5.kq
              , a1b = t5.YN;
            var v5 = __webpack_require__(519427)
              , w5 = v5.action
              , l5 = v5.autorun
              , x5 = v5.comparer
              , m5 = v5.computed
              , b1b = v5.createAtom
              , y5 = v5.observable
              , n5 = v5.reaction
              , c1b = v5.untracked;
            var z5 = __webpack_require__(937763)._;
            var A5 = __webpack_require__(161563)._;
            var P0b = __webpack_require__(36281).createPortal;
            var d1b = f5(a => {
                var b, c, d = a.sheet.direction === "rtl";
                d = {
                    H2wykw: !d,
                    UweldA: d
                };
                const [e] = Z0b( () => Ix())
                  , f = {
                    get: g5( () => {
                        var g;
                        const h = e === null || e === void 0 ? void 0 : (g = e.current) === null || g === void 0 ? void 0 : g.getBoundingClientRect();
                        var k, l;
                        g = {
                            top: 0,
                            left: 0,
                            width: (k = h === null || h === void 0 ? void 0 : h.width) !== null && k !== void 0 ? k : 0,
                            height: (l = h === null || h === void 0 ? void 0 : h.height) !== null && l !== void 0 ? l : 0
                        };
                        return Uu(g)
                    }
                    , [e])
                };
                return b5("div", {
                    className: c5("nMvVqA", d),
                    children: [b5("div", {
                        ref: V0b(a.Fd, e),
                        className: "_0YOFPg",
                        children: [$4(a.Ap, {
                            ...a,
                            viewport: f
                        }), $4("div", {
                            className: c5("Gdl7fQ", d),
                            children: (c = a.KDa) === null || c === void 0 ? void 0 : (b = c.get()) === null || b === void 0 ? void 0 : b.map( (g, h) => $4(g, {}, h))
                        })]
                    }), a.aFb === "visible" && b5(U0b, {
                        children: [$4("div", {
                            className: c5("_32sKQw", d),
                            children: $4(a.g4a, {
                                ...a
                            })
                        }), $4("div", {
                            className: c5("xdIsTQ", d),
                            children: $4(a.k4a, {
                                ...a
                            })
                        }), $4("div", {
                            className: c5("rsTRSA", d),
                            children: $4(a.i4a, {
                                ...a
                            })
                        })]
                    })]
                })
            }
            )
              , e1b = f5(a => {
                a = a.content;
                __c.w(a.type === "text2" || a.type === "text3");
                switch (a.type) {
                case "text2":
                    return a.value.aa;
                case "text3":
                    return __c.ur.ka(a.value).cells.aa();
                default:
                    throw new E(a);
                }
            }
            );
            var w0b = (a, b) => __c.hKa( (c, d) => {
                const e = c.content;
                c = c.context;
                if (e.value.isEmpty)
                    for (; d.lastChild; )
                        d.lastChild.remove();
                else
                    ({Mg: c} = __c.pg(__c.Yg, c.attrs)),
                    c === "wrap" && (d = d.appendChild(document.createElement("div")),
                    d.className = "dt4Dlg"),
                    a.render({
                        container: d,
                        text: e.value,
                        Ha: void 0,
                        writingMode: 1,
                        zd: "start",
                        wg: f1b(e, c),
                        nb: b
                    })
            }
            )
              , f1b = u5( (a, b) => {
                if (b === "wrap")
                    return [];
                a = a.value.aa.split("\n").map(c => c.length + 1);
                a.pop();
                return a
            }
            , {
                equals: x5.structural
            });
            var g1b, h1b, i1b, a5;
            new (g1b = class extends z5 {
                constructor() {
                    super(a5);
                    h1b()
                }
            }
            ,
            ( () => {
                class a extends (i1b = r5) {
                    static A(b) {
                        Q(b, {
                            Mg: m5
                        })
                    }
                    get Mg() {
                        return __c.pg(__c.Yg, this.props.context.attrs).Mg
                    }
                    render() {
                        var b = this.props.content;
                        const c = this.props.context;
                        if (b.value.isEmpty)
                            return null;
                        b = $4(this.props.rh, {
                            content: b,
                            na: c.container.na,
                            col: c.container.column,
                            Mg: this.Mg
                        });
                        return this.Mg === "wrap" ? $4("div", {
                            className: "dt4Dlg",
                            children: b
                        }) : b
                    }
                    constructor(...b) {
                        super(...b);
                        a.A(this)
                    }
                }
                ({c: [a5,h1b]} = A5(a, [], [Jc], i1b))
            }
            )(),
            g1b);
            var B0b = class {
                Io({size: a, scale: b, Vsa: c}) {
                    b = c ? Math.max(c, b) : b;
                    return a === "large" ? __c.kW * b : __c.MCb * b
                }
                constructor() {
                    this.$gb = u5( (a, b) => {
                        var c, d;
                        b = b.get();
                        return b != null && a.layout.rows.count() === (((c = b.rows) === null || c === void 0 ? void 0 : c.size) || 0) && a.layout.cols.count() === (((d = b.columns) === null || d === void 0 ? void 0 : d.size) || 0)
                    }
                    );
                    this.dxa = $0b(a => {
                        var b;
                        return new Set(((b = a.get()) === null || b === void 0 ? void 0 : b.columns) || [])
                    }
                    , {
                        equals: __c.hs
                    });
                    this.fxa = $0b(a => {
                        var b;
                        return new Set(((b = a.get()) === null || b === void 0 ? void 0 : b.rows) || [])
                    }
                    , {
                        equals: __c.hs
                    });
                    this.Oeb = u5( (a, b) => {
                        var {cells: c} = b.get() || {};
                        if (!c)
                            return new Set;
                        if (this.fxa(b).size > 0)
                            return new Set(a.layout.cols);
                        b = this.dxa(b);
                        const d = new Set;
                        for (const e of c) {
                            c = a.layout.cells.get(e.na, e.column);
                            for (const f of q0b(c ? c.span.Lb : e.column, c ? c.span.Fc : e.column, a.layout.cols))
                                (b.size === 0 || b.has(f)) && d.add(f)
                        }
                        return d
                    }
                    , {
                        equals: __c.hs
                    });
                    this.Peb = u5( (a, b) => {
                        var {cells: c} = b.get() || {};
                        if (!c)
                            return new Set;
                        if (this.dxa(b).size > 0)
                            return new Set(a.layout.rows);
                        b = this.fxa(b);
                        const d = new Set;
                        for (const e of c) {
                            c = a.layout.cells.get(e.na, e.column);
                            for (const f of q0b(c ? c.span.Qb : e.na, c ? c.span.Tc : e.na, a.layout.rows))
                                (b.size === 0 || b.has(f)) && d.add(f)
                        }
                        return d
                    }
                    , {
                        equals: __c.hs
                    })
                }
            }
            ;
            var j1b, k1b, l1b, m1b, n1b, o1b, p1b = parseInt("4px", 10) || 4, h5;
            new (j1b = class extends z5 {
                constructor() {
                    super(h5);
                    l1b()
                }
            }
            ,
            ( () => {
                class a extends (m1b = r5) {
                    static A(b) {
                        Q(b, {
                            sd: m5,
                            cq: m5,
                            B4: m5
                        })
                    }
                    get sd() {
                        return this.props.sheet.direction === "rtl"
                    }
                    get cq() {
                        var b;
                        const c = (b = this.props.Ho) === null || b === void 0 ? void 0 : b.get();
                        if (c != null && c.length !== 0)
                            return new __c.EE(c)
                    }
                    get B4() {
                        var b, c, d;
                        return (c = (d = this.props).Hpa) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                    }
                    render() {
                        return $4(__c.Jy, {
                            Qp: "light",
                            light: "light",
                            Ls: "light",
                            dark: "light",
                            children: this.X7a
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        this.onMouseMove = (h5.A(this),
                        w5(c => {
                            const {onMouseMove: d, sheet: e, fd: f=1} = this.props;
                            d === null || d === void 0 || d(c, e, "column", f)
                        }
                        ));
                        this.onMouseLeave = w5(c => {
                            var d, e;
                            (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                        }
                        );
                        this.KVa = (c, d, e) => {
                            const {sheet: f, Io: g, QD: h, kFb: k, fd: l=1, Bd: m=1} = this.props
                              , n = {
                                jNbTIg: !this.sd,
                                gtA7Dw: this.sd
                            }
                              , p = (e === null || e === void 0 ? 0 : e.sticky) ? this.sd ? {
                                right: 0
                            } : {
                                left: 0
                            } : void 0;
                            var q;
                            const r = (e === null || e === void 0 ? 0 : e.sticky) ? (q = this.B4) !== null && q !== void 0 ? q : p : void 0;
                            let t = -1;
                            return b5("div", {
                                style: r,
                                className: c5("Vt2_4w", n, {
                                    Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                }),
                                onMouseMove: this.onMouseMove,
                                onMouseLeave: this.onMouseLeave,
                                children: [f.layout.cols.map(v => {
                                    var u;
                                    t++;
                                    if (!(c && f.layout.cols.Ge(v, c) < 0 || d && f.layout.cols.Ge(v, d) > 0))
                                        return $4(q1b, {
                                            col: v,
                                            label: __c.fB(t),
                                            Ua: k === null || k === void 0 ? void 0 : (u = k.get()) === null || u === void 0 ? void 0 : u.get(v),
                                            Io: g,
                                            QD: h,
                                            fd: l,
                                            Bd: m
                                        }, v.id)
                                }
                                ), (e === null || e === void 0 ? void 0 : e.sticky) && $4("div", {
                                    style: {
                                        width: p1b * l
                                    },
                                    className: c5("HBvlug", "ru3tFQ", n)
                                })]
                            })
                        }
                        ;
                        this.X7a = c => {
                            var d;
                            const e = this.props.sheet
                              , f = e.view.freeze.JG ? e.layout.Md.get(e.view.freeze.JG) : void 0
                              , g = {
                                jNbTIg: !this.sd,
                                gtA7Dw: this.sd
                            };
                            return b5("div", {
                                ref: (d = this.cq) === null || d === void 0 ? void 0 : d.Xl,
                                className: c5("xhBZaw", g, c.className),
                                children: [f && this.KVa(void 0, f, {
                                    sticky: !0
                                }), this.KVa(f ? e.cols.next(f) : void 0)]
                            })
                        }
                    }
                }
                ({c: [h5,l1b]} = A5(a, [], [Jc], m1b))
            }
            )(),
            j1b);
            var i5;
            new (k1b = class extends z5 {
                constructor() {
                    super(i5);
                    n1b()
                }
            }
            ,
            ( () => {
                class a extends (o1b = r5) {
                    static A(b) {
                        Q(b, {
                            sd: m5,
                            cq: m5,
                            B4: m5
                        })
                    }
                    get sd() {
                        return this.props.sheet.direction === "rtl"
                    }
                    get cq() {
                        var b;
                        const c = (b = this.props.Ho) === null || b === void 0 ? void 0 : b.get();
                        if (c != null && c.length !== 0)
                            return new __c.EE(c)
                    }
                    get B4() {
                        var b, c, d;
                        return (c = (d = this.props).Hpa) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                    }
                    render() {
                        return $4(__c.Jy, {
                            Qp: "light",
                            light: "light",
                            Ls: "light",
                            dark: "light",
                            children: this.mpb
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        this.onMouseMove = (i5.A(this),
                        w5(c => {
                            const {onMouseMove: d, sheet: e, Bd: f=1} = this.props;
                            d === null || d === void 0 || d(c, e, "row", f)
                        }
                        ));
                        this.onMouseLeave = w5(c => {
                            var d, e;
                            (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                        }
                        );
                        this.QVa = (c, d, e) => {
                            const {sheet: f, Io: g, QD: h, fd: k=1, Bd: l=1} = this.props
                              , m = {
                                jNbTIg: !this.sd,
                                gtA7Dw: this.sd
                            }
                              , n = (e === null || e === void 0 ? 0 : e.sticky) ? {
                                top: 0
                            } : void 0;
                            var p;
                            const q = (e === null || e === void 0 ? 0 : e.sticky) ? (p = this.B4) !== null && p !== void 0 ? p : n : void 0;
                            let r = -1;
                            return b5("div", {
                                style: q,
                                className: c5("_93roJg", m, {
                                    Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                }),
                                onMouseMove: this.onMouseMove,
                                onMouseLeave: this.onMouseLeave,
                                children: [f.rows.map(t => {
                                    r++;
                                    if (!(c && f.rows.Ge(t, c) < 0 || d && f.rows.Ge(t, d) > 0))
                                        return $4(r1b, {
                                            na: t,
                                            label: `${r + 1}`,
                                            QD: h,
                                            Io: g,
                                            fd: k,
                                            Bd: l
                                        }, t.id)
                                }
                                ), (e === null || e === void 0 ? void 0 : e.sticky) && $4("div", {
                                    style: {
                                        height: p1b * l
                                    },
                                    className: c5("HBvlug", "koz2Hg")
                                })]
                            })
                        }
                        ;
                        this.mpb = c => {
                            var d;
                            const e = this.props.sheet
                              , f = e.view.freeze.XU ? e.layout.$d.get(e.view.freeze.XU) : void 0
                              , g = {
                                jNbTIg: !this.sd,
                                gtA7Dw: this.sd
                            };
                            return b5("div", {
                                ref: (d = this.cq) === null || d === void 0 ? void 0 : d.Xl,
                                className: c5("An9VeA", g, c.className),
                                children: [f && this.QVa(void 0, f, {
                                    sticky: !0
                                }), this.QVa(f ? e.rows.next(f) : void 0)]
                            })
                        }
                    }
                }
                ({c: [i5,n1b]} = A5(a, [], [Jc], o1b))
            }
            )(),
            k1b);
            var q1b = f5(a => {
                const b = a.label
                  , c = a.Ua
                  , d = a.col
                  , e = a.QD
                  , f = a.Io
                  , g = a.fd;
                a = a.Bd;
                const h = f(a)
                  , k = a1b( () => e(d));
                return $4("div", {
                    className: c5("_83Rssw", "d2uLIA", d5(k)),
                    style: {
                        width: d.width * g,
                        height: h
                    },
                    children: $4(y0b, {
                        label: b,
                        Ua: c,
                        width: d.width,
                        height: f(1),
                        scale: a,
                        GHa: k
                    })
                })
            }
            )
              , r1b = f5(a => {
                const b = a.label
                  , c = a.na
                  , d = a.Io
                  , e = a.QD
                  , f = a.fd;
                a = a.Bd;
                const g = d(f)
                  , h = a1b( () => e(c));
                return $4("div", {
                    className: c5("_83Rssw", "JhBzyw", d5(h)),
                    style: {
                        width: g,
                        height: c.height * a
                    },
                    children: $4(y0b, {
                        label: b,
                        width: d(1),
                        height: c.height,
                        scale: f,
                        GHa: h
                    })
                })
            }
            );
            var s1b = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
            var t1b = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
            var z0b = __c.WR({
                eo: s1b,
                medium: t1b
            });
            var u1b, v1b, w1b, j5;
            new (u1b = class extends z5 {
                constructor() {
                    super(j5);
                    v1b()
                }
            }
            ,
            ( () => {
                class a extends (w1b = r5) {
                    static A(b) {
                        Q(b, {
                            ke: m5.struct
                        })
                    }
                    render() {
                        const b = this.props.element;
                        return $4(this.props.Ap, {
                            sheet: b.ga.config,
                            container: b,
                            J7: "visible",
                            Ho: this.props.Ho,
                            nt: this.props.nt,
                            wt: this.props.wt,
                            Y: this.props.Y,
                            ke: this.ke,
                            rh: this.props.rh,
                            fG: void 0
                        })
                    }
                    get ke() {
                        return __c.nB(this.props.element.ga.Na, this.props.Ce)
                    }
                    constructor(...b) {
                        super(...b);
                        a.A(this)
                    }
                }
                ({c: [j5,v1b]} = A5(a, [], [Jc], w1b))
            }
            )(),
            u1b);
            var x1b = class {
                constructor() {
                    this.Ofa = new WeakMap;
                    this.Sdb = a => this.Ofa.get(a);
                    this.QXa = (a, b) => {
                        this.Ofa.set(a, b)
                    }
                    ;
                    this.G7a = (a, b) => {
                        const c = this.Ofa.get(a);
                        c && c.ja === b.ja && c.Ob === b.Ob && this.Ofa.delete(a)
                    }
                }
            }
            ;
            var B5 = parseInt("4px", 10) || 4
              , y1b = f5( ({sheet: a, Y: b, range: c, mv: d, nv: e}) => {
                if (c != null && (d || e)) {
                    var f;
                    b = (f = b === null || b === void 0 ? void 0 : b.get()) !== null && f !== void 0 ? f : 1;
                    f = a.direction === "rtl";
                    var g = {
                        ZJ0G6w: !f,
                        dOI_jA: f
                    };
                    if (d && e)
                        return d = a.ra(c.Tc) + c.Tc.height,
                        a = a.qa(c.Fc) + c.Fc.width,
                        $4("div", {
                            style: {
                                top: d * b,
                                width: a * b,
                                height: B5 * b
                            },
                            className: c5("aX8dhQ", "VGcLng")
                        });
                    if (d)
                        return c = a.qa(c.Fc) + c.Fc.width,
                        $4("div", {
                            style: {
                                width: B5 * b,
                                height: a.height * b,
                                ...(f ? {
                                    right: c * b
                                } : {
                                    left: c * b
                                })
                            },
                            className: c5("aX8dhQ", "gl1RPg", g)
                        });
                    if (e)
                        return c = a.ra(c.Tc) + c.Tc.height,
                        $4("div", {
                            style: {
                                top: c * b,
                                width: a.width * b,
                                height: B5 * b
                            },
                            className: c5("aX8dhQ", "VGcLng")
                        })
                }
            }
            );
            var C5 = ({sheet: a, range: b, Y: c, children: d}) => {
                const e = Z4();
                E0b({
                    sheet: a,
                    Y: c,
                    range: b,
                    Fd: e
                });
                return $4("div", {
                    ref: e,
                    className: c5("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                    children: d
                })
            }
              , z1b = ({sheet: a, range: b, Y: c, children: d}) => {
                const e = Z4();
                E0b({
                    sheet: a,
                    Y: c,
                    range: b,
                    Fd: e
                });
                a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                return $4("div", {
                    className: c5("nstn2A", a, "_9sodyg"),
                    children: $4("div", {
                        ref: e,
                        className: c5("nstn2A", a),
                        children: d
                    })
                })
            }
            ;
            var G0b = f5( ({sheet: a, children: b, GB: c}) => {
                const d = g5(f => {
                    c.Bxa(a, f)
                }
                , [c, a])
                  , e = g5(f => {
                    f != null ? c.HB.set(a, f) : c.HB.delete(a)
                }
                , [c, a]);
                return $4(__c.Exb, {
                    direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                    onScroll: d,
                    bu: e,
                    children: b
                })
            }
            )
              , F0b = class {
                Bxa(a, b) {
                    this.onScroll && this.onScroll(a);
                    this.I3.set(a, b)
                }
                constructor(a) {
                    this.onScroll = a;
                    this.HB = new WeakMap;
                    this.I3 = y5.map(new Map, {
                        deep: !1
                    });
                    this.scrollTo = w5( (b, c) => {
                        b = this.HB.get(b);
                        b === null || b === void 0 || b.scrollTo({
                            left: Math.floor(c)
                        })
                    }
                    )
                }
            }
            ;
            var J0b = f5(a => {
                const b = a.item
                  , c = a.Ho
                  , d = a.Nf
                  , e = a.measureRef
                  , f = a.Y
                  , g = a.ONa
                  , h = a.Ob
                  , k = a.nt
                  , l = a.wt
                  , m = a.Ap
                  , n = a.GK
                  , p = a.rh
                  , q = a.Ce
                  , r = a.GB;
                a = e5( () => __c.nB(b.Na, q), [b, q]);
                const t = e5( () => f5( ({sheet: y, range: z, mv: A, nv: B}) => $4(C5, {
                    sheet: y,
                    range: z,
                    Y: f,
                    children: $4(y1b, {
                        sheet: y,
                        Y: f,
                        range: z,
                        mv: A,
                        nv: B
                    })
                })), [f])
                  , v = r0b(b.config)
                  , u = f.get()
                  , x = Math.min(v.width * u, h.width);
                k5( () => l5( () => {
                    var y = b.config.view.freeze.JG ? b.config.layout.Md.get(b.config.view.freeze.JG) : void 0;
                    if (y != null)
                        if (b.config.qa(y) + y.width > x) {
                            if (y = r.HB.get(b))
                                y.style.overflowX = "hidden"
                        } else if (y = r.HB.get(b))
                            y.style.overflowX = "scroll"
                }
                ), [b, h.width, r, u, x]);
                return $4("div", {
                    ref: e,
                    className: "E8r86A",
                    style: {
                        width: x
                    },
                    children: $4(n, {
                        sheet: b,
                        children: $4("div", {
                            ref: g,
                            className: "cXTiJA",
                            style: {
                                width: v.width * u,
                                height: v.height * u
                            },
                            children: $4("div", {
                                className: "W1ir5A",
                                children: $4(m, {
                                    container: d.vj(b),
                                    sheet: b.config,
                                    J7: "visible",
                                    Ho: c,
                                    Y: f,
                                    nt: k,
                                    wt: l,
                                    ke: a,
                                    rh: p,
                                    fG: t
                                })
                            })
                        })
                    })
                })
            }
            );
            var A1b = f5( ({page: a, range: b, yB: c}) => {
                const d = L0b(a.sheet, b);
                return $4("div", {
                    className: "Gi9pfA",
                    children: a.elements.map( (e, f) => d == null ? c(e, f) : __c.Su(Uu(e)).Mo(d) && c(e, f))
                })
            }
            );
            var B1b = new __c.IS
              , D5 = a => __c.kW * a
              , C1b = () => "primary-default"
              , M0b = f5( ({container: a, Ho: b, nt: c, wt: d, w_: e, Y: f, viewport: g, crb: h, Ap: k, rh: l, yB: m, cfa: n, lxb: p, Zvb: q, Yvb: r}) => {
                const t = a.page
                  , v = e5( () => f5( ({sheet: u, range: x, mv: y, nv: z}) => b5(U0b, {
                    children: [$4(C5, {
                        sheet: t.sheet,
                        range: x,
                        Y: f,
                        children: $4(y1b, {
                            sheet: u,
                            Y: f,
                            range: x,
                            mv: y,
                            nv: z
                        })
                    }), b5(z1b, {
                        sheet: t.sheet,
                        range: x,
                        Y: f,
                        children: [p && $4(p, {}), m && $4(A1b, {
                            page: t,
                            yB: m,
                            range: x
                        }), r && $4(r, {}), n && n()]
                    }), q && x && $4(C5, {
                        sheet: t.sheet,
                        range: x,
                        Y: f,
                        children: $4(q, {
                            range: x
                        })
                    })]
                })), [t, f, p, m, r, n, q]);
                return h ? $4(D1b, {
                    container: a,
                    viewport: g,
                    Y: f,
                    Ho: b,
                    nt: c,
                    wt: d,
                    Ap: k,
                    rh: l,
                    fG: v
                }) : $4(k, {
                    sheet: t.sheet,
                    container: a,
                    J7: "hidden",
                    Ho: b,
                    nt: c,
                    wt: d,
                    w_: e,
                    Y: f,
                    viewport: g,
                    rh: l,
                    fG: v
                })
            }
            )
              , D1b = f5(a => {
                const b = a.container
                  , c = a.Y
                  , d = a.viewport
                  , e = a.Ho
                  , f = a.nt
                  , g = a.wt
                  , h = a.Ap
                  , k = a.rh;
                a = a.fG;
                const l = b.page
                  , m = l.sheet.direction === "rtl"
                  , n = s5(null)
                  , p = s5(null)
                  , q = s5(null);
                k5( () => {
                    const y = E5({
                        sheet: l.sheet,
                        qga: !0,
                        rga: !0,
                        Y: c,
                        viewport: d
                    });
                    return n5( () => y === null || y === void 0 ? void 0 : y.get(), z => {
                        const A = n.current;
                        if (z && A) {
                            var B = l.sheet.direction === "rtl", G;
                            A.style.position = (G = z.position) !== null && G !== void 0 ? G : "sticky";
                            var H;
                            A.style.top = (H = z.top) !== null && H !== void 0 ? H : "0px";
                            var K, I;
                            B ? A.style.right = (K = z.right) !== null && K !== void 0 ? K : "0px" : A.style.left = (I = z.left) !== null && I !== void 0 ? I : "0px";
                            var L;
                            A.style.transform = (L = z.transform) !== null && L !== void 0 ? L : ""
                        }
                    }
                    )
                }
                , [l.sheet, c, d]);
                k5( () => {
                    const y = E5({
                        sheet: l.sheet,
                        qga: !1,
                        rga: !0,
                        Y: c,
                        viewport: d
                    });
                    return n5( () => y === null || y === void 0 ? void 0 : y.get(), z => {
                        const A = q.current;
                        if (z && A) {
                            var B;
                            A.style.position = (B = z.position) !== null && B !== void 0 ? B : "sticky";
                            var G;
                            A.style.top = (G = z.top) !== null && G !== void 0 ? G : "0px";
                            var H;
                            A.style.transform = (H = z.transform) !== null && H !== void 0 ? H : ""
                        }
                    }
                    )
                }
                , [l.sheet, c, d]);
                k5( () => {
                    const y = E5({
                        sheet: l.sheet,
                        qga: !0,
                        rga: !1,
                        Y: c,
                        viewport: d
                    });
                    return n5( () => y === null || y === void 0 ? void 0 : y.get(), z => {
                        const A = p.current;
                        if (z && A) {
                            var B = l.sheet.direction === "rtl", G;
                            A.style.position = (G = z.position) !== null && G !== void 0 ? G : "sticky";
                            var H, K;
                            B ? A.style.right = (H = z.right) !== null && H !== void 0 ? H : "0px" : A.style.left = (K = z.left) !== null && K !== void 0 ? K : "0px";
                            var I;
                            A.style.transform = (I = z.transform) !== null && I !== void 0 ? I : ""
                        }
                    }
                    )
                }
                , [l.sheet, c, d]);
                const r = g5( (y, z, A) => E5({
                    sheet: y,
                    qga: z,
                    rga: A,
                    Y: c,
                    viewport: d
                }), [c, d])
                  , t = e5( () => r ? () => r(l.sheet, !0, !1) : void 0, [r, l.sheet])
                  , v = e5( () => r ? () => r(l.sheet, !1, !0) : void 0, [r, l.sheet]);
                var u;
                const x = (u = c === null || c === void 0 ? void 0 : c.get()) !== null && u !== void 0 ? u : 1;
                return b5("div", {
                    className: c5("OsKKIQ", "cbOp6Q"),
                    children: [$4("div", {
                        className: "VDFv_A",
                        children: $4(h, {
                            sheet: l.sheet,
                            container: b,
                            J7: "hidden",
                            Ho: e,
                            nt: f,
                            wt: g,
                            w_: r,
                            Y: c,
                            viewport: d,
                            rh: k,
                            fG: a
                        })
                    }), $4("div", {
                        ref: n,
                        className: "_688KWg",
                        children: $4(A0b, {
                            sd: m,
                            QMa: !1,
                            Io: D5,
                            scale: x
                        })
                    }), $4("div", {
                        ref: q,
                        className: "m0cT1w",
                        children: $4(h5, {
                            sheet: l.sheet,
                            fd: x,
                            Bd: x,
                            Io: D5,
                            QD: C1b,
                            DE: B1b,
                            Hpa: t
                        })
                    }), $4("div", {
                        ref: p,
                        className: "zm537g",
                        children: $4(i5, {
                            sheet: l.sheet,
                            fd: x,
                            Bd: x,
                            Io: D5,
                            QD: C1b,
                            DE: B1b,
                            Hpa: v
                        })
                    })]
                })
            }
            )
              , E5 = ({sheet: a, qga: b, rga: c, Y: d, viewport: e}) => m5( () => {
                var f = e === null || e === void 0 ? void 0 : __c.ev(e.get()), g;
                const h = (g = d === null || d === void 0 ? void 0 : d.get()) !== null && g !== void 0 ? g : 1;
                if (!f)
                    return {};
                g = {};
                f = new wu(f.left,f.top);
                const k = a.direction === "rtl";
                g.position = "relative";
                c && (g.top = "0px");
                b && (k ? g.right = "0px" : g.left = "0px");
                g.transform = `translate(${b ? f.x * h : 0}px, ${c ? f.y * h : 0}px)`;
                return g
            }
            );
            var S0b = class {
                constructor(a) {
                    this.NB = a;
                    this.r7a = __c.wU;
                    this.xdb = u5( (b, c, d, e) => {
                        d = d.get();
                        const f = new WeakMap;
                        for (let t = 0; t < d.length; t++) {
                            var g = d[t]
                              , h = this.rdb(b, c, g);
                            if (h) {
                                switch (h) {
                                case "start":
                                case "justify":
                                    var k = d[t + 1];
                                    if (k == null || !gI(b, c, k))
                                        continue;
                                    break;
                                case "center":
                                    k = d[t + 1];
                                    if (k == null || !gI(b, c, k))
                                        continue;
                                    k = d[t - 1];
                                    if (k == null || !gI(b, c, k))
                                        continue;
                                    break;
                                case "end":
                                    k = d[t - 1];
                                    if (k == null || !gI(b, c, k))
                                        continue;
                                    break;
                                default:
                                    throw new E(h);
                                }
                                if (k = e(c, g)) {
                                    var l = k.width + (h === "center" ? 0 : this.r7a);
                                    if (!(g.width > l)) {
                                        switch (h) {
                                        case "start":
                                        case "justify":
                                            h = b.qa(g);
                                            k = h + l;
                                            break;
                                        case "center":
                                            k = b.qa(g) + g.width / 2;
                                            h = k - l / 2;
                                            k += l / 2;
                                            break;
                                        case "end":
                                            k = b.qa(g) + g.width;
                                            h = k - l;
                                            break;
                                        default:
                                            throw new E(h);
                                        }
                                        for (l = d.indexOf(g); l >= 0; l--) {
                                            var m = d[l], n = l - 1 < 0 || gI(b, c, d[l - 1]), p;
                                            if (p = m === g || gI(b, c, m)) {
                                                p = h;
                                                var q = k
                                                  , r = b.qa(m);
                                                p = p < r && r < q
                                            }
                                            if (p && n)
                                                f.set(m, 1);
                                            else
                                                break
                                        }
                                        for (g = d.indexOf(g) + 1; g < d.length; g++) {
                                            l = d[g];
                                            if (m = gI(b, c, l))
                                                m = h,
                                                n = k,
                                                p = b.qa(l),
                                                m = m < p && p < n;
                                            if (m)
                                                f.set(l, 1);
                                            else
                                                break
                                        }
                                    }
                                }
                            }
                        }
                        return f
                    }
                    );
                    this.rdb = (b, c, d) => {
                        var e, f;
                        const g = b.layout.cells.get(c, d);
                        if (g && (g.ref.content.ref || g.ref.ya.ref) && g.span.Qb === g.span.Tc && g.span.Lb === g.span.Fc) {
                            var h = this.NB.ov(b, c, d);
                            b = this.NB.Bpa(b, c, d, __c.Zg({
                                Mg: void 0,
                                textAlign: void 0
                            }));
                            var {Mg: k, textAlign: l} = __c.pg(__c.Yg, b);
                            if (k === "overflow")
                                return __c.iKa(l, (e = g.ref.content.ref) === null || e === void 0 ? void 0 : e.type, (f = g.ref.ya.ref) === null || f === void 0 ? void 0 : f.type, h ? () => h.ek.type : void 0)
                        }
                    }
                }
            }
            ;
            var E1b = f5(function(a) {
                const b = a.sheet;
                var c = a.Ni;
                const d = a.zub
                  , e = a.Y
                  , f = a.mra
                  , g = a.fdb;
                a = a.overflow;
                const h = Z4();
                Y0b( () => l5( () => {
                    const p = D(h.current);
                    var q;
                    const r = (q = e === null || e === void 0 ? void 0 : e.get()) !== null && q !== void 0 ? q : 1;
                    q = b.height;
                    p.style.width = `${b.width * r}px`;
                    p.style.height = `${q * r}px`
                }
                ), [h, e, b]);
                const k = g5(p => f.xdb(b, p, d, g), [f, b, d, g]);
                var l = g5( (p, q) => {
                    var r, t;
                    return (t = (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !== null && t !== void 0 ? t : 0
                }
                , [k]);
                c = o0b(b, c, d, l);
                l = b.width;
                const m = b.height
                  , n = b.direction === "rtl";
                return $4("svg", {
                    ref: h,
                    role: "presentation",
                    className: c5("c6a1eQ", {
                        H_CtIQ: !n,
                        _8_56PQ: n,
                        _3NnFzw: a === "visible",
                        JMH1ng: a === "hidden"
                    }),
                    viewBox: `0 0 ${l} ${m}`,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    children: c.map( ({lines: p, color: q, weight: r, $j: t, ak: v}) => $4("path", {
                        stroke: q,
                        strokeDasharray: t,
                        strokeDashoffset: v,
                        strokeWidth: r,
                        d: p.map( ({p1: u, p2: x}) => `M ${u.x} ${u.y} L ${x.x} ${x.y}`).join(" ")
                    }, `${q}-${r}-${t}-${v}`))
                })
            });
            var F1b;
            F1b = Symbol.iterator;
            var G1b = class {
                get size() {
                    return this.$fa
                }
                get([a,b]) {
                    return (a = this.nE.get(a)) ? a.get(b) : void 0
                }
                has([a,b]) {
                    a = this.nE.get(a);
                    return a == null ? !1 : a.has(b)
                }
                set([a,b], c) {
                    let d = this.nE.get(a);
                    d == null && (d = new Map,
                    this.nE.set(a, d));
                    d.set(b, c);
                    this.$fa++;
                    return this
                }
                clear() {
                    this.nE.clear();
                    this.$fa = 0
                }
                delete([a,b]) {
                    const c = this.nE.get(a);
                    if (c == null || !c.delete(b))
                        return !1;
                    this.$fa--;
                    c.size === 0 && this.nE.delete(a);
                    return !0
                }
                forEach(a) {
                    for (const [b,c] of this.nE)
                        for (const [d,e] of c)
                            a([b, d], e)
                }
                *[F1b]() {
                    for (const [a,b] of this.nE)
                        for (const [c,d] of b)
                            yield[[a, c], d]
                }
                constructor() {
                    this.$fa = 0;
                    this.nE = new Map
                }
            }
            ;
            var H1b, I1b, J1b, K1b, L1b, M1b, N1b, Q0b = __c.cx("285688d5", !1), O1b, P1b = class extends r5 {
                render() {
                    const {T$: a, ...b} = this.props
                      , c = this.props.sheet;
                    return b5("div", {
                        ref: this.iYa,
                        className: c5("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                        children: [(a === null || a === void 0 ? void 0 : a.mGa) && $4(F5, {
                            ...b,
                            sheet: c,
                            range: a.mGa.range,
                            mv: !0,
                            nv: !0,
                            className: "_0C8M3w"
                        }), (a === null || a === void 0 ? void 0 : a.r1a) && $4(F5, {
                            ...b,
                            sheet: c,
                            range: a.r1a.range,
                            mv: !1,
                            nv: !0,
                            className: "_7n44yg"
                        }), (a === null || a === void 0 ? void 0 : a.TMa) && $4(F5, {
                            ...b,
                            sheet: c,
                            range: a.TMa.range,
                            mv: !0,
                            nv: !1,
                            className: "fF5r6w"
                        }), (a === null || a === void 0 ? void 0 : a.d0a) && $4(F5, {
                            ...b,
                            sheet: c,
                            range: a.d0a.range,
                            mv: !1,
                            nv: !1,
                            className: "llILYw"
                        })]
                    })
                }
                componentDidMount() {
                    const a = l5( () => {
                        var b = this.props
                          , c = b.Y;
                        b = b.sheet;
                        const d = this.iYa.current;
                        d && (c = c ? c.get() : 1,
                        d.style.width = `${b.width * c}px`,
                        d.style.height = `${b.height * c}px`)
                    }
                    );
                    __c.vc(this, [a])
                }
                constructor(...a) {
                    super(...a);
                    this.iYa = Ix()
                }
            }
            ;
            ({c: [O1b,J1b]} = A5(P1b, [], [Jc], r5));
            J1b();
            var F5;
            new (H1b = class extends z5 {
                constructor() {
                    super(F5);
                    K1b()
                }
            }
            ,
            ( () => {
                class a extends (L1b = r5) {
                    static A(b) {
                        Q(b, {
                            Pxa: m5,
                            bounds: m5
                        })
                    }
                    get Pxa() {
                        const b = this.props.viewport
                          , c = this.props.mv
                          , d = this.props.nv;
                        return b == null || !c && !d ? b : m5( () => {
                            const e = __c.ev(b.get());
                            return Uu({
                                top: d ? 0 : e.top,
                                left: c ? 0 : e.left,
                                width: e.width,
                                height: e.height
                            })
                        }
                        )
                    }
                    render() {
                        const b = this.props.PM
                          , c = this.props.sheet
                          , d = this.props.container
                          , e = this.props.range
                          , f = this.props.fG
                          , g = this.props.mv
                          , h = this.props.nv;
                        return b5("div", {
                            ref: this.ava,
                            className: c5("i0YQww", this.props.className),
                            children: [$4("div", {
                                ref: this.VTa,
                                className: "vUKoKg",
                                children: $4("div", {
                                    ref: this.WTa,
                                    children: $4(G5, {
                                        PM: b,
                                        sheet: c,
                                        container: d,
                                        bounds: e,
                                        Ho: this.props.Ho,
                                        lC: this.props.lC,
                                        rh: this.props.rh,
                                        LY: this.props.LY,
                                        Y: this.props.Y,
                                        Ni: this.Ni,
                                        Y5: this.Y5,
                                        yR: this.yR
                                    })
                                })
                            }), $4(this.Zia, {}), f && $4(f, {
                                sheet: c,
                                range: e,
                                mv: g,
                                nv: h
                            })]
                        })
                    }
                    componentDidMount() {
                        const b = l5( () => {
                            var h = this.props
                              , k = h.Y
                              , l = h.sheet;
                            const m = h.range;
                            var n = this.ava.current;
                            const p = this.VTa.current;
                            h = this.WTa.current;
                            k = k ? k.get() : 1;
                            const q = m ? l.qa(m.Fc) + m.Fc.width - l.qa(m.Lb) : l.width
                              , r = m ? l.ra(m.Tc) + m.Tc.height - l.ra(m.Qb) : l.height;
                            n && (n.style.width = `${q * k}px`,
                            n.style.height = `${r * k}px`);
                            p && (p.style.width = `${q * k}px`,
                            p.style.height = `${r * k}px`);
                            n = l.direction === "rtl";
                            n = m ? l.qa(m.Lb) * k * (n ? 1 : -1) : 0;
                            l = m ? -l.ra(m.Qb) * k : 0;
                            h && (h.style.transform = `translate(${n}px, ${l}px)`)
                        }
                        )
                          , c = this.props.sheet;
                        var d = this.props.w_;
                        const e = this.props.mv
                          , f = this.props.nv
                          , g = e || f ? d === null || d === void 0 ? void 0 : d(c, e, f) : void 0;
                        d = l5( () => {
                            const h = this.ava.current;
                            if (h != null) {
                                var k = e || f ? "sticky" : "relative"
                                  , l = f ? "0px" : "unset"
                                  , m = e ? "0px" : "unset"
                                  , n = e ? "0px" : "unset"
                                  , p = c.direction === "rtl";
                                if (g == null)
                                    h.style.position = k,
                                    h.style.top = l,
                                    h.style.left = p ? "unset" : m,
                                    h.style.right = p ? n : "unset";
                                else {
                                    const x = g.get();
                                    var q;
                                    h.style.position = (q = x.position) !== null && q !== void 0 ? q : k;
                                    var r;
                                    h.style.top = (r = x.top) !== null && r !== void 0 ? r : l;
                                    var t;
                                    h.style.left = p ? "unset" : (t = x.left) !== null && t !== void 0 ? t : m;
                                    var v;
                                    h.style.right = p ? (v = x.right) !== null && v !== void 0 ? v : n : "unset";
                                    var u;
                                    h.style.transform = (u = x.transform) !== null && u !== void 0 ? u : "unset"
                                }
                            }
                        }
                        );
                        __c.vc(this, [b, d])
                    }
                    get bounds() {
                        const b = this.props.sheet
                          , c = this.props.range;
                        if (b.layout.cols.empty || b.layout.rows.empty)
                            return {
                                Lb: void 0,
                                Fc: void 0,
                                Qb: void 0,
                                Tc: void 0
                            };
                        var d, e, f, g;
                        return {
                            Lb: (d = c === null || c === void 0 ? void 0 : c.Lb) !== null && d !== void 0 ? d : b.layout.cols.first(),
                            Fc: (e = c === null || c === void 0 ? void 0 : c.Fc) !== null && e !== void 0 ? e : b.layout.cols.last(),
                            Qb: (f = c === null || c === void 0 ? void 0 : c.Qb) !== null && f !== void 0 ? f : b.layout.rows.first(),
                            Tc: (g = c === null || c === void 0 ? void 0 : c.Tc) !== null && g !== void 0 ? g : b.layout.rows.last()
                        }
                    }
                    constructor(...b) {
                        super(...b);
                        this.ava = (F5.A(this),
                        Ix());
                        this.VTa = Ix();
                        this.WTa = Ix();
                        this.yR = new Q1b;
                        this.Aub = m5( () => [...this.Ni.get().keys()].sort( (c, d) => this.props.sheet.layout.rows.Ge(c, d)), {
                            equals: __c.is()
                        });
                        this.yub = m5( () => [...this.Y5.get().keys()].sort( (c, d) => this.props.sheet.layout.cols.Ge(c, d)), {
                            equals: __c.is()
                        });
                        this.Zia = f5( () => $4(this.props.f4a, {
                            Ni: this.Aub,
                            zub: this.yub,
                            fdb: this.yR.odb,
                            range: this.props.range
                        }));
                        this.Ni = m5( () => {
                            var c;
                            const d = this.props.sheet;
                            var e = this.props.Y
                              , f = (c = this.Pxa) === null || c === void 0 ? void 0 : c.get();
                            if (f && (f.height <= 0 || f.width <= 0))
                                return new Map;
                            c = this.bounds;
                            e = e.get();
                            var g = 50 * e;
                            const h = f ? f.la.y - g : c.Qb ? d.ra(c.Qb) : 0;
                            f = f ? f.br.y + g : c.Tc ? d.ra(c.Tc) + c.Tc.height : 0;
                            g = new Map;
                            for (let k = c.Qb; k != null && c.Tc != null && d.layout.rows.Ge(k, c.Tc) <= 0; k = d.layout.rows.next(k)) {
                                const l = d.ra(k);
                                if (!(l + k.height < h)) {
                                    if (l > f)
                                        break;
                                    g.set(k, l * e)
                                }
                            }
                            return g
                        }
                        , {
                            equals: x5.shallow
                        });
                        this.Y5 = m5( () => {
                            var c;
                            const d = this.props.sheet;
                            var e = this.props.Y
                              , f = (c = this.Pxa) === null || c === void 0 ? void 0 : c.get();
                            if (f && (f.height <= 0 || f.width <= 0))
                                return new Map;
                            c = this.bounds;
                            e = e.get();
                            var g = 50 * e;
                            const h = f ? f.la.x - g : c.Lb ? d.qa(c.Lb) : 0;
                            f = f ? f.br.x + g : c.Fc ? d.qa(c.Fc) + c.Fc.width : 0;
                            g = new Map;
                            for (let k = c.Lb; k != null && c.Fc != null && d.layout.cols.Ge(k, c.Fc) <= 0; k = d.layout.cols.next(k)) {
                                const l = d.qa(k);
                                if (!(l + k.width < h)) {
                                    if (l > f)
                                        break;
                                    g.set(k, l * e)
                                }
                            }
                            return g
                        }
                        , {
                            equals: x5.shallow
                        })
                    }
                }
                ({c: [F5,K1b]} = A5(a, [], [Jc], L1b))
            }
            )(),
            H1b);
            var Q1b = class {
                constructor() {
                    this.cells = new G1b;
                    this.iwa = (a, b, c) => {
                        let d = this.cells.get([a, b]);
                        d == null && (d = y5.box(void 0, {
                            deep: !1
                        }),
                        this.cells.set([a, b], d));
                        d.set(c);
                        return () => {
                            const e = this.cells.get([a, b]);
                            e === d && (e.set(void 0),
                            this.cells.delete([a, b]))
                        }
                    }
                    ;
                    this.odb = (a, b) => {
                        var c;
                        let d = this.cells.get([a, b]);
                        d == null && (d = y5.box(void 0, {
                            deep: !1
                        }),
                        this.cells.set([a, b], d));
                        return (c = d.get()) === null || c === void 0 ? void 0 : c.fIa
                    }
                }
            }
            , G5;
            new (I1b = class extends z5 {
                constructor() {
                    super(G5);
                    M1b()
                }
            }
            ,
            ( () => {
                class a extends (N1b = r5) {
                    static A(b) {
                        Q(b, {
                            qK: y5.shallow,
                            cq: m5,
                            TFa: w5,
                            Y8: w5.bound
                        })
                    }
                    get cq() {
                        var b;
                        const c = (b = this.props.Ho) === null || b === void 0 ? void 0 : b.get();
                        if (c != null && c.length !== 0)
                            return new __c.EE(c)
                    }
                    render() {
                        var b;
                        return b5("div", {
                            ref: V0b(this.Fd, (b = this.cq) === null || b === void 0 ? void 0 : b.Xl),
                            children: [$4("div", {
                                ref: this.Jla,
                                className: "_5YlOqQ"
                            }), $4("div", {
                                ref: this.Lla,
                                className: "_XCmKw"
                            }), this.qK.map(c => c.xnb)]
                        })
                    }
                    componentDidMount() {
                        const b = n5( () => [this.props.sheet, this.props.Y5.get(), this.props.Ni.get()], ([e,f,g], h) => {
                            [h] = h || [];
                            e !== h && this.H7a();
                            this.TFa(f, g)
                        }
                        , {
                            fireImmediately: !0
                        })
                          , c = l5( () => {
                            var e = this.props
                              , f = e.Y;
                            e = e.sheet;
                            const g = this.Fd.current;
                            g && (f = f ? f.get() : 1,
                            g.style.width = `${e.width * f}px`,
                            g.style.height = `${e.height * f}px`)
                        }
                        )
                          , d = this.qK.map(e => R0b(e));
                        __c.vc(this, [c, b, ...d])
                    }
                    H7a() {
                        const b = D(this.Jla.current)
                          , c = D(this.Lla.current);
                        b.innerHTML = "";
                        c.innerHTML = "";
                        this.jCa.length = 0;
                        this.qK.length = 0
                    }
                    TFa(b, c) {
                        const d = D(this.Jla.current)
                          , e = D(this.Lla.current)
                          , f = []
                          , g = new Map;
                        for (const h of this.jCa)
                            c.has(h.na) ? g.set(h.na, h) : f.push(h);
                        for (const [h,k] of c)
                            c = g.get(h) || f.pop(),
                            c || (c = new R1b(this.Y8,h),
                            d.appendChild(c.f8),
                            e.appendChild(c.h8),
                            this.jCa.push(c)),
                            c.update(k, h, b);
                        for (const h of f)
                            h.hide()
                    }
                    Y8(b, c) {
                        const d = this.props.LY
                          , e = this.props.sheet
                          , f = this.props.container
                          , g = this.props.yR;
                        b = new S1b(this.props.PM,this.props.lC,this.props.rh,d(b, c),e,b,c,f,g.iwa,this.jaa,this.iaa);
                        __c.vc(this, R0b(b));
                        this.qK.push(b);
                        return b
                    }
                    constructor(...b) {
                        super(...b);
                        this.Fd = (G5.A(this),
                        Ix());
                        this.Jla = Ix();
                        this.Lla = Ix();
                        this.jCa = [];
                        this.qK = [];
                        this.jaa = u5(c => {
                            const d = this.props.Ni.get();
                            return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                        }
                        );
                        this.iaa = u5(c => {
                            const d = this.props.Y5.get();
                            return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                        }
                        )
                    }
                }
                ({c: [G5,M1b]} = A5(a, [], [Jc], N1b))
            }
            )(),
            I1b);
            var R1b = class {
                static A(a) {
                    Q(a, {
                        update: w5
                    })
                }
                update(a, b, c) {
                    [this.f8, this.h8].forEach(d => {
                        d.style.transform = `translateY(${a}px)`;
                        d.classList.add("FPpqvg")
                    }
                    );
                    this.na = b;
                    for (const [d] of c)
                        c = this.qK.get(d),
                        c || (c = this.Y8(d, b),
                        this.qK.set(d, c),
                        this.f8.appendChild(c.e8),
                        this.h8.appendChild(c.ZK)),
                        c.update(b)
                }
                hide() {
                    [this.f8, this.h8].forEach(a => {
                        a.style.transform = "translate(-1000px, -1000px) scale(0)"
                    }
                    )
                }
                constructor(a, b) {
                    this.Y8 = a;
                    this.na = b;
                    this.f8 = (R1b.A(this),
                    document.createElement("div"));
                    this.h8 = document.createElement("div");
                    this.qK = new Map
                }
            }
              , S1b = class {
                static A(a) {
                    Q(a, {
                        Q8: y5.ref,
                        na: y5.ref,
                        lqa: m5,
                        update: w5,
                        Js: m5,
                        attrs: m5.struct,
                        Ora: m5,
                        Xu: m5,
                        renderer: m5,
                        fIa: m5.struct
                    })
                }
                get lqa() {
                    if (!Q0b)
                        return !1;
                    const a = this.Js;
                    return a == null || a.content.ref == null || a.content.ref.type !== "formula" ? !1 : this.PM(this.sheet, a.content.ref.value)
                }
                update(a) {
                    a !== this.na && (this.na = a,
                    this.Yy.na = a,
                    this.Ina && this.Ina(),
                    this.Ina = this.iwa(this.na, this.col, this))
                }
                get xnb() {
                    return this.Q8
                }
                get Js() {
                    const a = this.sheet.layout.cells.get(this.na, this.col);
                    return a ? a.ref : void 0
                }
                get attrs() {
                    const a = this.Yy.attrs;
                    return {
                        Mg: a === null || a === void 0 ? void 0 : a.Mg,
                        textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                        direction: a === null || a === void 0 ? void 0 : a.direction,
                        link: a === null || a === void 0 ? void 0 : a.link
                    }
                }
                get Ora() {
                    var a = this.Yy.span;
                    if (!a)
                        return !1;
                    if (a.Qb === a.Tc && a.Lb === a.Fc)
                        return !0;
                    var b = this.jaa("first");
                    const c = this.jaa("last")
                      , d = this.iaa("first")
                      , e = this.iaa("last");
                    if (!(b && c && d && e))
                        return !1;
                    b = this.sheet.layout.rows.Ge(a.Qb, b) >= 0 && this.sheet.layout.rows.Ge(a.Qb, c) <= 0 ? a.Qb : b;
                    a = this.sheet.layout.cols.Ge(a.Lb, d) >= 0 && this.sheet.layout.cols.Ge(a.Lb, e) <= 0 ? a.Lb : d;
                    return b === this.na && a === this.col
                }
                get Xu() {
                    const a = this.sheet
                      , b = this.na
                      , c = this.col;
                    if (!this.container)
                        return {
                            type: void 0,
                            sheet: a,
                            na: b,
                            column: c
                        };
                    switch (this.container.type) {
                    case "fixed-page":
                        return this.container.Mmb.Hd(c, b);
                    case "sheet-item":
                        return this.container.Oxa.Hd(c, b);
                    case "sheet-element":
                        return this.container.Sqb.Hd(c, b);
                    default:
                        throw new E(this.container);
                    }
                }
                get renderer() {
                    const a = this.Js;
                    if (a && this.Ora && (a.content.ref || a.ya.ref))
                        return this.lC({
                            context: {
                                container: this.Xu,
                                attrs: this.attrs
                            },
                            Xo: this.Qta,
                            rh: this.rh
                        })
                }
                get fIa() {
                    this.gIa.reportObserved();
                    var a = c1b( () => this.renderer);
                    if (a && (a = a.type === "react" ? this.Y2 : this.cD,
                    a.childNodes.length !== 0 && (a = a.childNodes[0],
                    a instanceof HTMLElement)))
                        return {
                            width: a.clientWidth,
                            height: a.clientHeight
                        }
                }
                constructor(a, b, c, d, e, f, g, h, k, l, m) {
                    var n, p, q, r, t, v;
                    this.PM = a;
                    this.lC = b;
                    this.Yy = d;
                    this.sheet = e;
                    this.col = f;
                    this.container = h;
                    this.iwa = k;
                    this.jaa = l;
                    this.iaa = m;
                    this.e8 = (S1b.A(this),
                    document.createElement("div"));
                    this.ZK = document.createElement("div");
                    this.YC = document.createElement("div");
                    this.cD = document.createElement("div");
                    this.Y2 = document.createElement("div");
                    this.gIa = b1b("content size atom");
                    this.Qta = w5( () => this.gIa.reportChanged());
                    this.na = g;
                    this.e8.className = "_2JFriw";
                    this.ZK.className = "imy9ug";
                    this.YC.className = c5("pDMp7w", {
                        _0yZ6Qg: ((p = this.Js) === null || p === void 0 ? void 0 : (n = p.content.ref) === null || n === void 0 ? void 0 : n.type) !== "text3",
                        qhF5uA: ((r = this.Js) === null || r === void 0 ? void 0 : (q = r.content.ref) === null || q === void 0 ? void 0 : q.type) !== "text3" && ((v = this.Js) === null || v === void 0 ? void 0 : (t = v.content.ref) === null || t === void 0 ? void 0 : t.type) !== "text2",
                        qxD1GA: this.lqa
                    });
                    this.cD.className = "_30B9pw";
                    this.YC.appendChild(this.cD);
                    this.ZK.appendChild(this.YC);
                    this.Y2.className = "G7zH2w";
                    this.Ina = k(this.na, this.col, this);
                    this.rh = u => $4(c, {
                        ...u,
                        Xo: this.Qta
                    })
                }
            }
            ;
            var T1b, U1b, V1b, o5;
            new (T1b = class extends z5 {
                constructor() {
                    super(o5);
                    U1b()
                }
            }
            ,
            ( () => {
                class a extends (V1b = r5) {
                    static A(b) {
                        Q(b, {
                            T$: m5
                        })
                    }
                    render() {
                        const {PM: b, sheet: c, container: d, Ho: e, w_: f, lC: g, ke: h, rh: k, viewport: l, fG: m, h1a: n=!1} = this.props;
                        if (!c.layout.cols.empty && !c.layout.rows.empty)
                            return $4("div", {
                                className: c5("SNkrHw", c.direction === "ltr" ? "TA4X7w" : "WvuqMw", {
                                    RaA0Nw: n
                                }),
                                ...h,
                                children: $4(O1b, {
                                    PM: b,
                                    lC: g,
                                    rh: k,
                                    f4a: this.Zia,
                                    LY: this.LY,
                                    sheet: c,
                                    container: d,
                                    Ho: e,
                                    w_: f,
                                    Y: this.Y,
                                    viewport: l,
                                    fG: m,
                                    T$: this.T$
                                })
                            })
                    }
                    get T$() {
                        var b = this.props.sheet;
                        const c = {}
                          , d = b.view.freeze.XU ? b.layout.$d.get(b.view.freeze.XU) : void 0
                          , e = b.view.freeze.JG ? b.layout.Md.get(b.view.freeze.JG) : void 0
                          , f = b.layout.rows.first()
                          , g = b.layout.rows.last()
                          , h = b.layout.cols.first()
                          , k = b.layout.cols.last();
                        if (f != null && g != null && h != null && k != null) {
                            var l = e ? b.layout.cols.next(e) : h;
                            b = d ? b.layout.rows.next(d) : f;
                            d && e && (c.mGa = {
                                range: {
                                    Lb: h,
                                    Qb: f,
                                    Fc: e,
                                    Tc: d
                                }
                            });
                            d && l && (c.r1a = {
                                range: {
                                    Lb: l,
                                    Qb: f,
                                    Fc: k,
                                    Tc: d
                                }
                            });
                            e && b && (c.TMa = {
                                range: {
                                    Lb: h,
                                    Qb: b,
                                    Fc: e,
                                    Tc: g
                                }
                            });
                            b && l && (c.d0a = {
                                range: {
                                    Lb: l,
                                    Qb: b,
                                    Fc: k,
                                    Tc: g
                                }
                            });
                            return c
                        }
                    }
                    get Y() {
                        return this.props.Y ? this.props.Y : m5( () => 1)
                    }
                    constructor(...b) {
                        super(...b);
                        this.Zia = (o5.A(this),
                        f5(c => {
                            const {sheet: d, mra: e, Y: f, J7: g="hidden"} = this.props;
                            return $4(C5, {
                                sheet: d,
                                range: c.range,
                                Y: f,
                                children: $4(E1b, {
                                    ...c,
                                    sheet: d,
                                    Y: this.Y,
                                    mra: e,
                                    overflow: g
                                })
                            })
                        }
                        ));
                        this.LY = (c, d) => new __c.BKa(this.props.NB,this.props.Ry,this.props.sheet,c,d,this.Y,this.nt,this.wt);
                        this.nt = (c, d) => {
                            var e, f;
                            return (e = (f = this.props).nt) === null || e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                        }
                        ;
                        this.wt = (c, d) => {
                            var e, f;
                            return (e = (f = this.props).wt) === null || e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                        }
                    }
                }
                ({c: [o5,U1b]} = A5(a, [], [Jc], V1b))
            }
            )(),
            T1b);
            __c.IKa = {
                Ufb: function(a) {
                    const b = a.vn
                      , c = a.Gd
                      , d = a.ed
                      , e = a.Vl
                      , f = a.NB
                      , g = a.Ry
                      , h = a.MW;
                    x0b({
                        Qy: a.Qy,
                        Af: a.Af,
                        usb: a.qO,
                        nb: a.nb
                    });
                    const k = T0b({
                        lC: h,
                        NB: f,
                        Ry: g,
                        wn: void 0
                    });
                    b.rja = N0b({
                        Ap: k
                    });
                    c.$ia = D0b({
                        Ap: k
                    });
                    ({j4a: a} = K0b({
                        Ap: k,
                        ff: e(),
                        gYa: new x1b
                    }));
                    d.Ip.qja = a;
                    const {o2a: l, p2a: m, n2a: n} = C0b();
                    return {
                        dEa: f5(p => $4(d1b, {
                            ...p,
                            container: void 0,
                            Ap: k,
                            i4a: l,
                            k4a: m,
                            g4a: n,
                            rh: e1b
                        }))
                    }
                }
            };
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/420180e56f0b8438.js.map

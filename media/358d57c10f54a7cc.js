(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[89047], {

    /***/
    555434: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(581698);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var D = __c.D;
            var Hf = __c.Hf;
            var M0 = function*(a) {
                let b = 0;
                for (const c of a)
                    yield[b++, c]
            }
              , ZPb = function(a) {
                return N0("g", {
                    children: a.o8.map(b => a.render(b))
                })
            }
              , cQb = function(a, {TA: b, lO: c, SI: d, TI: e}={
                TA: !1,
                lO: !1,
                SI: new Map,
                TI: new Map
            }) {
                const f = a.xb
                  , g = a.Qe
                  , h = a.JJ
                  , k = a.kr.diff
                  , l = k.enter.size > 0 && k.update.size === 0 && k.exit.size === 0 && !b;
                $Pb({
                    M: a.M,
                    animations: a.animations,
                    xb: {
                        enter: l && f.sS || f.enter,
                        update: f.update,
                        exit: f.exit,
                        Xe: f.Xe
                    },
                    getKey: a.getKey,
                    Fk: a.Fk,
                    xm: a.xm,
                    ne: aQb({
                        JJ: h,
                        ygb: l,
                        ne: a.ne,
                        tj: a.tj
                    }),
                    Qe: h ? g : 0,
                    pe: bQb({
                        JJ: h,
                        Agb: k.enter.size === 0 && k.update.size === 0 && k.exit.size > 0 && !b,
                        pe: a.pe,
                        El: a.El
                    }),
                    Dr: a.Dr,
                    Hx: a.Hx && c,
                    Tf: a.Tf,
                    diff: k,
                    SI: d,
                    TI: e,
                    TA: b
                })
            }
              , dQb = function(a, b) {
                const c = new Map;
                if (a == null)
                    return c;
                for (const d of a)
                    c.set(b.getKey(d), d);
                return c
            }
              , eQb = function(a) {
                const b = a.xb.update
                  , c = a.kr.diff
                  , d = a.getKey
                  , e = a.data.get();
                return e.map( (f, g) => ({
                    pi: f,
                    index: g,
                    key: d(f),
                    data: e,
                    Yc: Hf(b, ({value: h}) => O0( () => h(f, c, d)))
                }))
            }
              , aQb = function({JJ: a, ygb: b, ne: c, tj: d}) {
                return a ? b && d != null ? d : c : 0
            }
              , bQb = function({JJ: a, Agb: b, pe: c, El: d}) {
                return a ? b && d != null ? d : c : 0
            }
              , P0 = function(a, b) {
                return D(a.get(b), "Could not find animations for key {}", b)
            }
              , fQb = function*(a, b) {
                for (const c of a.keys()) {
                    const d = P0(a, c);
                    for (const e of b)
                        yield d[e]
                }
            }
              , gQb = function({pi: a, animations: b, xb: c, diff: d, getKey: e, qUa: f}) {
                return Object.keys(c).some(g => {
                    const h = c[g];
                    if (f === "exit" && h.oX)
                        return !0;
                    g = b[g];
                    return h.value(a, d, e) !== g.definition.end
                }
                )
            }
              , Q0 = function(a, b) {
                const c = new Set;
                for (const [d,e] of M0(b.values()))
                    c.add(a.group(e, d));
                return new Map(Array.from(c, (d, e) => [d, e]))
            }
              , R0 = function(a, b, c, d, e, f) {
                var g = a.start
                  , h = a.end;
                const k = a.Vf;
                __c.w(d > 0, "count should be non-zero");
                __c.w(g >= 0 && g <= 1, "start should be between 0 and 1");
                __c.w(h >= 0 && h <= 1, "end should be between 0 and 1");
                __c.w(k >= 0 && k <= 1, "stagger should be between 0 and 1");
                g *= b;
                h = b * h - g;
                if (a.zb && !e)
                    return {
                        mc: 0,
                        bk: 0,
                        So: 1
                    };
                if (f && e)
                    return {
                        mc: b,
                        bk: 0,
                        So: 1
                    };
                if (d === 1)
                    return {
                        mc: h,
                        bk: g,
                        So: 1
                    };
                a = h / (1 + (d - 1) * k);
                c = g + (h - a) / (d - 1) * c;
                return {
                    mc: a,
                    bk: c,
                    So: b === 0 || a + c === 0 ? 1 : b / (a + c)
                }
            }
              , $Pb = function({M: a, animations: b, xb: c, getKey: d, Fk: e, xm: f, ne: g, Qe: h, pe: k, Dr: l, Hx: m, Tf: n, diff: p, SI: q, TI: r, TA: t}) {
                hQb({
                    M: a,
                    animations: b,
                    xb: c,
                    Fk: e,
                    xm: f,
                    ne: g,
                    Dr: l,
                    Hx: m,
                    Tf: n,
                    diff: p,
                    SI: q,
                    getKey: d,
                    TA: t
                });
                iQb({
                    animations: b,
                    xb: c,
                    Fk: e,
                    Qe: h,
                    Dr: l,
                    Hx: m,
                    diff: p,
                    getKey: d,
                    TA: t
                });
                jQb({
                    M: a,
                    animations: b,
                    xb: c,
                    Fk: e,
                    xm: f,
                    pe: k,
                    Dr: l,
                    Hx: m,
                    diff: p,
                    TI: r,
                    getKey: d,
                    TA: t
                })
            }
              , hQb = function({M: a, animations: b, xb: c, Fk: d, xm: e, ne: f, Dr: g, Hx: h, Tf: k, diff: l, SI: m, getKey: n, TA: p}) {
                const q = Hf(c.enter, t => Q0(t, l.enter));
                for (const [t,[v,u]] of M0(l.enter)) {
                    var r;
                    const x = (r = m.get(v)) !== null && r !== void 0 ? r : u;
                    d.set(v, u);
                    const y = b.get(v);
                    y && e.delete(v);
                    const z = Hf(c.enter, (A, B) => {
                        var G, H = c.update[B];
                        const K = A.value(x, l, n)
                          , I = H.value(u, l, n);
                        var L = A.group(x, t), P;
                        const S = (P = (G = c.Xe) === null || G === void 0 ? void 0 : G[B]) !== null && P !== void 0 ? P : !1;
                        G = q[B];
                        L = D(G.get(L));
                        P = A.easing;
                        if (y) {
                            A = y[B];
                            const {mc: oa, bk: ka, So: ma} = R0(H, f, L, G.size, p, S);
                            A.update({
                                end: I,
                                mc: oa,
                                bk: ka,
                                So: ma,
                                easing: P,
                                mka: !1
                            });
                            return A
                        }
                        const {mc: U, bk: ba, So: ha} = R0(A, K === I ? 0 : f, L, G.size, p, S);
                        H = D(a).aFa({
                            start: K,
                            end: I,
                            mc: U,
                            bk: ba,
                            So: ha,
                            easing: P
                        }, S ? k : void 0);
                        H.play();
                        g && h && H.z$(g);
                        return H
                    }
                    );
                    b.set(v, z)
                }
            }
              , iQb = function({animations: a, xb: b, Fk: c, Qe: d, Dr: e, Hx: f, diff: g, getKey: h, TA: k}) {
                for (const [n,p] of g.update)
                    c.set(n, p);
                const l = new Map;
                for (const [n,p] of g.update)
                    c = P0(a, n),
                    gQb({
                        pi: p,
                        animations: c,
                        xb: b.update,
                        diff: g,
                        getKey: h,
                        qUa: "update"
                    }) && l.set(n, p);
                const m = Hf(b.update, n => Q0(n, l));
                for (const [n,[p,q]] of M0(l)) {
                    const r = P0(a, p);
                    c = Hf(b.update, (t, v) => {
                        var u;
                        const x = r[v]
                          , y = t.value(q, g, h);
                        if (y === x.definition.end)
                            return x;
                        var z = t.group(q, n);
                        const A = m[v];
                        z = D(A.get(z));
                        var B;
                        const G = (B = (u = b.Xe) === null || u === void 0 ? void 0 : u[v]) !== null && B !== void 0 ? B : !1
                          , {mc: H, bk: K, So: I} = R0(t, d, z, A.size, k, G);
                        x.update({
                            end: y,
                            mc: H,
                            bk: K,
                            So: I,
                            easing: t.easing,
                            mka: !1
                        });
                        e && f && x.z$(e);
                        return x
                    }
                    );
                    a.set(p, c)
                }
            }
              , jQb = function({M: a, animations: b, xb: c, Fk: d, xm: e, pe: f, Dr: g, Hx: h, diff: k, TI: l, getKey: m, TA: n}) {
                const p = new Map;
                var q = new Map;
                for (const [B,G] of k.exit) {
                    var r = P0(b, B), t;
                    gQb({
                        pi: (t = l.get(B)) !== null && t !== void 0 ? t : G,
                        animations: r,
                        xb: c.exit,
                        diff: k,
                        getKey: m,
                        qUa: "exit"
                    }) ? p.set(B, G) : q.set(B, G)
                }
                const v = Object.keys(c.enter);
                for (var u of q.keys())
                    S0({
                        animations: b,
                        M: a,
                        Fk: d,
                        xm: e,
                        yy: v,
                        key: u
                    });
                q = Hf(c.exit, B => Q0(B, p));
                for (const [B,[G,H]] of M0(p)) {
                    d.delete(G);
                    e.set(G, H);
                    var x;
                    r = (x = l.get(G)) !== null && x !== void 0 ? x : H;
                    u = P0(b, G);
                    t = [];
                    for (const K in c.exit) {
                        var y;
                        const I = c.exit[K]
                          , L = u[K]
                          , P = I.value(r, k, m);
                        if (!I.oX && P === L.definition.end)
                            continue;
                        var z = I.group(r, B);
                        const S = q[K];
                        z = D(S.get(z));
                        var A;
                        const U = (A = (y = c.Xe) === null || y === void 0 ? void 0 : y[K]) !== null && A !== void 0 ? A : !1
                          , {mc: ba, bk: ha, So: oa} = R0(I, f, z, S.size, n, U);
                        t.push({
                            animation: L,
                            definition: {
                                end: P,
                                mc: ba,
                                bk: ha,
                                So: oa,
                                easing: I.easing,
                                mka: I.oX
                            }
                        })
                    }
                    ({animation: r} = __c.ns(t, ({definition: K}) => K.bk + K.mc));
                    for (const {animation: K, definition: I} of t)
                        K.update({
                            ...I,
                            Fj: K === r ? () => S0({
                                animations: b,
                                M: a,
                                Fk: d,
                                xm: e,
                                yy: v,
                                key: G
                            }) : void 0
                        }),
                        g && h && K.z$(g)
                }
            }
              , S0 = function({animations: a, M: b, Fk: c, xm: d, yy: e, key: f}) {
                const g = P0(a, f);
                for (const h of e)
                    e = g[h],
                    D(b).GVa(e);
                a.delete(f);
                c.delete(f);
                d.delete(f)
            }
              , kQb = function({animations: a, M: b, Fk: c, xm: d, kr: e, yy: f}) {
                for (const g of a.keys())
                    S0({
                        animations: a,
                        M: b,
                        Fk: c,
                        xm: d,
                        yy: f,
                        key: g
                    });
                e.clear()
            }
              , oQb = function(a, b, c) {
                function d() {
                    T0( () => U0( () => [a.data.get(), a.j.boa], () => {
                        var m = a.j;
                        const n = m.Zj;
                        m = m.boa;
                        const p = a.Jnb
                          , q = a.MUa;
                        a.MUa = m;
                        a.Jnb = n;
                        q != null && (a.JJ = lQb.structural(m, q) || p !== n)
                    }
                    , {
                        fireImmediately: !0
                    }), [])
                }
                mQb( () => a.kr.clear());
                const e = new nQb
                  , f = O0( () => e.o8(a))
                  , g = m => {
                    e.flush(a, m)
                }
                  , h = () => {
                    e.reset(a)
                }
                  , k = () => a.data.get()
                  , l = V0(function({children: m}) {
                    d();
                    T0( () => e.subscribe(a), []);
                    return N0(ZPb, {
                        render: m,
                        o8: f.get()
                    })
                });
                return {
                    Zb: function({children: m}) {
                        T0( () => {
                            b === null || b === void 0 || b(a, {
                                flush: g,
                                reset: h,
                                capture: k
                            });
                            return () => c === null || c === void 0 ? void 0 : c(a)
                        }
                        , []);
                        return N0(l, {
                            children: m
                        })
                    },
                    yw: function() {
                        d();
                        T0( () => {
                            const m = e.subscribe(a);
                            b === null || b === void 0 || b(a, {
                                flush: g,
                                reset: h,
                                capture: k
                            });
                            return () => {
                                c === null || c === void 0 || c(a);
                                m()
                            }
                        }
                        , []);
                        return f
                    }
                }
            }
              , W0 = function(a) {
                mQb( () => a.kr.clear());
                const b = O0( () => eQb(a))
                  , c = V0(function({children: d}) {
                    T0( () => a.kr.subscribe(), []);
                    return N0(ZPb, {
                        render: d,
                        o8: b.get()
                    })
                });
                return {
                    Zb: function({children: d}) {
                        return N0(c, {
                            children: d
                        })
                    },
                    yw: function() {
                        T0( () => a.kr.subscribe(), []);
                        return b
                    }
                }
            }
              , qQb = function(a) {
                return b => b.M == null ? W0(b) : {
                    yw: () => {
                        const c = b.Hh.get()
                          , {yw: d} = pQb( () => c ? a(b) : W0(b), [c]);
                        return d()
                    }
                    ,
                    Zb: V0(function(c) {
                        const d = b.Hh.get()
                          , {Zb: e} = pQb( () => d ? a(b) : W0(b), [d]);
                        return N0(e, {
                            ...c
                        })
                    })
                }
            }
              , N0 = __webpack_require__(443763).jsx;
            var rQb = __webpack_require__(875604)
              , T0 = rQb.useEffect
              , pQb = rQb.useMemo;
            var X0 = __webpack_require__(519427)
              , sQb = X0.action
              , lQb = X0.comparer
              , O0 = X0.computed
              , U0 = X0.reaction
              , mQb = X0.runInAction;
            var V0 = __webpack_require__(446474).Pi;
            var nQb = class {
                subscribe(a) {
                    __c.C(a.M != null, "Only animated groups should subscribe");
                    const b = a.kr.subscribe()
                      , c = U0( () => a.kr.diff, () => {
                        a.Hx || cQb(a)
                    }
                    , {
                        fireImmediately: !0
                    });
                    return sQb( () => {
                        const d = a.animations
                          , e = a.M
                          , f = a.Fk
                          , g = a.xm
                          , h = a.kr
                          , k = Object.keys(a.xb.enter);
                        kQb({
                            animations: d,
                            M: e,
                            Fk: f,
                            xm: g,
                            yy: k,
                            kr: h
                        });
                        b();
                        a.MUa = void 0;
                        c()
                    }
                    )
                }
                reset(a) {
                    const b = a.animations
                      , c = a.M
                      , d = a.Fk
                      , e = a.xm
                      , f = a.kr;
                    a = Object.keys(a.xb.enter);
                    kQb({
                        animations: b,
                        M: c,
                        Fk: d,
                        xm: e,
                        yy: a,
                        kr: f
                    })
                }
                flush(a, {lO: b, SI: c, TI: d}) {
                    a.JJ = !0;
                    a.kr.flush();
                    const e = a.animations
                      , f = Object.keys(a.xb.enter);
                    for (const g of fQb(e, f))
                        g.pq(g.definition.mc + g.definition.bk);
                    cQb(a, {
                        TA: !0,
                        lO: b,
                        SI: dQb(c, a),
                        TI: dQb(d, a)
                    })
                }
                o8(a) {
                    const b = a.animations
                      , c = a.Fk;
                    a = a.xm;
                    const d = [...c.values(), ...a.values()];
                    return [...c.entries(), ...a.entries()].map( ([e,f], g) => ({
                        Yc: Hf(P0(b, e), h => h.state),
                        pi: f,
                        index: g,
                        key: e,
                        data: d
                    }))
                }
            }
            ;
            __c.OB = {};
            __c.OB.xa = qQb(a => oQb(a));
            __c.OB.KY = function() {
                const a = []
                  , b = new Map;
                let c = 0;
                const d = (f, {flush: g, reset: h, capture: k}) => {
                    const l = new Map;
                    for (const {id: m, uH: n, effect: p} of a)
                        l.set(m, U0(n, q => p(q, {
                            flush: g,
                            reset: h,
                            capture: k
                        }), {
                            fireImmediately: !0
                        }));
                    b.set(f, {
                        flush: g,
                        reset: h,
                        capture: k,
                        Xva: l
                    })
                }
                  , e = f => {
                    const g = b.get(f);
                    if (g)
                        for (const h of g.Xva.values())
                            h();
                    b.delete(f)
                }
                ;
                return {
                    xa: qQb(f => oQb(f, d, e)),
                    Rfb: function(f, g) {
                        const h = c++;
                        a.push({
                            id: h,
                            uH: f,
                            effect: g
                        });
                        for (const {flush: k, reset: l, capture: m, Xva: n} of b.values())
                            n.set(h, U0(f, p => g(p, {
                                flush: k,
                                reset: l,
                                capture: m
                            }), {
                                fireImmediately: !0
                            }));
                        return () => {
                            for (const {Xva: k} of b.values()) {
                                const l = k.get(h);
                                l && (l(),
                                k.delete(h))
                            }
                        }
                    }
                }
            }
            ;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/358d57c10f54a7cc.js.map

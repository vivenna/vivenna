(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[34874], {

    /***/
    110247: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(292270);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var D = __c.D;
            var s1 = function(a, b) {
                a = a.Jl(b);
                return D(a, "ref not found")
            };
            __c.NB.prototype.u_ = __c.ea(6, function(a, b, c) {
                const d = [];
                this.ap.forEach(a, {
                    Qb: c,
                    Lb: b,
                    Tc: c,
                    Fc: b
                }, (e, f, g) => {
                    var h, k, l, m;
                    const n = (l = a.layout.cells) === null || l === void 0 ? void 0 : (k = l.get(f, g)) === null || k === void 0 ? void 0 : (h = k.ref) === null || h === void 0 ? void 0 : h.ya.ref;
                    h = n && ((m = __c.gB(n)) === null || m === void 0 ? void 0 : m.format);
                    d.push({
                        content: e,
                        A8: g.id,
                        EB: f.id,
                        format: h
                    })
                }
                );
                if (d.length === 1)
                    return d[0]
            });
            __c.r1.prototype.u_ = __c.ea(5, function(a, b, c) {
                var d;
                return (d = this.Nfa) === null || d === void 0 ? void 0 : d.u_(a, b, c)
            });
            var t1 = __webpack_require__(519427).computed;
            var uRb = __webpack_require__(635872).Om;
            var vRb;
            vRb = Symbol.iterator;
            var u1 = class {
                static A(a) {
                    __c.Q(a, {
                        values: t1
                    })
                }
                get values() {
                    return this.cX.get()
                }
                get empty() {
                    return !this.values.length
                }
                count() {
                    return this.values.length
                }
                toArray() {
                    return this.values
                }
                es() {
                    return new Map(this.map( (a, b) => [b, a]))
                }
                [vRb]() {
                    return this.toArray()[Symbol.iterator]()
                }
                get(a) {
                    return this.values[a]
                }
                wpa(a) {
                    return this.get(a)
                }
                first(a) {
                    return a ? this.values.find(a) : this.values[0]
                }
                last(a) {
                    if (!a)
                        return this.values[this.values.length - 1];
                    const b = this.values;
                    for (let c = b.length - 1; c >= 0; c--) {
                        const d = b[c];
                        if (a(d))
                            return d
                    }
                }
                Jl(a) {
                    a = this.values.indexOf(a);
                    return a !== -1 ? a : void 0
                }
                next(a, b) {
                    const c = this.values;
                    for (a = s1(this, a) + 1; a < c.length; a++) {
                        const d = c[a];
                        if (!b || b(d))
                            return d
                    }
                }
                Ub(a, b) {
                    const c = this.values;
                    for (a = s1(this, a) - 1; a >= 0; a--) {
                        const d = c[a];
                        if (!b || b(d))
                            return d
                    }
                }
                Ge(a, b) {
                    a = s1(this, a);
                    b = s1(this, b);
                    return a < b ? -1 : a > b ? 1 : 0
                }
                HA(a) {
                    s1(this, a);
                    return this.DH(a)
                }
                has(a) {
                    return this.values.indexOf(a) >= 0
                }
                mt(a) {
                    return new u1(t1( () => this.values.filter(a)),this.DH)
                }
                map(a) {
                    return this.values.map(b => a(b, this.DH(b)))
                }
                flatMap(a) {
                    return this.values.flatMap(b => a(b, this.DH(b)))
                }
                filter(a) {
                    return this.values.filter(b => a(b, this.DH(b)))
                }
                forEach(a) {
                    this.values.forEach(b => a(b, this.DH(b)))
                }
                reduce(a, b) {
                    return this.values.reduce( (c, d) => a(c, d), b)
                }
                some(a) {
                    return this.values.some(b => a(b))
                }
                every(a) {
                    return this.values.every(b => a(b))
                }
                set() {
                    throw new v1;
                }
                replace() {
                    throw new v1;
                }
                append() {
                    throw new v1;
                }
                prepend() {
                    throw new v1;
                }
                EM() {
                    throw new v1;
                }
                insertBefore() {
                    throw new v1;
                }
                FM() {
                    throw new v1;
                }
                delete() {
                    throw new v1;
                }
                Jr() {
                    throw new v1;
                }
                constructor(a, b) {
                    this.cX = a;
                    this.DH = b;
                    u1.A(this)
                }
            }
              , wRb = class {
                DH() {
                    return this.index.toString()
                }
                constructor(a, b) {
                    this.index = a;
                    this.value = b
                }
            }
              , xRb = class {
                static A(a) {
                    __c.Q(a, {
                        ZVa: t1,
                        hfa: t1,
                        cX: t1,
                        j1a: t1,
                        label: t1,
                        ya: t1.struct
                    })
                }
                ka() {
                    return {
                        id: this.id,
                        label: this.label,
                        F: void 0,
                        ya: this.ya,
                        values: this.cX
                    }
                }
                get ZVa() {
                    const a = this.sheet
                      , b = this.col;
                    return this.Mja.get().map(c => this.DO.u_(a, b, c))
                }
                get hfa() {
                    return this.DO.XIa.P9a(this.ZVa)
                }
                get cX() {
                    return this.hfa.values.filter( () => !0)
                }
                get j1a() {
                    return this.cX.map( (a, b) => new wRb(b,a))
                }
                get label() {
                    return this.hfa.label
                }
                set label(a) {
                    throw new v1;
                }
                get ya() {
                    return D(this.hfa.ya)
                }
                set ya(a) {
                    throw new v1;
                }
                get id() {
                    return this.col.id
                }
                set id(a) {
                    if (a != null && a !== this.id)
                        throw new v1(a);
                }
                get F() {}
                set F(a) {
                    if (a != null)
                        throw new v1;
                }
                constructor(a, b, c, d) {
                    this.DO = a;
                    this.sheet = b;
                    this.col = c;
                    this.Mja = d;
                    this.values = (xRb.A(this),
                    new u1(t1( () => this.j1a),e => e.DH()))
                }
            }
              , v1 = class extends Error {
                constructor(a) {
                    super("Mutating values is not permitted in a ComputedList" + (a != null ? ` (${a})` : ""))
                }
            }
            ;
            var yRb, zRb, ARb, BRb;
            yRb = !1;
            zRb = class {
                static A(a) {
                    __c.Q(a, {
                        lsa: t1,
                        Pfa: t1({
                            equals: (b, c) => __c.qRb(b, c)
                        }),
                        sheet: t1,
                        columns: t1,
                        kna: t1,
                        YIa: t1,
                        FT: t1
                    })
                }
                get lsa() {
                    const a = this.L4a.value;
                    return __c.lB(a) ? a : void 0
                }
                get Pfa() {
                    const a = D(this.lsa);
                    return __c.nRb(this.DO, a)
                }
                get sheet() {
                    var a;
                    return (a = this.Pfa) === null || a === void 0 ? void 0 : a.sheet
                }
                get columns() {
                    const a = this.Pfa;
                    return (a === null || a === void 0 ? void 0 : a.range) == null ? [] : (new __c.p1(a.sheet,a.range)).toArray()
                }
                get kna() {
                    return this.columns.map(a => this.Z8a(a))
                }
                get YIa() {
                    return this.kna.map(a => a.ka())
                }
                get FT() {
                    return this.lsa ? this.YIa : void 0
                }
                constructor(a, b) {
                    this.DO = a;
                    this.L4a = b;
                    this.rows = (zRb.A(this),
                    t1( () => {
                        const c = this.Pfa;
                        return (c === null || c === void 0 ? void 0 : c.range) == null ? [] : (new __c.q1(c.sheet,c.range)).toArray()
                    }
                    ));
                    this.Z8a = uRb(c => {
                        const d = D(this.sheet);
                        return new xRb(this.DO,d,c,this.rows)
                    }
                    )
                }
            }
            ;
            ARb = a => D(a.id);
            BRb = class {
                static A(a) {
                    __c.Q(a, {
                        hOa: t1,
                        data: t1
                    })
                }
                get store() {
                    if (this.Rja)
                        return this.Rja;
                    const a = new zRb(this.DO,this.Cg);
                    return this.Rja = a
                }
                get Thb() {
                    if (this.FEa)
                        return this.FEa;
                    const a = this.store
                      , b = new u1(t1( () => a.kna),ARb);
                    return this.FEa = b
                }
                get hOa() {
                    return __c.lB(this.Cg.value)
                }
                get FT() {
                    return this.store.FT
                }
                get data() {
                    return this.hOa ? this.Thb : this.K4a
                }
                constructor(a, b, c) {
                    this.DO = a;
                    this.Cg = b;
                    this.K4a = c;
                    this.Rja = (BRb.A(this),
                    void 0)
                }
            }
            ;
            __c.Ova = {
                Kfb: function(a) {
                    yRb || (yRb = !0,
                    __c.j7a.set(b => new BRb(a,b.Cg,b.data)))
                }
            };
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/b8e16dbbf1dac976.js.map

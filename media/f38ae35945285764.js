(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[23286], {

    /***/
    292270: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var MB;
            var oRb, pRb, rRb, sRb, tRb;
            __c.nRb = function(a, b) {
                const c = a.EO.eYa.get(b.HJ);
                if (c != null)
                    return a = a.XIa.Uqb(c, b),
                    {
                        sheet: c,
                        range: a
                    }
            }
            ;
            oRb = function(a) {
                switch (a.type) {
                case 0:
                    return a.value.column;
                case 1:
                    return a.value;
                case 2:
                    break;
                default:
                    throw new __c.E(a);
                }
            }
            ;
            __c.qRb = function(a, b) {
                return a === b ? !0 : a == null || b == null || a.sheet !== b.sheet ? !1 : a.range === b.range ? !0 : a.range == null || b.range == null ? !1 : pRb(a.range.start, b.range.start) && pRb(a.range.end, b.range.end)
            }
            ;
            pRb = function(a, b) {
                if (a === b)
                    return !0;
                switch (a.type) {
                case 0:
                    return b.type === 0 && a.value.column.id === b.value.column.id && a.value.na.id === b.value.na.id;
                case 1:
                    return b.type === 1 && a.value.id === b.value.id;
                case 2:
                    return b.type === 2 && a.value.id === b.value.id;
                default:
                    throw new __c.E(a);
                }
            }
            ;
            rRb = function(a) {
                switch (a.type) {
                case 0:
                    return a.value.na;
                case 1:
                    break;
                case 2:
                    return a.value;
                default:
                    throw new __c.E(a);
                }
            }
            ;
            __c.r1 = class {
                getCells(a) {
                    var b = __c.nRb(this, a);
                    if ((b === null || b === void 0 ? void 0 : b.range) == null)
                        return {
                            columns: [],
                            rows: []
                        };
                    a = b.sheet;
                    b = b.range;
                    return {
                        columns: (new __c.p1(a,b)).toArray(),
                        rows: (new __c.q1(a,b)).toArray()
                    }
                }
                constructor(a, b, c) {
                    this.EO = a;
                    this.Nfa = b;
                    this.XIa = c
                }
            }
            ;
            __c.r1.prototype.u_ = __c.da(5);
            sRb = Symbol.iterator;
            __c.p1 = class {
                *[sRb]() {
                    var a = this.Lb;
                    const b = this.Zab
                      , c = this.sheet;
                    for (; a != null && a !== b; a = c.layout.cols.next(a))
                        yield a
                }
                toArray() {
                    const a = [];
                    for (const b of this)
                        a.push(b);
                    return a
                }
                first(a) {
                    for (const b of this)
                        if (a(b))
                            return b
                }
                last(a) {
                    var b = this.Fc;
                    const c = this.Hrb
                      , d = this.sheet;
                    for (; b != null && b !== c; b = d.layout.cols.Ub(b))
                        if (a(b))
                            return b
                }
                findIndex(a) {
                    let b = 0;
                    for (const c of this) {
                        if (a(c))
                            return b;
                        ++b
                    }
                    return -1
                }
                filter(a) {
                    const b = [];
                    let c = 0;
                    for (const d of this)
                        a(d, c++) && b.push(d);
                    return b
                }
                map(a) {
                    const b = [];
                    let c = 0;
                    for (const d of this) {
                        const e = a(d, c++);
                        b.push(e)
                    }
                    return b
                }
                every(a) {
                    let b = 0;
                    for (const c of this)
                        if (!a(c, b++))
                            return !1;
                    return !0
                }
                constructor(a, b) {
                    this.sheet = a;
                    var c;
                    const d = (c = b && oRb(b.start)) !== null && c !== void 0 ? c : a.layout.cols.first();
                    this.Lb = __c.D(d);
                    this.Hrb = a.layout.cols.Ub(this.Lb);
                    var e;
                    b = (e = b && oRb(b.end)) !== null && e !== void 0 ? e : a.layout.cols.last();
                    this.Fc = __c.D(b);
                    this.Zab = a.layout.cols.next(this.Fc)
                }
            }
            ;
            tRb = Symbol.iterator;
            __c.q1 = class {
                *[tRb]() {
                    var a = this.Qb;
                    const b = this.$ab
                      , c = this.sheet;
                    for (; a != null && a !== b; a = c.layout.rows.next(a))
                        yield a
                }
                toArray() {
                    const a = [];
                    for (const b of this)
                        a.push(b);
                    return a
                }
                first(a) {
                    for (const b of this)
                        if (a(b))
                            return b
                }
                last(a) {
                    var b = this.Tc;
                    const c = this.Irb
                      , d = this.sheet;
                    for (; b != null && b !== c; b = d.layout.rows.Ub(b))
                        if (a(b))
                            return b
                }
                filter(a) {
                    const b = [];
                    let c = 0;
                    for (const d of this)
                        a(d, c++) && b.push(d);
                    return b
                }
                every(a) {
                    let b = 0;
                    for (const c of this)
                        if (!a(c, b++))
                            return !1;
                    return !0
                }
                map(a) {
                    const b = [];
                    let c = 0;
                    for (const d of this) {
                        const e = a(d, c++);
                        b.push(e)
                    }
                    return b
                }
                findIndex(a) {
                    let b = 0;
                    for (const c of this) {
                        if (a(c))
                            return b;
                        ++b
                    }
                    return -1
                }
                constructor(a, b) {
                    this.sheet = a;
                    var c;
                    const d = (c = b && rRb(b.start)) !== null && c !== void 0 ? c : a.layout.rows.first();
                    this.Qb = __c.D(d);
                    this.Irb = a.layout.rows.Ub(this.Qb);
                    var e;
                    b = (e = b && rRb(b.end)) !== null && e !== void 0 ? e : a.layout.rows.last();
                    this.Tc = __c.D(b);
                    this.$ab = a.layout.rows.next(this.Tc)
                }
            }
            ;
            MB = __c.MB = {};
            MB.uvb = __c.p1;
            MB.Evb = __c.r1;
            MB.Wwb = __c.q1;
            MB.Y8a = (a, b, c) => new __c.r1(a,c,b);
            MB.vKb = __c.qRb;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/f38ae35945285764.js.map

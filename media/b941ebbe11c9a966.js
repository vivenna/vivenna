(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[4667], {

    /***/
    150721: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var D = __c.D;
            var fB = __c.fB;
            var w = __c.w;
            var E = __c.E;
            var CRb = function(a) {
                return a.every(b => b.type === 14)
            }
              , DRb = function(a) {
                a = __c.RBa.uH(a);
                if (!a)
                    return {
                        result: "error"
                    };
                if (a.s.length)
                    return {
                        result: "syntax-error",
                        suffix: a.s
                    };
                try {
                    const b = __c.FA(__c.aB(a.value));
                    if (CRb(b))
                        return {
                            result: "success",
                            tokens: b
                        }
                } catch (b) {}
                return {
                    result: "error"
                }
            }
              , w1 = function(a, b) {
                switch (a.type) {
                case 0:
                    var c = a.value;
                    a = b.Ns(c.column);
                    b = b.Zt(c.na) + 1;
                    return `${__c.SA(a)}${b}`;
                case 2:
                    return `${b.Zt(a.value) + 1}`;
                case 1:
                    return b = b.Ns(a.value),
                    __c.SA(b);
                default:
                    throw new E(a);
                }
            }
              , ERb = function(a, b) {
                w(a.start.type === a.end.type, "Invalid range definition: a range cannot be defined between references of different types.");
                var c = a.start;
                a = a.end;
                switch (c.type) {
                case 1:
                    return w(c.type === a.type),
                    c = [c, a].sort( (d, e) => b.Ns(d.value) - b.Ns(e.value)),
                    `${w1(c[0], b)}:${w1(c[1], b)}`;
                case 2:
                    return w(c.type === a.type),
                    c = [c, a].sort( (d, e) => b.Zt(d.value) - b.Zt(e.value)),
                    `${w1(c[0], b)}:${w1(c[1], b)}`;
                case 0:
                    return w(c.type === a.type),
                    c = [c, a].sort( (d, e) => {
                        const f = b.Ns(d.value.column) - b.Ns(e.value.column);
                        return f !== 0 ? f : b.Zt(d.value.na) - b.Zt(e.value.na)
                    }
                    ),
                    `${w1(c[0], b)}:${w1(c[1], b)}`;
                default:
                    throw new E(c);
                }
            }
              , FRb = function(a) {
                switch (a.type) {
                case 0:
                    return `${fB(a.Sh)}${`${a.ci + 1}`}`;
                case 1:
                    return `${fB(a.Sh)}${`${a.ci + 1}`}:${fB(a.Sh + a.width - 1)}${`${a.ci + a.height - 1 + 1}`}`;
                case 2:
                    return `${`${a.ci + 1}`}:${`${a.ci + a.height - 1 + 1}`}`;
                case 3:
                    return `${fB(a.Sh)}:${fB(a.Sh + a.width - 1)}`;
                default:
                    throw new E(a);
                }
            }
              , GRb = function(a, b) {
                a = __c.TA(a);
                const c = b.rows.count();
                b = b.cols.count();
                switch (a.type) {
                case 0:
                    return a.ci < c && a.Sh < b;
                case 2:
                    return a.ci < c;
                case 1:
                    return a.Sh < b;
                case 3:
                    return !1;
                default:
                    throw new E(a);
                }
            }
              , HRb = function(a) {
                var b = DRb(a);
                if (b.result !== "success")
                    throw Error(`${a} fails to form a normalized range as a range must only contain references of the same type`);
                b = b.tokens;
                if (b.length !== 1)
                    throw Error(`${a} contains more than one range`);
                return FRb(b[0].value)
            }
              , IRb = function(a, b) {
                a = __c.TA(a);
                const c = b.rows.count();
                b = b.cols.count();
                switch (a.type) {
                case 0:
                    return `${fB(Math.max(0, Math.min(a.Sh, b - 1)))}${`${Math.max(0, Math.min(a.ci, c - 1)) + 1}`}`;
                case 2:
                    return `${Math.max(0, Math.min(a.ci, c - 1))}`;
                case 1:
                    return `${Math.max(0, Math.min(a.Sh, b - 1))}`;
                case 3:
                    throw Error("named references");
                default:
                    throw new E(a);
                }
            }
              , JRb = function(a, b) {
                const c = __c.TA(a);
                switch (c.type) {
                case 0:
                    return a = D(b.oR(c.Sh)),
                    b = D(b.WU(c.ci)),
                    {
                        type: 0,
                        value: {
                            column: a,
                            na: b
                        }
                    };
                case 1:
                    return {
                        type: 1,
                        value: D(b.oR(c.Sh))
                    };
                case 2:
                    return {
                        type: 2,
                        value: D(b.WU(c.ci))
                    };
                case 3:
                    throw Error("named references");
                default:
                    throw new E(c);
                }
            }
              , KRb = function(a, {start: b, end: c}) {
                switch (b.type) {
                case 0:
                    __c.C(c.type === 0);
                    const d = a.rows.Ge(b.value.na, c.value.na) > 0 ? c.value.na : b.value.na
                      , e = a.rows.Ge(b.value.na, c.value.na) > 0 ? b.value.na : c.value.na
                      , f = a.cols.Ge(b.value.column, c.value.column) > 0 ? c.value.column : b.value.column;
                    a = a.cols.Ge(b.value.column, c.value.column) > 0 ? b.value.column : c.value.column;
                    return {
                        start: {
                            type: 0,
                            value: {
                                na: d,
                                column: f
                            }
                        },
                        end: {
                            type: 0,
                            value: {
                                na: e,
                                column: a
                            }
                        }
                    };
                case 1:
                    return __c.C(c.type === 1),
                    a.cols.Ge(b.value, c.value) > 0 ? {
                        start: c,
                        end: b
                    } : {
                        start: b,
                        end: c
                    };
                case 2:
                    return __c.C(c.type === 2),
                    a.rows.Ge(b.value, c.value) > 0 ? {
                        start: c,
                        end: b
                    } : {
                        start: b,
                        end: c
                    };
                default:
                    throw new E(b);
                }
            }
              , LRb = class {
                wd(a, b) {
                    a.trim() === "" ? (a = {
                        start: {
                            type: 0,
                            value: {
                                na: b.layout.rows.first(),
                                column: b.layout.cols.first()
                            }
                        },
                        end: {
                            type: 0,
                            value: {
                                na: b.layout.rows.last(),
                                column: b.layout.cols.last()
                            }
                        }
                    },
                    b = ERb(a, b)) : b = HRb(a);
                    return {
                        Lea: b
                    }
                }
                Zc(a) {
                    return a.Lea
                }
                constructor(a) {
                    this.DE = a
                }
            }
            ;
            var MRb;
            MRb = class {
                P9a(a) {
                    a = this.Hcb.Wqb(a);
                    return a.ok ? a.value : a.error.data
                }
                Uqb(a, b) {
                    b = b.$a.length ? this.range.Zc(b.$a[0]) : "";
                    a: {
                        if (!a.layout.rows.empty && !a.layout.cols.empty) {
                            if (b.trim() === "") {
                                var c = a.layout.rows;
                                var d = a.layout.cols;
                                a = {
                                    column: d.first(),
                                    na: c.first()
                                };
                                c = {
                                    column: d.last(),
                                    na: c.last()
                                };
                                a = a.column && a.na && c.column && c.na ? {
                                    start: {
                                        type: 0,
                                        value: {
                                            column: a.column,
                                            na: a.na
                                        }
                                    },
                                    end: {
                                        type: 0,
                                        value: {
                                            column: c.column,
                                            na: c.na
                                        }
                                    }
                                } : void 0;
                                c = D(a);
                                break a
                            }
                            try {
                                const e = HRb(b)
                                  , f = e.split(":");
                                w(f.length === 2, `A range must only consist of 2 parts representing a start and an end: ${e}`);
                                if (GRb(f[0], a)) {
                                    const g = b.split(":");
                                    w(g.length === 2, `A range must only consist of 2 parts representing a start and an end: ${b}`);
                                    const [h,k] = g;
                                    d = `${IRb(h, a)}:${IRb(k, a)}`;
                                    const l = d.split(":");
                                    w(l.length === 2, `A range must only consist of 2 parts representing a start and an end: ${d}`);
                                    const [m,n] = l
                                      , p = JRb(m, a)
                                      , q = JRb(n, a);
                                    w(p.type === q.type, `Start and end must be of the same type (cell, row, or column): ${d}`);
                                    c = KRb(a, {
                                        start: p,
                                        end: q
                                    });
                                    break a
                                }
                            } catch (e) {}
                        }
                        c = void 0
                    }
                    return c
                }
                constructor(a, b) {
                    this.DE = a;
                    this.Hcb = b;
                    this.range = new LRb(this.DE)
                }
            }
            ;
            __c.Mva = {};
            __c.Mva.h4a = MRb;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/b941ebbe11c9a966.js.map

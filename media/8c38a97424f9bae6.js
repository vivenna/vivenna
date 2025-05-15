(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[27364], {

    /***/
    33714: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(783217);
        __web_req__(414180);
        __web_req__(190240);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var VQb = function({j: a, Fa: b, zg: c, $b: d, xa: e}) {
                const f = new RQb(a)
                  , g = new SQb(new __c.OHb(b,c));
                b = __c.SW({
                    store: f.Rw
                });
                c = h1( () => g.Fi(f).Fi);
                const h = h1( () => g.Fi(f).wa)
                  , k = __c.JHb({
                    hb: b,
                    Qca: c,
                    M: d,
                    xa: e,
                    j: a
                })
                  , {d1a: l} = __c.sHb({
                    j: a,
                    M: d,
                    xa: e,
                    wa: h1( () => [h.get()])
                });
                return {
                    Rk: () => h.get(),
                    m4a: TQb(function(m) {
                        const n = l()
                          , p = UQb( () => __c.$W(function() {
                            return {
                                top: a.vc.top + a.Gk + a.vc.bottom - n.get().bottom,
                                left: a.xd ? 0 : a.vc.left
                            }
                        }), [n]);
                        return i1(p, {
                            children: i1(k, {
                                ...m
                            })
                        })
                    })
                }
            }
              , i1 = __webpack_require__(443763).jsx;
            var TQb = __webpack_require__(446474).Pi;
            var UQb = __webpack_require__(875604).useMemo;
            var h1 = __webpack_require__(519427).computed;
            var WQb = {
                source: {
                    get: a => a.source.Fi,
                    v9a: a => new __c.PHb(a,.9)
                }
            };
            var XQb = {
                lines: [],
                lineHeight: 0,
                link: void 0,
                offset: new __c.wu(0,0),
                fontSize: 0,
                key: ""
            }
              , SQb = class {
                Fi(a) {
                    if (a.text.length === 0)
                        return {
                            Fi: XQb,
                            wa: __c.uB
                        };
                    const {lines: b, gi: c, lineHeight: d} = this.gta.gi(a, a.Lc);
                    if (b.length === 0 || c.length === 0)
                        return {
                            Fi: XQb,
                            wa: __c.uB
                        };
                    var e = .6 * a.Rw.fontSize;
                    const f = c[c.length - 1]
                      , {wa: g, offset: h} = {
                        wa: {
                            ...__c.uB,
                            bottom: e + (c.length - 1) * d + f.fontBoundingBoxAscent + f.actualBoundingBoxDescent
                        },
                        offset: new __c.wu(a.Lc / 2,e + f.fontBoundingBoxAscent)
                    };
                    return {
                        Fi: {
                            lines: b,
                            link: a.url,
                            lineHeight: d,
                            offset: h,
                            fontSize: a.Rw.fontSize,
                            key: b.join("\n")
                        },
                        wa: g
                    }
                }
                constructor(a) {
                    this.gta = a
                }
            }
            ;
            var RQb = class {
                get Lc() {
                    return this.j.Lc
                }
                get source() {
                    return this.j.xh.source
                }
                get text() {
                    return this.source.Fi.text
                }
                get Za() {
                    return this.source.Fi.Ia.Za
                }
                get url() {
                    return this.source.url
                }
                constructor(a) {
                    var b = WQb.source;
                    this.j = a;
                    this.urb = b;
                    this.Rw = this.urb.v9a(this.j)
                }
            }
            ;
            __c.Vva = {
                MY: function({j: a, Fa: b, zg: c, $b: d, xa: e}) {
                    const {Rk: f, m4a: g} = VQb({
                        j: a,
                        Fa: b,
                        zg: c,
                        $b: d,
                        xa: e
                    });
                    return {
                        Rk: () => f(),
                        sia: TQb(h => i1(g, {
                            ...h
                        }))
                    }
                }
            };
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/8c38a97424f9bae6.js.map

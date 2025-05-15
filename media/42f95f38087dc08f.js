(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[48357], {

    /***/
    582389: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var FHb, EHb;
            __c.DHb = function(a, b) {
                return __c.vk.create(__c.vk.yc().attrs({
                    "font-size": a.fontSize,
                    "font-weight": a.fontWeight,
                    "font-style": a.fontStyle,
                    "font-family": a.qr
                }).qc(`${b}\n`).build())
            }
            ;
            FHb = class {
                Fma(a, b) {
                    const c = a.xj(0);
                    var d;
                    var e = {
                        fontSize: (d = c["font-size"]) !== null && d !== void 0 ? d : __c.Sg.ld["font-size"],
                        fontFamily: c["font-family"] || __c.Sg.ld["font-family"],
                        fontWeight: c["font-weight"] || __c.Sg.ld["font-weight"],
                        fontStyle: c["font-style"] || __c.Sg.ld["font-style"]
                    };
                    const {fontSize: f, fontFamily: g, fontWeight: h, fontStyle: k} = e;
                    return `${a.aa.substring(0, a.charLength - 1)}` + `.${f.toFixed(1)}` + `.${g}` + `.${__c.vs(h)}` + `.${k}` + `.${b.toFixed(1)}`
                }
                QT(a, b) {
                    if (a.charLength === 1 || b === 0)
                        var c = [];
                    else {
                        {
                            c = this.cache;
                            const d = c.Fma(a, b)
                              , e = c.cache.get(d);
                            e != null ? c = e : (a = c.QT(a, b),
                            c.cache.set(d, a),
                            c = a)
                        }
                    }
                    return c
                }
                constructor(a) {
                    this.Pe = a;
                    this.cache = new EHb( (b, c) => {
                        if (b.charLength === 1 || c === 0)
                            var d = [];
                        else {
                            b = __c.ZG(this.Pe, __c.kg(b, this.tc), 1, "em-square");
                            try {
                                d = b.QT(c)
                            } finally {
                                b.destroy()
                            }
                        }
                        return d
                    }
                    , (b, c) => this.Fma(b, c));
                    this.tc = {
                        styles: new Map,
                        version: 0
                    }
                }
            }
            ;
            EHb = class {
                constructor(a, b) {
                    this.QT = a;
                    this.Fma = b;
                    this.cache = new Map
                }
            }
            ;
            __c.SB = {};
            __c.SB.A2a = FHb;
            __c.SB.GJb = __c.DHb;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/42f95f38087dc08f.js.map

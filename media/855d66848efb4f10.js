(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[47798], {

    /***/
    663883: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var XEb, FW, ZEb;
            XEb = function(a) {
                return Array.isArray(a.k) && typeof a.k[0] === "object"
            }
            ;
            __c.YEb = function(a, b) {
                if (a.assets)
                    for (const f of a.assets)
                        if ("layers"in f)
                            for (const g of f.layers) {
                                if (g.ty !== 4)
                                    continue;
                                const h = [];
                                var c, d = (c = g.shapes) !== null && c !== void 0 ? c : [];
                                for (const k of d)
                                    d = FW(k, b),
                                    h.push(d);
                                g.shapes = h
                            }
                if (a.layers)
                    for (const f of a.layers)
                        if (f.ty === 4) {
                            a = [];
                            var e;
                            c = (e = f.shapes) !== null && e !== void 0 ? e : [];
                            for (const g of c)
                                c = FW(g, b),
                                a.push(c);
                            f.shapes = a
                        }
            }
            ;
            FW = function(a, b) {
                switch (a.ty) {
                case "fl":
                case "st":
                    var c;
                    if (XEb(a.c))
                        break;
                    const e = (c = ZEb(a.c.k)) === null || c === void 0 ? void 0 : __c.zt(c);
                    if (e) {
                        var d = Array.from(b.keys()).find(f => f === e);
                        d && b.get(d) !== void 0 && (b = b.get(d),
                        b = __c.qt(b),
                        a.c.k = [b.r / 255, b.g / 255, b.b / 255, 1])
                    }
                    break;
                case "gr":
                    c = [];
                    for (d of a.it) {
                        const f = FW(d, b);
                        c.push(f)
                    }
                    a.it = c
                }
                return a
            }
            ;
            ZEb = function(a) {
                if (a.length === 4)
                    return a = a.map(b => Number((b * 255).toFixed(2))),
                    new __c.rt(a[0],a[1],a[2])
            }
            ;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/855d66848efb4f10.js.map

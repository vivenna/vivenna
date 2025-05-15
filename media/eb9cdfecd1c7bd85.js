(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[97607], {

    /***/
    767719: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(925186);
        __web_req__(543471);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var tX = __c.tX;
            var WIb;
            WIb = function(a, b, c) {
                const d = new Map(a.map(m => [m.id, m]))
                  , e = [];
                let f = 0
                  , g = 0;
                const h = new Map;
                let k = !1, l;
                if (!b.first(m => {
                    ++f;
                    if (c.has(m)) {
                        const n = m.id || tX();
                        h.set(m, n);
                        e.push(n);
                        m = f - g++;
                        l !== m && (k = !0);
                        l = m;
                        return !1
                    }
                    m = m.id ? d.get(m.id) : void 0;
                    if (m != null) {
                        e.push(m.id);
                        m = f - g++;
                        if (k) {
                            if (l !== m)
                                return !0;
                            k = !1
                        }
                        l = m
                    }
                    return !1
                }
                ) && !k)
                    return c.forEach(m => {
                        m.id = __c.D(h.get(m))
                    }
                    ),
                    e
            }
            ;
            __c.ZY = __webpack_require__(519427).computed;
            __c.XIb = a => ({
                label_by: a.one(b => b.ob, (b, c) => b.ob = c, {
                    required: __c.oX(!1)
                })(["string", "number", "date"]),
                value_by: __c.nX(b => b.Gb, (b, c) => b.Gb = c, {
                    minLength: b => __c.SX(b) ? 1 : 0
                })(["number"]),
                filter_by: __c.xX()
            });
            __c.YIb = (a, b, c) => {
                var d;
                const e = a.Va;
                var f = a.data;
                const g = c.BA(a);
                var h = c.zw(a);
                let k = b.Sl || h.label_by.ok ? (d = g.label_by) === null || d === void 0 ? void 0 : d.id : void 0;
                const l = b.Sl && g.value_by.length > 0;
                d = b.action;
                h = d.kind === "new_data" && d.rfb.some(n => k !== n.eb.id && n.format != null && c.ge.value_by.yF(n.format.kind));
                if (!k || !l || h) {
                    var m = f.reduce( (n, p) => {
                        if (p.ya == null)
                            return n;
                        var q = __c.iX(p.ya);
                        switch (q.kind) {
                        case "string":
                        case "date":
                            if (k)
                                break;
                            k = p.id || tX();
                            p.id = k;
                            c.ge.label_by.set(e, k);
                            break;
                        case "number":
                            if (l)
                                break;
                            q = p.id || tX();
                            p.id = q;
                            n.push(q);
                            break;
                        default:
                            throw new __c.E(q);
                        }
                        return n
                    }
                    , []);
                    b = c.ge.value_by;
                    m.length > 0 ? b.set(e, m) : h && (f = WIb(g.value_by, f, new Set(d.rfb.map(n => n.eb).filter(n => n.id !== k))),
                    f != null && b.set(e, f));
                    __c.sX(c, a)
                }
            }
            ;
            __c.ZIb = () => {
                const a = __c.pX.create()(b => ({
                    label_by: b.one(c => c.ob, (c, d) => c.ob = d, {
                        required: __c.oX(!1)
                    })(["string", "number", "date"]),
                    value_by: b.one(c => c.Gb, (c, d) => c.Gb = d, {
                        required: c => __c.SX(c)
                    })(["number"]),
                    filter_by: __c.xX()
                }), {
                    init(b, c) {
                        const d = b.Va
                          , e = b.data
                          , f = a.BA(b)
                          , g = a.zw(b);
                        let h = f.label_by != null && (c.Sl || g.label_by.ok)
                          , k = f.value_by != null && (c.Sl || g.value_by.ok);
                        h && k || (e.first(l => {
                            if (l.ya == null)
                                return !1;
                            if (h && k)
                                return !0;
                            var m = __c.iX(l.ya);
                            switch (m.kind) {
                            case "string":
                            case "date":
                                if (h)
                                    break;
                                m = l.id || tX();
                                h = !0;
                                l.id = m;
                                a.ge.label_by.set(d, m);
                                break;
                            case "number":
                                if (k)
                                    break;
                                m = l.id || tX();
                                k = !0;
                                l.id = m;
                                a.ge.value_by.set(d, m);
                                break;
                            default:
                                throw new __c.E(m);
                            }
                            return !1
                        }
                        ),
                        __c.sX(a, b))
                    }
                });
                return a
            }
            ;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/eb9cdfecd1c7bd85.js.map

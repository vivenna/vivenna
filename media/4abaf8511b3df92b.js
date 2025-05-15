(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[77588], {

    /***/
    859864: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(190240);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var PKb;
            __c.VZ = function({j: a, M: b, xa: c, size: d, GQ: e, HQ: f}) {
                const g = UZ( () => d.get() * a.fontSize);
                b = new __c.YW({
                    xb: {
                        enter: {
                            size: {
                                value: k => e ? 0 : k
                            }
                        },
                        update: {
                            size: {
                                value: k => k
                            }
                        },
                        exit: {
                            size: {
                                value: k => f ? 0 : k,
                                oX: !f
                            }
                        },
                        Xe: {
                            size: !0
                        }
                    },
                    data: UZ( () => g.get() === 0 ? [] : [g.get()]),
                    M: b,
                    j: a,
                    tj: 0,
                    El: 0,
                    ne: 500,
                    Qe: 500,
                    pe: 500,
                    getKey: () => "size"
                });
                const {yw: h} = c(b);
                return {
                    size: g,
                    dW: function() {
                        const k = h();
                        return PKb( () => UZ( () => {
                            var l, m;
                            return (m = (l = k.get().at(0)) === null || l === void 0 ? void 0 : l.Yc.size.get()) !== null && m !== void 0 ? m : 0
                        }
                        ), [k])
                    }
                }
            }
            ;
            PKb = __webpack_require__(875604).useMemo;
            var UZ = __webpack_require__(519427).computed;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/4abaf8511b3df92b.js.map

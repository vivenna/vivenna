(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[34909], {

    /***/
    685828: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(726917);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var MGb, EX, IGb;
            __c.FX = function({icon: a, ariaLabel: b, fill: c, height: d, width: e, lgb: f=!1, onClick: g, Eaa: h, Fqa: k=1, fillOpacity: l, tabIndex: m=0}) {
                const n = k * 24;
                return IGb(__c.DX, {
                    role: "button",
                    tabIndex: m,
                    ariaLabel: b,
                    onClick: g,
                    children: [f ? EX(JGb, {
                        fill: c,
                        fillOpacity: l !== null && l !== void 0 ? l : 1,
                        width: e
                    }) : EX(KGb, {
                        fill: c,
                        fillOpacity: l !== null && l !== void 0 ? l : 1,
                        height: d,
                        width: e
                    }), EX("g", {
                        transform: `translate(${(e - n) / 2}, ${(d - n) / 2}) scale(${k}) `,
                        style: {
                            ...h,
                            pointerEvents: "none"
                        },
                        children: EX(a, {})
                    })]
                })
            }
            ;
            __c.GX = function(a) {
                return LGb( ({className: b}) => EX("g", {
                    dangerouslySetInnerHTML: {
                        __html: a
                    },
                    className: b
                }))
            }
            ;
            MGb = __webpack_require__(443763);
            EX = MGb.jsx;
            IGb = MGb.jsxs;
            var LGb = __webpack_require__(875604).memo;
            var JGb = ({width: a, fill: b, fillOpacity: c}) => EX("circle", {
                cx: a / 2,
                cy: a / 2,
                r: a / 2,
                fill: b,
                fillOpacity: c,
                pointerEvents: "all"
            })
              , KGb = ({fill: a, fillOpacity: b, height: c, width: d}) => EX("rect", {
                x: 0,
                y: 0,
                fill: a,
                fillOpacity: b,
                width: d,
                height: c,
                rx: 4,
                ry: 4,
                pointerEvents: "all"
            });
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/45cca24e3881b7d5.js.map

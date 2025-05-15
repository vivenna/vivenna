(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[54847], {

    /***/
    205177: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var VX, SGb, TX, RGb;
            __c.UX = function(a) {
                const b = ({pYa: c=!1, children: d}) => {
                    const e = NGb()
                      , f = OGb(null);
                    PGb( () => QGb( () => {
                        const {width: g, height: h, top: k=0, left: l=0} = a()
                          , m = f.current;
                        m && (m.setAttribute("width", g.toString()),
                        m.setAttribute("height", h.toString()),
                        m.setAttribute("x", l.toString()),
                        m.setAttribute("y", k.toString()))
                    }
                    ), []);
                    return RGb(SGb, {
                        children: [!c && TX("clipPath", {
                            id: e,
                            children: TX("rect", {
                                ref: f
                            })
                        }), TX("g", {
                            clipPath: c ? void 0 : `url(#${e})`,
                            children: d
                        })]
                    })
                }
                ;
                b.displayName = a.name != null ? `ClippingContainer(${a.name})` : "ClippingContainer";
                return b
            }
            ;
            VX = __webpack_require__(443763);
            SGb = VX.Fragment;
            TX = VX.jsx;
            RGb = VX.jsxs;
            var WX = __webpack_require__(875604)
              , PGb = WX.useEffect
              , NGb = WX.useId
              , OGb = WX.useRef;
            var QGb = __webpack_require__(519427).autorun;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/f586ec9ebbd2f81e.js.map

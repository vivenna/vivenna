(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[31485], {

    /***/
    46989: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var DQb = function(a) {
                if (a == null)
                    return document.body;
                const {overflow: b, overflowX: c, overflowY: d} = window.getComputedStyle(a);
                return /(auto|scroll|overlay)/.test(b + d + c) ? a : DQb(a.parentElement)
            }
              , f1 = __webpack_require__(443763)
              , EQb = f1.Fragment
              , g1 = f1.jsx
              , FQb = f1.jsxs;
            var GQb = __webpack_require__
              , HQb = GQb(993864)
              , IQb = GQb.n_x(HQb)();
            var JQb = __webpack_require__(446474)
              , KQb = JQb.Pi
              , LQb = JQb.Qj;
            var MQb = __webpack_require__(875604).useState;
            var PQb = ({yU: a, content: b, open: c, placement: d, reference: e, arrow: f}) => {
                const [g,h] = MQb();
                return g1("div", {
                    className: "Mlkk4Q",
                    ref: k => {
                        k != null && (k = DQb(k.parentElement),
                        k != null && h(k))
                    }
                    ,
                    children: g1(__c.Ny, {
                        ref: a,
                        placement: d == null || d === "auto" || typeof d !== "string" ? d : {
                            placement: d,
                            aV: !1
                        },
                        level: 1,
                        reference: e,
                        open: c,
                        offset: {
                            main: __c.My,
                            cross: 0
                        },
                        boundary: g,
                        rGa: !0,
                        children: ({LB: k}) => g1(LQb, {
                            children: () => FQb(EQb, {
                                children: [g1(NQb, {
                                    content: b
                                }), f && g1("div", {
                                    ref: k,
                                    className: "U14oZw",
                                    children: g1(OQb, {})
                                })]
                            })
                        })
                    })
                })
            }
              , NQb = ({content: a}) => g1(__c.Jy, {
                light: "dark",
                dark: "dark",
                Qp: "dark",
                Ls: "dark",
                children: ({className: b}) => g1("div", {
                    className: IQb(b, "F_wBfg"),
                    role: "tooltip",
                    children: typeof a === "string" ? g1(__c.Iy, {
                        size: "small",
                        tagName: "div",
                        lineClamp: 0,
                        tone: "primary",
                        className: "_2V1T4g",
                        alignment: "start",
                        children: a
                    }) : a
                })
            })
              , OQb = () => FQb("svg", {
                width: "16",
                height: "16",
                viewBox: "0 -7 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: IQb("_nNNQA", "UxWiaw"),
                children: [g1("path", {
                    d: "M15 9L10.3972 4.67335C9.04995 3.40695 6.95006 3.40695 5.60282 4.67335L1 9L15 9Z",
                    className: "aSY8AA"
                }), g1("path", {
                    d: "M15 9L10.3972 4.67335C9.04995 3.40695 6.95006 3.40695 5.60282 4.67335L1 9L2.46004 9L6.28773 5.40198C7.25004 4.4974 8.74996 4.4974 9.71228 5.40198L13.54 9L15 9Z",
                    className: "sk_amQ"
                })]
            });
            var QQb;
            QQb = KQb( ({store: a}) => {
                const b = a.position;
                return a.open ? g1("div", {
                    style: {
                        position: "absolute",
                        left: b.left,
                        top: b.top,
                        width: b.width,
                        height: b.height,
                        pointerEvents: "none"
                    }
                }) : g1("div", {})
            }
            );
            __c.Wva = {
                vIa: () => KQb(function({store: a}) {
                    return a == null ? null : g1(PQb, {
                        yU: a.yU,
                        content: a.content,
                        open: a.open,
                        placement: a.placement,
                        arrow: a.arrow,
                        reference: g1(QQb, {
                            store: a
                        })
                    })
                })
            };
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/61713a5cd7748699.js.map

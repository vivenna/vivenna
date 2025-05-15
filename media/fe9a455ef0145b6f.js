(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[14226], {

    /***/
    179212: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(190240);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var $Ib, dZ, aJb, eZ, bJb;
            $Ib = function(a) {
                return Math.floor(a) === a ? 0 : a.toString().split(".")[1].length
            }
            ;
            __c.$Y = function(a, b) {
                const c = Math.pow(10, $Ib(a))
                  , d = Math.pow(10, $Ib(b));
                return a * c * (b * d) / (c * d)
            }
            ;
            __c.aZ = function(a, b) {
                if (b === "any" || b <= 0)
                    return a;
                if (b === 0)
                    throw Error("Division by zero is not allowed");
                var c = a - Math.floor(a / b) * b;
                return a - c + (c >= b / 2 ? b : 0)
            }
            ;
            __c.bZ = function(a, b, c, d, e) {
                if (b >= c)
                    return d;
                a = Math.min(Math.max(a, b), c);
                e = e.get() - d;
                return d + (a - b) / (c - b) * (e - d)
            }
            ;
            __c.cZ = function(a, b, c, d) {
                d = d.get() * Math.PI / 180;
                return ((b - (a.left + a.width / 2)) * Math.cos(d) + (c - (a.top + a.height / 2)) * Math.sin(d)) / Math.sqrt(Math.pow(a.width, 2) + Math.pow(a.height, 2)) + .5
            }
            ;
            dZ = __webpack_require__(443763);
            aJb = dZ.Fragment;
            eZ = dZ.jsx;
            bJb = dZ.jsxs;
            var fZ = __webpack_require__(875604)
              , cJb = fZ.forwardRef
              , gZ = fZ.useCallback
              , dJb = fZ.useId
              , eJb = fZ.useState;
            var fJb, gJb;
            fJb = __c.XW("line", new Set(["x1", "x2"]));
            gJb = __c.XW("circle", new Set(["cx", "aria-valuenow", "aria-valuetext"]));
            __c.hZ = cJb( (a, b) => {
                const c = a.fill
                  , d = a.strokeColor
                  , e = a.strokeWidth
                  , f = a.cx
                  , g = a.cy
                  , h = a.r
                  , k = a.onKeyDown
                  , l = a.value;
                a = a.Mi;
                const [m,n] = eJb("none")
                  , p = gZ( () => {
                    n("none")
                }
                , [n])
                  , q = gZ(v => {
                    v.stopPropagation();
                    __c.Vx.Oo && n("auto")
                }
                , [n])
                  , r = gZ( () => n("none"), [n])
                  , t = dJb();
                return bJb(aJb, {
                    children: [eZ("defs", {
                        children: eZ("filter", {
                            id: t,
                            x: "0",
                            y: "0",
                            filterUnits: "userSpaceOnUse",
                            children: eZ("feDropShadow", {
                                dx: "0",
                                dy: "0",
                                stdDeviation: e !== null && e !== void 0 ? e : 1.5,
                                floodColor: d
                            })
                        })
                    }), eZ(gJb, {
                        ref: b,
                        tabIndex: 0,
                        fill: c,
                        cx: f,
                        cy: g,
                        r: h - (e !== null && e !== void 0 ? e : 1) * 2,
                        filter: `url(#${t})`,
                        onKeyDown: k,
                        onMouseDown: p,
                        onFocus: q,
                        onBlur: r,
                        style: {
                            outline: `${m} -webkit-focus-ring-color`
                        },
                        "aria-valuenow": l,
                        "aria-valuetext": a
                    })]
                })
            }
            );
            __c.iZ = cJb( (a, b) => {
                const c = a.color;
                var d = a.uu;
                const e = a.strokeWidth
                  , f = a.strokeColor
                  , g = a.x1
                  , h = a.y1
                  , k = a.x2
                  , l = d + (e !== null && e !== void 0 ? e : 0);
                d /= 2;
                const m = l / 2
                  , n = g - m
                  , p = h - m;
                return bJb("g", {
                    children: [eZ("line", {
                        ref: b,
                        stroke: "transparent",
                        strokeLinecap: "round",
                        strokeWidth: 0,
                        x1: g,
                        y1: h,
                        x2: k,
                        y2: a.y2
                    }), eZ("rect", {
                        fill: c,
                        stroke: f !== null && f !== void 0 ? f : "rgb(13, 18, 22)",
                        strokeWidth: e !== null && e !== void 0 ? e : 0,
                        width: k - g + d * 2,
                        height: l,
                        rx: m,
                        ry: m,
                        x: n,
                        y: p
                    })]
                })
            }
            );
            __c.jZ = ({color: a, uu: b, x1: c, y1: d, x2: e, y2: f}) => eZ(fJb, {
                stroke: a,
                strokeLinecap: "round",
                strokeWidth: b,
                x1: c,
                y1: d,
                x2: e,
                y2: f
            });
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/fe9a455ef0145b6f.js.map

(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[559], {

    /***/
    190240: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var Hf = __c.Hf;
            var VFb, WFb, PW;
            VFb = function(a) {
                const b = a.sS
                  , c = a.enter
                  , d = a.update
                  , e = a.exit;
                a = a.Xe;
                return {
                    sS: b && Hf(b, f => ({
                        ...MW,
                        ...f
                    })),
                    enter: Hf(c, f => ({
                        ...MW,
                        ...f
                    })),
                    update: Hf(d, f => ({
                        ...MW,
                        ...f
                    })),
                    exit: Hf(e, f => ({
                        ...MW,
                        ...f
                    })),
                    Xe: a
                }
            }
            ;
            WFb = function(a, b, c) {
                a.Ld = window.setTimeout(c, b)
            }
            ;
            __c.NW = function(a, b, c) {
                a.iY(b);
                const {mu: d, content: e, placement: f, arrow: g, key: h, AYa: k=0} = c;
                WFb(b, k, XFb( () => {
                    b.open = !0;
                    b.position = d;
                    b.placement = f;
                    b.content = e;
                    b.arrow = g;
                    b.key = h;
                    typeof b.content !== "string" && b.yU.current && b.yU.current.update()
                }
                ))
            }
            ;
            __c.OW = function(a, b) {
                a.iY(b);
                b.open = !1
            }
            ;
            __c.QW = function({children: a, getPosition: b}) {
                const c = YFb(null);
                ZFb( () => $Fb( () => {
                    const {top: d, left: e} = b()
                      , f = c.current;
                    f === null || f === void 0 || f.setAttribute("transform", `translate(${e}, ${d})`)
                }
                ), [b]);
                return PW("g", {
                    ref: c,
                    children: a
                })
            }
            ;
            __c.SW = function({store: a}) {
                return aGb(RW(function(b, c) {
                    return PW(__c.bGb, {
                        ref: c,
                        ...b,
                        fontFamily: a.fontFamily,
                        fontSize: b.fontSize || a.fontSize,
                        fontWeight: a.fontWeight,
                        fontStyle: a.fontStyle,
                        fill: b.fill || a.hk
                    })
                }))
            }
            ;
            PW = __webpack_require__(443763).jsx;
            var cGb = __webpack_require__(358579).Z;
            var TW = __webpack_require__(875604)
              , RW = TW.forwardRef
              , dGb = TW.memo
              , ZFb = TW.useLayoutEffect
              , YFb = TW.useRef;
            var UW = __webpack_require__(519427)
              , XFb = UW.action
              , $Fb = UW.autorun
              , VW = UW.computed
              , WW = UW.observable
              , eGb = UW.reaction;
            var aGb = __webpack_require__(446474).Pi;
            var fGb;
            __c.XW = (a, b) => {
                const c = (d, e) => {
                    const f = YFb(null);
                    ZFb( () => {
                        const g = [];
                        for (const h of b) {
                            const k = d[h]
                              , l = eGb( () => k.get(), m => {
                                const n = f.current;
                                if (n != null)
                                    if (h === "children")
                                        n.textContent = m.toString();
                                    else {
                                        var p = fGb.get(h) || h;
                                        n.setAttribute(p, m.toString())
                                    }
                            }
                            , {
                                fireImmediately: !0
                            });
                            g.push(l)
                        }
                        return () => {
                            g.forEach(h => h())
                        }
                    }
                    , [d]);
                    e = {
                        ...Hf(d, (g, h) => b.has(h) ? void 0 : g),
                        ref: cGb(f, e)
                    };
                    return PW(a, {
                        ...e
                    })
                }
                ;
                c.displayName = `AnimatableElement(${typeof a === "string" ? a : a.displayName || a.name || "Component"})`;
                return dGb(RW(c))
            }
            ;
            fGb = new Map([["strokeDasharray", "stroke-dasharray"], ["strokeWidth", "stroke-width"], ["fontSize", "font-size"], ["textAnchor", "text-anchor"], ["letterSpacing", "letter-spacing"], ["strokeOpacity", "stroke-opacity"], ["fillOpacity", "fill-opacity"]]);
            var gGb = class {
                static A(a) {
                    __c.Q(a, {
                        Aea: WW.ref,
                        LUa: VW,
                        diff: VW
                    })
                }
                subscribe() {
                    return eGb( () => this.data.get(), () => this.flush(), {
                        fireImmediately: !0
                    })
                }
                flush() {
                    const a = this.LIa;
                    this.LIa = this.data.get();
                    a && (this.Aea = a)
                }
                clear() {
                    this.Aea = [];
                    this.LIa = void 0
                }
                get LUa() {
                    const a = new Map;
                    for (const b of this.Aea) {
                        const c = this.getKey(b);
                        a.set(c, b)
                    }
                    return a
                }
                get diff() {
                    const a = this.LUa
                      , b = this.getKey;
                    var c = this.data.get();
                    const d = new Map(a)
                      , e = new Map
                      , f = new Map;
                    for (const g of c)
                        c = b(g),
                        a.get(c) ? (a.delete(c),
                        f.set(c, g)) : e.set(c, g);
                    return {
                        enter: e,
                        update: f,
                        exit: a,
                        prev: d
                    }
                }
                constructor(a, b) {
                    this.data = a;
                    this.getKey = b;
                    this.Aea = (gGb.A(this),
                    [])
                }
            }
            ;
            var MW;
            MW = {
                start: 0,
                end: 1,
                Vf: 0,
                group: (a, b) => b.toString(),
                easing: __c.ax.KIa,
                zb: !1,
                oX: !1
            };
            __c.YW = class {
                static A(a) {
                    __c.Q(a, {
                        Qja: WW.deep,
                        ne: WW.ref,
                        Qe: WW.ref,
                        pe: WW.ref,
                        JJ: WW.ref,
                        animations: WW.shallow,
                        Fk: WW.shallow,
                        xm: WW.shallow,
                        Hx: VW
                    })
                }
                set xb(a) {
                    this.Qja = VFb(a)
                }
                get xb() {
                    return this.Qja
                }
                get Hx() {
                    var a;
                    const b = (a = this.j.IQ) === null || a === void 0 ? void 0 : a.get();
                    return b != null && b !== 0
                }
                constructor({M: a, j: b, Hh: c=VW( () => !__c.oB()), data: d, xb: e, getKey: f, ne: g, Qe: h, pe: k, tj: l=g, El: m=k}) {
                    this.M = (__c.YW.A(this),
                    void 0);
                    this.JJ = !0;
                    this.animations = new Map;
                    this.Fk = new Map;
                    this.xm = new Map;
                    this.M = a;
                    this.j = b;
                    this.Hh = c;
                    this.data = d;
                    this.kr = new gGb(d,f);
                    this.getKey = f;
                    this.Qja = VFb(e);
                    this.ne = g;
                    this.Qe = h;
                    this.pe = k;
                    this.tj = l;
                    this.El = m;
                    const n = b.IQ;
                    this.Dr = n != null ? VW( () => {
                        const p = n.get();
                        p !== 0 && (this.Hhb = p <= 0 ? p + 1 : p);
                        var q;
                        return (q = this.Hhb) !== null && q !== void 0 ? q : p
                    }
                    ) : void 0;
                    this.Tf = VW( () => b.Tf)
                }
            }
            ;
            __c.ZW = class {
                iY(a) {
                    window.clearTimeout(a.Ld)
                }
            }
            ;
            __c.$W = a => {
                const b = ({children: c}) => PW(__c.QW, {
                    getPosition: a,
                    children: c
                });
                b.displayName = a.name != null ? `PositionedLayout(${a.name})` : "PositionedLayout";
                return b
            }
            ;
            var hGb;
            __c.bGb = dGb(RW(function({textAnchor: a="start", dominantBaseline: b="hanging", fill: c, fontWeight: d, ...e}, f) {
                return PW("text", {
                    ref: f,
                    className: "tVQpqQ",
                    textAnchor: a,
                    dominantBaseline: b,
                    fill: c,
                    style: {
                        "--Ll7Axw": c
                    },
                    textRendering: "geometricPrecision",
                    onDragStart: hGb,
                    fontWeight: d != null ? __c.vs(d) : void 0,
                    ...e
                })
            }));
            hGb = a => a.preventDefault();
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/79d0caa2e9e317a9.js.map

(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[14408], {

    /***/
    846915: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(663883);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var lFb = __webpack_require__(443763)
              , mFb = lFb.jsx
              , nFb = lFb.jsxs;
            var oFb = __webpack_require__
              , pFb = oFb(993864)
              , qFb = oFb.n_x(pFb)();
            var rFb = __webpack_require__
              , sFb = rFb(765511)
              , tFb = rFb.n_x(sFb);
            var uFb = __webpack_require__(875604).Component;
            var vFb = __webpack_require__(937763)._;
            var GW = __webpack_require__(519427)
              , HW = GW.action
              , wFb = GW.comparer
              , xFb = GW.computed
              , yFb = GW.observable
              , zFb = GW.reaction;
            var AFb = __webpack_require__(161563)._;
            var BFb = __webpack_require__(635872)
              , CFb = BFb.Om
              , DFb = BFb.p4;
            var EFb, FFb, GFb, IW, IFb, HFb;
            new (EFb = class extends vFb {
                constructor() {
                    super(IW);
                    FFb()
                }
            }
            ,
            ( () => {
                class a extends (GFb = uFb) {
                    static A(b) {
                        __c.Q(b, {
                            Il: yFb.ref,
                            Cna: xFb,
                            componentDidMount: HW,
                            KSa: HW.bound,
                            onError: HW.bound,
                            hY: HW.bound
                        })
                    }
                    get Cna() {
                        var b;
                        const c = this.props.store
                          , d = this.props.Vr;
                        return !this.Il || d && !c.jb && !((b = c.Bc) === null || b === void 0 ? 0 : b.size)
                    }
                    componentDidMount() {
                        const b = this.props.store;
                        this.props.controller.onWaiting();
                        __c.vc(this, [zFb( () => {
                            var c;
                            return {
                                data: (c = b.animationData) === null || c === void 0 ? void 0 : c.get(),
                                Bc: b.Bc
                            }
                        }
                        , ({data: c, Bc: d}) => c && this.loadAnimation(c, d), {
                            fireImmediately: !0,
                            equals: wFb.shallow
                        }), zFb( () => this.Il && b.jb, c => c ? this.play() : this.pause(), {
                            fireImmediately: !0
                        }), this.hY])
                    }
                    render() {
                        const b = this.props.Vr
                          , c = this.props.store
                          , d = c.Na
                          , {ariaHidden: e, ariaLabel: f} = __c.WV(d);
                        return nFb("div", {
                            className: "UB_yHg",
                            children: [this.Cna && mFb("img", {
                                className: "KYSIUA",
                                src: c.eJ,
                                ref: this.CUa,
                                alt: d
                            }), mFb("div", {
                                className: qFb("KYSIUA", b && this.Cna && "BUTEbw"),
                                ref: this.JT,
                                role: d ? "img" : void 0,
                                "aria-label": f,
                                "aria-hidden": e
                            })]
                        })
                    }
                    KSa() {
                        this.Il = !0;
                        this.props.controller.onCanPlay()
                    }
                    onError() {
                        this.props.controller.onError();
                        this.hY()
                    }
                    seek(b) {
                        this.xl && (b *= 1E3,
                        this.props.store.jb ? this.xl.goToAndPlay(b) : this.xl.goToAndStop(b))
                    }
                    Bm() {
                        if (!this.Il) {
                            var b = this.CUa.current;
                            return b ? __c.bJ(b) : void 0
                        }
                        if (b = this.JT.current)
                            if (b = b.getElementsByTagName("svg")[0])
                                return b = HFb(b),
                                b.state === "fulfilled" ? {
                                    type: "image",
                                    element: b.value
                                } : void 0
                    }
                    play() {
                        var b;
                        (b = this.xl) === null || b === void 0 || b.play()
                    }
                    pause() {
                        var b;
                        (b = this.xl) === null || b === void 0 || b.pause()
                    }
                    hY() {
                        this.xl && (this.xl.destroy(),
                        this.xl = void 0,
                        this.Il = !1)
                    }
                    loadAnimation(b, c) {
                        const d = __c.D(this.JT.current);
                        b = JSON.parse(JSON.stringify(b));
                        c && c.size > 0 && __c.YEb(b, c);
                        this.hY();
                        this.xl = tFb().loadAnimation({
                            autoplay: !1,
                            animationData: b,
                            container: d,
                            renderer: "svg",
                            loop: !0
                        });
                        if (c = d.getElementsByTagName("svg")[0])
                            c.style.transform === "translate3d(0px, 0px, 0px)" && (c.style.transform = ""),
                            this.xl.goToAndStop(this.props.store.currentTime * 1E3),
                            this.xl.addEventListener("DOMLoaded", this.KSa),
                            this.xl.addEventListener("error", this.onError),
                            this.xl.addEventListener("data_failed", this.onError)
                    }
                    constructor(...b) {
                        super(...b);
                        this.JT = (IW.A(this),
                        __c.Ix());
                        this.CUa = __c.Ix();
                        this.Il = !1
                    }
                }
                ({c: [IW,FFb]} = AFb(a, [], [__c.Jc], GFb))
            }
            )(),
            EFb);
            IFb = new XMLSerializer;
            HFb = CFb(a => {
                a = new Blob([IFb.serializeToString(a)],{
                    type: "image/svg+xml"
                });
                const b = URL.createObjectURL(a);
                return DFb(__c.XS(b).finally( () => URL.revokeObjectURL(b)))
            }
            );
            __c.tAb = {
                get A4a() {
                    return IW
                }
            };
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/0d5bfa593273b281.js.map

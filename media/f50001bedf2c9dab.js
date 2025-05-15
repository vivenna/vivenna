(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[74734], {

    /***/
    10588: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var Y0 = __webpack_require__(519427)
              , Z0 = Y0.action
              , tQb = Y0.computed
              , $0 = Y0.observable;
            var a1, uQb;
            a1 = class {
                static A(a) {
                    __c.Q(a, {
                        definition: $0.ref,
                        vB: $0.ref,
                        playing: $0.ref,
                        Dr: $0.ref,
                        play: Z0,
                        pause: Z0,
                        Tr: tQb,
                        tick: Z0,
                        update: Z0,
                        pq: Z0,
                        z$: Z0,
                        ttb: Z0
                    })
                }
                play() {
                    this.playing = !0;
                    this.M.play()
                }
                pause() {
                    this.playing = !1
                }
                get Tr() {
                    const a = this.Dr;
                    var b = this.definition;
                    const c = b.bk
                      , d = b.mc;
                    b = b.So;
                    const e = this.vB;
                    return a ? a.get() * b * (c + d) : e
                }
                tick(a) {
                    const b = this.definition.mc
                      , c = this.definition.bk
                      , d = this.definition.Fj;
                    this.vB += a;
                    this.vB >= b + c && (this.vB = b + c,
                    this.pause(),
                    d === null || d === void 0 || d())
                }
                update({end: a, mc: b, bk: c, So: d, easing: e, Fj: f, mka: g}) {
                    const h = this.state.get();
                    this.definition = {
                        start: h,
                        end: a,
                        mc: b,
                        bk: c,
                        So: d,
                        easing: e,
                        Fj: f
                    };
                    g || h !== a ? (this.vB = 0,
                    this.play()) : (this.vB = b + c,
                    this.pause(),
                    f === null || f === void 0 || f())
                }
                pq(a) {
                    const b = this.definition.mc
                      , c = this.definition.bk;
                    __c.w(a >= 0 && a <= b + c);
                    this.vB = a
                }
                z$(a) {
                    this.Dr = a;
                    this.pause()
                }
                ttb() {
                    const a = this.Dr;
                    var b = this.definition;
                    const c = b.bk
                      , d = b.mc;
                    b = b.So;
                    a && (this.vB = a.get() * b * (c + d),
                    this.Dr = void 0)
                }
                constructor(a, b, c) {
                    this.M = b;
                    this.definition = (a1.A(this),
                    void 0);
                    this.vB = 0;
                    this.playing = !1;
                    this.definition = a;
                    this.Tf = c;
                    this.state = tQb( () => {
                        var d, e = this.definition, f = e.start;
                        const g = e.end;
                        var h = e.bk
                          , k = e.mc;
                        e = e.easing;
                        var l = this.Tr;
                        if (l < h)
                            return f;
                        if (l >= h + k)
                            return g;
                        h = l - h;
                        return (l = (d = this.Tf) === null || d === void 0 ? void 0 : d.get()) ? (d = l.start,
                        e = l.end,
                        l = l.easing,
                        f = l(d * f, e * g, h, k),
                        k = l(d, e, h, k),
                        f / k) : e(f, g, h, k)
                    }
                    )
                }
            }
            ;
            uQb = class {
                static A(a) {
                    __c.Q(a, {
                        tick: Z0
                    })
                }
                play() {
                    this.playing || (this.Yra = this.now(),
                    this.playing = !0,
                    this.requestAnimationFrame(this.tick))
                }
                pause() {
                    this.playing = !1
                }
                aFa(a, b) {
                    a = new a1(a,this,b);
                    this.animations.add(a);
                    return a
                }
                GVa(a) {
                    this.animations.delete(a)
                }
                constructor(a=c => window.requestAnimationFrame(c), b= () => performance.now()) {
                    this.requestAnimationFrame = a;
                    this.now = b;
                    this.playing = (uQb.A(this),
                    !1);
                    this.animations = new Set;
                    this.Yra = 0;
                    this.tick = c => {
                        if (this.playing) {
                            var d = !1
                              , e = c - this.Yra;
                            for (const f of this.animations)
                                f.playing && (f.tick(e),
                                d = d || f.playing);
                            this.Yra = c;
                            d ? this.requestAnimationFrame(this.tick) : this.pause()
                        }
                    }
                }
            }
            ;
            __c.PB = {};
            __c.PB.tvb = a1;
            __c.PB.ZCa = uQb;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/f50001bedf2c9dab.js.map

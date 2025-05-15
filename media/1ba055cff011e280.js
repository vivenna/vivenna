(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[4143], {

    /***/
    994944: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(59534);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var E = __c.E;
            var Q = __c.Q;
            var c_b = function(a, b="medium") {
                if (a !== null && a !== void 0 && a.length) {
                    var c = window.devicePixelRatio || 1
                      , d = (typeof b === "number" ? b : b_b(b)) * c;
                    return [...a].sort( (e, f) => {
                        e = e.width;
                        f = f.width;
                        return e > d && f < d ? -1 : e < d && f > d ? 1 : Math.abs(e - d) - Math.abs(f - d)
                    }
                    )[0].url
                }
            }
              , i_b = function(a, b) {
                class c {
                    static A(d) {
                        Q(d, {
                            Ae: J4,
                            $ja: J4
                        })
                    }
                    get Ae() {
                        switch (this.$ja) {
                        case "date":
                            return new d_b(this.nn,b.language || "en-AU");
                        case "select":
                            return new e_b(this.nn);
                        case "mention":
                            return new f_b(this.nn);
                        case "embed":
                            return new g_b(this.nn);
                        case "plain_number":
                        case "currency":
                        case "percentage":
                        case void 0:
                            break;
                        default:
                            throw new E(this.$ja);
                        }
                    }
                    get $ja() {
                        var d;
                        return (d = this.nn.Yp) === null || d === void 0 ? void 0 : d.type
                    }
                    constructor(d) {
                        this.context = d;
                        this.nn = (c.A(this),
                        void 0);
                        this.nn = __c.D(a.ov(d.sheet, d.na, d.column))
                    }
                }
                return h_b(d => (new c(d)).Ae)
            }
              , k_b = function() {
                const a = K4( () => new Map, []);
                return {
                    Ldb: b => {
                        if (a.has(b))
                            return __c.D(a.get(b));
                        const c = j_b();
                        a.set(b, c);
                        return c
                    }
                }
            }
              , l_b = function(a, b) {
                return K4( () => {
                    const c = new Map;
                    return d => {
                        if (c.has(d))
                            return __c.D(c.get(d));
                        const e = a(d);
                        c.set(d, e);
                        return e
                    }
                }
                , b)
            }
              , s_b = function({children: a, keyFrame: b, LYa: c, ariaLive: d, MOa: e=!1, w5a: f, wma: g, gab: h, DBb: k, YHa: l, ZJa: m, BBb: n, itb: p}) {
                const {Ldb: q} = k_b()
                  , {Lcb: r, yob: t} = m_b(b, a)
                  , v = l_b(u => () => {
                    (e === !1 || typeof e === "function" && !e(u)) && t(u)
                }
                , [t, e]);
                return L4("div", {
                    className: M4(g, "_9GxJfQ", {
                        KwB0XQ: l === "hidden",
                        WV1Mmw: c === "fill-height",
                        _2uSJxw: c === "flex-grow"
                    }),
                    children: L4("div", {
                        className: M4("m2VaAA", h),
                        "aria-live": d,
                        style: k,
                        role: "region",
                        children: [...r.map( ({key: u, element: x}) => L4(n_b, {
                            in: u === b,
                            timeout: f,
                            classNames: p,
                            mountOnEnter: !0,
                            unmountOnExit: !e,
                            nodeRef: q(u),
                            onExited: v(u),
                            children: y => L4(o_b.Provider, {
                                value: y,
                                children: L4("div", {
                                    className: M4("KxXR9g", n, {
                                        KwB0XQ: m === "hidden"
                                    }),
                                    ref: q(u),
                                    "aria-hidden": y === p_b || y === q_b || y === r_b,
                                    children: u === b ? a : x
                                })
                            })
                        }, u)), r.every(u => u.key !== b) && L4(n_b, {
                            in: !1,
                            timeout: f,
                            classNames: p,
                            mountOnEnter: !0,
                            unmountOnExit: !e,
                            nodeRef: q(b),
                            onExited: e ? void 0 : v(b),
                            children: u => L4(o_b.Provider, {
                                value: u,
                                children: L4("div", {
                                    className: M4("KxXR9g", n),
                                    ref: q(b),
                                    "aria-hidden": u === p_b || u === q_b || u === r_b,
                                    children: a
                                })
                            })
                        }, b)]
                    })
                })
            }
              , m_b = function(a, b) {
                const [c,d] = t_b( () => [{
                    key: a,
                    element: b
                }]);
                u_b( () => {
                    d(f => f.every(g => g.key !== a) ? f.concat({
                        key: a,
                        element: b
                    }) : f.map(g => g.key === a ? {
                        key: a,
                        element: b
                    } : g))
                }
                , [a, b]);
                const e = N4(f => {
                    d(g => g.filter(h => h.key !== f))
                }
                , []);
                return {
                    Lcb: c,
                    yob: e
                }
            }
              , v_b = function(a) {
                switch (a.type) {
                case "mention":
                    return "bCAtqw";
                case "embed":
                    return "BTcT3w";
                case "date":
                    return "McKQgg";
                case "select":
                    return "V2E5nQ";
                default:
                    throw new E(a);
                }
            }
              , z_b = function(a, b) {
                switch (a.type) {
                case "mention":
                    return L4(w_b, {
                        yq: a.user ? b.l_(a.user) : void 0,
                        text: a.text,
                        backgroundColor: a.user ? b.bdb(a.user).background : void 0
                    });
                case "embed":
                    const c = !a.url;
                    a = b.bKa.vZ.get(a.url);
                    return L4(x_b, {
                        icon: a,
                        Sgb: c
                    });
                case "date":
                    return a.text ? void 0 : L4(y_b, {});
                case "select":
                    break;
                default:
                    throw new E(a);
                }
            }
              , B_b = function(a, b) {
                switch (a.type) {
                case "mention":
                case "embed":
                case "date":
                    break;
                case "select":
                    return L4(A_b, {
                        selected: !!b.kWa
                    });
                default:
                    throw new E(a);
                }
            }
              , O4 = function(a) {
                return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey) ? !0 : a instanceof KeyboardEvent ? a.key === "Meta" || ["91", "224"].includes(a.code) : !1
            }
              , C_b = function(a) {
                __c.w(!0, "chunkLength must be positive");
                const b = [];
                for (let c = 0; c < a.length; c += 50)
                    b.push(a.slice(c, c + 50));
                return b
            }
              , D_b = function(a, b, c) {
                if (c) {
                    var d = c_b(c.images, "medium")
                      , e = c_b(c.images, "xxxlarge");
                    if (d && e) {
                        c = new Image;
                        c.src = d;
                        var f = new Image;
                        f.src = e;
                        f.onload = P4( () => a.L5.set(b, e));
                        f.onerror = P4( () => a.L5.set(b, void 0));
                        !f.complete && c.complete ? a.L5.set(b, d) : c.src = ""
                    }
                } else
                    a.L5.set(b, void 0)
            }
              , F_b = function(a, {url: b, id: c, extension: d}) {
                if (!a.promises.has(b)) {
                    const e = new Promise(f => {
                        a.Dg ? a.Dg.xEb(new E_b({
                            id: c,
                            extension: d
                        })).then( ({document: g}) => {
                            const h = g.Df.content.title;
                            h ? (Q4( () => a.XZa.set(b, {
                                status: 1,
                                title: h
                            })),
                            f(h)) : f(void 0)
                        }
                        ).catch( () => {
                            Q4( () => a.XZa.set(b, {
                                status: 2
                            }));
                            f(void 0)
                        }
                        ) : f(void 0)
                    }
                    );
                    a.promises.set(b, e)
                }
                return a.promises.get(b)
            }
              , b_b = a => a.endsWith("rem") ? parseFloat(a) * 10 : __c.My * __c.iIb[a]
              , R4 = __webpack_require__(519427)
              , P4 = R4.action
              , G_b = R4.comparer
              , J4 = R4.computed
              , H_b = R4.observable
              , S4 = R4.ObservableMap
              , Q4 = R4.runInAction;
            var h_b = __webpack_require__(635872).Om;
            var T4 = __webpack_require__(875604)
              , I_b = T4.createContext
              , j_b = T4.createRef
              , U4 = T4.memo
              , N4 = T4.useCallback
              , u_b = T4.useEffect
              , J_b = T4.useLayoutEffect
              , K4 = T4.useMemo
              , t_b = T4.useState;
            var K_b = __webpack_require__(443763)
              , L4 = K_b.jsx
              , L_b = K_b.jsxs;
            var M_b = __webpack_require__
              , N_b = M_b(993864)
              , M4 = M_b.n_x(N_b)();
            var n_b = __webpack_require__(460876).Z;
            var V4 = __webpack_require__(223826)
              , r_b = V4.Wj
              , p_b = V4.Ix
              , q_b = V4.$r;
            var W4 = __webpack_require__(446474).Pi;
            var O_b = class {
                static A(a) {
                    Q(a, {
                        text: J4,
                        user: J4,
                        brand: J4
                    })
                }
                get text() {
                    return this.Ae.text
                }
                get user() {
                    return this.Ae.user
                }
                get brand() {
                    return this.Ae.brand
                }
                constructor(a) {
                    this.Ae = a;
                    this.type = (O_b.A(this),
                    "mention")
                }
            }
              , P_b = class {
                static A(a) {
                    Q(a, {
                        text: J4,
                        url: J4
                    })
                }
                get text() {
                    return this.Ae.text
                }
                get url() {
                    return this.Ae.url
                }
                constructor(a) {
                    this.Ae = a;
                    this.type = (P_b.A(this),
                    "embed")
                }
            }
              , Q_b = class {
                static A(a) {
                    Q(a, {
                        text: J4,
                        language: J4,
                        style: J4,
                        date: J4
                    })
                }
                get text() {
                    return this.Ae.text
                }
                get language() {
                    return this.Ae.language
                }
                get style() {
                    return this.Ae.style
                }
                get date() {
                    return this.Ae.date
                }
                constructor(a) {
                    this.Ae = a;
                    this.type = (Q_b.A(this),
                    "date")
                }
            }
              , R_b = class {
                static A(a) {
                    Q(a, {
                        text: J4,
                        options: J4,
                        df: J4,
                        qR: J4
                    })
                }
                get text() {
                    return this.Ae.text
                }
                get options() {
                    return this.Ae.options.map(a => a)
                }
                get df() {
                    return this.Ae.df
                }
                get qR() {
                    var a;
                    return (a = this.Ae.options.first(b => b.id === this.Ae.df)) === null || a === void 0 ? void 0 : a.fill.color
                }
                constructor(a) {
                    this.Ae = a;
                    this.type = (R_b.A(this),
                    "select")
                }
            }
              , S_b = h_b(a => {
                switch (a.type) {
                case "mention":
                    return new O_b(a);
                case "embed":
                    return new P_b(a);
                case "date":
                    return new Q_b(a);
                case "select":
                    return new R_b(a);
                default:
                    throw new E(a);
                }
            }
            );
            var d_b = class {
                static A(a) {
                    Q(a, {
                        style: J4,
                        date: J4,
                        text: J4
                    })
                }
                get style() {
                    return 2
                }
                get date() {
                    var a;
                    (a = this.jo.ek.type === 2 ? this.jo.ek.date : void 0) || (a = new Date,
                    a = __c.iA(a),
                    a = {
                        year: a.getFullYear(),
                        month: a.getMonth() + 1,
                        day: a.getDate(),
                        Seb: a.getHours(),
                        Ljb: a.getMinutes()
                    });
                    return a
                }
                get text() {
                    return this.jo.Jz
                }
                constructor(a, b) {
                    this.jo = a;
                    this.language = b;
                    this.type = (d_b.A(this),
                    "date")
                }
            }
              , T_b = class {
                get label() {
                    return this.option.label
                }
                get fill() {
                    return this.option.fill
                }
                constructor(a, b) {
                    this.option = a;
                    this.id = b
                }
            }
              , e_b = class {
                static A(a) {
                    Q(a, {
                        options: J4,
                        df: J4,
                        qR: J4,
                        text: J4,
                        yLa: J4({
                            equals: G_b.shallow
                        })
                    })
                }
                get options() {
                    return this.yLa.map( (a, b) => new T_b(a,b))
                }
                get df() {
                    var a;
                    return (a = this.options.find(b => b.label === this.text)) === null || a === void 0 ? void 0 : a.id
                }
                get qR() {
                    var a;
                    return (a = this.options.find(b => b.id === this.df)) === null || a === void 0 ? void 0 : a.fill.color
                }
                get text() {
                    return this.jo.Jz
                }
                get yLa() {
                    var a, b;
                    __c.C(((a = this.jo.Yp) === null || a === void 0 ? void 0 : a.type) === "select");
                    return (b = this.jo.Yp) === null || b === void 0 ? void 0 : b.options
                }
                constructor(a) {
                    this.jo = a;
                    this.type = (e_b.A(this),
                    "select")
                }
            }
              , f_b = class {
                static A(a) {
                    Q(a, {
                        YL: J4
                    })
                }
                get text() {
                    return this.YL ? this.YL.text : ""
                }
                get user() {
                    return this.YL ? this.YL.user : ""
                }
                get brand() {
                    return this.YL ? this.YL.brand : ""
                }
                get YL() {
                    if (this.jo.ek.type !== 9)
                        return __c.C(this.jo.ek.type === 7),
                        this.jo.ek ? this.jo.ek.value[0] : void 0
                }
                constructor(a) {
                    this.jo = a;
                    this.type = (f_b.A(this),
                    "mention")
                }
            }
              , g_b = class {
                static A(a) {
                    Q(a, {
                        RZ: J4
                    })
                }
                get text() {
                    return this.RZ ? this.RZ.embed.text : ""
                }
                get url() {
                    return this.RZ ? this.RZ.embed.url : ""
                }
                get RZ() {
                    if (this.jo.ek.type !== 9)
                        return __c.C(this.jo.ek.type === 8),
                        this.jo.ek ? this.jo.ek.value[0] : void 0
                }
                constructor(a) {
                    this.jo = a;
                    this.type = (g_b.A(this),
                    "embed")
                }
            }
            ;
            var U_b = class {
                Poa(a) {
                    this.Oka.Poa(a)
                }
                X3(a, b) {
                    this.Oka.X3(a, b)
                }
                l_(a) {
                    return this.Oka.l_(a)
                }
                Moa(a) {
                    this.bKa.Moa(a)
                }
                constructor(a, b, c, d) {
                    this.Oka = a;
                    this.bKa = b;
                    this.nb = c;
                    this.wD = d;
                    this.TBa = new __c.kwb;
                    this.bdb = e => __c.EJa(this.TBa, e)
                }
            }
            ;
            var o_b = I_b(void 0);
            var V_b = Number.parseInt("300ms", 10)
              , W_b = {
                enter: "_QukmA",
                enterActive: "_5_06KQ",
                enterDone: void 0,
                exitActive: "a952jg",
                exitDone: "orZOEA"
            }
              , X_b = U4(function({lr: a=!1, children: b, keyFrame: c, LYa: d, YHa: e="hidden", ZJa: f="hidden", ariaLive: g, MOa: h, bFb: k="none"}) {
                a = __c.tb() && !a;
                return s_b({
                    children: b,
                    keyFrame: c,
                    LYa: d,
                    ariaLive: g,
                    YHa: e,
                    ZJa: f,
                    MOa: h,
                    w5a: a ? V_b : 0,
                    gab: M4({
                        _1niDPQ: a,
                        Q6kGbg: k === "none",
                        _9j7ODw: k === "layout"
                    }),
                    itb: W_b
                })
            });
            var Y_b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
            var Z_b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
            var $_b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
            var a0b = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
            var b0b = U4(a => {
                const b = a.link
                  , c = a.className
                  , d = a.ariaLabel
                  , e = a.qR
                  , f = a.r$a
                  , g = a.R3a
                  , h = a.s4a
                  , k = a.measureRef
                  , l = a.onPointerDown
                  , m = a.onMouseEnter
                  , n = a.onMouseLeave
                  , p = M4({
                    EdewNw: !!g,
                    _6ZpPrw: !!h,
                    pzXyUA: a.text.length > 0
                });
                a = a.text.length > 0 ? a.text : "\ufeff";
                return L_b("span", {
                    className: M4(c, "FedJ0Q"),
                    "aria-label": d || a,
                    children: [L4("span", {
                        className: M4("_2Lr6pQ", p),
                        children: L4("span", {
                            className: "Z_WvzQ",
                            children: a
                        })
                    }), L_b("span", {
                        className: M4("XemTdQ", p),
                        ref: k,
                        style: e ? {
                            color: e
                        } : void 0,
                        onPointerDown: l,
                        onMouseEnter: m,
                        onMouseLeave: n,
                        children: [g, L4("span", {
                            className: M4("U_QH_A", {
                                C9XL8g: !f
                            }),
                            children: b ? L4("a", {
                                className: "vgTP5Q",
                                ...b,
                                children: a
                            }) : a
                        }), h]
                    })]
                })
            }
            )
              , w_b = U4(a => {
                const b = a.backgroundColor
                  , c = a.yq;
                a = a.text;
                const d = {
                    width: "0.9em",
                    height: "0.9em"
                };
                return L4(X_b, {
                    keyFrame: c ? "show" : "hide",
                    children: a ? L4(__c.mIb, {
                        name: a,
                        style: d,
                        backgroundColor: b,
                        yq: c,
                        borderColor: c ? void 0 : b
                    }) : L4("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: a0b
                        }
                    })
                })
            }
            )
              , x_b = U4(a => {
                const b = a.icon;
                a = a.Sgb;
                return L4(X_b, {
                    keyFrame: b ? "favicon" : "placeholder",
                    children: b ? L4("span", {
                        className: "_tFJqA",
                        children: L4("img", {
                            src: b,
                            className: "qpbYdw"
                        })
                    }) : L4("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: a ? $_b : Z_b
                        }
                    })
                })
            }
            )
              , y_b = U4( () => L4("span", {
                "aria-hidden": "true",
                className: "_tFJqA",
                dangerouslySetInnerHTML: {
                    __html: Y_b
                }
            }))
              , A_b = U4( ({selected: a}) => L4("div", {
                className: M4("whph4A", {
                    zgzjww: a
                }),
                children: L4(__c.RL, {
                    size: "medium",
                    style: {
                        width: "0.9em",
                        height: "0.9em"
                    },
                    className: "_tFJqA"
                })
            }))
              , c0b = W4(a => {
                const {Ae: b, kWa: c, ova: d, mode: e="viewable", measureRef: f, Xo: g, onPointerDown: h} = a;
                a = b.text || "\u00a0".repeat(16);
                const k = b.type === "embed" ? d.nb(b.url) : void 0
                  , [l,m] = t_b(!1)
                  , n = N4(t => m(O4(t)), [m])
                  , p = N4(t => m(!O4(t)), [m])
                  , q = N4(t => {
                    m(O4(t.nativeEvent));
                    document.addEventListener("keydown", n);
                    document.addEventListener("keyup", p)
                }
                , [m, n, p])
                  , r = N4( () => {
                    m(!1);
                    document.removeEventListener("keydown", n);
                    document.removeEventListener("keyup", p)
                }
                , [m, n, p]);
                u_b( () => {
                    Q4( () => {
                        switch (b.type) {
                        case "mention":
                            b.user && d.Poa(b.user);
                            break;
                        case "embed":
                            d.Moa(b.url)
                        }
                    }
                    )
                }
                , [b, d]);
                J_b( () => {
                    g === null || g === void 0 || g()
                }
                , [b.type, a, g]);
                return L4(b0b, {
                    text: a,
                    link: e === "viewable" || l ? k : void 0,
                    r$a: b.text.length === 0,
                    ariaLabel: b.text || "",
                    className: v_b(b),
                    qR: b.qR,
                    R3a: z_b(b, d),
                    s4a: B_b(b, {
                        kWa: c
                    }),
                    measureRef: f,
                    onPointerDown: h,
                    onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
                    onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0
                })
            }
            );
            var d0b = __c.M( () => ({
                MFb: __c.aN(11),
                mode: __c.F("A?", 1, "BY_USER_IDS"),
                cub: __c.$M(1)
            }));
            var e0b = class {
                static A(a) {
                    Q(a, {
                        uP: H_b.shallow,
                        OKa: P4
                    })
                }
                l_(a) {
                    return this.fGa.l_(a)
                }
                Poa(a) {
                    this.SBa.has(a) || this.uP.has(a) || (this.uP.add(a),
                    this.U9a())
                }
                X3(a, b) {
                    this.SBa.has(a) || (this.SBa.set(a, b),
                    this.uP.delete(a),
                    D_b(this.fGa, a, b))
                }
                async OKa() {
                    if (this.uP.size !== 0) {
                        var a = [...this.uP.values()];
                        this.uP.clear();
                        if (this.gGa) {
                            var b = await this.gGa;
                            await Promise.all(C_b(a).map(async c => {
                                const d = new d0b({
                                    cub: c
                                })
                                  , {Ayb: e} = await b.$Db(d);
                                Q4( () => c.forEach(f => this.X3(f, e.get(f))))
                            }
                            ))
                        } else
                            a.forEach(c => this.X3(c))
                    }
                }
                constructor(a, b) {
                    this.gGa = a;
                    this.SBa = (e0b.A(this),
                    new S4);
                    this.uP = new Set;
                    this.fGa = new f0b;
                    this.U9a = __c.Oc( () => this.OKa(), 200);
                    Q4( () => {
                        b === null || b === void 0 || b.forEach( (c, d) => this.X3(d, c))
                    }
                    )
                }
            }
              , f0b = class {
                l_(a) {
                    return this.L5.get(a)
                }
                constructor() {
                    this.L5 = new S4
                }
            }
            ;
            var E_b = __c.M( () => ({
                id: __c.X("id", 1),
                extension: __c.Y("extension", 3),
                dWa: __c.WM("revision", 5),
                version: __c.WM("version", 2),
                qFb: __c.WM("imagesetsLimit", 6)
            }));
            var g0b = class {
                static A(a) {
                    Q(a, {
                        Lbb: P4
                    })
                }
                async Lbb(a) {
                    if (this.Dg) {
                        var b = (new URL(a)).pathname;
                        {
                            const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                            c == null || c.length < 2 ? b = void 0 : (b = c[2],
                            (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0),
                            b = {
                                id: c[1],
                                extension: b
                            })
                        }
                        if (b)
                            return await F_b(this, {
                                url: a,
                                ...b
                            })
                    }
                }
                constructor(a) {
                    this.Dg = a;
                    this.XZa = (g0b.A(this),
                    new S4);
                    this.promises = new Map
                }
            }
            ;
            var h0b = class {
                static A(a) {
                    Q(a, {
                        vZ: H_b.shallow
                    })
                }
                async Moa(a) {
                    const b = new Image;
                    let c;
                    try {
                        var d;
                        const e = await ((d = this.wD) === null || d === void 0 ? void 0 : d.f7(a));
                        c = e === null || e === void 0 ? void 0 : e.Kbb
                    } catch (e) {}
                    c ? (b.src = c,
                    b.onload = P4( () => this.vZ.set(a, c)),
                    b.onerror = P4( () => this.vZ.set(a, void 0))) : Q4( () => this.vZ.set(a, void 0))
                }
                constructor(a) {
                    this.wD = a;
                    this.vZ = (h0b.A(this),
                    new Map)
                }
            }
            ;
            __c.nGa = {
                Qfb: function(a) {
                    const b = a.document
                      , c = a.Dg
                      , d = a.nb
                      , e = a.wD;
                    var f = a.y7;
                    const g = a.ed
                      , h = a.Qy
                      , k = a.pW;
                    a = a.CFb;
                    f = new e0b(a === null || a === void 0 ? void 0 : a(),f);
                    a = new h0b(e);
                    new g0b(c);
                    const l = new U_b(f,a,d,e)
                      , m = i_b(k, b);
                    g.Ip.mja = W4( ({item: p, measureRef: q}) => {
                        const r = K4( () => S_b(p.Ae), [p.Ae]);
                        return L4(c0b, {
                            Ae: r,
                            ova: l,
                            measureRef: q
                        })
                    }
                    );
                    const n = W4( ({context: p, Xo: q}) => {
                        const r = K4( () => __c.D(m(p.container)), [p]);
                        J_b(q, [q, p.container.column.width]);
                        return L4(c0b, {
                            Ae: r,
                            ova: l,
                            Xo: q
                        })
                    }
                    );
                    h.qEa = ({context: p, Xo: q}) => ({
                        type: "react",
                        node: L4(n, {
                            context: p,
                            Xo: q
                        })
                    });
                    return {
                        ova: l
                    }
                }
            };
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/1ba055cff011e280.js.map

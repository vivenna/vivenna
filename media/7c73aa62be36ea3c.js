(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[60060], {

    /***/
    82986: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(914242);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var TM = __c.TM;
            var X = __c.X;
            var M = __c.M;
            var Ha = __c.Ha;
            var N2b, Q2b, T2b, U2b, W2b, V2b, Y2b, a3b, $2b, g3b, e3b, i3b, Y5;
            __c.R5 = function(a) {
                return {
                    type: 1,
                    Component: a
                }
            }
            ;
            __c.S5 = function() {
                return a => a
            }
            ;
            __c.T5 = function(a, b, c) {
                return {
                    key: a,
                    GUa: b,
                    type: "string",
                    nJ: c,
                    HRa: 0
                }
            }
            ;
            __c.U5 = function(a) {
                return () => a
            }
            ;
            N2b = function(a) {
                var b = M2b.get(a.Zka);
                if (!b)
                    throw Error(`Blueprint ${a.Zka} not found`);
                b = b.variants.find(c => c.wP === a.wP);
                if (!b)
                    throw Error(`Variant ${a.wP} not found for blueprint ${a.Zka}`);
                return {
                    Ra: b.Ra
                }
            }
            ;
            Q2b = function(a, b) {
                var c = O2b
                  , d = P2b;
                a.handle("SET_CONFIG", async e => {
                    if (e === void 0)
                        throw new V5({
                            code: "internal_error",
                            message: "SET_CONFIG: request cannot be undefined."
                        });
                    e = c.Zc(e);
                    e = await b(e);
                    if (d)
                        return d.wd(e)
                }
                )
            }
            ;
            T2b = async function(a, b) {
                a = await a.KHa.request("RENDER_ELEMENT", R2b.wd(b));
                if (!a.ok)
                    throw Error(`Encountered an error while sending ${"RENDER_ELEMENT"} request: ${a.error}`);
                if (a.value == null)
                    throw Error("RENDER_ELEMENT: Result cannot be empty");
                return S2b.Zc(a.value)
            }
            ;
            U2b = function(a) {
                Q2b(a.KHa, b => a.handler.yeb(b))
            }
            ;
            W2b = async function(a, b) {
                const c = b.requestId
                  , d = b.path;
                b = b.Ql;
                const e = a.requestHandler.get(d);
                if (e) {
                    a.N1.WX.send({
                        type: "ack",
                        requestId: c
                    });
                    var f = setInterval( () => a.N1.WX.send({
                        type: "ack",
                        requestId: c
                    }), 9E3);
                    try {
                        var g = await e(b);
                        clearInterval(f);
                        a.N1.WX.send({
                            type: "response",
                            requestId: c,
                            payload: g
                        })
                    } catch (k) {
                        clearInterval(f);
                        g = "internal_error";
                        b = "Something went wrong on our end, if this issue persists please contact us.";
                        if (k instanceof V5) {
                            var h = k;
                            k.code === "internal_error" ? a.H.Cb(k, {
                                ze: "Internal error in comms handler",
                                tags: new Map([["type", "request"], ["path", d]])
                            }) : (g = k.code,
                            b = k.dob)
                        } else
                            a.Pob ? a.H.Cb(k, {
                                ze: "Unexpected error type thrown from comms handler",
                                tags: new Map([["type", "request"], ["path", d]])
                            }) : a.n$a.error(k);
                        g = V2b(a.N1, c, g, b);
                        g.ok || a.H.yL(g.error, {
                            ze: "unable to send error response",
                            tags: new Map([["type", "request"], ["path", d]])
                        })
                    }
                    if (h != null)
                        for (const k of a.ibb)
                            try {
                                k(h)
                            } catch (l) {
                                a.H.HP(l, {
                                    ze: "Error executing errorObserver"
                                })
                            }
                } else
                    h = V2b(a.N1, c, "internal_error", `No request handler configured for path: "${d}".`),
                    h.ok || a.H.yL(h.error, {
                        ze: "unable to send error response",
                        tags: new Map([["type", "request"], ["path", d]])
                    })
            }
            ;
            V2b = function(a, b, c, d) {
                return a.WX.send({
                    type: "error",
                    requestId: b,
                    code: c,
                    message: d
                })
            }
            ;
            Y2b = function({src: a, srcdoc: b, sandbox: c}) {
                if (b.length !== 0 || !c.contains("allow-same-origin"))
                    return X2b;
                a = (new URL(a)).origin;
                return a === "null" ? X2b : {
                    WBa: a,
                    YWa: a
                }
            }
            ;
            a3b = async function(a, b, c, {addEventListener: d, removeEventListener: e}=window) {
                const f = new Z2b(6E4)
                  , g = Y2b(c)
                  , h = c.contentWindow;
                if (!h)
                    throw new V5({
                        code: "internal_error",
                        message: "contentWindow is missing from iFrame"
                    });
                c = ({data: k, source: l, origin: m}) => {
                    var n;
                    (k === null || k === void 0 ? 0 : (n = k.source) === null || n === void 0 ? 0 : n.startsWith("react-")) || (m !== g.WBa ? $2b(m) || b.info("received message event from an unexpected origin", {
                        extra: new Map([["expected", g.WBa], ["actual", m]])
                    }) : l !== h ? l !== window && b.info("source and content window do not match", {
                        extra: new Map([["data.source", k === null || k === void 0 ? void 0 : k.source]])
                    }) : (l = k ? k.source ? k.source !== "iframe" ? Ha("invalid source") : (0,
                    __c.Ga)() : Ha("'source' is missing in MessageEvent data object") : Ha("missing 'data' field in MessageEvent"),
                    l.ok ? (h.postMessage({
                        source: "parent"
                    }, g.YWa, [a]),
                    f.resolve(void 0)) : b.uK(l.error, {
                        extra: new Map([["data.source", k === null || k === void 0 ? void 0 : k.source]])
                    })))
                }
                ;
                d("message", c);
                try {
                    await f.promise()
                } finally {
                    e("message", c)
                }
            }
            ;
            $2b = function(a) {
                return b3b.some(b => a.endsWith(b))
            }
            ;
            g3b = async function(a, b, c) {
                const {port1: d, port2: e} = new MessageChannel;
                var f = new c3b(d,a.H);
                await a3b(e, a.H, b, window);
                const g = new d3b(f,{
                    yeb: h => {
                        W5( () => {
                            const k = h.width
                              , l = h.height;
                            c.cqa.Ph.set("config", {
                                type: "string",
                                value: h.config
                            });
                            e3b(c, {
                                width: k,
                                height: l
                            })
                        }
                        );
                        return new P2b
                    }
                });
                f = f3b( () => c.cqa.Ph.get("config"), async h => {
                    let k;
                    h && (__c.C(h.type === "string"),
                    k = h.value);
                    const {width: l, height: m} = await T2b(g, {
                        config: k
                    });
                    W5( () => {
                        e3b(c, {
                            width: l,
                            height: m
                        })
                    }
                    )
                }
                , {
                    fireImmediately: !0
                });
                a.dh.set(b, f)
            }
            ;
            e3b = function(a, b) {
                const c = a.mab
                  , d = a.cqa
                  , e = b.width
                  , f = b.height;
                if (!(e < 0 || f < 0)) {
                    var g = d.height
                      , h = e / f * g;
                    W5( () => {
                        c.width = h;
                        c.height = g;
                        c.I = e;
                        c.W = f;
                        d.width = h;
                        d.I = h;
                        d.W = g
                    }
                    )
                }
            }
            ;
            i3b = function({DCa: a, uZ: b, H: c}) {
                const d = new h3b(c);
                b.hB = async (e, {element: f, container: g}) => {
                    (g === null || g === void 0 ? void 0 : g.type) === "group-element" && __c.pj(g.group) && g.group.Ee.app.id === a && (__c.C((f === null || f === void 0 ? void 0 : f.type) === "embed"),
                    g3b(d, e, {
                        mab: f,
                        cqa: g.group
                    }))
                }
                ;
                b.cU = e => {
                    var f;
                    (f = d.dh.get(e)) === null || f === void 0 || f();
                    d.dh.delete(e)
                }
            }
            ;
            __c.id.prototype.yL = __c.ea(3, function(a, b) {
                this.console.error(...__c.hd(this, "critical", a, b))
            });
            __c.tM.prototype.yL = __c.ea(2, function(a, b) {
                this.Qs.yL(a, b);
                __c.rM(this, a, "critical", b)
            });
            __c.X5 = {};
            Y5 = __webpack_require__(443763).jsx;
            var j3b = __webpack_require__(446474).Pi;
            var k3b = __webpack_require__(875604).memo;
            var Z5 = __webpack_require__(519427)
              , l3b = Z5.ObservableMap
              , f3b = Z5.reaction
              , W5 = Z5.runInAction;
            var m3b = __c.U5(__c.X5)
              , n3b = {
                $G: __c.S5()( () => __c.R5(j3b( () => Y5("div", {
                    children: "3D Widget"
                })))),
                aH: m3b
            };
            var M2b = new l3b
              , o3b = __c.U5({
                Zka: __c.T5("blueprintId", 0),
                wP: __c.T5("variantId", 0)
            });
            var p3b = {
                $G: __c.S5()( () => ({
                    type: 0,
                    $z: N2b
                })),
                aH: o3b
            };
            var q3b = __c.U5({
                url: __c.T5("url", 0),
                config: __c.T5("config", 1)
            })
              , r3b = {
                $G: __c.S5()( () => ({
                    type: 0,
                    $z: a => ({
                        Ra: __c.jQ.create([{
                            ...__c.rdb,
                            top: 0,
                            left: 0,
                            width: 510,
                            height: 191.25,
                            I: 800,
                            W: 300,
                            url: a.url
                        }])
                    })
                })),
                aH: q3b
            };
            var V5 = class extends Error {
                constructor(a) {
                    a.code = a.code;
                    const b = a.message.endsWith(".") ? "" : ".";
                    super(`[${a.code}]:  ${a.message}${b}`.trim());
                    this.code = a.code;
                    this.name = "CanvaError";
                    this.dob = a.message;
                    Object.setPrototypeOf(this, V5.prototype)
                }
            }
            ;
            var R2b = M( () => ({
                config: __c.Y(1)
            }));
            var s3b = M( () => ({
                color: X(1)
            }));
            var t3b = M( () => ({
                type: __c.F("A?", 1, "RECOLORABLE"),
                id: X(1),
                value: __c.Sa(2, s3b)
            }));
            var u3b = M( () => ({
                borderRadius: TM(1),
                borderWidth: TM(2)
            }));
            var v3b = M( () => ({
                type: __c.F("A?", 2, "BORDERABLE"),
                id: X(1),
                value: __c.Sa(2, u3b)
            }));
            var S2b = M( () => ({
                config: X(1),
                width: TM(2),
                height: TM(3),
                LU: __c.Ta(4, t3b),
                I6a: __c.Ta(5, v3b)
            }));
            var O2b = M( () => ({
                config: X(1),
                width: TM(2),
                height: TM(3),
                LU: __c.Ta(4, t3b),
                I6a: __c.Ta(5, v3b)
            }));
            var P2b = M( () => ({}));
            var d3b = class {
                constructor(a, b) {
                    this.KHa = a;
                    this.handler = b;
                    U2b(this)
                }
            }
            ;
            var w3b = class {
                constructor(a, b, c) {
                    this.handler = a;
                    this.port = b;
                    this.H = c;
                    this.send = d => {
                        try {
                            return this.port.postMessage(d),
                            (0,
                            __c.Ga)()
                        } catch (e) {
                            return this.H.Cb(e),
                            Ha(e)
                        }
                    }
                    ;
                    this.Blb = d => {
                        this.H.Cb(d)
                    }
                    ;
                    this.onMessage = ({data: d}) => {
                        if (d)
                            try {
                                this.handler.hob(d)
                            } catch (e) {
                                this.H.Cb(e)
                            }
                        else
                            this.H.error(new V5({
                                code: "internal_error",
                                message: "missing data in 'MessageEvent'"
                            }))
                    }
                    ;
                    this.port.onmessage = this.onMessage;
                    this.port.onmessageerror = this.Blb
                }
            }
            ;
            var $5 = new V5({
                code: "internal_error",
                message: "Comms promise timed out."
            })
              , Z2b = class {
                reset(a) {
                    a && (this.timeoutMs = a);
                    this.setTimeout()
                }
                resolve(a) {
                    clearTimeout(this.Ld);
                    this.Yob(a)
                }
                reject(a) {
                    clearTimeout(this.Ld);
                    this.EVa(a)
                }
                promise() {
                    return this.p
                }
                setTimeout() {
                    clearTimeout(this.Ld);
                    this.Ld = setTimeout( () => {
                        this.EVa($5)
                    }
                    , this.timeoutMs)
                }
                constructor(a) {
                    this.timeoutMs = a;
                    this.p = new Promise( (b, c) => {
                        this.Yob = b;
                        this.EVa = c
                    }
                    );
                    this.setTimeout()
                }
            }
            ;
            var x3b = class {
                request(a, b) {
                    const c = this.jUa
                      , d = new Z2b(5E3)
                      , e = this.Rob()
                      , f = async function() {
                        c.set(e, d);
                        try {
                            const g = await d.promise();
                            return (0,
                            __c.Ga)(g)
                        } catch (g) {
                            return g === $5 ? Ha(new V5({
                                code: $5.code,
                                message: `Comms promise timed out (${a}).`
                            })) : Ha(g)
                        } finally {
                            c.delete(e)
                        }
                    }();
                    b = this.send(e, a, b);
                    b.ok || (this.H.Cb(b.error, {
                        ze: "unable to send request",
                        tags: new Map([["type", "request"], ["path", a]])
                    }),
                    d.reject(b.error));
                    return f
                }
                constructor(a, b) {
                    this.send = a;
                    this.H = b;
                    this.Rob = __c.ws;
                    this.jUa = new Map
                }
            }
            ;
            var y3b = class {
                handle(a, b) {
                    if (this.requestHandler.has(a))
                        throw new V5({
                            code: "internal_error",
                            message: `Handler for '${a}' is already defined.`
                        });
                    this.requestHandler.set(a, b)
                }
                constructor(a, b) {
                    var c = console;
                    this.N1 = a;
                    this.H = b;
                    this.Pob = !0;
                    this.n$a = c;
                    this.requestHandler = new Map;
                    this.ibb = new Set
                }
            }
            ;
            var c3b = class {
                constructor(a, b) {
                    this.request = (c, d) => this.client.request(c, d);
                    this.handle = (c, d) => this.requestHandler.handle(c, d);
                    a = new z3b(c => {
                        switch (c.type) {
                        case "ack":
                        case "error":
                        case "response":
                            var d = this.client;
                            const e = c.requestId
                              , f = c.type
                              , g = d.jUa.get(e);
                            if (g)
                                switch (f) {
                                case "response":
                                    g.resolve(c.Ql);
                                    break;
                                case "ack":
                                    g.reset(2E4);
                                    break;
                                case "error":
                                    g.reject(new V5({
                                        code: c.code,
                                        message: c.message
                                    }));
                                    break;
                                default:
                                    throw new __c.E(c);
                                }
                            else
                                f !== "ack" && d.H.error("request has already been handled and resolved or was not sent from this client", {
                                    tags: new Map([["type", f], ["requestId", `${e}`]])
                                });
                            break;
                        case "request":
                            W2b(this.requestHandler, c);
                            break;
                        default:
                            throw new __c.E(c);
                        }
                    }
                    ,a,b.pg("bus"));
                    this.client = new x3b(a.Oy,b.pg("client"));
                    this.requestHandler = new y3b(a,b.pg("requestHandler"))
                }
            }
              , z3b = class {
                constructor(a, b, c) {
                    this.qaa = a;
                    this.Oy = (d, e, f) => this.WX.send({
                        type: "request",
                        requestId: d,
                        path: e,
                        payload: f
                    });
                    this.Nlb = d => {
                        switch (d.type) {
                        case "ack":
                            this.qaa({
                                type: "ack",
                                requestId: d.requestId
                            });
                            break;
                        case "error":
                            this.qaa({
                                type: "error",
                                requestId: d.requestId,
                                code: d.code,
                                message: d.message
                            });
                            break;
                        case "response":
                            this.qaa({
                                type: "response",
                                requestId: d.requestId,
                                Ql: d.payload
                            });
                            break;
                        case "request":
                            this.qaa({
                                type: "request",
                                requestId: d.requestId,
                                path: d.path,
                                Ql: d.payload
                            });
                            break;
                        default:
                            throw new __c.E(d);
                        }
                    }
                    ;
                    this.WX = new w3b({
                        hob: this.Nlb
                    },b,c)
                }
            }
            ;
            var X2b = {
                WBa: "null",
                YWa: "*"
            };
            var b3b = "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(" ");
            var h3b = class {
                constructor(a) {
                    this.H = a;
                    this.dh = new Map
                }
            }
            ;
            var A3b = __c.U5(__c.X5);
            var B3b = k3b(function() {
                return Y5("div", {
                    style: {
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        backgroundColor: "#fFfFfF",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    children: "FORM V2 Widget"
                })
            });
            var C3b = {
                $G: (a => __c.S5()( () => __c.R5(a)))(j3b( () => Y5(B3b, {
                    state: {}
                }))),
                aH: A3b
            };
            __c.cQa = {
                Wfb: function(a) {
                    function b(e, f) {
                        const g = c.Tfb(e, f.aH());
                        f = d.Sfb(e, g, f.$G());
                        return {
                            id: e,
                            Zv: g,
                            KKb: f
                        }
                    }
                    a.uZ && i3b({
                        DCa: "w:embed",
                        uZ: a.uZ,
                        H: a.H
                    });
                    const c = a.ECa
                      , d = a.c6;
                    return {
                        Lyb: b("w:blueprint", p3b),
                        zAb: a.uab ? Promise.all([__webpack_require__.me(697956).then( () => __c.D3b), __webpack_require__.me(411625).then( () => __c.E3b), __webpack_require__.me(305660).then( () => __c.F3b), __webpack_require__.me(696820).then( () => __c.G3b)]).then( ([e,f,g,h]) => ({
                            vAb: b("w:demo-1", e),
                            wAb: b("w:demo-2", f),
                            xAb: b("w:demo-3", g),
                            yAb: b("w:demo-4", h)
                        })) : void 0,
                        embed: b("w:codelet", r3b),
                        form: b("w:form", C3b),
                        MMb: a.Rab ? b("w:3d", n3b) : void 0
                    }
                }
            };
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/7c73aa62be36ea3c.js.map

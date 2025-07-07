import { i as importShared } from './_virtual___federation_fn_import-CLjtTomz.js';
import { r as reactExports } from './index-Dm_EQZZA.js';
import { r as reactDomExports } from './index-D9Af7wOI.js';

true&&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m$1=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m$1.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const {Link: Link$1,useLocation} = await importShared('react-router-dom');

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Sales", href: "/sales" },
  { name: "Underwriter", href: "/underwriter" },
  { name: "Products", href: "/products" }
];
function Layout({ children }) {
  const location = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "bg-white shadow-sm border-b", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between h-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-gray-900", children: "Insurance Platform" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: navigation.map((item) => {
        const isActive = location.pathname === item.href || item.href !== "/" && location.pathname.startsWith(item.href);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link$1,
          {
            to: item.href,
            className: `${isActive ? "border-blue-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`,
            children: item.name
          },
          item.name
        );
      }) })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8", children })
  ] });
}

const {Link} = await importShared('react-router-dom');

function Dashboard() {
  const portals = [
    {
      name: "Sales Portal",
      description: "CRM, quotes, and policy management",
      href: "/sales",
      icon: "🎯"
    },
    {
      name: "Underwriter Portal",
      description: "Risk assessment and approvals",
      href: "/underwriter",
      icon: "🛡️"
    },
    {
      name: "Product Configuration",
      description: "Product setup and pricing",
      href: "/products",
      icon: "⚙️"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-indigo-800", children: "🏠 You are on the Main Insurance Platform Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-indigo-600 mt-1", children: "Select a portal below to access specific functionality" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Insurance Platform Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600", children: "Welcome to your insurance management platform. Choose a portal to get started." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: portals.map((portal) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: portal.href, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: portal.icon }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-2", children: portal.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: portal.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800", children: "Click to enter →" })
    ] }) }) }, portal.name)) })
  ] });
}

const remotesMap = {
'salesPortal':{url:'http://localhost:3001/dist/assets/remoteEntry.js',format:'esm',from:'vite'},
  'underwriterPortal':{url:'http://localhost:3002/dist/assets/remoteEntry.js',format:'esm',from:'vite'},
  'productConfig':{url:'http://localhost:3003/dist/assets/remoteEntry.js',format:'esm',from:'vite'}
};
                const currentImports = {};
                const loadJS = async (url, fn) => {
                    const resolvedUrl = typeof url === 'function' ? await url() : url;
                    const script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.onload = fn;
                    script.src = resolvedUrl;
                    document.getElementsByTagName('head')[0].appendChild(script);
                };

                function get(name, remoteFrom) {
                    return __federation_import(name).then(module => () => {
                        if (remoteFrom === 'webpack') {
                            return Object.prototype.toString.call(module).indexOf('Module') > -1 && module.default ? module.default : module
                        }
                        return module
                    })
                }
                
                function merge(obj1, obj2) {
                  const mergedObj = Object.assign(obj1, obj2);
                  for (const key of Object.keys(mergedObj)) {
                    if (typeof mergedObj[key] === 'object' && typeof obj2[key] === 'object') {
                      mergedObj[key] = merge(mergedObj[key], obj2[key]);
                    }
                  }
                  return mergedObj;
                }

                const wrapShareModule = remoteFrom => {
                  return merge({
                    'react':{'18.3.1':{get:()=>get(new URL('__federation_shared_react-BCcI129A.js', import.meta.url).href, remoteFrom), loaded:1}},'react-dom':{'18.3.1':{get:()=>get(new URL('__federation_shared_react-dom-BhMZJInU.js', import.meta.url).href, remoteFrom), loaded:1}},'react-router-dom':{'6.30.1':{get:()=>get(new URL('__federation_shared_react-router-dom-BhRtt7xS.js', import.meta.url).href, remoteFrom), loaded:1}}
                  }, (globalThis.__federation_shared__ || {})['default'] || {});
                };

                async function __federation_import(name) {
                    currentImports[name] ??= import(name);
                    return currentImports[name]
                }

                async function __federation_method_ensure(remoteId) {
                    const remote = remotesMap[remoteId];
                    if (!remote.inited) {
                        if ('var' === remote.format) {
                            // loading js with script tag
                            return new Promise(resolve => {
                                const callback = () => {
                                    if (!remote.inited) {
                                        remote.lib = window[remoteId];
                                        remote.lib.init(wrapShareModule(remote.from));
                                        remote.inited = true;
                                    }
                                    resolve(remote.lib);
                                };
                                return loadJS(remote.url, callback);
                            });
                        } else if (['esm', 'systemjs'].includes(remote.format)) {
                            // loading js with import(...)
                            return new Promise((resolve, reject) => {
                                const getUrl = typeof remote.url === 'function' ? remote.url : () => Promise.resolve(remote.url);
                                getUrl().then(url => {
                                    import(/* @vite-ignore */ url).then(lib => {
                                        if (!remote.inited) {
                                            const shareScope = wrapShareModule(remote.from);
                                            lib.init(shareScope);
                                            remote.lib = lib;
                                            remote.lib.init(shareScope);
                                            remote.inited = true;
                                        }
                                        resolve(remote.lib);
                                    }).catch(reject);
                                });
                            })
                        }
                    } else {
                        return remote.lib;
                    }
                }

                function __federation_method_wrapDefault(module, need) {
                    if (!module?.default && need) {
                        let obj = Object.create(null);
                        obj.default = module;
                        obj.__esModule = true;
                        return obj;
                    }
                    return module;
                }

                function __federation_method_getRemote(remoteName, componentName) {
                    return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
                }

const {createContext,Component,createElement,useContext,useState,useMemo,forwardRef} = await importShared('react');


const ErrorBoundaryContext = createContext(null);

const initialState = {
  didCatch: false,
  error: null
};
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
    this.state = initialState;
  }
  static getDerivedStateFromError(error) {
    return {
      didCatch: true,
      error
    };
  }
  resetErrorBoundary() {
    const {
      error
    } = this.state;
    if (error !== null) {
      var _this$props$onReset, _this$props;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (_this$props$onReset = (_this$props = this.props).onReset) === null || _this$props$onReset === void 0 ? void 0 : _this$props$onReset.call(_this$props, {
        args,
        reason: "imperative-api"
      });
      this.setState(initialState);
    }
  }
  componentDidCatch(error, info) {
    var _this$props$onError, _this$props2;
    (_this$props$onError = (_this$props2 = this.props).onError) === null || _this$props$onError === void 0 ? void 0 : _this$props$onError.call(_this$props2, error, info);
  }
  componentDidUpdate(prevProps, prevState) {
    const {
      didCatch
    } = this.state;
    const {
      resetKeys
    } = this.props;

    // There's an edge case where if the thing that triggered the error happens to *also* be in the resetKeys array,
    // we'd end up resetting the error boundary immediately.
    // This would likely trigger a second error to be thrown.
    // So we make sure that we don't check the resetKeys on the first call of cDU after the error is set.

    if (didCatch && prevState.error !== null && hasArrayChanged(prevProps.resetKeys, resetKeys)) {
      var _this$props$onReset2, _this$props3;
      (_this$props$onReset2 = (_this$props3 = this.props).onReset) === null || _this$props$onReset2 === void 0 ? void 0 : _this$props$onReset2.call(_this$props3, {
        next: resetKeys,
        prev: prevProps.resetKeys,
        reason: "keys"
      });
      this.setState(initialState);
    }
  }
  render() {
    const {
      children,
      fallbackRender,
      FallbackComponent,
      fallback
    } = this.props;
    const {
      didCatch,
      error
    } = this.state;
    let childToRender = children;
    if (didCatch) {
      const props = {
        error,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof fallbackRender === "function") {
        childToRender = fallbackRender(props);
      } else if (FallbackComponent) {
        childToRender = createElement(FallbackComponent, props);
      } else if (fallback !== undefined) {
        childToRender = fallback;
      } else {
        throw error;
      }
    }
    return createElement(ErrorBoundaryContext.Provider, {
      value: {
        didCatch,
        error,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, childToRender);
  }
}
function hasArrayChanged() {
  let a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]));
}

const {Suspense: Suspense$2,lazy: lazy$2} = await importShared('react');
const RemoteSalesPortal = lazy$2(
  () => __federation_method_getRemote("salesPortal" , "./App").then(module=>__federation_method_wrapDefault(module, true)).catch((err) => ({
    default: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border border-red-200 rounded-lg p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-red-800 mb-2", children: "🚨 Sales Portal Unavailable" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-600 mb-4", children: "The Sales Portal is not available. Please make sure it's running on port 3001." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "http://localhost:3001",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors",
          children: "Open Sales Portal →"
        }
      )
    ] }) })
  }))
);
function ErrorFallback$2({
  error,
  resetErrorBoundary
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border border-red-200 rounded-lg p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-red-800 mb-2", children: "🚨 Sales Portal Error" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-red-600 mb-4", children: [
      "Failed to load Sales Portal: ",
      error.message
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-x-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: resetErrorBoundary,
          className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors",
          children: "Try Again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "http://localhost:3001",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
          children: "Open in New Tab →"
        }
      )
    ] })
  ] }) });
}
function SalesPortal() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { FallbackComponent: ErrorFallback$2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Suspense$2,
    {
      fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-blue-800 mb-2", children: "🎯 Loading Sales Portal..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-600", children: "Please wait while we load the Sales Portal." })
      ] }) }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(RemoteSalesPortal, {})
    }
  ) });
}

const {Suspense: Suspense$1,lazy: lazy$1} = await importShared('react');
const RemoteUnderwriterPortal = lazy$1(
  () => __federation_method_getRemote("underwriterPortal" , "./App").then(module=>__federation_method_wrapDefault(module, true)).catch(() => ({
    default: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border border-red-200 rounded-lg p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-red-800 mb-2", children: "🚨 Underwriter Portal Unavailable" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-600 mb-4", children: "The Underwriter Portal is not available. Please make sure it's running on port 3002." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "http://localhost:3002",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors",
          children: "Open Underwriter Portal →"
        }
      )
    ] }) })
  }))
);
function ErrorFallback$1({ error, resetErrorBoundary }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border border-red-200 rounded-lg p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-red-800 mb-2", children: "🚨 Underwriter Portal Error" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-red-600 mb-4", children: [
      "Failed to load Underwriter Portal: ",
      error.message
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-x-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: resetErrorBoundary,
          className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors",
          children: "Try Again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "http://localhost:3002",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
          children: "Open in New Tab →"
        }
      )
    ] })
  ] }) });
}
function UnderwriterPortal() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { FallbackComponent: ErrorFallback$1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Suspense$1,
    {
      fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-green-800 mb-2", children: "🛡️ Loading Underwriter Portal..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-600", children: "Please wait while we load the Underwriter Portal." })
      ] }) }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(RemoteUnderwriterPortal, {})
    }
  ) });
}

const {Suspense,lazy} = await importShared('react');
const RemoteProductConfig = lazy(
  () => __federation_method_getRemote("productConfig" , "./App").then(module=>__federation_method_wrapDefault(module, true)).catch(() => ({
    default: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border border-red-200 rounded-lg p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-red-800 mb-2", children: "🚨 Product Configuration Unavailable" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-600 mb-4", children: "The Product Configuration portal is not available. Please make sure it's running on port 3004." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "http://localhost:3003",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors",
          children: "Open Product Configuration →"
        }
      )
    ] }) })
  }))
);
function ErrorFallback({
  error,
  resetErrorBoundary
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border border-red-200 rounded-lg p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-red-800 mb-2", children: "🚨 Product Configuration Error" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-red-600 mb-4", children: [
      "Failed to load Product Configuration: ",
      error.message
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-x-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: resetErrorBoundary,
          className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors",
          children: "Try Again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "http://localhost:3003",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
          children: "Open in New Tab →"
        }
      )
    ] })
  ] }) });
}
function ProductConfig() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { FallbackComponent: ErrorFallback, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Suspense,
    {
      fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-200 rounded-lg p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-orange-800 mb-2", children: "⚙️ Loading Product Configuration..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-600", children: "Please wait while we load the Product Configuration." })
      ] }) }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(RemoteProductConfig, {})
    }
  ) });
}

const {Routes,Route} = await importShared('react-router-dom');
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/sales/*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(SalesPortal, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/underwriter/*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(UnderwriterPortal, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/products/*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductConfig, {}) })
  ] }) });
}

const React = await importShared('react');
const {BrowserRouter} = await importShared('react-router-dom');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) })
);

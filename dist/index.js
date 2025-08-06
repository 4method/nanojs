function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var NanoWrapper = /*#__PURE__*/ function() {
    "use strict";
    function NanoWrapper(elements) {
        _class_call_check(this, NanoWrapper);
        _define_property(this, "elements", void 0);
        this.elements = elements;
    }
    _create_class(NanoWrapper, [
        {
            key: "length",
            get: function get() {
                return this.elements.length;
            }
        },
        {
            key: "on",
            value: function on(event, handler) {
                this.elements.forEach(function(el) {
                    return el.addEventListener(event, handler);
                });
                return this;
            }
        },
        {
            key: "addClass",
            value: function addClass(className) {
                this.elements.forEach(function(el) {
                    return el.classList.add(className);
                });
                return this;
            }
        },
        {
            key: "removeClass",
            value: function removeClass(className) {
                this.elements.forEach(function(el) {
                    return el.classList.remove(className);
                });
                return this;
            }
        },
        {
            key: "attr",
            value: function attr(name, value) {
                if (value === undefined) {
                    var _this_elements_;
                    return ((_this_elements_ = this.elements[0]) === null || _this_elements_ === void 0 ? void 0 : _this_elements_.getAttribute(name)) || '';
                }
                this.elements.forEach(function(el) {
                    return el.setAttribute(name, value);
                });
                return this;
            }
        },
        {
            key: "html",
            value: function html(content) {
                if (content === undefined) {
                    var _this_elements_;
                    return ((_this_elements_ = this.elements[0]) === null || _this_elements_ === void 0 ? void 0 : _this_elements_.innerHTML) || '';
                }
                this.elements.forEach(function(el) {
                    return el.innerHTML = content;
                });
                return this;
            }
        },
        {
            key: "css",
            value: function css(prop, value) {
                if (value === undefined) {
                    var el = this.elements[0];
                    return el ? getComputedStyle(el).getPropertyValue(prop) : '';
                }
                this.elements.forEach(function(el) {
                    el.style.setProperty(prop, value);
                });
                return this;
            }
        },
        {
            key: "append",
            value: function append(element) {
                this.elements.forEach(function(el) {
                    if (typeof element === 'string') {
                        el.insertAdjacentHTML('beforeend', element);
                    } else {
                        el.appendChild(element);
                    }
                });
                return this;
            }
        },
        {
            key: "each",
            value: function each(callback) {
                this.elements.forEach(callback);
                return this;
            }
        },
        {
            key: "text",
            value: function text(content) {
                if (content === undefined) {
                    var _this_elements_;
                    return ((_this_elements_ = this.elements[0]) === null || _this_elements_ === void 0 ? void 0 : _this_elements_.textContent) || '';
                }
                this.elements.forEach(function(el) {
                    return el.textContent = content;
                });
                return this;
            }
        },
        {
            key: "val",
            value: function val(value) {
                if (value === undefined) {
                    var el = this.elements[0];
                    return (el === null || el === void 0 ? void 0 : el.value) || '';
                }
                this.elements.forEach(function(el) {
                    el.value = value;
                });
                return this;
            }
        },
        {
            key: "remove",
            value: function remove() {
                this.elements.forEach(function(el) {
                    return el.remove();
                });
                return this;
            }
        },
        {
            key: "empty",
            value: function empty() {
                this.elements.forEach(function(el) {
                    return el.innerHTML = '';
                });
                return this;
            }
        },
        {
            key: "prepend",
            value: function prepend(element) {
                this.elements.forEach(function(el) {
                    if (typeof element === 'string') {
                        el.insertAdjacentHTML('afterbegin', element);
                    } else {
                        el.insertBefore(element, el.firstChild);
                    }
                });
                return this;
            }
        },
        {
            key: "parent",
            value: function parent() {
                var parents = this.elements.map(function(el) {
                    return el.parentElement;
                }).filter(Boolean);
                return new NanoWrapper(parents);
            }
        },
        {
            key: "children",
            value: function children() {
                var children = this.elements.flatMap(function(el) {
                    return Array.from(el.children);
                });
                return new NanoWrapper(children);
            }
        },
        {
            key: "find",
            value: function find(selector) {
                var found = this.elements.flatMap(function(el) {
                    return Array.from(el.querySelectorAll(selector));
                });
                return new NanoWrapper(found);
            }
        },
        {
            key: "first",
            value: function first() {
                return new NanoWrapper(this.elements.slice(0, 1));
            }
        },
        {
            key: "last",
            value: function last() {
                return new NanoWrapper(this.elements.slice(-1));
            }
        },
        {
            key: "toggleClass",
            value: function toggleClass(className) {
                this.elements.forEach(function(el) {
                    return el.classList.toggle(className);
                });
                return this;
            }
        },
        {
            key: "hasClass",
            value: function hasClass(className) {
                return this.elements.some(function(el) {
                    return el.classList.contains(className);
                });
            }
        },
        {
            key: "hide",
            value: function hide() {
                this.elements.forEach(function(el) {
                    el.style.display = 'none';
                });
                return this;
            }
        },
        {
            key: "show",
            value: function show() {
                this.elements.forEach(function(el) {
                    el.style.display = '';
                });
                return this;
            }
        },
        {
            key: "off",
            value: function off(event, handler) {
                this.elements.forEach(function(el) {
                    if (handler) {
                        el.removeEventListener(event, handler);
                    } else {
                        el.removeEventListener(event, handler);
                    }
                });
                return this;
            }
        },
        {
            key: "trigger",
            value: function trigger(event) {
                this.elements.forEach(function(el) {
                    el.dispatchEvent(new Event(event, {
                        bubbles: true
                    }));
                });
                return this;
            }
        },
        {
            key: "data",
            value: function data(key, value) {
                var dataKey = "data-".concat(key);
                if (value === undefined) {
                    var _this_elements_;
                    return ((_this_elements_ = this.elements[0]) === null || _this_elements_ === void 0 ? void 0 : _this_elements_.getAttribute(dataKey)) || '';
                }
                this.elements.forEach(function(el) {
                    return el.setAttribute(dataKey, value);
                });
                return this;
            }
        },
        {
            key: "hasAttr",
            value: function hasAttr(name) {
                return this.elements.some(function(el) {
                    return el.hasAttribute(name);
                });
            }
        },
        {
            key: "filter",
            value: function filter(selector) {
                var filtered = this.elements.filter(function(el) {
                    return el.matches(selector);
                });
                return new NanoWrapper(filtered);
            }
        },
        {
            key: "not",
            value: function not(selector) {
                var filtered = this.elements.filter(function(el) {
                    return !el.matches(selector);
                });
                return new NanoWrapper(filtered);
            }
        }
    ]);
    return NanoWrapper;
}();
function $n(input) {
    // Si es una función, ejecutar cuando el DOM esté listo
    if (typeof input === 'function') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', input);
        } else {
            input();
        }
        return;
    }
    // Si es un elemento DOM, envolverlo
    if (_instanceof(input, Element)) {
        return new NanoWrapper([
            input
        ]);
    }
    // Si es un string selector, buscar elementos
    if (typeof input === 'string') {
        var elements = Array.from(document.querySelectorAll(input));
        return new NanoWrapper(elements);
    }
    return new NanoWrapper([]);
}
// Exportar para uso en módulos
export default $n;
// Para uso global en el navegador
if (typeof window !== 'undefined') {
    window.$n = $n;
}


//# sourceMappingURL=index.js.map
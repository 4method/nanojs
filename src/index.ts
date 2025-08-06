type NanoElement = Element | HTMLElement;
type NanoCallback = (el: NanoElement, index: number) => void;

class NanoWrapper {
    elements: NanoElement[];

    constructor(elements: NanoElement[]) {
        this.elements = elements;
    }

    get length(): number {
        return this.elements.length;
    }

    on(event: string, handler: EventListener): NanoWrapper {
        this.elements.forEach(el => el.addEventListener(event, handler));
        return this;
    }

    addClass(className: string): NanoWrapper {
        this.elements.forEach(el => el.classList.add(className));
        return this;
    }

    removeClass(className: string): NanoWrapper {
        this.elements.forEach(el => el.classList.remove(className));
        return this;
    }

    attr(name: string, value?: string): string | NanoWrapper {
        if (value === undefined) {
            return this.elements[0]?.getAttribute(name) || '';
        }
        this.elements.forEach(el => el.setAttribute(name, value));
        return this;
    }

    html(content?: string): string | NanoWrapper {
        if (content === undefined) {
            return this.elements[0]?.innerHTML || '';
        }
        this.elements.forEach(el => el.innerHTML = content);
        return this;
    }

    css(prop: string, value?: string): string | NanoWrapper {
        if (value === undefined) {
            const el = this.elements[0] as HTMLElement;
            return el ? getComputedStyle(el).getPropertyValue(prop) : '';
        }
        this.elements.forEach(el => {
            (el as HTMLElement).style.setProperty(prop, value);
        });
        return this;
    }

    append(element: NanoElement | string): NanoWrapper {
        this.elements.forEach(el => {
            if (typeof element === 'string') {
                el.insertAdjacentHTML('beforeend', element);
            } else {
                el.appendChild(element);
            }
        });
        return this;
    }

    each(callback: NanoCallback): NanoWrapper {
        this.elements.forEach(callback);
        return this;
    }

    text(content?: string): string | NanoWrapper {
        if (content === undefined) {
            return this.elements[0]?.textContent || '';
        }
        this.elements.forEach(el => el.textContent = content);
        return this;
    }

    val(value?: string): string | NanoWrapper {
        if (value === undefined) {
            const el = this.elements[0] as HTMLInputElement;
            return el?.value || '';
        }
        this.elements.forEach(el => {
            (el as HTMLInputElement).value = value;
        });
        return this;
    }

    remove(): NanoWrapper {
        this.elements.forEach(el => el.remove());
        return this;
    }

    empty(): NanoWrapper {
        this.elements.forEach(el => el.innerHTML = '');
        return this;
    }

    prepend(element: NanoElement | string): NanoWrapper {
        this.elements.forEach(el => {
            if (typeof element === 'string') {
                el.insertAdjacentHTML('afterbegin', element);
            } else {
                el.insertBefore(element, el.firstChild);
            }
        });
        return this;
    }

    parent(): NanoWrapper {
        const parents = this.elements
            .map(el => el.parentElement)
            .filter(Boolean) as NanoElement[];
        return new NanoWrapper(parents);
    }

    children(): NanoWrapper {
        const children = this.elements
            .flatMap(el => Array.from(el.children)) as NanoElement[];
        return new NanoWrapper(children);
    }

    find(selector: string): NanoWrapper {
        const found = this.elements
            .flatMap(el => Array.from(el.querySelectorAll(selector))) as NanoElement[];
        return new NanoWrapper(found);
    }

    first(): NanoWrapper {
        return new NanoWrapper(this.elements.slice(0, 1));
    }

    last(): NanoWrapper {
        return new NanoWrapper(this.elements.slice(-1));
    }

    toggleClass(className: string): NanoWrapper {
        this.elements.forEach(el => el.classList.toggle(className));
        return this;
    }

    hasClass(className: string): boolean {
        return this.elements.some(el => el.classList.contains(className));
    }

    hide(): NanoWrapper {
        this.elements.forEach(el => {
            (el as HTMLElement).style.display = 'none';
        });
        return this;
    }

    show(): NanoWrapper {
        this.elements.forEach(el => {
            (el as HTMLElement).style.display = '';
        });
        return this;
    }

    off(event: string, handler?: EventListener): NanoWrapper {
        this.elements.forEach(el => {
            if (handler) {
                el.removeEventListener(event, handler);
            } else {
                el.removeEventListener(event, handler as any);
            }
        });
        return this;
    }

    trigger(event: string): NanoWrapper {
        this.elements.forEach(el => {
            el.dispatchEvent(new Event(event, { bubbles: true }));
        });
        return this;
    }

    data(key: string, value?: string): string | NanoWrapper {
        const dataKey = `data-${key}`;
        if (value === undefined) {
            return this.elements[0]?.getAttribute(dataKey) || '';
        }
        this.elements.forEach(el => el.setAttribute(dataKey, value));
        return this;
    }

    hasAttr(name: string): boolean {
        return this.elements.some(el => el.hasAttribute(name));
    }

    filter(selector: string): NanoWrapper {
        const filtered = this.elements.filter(el => el.matches(selector));
        return new NanoWrapper(filtered);
    }

    not(selector: string): NanoWrapper {
        const filtered = this.elements.filter(el => !el.matches(selector));
        return new NanoWrapper(filtered);
    }
}

function $n(input: string | NanoElement | Function): NanoWrapper | void {
    // Si es una función, ejecutar cuando el DOM esté listo
    if (typeof input === 'function') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', input as () => void);
        } else {
            input();
        }
        return;
    }

    // Si es un elemento DOM, envolverlo
    if (input instanceof Element) {
        return new NanoWrapper([input]);
    }

    // Si es un string selector, buscar elementos
    if (typeof input === 'string') {
        const elements = Array.from(document.querySelectorAll(input));
        return new NanoWrapper(elements);
    }

    return new NanoWrapper([]);
}

// Exportar para uso en módulos
export default $n;

// Para uso global en el navegador
if (typeof window !== 'undefined') {
    (window as any).$n = $n;
}
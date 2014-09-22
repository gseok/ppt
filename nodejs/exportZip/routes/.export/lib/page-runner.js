'use strict';

var uipRunner = {};

(function () {

    var UIP_JQX_SPEC = {
        jqxButton: {
            properties: [
                'roundedCorners',
                'delay',
                'disabled',
                'height',
                'width',
                'rtl',
                'theme',
                'toggled'
            ],
            methods: ['toggle', 'check', 'unCheck', 'focus', 'render', 'destroy', 'val'],
            htmlAttributes: ['value', 'type']
        },
        jqxCalendar: {
            properties: [
                'disabled',
                'min',
                'max',
                'stepMonths',
                'width',
                'height',
                'theme',
                'rtl',
                'value'
            ],
            methods: [
                'navigateForward',
                'navigateBackward',
                'setMinDate',
                'getMinDate',
                'setMaxDate',
                'getMaxDate',
                'setDate',
                'getDate',
                'setRange',
                'getRange',
                'render',
                'refresh',
                'focus',
                'today',
                'clear',
                'destroy',
                'val'
            ],
            htmlAttributes: []
        },
        jqxCheckBox: {
            properties: [
                'width',
                'height',
                'disabled',
                'rtl',
                'theme',
                'animationShowDelay',
                'animationHideDelay',
                'boxSize',
                'checked',
                'hasThreeStates',
                'enableContainerClick',
                'locked',
                'groupName'
            ],
            methods: [
                'check',
                'uncheck',
                'indeterminate',
                'toggle',
                'disable',
                'enable',
                'focus',
                'render',
                'destroy',
                'val'
            ],
            htmlAttributes: ['text']
        },
        jqxChart: {
            properties: [
                'title',
                'description',
                'source',
                'categoryAxis',
                'seriesGroups'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxColorPicker: {
            properties: [
                'disabled',
                'height',
                'width',
                'colorMode',
                'showTransparent'
            ],
            methods: [
                'setColor',
                'getColor'
            ],
            htmlAttributes: []
        },
        jqxComboBox: {
            properties: [
                'width',
                'height',
                'disabled',
                'selectedIndex',
                'source',
                'displayMember',
                'placeHolder'
            ],
            methods: ['disableAt', 'enableAt', 'destroy'],
            htmlAttributes: []
        },
        jqxDataTable: {
            properties: [
                'width',
                'height',
                'disabled',
                'altrows',
                'columns',
                'source'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxDropDownButton: {
            properties: [
                'width',
                'height',
                'disabled'
            ],
            methods: ['setContent'],
            htmlAttributes: []
        },
        jqxDropDownList: {
            properties: [
                'width',
                'height',
                'disabled',
                'checkboxes',
                'placeHolder',
                'source'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxExpander: {
            properties: [
                'width',
                'height',
                'disabled',
                'expanded'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxGauge: {
            properties: [
                'width',
                'height',
                'disabled',
                'value',
                'min',
                'max',
                'ranges'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxGrid: {
            properties: [
                'columns',
                'source',
                'autoshowcolumnsmenubutton',
                'enablebrowserselection',
                'sortable',
                'columnsresize',
                'sorttogglestates',
                'altrows',
                'rowsheight',
                'columnsheight',
                'width',
                'height',
                'disabled'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxButtonGroup: {
            properties: [
                'width',
                'height',
                'disabled',
                'mode',
                'enableHover'
            ],
            methods: ['setSelection'],
            htmlAttributes: []
        },
        jqxInput: {
            properties: [
                'disabled',
                'width',
                'height',
                'rtl',
                'opened',
                'theme',
                'searchMode',
                'source',
                'items',
                'minLength',
                'placeHolder',
                'popupZIndex',
                'displayMember',
                'valueMember',
                'query',
                'renderer'
            ],
            methods: [
                'val',
                'focus',
                'destroy',
                'selectAll'
            ],
            htmlAttributes: ['type', 'value']
        },
        jqxDateTimeInput: {
            properties: [
                'value',
                'formatString',
                'width',
                'height',
                'disabled'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxMaskedInput: {
            properties: [
                'value',
                'mask',
                'width',
                'height'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxNumberInput: {
            properties: [
                'decimal',
                'inputMode',
                'decimalDigits',
                'groupSeparator',
                'digits',
                'negativeSymbol',
                'width',
                'height'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxPasswordInput: {
            properties: [
                'theme',
                'width',
                'height',
                'disabled',
                'placeHolder',
                'maxLength',
                'showPasswordIcon',
                'showStrength',
                'showStrengthPosition',
                'passwordStrength',
                'strengthTypeRenderer',
                'rtl',
                'localization',
                'strengthColors'
            ],
            methods: [
                'render',
                'refresh',
                'val'
            ],
            htmlAttributes: ['type', 'value']
        },
        jqxLinkButton: {
            properties: [
                'roundedCorners',
                'disabled',
                'height',
                'width',
                'rtl',
                'theme'
            ],
            methods: ['toggle', 'check', 'unCheck', 'focus', 'render', 'destroy', 'val'],
            htmlAttributes: ['text', 'href', 'target', 'value', 'type']
        },
        jqxNavigationBar: {
            properties: [
                'width',
                'height',
                'disabled'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxPanel: {
            properties: [
                'width',
                'height',
                'disabled'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxProgressBar: {
            properties: [
                'width',
                'height',
                'disabled',
                'value',
                'orientation',
                'showText'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxRangeSelector: {
            properties: [
                'width',
                'height',
                'disabled',
                'min',
                'max',
                'range'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxRadioButton: {
            properties: [
                'width',
                'height',
                'disabled',
                'rtl',
                'theme',
                'animationShowDelay',
                'animationHideDelay',
                'boxSize',
                'checked',
                'hasThreeStates',
                'enableContainerClick',
                'groupName'
            ],
            methods: [
                'check', 'uncheck', 'disable', 'enable', 'focus', 'render', 'destroy', 'val'
            ],
            htmlAttributes: ['text', 'value']
        },
        jqxRating: {
            properties: [
                'count',
                'disabled',
                'value',
                'height',
                'width',
                'precision',
                'singleVote',
                'itemHeight',
                'itemWidth'
            ],
            methods: [
                'setValue',
                'getValue',
                'disable',
                'enable',
                'val'
            ],
            htmlAttributes: []
        },
        jqxRepeatButton: {
            properties: [
                'roundedCorners',
                'delay',
                'disabled',
                'height',
                'width',
                'rtl',
                'theme'
            ],
            methods: ['toggle', 'check', 'unCheck', 'focus', 'render', 'destroy', 'val'],
            htmlAttributes: ['value', 'type']
        },
        jqxScrollBar: {
            properties: [
                'width',
                'height',
                'disabled',
                'vertical',
                'value'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxSlider: {
            properties: [
                'width',
                'height',
                'disabled',
                'min',
                'max',
                'value'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxSplitter: {
            properties: [
                'width',
                'height',
                'disabled',
                'panels',
                'orientation'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxSwitchButton: {
            properties: [
                'width',
                'height',
                'disabled',
                'orientation',
                'onLabel',
                'offLabel',
                'thumbSize',
                'checked'
            ],
            methods: ['check', 'uncheck', 'toggle', 'disable', 'enable', 'val'
                     ],
            htmlAttributes: []
        },
        jqxTabs: {
            properties: [
                'width',
                'height',
                'disabled'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxToggleButton: {
            properties: [
                'roundedCorners',
                'delay',
                'disabled',
                'height',
                'width',
                'rtl',
                'theme',
                'toggled'
            ],
            methods: ['toggle', 'check', 'unCheck', 'focus', 'render', 'destroy', 'val'],
            htmlAttributes: ['value', 'type']
        },
        jqxWindow: {
            properties: [
                'width',
                'height',
                'disabled',
                'showCloseButton',
                'showCollapseButton',
                'title',
                'isModal',
                'position'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxTree: {
            properties: [
                'source',
                'checkboxes',
                'disabled'
            ],
            methods: ['expandAll'],
            htmlAttributes: []
        },
        jqxTreeGrid: {
            properties: [
                'width',
                'height',
                'source',
                'disabled',
                'columns',
                'checkboxes',
                'altrows',
                'columnsheight'
            ],
            methods: ['expandRow'],
            htmlAttributes: []
        },
        jqxTreeMap: {
            properties: [
                'width',
                'height',
                'colorMode',
                'baseColor',
                'source'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxMenu: {
            properties: [
                'width',
                'height',
                'source',
                'mode'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxListBox: {
            properties: [
                'width',
                'height',
                'disabled',
                'checkboxes',
                'source'
            ],
            methods: [],
            htmlAttributes: []
        },
        jqxListMenu: {
            properties: [
                'width',
                'height',
                'disabled',
                'showBackButton',
                'backLabel',
                'showHeader',
                'enableScrolling'
            ],
            methods: [],
            htmlAttributes: []
        }
    };

    var UIP_JQX_METHODS = {
        destroy: 'destroy'
    };

    var UIP_NAME = 'data-uip-name';
    var UIP_PROPERTIES = 'data-uip-properties';
    var UIP_EVENT = 'data-uip-events';
    var UIP_DEPENDANT = 'data-uip-dependant';
    var UIP_ACTION = {
        pageMove: 'pagemove',
        alert: 'alert',
        comment: 'comment',
        show: 'show',
        hide: 'hide'
    };
    var UIP_FW_TYPE = {
        UIP: 'uip',
        HTML: 'html',
        JQX: 'jqx',
        SVG: 'svg',
        FEEDBACK: 'feedback'
    };

    // always re-init in realizeComponentAndDescendant function
    var uipComponentsInfo = {
        components: [],
        index: 0
    };

    var HTML_BOOLEAN_ATTRIBUTES = [
        'checked',      // (input type=checkbox/radio)
        'selected',     // (option)
        'disabled',     // (input, textarea, button, select, option, optgroup)
        'readonly',     // (input type=text/password, textarea)
        'multiple',     // (select)
        'ismap',        // (img, input type=image)
        'defer',        // (script)
        'noresize',     // (frame)
        'nohref',       // (area; The nohref attribute is not supported in any of the major browsers.)
        'compact',      // (ul, ol, dl, menu, dir; deprecated)
        'noshade',      // (hr; deprecated)
        'nowrap',       // (td, th; deprecated)
        'declare'       // (object; never used)
    ];

    var keydownEventTarget = {
        leftkeydown: [],
        rightkeydown: []
    };

    uipRunner.__realizeListeners = [];
    uipRunner.addRealizeListener = function (obj) {
        if (!!obj) {
            uipRunner.__realizeListeners.push(obj);
        }
    };

    uipRunner.removeRealizeListener = function (obj) {
        // TODO
    };

    uipRunner.getRealizeListeners = function () {
        return uipRunner.__realizeListeners;
    };

    /**
     * Realize listner is exist then fire complete
     *
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function _fireRealizeComplete(htmlEl) {
        var listeners = uipRunner.getRealizeListeners();
        listeners.forEach(function(listener) {
            if (!!listener.realized && typeof(listener.realized) === 'function') {
                listener.realized(htmlEl);
            }
        });
    }

    /**
     * Check html boolean attribute
     *
     * @param {String} name - attribute name
     */
    function _isHTMLBooleanAttribute(name) {
        return HTML_BOOLEAN_ATTRIBUTES.indexOf(name.toLowerCase()) > -1 ? true : false;
    }

    /**
     * Get {HTMLElement} object
     * if can't find HTMLElement then return null,
     * jQuery or HTMLCollection objects first object to HTMLElement
     *
     * @param {Object} domElement - jQuery, HTMLElement, HTMLCollection to HTMLElement
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function _getHTMLElement(domElement) {
        try {
            if (!domElement) {
                return null;
            }

            if (domElement instanceof HTMLElement) {
                return domElement;
            }

            if (domElement instanceof HTMLCollection) {
                return domElement.length > 0 ? domElement[0] : null;
            }

            if (domElement instanceof NodeList) {
                return domElement.length > 0 ? domElement.item(0) : null;
            }

            if (domElement instanceof jQuery) {
                return domElement.size() > 0 ? domElement[0] : null;
            }

            // nodeType 1 === ELEMENT_NODE
            if (!!domElement.nodeType && domElement.nodeType === 1) {
                return domElement;
            }

        } catch (e) {
            // domElement.length or domElement.size() not exist then return null
        }

        return null;
    }

    /**
     * Get All UIP components list
     *
     * @param domElement - optional, if param is not null then get DOMElement's UIP components
     * @return {Array} All UIP component list
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function getAllUIPComponents(domElement) {
        var htmlEl = _getHTMLElement(domElement);
        var result = null;
        var nodes = [];

        if (!!htmlEl) {
            // find self
            if (!!htmlEl.hasAttribute(UIP_NAME)) {
                nodes.push(htmlEl);
            }

            // find childs
            result = htmlEl.querySelectorAll('*[' + UIP_NAME + ']');
        } else {
            result = document.querySelectorAll('*[' + UIP_NAME + ']');
        }

        if (!!result) {
            for (var i = 0; i < result.length; i++) {
                nodes.push(result.item(i));
            }
        }

        return nodes;
    }

    /**
     * Get HTML UIP components list
     *
     * @param domElement - optional, if param is not null then get DOMElement's HTML UIP components
     * @return {Array} HTML UIP component list
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function getHTMLUIPComponents(domElement) {
        var htmlEl = _getHTMLElement(domElement);
        var result = null;
        var nodes = [];

        if (!!htmlEl) {
            // find self
            if (!!htmlEl.hasAttribute(UIP_NAME)) {
                var name = htmlEl.getAttribute(UIP_NAME);
                if (name.indexOf('html.') === 0) {
                    nodes.push(htmlEl);
                }
            }

            // find childs
            result = htmlEl.querySelectorAll('*[' + UIP_NAME + '*="html."]');
        } else {
            result = document.querySelectorAll('*[' + UIP_NAME + '*="html."]');
        }

        if (!!result) {
            for (var i = 0; i < result.length; i++) {
                nodes.push(result.item(i));
            }
        }

        return nodes;
    }

    /**
     * Get UIP properties object
     *
     * @param domElement - target DOMElement
     * @return {Object} UIP component's properties object, if can't find then return null
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function getUIPProperties(domElement) {
        var htmlEl = _getHTMLElement(domElement);
        if (!htmlEl) {
            return null;
        }

        var properties = htmlEl.getAttribute(UIP_PROPERTIES);
        var obj = null;

        if (!!properties && properties.length > 0) {
            try {
                obj = JSON.parse(properties);
            } catch (e) {
                //console.error(e);
                // do nothing, obj is null
            }
        }

        return obj;
    }

    /**
     * Get UIP data adapter object
     */
    function getUIPDataAdapter(uipProperties) {
        var obj;
        if (uipProperties && uipProperties.dataAdapter) {
            try {
                obj = new $.jqx.dataAdapter(uipProperties.dataAdapter);
            } catch (e) {
                //console.error(e);
                // do nothing, obj is null
            }
        }

        return obj;
    }

    /**
     * Get UIP events object
     *
     * @param domElement - target DOMElement
     * @return {Object} UIP component's events defined object, if can't find then return null
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function getUIPEvents(domElement) {
        var htmlEl = _getHTMLElement(domElement);
        if (!htmlEl) {
            return null;
        }

        var event = htmlEl.getAttribute(UIP_EVENT);
        var obj = null;

        if (!!event && event.length > 0) {
            try {
                obj = JSON.parse(event);
            } catch (e) {
                //console.error(e);
                // do nothing, obj is null
            }
        }

        return obj;
    }

    /**
     * get UIP Framework Name
     *
     * @param domElement - target DOMElement
     * @return UIP type - 0: jqx, 1: html, if can't find framework name then return null
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function getUIPFWName(domElement) {
        var htmlEl = _getHTMLElement(domElement);
        if (!htmlEl) {
            return null;
        }

        var name = htmlEl.getAttribute(UIP_NAME);
        var type = (!!name && name.length > 0) ? name.split('.')[0] : null;

        return type;
    }

    /**
     * get UIP Framework Component Name
     *
     * @param domElement - target DOMElement
     * @return {String} UIP name, if can't find framework component name then return null
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function getUIPFWComponentName(domElement) {
        var htmlEl = _getHTMLElement(domElement);
        if (!htmlEl) {
            return null;
        }

        var name = htmlEl.getAttribute(UIP_NAME);
        var componentName = (!!name && name.length > 0) ? name.split('.')[1] : null;

        return componentName;
    }

    /**
     * Parsing and return jqwidget component's html attriute, properteis, methods
     *
     * @param name - jqwidget component name
     * @param fnArgs - data-uip-properties Object
     * @return {Object} - jqwidget component's htmlAttributes, properteis, methods
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function _parseJQXPropertis(name, fnArgs) {
        var result = {
            htmlAttributes: {},
            properties: {},
            methods: {}
        };

        var jqxSpec = UIP_JQX_SPEC[name];
        if (!jqxSpec) {
            return null;
        }

        if (!fnArgs) {
            return null;
        }

        var specAttrs = jqxSpec.htmlAttributes;
        var specProps = jqxSpec.properties;
        var specMethods = jqxSpec.methods;

        var wholePropertiesName = Object.keys(fnArgs);
        if (!!wholePropertiesName && wholePropertiesName.length > 0) {
            wholePropertiesName.forEach(function (n) {
                // html attributes
                if (specAttrs.indexOf(n) > -1) {
                    result.htmlAttributes[n] = fnArgs[n];
                }

                // properties
                if (specProps.indexOf(n) > -1) {
                    result.properties[n] = fnArgs[n];
                }

                // methods
                if (specMethods.indexOf(n) > -1) {
                    result.methods[n] = fnArgs[n];
                }
            });
        } else {
            return null;
        }

        return result;
    }

    /**
     * Call 'jqwidget' component method
     *
     * @param $el - target jQuery element
     * @param fwComponentName - jqwidget's component name
     * @param methodName - jqwidget's method name
     * @param methodArgs - {Array} jqwidget's method params
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function _callJQXComponentMethod($el, fwComponentName, methodName, methodArgs) {
        if (!$el || !fwComponentName || fwComponentName === '' ||
            !methodName || methodName === '') {
            return;
        }

        // applayArguments's first argument is method name
        var applyArguments = [];
        if (methodName !== 'constructor') {
            applyArguments.push(methodName);
        }

        // method's arguments
        if (!!methodArgs && Array.isArray(methodArgs) && methodArgs.length > 0) {
            methodArgs.forEach(function (arg) {
                applyArguments.push(arg);
            });
        }

        // call method
        $el[fwComponentName].apply($el, applyArguments);
    }

    /**
     * realize 'jqwidget' component
     *
     * @param htmlEl - target HTML DOMElement
     * @param fnArgs - data-uip-properties Object
     * @param {Function} cb - callback function, if realize complete then called
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function _realizeUIPJQXComponent(htmlEl, fnArgs, cb) {
        function _setHTMLAttributes($el, htmlAttributes) {
            // set text
            if (!!htmlAttributes.text || htmlAttributes.text === '') {
                var subElements = $el.children();

                $el.text(htmlAttributes.text);
                if (!!subElements && subElements.length > 0) {
                    $el.append(subElements);
                }
            }

            // set value
            if (!!htmlAttributes.value || htmlAttributes.value === '') {
                $el.attr('value', htmlAttributes.value);
            }

            // set type
            if (!!htmlAttributes.type || htmlAttributes.type === '') {
                $el.attr('type', htmlAttributes.type);
            }
        }

        function _jqxConstruction($el, result, fwComponentName, callback) {
            if (!!result) {
                /*
                 * some properties cannot manipulate in jqx constructor.
                 * so some properties manually manipulation.
                 */
                if (!!result.htmlAttributes &&
                    Object.keys(result.htmlAttributes).length > 0) {
                    _setHTMLAttributes($el, result.htmlAttributes);
                }

                var properties = result.properties || {};
                properties.theme = 'uip';

                // call jqx constructor with params
                _callJQXComponentMethod($el, fwComponentName, 'constructor', [result.properties]);

                // call jqx method
                var methods = Object.keys(result.methods);
                if (!!result.methods &&
                    methods.length > 0) {
                    methods.forEach(function (m) {
                        if (!!result.methods[m]) {
                            _callJQXComponentMethod($el, fwComponentName, m, [result.methods[m]]);
                        } else {
                            _callJQXComponentMethod($el, fwComponentName, m);
                        }
                    });
                }
            } else {
                // call jqx constructor without params
                _callJQXComponentMethod($el, fwComponentName, 'constructor', [{theme: 'uip'}]);
            }

            if (!!callback && typeof(callback) === 'function') {
                callback();
            }
        }

        // get component name
        var fwComponentName = getUIPFWComponentName(htmlEl);

        // HTMLElement object to jQuery object, jqx depended on jQuery
        var $el = $(htmlEl);

        // callback function
        var callback = null;
        if (!!cb && typeof(cb) === 'function') {
            callback = function () {
                cb();
                _fireRealizeComplete(htmlEl);
            };
        }

        if (!!$el && !!fwComponentName && fwComponentName.length > 0) {
            // specific jqxWidget realize logic
            var databind = null;
            var source = null;
            var datafields = null;
            var columns = null;
            var localdata = null;
            switch (fwComponentName) {
            case 'jqxDateTimeInput':
                fnArgs.value = new Date(fnArgs.value);

                if (Object.prototype.toString.call(fnArgs.value) !== '[object Date]' ||
                    isNaN(fnArgs.value.getTime())) {
                    fnArgs.value = new Date();
                }
                break;
            case 'jqxButton':
            case 'jqxToggleButton':
            case 'jqxRepeatButton':
                fnArgs.type = 'button';
                break;
            case 'jqxTreeMap':
            case 'jqxMenu':
            case 'jqxListBox':
            case 'jqxDropDownList':
                databind = JSON.parse(fnArgs.dataBinding);
                if (!databind) {
                    console.error('databind property not exist');
                    return;
                }

                fnArgs.source = databind.data;
                break;
            case 'jqxRangeSelector':
                // min, max setting
                if (typeof fnArgs.min === 'string' ||
                    fnArgs.min instanceof String) {
                    if (!!fnArgs.min) {
                        if (fnArgs.min === '') {
                            fnArgs.min = 0;
                        } else {
                            fnArgs.min = Number.parseInt(fnArgs.min);
                        }
                    }
                }

                if (typeof fnArgs.max === 'string' ||
                    fnArgs.max instanceof String) {
                    if (!!fnArgs.max) {
                        if (fnArgs.max === '') {
                            fnArgs.max = 0;
                        } else {
                            fnArgs.max = Number.parseInt(fnArgs.max);
                        }
                    }
                }

                if (fnArgs.max <= fnArgs.min) {
                    fnArgs.max = fnArgs.min + 1;
                }

                if (typeof fnArgs.from === 'string' ||
                    fnArgs.from instanceof String) {
                    fnArgs.from = Number.parseInt(fnArgs.from);
                }
                if (typeof fnArgs.to === 'string' ||
                    fnArgs.to instanceof String) {
                    fnArgs.to = Number.parseInt(fnArgs.to);
                }

                // range setting
                if (!!fnArgs.from && !!fnArgs.to) {
                    fnArgs.range = {
                        from: fnArgs.from,
                        to: fnArgs.to
                    };
                }
                break;
            case 'jqxGauge':
                // min, max setting
                if (!!fnArgs.ranges && !!fnArgs.ranges[0]) {
                    fnArgs.min = Number.parseInt(fnArgs.min);
                    fnArgs.max = Number.parseInt(fnArgs.max);
                    fnArgs.ranges[0].startValue = fnArgs.min;
                    fnArgs.ranges[0].endValue = fnArgs.max;
                }
                break;
            case 'jqxListMenu':
                fnArgs.showHeader = fnArgs.showBackButton;
                fnArgs.enableScrolling = false;

                // remove prvious realized elements
                var result = document.querySelectorAll('*[' + UIP_DEPENDANT + '*="' + htmlEl.id + '"]');
                if (!!result) {
                    for (var i = 0; i < result.length; i++) {
                        uipRunner.destoryUIPComponents(result[i]);
                    }
                }

                // make list
                databind = JSON.parse(fnArgs.dataBinding);
                if (!databind) {
                    console.error('databind property not exist');
                    return;
                }

                // list item type setting
                var listitem = 'li';
                var listtype = 'ul';
                if (!!fnArgs.type && fnArgs.type === 'number') {
                    listtype = 'ol';
                }

                // change new element
                if (htmlEl.tagName.toLowerCase() !== listtype) {
                    var newEl = document.createElement(listtype);

                    // get current attributes
                    var attrNodeMap = htmlEl.attributes;
                    var attributes = [];
                    for (var i = 0; i < attrNodeMap.length; i++) {
                        var item = attrNodeMap.item(i);
                        if (!!item && !!item.name) {
                            attributes.push(item.name);
                        }
                    }

                    // copy attribute
                    attributes.forEach(function (item) {
                        var name = item.toLowerCase();
                        newEl.setAttribute(name, htmlEl.getAttribute(name));
                    });

                    // append
                    htmlEl.parentNode.insertBefore(newEl, htmlEl.nextSibling);

                    // remove ori
                    uipRunner.destoryUIPComponents(htmlEl);

                    // set new htmlElement
                    htmlEl = newEl;
                    $el = $(htmlEl);
                    uipComponentsInfo.components[uipComponentsInfo.index] = newEl;
                }

                // create child
                var createChild = function (parent, childData) {
                    if (!parent || !childData) {
                        return;
                    }
                    childData.forEach(function (data) {
                        if (!!data.label &&
                            (typeof data.label === 'string' || data.label instanceof String)) {
                            var li = document.createElement(listitem);
                            li.textContent = data.label;
                            parent.appendChild(li);

                            // child create
                            if (!!data.items &&
                                data.items instanceof Array) {
                                var clist = document.createElement(listtype);
                                clist.setAttribute('data-role', 'listmenu');
                                li.appendChild(clist);
                                createChild(clist, data.items);
                            }
                        }
                    });
                };
                createChild(htmlEl, databind.data);

                // jqxListMenu constructor call complete's then append dependant attribute in realize element's
                callback = function () {
                    var newEl = htmlEl.parentNode;
                    if (!!newEl) {
                        newEl.setAttribute(UIP_DEPENDANT, htmlEl.id);
                        newEl.setAttribute('id', htmlEl.id);
                        htmlEl.removeAttribute('id');
                        if (!!cb && typeof(cb) === 'function') {
                            cb();
                        }
                        _fireRealizeComplete(newEl);
                    }
                };
                break;
            case 'jqxTabs':
                databind = JSON.parse(fnArgs.dataBinding);
                if (!databind) {
                    console.error('databind property not exist');
                    return;
                }
                var labels = databind.data.labels;
                var length = databind.data.labels.length;
                var ul = document.createElement('ul');
                for (var i = 0; i < length; i++) {
                    var li = document.createElement('li');
                    li.textContent = labels[i];
                    ul.appendChild(li);
                }
                htmlEl.insertBefore(ul, htmlEl.firstChild);
                break;
            case 'jqxNavigationBar':
                databind = JSON.parse(fnArgs.dataBinding);
                if (!databind) {
                    console.error('databind property not exist');
                    return;
                }
                var labels = databind.data.labels;
                var length = databind.data.labels.length;
                var children = $el.children();
                for (var i = 0; i < length; i++) {
                    children[i * 2].textContent = labels[i];
                }
                break;
            case 'jqxDropDownButton':
            case 'jqxSplitter':
                break;
            case 'jqxChart':
                // jqx Chart's setting is static info
                var settings = {
                    description: '',
                    source: [{
                        Country: 'A',
                        Population: 1347
                    }, {
                        Country: 'B',
                        Population: 1210
                    }, {
                        Country: 'C',
                        Population: 313
                    }, {
                        Country: 'D',
                        Population: 237
                    }, {
                        Country: 'E',
                        Population: 192
                    }],
                    categoryAxis: {
                        dataField: 'Country'
                    }
                };

                // set size
                $el.css('width', fnArgs.width);
                $el.css('height', fnArgs.height);

                // title setting
                settings.title = fnArgs.title;

                // get type and orientation info
                var chartInfos = fnArgs.type.split('-');
                var type = chartInfos[0];
                var seriesGroups = {
                    type: type
                };

                switch (type) {
                case 'column':
                case 'line':
                    if (type === 'line') {
                        seriesGroups.orientation = 'vertical';
                    } else {
                        seriesGroups.orientation = chartInfos[1];
                    }
                    seriesGroups.valueAxis = {
                        flip: false,
                        displayValueAxis: true
                    };
                    seriesGroups.series = [{
                        dataField: 'Population',
                        displayText: 'Millions'
                    }];
                    break;
                case 'pie':
                    seriesGroups.series = [{
                        dataField: 'Population'
                    }];
                    break;
                case 'area':
                    seriesGroups.valueAxis = {
                        displayValueAxis: true
                    };
                    seriesGroups.series = [{
                        dataField: 'Population',
                        displayText: 'Millions'
                    }];
                    break;
                }

                // seriesGroups setting
                settings.seriesGroups = [seriesGroups];

                // changd fnArgs
                fnArgs = settings;

                break;
            case 'jqxTree':
                databind = JSON.parse(fnArgs.dataBinding);
                if (!databind) {
                    console.error('databind property not exist');
                    return;
                }

                fnArgs.source = databind.data;
                callback = function () {
                    _callJQXComponentMethod($el, fwComponentName, 'expandAll');
                    if (!!cb && typeof(cb) === 'function') {
                        cb();
                    }
                    _fireRealizeComplete(htmlEl);
                };
                break;
            case 'jqxTreeGrid':
                databind = JSON.parse(fnArgs.dataBinding);
                if (!databind) {
                    console.error('databind property not exist');
                    return;
                }

                // make data
                var maxLen = {};
                var expandrow = [];
                localdata = [];
                databind.data.forEach(function (obj) {
                    var data = [];
                    var keys = Object.keys(obj);
                    keys.forEach(function (o, i) {
                        var o2 = obj[o];

                        if (!maxLen[i]) {
                            if (o2 !== null) {
                                maxLen[i] = o.toString().length;
                            } else {
                                maxLen[i] = 0;
                                if (o === '__parent') {
                                    expandrow.push(obj.__id);
                                }
                            }
                        } else {
                            if (!!o2) {
                                maxLen[i] = (maxLen[i] < o2.length ? o2.length : maxLen[i]);
                            }
                        }

                        // new line convert
                        if (typeof o2 === 'string' || o2 instanceof String) {
                            o2 = o2.replace(/\\n/, '<br>');
                        }
                        data.push(o2);
                    });
                    localdata.push(data);
                });

                // make dataFields
                var hierarchy = {};
                datafields = [];
                columns = [];
                databind.header.forEach(function (obj, index) {
                    var map = index.toString();
                    var text = obj.name.replace(/\\n/, '<br>'); // new line convert
                    if (!text || 0 === text.length) { // make empty string title
                        var len = maxLen[index];
                        text = new Array(len).join(' ');
                    }

                    datafields.push({
                        name: map, // must unique
                        type: obj.type,
                        map: map
                    });

                    if (text === '__id') {
                        hierarchy.keyDataField = {name: map};
                    } else if (text === '__parent') {
                        hierarchy.parentDataField = {name: map};
                    } else {
                        columns.push({
                            text: text,
                            datafield: map // datafield.name mapping
                        });
                    }
                });
                fnArgs.columns = columns;

                // make source property
                source = {
                    datatype: 'array',
                    datafields: datafields,
                    hierarchy: hierarchy,
                    id: hierarchy.keyDataField.name,
                    localdata: localdata
                };

                fnArgs.source = new $.jqx.dataAdapter(source);

                if (expandrow.length > 0) {
                    // expandRow at mutliple call
                    callback = function () {
                        expandrow.forEach(function (index) {
                            _callJQXComponentMethod($el, fwComponentName, 'expandRow', [index]);
                        });
                        if (!!cb && typeof(cb) === 'function') {
                            cb();
                        }
                        _fireRealizeComplete(htmlEl);
                    };
                }
                break;
            case 'jqxGrid':
            case 'jqxDataTable':
                databind = JSON.parse(fnArgs.dataBinding);
                if (!databind) {
                    console.error('databind property not exist');
                    return;
                }

                // make data
                var maxLen = {};
                localdata = [];
                databind.data.forEach(function (obj) {
                    var data = [];
                    obj.forEach(function (o, i) {
                        if (!maxLen[i]) {
                            maxLen[i] = o.toString().length;
                        } else {
                            maxLen[i] = (maxLen[i] < o.length ? o.length : maxLen[i]);
                        }

                        // new line convert
                        if (typeof o === 'string' || o instanceof String) {
                            o = o.replace(/\\n/, '<br>');
                        }
                        data.push(o);
                    });
                    localdata.push(data);
                });

                // make columns and datafields property
                columns = [];
                datafields = [];
                databind.header.forEach(function (obj, index) {
                    var map = index.toString();
                    var type = obj.type;
                    if (type === 'boolean') {
                        type = 'bool';
                    }
                    var columntype = type;
                    if (type === 'bool') {
                        columntype = 'checkbox';
                    }
                    var text = obj.name.replace(/\\n/, '<br>'); // new line convert
                    if (!text || 0 === text.length) { // make empty string title
                        var len = maxLen[index];
                        text = new Array(len).join(' ');
                    }

                    datafields.push({
                        name: map, // must unique
                        type: type,
                        map: map
                    });

                    columns.push({
                        text: text,
                        datafield: map, // datafield.name mapping
                        columntype: columntype
                    });
                });
                fnArgs.columns = columns;

                // make source property
                source = {
                    datatype: 'array',
                    datafields: datafields,
                    localdata: localdata
                };

                fnArgs.source = new $.jqx.dataAdapter(source);

                // set default properties
                /*
            fnArgs.autoshowcolumnsmenubutton = false;
            fnArgs.enablebrowserselection = true;
            fnArgs.sortable = true;
            fnArgs.columnsresize = true;
            fnArgs.sorttogglestates = 1;
            */
                break;
            case 'jqxButtonGroup':
                databind = JSON.parse(fnArgs.dataBinding);
                if (!databind) {
                    console.error('databind property not exist');
                    return;
                }

                // make child element
                var selections = [];
                databind.data.forEach(function (obj, index) {
                    var bt = document.createElement('button');
                    bt.textContent = obj.name;
                    bt.style.height = '100%';
                    bt.id = $el.attr('id') + 'Child' + obj.name;
                    $el.append(bt);

                    if (obj.selected === true) {
                        selections.push(index);
                    }
                });

                if ((selections.length > 0) && !!fnArgs.mode && fnArgs.mode !== 'default') {
                    // disabed at mutliple call
                    callback = function () {
                        $el.css('display', 'block');
                        $el.children().css('margin-left', '');
                        $el.children().css('line-height', ($el.height() - 8) + 'px');
                        selections.forEach(function (index) {
                            _callJQXComponentMethod($el, fwComponentName, 'setSelection', [index]);
                        });
                        if (!!cb && typeof(cb) === 'function') {
                            cb();
                        }
                        _fireRealizeComplete(htmlEl);
                    };
                } else {
                    callback = function () {
                        $el.css('display', 'block');
                        $el.children().css('margin-left', '');
                        $el.children().css('line-height', ($el.height() - 8) + 'px');
                        if (!!cb && typeof(cb) === 'function') {
                            cb();
                        }
                        _fireRealizeComplete(htmlEl);
                    };
                }
                break;
            case 'jqxExpander':
                var headerText = fnArgs.headerText;
                var contentText = fnArgs.contentText;

                // create header pane
                var header = document.createElement('div');
                header.textContent = headerText;

                // create content pane
                var contents = document.createElement('div');
                contents.textContent = contentText;

                // get child
                $el.children().each(function (index, child) {
                    contents.appendChild(child);
                });

                // append new header and content
                $el.append(header);
                $el.append(contents);

                break;
            case 'jqxWindow':
                // create content pane
                var contents = document.createElement('div');

                // get child
                $el.children().each(function (index, child) {
                    contents.appendChild(child);
                });

                // append content
                $el.append(contents);
                break;
            case 'jqxComboBox':
                databind = JSON.parse(fnArgs.dataBinding);
                if (!databind) {
                    console.error('databind property not exist');
                    return;
                }

                // get selected index and disabled index
                var selectedIndex = 0;
                var disabledIndexs = [];
                var group = '';
                var groupNum = 0;
                var index = 0;
                source = [];
                databind.data.forEach(function (obj) {
                    if (!!obj.group) {
                        group = obj.name;
                        groupNum++;
                    } else {
                        source.push({
                            name: obj.name,
                            group: group
                        });
                        if (obj.selected) {
                            selectedIndex = index - groupNum;
                        }
                        if (obj.disabled) {
                            disabledIndexs.push(index);
                        }
                    }
                    index++;
                });

                // make source
                fnArgs.source = source;
                fnArgs.displayMember = 'name';
                fnArgs.selectedIndex = selectedIndex;

                // disabed at mutliple call
                callback = function () {
                    disabledIndexs.forEach(function (index) {
                        _callJQXComponentMethod($el, fwComponentName, 'disableAt', [index]);
                    });
                    if (!!cb && typeof(cb) === 'function') {
                        cb();
                    }
                    _fireRealizeComplete(htmlEl);
                };
                break;
            case 'divContainer':
                if (!!callback && typeof(callback) === 'function') {
                    callback();
                }
                return;
            }

            // common logic
            // tooltip check
            var ttContent = fnArgs['tooltip-content'];
            var ttId = $el.attr('id');
            if (!!ttContent && !!ttId) {
                var ttPos = (!!fnArgs['tooltip-position']) ? fnArgs['tooltip-position'] : 'top';
                $el.jqxTooltip({
                    content: ttContent,
                    position: ttPos
                });
            }

            // jqx construction
            var result = _parseJQXPropertis(fwComponentName, fnArgs);
            _jqxConstruction($el, result, fwComponentName, callback);
        }
    }

    /**
     * realize UIP Dom element to 'jqwidget or html' component
     *
     * @param domElement - target DOMElement
     * @param callback - callback function, all realize operation complete then callback call
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function realizeUIPComponent(domElement, callback) {
        function applyCallback() {
            // domElement's realize complete then apply callback
            if (!!callback && typeof(callback) === 'function') {
                callback();
            }
        };

        var htmlEl = _getHTMLElement(domElement);
        if (!htmlEl) {
            console.warn('do nothing, wrong domeElement', domElement);
            return;
        }

        var fwName = getUIPFWName(htmlEl);
        var properties = getUIPProperties(htmlEl);

        switch (fwName) {
        case UIP_FW_TYPE.UIP:
            realizeUipComponent(htmlEl, properties);
            break;
        case UIP_FW_TYPE.JQX:
            _realizeUIPJQXComponent(htmlEl, properties, applyCallback);
            break;
        case UIP_FW_TYPE.HTML:
            realizeHtmlComponent(domElement, properties, applyCallback);
            break;
        case UIP_FW_TYPE.SVG:
            realizeSVGComponent(domElement, properties, applyCallback);
            break;
        case UIP_FW_TYPE.FEEDBACK:
            realizeFeedbackComponent(domElement, properties);
            break;
        default:
            // mockup
            var Component = {
                getRunner: function() {
                    var ComponentRunner = {};
                    ComponentRunner.realize = function(domEl) {
                        console.log('realize...', domEl);

                        // remove old sub element
                        while(domEl.firstChild) {
                            domEl.firstChild.remove();
                        }

                        // get sub element value
                        var value = getUIPProperties(domEl).value;
                        var props = [
                            'label',
                            'input'
                        ];
                        if(!!value) {
                            props = value.split(',');
                        }

                        var propsEl = [];
                        props.forEach(function(item, index) {
                            var el = null;
                            if ((index%2) === 1) {
                                el = document.createElement('input');
                                el.type = 'text';
                                el.setAttribute('placeholder', item);
                            } else {
                                el = document.createElement('label');
                                el.textContent = item;
                            }

                            if (!!el) {
                                propsEl.push(el);
                            }
                        });
                        propsEl.reverse();

                        var cnt = propsEl.length/2;
                        // create layout, Xx2
                        for (var i = 0; i < cnt; i++) {
                            var size = 100/cnt;
                            var row = document.createElement('div');
                            row.style.width = '100%';
                            row.style.height = size + '%';

                            for (var j = 0; j < 2; j++) {
                                var col = document.createElement('span');
                                col.id = domEl.id + '(' + i + ',' + j + ')';
                                col.style.width = size + '%';
                                col.style.height = size + '%';

                                var autoEl = propsEl.pop();
                                if (!!autoEl) {
                                    col.appendChild(autoEl);
                                }

                                row.appendChild(col);
                            }
                            domEl.appendChild(row);
                        }
                    };
                    return ComponentRunner;
                }
            };
            // get rendering method
            var name = htmlEl.getAttribute(UIP_NAME);
            // TODO, get Component
            // TODO, using not mockup
            if (name === 'custom.autoContainer') {
                var comRunner = Component.getRunner();
                comRunner.realize(htmlEl);
            }
            break;
        }
    }

    /**
     * Get UIP Dom element's container
     *
     * @param domElement - target DOMElement
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    uipRunner.getUIPContainer = function (domElement) {
        var htmlEl = _getHTMLElement(domElement);
        if (!htmlEl) {
            console.warn('do nothing, wrong domeElement', domElement);
            return;
        }

        var result = document.querySelectorAll('*[' + UIP_DEPENDANT + '*="' + htmlEl.id + '"]');
        if (result.length > 0) {
            return result[0];
        }

        if (!!htmlEl.parentNode) {
            var p = htmlEl.parentNode;
            if (!!p && p.hasAttribute(UIP_NAME) &&
                p.getAttribute(UIP_NAME) !== 'uip.page') {
                return p;
            }
        }

        return htmlEl;
    };

    /**
     * Descendant realize UIP Dom element to 'jqwidget or html' component
     *
     * @param domElement - target DOMElement
     * @param callback - callback function, all realize operation complete then callback call
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    uipRunner.realizeComponentAndDescendant = function (domElement, callback) {
        function applyCallback(componentCnt) {
            if (componentCnt === 0) {
                // realize and event bind complete then apply callback
                if (!!callback && typeof(callback) === 'function') {
                    callback();
                }
            }
        };

        var htmlEl = _getHTMLElement(domElement);
        if (!htmlEl) {
            console.warn('do nothing, wrong domeElement', domElement);
            return;
        }

        // reinit and component realize, bind event
        uipComponentsInfo.components = getAllUIPComponents(htmlEl);
        if (!!uipComponentsInfo.components) {
            var componentCnt = uipComponentsInfo.components.length;
            for (var index = 0; index < uipComponentsInfo.components.length; index++) {
                uipComponentsInfo.index = index;

                // realize
                realizeUIPComponent(uipComponentsInfo.components[index], function () {
                    componentCnt--;
                    applyCallback(componentCnt);
                });

                // event bind
                bindUIPComponentEvent(uipComponentsInfo.components[index]);
            }
        }
    };

    /**
     * Set size and only size info re-rendering
     *
     * @param {DOMElement} domElement - target DOMElement
     * @param {Object} sizeInfo Object, sizeInfo Object's must have two keys,
                       'w' and 'h', 'w' is weight, 'h' is height. ex) {w:0, h:0}
     * @param cb - callback function, all realize operation complete then callback call
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    uipRunner.setSizeProperties = function (domElement, sizeInfo, cb) {
        var htmlEl = _getHTMLElement(domElement);
        if (!htmlEl) {
            console.warn('do nothing, wrong domeElement', domElement);
            return;
        }

        var w, h;
        if (!sizeInfo || (!sizeInfo.w && !sizeInfo.h)) {
            console.warn('size infomation object is not corrected', sizeInfo);
            return;
        } else {
            w = (!!sizeInfo.w) ? sizeInfo.w : 0;
            h = (!!sizeInfo.h) ? sizeInfo.h : 0;
        }

        var fwName = getUIPFWName(htmlEl);
        var fwComponentName = getUIPFWComponentName(htmlEl);
        var properties = getUIPProperties(htmlEl);

        if (fwName === 'jqx') {
            var $el = $(htmlEl);

            var args = {width: w, height: h};
            var result = _parseJQXPropertis(fwComponentName, args);
            if (!!result.properties &&
                !!result.properties.width &&
                !!result.properties.height) {
                // special handle
                switch (fwComponentName) {
                case 'jqxLinkButton':
                    var child = htmlEl.children[0];
                    if (!!child) {
                        child.style.width = w;
                        child.style.height = h;
                    }
                    break;
                case 'jqxButtonGroup':
                    $el.css('width', w);
                    $el.css('height', h);
                    $el.children().css('line-height', ($el.height() - 8) + 'px');
                    return;
                }

                // width, height properties support jqwidgets
                _callJQXComponentMethod($el, fwComponentName, 'constructor', [args]);
            } else {
                // widget, height properties not support jqwidgets
                htmlEl.style.width = w;
                htmlEl.style.height = h;
            }

        } else if (fwName === 'svg') {
            htmlEl.setAttribute('width', w);
            htmlEl.setAttribute('height', h);
        } else if (fwName === 'html') {
            htmlEl.style.width = w;
            htmlEl.style.height = h;
        }

        if (!!cb && typeof(cb) === 'function') {
            cb();
        }
    };

    /**
     * Run action, execute real operation
     *
     * @param {Object} action object, object must have 'actionType' and 'actionValue'
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function _runAction(oAction) {
        switch (oAction.actionType.toLowerCase()) {
        case UIP_ACTION.alert:
        case UIP_ACTION.comment:
            // alert
            alert(oAction.actionValue);
            break;
        case UIP_ACTION.pageMove:
            parent.postMessage({
                message: oAction.actionType,
                value: oAction.actionValue
            }, '*');
            break;
        case UIP_ACTION.show:
        case UIP_ACTION.hide:
            var display = ''; // show
            if (oAction.actionType.toLowerCase() === UIP_ACTION.hide) {
                display = 'none'; // hide
            }
            if (!!oAction.actionValue && !!(oAction.actionValue instanceof Array)) {
                oAction.actionValue.forEach(function (targetID) {
                    var targetEl = document.getElementById(targetID);
                    if (!!targetEl) {
                        targetEl.style.display = display;
                    }
                });
            }
            break;
        }
    }

    /**
     * UIP action handler
     *
     * @param {Object}event - event object, event.actions is element's defined actions
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function _actionHandler(event) {
        function _fadeINOUT(el, inout) {
            function setOpacity(opacityValue) {
                el.style.opacity = opacityValue / 100;
                el.style.filter = 'alpha(opacity=' + opacityValue + ')';
            }

            function fadeOut(opacityValue) {
                setOpacity(opacityValue);
                if (opacityValue === 1) {
                    el.style.display = 'none';
                    done = true;
                }
            }

            function fadeIn(opacityValue) {
                setOpacity(opacityValue);
                if (opacityValue === 1) {
                    el.style.display = 'block';
                }
                if (opacityValue === 100) {
                    done = true;
                }
            }

            var done = true;
            if (!!el) {
                if (inout === 'in' && done && el.style.opacity !== '1') {
                    done = false;
                    for (var i = 1; i <= 100; i++) {
                        setTimeout((function (x) {
                            return function () {
                                fadeIn(x);
                            };
                        })(i), i * 10);
                    }
                }
                if (inout === 'out' && done && el.style.opacity !== '0') {
                    done = false;
                    for (var i = 1; i <= 100; i++) {
                        setTimeout((function (x) {
                            return function () {
                                fadeOut(x);
                            };
                        })(100 - i), i * 10);
                    }
                }
            }
        }

        function _openActionSelectDialog(actions) {
            // show in uip preview
            if (parent !== window) {
                parent.postMessage({
                    message: 'openActionSelectDialog',
                    value: actions
                }, '*');
                return;
            } else {
                // show in self window
                var dlg = document.getElementById('uip.action.select.dlg');
                if (!dlg) {
                    // create dialog
                    dlg = document.createElement('div');
                    dlg.id = 'uip.action.select.dlg';

                    // dialog style
                    dlg.style.overflow = 'auto';
                    dlg.style.width = '100%';
                    dlg.style.height = '100%';
                    dlg.style.zIndex = '1000';
                    dlg.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                    dlg.style.position = 'absolute';
                    dlg.style.top = '0';
                    dlg.style.left = '0';
                    dlg.style.display = 'none';

                    // create overlay
                    var overlay = document.createElement('div');
                    dlg.appendChild(overlay);

                    // overlay style
                    overlay.style.position = 'relative';
                    overlay.style.margin = '0 auto';
                    overlay.style.verticalAlign = 'middle';
                    overlay.style.top = '30%';
                    overlay.style.backgroundColor = '#707070';
                    overlay.style.width =  '50%';
                    overlay.style.height = '50px';
                    overlay.style.borderRadius = '15px';
                    overlay.style.padding = '20px';

                    // create content-pane
                    var content = document.createElement('div');
                    overlay.appendChild(content);

                    // content pane style
                    content.style.position = 'absolute';
                    content.style.top = '10px';
                    content.style.left = '10px';
                    content.style.right = '10px';
                    content.style.bottom = '10px';
                    content.style.padding = '10px 10px';
                    content.style.backgroundColor = '#fff';
                    content.style.borderRadius = '10px';
                    content.style.overflow = 'auto';
                    content.style.textAlign = 'left';

                    // create label
                    var label = document.createElement('label');
                    label.textContent = 'select action:';
                    content.appendChild(label);

                    // create select
                    var select = document.createElement('select');
                    select.id = 'uip.action.select.dlg.selector';
                    content.appendChild(select);

                    // create options
                    actions.forEach(function (action, index) {
                        var option = document.createElement('option');
                        option.value = JSON.stringify(action);
                        option.textContent = action.actionType + ':';
                        if (action.actionType === UIP_ACTION.pageMove) {
                            option.textContent += action.actionValue.path;
                        } else {
                            option.textContent += action.actionValue;
                        }

                        if (index === 0) {
                            option.setAttribute('selected', '');
                        }
                        select.appendChild(option);
                    });

                    // create br
                    var br = document.createElement('br');
                    content.appendChild(br);

                    // create button
                    var okBT = document.createElement('button');
                    okBT.textContent = 'Ok';
                    okBT.addEventListener('click', function () {
                        dlg.style.display = 'none';
                        dlg.style.opacity = '0';

                        var strAction = select.options[select.selectedIndex].value;
                        _runAction(JSON.parse(strAction));
                    }, false);

                    var cancelBT = document.createElement('button');
                    cancelBT.textContent = 'Cancel';
                    cancelBT.addEventListener('click', function () {
                        //dlg.style.display = 'none';
                        _fadeINOUT(dlg, 'out');
                    }, false);

                    content.appendChild(okBT);
                    content.appendChild(cancelBT);

                    // append body
                    var body = document.getElementsByTagName('body')[0];
                    body.appendChild(dlg);
                    _fadeINOUT(dlg, 'in');
                    //dlg.style.display = '';
                } else {
                    // reseting dialog
                    var select = document.getElementById('uip.action.select.dlg.selector');
                    while (select.firstChild) {
                        select.firstChild.remove();
                    }

                    // create options
                    actions.forEach(function (action, index) {
                        var option = document.createElement('option');
                        option.value = JSON.stringify(action);
                        option.textContent = action.actionType + ':' + action.actionValue;

                        if (index === 0) {
                            option.setAttribute('selected', '');
                        }
                        select.appendChild(option);
                    });

                    // show
                    _fadeINOUT(dlg, 'in');
                }
            }
        }

        // check event
        if (!event || !event.type) {
            return;
        }

        // check target element
        var htmlEl = _getHTMLElement(this);
        if (!htmlEl) {
            return;
        }

        // get event type's current actions
        var oElementEvents = getUIPEvents(htmlEl);
        if (!oElementEvents) {
            return;
        }

        // check multiple bind actions And select action
        var actions = oElementEvents[event.type.toLowerCase()];
        if (!actions || actions.length < 1) {
            actions = oElementEvents[event.type];
            if (!actions || actions.length < 1) {
                console.error('can not find maching event', event.type);
                return;
            }
        }

        if (actions.length === 1) {
            _runAction(actions[0]);
        } else if (actions.length > 1) {
            _openActionSelectDialog(actions);
        }
    }

    /**
     * bind event handler to UIP Dom element
     *
     * @param domElement - target DOMElement
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function bindUIPComponentEvent(domElement) {
        function _addEvent(el, eventType, handler) {
            // keydown event
            if (eventType.toLowerCase() === 'leftkeydown') {
                keydownEventTarget.leftkeydown.push(el);
            } else if  (eventType.toLowerCase() === 'rightkeydown') {
                keydownEventTarget.rightkeydown.push(el);
            }

            // event management
            if (!!el.addEventListener) { // DOM Level 2 browsers
                el.addEventListener(eventType, handler, false);
            } else if (!!el.attachEvent) { // IE <= 8
                el.attachEvent('on' + eventType, handler);
            } else { // ancient browsers
                el['on' + eventType] = handler;
            }

            // specific jqxWidget event handle
            var componentName = getUIPFWComponentName(el);
            if (!!$ && !!componentName) {
                var $el = $(el);
                switch (componentName) {
                case 'jqxTreeGrid':
                case 'jqxGrid':
                    console.log(eventType);
                    $el.on(eventType, handler);
                    break;
                }
            }

            // add event list
            if (!el.eventListenerList) {
                el.eventListenerList = [];
            }
            el.eventListenerList.push({type: eventType,
                                       listener: handler});
        }

        // redefine HTMLElement
        //redefineHTMLElement();

        var htmlEl = _getHTMLElement(domElement);
        if (!htmlEl) {
            //console.warn('do nothing, wrong domeElement', domElement);
            return;
        }

        var oEvtDefined = getUIPEvents(htmlEl);
        if (!oEvtDefined) {
            //console.warn('do nothing, event not defined in domeElement', htmlEl);
            return;
        }

        var aEvtNames = Object.keys(oEvtDefined);
        if (!!aEvtNames && aEvtNames.length > 0) {
            aEvtNames.forEach(function (evtName) {
                // bind
                _addEvent(htmlEl, evtName, _actionHandler);
            });
        }
    }

    /**
     * unbind event handler to UIP Dom element
     *
     * @param domElement - target parent DOMElement
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function unbindUIPComponentEvent(domElement) {
        function _removeEvent(el) {
            // remove event list
            if (!el || !el.eventListenerList ||
                el.eventListenerList.length < 1) {
                return;
            }
            el.eventListenerList.forEach(function (info) {
                if (!!info.type && !!info.listener) {
                    el.removeEventListener(info.type, info.listener, false);
                }
            });
            el.eventListenerList = [];
        }

        var htmlEl = _getHTMLElement(domElement);
        if (!htmlEl) {
            console.warn('do nothing, wrong domeElement', domElement);
            return;
        }

        _removeEvent(htmlEl);
    }

    /**
     * SVG component realize
     *
     * @param domElement - target parent DOMElement
     * @param {Object} properties - new properties object
     * @param {Function} cb - callback function, if realize complete then called
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function realizeSVGComponent(domElement, properties, cb) {
        // target element check
        var htmlEl = _getHTMLElement(domElement);
        if (!htmlEl) {
            console.warn('do nothing, wrong domeElement', domElement);
            return;
        }

        // get new properties
        if (!properties) {
            properties = getUIPProperties(htmlEl);
        }

        // create svg's child
        var svg = htmlEl;
        var fwComponentName = getUIPFWComponentName(htmlEl);
        var child = document.createElementNS('http://www.w3.org/2000/svg', fwComponentName);
        if (!!properties) {
            // set attribute
            var attributes = Object.keys(properties);

            switch (fwComponentName) {
            case 'path':
                child = document.createElementNS('http://www.w3.org/2000/svg', fwComponentName);
                attributes.forEach(function (attr) {
                    var value = properties[attr];

                    if (attr === 'width' ||
                        attr === 'height' ||
                        attr === 'viewbox' ||
                        attr === 'viewBox' ||
                        attr === 'preserveAspectRatio') {
                        svg.setAttribute(attr, value);
                    } else {
                        child.setAttribute(attr, value);
                    }
                });
                break;
            case 'line':
                child = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                attributes.forEach(function (attr) {
                    var value = properties[attr];

                    svg.setAttribute('preserveAspectRatio', 'none');
                    svg.setAttribute('viewBox', '0 0 100 100');
                    svg.setAttribute('viewbox', '0 0 100 100');
                    svg.setAttribute('shape-rendering', 'crispEdges');
                    svg.setAttribute('shape-rendering', 'geometricPrecision');

                    child.setAttribute('vector-effect', 'non-scaling-stroke');

                    if (attr === 'width' ||
                        attr === 'height') {
                        svg.setAttribute(attr, value);
                    } else if (attr === 'mode') {
                        var x1 = 0, y1 = 0, x2 = 0, y2 = 0;

                        if (value === 'lsl') {
                            x2 = y2 = 100;
                        } else if (value === 'rsl') {
                            x1 = y2 = 100;
                            x2 = y1 = 0;
                        } else if (value === 'vl') {
                            x1 = 50;
                            y1 = 0;
                            x2 = 50;
                            y2 = 100;
                        } else if (value === 'pl') {
                            x1 = 0;
                            y1 = 50;
                            x2 = 100;
                            y2 = 50;
                        }

                        child.setAttribute('d', 'M' + x1 + ' ' + y1 + ',  L' + x2 + ' ' + y2 );

                    } else if (attr === 'stroke-dasharray') {
                        var strokeDash = '0'; // default, solid
                        if (value === 'dashed') {
                            strokeDash = '10, 5';
                        } else if (value === 'dotted') {
                            strokeDash = '1';
                        }
                        child.setAttribute('stroke-dasharray', strokeDash);
                    } else {
                        child.setAttribute(attr, value);
                    }
                });
                break;
            }
        }
        svg.appendChild(child);

        // apply callback
        if (!!cb && typeof(cb) === 'function') {
            cb();
        }
        // fire complete
        _fireRealizeComplete(htmlEl);
    }

    /**
     * set html properties to UIP Dom element
     *
     * @param domElement - target parent DOMElement
     * @param {Object} properties - new properties object
     * @param {Function} cb - callback function, if realize complete then called
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    function realizeHtmlComponent(domElement, properties, cb) {
        var isApplayCallback = true;

        // target element check
        var htmlEl = _getHTMLElement(domElement);
        if (!htmlEl) {
            console.warn('do nothing, wrong domeElement', domElement);
            return;
        }

        // get new properties
        if (!properties) {
            properties = getUIPProperties(htmlEl);
        }

        // get current attributes
        var attrNodeMap = htmlEl.attributes;
        var attributes = [];
        for (var i = 0; i < attrNodeMap.length; i++) {
            var item = attrNodeMap.item(i);
            if (!!item && !!item.name) {
                attributes.push(item.name);
            }
        }

        // remove all attributes, except 'id, data-uip-*'
        attributes.forEach(function (item) {
            var name = item.toLowerCase();

            if (name !== 'id' &&
                name !== UIP_NAME &&
                name !== UIP_EVENT &&
                name !== UIP_PROPERTIES) {
                htmlEl.removeAttribute(item);
            }
        });

        // set new properties
        if (!!properties) {
            // specific element control
            var databind = null;
            var children = [];
            var fwComponentName = getUIPFWComponentName(htmlEl);

            switch (fwComponentName.toUpperCase()) {
            case 'IMG':
                isApplayCallback = false;
                htmlEl.onload = function () {
                    console.log('image loaded...');
                    // async function apply callback in here
                    if (!!cb && typeof(cb) === 'function') {
                        cb();
                    }
                    // realize complete
                    _fireRealizeComplete(htmlEl);
                };
                if (properties.src) {
                    if (properties.src.indexOf('://') < 0) {
                        realizeFilePath(properties.src, function (path) {
                            if (path) {
                                htmlEl.setAttribute('src', path);
                            } else {
                                htmlEl.setAttribute('src', 'plugins/prototype-model/descriptors/html-icons/img_68.png');
                            }
                        });
                        delete properties.src;
                    }
                } else {
                    properties.src = 'plugins/prototype-model/descriptors/html-icons/img_68.png';
                }
                break;
            case 'TABLE':
                databind = JSON.parse(properties.dataBinding);
                if (!databind) {
                    console.error('databind property not exist');
                    return;
                }
                // remove prvious child
                while (htmlEl.firstChild) {
                    htmlEl.removeChild(htmlEl.firstChild);
                }

                // make header
                var theadrow = document.createElement('tr');
                var colType = [];
                databind.header.forEach(function (obj) {
                    colType.push(obj.type);
                    var th = document.createElement('th');
                    th.innerHTML = obj.name.replace(/\\n/, '<br/>');
                    theadrow.appendChild(th);
                });
                htmlEl.appendChild(theadrow);

                // make data
                databind.data.forEach(function (obj) {
                    var datarow = document.createElement('tr');
                    obj.forEach(function (data, index) {
                        var td = document.createElement('td');

                        // new line convert
                        if (typeof data === 'string' || data instanceof String) {
                            data = data.replace(/\\n/, '<br/>');
                        }

                        // col data type check
                        if (colType[index] === 'bool') {
                            var checkbox = document.createElement('input');
                            checkbox.setAttribute('type', 'checkbox');
                            if (!!data) {
                                checkbox.setAttribute('checked', true);
                            }
                            td.appendChild(checkbox);
                        } else {
                            td.innerHTML = data;
                        }

                        datarow.appendChild(td);
                    });
                    htmlEl.appendChild(datarow);
                });
                break;
            case 'SELECT':
                databind = JSON.parse(properties.dataBinding);
                if (!databind) {
                    console.error('databind property not exist');
                    return;
                }
                // remove prvious child
                while (htmlEl.firstChild) {
                    htmlEl.removeChild(htmlEl.firstChild);
                }

                // make child <option>, <optgroup>
                var optGroup = null;
                databind.data.forEach(function (obj) {
                    var option = null;
                    if (!!obj.group) {
                        optGroup = document.createElement('optgroup');
                        optGroup.setAttribute('label', obj.name);
                        if (!!obj.disabled) {
                            optGroup.setAttribute('disabled', obj.disabled);
                        }
                        if (!!obj.selected) {
                            optGroup.setAttribute('selected', obj.selected);
                        }
                        children.push(optGroup);
                    } else {
                        option = document.createElement('option');
                        option.setAttribute('value', obj.name);
                        if (!!obj.disabled) {
                            option.setAttribute('disabled', obj.disabled);
                        }
                        if (!!obj.selected) {
                            option.setAttribute('selected', obj.selected);
                        }
                        option.textContent = obj.name;
                    }

                    if (!!optGroup && !!option) {
                        optGroup.appendChild(option);
                    } else if (!optGroup && !!option) {
                        children.push(option);
                    }
                });

                children.forEach(function (obj) {
                    htmlEl.appendChild(obj);
                });
                break;
            case 'LIST':
                databind = JSON.parse(properties.dataBinding);
                if (!databind) {
                    console.error('databind property not exist');
                    return;
                }
                // remove prvious child
                while (htmlEl.firstChild) {
                    htmlEl.removeChild(htmlEl.firstChild);
                }

                // check current element type
                var tagName = htmlEl.tagName.toLowerCase();
                if ((!!properties.ordered && tagName !== 'ol') ||
                    (!properties.ordered && tagName !== 'ul')) {
                    // change tag
                    var newTag = null;
                    if (tagName === 'ol') {
                        newTag = document.createElement('ul');
                    } else if (tagName === 'ul') {
                        newTag = document.createElement('ol');
                    }

                    // copy attribute
                    attributes.forEach(function (item) {
                        var name = item.toLowerCase();
                        newTag.setAttribute(name, htmlEl.getAttribute(name));
                    });

                    // append
                    htmlEl.parentNode.insertBefore(newTag, htmlEl.nextSibling);

                    // remove ori
                    uipRunner.destoryUIPComponents(htmlEl);

                    // set new htmlElement
                    htmlEl = newTag;
                    uipComponentsInfo.components[uipComponentsInfo.index] = newTag;
                }

                // create child <li>
                if (databind.data.length > 0) {
                    databind.data.forEach(function (obj) {
                        var li = document.createElement('li');
                        li.textContent = obj;
                        children.push(li);
                    });
                } else {
                    var rawdata = databind.raw.split('\n');
                    rawdata.forEach(function (obj) {
                        var li = document.createElement('li');
                        li.textContent = obj;
                        children.push(li);
                    });
                }

                children.forEach(function (obj) {
                    htmlEl.appendChild(obj);
                });
                break;
            case 'H':
                // header type change
                if (!!properties['rank'] && properties.rank !== htmlEl.tagName.toLowerCase()) {
                    var newH = document.createElement(properties.rank);

                    // copy attribute
                    attributes.forEach(function (item) {
                        var name = item.toLowerCase();
                        newH.setAttribute(name, htmlEl.getAttribute(name));
                    });

                    // append
                    htmlEl.parentNode.insertBefore(newH, htmlEl.nextSibling);

                    // remove ori
                    uipRunner.destoryUIPComponents(htmlEl);

                    // set new htmlElement
                    htmlEl = newH;
                    uipComponentsInfo.components[uipComponentsInfo.index] = newH;
                }
                break;
            }

            // set attribute
            var newAttributes = Object.keys(properties);
            newAttributes.forEach(function (item) {
                // check html boolean attribute
                if (!!_isHTMLBooleanAttribute(item)) {
                    var set = properties[item];
                    if (!!set) {
                        htmlEl.setAttribute(item, properties[item]);
                    }
                } else {
                    htmlEl.setAttribute(item, properties[item]);
                }
            });

            // set text
            if (!!properties.text || properties.text === '') {
                var textNode = document.createTextNode(properties.text);

                var temp = document.createElement('temp');
                while (htmlEl.hasChildNodes()) {
                    if (htmlEl.firstChild.nodeType === 3) { // Node.TEXT_NODE
                        htmlEl.removeChild(htmlEl.firstChild);
                    } else {
                        temp.appendChild(htmlEl.removeChild(htmlEl.firstChild));
                    }
                }
                htmlEl.appendChild(textNode);
                while (temp.hasChildNodes()) {
                    htmlEl.appendChild(temp.removeChild(temp.firstChild));
                }
            }

            // set 'data-uip-properties' attribute
            htmlEl.setAttribute(UIP_PROPERTIES, JSON.stringify(properties));
        }

        // complete then apply callback
        if (isApplayCallback) {
            // apply callback
            if (!!cb && typeof(cb) === 'function') {
                cb();
            }
            // fire complete
            _fireRealizeComplete(htmlEl);
        }
    }

    /**
     * remove DOM element and unbind event
     *
     * @param domElement - target parent DOMElement
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    uipRunner.destoryUIPComponents = function (domElement) {
        /// internal function
        function unbindAndRemove(el) {
            if (!!el && !!el.remove) {
                // unbind event
                unbindUIPComponentEvent(el);

                // remove dom
                el.remove();
            }
        }

        // target element check
        var htmlEl = _getHTMLElement(domElement);
        if (!htmlEl) {
            console.warn('do nothing, wrong domeElement', domElement);
            return;
        }

        // destory
        var fwName = getUIPFWName(htmlEl);
        switch (fwName) {
        case UIP_FW_TYPE.JQX:
            var $el = $(htmlEl);
            var jqxName = getUIPFWComponentName(htmlEl);

            try {
                $el[jqxName].call($el, UIP_JQX_METHODS.destroy);
                unbindAndRemove(htmlEl);
            } catch (e) {
                // guard code, if 'destory' method not working then manually destroy
                unbindAndRemove(htmlEl);
            }
            break;
        default:
            unbindAndRemove(htmlEl);
            break;
        }
    };

    /**
     * Prevent, <form>, <a>, <link> tags self page redirect operation
     *
     * @author Gyeongseok.Seo <gyeongseok.seo@samsung.com>
     */
    uipRunner.preventPageRedirect = function () {
        var elements = getHTMLUIPComponents();

        elements.forEach(function (el) {
            if (el.nodeType === 1) {
                if (el.nodeName.toLowerCase() === 'form' &&
                    !el.getAttribute('onsubmit')) {
                    el.setAttribute('onsubmit', 'return false');
                } else if (el.nodeName.toLowerCase() === 'a' ||
                           el.nodeName.toLowerCase() === 'link') {
                    var href = el.getAttribute('href');
                    if (href === '') {
                        el.setAttribute('href', 'javascript:void(0)');
                    }
                }
            }
        });
    };

    var requestId = 0;
    var requestCallbacks = {};

    function realizeUipComponent(elem, properties) {
        if (properties) {
            if (properties.themeFilePath) {
                var message = {
                    messageName: 'uip-get-file-content',
                    requestId: requestId++,
                    requestValue: {
                        id: properties.themeFilePath.id,
                        path: properties.themeFilePath.path
                    }
                };

                if (!elem._realized) {
                    elem._realized = elem.ownerDocument.createElement('style');
                    elem.appendChild(elem._realized);
                }
                elem._realized.setAttribute('data-uip-request-id', message.requestId);

                parent.postMessage(message, '*');
            }
        }
    }

    function realizeFilePath(value, callback) {
        var message = {
            messageName: 'uip-get-file-path',
            requestId: requestId++,
            requestValue: value
        };

        requestCallbacks[message.requestId] = callback;

        parent.postMessage(message, '*');
    }

    function realizeFeedbackComponent(domElement, properties) {

        if (!properties) {
            properties = getUIPProperties(domElement);
        }

        var i;
        var fwComponentName = getUIPFWComponentName(domElement);
        if (fwComponentName === 'balloon') {
            domElement.style.border = '1px solid rgb(55, 55, 55)';
            domElement.style.backgroundColor = '#FCB040';
            domElement.style.borderRadius = '5px';
            domElement.style.boxShadow = '3px 3px 2px #888888';
            domElement.style.resize = 'none';

            if (properties.hasOwnProperty('title')) {
                domElement.value = properties.title;
            }
        }

    }

    window.addEventListener('message', function (event) {
        var messageName = event.data.messageName;
        var requestId = event.data.requestId;
        var responseValue = event.data.responseValue;

        if (messageName === 'uip-file-content') {
            var elem = document.querySelector('[data-uip-request-id="' + requestId + '"]');
            if (elem) {
                elem.innerHTML = responseValue;
            }
        } else if (messageName === 'uip-file-path') {
            var callback = requestCallbacks[requestId];
            if (callback) {
                requestCallbacks[requestId] = undefined;
                callback(responseValue);
            }
        } else if (messageName === 'runAction') {
            _runAction(event.data.requestValue);
        }
    });

    window.addEventListener('keydown', function (event) {
        // backspace key
        if (!!event.keyCode) {
            if (event.keyCode === 8) {
                // event prevent only body element
                if (!!window.document.activeElement &&
                    window.document.activeElement.nodeType === 1 &&
                    window.document.activeElement.nodeName.toLowerCase() === 'body') {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
            if (event.keyCode === 37 || event.keyCode === 39) {
                if (!!window.document.activeElement &&
                    window.document.activeElement.nodeType === 1 &&
                    window.document.activeElement.nodeName.toLowerCase() === 'body') {

                    var evtType = (event.keyCode === 37) ?
                        'leftkeydown' : ((event.keyCode === 39) ? 'rightkeydown' : '');
                    var newEvent; // The custom event that will be created

                    if (document.createEvent) {
                        newEvent = document.createEvent("HTMLEvents");
                        newEvent.initEvent(evtType, true, true);
                    } else {
                        newEvent = document.createEventObject();
                        newEvent.eventType = evtType;
                    }
                    newEvent.eventName = evtType;

                    if (document.createEvent) {
                        keydownEventTarget[evtType].forEach(function (target) {
                            target.dispatchEvent(newEvent);
                        });
                    } else {
                        keydownEventTarget[evtType].forEach(function (target) {
                            target.fireEvent('on' + newEvent.eventType, newEvent);
                        });
                    }

                    event.preventDefault();
                    event.stopPropagation();
                }
            }
            if (event.keyCode === 36) { // home key
                console.log('openFullScreenMode');
                if (parent !== window) {
                    parent.postMessage({
                        message: 'openFullScreenMode'
                    }, '*');
                    return;
                }

                event.preventDefault();
                event.stopPropagation();
            }
        }
    });
})();

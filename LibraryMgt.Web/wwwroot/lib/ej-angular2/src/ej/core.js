"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
exports.ContentChild = core_2.ContentChild;
exports.Type = core_2.Type;
exports.forwardRef = core_2.forwardRef;
var firstVal = {};
/** Internal Helpers */
var Utils = (function () {
    function Utils() {
    }
    Utils.IterateAndGetChanges = function (obj) {
        if (ej.isNullOrUndefined(obj.tags) || obj.tags.length === 0) {
            return null;
        }
        var res = {};
        for (var i = 0, tags = obj.tags; i < tags.length; i++) {
            var tag = tags[i], tagElement = obj['tag_' + tag.replace(/\./g, '_')];
            if (!ej.isNullOrUndefined(tagElement) && tagElement.hasChanges) {
                res[tag] = tagElement.getChangesAndReset();
            }
        }
        return res;
    };
    return Utils;
}());
exports.Utils = Utils;
var EJComponents = (function () {
    function EJComponents(controlName, el, cdRef, tags, ejIterableDiffers, _ejKeyValueDiffers) {
        this.controlName = controlName;
        this.el = el;
        this.cdRef = cdRef;
        this.tags = tags;
        this.ejIterableDiffers = ejIterableDiffers;
        this._ejKeyValueDiffers = _ejKeyValueDiffers;
        this.model = {};
        this.outputs = [];
        this.inputs = [];
        this.twoways = [];
        //        this.__shadow = this.dom.getShadowRoot(this.el.nativeElement);
        this.firstCheck = true;
        this.ejIterable = this.ejIterableDiffers.find([]).create(null);
        this.ejKeyValueDif = _ejKeyValueDiffers.find([]).create();
    }
    EJComponents.prototype.createTwoways = function (twoways) {
        if (!twoways) {
            return;
        }
        var model = this.model;
        for (var i = 0; i < twoways.length; i++) {
            var element = twoways[i].replace(/\_/g, '.');
            ej.createObject(element + 'Change', this[twoways[i] + '_twoChange'], model);
            ej.createObject(element, this.addTwoways(element), model);
        }
    };
    EJComponents.prototype.addTwoways = function (prop) {
        var model = this.model, value = firstVal; // , originalProp = prop.replace(/-/g, '.');
        return function (newVal, isApp) {
            if (value === firstVal) {
                value = ej.getObject(prop + '_two', model);
                if (value === undefined) {
                    value = ej.getObject(prop, this === undefined || this.defaults === undefined ? {} : this.defaults);
                }
            }
            if (newVal === undefined) {
                return value;
            }
            if (value === newVal) {
                return;
            }
            value = newVal;
            if (!isApp) {
                ej.createObject(prop + '_two', newVal, model);
                ej.getObject(prop + 'Change', model).emit(newVal);
            }
        };
    };
    EJComponents.prototype.ngOnInit = function () {
        for (var key in this) {
            if (key.indexOf("_input") != -1)
                this.inputs.push(key);
            if (key.indexOf("_output") != -1)
                this.outputs.push(key);
            if (key.indexOf("_two") != -1 && key.indexOf("_twoChange") == -1)
                this.twoways.push(key.replace("_two", ""));
        }
        if (ej.isNullOrUndefined(this["options"])) {
            this.createTwoways(this.twoways);
        }
    };
    EJComponents.prototype.ngAfterContentInit = function () {
        this.firstCheck = false;
        var model = this.model, events = this.outputs;
        if (events) {
            for (var i = 0; i < events.length; i++) {
                var event_1 = events[i].replace("_output", "");
                EJComponents.bindAndRaiseEvent(this, model, event_1);
            }
        }
        if (ej.isNullOrUndefined(this["options"])) {
            for (var i = 0; i < this.tags.length; i++) {
                var element = this.tags[i], item = this['tag_' + element.replace(/\./g, '_')];
                if (!ej.isNullOrUndefined(item)) {
                    ej.createObject(element, item.getList(), this.model);
                }
            }
            for (var i = 0; i < this.inputs.length; i++) {
                var property = this.inputs[i];
                var modelProperty = this.inputs[i].replace("_input", "");
                if (this[property] != null) {
                    if (modelProperty.indexOf('_') == -1) {
                        if (this.model[modelProperty]) {
                            $.extend(true, this.model[modelProperty], this[property]);
                        }
                        else {
                            this.model[modelProperty] = this[property];
                        }
                    }
                    else if (modelProperty.indexOf('_two') == -1) {
                        var tempObj = {};
                        var key = modelProperty.replace(/\_/g, '.');
                        ej.createObject(key, this[property], tempObj);
                        var rootProp = key.split('.')[0];
                        if (this.model[rootProp] == undefined)
                            this.model[rootProp] = {};
                        $.extend(true, this.model[rootProp], tempObj[rootProp]);
                    }
                }
            }
            for (var i = 0; i < this.twoways.length; i++) {
                var twoway = this.twoways[i];
                var twowayProperty = twoway + '_two';
                if (this[twowayProperty] != null) {
                    if (twoway.indexOf('_') == -1) {
                        this.model[twowayProperty] = this[twowayProperty];
                    }
                    else {
                        var tempObj = {};
                        var key = twoway.replace(/\_/g, '.') + '_two';
                        ej.createObject(key, this[twowayProperty], tempObj);
                        var rootProp = twowayProperty.split('_')[0];
                        $.extend(true, this.model[rootProp], tempObj[rootProp]);
                    }
                }
            }
        }
        else
            this.model = jQuery.extend(this.model, this["options"]);
    };
    EJComponents.prototype.ngDoCheck = function () {
        var _this = this;
        if (ej.isNullOrUndefined(this["options"])) {
            this.twoways.forEach(function (element) {
                if (_this[element + '_two'] instanceof Array) {
                    var changes = _this.ejIterable.diff(_this[element + '_two']);
                    if (changes) {
                        var ngChanges = {};
                        if (_this.widget != undefined) {
                            ngChanges = _this.getTwowayChanges(changes.collection, ngChanges, element.replace(/\_/g, '.'));
                            ej.createObject(element.replace(/\_/g, '.') + ".two", changes.collection, ngChanges);
                            _this.widget['setModel'](ngChanges, $.isPlainObject(ngChanges));
                        }
                    }
                }
            });
        }
        else {
            var changes = this.ejKeyValueDif.diff(this["options"]);
            if (changes) {
                if (this.widget != undefined) {
                    var ngchanges = {};
                    changes.forEachChangedItem(function (changedprop) {
                        ej.createObject(changedprop.key, changedprop.currentValue, ngchanges);
                    });
                    this.widget['setModel'](ngchanges, $.isPlainObject(ngchanges));
                }
            }
        }
    };
    EJComponents.prototype.ngAfterViewInit = function () {
        var nativeElement = this.isEditor ? $(this.el.nativeElement.children) : $(this.el.nativeElement);
        this.widget = $(nativeElement)['ej' + this.controlName](this.model)['ej' + this.controlName]('instance');
    };
    EJComponents.bindAndRaiseEvent = function (instance, model, event) {
        if (!event.startsWith('model.')) {
            var originalEvt = event.startsWith('ej') ? event.substr(2) : event;
            model[originalEvt] = function (params) {
                instance[event + "_output"]['emit'](params);
            };
        }
    };
    EJComponents.prototype.ngOnChanges = function (changes) {
        if (this.firstCheck) {
            return;
        }
        var ngChanges = {};
        if (ej.isNullOrUndefined(this["options"])) {
            for (var key in changes) {
                var element = changes[key];
                if (element.previousValue === element.currentValue) {
                    break;
                }
                key = key.replace("_input", "").replace(/\_/g, '.');
                if (key.endsWith('.two')) {
                    var oKey = key.replace('.two', '');
                    ngChanges = this.getTwowayChanges(element.currentValue, ngChanges, oKey);
                }
                ej.createObject(key, element.currentValue, ngChanges);
            }
            this.widget['setModel'](ngChanges, $.isPlainObject(ngChanges));
        }
    };
    EJComponents.prototype.getTwowayChanges = function (value, ngChanges, prop) {
        var valFn = ej.getObject(prop, this.widget['model']);
        valFn(value, true);
        ej.createObject(prop, valFn, ngChanges);
        return ngChanges;
    };
    EJComponents.prototype.ngAfterContentChecked = function () {
        // TODO: ChangeDetection Third/Multi level
        var changes = Utils.IterateAndGetChanges(this);
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                var element = changes[key];
                this.widget['_' + key](element);
            }
        }
    };
    EJComponents.prototype.ngOnDestroy = function () {
        this.widget['destroy']();
    };
    return EJComponents;
}());
exports.EJComponents = EJComponents;
var ComplexTagElement = (function () {
    // tags: Array<string>;
    function ComplexTagElement(tags) {
        this.tags = tags;
        this.valueChange = new core_1.EventEmitter();
        this.complexes = [];
        this.hasChanges = false;
        this.firstChange = true;
        Object.defineProperty(this, 'parent', {
            enumerable: false,
            writable: true,
            value: null
        });
        exports.currentTemplateElement = this;
    }
    ComplexTagElement.prototype.ngOnInit = function () {
        this.firstChange = false;
        for (var key in this) {
            if (key.indexOf("_") != -1 && key.indexOf("tag_") == -1)
                this.complexes.push(key);
        }
        for (var i = 0; i < this.complexes.length; i++) {
            var property = this.complexes[i];
            if (property.indexOf('_') != -1) {
                var tempObj = {};
                var key = property.replace(/\_/g, '.');
                ej.createObject(key, this[property], tempObj);
                var rootProp = key.split('.')[0];
                if (this[rootProp] == undefined)
                    this[rootProp] = {};
                $.extend(true, this[rootProp], tempObj[rootProp]);
            }
        }
    };
    ComplexTagElement.prototype.ensureCleanObject = function () {
        var tags = this.tags;
        for (var i = 0; i < tags.length; i++) {
            var element = tags[i], tagElement = this['tag_' + element.replace(/\./g, '_')];
            if (i === 0 && this[element]) {
                return;
            }
            if (ej.isNullOrUndefined(tagElement)) {
                continue;
            }
            ej.createObject(element, tagElement.getList(), this);
        }
    };
    ComplexTagElement.prototype.ngOnChanges = function (changes) {
        if (this.firstChange) {
            return;
        }
        this.recentChanges = changes;
        this.hasChanges = true;
    };
    ComplexTagElement.prototype.getChangesAndReset = function () {
        if (this.hasChanges === false) {
            return;
        }
        var changes = this.recentChanges || {};
        var contentChanges = Utils.IterateAndGetChanges(this);
        if (!$.isEmptyObject(contentChanges)) {
            for (var key in contentChanges) {
                if (contentChanges.hasOwnProperty(key)) {
                    var element = contentChanges[key];
                    // this.el.nativeElement.
                    if (!ej.isNullOrUndefined(this.parent.widget['_' + this.property.replace(/\./g, '_') + '_' + key]))
                        this.parent.widget['_' + this.property.replace(/\./g, '_') + '_' + key](element);
                }
            }
        }
        this.hasChanges = false;
        return changes;
    };
    ComplexTagElement.prototype.ngAfterContentChecked = function () {
        var tags = this.tags;
        for (var i = 0, len = tags.length; i < len; i++) {
            var element = tags[i], tagElement = this['tag_' + element.replace(/\./g, '_')];
            if (tagElement && tagElement.hasChanges) {
                this.hasChanges = true;
            }
        }
    };
    return ComplexTagElement;
}());
exports.ComplexTagElement = ComplexTagElement;
var ArrayTagElement = (function () {
    function ArrayTagElement(propertyName) {
        this.propertyName = propertyName;
        this.hasChanges = false;
    }
    // TODO: Need to consider dynamic child change
    ArrayTagElement.prototype.ngAfterContentInit = function () {
        var _this = this;
        var index = 0;
        this.list = this.children.map(function (child) {
            child.index = index++;
            child.property = _this.propertyName;
            return child;
        });
    };
    ArrayTagElement.prototype.getList = function () {
        var list = this.list;
        for (var i = 0; i < list.length; i++) {
            list[i].ensureCleanObject();
        }
        return list;
    };
    ArrayTagElement.prototype.getChangesAndReset = function () {
        this.hasChanges = false;
        return this.recentChanges;
    };
    ArrayTagElement.prototype.ngAfterContentChecked = function () {
        var changes = {}, res = changes[this.propertyName] = [], childChange;
        for (var i = 0, list = this.list; i < list.length; i++) {
            var child = list[i];
            if (child.hasChanges) {
                childChange = child.getChangesAndReset();
                if (!ej.isNullOrUndefined(childChange)) {
                    res.push({
                        index: child.index,
                        change: childChange
                    });
                }
            }
        }
        if (res.length > 0) {
            this.recentChanges = res;
            this.hasChanges = true;
        }
    };
    return ArrayTagElement;
}());
exports.ArrayTagElement = ArrayTagElement;
//# sourceMappingURL=core.js.map
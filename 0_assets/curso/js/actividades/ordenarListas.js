/*!
 * remark v1.0.1 (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$(document).ready(function() {
    creaEstructura();
    actReiniciar();
    eventoDraggables();
});


(function(window, document, $) {
    'use strict';

    var $doc = $(document);

    $.site = $.site || {};

    $.extend($.site, {
        _queue: {
            prepare: [],
            run: [],
            complete: []
        },

        run: function() {

            var self = this;

            this.trigger('beforerun', this);
            this.dequeue('run', function() {
                self.trigger('afterrun', self);
            });
        },

        dequeue: function(name, done) {

            var self = this,
                queue = this.getQueue(name),
                fn = queue.shift(),
                next = function() {
                    self.dequeue(name, done);
                };

            if (fn) {
                fn.call(this, next);
            } else if ($.isFunction(done)) {
                done.call(this);
            }
        },

        getQueue: function(name) {

            if (!$.isArray(this._queue[name])) {
                this._queue[name] = [];
            }

            return this._queue[name];
        },

        extend: function(obj) {

            $.each(this._queue, function(name, queue) {
                if ($.isFunction(obj[name])) {
                    queue.push(obj[name]);

                    delete obj[name];
                }
            });

            $.extend(this, obj);

            return this;
        },

        trigger: function(name, data, $el) {

            if (typeof name === 'undefined') return;
            if (typeof $el === 'undefined') $el = $doc;

            $el.trigger(name + '.site', data);
        },
    });

    // Components
    // ==========
    $.components = $.components || {};

    $.extend($.components, {
        _components: {},

        register: function(name, obj) {

            this._components[name] = obj;
        },

        init: function(name, context, args) {

            var self = this;

            if (typeof name === 'undefined') {
                $.each(this._components, function(name) {
                    self.init(name);
                });
            } else {
                context = context || document;
                args = args || [];

                var obj = this.get(name);

                if (obj) {
                    switch (obj.mode) {
                        case 'default':
                            return this._initDefault(name, context);
                        case 'init':
                            return this._initComponent(name, obj, context, args);
                        case 'api':
                            return this._initApi(name, obj, args);
                        default:
                            this._initApi(name, obj, context, args);
                            this._initComponent(name, obj, context, args);
                            return;
                    }
                }
            }
        },

        _initDefault: function(name, context) {

            if (!$.fn[name]) return;

            var defaults = this.getDefaults(name);

            $('[data-plugin=' + name + ']', context).each(function() {
                var $this = $(this),
                    options = $.extend(true, {}, defaults, $this.data());

                $this[name](options);
            });
        },

        getDefaults: function(name) {

            var component = this.get(name);

            if (component && typeof component.defaults !== "undefined") {
                return component.defaults;
            } else {
                return {};
            }
        },

        get: function(name, property) {
            if (typeof this._components[name] !== "undefined") {
                if (typeof property !== "undefined") {
                    return this._components[name][property];
                } else {
                    return this._components[name];
                }
            } else {
                return undefined;
            }
        }
    });

})(window, document, jQuery);

(function(window, document, $) {
    'use strict';

    var $body = $(document.body);

    window.Site = $.site.extend({
        run: function(next) {
            $('html').removeClass('before-run').addClass('after-run');



            // Init Loaded Components
            // ======================
            $.components.init();

        },
    });

})(window, document, jQuery);

(function(document, window, $) {
    'use strict';

    var Site = window.Site;
    $(document).ready(function() {
        Site.run();
    });
})(document, window, jQuery);


/////////////


function creaEstructura() {
    var colores = ["primary", "success", "info", "warning", "danger", "dark"];
    $.each(valores, function(key, value) {
        var numAl2 = Math.floor((Math.random() * 2) + 1);
        if (numAl2 == 1) {
            $('#listaOrdenable').prepend('<li id="a' + (key + 1) + '" class="list-group-item list-group-item-' + (colores[key]) + '"><span class="pull-left"><i class="icon wb-sort-vertical" aria-hidden="true"></i></span>' + value + '</li>');
        } else {
            $('#listaOrdenable').append('<li id="a' + (key + 1) + '" class="list-group-item list-group-item-' + (colores[key]) + '"><span class="pull-left"><i class="icon wb-sort-vertical" aria-hidden="true"></i></span>' + value + '</li>');
        }
    });
}

function resuelve() {
    contador = 0;

    $('li', '#listaOrdenable').each(function(index, el) {
        $('i', el).removeClass('wb-sort-vertical');
        if (ordenCorrecto[index] == $(this).attr('id')) {
            contador++;
            $('i', el).addClass('wb-thumb-up');
        } else {
            $('i', el).addClass('wb-thumb-down');
        }
    });

    deshabilitaAct();
    $('.list-group-item').off();
    actComprobar(contador, ordenCorrecto.length);
}

function soluciona() {

    for (var i = ordenCorrecto.length; i >= 0; i--) {
        $('#listaOrdenable').prepend($('#' + ordenCorrecto[i]))
    }
    actResolver();
    deshabilitaAct();

    $('.list-group-item').off();
    $('.icon').removeClass('wb-thumb-down wb-thumb-up').addClass('wb-extension');
}

function deshabilitaAct() {
    $("#listaOrdenable").css("opacity", "0.5");
    $(".list-group-item").attr("draggable", "false");
    $(".list-group-item").css('cursor', 'not-allowed');
}

function reiniciar() {
    $('#listaOrdenable').html('');
    actReiniciar();
    creaEstructura();
    $('.list-group-item').attr({
        'data-item-sortable-id': 0,
        'draggable': true,
        'role': "option",
        'aria-grabbed': false,
    });
    $("#listaOrdenable").css("opacity", "1");
    $('.list-group-item').on();
    $('.icon').removeClass('wb-thumb-down wb-thumb-up').addClass('wb-sort-vertical');
    $.components.init();
    eventoDraggables();

}

function eventoDraggables() {
    $('.list-group-item')
        .mousedown(function() {
            actHabilitaComprobar();
        });
}

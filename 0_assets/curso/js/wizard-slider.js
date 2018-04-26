/*!
 * remark v1.0.1 (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function(window, document, $) {
  'use strict';

  // Components
  // ==========
  $.components = $.components || {};

  $.extend($.components, {
    _components: {},

    register: function(name, obj) {
      this._components[name] = obj;
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
        console.warn('component:' + component + ' script is not loaded.');

        return undefined;
      }
    }
  });

})(window, document, jQuery);

$.components.register("wizard", {
  mode: "default",
  defaults: {
    step: ".steps .step, .pearls .pearl",
    templates: {
      buttons: function() {
        var options = this.options;
        return '<div class="wizard-buttons">' +
          '<a class="btn btn-default btn-outline" href="#' + this.id + '" data-wizard="back" role="button">' + options.buttonLabels.back + '</a>' +
          '<a class="btn btn-primary btn-outline pull-right" href="#' + this.id + '" data-wizard="next" role="button">' + options.buttonLabels.next + '</a>' +
          '<a class="btn btn-success btn-outline pull-right" href="#' + this.id + '" data-wizard="finish" role="button">' + options.buttonLabels.finish + '</a>' +
          '</div>';
      }
    }
  }
});

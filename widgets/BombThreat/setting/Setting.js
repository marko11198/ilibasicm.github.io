///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
    'dojo/_base/declare',
    'jimu/BaseWidgetSetting',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/json'
  ],
  function(
    declare,
    BaseWidgetSetting,
    _WidgetsInTemplateMixin,
    JSON) {
    return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {

      baseClass: 'jimu-widget-bombThreat-setting',

      startup: function() {
        this.inherited(arguments);
        if (typeof(this.config.bombThreat) === 'undefined') {
          this.config.bombThreat = {};          
        }
        this.setConfig(this.config);
      },

      setConfig: function(config) {
        this.config = config;
        this.configArea.set("value", JSON.stringify(this.config.bombThreat, undefined, 4));
      },

      getConfig: function() {
        this.config.bombThreat = JSON.parse(this.configArea.value);
        return this.config;
      }
    });
  });
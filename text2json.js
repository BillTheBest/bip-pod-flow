/**
 *
 * The Bipio Flow Pod.  text2json action definition
 * ---------------------------------------------------------------
 *
 * @author Michael Pearson <github@m.bip.io>
 * Copyright (c) 2010-2013 Michael Pearson https://github.com/mjpearson
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function Text2JSON() {}

Text2JSON.prototype = {};

/**
 * Invokes (runs) the action.
 */
Text2JSON.prototype.invoke = function(imports, channel, sysImports, contentParts, next) {
  try {
  	if (this.$resource.helper.isObject(imports.body)) {
  		next(false, imports.body);
  	} else {
	    var exports = JSON.parse(imports.body.replace(/\n/g, ''));
	    next(false, exports);
   }
  } catch (e) {
    this.$resource.log('parse error ' + e, channel, 'error');
    next(true);
  }
}

// -----------------------------------------------------------------------------
module.exports = Text2JSON;
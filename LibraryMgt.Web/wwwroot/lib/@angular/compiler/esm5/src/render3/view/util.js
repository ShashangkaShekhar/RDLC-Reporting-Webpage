/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as o from '../../output/output_ast';
/** Name of the temporary to use during data binding */
export var TEMPORARY_NAME = '_t';
/** Name of the context parameter passed into a template function */
export var CONTEXT_NAME = 'ctx';
/** Name of the RenderFlag passed into a template function */
export var RENDER_FLAGS = 'rf';
/** The prefix reference variables */
export var REFERENCE_PREFIX = '_r';
/** The name of the implicit context reference */
export var IMPLICIT_REFERENCE = '$implicit';
/** Name of the i18n attributes **/
export var I18N_ATTR = 'i18n';
export var I18N_ATTR_PREFIX = 'i18n-';
/** I18n separators for metadata **/
export var MEANING_SEPARATOR = '|';
export var ID_SEPARATOR = '@@';
/**
 * Creates an allocator for a temporary variable.
 *
 * A variable declaration is added to the statements the first time the allocator is invoked.
 */
export function temporaryAllocator(statements, name) {
    var temp = null;
    return function () {
        if (!temp) {
            statements.push(new o.DeclareVarStmt(TEMPORARY_NAME, undefined, o.DYNAMIC_TYPE));
            temp = o.variable(name);
        }
        return temp;
    };
}
export function unsupported(feature) {
    if (this) {
        throw new Error("Builder " + this.constructor.name + " doesn't support " + feature + " yet");
    }
    throw new Error("Feature " + feature + " is not supported yet");
}
export function invalid(arg) {
    throw new Error("Invalid state: Visitor " + this.constructor.name + " doesn't handle " + o.constructor.name);
}
export function asLiteral(value) {
    if (Array.isArray(value)) {
        return o.literalArr(value.map(asLiteral));
    }
    return o.literal(value, o.INFERRED_TYPE);
}
export function conditionallyCreateMapObjectLiteral(keys) {
    if (Object.getOwnPropertyNames(keys).length > 0) {
        return mapToExpression(keys);
    }
    return null;
}
export function mapToExpression(map, quoted) {
    if (quoted === void 0) { quoted = false; }
    return o.literalMap(Object.getOwnPropertyNames(map).map(function (key) { return ({ key: key, quoted: quoted, value: asLiteral(map[key]) }); }));
}
/**
 *  Remove trailing null nodes as they are implied.
 */
export function trimTrailingNulls(parameters) {
    while (o.isNull(parameters[parameters.length - 1])) {
        parameters.pop();
    }
    return parameters;
}
export function getQueryPredicate(query, constantPool) {
    if (Array.isArray(query.predicate)) {
        return constantPool.getConstLiteral(o.literalArr(query.predicate.map(function (selector) { return o.literal(selector); })));
    }
    else {
        return query.predicate;
    }
}
export function noop() { }
var DefinitionMap = /** @class */ (function () {
    function DefinitionMap() {
        this.values = [];
    }
    DefinitionMap.prototype.set = function (key, value) {
        if (value) {
            this.values.push({ key: key, value: value, quoted: false });
        }
    };
    DefinitionMap.prototype.toLiteralMap = function () { return o.literalMap(this.values); };
    return DefinitionMap;
}());
export { DefinitionMap };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3ZpZXcvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEtBQUssQ0FBQyxNQUFNLHlCQUF5QixDQUFDO0FBSzdDLHVEQUF1RDtBQUN2RCxNQUFNLENBQUMsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBRW5DLG9FQUFvRTtBQUNwRSxNQUFNLENBQUMsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBRWxDLDZEQUE2RDtBQUM3RCxNQUFNLENBQUMsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBRWpDLHFDQUFxQztBQUNyQyxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFFckMsaURBQWlEO0FBQ2pELE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLFdBQVcsQ0FBQztBQUU5QyxtQ0FBbUM7QUFDbkMsTUFBTSxDQUFDLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUNoQyxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7QUFFeEMsb0NBQW9DO0FBQ3BDLE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQztBQUNyQyxNQUFNLENBQUMsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBRWpDOzs7O0dBSUc7QUFDSCxNQUFNLDZCQUE2QixVQUF5QixFQUFFLElBQVk7SUFDeEUsSUFBSSxJQUFJLEdBQXVCLElBQUksQ0FBQztJQUNwQyxPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDakYs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RUFBQyxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBRUQsb0NBQVksR0FBWixjQUFtQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RSxvQkFBQztBQUFELENBQUMsQUFWRCxJQVVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbnN0YW50UG9vbH0gZnJvbSAnLi4vLi4vY29uc3RhbnRfcG9vbCc7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4uLy4uL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCAqIGFzIHQgZnJvbSAnLi4vcjNfYXN0JztcblxuaW1wb3J0IHtSM1F1ZXJ5TWV0YWRhdGF9IGZyb20gJy4vYXBpJztcblxuLyoqIE5hbWUgb2YgdGhlIHRlbXBvcmFyeSB0byB1c2UgZHVyaW5nIGRhdGEgYmluZGluZyAqL1xuZXhwb3J0IGNvbnN0IFRFTVBPUkFSWV9OQU1FID0gJ190JztcblxuLyoqIE5hbWUgb2YgdGhlIGNvbnRleHQgcGFyYW1ldGVyIHBhc3NlZCBpbnRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gKi9cbmV4cG9ydCBjb25zdCBDT05URVhUX05BTUUgPSAnY3R4JztcblxuLyoqIE5hbWUgb2YgdGhlIFJlbmRlckZsYWcgcGFzc2VkIGludG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiAqL1xuZXhwb3J0IGNvbnN0IFJFTkRFUl9GTEFHUyA9ICdyZic7XG5cbi8qKiBUaGUgcHJlZml4IHJlZmVyZW5jZSB2YXJpYWJsZXMgKi9cbmV4cG9ydCBjb25zdCBSRUZFUkVOQ0VfUFJFRklYID0gJ19yJztcblxuLyoqIFRoZSBuYW1lIG9mIHRoZSBpbXBsaWNpdCBjb250ZXh0IHJlZmVyZW5jZSAqL1xuZXhwb3J0IGNvbnN0IElNUExJQ0lUX1JFRkVSRU5DRSA9ICckaW1wbGljaXQnO1xuXG4vKiogTmFtZSBvZiB0aGUgaTE4biBhdHRyaWJ1dGVzICoqL1xuZXhwb3J0IGNvbnN0IEkxOE5fQVRUUiA9ICdpMThuJztcbmV4cG9ydCBjb25zdCBJMThOX0FUVFJfUFJFRklYID0gJ2kxOG4tJztcblxuLyoqIEkxOG4gc2VwYXJhdG9ycyBmb3IgbWV0YWRhdGEgKiovXG5leHBvcnQgY29uc3QgTUVBTklOR19TRVBBUkFUT1IgPSAnfCc7XG5leHBvcnQgY29uc3QgSURfU0VQQVJBVE9SID0gJ0BAJztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFsbG9jYXRvciBmb3IgYSB0ZW1wb3JhcnkgdmFyaWFibGUuXG4gKlxuICogQSB2YXJpYWJsZSBkZWNsYXJhdGlvbiBpcyBhZGRlZCB0byB0aGUgc3RhdGVtZW50cyB0aGUgZmlyc3QgdGltZSB0aGUgYWxsb2NhdG9yIGlzIGludm9rZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wb3JhcnlBbGxvY2F0b3Ioc3RhdGVtZW50czogby5TdGF0ZW1lbnRbXSwgbmFtZTogc3RyaW5nKTogKCkgPT4gby5SZWFkVmFyRXhwciB7XG4gIGxldCB0ZW1wOiBvLlJlYWRWYXJFeHByfG51bGwgPSBudWxsO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmICghdGVtcCkge1xuICAgICAgc3RhdGVtZW50cy5wdXNoKG5ldyBvLkRlY2xhcmVWYXJTdG10KFRFTVBPUkFSWV9OQU1FLCB1bmRlZmluZWQsIG8uRFlOQU1JQ19UWVBFKSk7XG4gICAgICB0ZW1wID0gby52YXJpYWJsZShuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXA7XG4gIH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc3VwcG9ydGVkKGZlYXR1cmU6IHN0cmluZyk6IG5ldmVyIHtcbiAgaWYgKHRoaXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEJ1aWxkZXIgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGRvZXNuJ3Qgc3VwcG9ydCAke2ZlYXR1cmV9IHlldGApO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgRmVhdHVyZSAke2ZlYXR1cmV9IGlzIG5vdCBzdXBwb3J0ZWQgeWV0YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkPFQ+KGFyZzogby5FeHByZXNzaW9uIHwgby5TdGF0ZW1lbnQgfCB0Lk5vZGUpOiBuZXZlciB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkIHN0YXRlOiBWaXNpdG9yICR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBkb2Vzbid0IGhhbmRsZSAke28uY29uc3RydWN0b3IubmFtZX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzTGl0ZXJhbCh2YWx1ZTogYW55KTogby5FeHByZXNzaW9uIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIG8ubGl0ZXJhbEFycih2YWx1ZS5tYXAoYXNMaXRlcmFsKSk7XG4gIH1cbiAgcmV0dXJuIG8ubGl0ZXJhbCh2YWx1ZSwgby5JTkZFUlJFRF9UWVBFKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmRpdGlvbmFsbHlDcmVhdGVNYXBPYmplY3RMaXRlcmFsKGtleXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9KTogby5FeHByZXNzaW9ufFxuICAgIG51bGwge1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoa2V5cykubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBtYXBUb0V4cHJlc3Npb24oa2V5cyk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBUb0V4cHJlc3Npb24obWFwOiB7W2tleTogc3RyaW5nXTogYW55fSwgcXVvdGVkID0gZmFsc2UpOiBvLkV4cHJlc3Npb24ge1xuICByZXR1cm4gby5saXRlcmFsTWFwKFxuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobWFwKS5tYXAoa2V5ID0+ICh7a2V5LCBxdW90ZWQsIHZhbHVlOiBhc0xpdGVyYWwobWFwW2tleV0pfSkpKTtcbn1cblxuLyoqXG4gKiAgUmVtb3ZlIHRyYWlsaW5nIG51bGwgbm9kZXMgYXMgdGhleSBhcmUgaW1wbGllZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaW1UcmFpbGluZ051bGxzKHBhcmFtZXRlcnM6IG8uRXhwcmVzc2lvbltdKTogby5FeHByZXNzaW9uW10ge1xuICB3aGlsZSAoby5pc051bGwocGFyYW1ldGVyc1twYXJhbWV0ZXJzLmxlbmd0aCAtIDFdKSkge1xuICAgIHBhcmFtZXRlcnMucG9wKCk7XG4gIH1cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVyeVByZWRpY2F0ZShcbiAgICBxdWVyeTogUjNRdWVyeU1ldGFkYXRhLCBjb25zdGFudFBvb2w6IENvbnN0YW50UG9vbCk6IG8uRXhwcmVzc2lvbiB7XG4gIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5LnByZWRpY2F0ZSkpIHtcbiAgICByZXR1cm4gY29uc3RhbnRQb29sLmdldENvbnN0TGl0ZXJhbChcbiAgICAgICAgby5saXRlcmFsQXJyKHF1ZXJ5LnByZWRpY2F0ZS5tYXAoc2VsZWN0b3IgPT4gby5saXRlcmFsKHNlbGVjdG9yKSBhcyBvLkV4cHJlc3Npb24pKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHF1ZXJ5LnByZWRpY2F0ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCBjbGFzcyBEZWZpbml0aW9uTWFwIHtcbiAgdmFsdWVzOiB7a2V5OiBzdHJpbmcsIHF1b3RlZDogYm9vbGVhbiwgdmFsdWU6IG8uRXhwcmVzc2lvbn1bXSA9IFtdO1xuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IG8uRXhwcmVzc2lvbnxudWxsKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlcy5wdXNoKHtrZXksIHZhbHVlLCBxdW90ZWQ6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgdG9MaXRlcmFsTWFwKCk6IG8uTGl0ZXJhbE1hcEV4cHIgeyByZXR1cm4gby5saXRlcmFsTWFwKHRoaXMudmFsdWVzKTsgfVxufVxuIl19
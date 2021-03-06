/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { AnimationBuilder } from '@angular/animations';
import { AnimationDriver, ɵAnimationEngine as AnimationEngine, ɵAnimationStyleNormalizer as AnimationStyleNormalizer, ɵCssKeyframesDriver as CssKeyframesDriver, ɵNoopAnimationDriver as NoopAnimationDriver, ɵWebAnimationsDriver as WebAnimationsDriver, ɵWebAnimationsStyleNormalizer as WebAnimationsStyleNormalizer, ɵsupportsWebAnimations as supportsWebAnimations } from '@angular/animations/browser';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, InjectionToken, NgZone, RendererFactory2 } from '@angular/core';
import { ɵDomRendererFactory2 as DomRendererFactory2 } from '@angular/platform-browser';
import { BrowserAnimationBuilder } from './animation_builder';
import { AnimationRendererFactory } from './animation_renderer';
var InjectableAnimationEngine = /** @class */ (function (_super) {
    tslib_1.__extends(InjectableAnimationEngine, _super);
    function InjectableAnimationEngine(doc, driver, normalizer) {
        return _super.call(this, doc.body, driver, normalizer) || this;
    }
    InjectableAnimationEngine = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Inject(DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [Object, AnimationDriver, AnimationStyleNormalizer])
    ], InjectableAnimationEngine);
    return InjectableAnimationEngine;
}(AnimationEngine));
export { InjectableAnimationEngine };
export function instantiateSupportedAnimationDriver() {
    return supportsWebAnimations() ? new WebAnimationsDriver() : new CssKeyframesDriver();
}
export function instantiateDefaultStyleNormalizer() {
    return new WebAnimationsStyleNormalizer();
}
export function instantiateRendererFactory(renderer, engine, zone) {
    return new AnimationRendererFactory(renderer, engine, zone);
}
/**
 * @experimental Animation support is experimental.
 */
export var ANIMATION_MODULE_TYPE = new InjectionToken('AnimationModuleType');
var SHARED_ANIMATION_PROVIDERS = [
    { provide: AnimationBuilder, useClass: BrowserAnimationBuilder },
    { provide: AnimationStyleNormalizer, useFactory: instantiateDefaultStyleNormalizer },
    { provide: AnimationEngine, useClass: InjectableAnimationEngine }, {
        provide: RendererFactory2,
        useFactory: instantiateRendererFactory,
        deps: [DomRendererFactory2, AnimationEngine, NgZone]
    }
];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 */
export var BROWSER_ANIMATIONS_PROVIDERS = tslib_1.__spread([
    { provide: AnimationDriver, useFactory: instantiateSupportedAnimationDriver },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'BrowserAnimations' }
], SHARED_ANIMATION_PROVIDERS);
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 */
export var BROWSER_NOOP_ANIMATIONS_PROVIDERS = tslib_1.__spread([
    { provide: AnimationDriver, useClass: NoopAnimationDriver },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'NoopAnimations' }
], SHARED_ANIMATION_PROVIDERS);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zL3NyYy9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUUsZ0JBQWdCLElBQUksZUFBZSxFQUFFLHlCQUF5QixJQUFJLHdCQUF3QixFQUFFLG1CQUFtQixJQUFJLGtCQUFrQixFQUFFLG9CQUFvQixJQUFJLG1CQUFtQixFQUFFLG9CQUFvQixJQUFJLG1CQUFtQixFQUFFLDZCQUE2QixJQUFJLDRCQUE0QixFQUFFLHNCQUFzQixJQUFJLHFCQUFxQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDN1ksT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQVksZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFDLG9CQUFvQixJQUFJLG1CQUFtQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFdEYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDNUQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFHOUQ7SUFBK0MscURBQWU7SUFDNUQsbUNBQ3NCLEdBQVEsRUFBRSxNQUF1QixFQUFFLFVBQW9DO2VBQzNGLGtCQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBSlUseUJBQXlCO1FBRHJDLFVBQVUsRUFBRTtRQUdOLG1CQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTt5REFBbUIsZUFBZSxFQUFjLHdCQUF3QjtPQUZsRix5QkFBeUIsQ0FLckM7SUFBRCxnQ0FBQztDQUFBLEFBTEQsQ0FBK0MsZUFBZSxHQUs3RDtTQUxZLHlCQUF5QjtBQU90QyxNQUFNO0lBQ0osT0FBTyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksa0JBQWtCLEVBQUUsQ0FBQztBQUN4RixDQUFDO0FBRUQsTUFBTTtJQUNKLE9BQU8sSUFBSSw0QkFBNEIsRUFBRSxDQUFDO0FBQzVDLENBQUM7QUFFRCxNQUFNLHFDQUNGLFFBQTZCLEVBQUUsTUFBdUIsRUFBRSxJQUFZO0lBQ3RFLE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlELENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxJQUFNLHFCQUFxQixHQUM5QixJQUFJLGNBQWMsQ0FBdUMscUJBQXFCLENBQUMsQ0FBQztBQUVwRixJQUFNLDBCQUEwQixHQUFlO0lBQzdDLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBQztJQUM5RCxFQUFDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsaUNBQWlDLEVBQUM7SUFDbEYsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSx5QkFBeUIsRUFBQyxFQUFFO1FBQy9ELE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsVUFBVSxFQUFFLDBCQUEwQjtRQUN0QyxJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxDQUFDO0tBQ3JEO0NBQ0YsQ0FBQztBQUVGOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxJQUFNLDRCQUE0QjtJQUN2QyxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLG1DQUFtQyxFQUFDO0lBQzNFLEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBQztHQUFLLDBCQUEwQixDQUMvRixDQUFDO0FBRUY7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLElBQU0saUNBQWlDO0lBQzVDLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUM7SUFDekQsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFDO0dBQUssMEJBQTBCLENBQzVGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0FuaW1hdGlvbkRyaXZlciwgybVBbmltYXRpb25FbmdpbmUgYXMgQW5pbWF0aW9uRW5naW5lLCDJtUFuaW1hdGlvblN0eWxlTm9ybWFsaXplciBhcyBBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIsIMm1Q3NzS2V5ZnJhbWVzRHJpdmVyIGFzIENzc0tleWZyYW1lc0RyaXZlciwgybVOb29wQW5pbWF0aW9uRHJpdmVyIGFzIE5vb3BBbmltYXRpb25Ecml2ZXIsIMm1V2ViQW5pbWF0aW9uc0RyaXZlciBhcyBXZWJBbmltYXRpb25zRHJpdmVyLCDJtVdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXIgYXMgV2ViQW5pbWF0aW9uc1N0eWxlTm9ybWFsaXplciwgybVzdXBwb3J0c1dlYkFuaW1hdGlvbnMgYXMgc3VwcG9ydHNXZWJBbmltYXRpb25zfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zL2Jyb3dzZXInO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgTmdab25lLCBQcm92aWRlciwgUmVuZGVyZXJGYWN0b3J5Mn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge8m1RG9tUmVuZGVyZXJGYWN0b3J5MiBhcyBEb21SZW5kZXJlckZhY3RvcnkyfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnLi9hbmltYXRpb25fYnVpbGRlcic7XG5pbXBvcnQge0FuaW1hdGlvblJlbmRlcmVyRmFjdG9yeX0gZnJvbSAnLi9hbmltYXRpb25fcmVuZGVyZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5qZWN0YWJsZUFuaW1hdGlvbkVuZ2luZSBleHRlbmRzIEFuaW1hdGlvbkVuZ2luZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgQEluamVjdChET0NVTUVOVCkgZG9jOiBhbnksIGRyaXZlcjogQW5pbWF0aW9uRHJpdmVyLCBub3JtYWxpemVyOiBBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIpIHtcbiAgICBzdXBlcihkb2MuYm9keSwgZHJpdmVyLCBub3JtYWxpemVyKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGVTdXBwb3J0ZWRBbmltYXRpb25Ecml2ZXIoKSB7XG4gIHJldHVybiBzdXBwb3J0c1dlYkFuaW1hdGlvbnMoKSA/IG5ldyBXZWJBbmltYXRpb25zRHJpdmVyKCkgOiBuZXcgQ3NzS2V5ZnJhbWVzRHJpdmVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZURlZmF1bHRTdHlsZU5vcm1hbGl6ZXIoKSB7XG4gIHJldHVybiBuZXcgV2ViQW5pbWF0aW9uc1N0eWxlTm9ybWFsaXplcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGVSZW5kZXJlckZhY3RvcnkoXG4gICAgcmVuZGVyZXI6IERvbVJlbmRlcmVyRmFjdG9yeTIsIGVuZ2luZTogQW5pbWF0aW9uRW5naW5lLCB6b25lOiBOZ1pvbmUpIHtcbiAgcmV0dXJuIG5ldyBBbmltYXRpb25SZW5kZXJlckZhY3RvcnkocmVuZGVyZXIsIGVuZ2luZSwgem9uZSk7XG59XG5cbi8qKlxuICogQGV4cGVyaW1lbnRhbCBBbmltYXRpb24gc3VwcG9ydCBpcyBleHBlcmltZW50YWwuXG4gKi9cbmV4cG9ydCBjb25zdCBBTklNQVRJT05fTU9EVUxFX1RZUEUgPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjwnTm9vcEFuaW1hdGlvbnMnfCdCcm93c2VyQW5pbWF0aW9ucyc+KCdBbmltYXRpb25Nb2R1bGVUeXBlJyk7XG5cbmNvbnN0IFNIQVJFRF9BTklNQVRJT05fUFJPVklERVJTOiBQcm92aWRlcltdID0gW1xuICB7cHJvdmlkZTogQW5pbWF0aW9uQnVpbGRlciwgdXNlQ2xhc3M6IEJyb3dzZXJBbmltYXRpb25CdWlsZGVyfSxcbiAge3Byb3ZpZGU6IEFuaW1hdGlvblN0eWxlTm9ybWFsaXplciwgdXNlRmFjdG9yeTogaW5zdGFudGlhdGVEZWZhdWx0U3R5bGVOb3JtYWxpemVyfSxcbiAge3Byb3ZpZGU6IEFuaW1hdGlvbkVuZ2luZSwgdXNlQ2xhc3M6IEluamVjdGFibGVBbmltYXRpb25FbmdpbmV9LCB7XG4gICAgcHJvdmlkZTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICB1c2VGYWN0b3J5OiBpbnN0YW50aWF0ZVJlbmRlcmVyRmFjdG9yeSxcbiAgICBkZXBzOiBbRG9tUmVuZGVyZXJGYWN0b3J5MiwgQW5pbWF0aW9uRW5naW5lLCBOZ1pvbmVdXG4gIH1cbl07XG5cbi8qKlxuICogU2VwYXJhdGUgcHJvdmlkZXJzIGZyb20gdGhlIGFjdHVhbCBtb2R1bGUgc28gdGhhdCB3ZSBjYW4gZG8gYSBsb2NhbCBtb2RpZmljYXRpb24gaW4gR29vZ2xlMyB0b1xuICogaW5jbHVkZSB0aGVtIGluIHRoZSBCcm93c2VyTW9kdWxlLlxuICovXG5leHBvcnQgY29uc3QgQlJPV1NFUl9BTklNQVRJT05TX1BST1ZJREVSUzogUHJvdmlkZXJbXSA9IFtcbiAge3Byb3ZpZGU6IEFuaW1hdGlvbkRyaXZlciwgdXNlRmFjdG9yeTogaW5zdGFudGlhdGVTdXBwb3J0ZWRBbmltYXRpb25Ecml2ZXJ9LFxuICB7cHJvdmlkZTogQU5JTUFUSU9OX01PRFVMRV9UWVBFLCB1c2VWYWx1ZTogJ0Jyb3dzZXJBbmltYXRpb25zJ30sIC4uLlNIQVJFRF9BTklNQVRJT05fUFJPVklERVJTXG5dO1xuXG4vKipcbiAqIFNlcGFyYXRlIHByb3ZpZGVycyBmcm9tIHRoZSBhY3R1YWwgbW9kdWxlIHNvIHRoYXQgd2UgY2FuIGRvIGEgbG9jYWwgbW9kaWZpY2F0aW9uIGluIEdvb2dsZTMgdG9cbiAqIGluY2x1ZGUgdGhlbSBpbiB0aGUgQnJvd3NlclRlc3RpbmdNb2R1bGUuXG4gKi9cbmV4cG9ydCBjb25zdCBCUk9XU0VSX05PT1BfQU5JTUFUSU9OU19QUk9WSURFUlM6IFByb3ZpZGVyW10gPSBbXG4gIHtwcm92aWRlOiBBbmltYXRpb25Ecml2ZXIsIHVzZUNsYXNzOiBOb29wQW5pbWF0aW9uRHJpdmVyfSxcbiAge3Byb3ZpZGU6IEFOSU1BVElPTl9NT0RVTEVfVFlQRSwgdXNlVmFsdWU6ICdOb29wQW5pbWF0aW9ucyd9LCAuLi5TSEFSRURfQU5JTUFUSU9OX1BST1ZJREVSU1xuXTtcbiJdfQ==
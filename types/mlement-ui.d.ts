import Vue, { PluginObject } from 'vue';
import { MlementUIComponent } from './component';

import { MlSpan } from './span';
import { MlStatus } from './status';
import { MlProgress } from './progress';
import { MlToggleDiv } from './toggle-div';

/** The version of element-ui */
export const version: string

/**
 * Install all element-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(ElementUI)` to install.
 */
export function install (vue: typeof Vue): void;

/** ElementUI component common definition */
export type Component = MlementUIComponent;

// TS cannot merge imported class with namespace, so declare subclasses instead

/** Alert Component */
export class Span extends MlSpan {}
export class Status extends MlStatus {}
export class Progress extends MlProgress {}
export class ToggleDiv extends MlToggleDiv {}

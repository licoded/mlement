import { MlementUIComponent } from './component'

/** Status type */
export type StatusType = 'bootstrap' | 'doing' | 'done'

/** Status Component */
export declare class MlStatus extends MlementUIComponent {
  /** Status type */
  type: StatusType
}

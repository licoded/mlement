import { MlementUIComponent } from './component'

/** Progress type */
export type ProgressType = 'info' | 'title'

/** Align Type */
export type AlignType = 'left' | 'right'

/** Progress Component */
export declare class MlProgress extends MlementUIComponent {
  /** align */
  align: AlignType

  /** height(px) */
  height: Number

  /** percentage */
  percentage: Number

  /** color */
  color: String
}
